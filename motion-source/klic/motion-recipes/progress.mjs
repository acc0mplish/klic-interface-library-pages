const pair=(ko,en)=>({ko,en});
const linear=keyframes=>({easing:'linear',keyframes});
const holdTrack=(selector,milestone,property,start,end)=>{
 if(milestone<=.03)return {selector,...linear([{offset:0,[property]:end},{offset:1,[property]:end}])};
 const transitionStart=Math.max(0,milestone-.03),keyframes=[{offset:0,[property]:start},{offset:transitionStart,[property]:start},{offset:milestone,[property]:end}];
 if(milestone<1)keyframes.push({offset:1,[property]:end});
 return {selector,...linear(keyframes)};
};

const progressStyle=`
<style>
.klic-progress{display:block;width:100%;height:100%;color:var(--klic-semantic-color-text,#132c46);font-family:var(--klic-component-text-body-font-family,system-ui,sans-serif)}
.klic-progress text{font-family:inherit}
.klic-progress .panel{fill:var(--klic-semantic-color-panel,#fff);stroke:var(--klic-semantic-color-border,#dfe5ee)}
.klic-progress .track{stroke:var(--klic-semantic-color-border,#dfe5ee)}
.klic-progress .fill{stroke:var(--klic-semantic-color-accent,#245FC2)}
.klic-progress .node{fill:var(--klic-semantic-color-panel,#fff);stroke:var(--klic-semantic-color-control-border,#7e8fa7)}
.klic-progress .number,.klic-progress .meta{fill:var(--klic-semantic-color-muted,#52657b)}
.klic-progress .label,.klic-progress .step-title{fill:var(--klic-semantic-color-text,#132c46)}
.klic-progress .detail{fill:var(--klic-semantic-color-muted,#52657b)}
.klic-progress .active-marker{fill:var(--klic-semantic-color-panel,#fff);stroke:var(--klic-semantic-color-accent,#245FC2)}
.klic-progress .check{fill:none;stroke:var(--klic-semantic-color-accent,#245FC2);stroke-linecap:round;stroke-linejoin:round;opacity:0}
</style>`;

const horizontalNodes=[42,121,200,279];
const horizontalMarkup=`${progressStyle}<svg class="klic-progress klic-progress-horizontal" viewBox="0 0 320 200" role="img" aria-label="가로 단계 진행 예시">
 <title>가로 단계 진행</title>
 <desc>짧은 단계 이름을 한 줄 레일에 놓고 현재 단계를 왼쪽에서 오른쪽으로 이동합니다.</desc>
 <rect class="panel" x="16" y="34" width="288" height="126" rx="14" stroke-width="1"/>
 <text class="meta" x="32" y="58" font-size="10" letter-spacing=".08em">설정 절차</text>
 <text class="meta" x="288" y="58" text-anchor="end" font-size="10">단계 진행</text>
 <line class="track" x1="${horizontalNodes[0]}" y1="99" x2="${horizontalNodes[3]}" y2="99" stroke-width="3" stroke-linecap="round"/>
 <path class="fill horizontal-fill" d="M ${horizontalNodes[0]} 99 H ${horizontalNodes[3]}" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1" stroke-width="3" stroke-linecap="round"/>
 ${horizontalNodes.map((x,index)=>`<circle class="node" cx="${x}" cy="99" r="11" stroke-width="1.5"/><text class="number number-${index+1}" x="${x}" y="103" text-anchor="middle" font-size="10">${index+1}</text><path class="check check-${index+1}" d="M ${x-4} 99 l3 3 6 -7" stroke-width="2"/><text class="label label-${index+1}" x="${x}" y="129" text-anchor="middle" font-size="10">${['요청','검토','승인','적용'][index]}</text>`).join('')}
 <circle class="active-marker" cx="${horizontalNodes[0]}" cy="99" r="15" stroke-width="1.5"/>
</svg>`;

