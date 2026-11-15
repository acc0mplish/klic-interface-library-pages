(() => {
  const prefix = "/klic-interface-library-pages";
  const rewrite = (element) => {
    for (const attribute of ["href", "src", "action"]) {
      const value = element.getAttribute(attribute);
      if (!value || !value.startsWith("/") || value.startsWith("//")
        || value === prefix || value.startsWith(prefix + "/")) continue;
      element.setAttribute(attribute, prefix + value);
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
