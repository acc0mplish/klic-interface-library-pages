(() => {
  const prefix = "/klic-interface-library-pages";
  const thumbnailRevision = "60926af5e022331f";
  const rewrite = (element) => {
    for (const attribute of ["href", "src", "action"]) {
      const value = element.getAttribute(attribute);
      if (!value) continue;
      let next = value;
      if (value.startsWith("/") && !value.startsWith("//")
        && value !== prefix && !value.startsWith(prefix + "/")) {
        next = prefix + value;
      }
      if (attribute === "src" && element.tagName === "IFRAME") {
        try {
          const url = new URL(next, document.baseURI);
          if (url.origin === location.origin
            && url.pathname.includes(prefix + "/block-thumbnails/")
            && url.pathname.endsWith(".html")
            && url.searchParams.get("v") !== thumbnailRevision) {
            url.searchParams.set("v", thumbnailRevision);
            next = url.pathname + url.search + url.hash;
          }
        } catch {}
      }
      if (next !== value) element.setAttribute(attribute, next);
    }
  };
  const scan = (node) => {
    if (!(node instanceof Element)) return;
    rewrite(node);
    node.querySelectorAll("[href], [src], [action]").forEach(rewrite);
  };
  document.querySelectorAll("[href], [src], [action]").forEach(rewrite);
  new MutationObserver((records) => {
    for (const record of records) {
      if (record.type === "attributes") rewrite(record.target);
      else record.addedNodes.forEach(scan);
    }
  }).observe(document.documentElement, {
    subtree: true,
    childList: true,
    attributes: true,
    attributeFilter: ["href", "src", "action"],
  });
  document.addEventListener("click", (event) => {
    const link = event.target.closest?.("a[href]");
    if (link) rewrite(link);
  }, true);
})();