const verticalNodes=[46,100,154];
const verticalMarkup=`${progressStyle}<svg class="klic-progress klic-progress-vertical" viewBox="0 0 320 200" role="img" aria-label="세로 상태 타임라인 예시">
 <title>세로 상태 타임라인</title>
 <desc>각 이벤트의 설명과 시각을 세로 레일에 놓고 활성 진행점을 위에서 아래로 이동합니다.</desc>
 ${verticalNodes.map((y,index)=>`<rect class="panel" x="56" y="${y-24}" width="248" height="48" rx="9" stroke-width="1"/>`).join('')}
 <line class="track" x1="36" y1="${verticalNodes[0]}" x2="36" y2="${verticalNodes[2]}" stroke-width="2.5" stroke-linecap="round"/>
 <path class="fill vertical-fill" d="M 36 ${verticalNodes[0]} V ${verticalNodes[2]}" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1" stroke-width="2.5" stroke-linecap="round"/>
 ${verticalNodes.map((y,index)=>`<circle class="node" cx="36" cy="${y}" r="9" stroke-width="1.5"/><text class="number number-${index+1}" x="36" y="${y+3}" text-anchor="middle" font-size="8">${index+1}</text><path class="check check-${index+1}" d="M 32 ${y} l2.5 2.5 5 -5" stroke-width="1.8"/>`).join('')}
 <circle class="active-marker" cx="36" cy="${verticalNodes[0]}" r="13" stroke-width="1.5"/>
 <text class="step-title step-title-1" x="72" y="${verticalNodes[0]-3}" font-size="11" font-weight="650">요청 등록</text>
 <text class="detail" x="72" y="${verticalNodes[0]+11}" font-size="9">필수 정보를 확인합니다</text>
 <text class="meta" x="288" y="${verticalNodes[0]-2}" text-anchor="end" font-size="9">09:10</text>
 <text class="step-title step-title-2" x="72" y="${verticalNodes[1]-3}" font-size="11" font-weight="650">자료 검토</text>
 <text class="detail" x="72" y="${verticalNodes[1]+11}" font-size="9">담당자가 내용을 살핍니다</text>
 <text class="meta" x="288" y="${verticalNodes[1]-2}" text-anchor="end" font-size="9">09:18</text>
 <text class="step-title step-title-3" x="72" y="${verticalNodes[2]-3}" font-size="11" font-weight="650">결과 전달</text>
 <text class="detail" x="72" y="${verticalNodes[2]+11}" font-size="9">검토가 끝나면 알려드립니다</text>
 <text class="meta" x="288" y="${verticalNodes[2]-2}" text-anchor="end" font-size="9">09:24</text>
</svg>`;

