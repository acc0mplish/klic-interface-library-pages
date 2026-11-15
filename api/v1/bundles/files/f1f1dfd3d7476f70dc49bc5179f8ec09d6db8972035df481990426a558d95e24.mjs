const htmlProps={className:'class',htmlFor:'for',tabIndex:'tabindex',readOnly:'readonly',autoFocus:'autofocus',autoComplete:'autocomplete',spellCheck:'spellcheck',contentEditable:'contenteditable',crossOrigin:'crossorigin',acceptCharset:'accept-charset',srcSet:'srcset',rowSpan:'rowspan',colSpan:'colspan',maxLength:'maxlength',minLength:'minlength',defaultValue:'value',defaultChecked:'checked'};
const svgProps={strokeWidth:'stroke-width',strokeLinecap:'stroke-linecap',strokeLinejoin:'stroke-linejoin',strokeDasharray:'stroke-dasharray',strokeDashoffset:'stroke-dashoffset',strokeMiterlimit:'stroke-miterlimit',fillRule:'fill-rule',clipRule:'clip-rule',fillOpacity:'fill-opacity',strokeOpacity:'stroke-opacity',fontFamily:'font-family',fontSize:'font-size',fontWeight:'font-weight',textAnchor:'text-anchor',dominantBaseline:'dominant-baseline',markerEnd:'marker-end',markerStart:'marker-start',markerMid:'marker-mid',vectorEffect:'vector-effect',shapeRendering:'shape-rendering',stopColor:'stop-color',stopOpacity:'stop-opacity',pointerEvents:'pointer-events'};
const svgTags=new Set(['svg','path','circle','ellipse','rect','line','polyline','polygon','g','text','tspan','defs','linearGradient','radialGradient','stop','clipPath','mask','pattern','marker','foreignObject','symbol','use']);
const vueImportSources=new Set(['lucide-react','@ui-sdk/react/dialog','framer-motion','vue','klic-vue-compat']);
const localName=node=>node?.type==='JSXIdentifier'?node.name:null;
const jsxNameToExpression=(name,types)=>{
 if(name?.type==='JSXIdentifier')return types.identifier(name.name);
 if(name?.type==='JSXMemberExpression')return types.memberExpression(jsxNameToExpression(name.object,types),types.identifier(name.property.name));
 throw new TypeError(`Unsupported JSX component name: ${name?.type||'unknown'}`);
};
const canonicalEvent=name=>{
 const suffix=['Once','Passive','Capture'].find(value=>name.endsWith(value))||'';
 let event=name.slice(2,suffix? -suffix.length:undefined);
 if(event==='DoubleClick')event='Dblclick';
 event=event.toLowerCase();
 return 'on'+event[0].toUpperCase()+event.slice(1)+suffix;
};

/** Adapts React JSX prop spelling and function-component children before Vue's JSX transform runs. */
export default function reactJsxAdapter({types:t}){
 return {name:'klic-react-jsx-adapter',visitor:{Program:{enter(path){
  const vueImports=new Set(['ReactComponent','Fragment','Suspense']);
  for(const node of path.node.body){
   if(node.type!=='ImportDeclaration')continue;
   const source=node.source.value;
   if(vueImportSources.has(source))for(const specifier of node.specifiers)vueImports.add(specifier.local.name);
   if(source==='react')for(const specifier of node.specifiers)if(specifier.imported?.name==='Fragment'||specifier.imported?.name==='Suspense')vueImports.add(specifier.local.name);
  }
  let needsImport=false,local='KlicVueReactComponent';while(path.scope.hasBinding(local))local+='X';
  const visit=node=>{
   if(!node)return;if(Array.isArray(node)){for(const child of node)visit(child);return;}if(typeof node!=='object')return;
   if(node.type==='JSXElement'){
    const opening=node.openingElement,original=opening.name,name=localName(original),member=original?.type==='JSXMemberExpression';
    const native=Boolean(name&&name[0]===name[0].toLowerCase()),vueComponent=Boolean(name&&vueImports.has(name))||Boolean(member&&vueImports.has(localName(original.object)));
    const reactComponent=Boolean(name&&name[0]===name[0].toUpperCase()&&!vueComponent&&name!=='KlicVueReactComponent');
    if(reactComponent){
     const component=jsxNameToExpression(original,t);
     opening.attributes.unshift(t.jsxAttribute(t.jsxIdentifier('component'),t.jsxExpressionContainer(component)));
     opening.name=t.jsxIdentifier(local);if(node.closingElement)node.closingElement.name=t.jsxIdentifier(local);needsImport=true;
    }
    const activeTag=native?name:null,isSvg=Boolean(activeTag&&svgTags.has(activeTag));
    const typeAttr=opening.attributes.find(attribute=>attribute.type==='JSXAttribute'&&attribute.name?.name==='type');
    const inputType=typeAttr?.value?.type==='StringLiteral'?typeAttr.value.value.toLowerCase():'';
    for(const attribute of opening.attributes){
     if(attribute.type!=='JSXAttribute'||attribute.name?.type!=='JSXIdentifier')continue;
     const attr=attribute.name.name;if(!native&&!vueComponent&&!member)continue;
     if(native&&attr==='dangerouslySetInnerHTML'){
      attribute.name=t.jsxIdentifier('innerHTML');const value=attribute.value?.expression;
      if(value?.type==='ObjectExpression'){const html=value.properties.find(property=>(property.key?.name||property.key?.value)==='__html');if(html)attribute.value=t.jsxExpressionContainer(html.value);}
      continue;
     }
     if(native&&attr.startsWith('onChange')&&(activeTag==='textarea'||activeTag==='input'&&!['checkbox','radio','file','submit','reset','button','image'].includes(inputType))){attribute.name=t.jsxIdentifier('onInput'+attr.slice('onChange'.length));continue;}
     if(native&&attr.startsWith('on')&&attr.length>2&&/[A-Z]/.test(attr[2])){attribute.name=t.jsxIdentifier(canonicalEvent(attr));continue;}
     const mapped=htmlProps[attr]||((isSvg||vueComponent||member)?svgProps[attr]:undefined);if(mapped)attribute.name=t.jsxIdentifier(mapped);
    }
    for(const attribute of opening.attributes){if(attribute.type==='JSXAttribute'&&attribute.value?.type==='JSXExpressionContainer')visit(attribute.value.expression);else if(attribute.type==='JSXSpreadAttribute')visit(attribute.argument);}
    for(const child of node.children)visit(child);
    return;
   }
   for(const key of t.VISITOR_KEYS[node.type]||[])visit(node[key]);
  };
  visit(path.node);
  if(needsImport)path.unshiftContainer('body',t.importDeclaration([t.importSpecifier(t.identifier(local),t.identifier('ReactComponent'))],t.stringLiteral('klic-vue-compat')));
 }}}};
}