const horizontalMilestones=[.25,.5,.75,1];
const verticalMilestones=[.5,.75,1];
const recipes=[
 {
  id:'horizontal-step-rail',pattern:'klicHorizontalStepRail',category:'data-story',
  title:pair('가로 단계 레일','Horizontal Step Rail'),
  summary:pair('짧은 단계명을 한 줄에 배치하고 진행선·숫자·체크로 요청부터 적용까지 이어 보입니다.','Places concise stage names on one row and carries progress from request to completion with a line, index and checks.'),
  trigger:pair('재생하면 가로 레일을 따라 현재 단계가 이동하고 지난 단계가 체크로 바뀝니다.','Playback moves the active marker along a horizontal rail and checks off completed stages.'),
  durationMs:3600,easing:'linear',
  useCases:[pair('이름이 짧은 3–5단계 설정 흐름','Three to five step setup flows with short labels'),pair('화면 너비를 아껴야 하는 진행 안내','Progress guidance that needs to conserve horizontal space')],
  cautions:[pair('단계명이 길거나 단계가 많으면 세로 타임라인을 사용합니다.','Use a vertical timeline when labels are long or there are many stages.')],
  reducedMotion:pair('마지막 단계까지 완료된 상태를 정지 화면으로 표시합니다.','Show a still frame with the sequence completed.'),
  preview:{description:pair('짧은 단계명과 한 줄 진행 레일로 순서를 압축합니다.','Compresses the sequence into short labels and one horizontal progress rail.'),sample:pair('4단계 흐름','4-stage sequence')},
  definition:{html:horizontalMarkup,duration:3600,easing:'linear',segmentEasing:false,reducedProgress:1,tracks:[
   {selector:'.horizontal-fill',...linear([{offset:0,strokeDashoffset:'1'},{offset:.25,strokeDashoffset:'0.6667'},{offset:.5,strokeDashoffset:'0.3333'},{offset:.75,strokeDashoffset:'0'},{offset:1,strokeDashoffset:'0'}])},
   {selector:'.active-marker',...linear([{offset:0,cx:'42px',opacity:'1'},{offset:.25,cx:'121px',opacity:'1'},{offset:.5,cx:'200px',opacity:'1'},{offset:.75,cx:'279px',opacity:'1'},{offset:.97,cx:'279px',opacity:'1'},{offset:1,cx:'279px',opacity:'0'}])},
   ...horizontalNodes.map((_,index)=>holdTrack(`.check-${index+1}`,horizontalMilestones[index],'opacity','0','1')),
   ...horizontalNodes.map((_,index)=>holdTrack(`.number-${index+1}`,horizontalMilestones[index],'opacity','1','0')),
   ...horizontalNodes.map((_,index)=>holdTrack(`.label-${index+1}`,index===0?0:horizontalMilestones[index-1],'fill',index===0?'var(--klic-semantic-color-accent,#245FC2)':'var(--klic-semantic-color-muted,#52657b)','var(--klic-semantic-color-accent,#245FC2)'))
  ]}
 },
 {
  id:'vertical-status-timeline',pattern:'klicVerticalStatusTimeline',category:'data-story',
  title:pair('세로 상태 타임라인','Vertical Status Timeline'),
  summary:pair('설명과 시각을 각 이벤트 옆에 두고 활성 진행점을 위에서 아래로 이동합니다.','Places a description and time beside each event, then moves the active marker from top to bottom.'),
  trigger:pair('재생하면 세로 레일이 채워지고 완료 단계에는 파란 체크가 남습니다.','Playback fills the vertical rail and leaves a blue check on each completed stage.'),
  durationMs:3600,easing:'linear',
  useCases:[pair('검토·승인처럼 설명과 시각이 필요한 상태 기록','Status histories such as review and approval that need descriptions and times'),pair('단계명이 길거나 세부 정보를 함께 보여 주는 흐름','Flows with longer labels or supporting details')],
  cautions:[pair('세로 공간이 부족하면 단계를 짧게 줄여 가로 레일을 사용합니다.','Use the horizontal rail with shorter labels when vertical space is limited.')],
  reducedMotion:pair('시간순 상태를 정지 목록으로 표시하고 완료·대기 상태를 텍스트로 구분합니다.','Show the events as a still chronological list with text for completed and pending states.'),
  preview:{description:pair('이벤트 설명과 시각을 세로로 읽으며 현재 단계를 확인합니다.','Read event descriptions and times vertically while tracking the current stage.'),sample:pair('상태 기록','Status history')},
  definition:{html:verticalMarkup,duration:3600,easing:'linear',segmentEasing:false,reducedProgress:1,tracks:[
   {selector:'.vertical-fill',...linear([{offset:0,strokeDashoffset:'1'},{offset:.5,strokeDashoffset:'0.5'},{offset:.75,strokeDashoffset:'0'},{offset:1,strokeDashoffset:'0'}])},
   {selector:'.active-marker',...linear([{offset:0,cy:'46px',opacity:'1'},{offset:.5,cy:'100px',opacity:'1'},{offset:.75,cy:'154px',opacity:'1'},{offset:.97,cy:'154px',opacity:'1'},{offset:1,cy:'154px',opacity:'0'}])},
   ...verticalNodes.map((_,index)=>holdTrack(`.check-${index+1}`,verticalMilestones[index],'opacity','0','1')),
   ...verticalNodes.map((_,index)=>holdTrack(`.number-${index+1}`,verticalMilestones[index],'opacity','1','0')),
   ...verticalNodes.map((_,index)=>holdTrack(`.step-title-${index+1}`,index===0?0:verticalMilestones[index-1],'fill',index===0?'var(--klic-semantic-color-accent,#245FC2)':'var(--klic-semantic-color-muted,#52657b)','var(--klic-semantic-color-accent,#245FC2)'))
  ]}
 }
];

export const KLIC_PROGRESS_NOTICE='motion-source/klic/motion-recipes/NOTICE.md';
export const KLIC_PROGRESS_RECIPES=Object.freeze(recipes);
