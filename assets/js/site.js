(function () {
  const projects = window.portfolioProjects || [];
  const LINKEDIN_URL = "https://www.linkedin.com/in/anthony-hayes-033423232/";

  function text(value) {
    return String(value || "");
  }

  function el(tag, className, content) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (content !== undefined) node.textContent = content;
    return node;
  }

  function projectUrl(slug) {
    const prefix = document.body.dataset.page === "project" ? "" : "project/";
    return `${prefix}?slug=${encodeURIComponent(slug)}`;
  }

  function appendTags(parent, tags) {
    if (!tags || !tags.length) return;
    const list = el("ul", "tag-list");
    tags.forEach((tag) => { const item = el("li", "tag", tag); list.appendChild(item); });
    parent.appendChild(list);
  }

  function renderFeaturedProjects() {
    const target = document.getElementById("featured-projects");
    if (!target) return;
    target.innerHTML = "";
    projects.filter((project) => project.featured).slice(0, 4).forEach((project) => {
      const article = el("article", "project-card");
      const top = el("div", "card-top");
      top.appendChild(el("span", "status", project.status));
      top.appendChild(el("span", "category", project.category));
      article.appendChild(top);
      article.appendChild(el("h3", "", project.shortTitle || project.title));
      if (project.attribution) article.appendChild(el("p", "attribution", project.attribution));
      article.appendChild(el("p", "research-question", project.researchQuestion));
      article.appendChild(el("p", "", project.shortSummary));
      appendTags(article, project.methods);
      const links = el("div", "card-links");
      const caseLink = el("a", "case-link", "View case study");
      caseLink.href = projectUrl(project.slug);
      links.appendChild(caseLink);
      [["Repository", project.repositoryUrl], ["Report", project.reportUrl], ["Demo", project.demoUrl]].forEach(([label, url]) => {
        if (url) { const a = el("a", "", label); a.href = url; links.appendChild(a); }
      });
      (project.documentLinks || []).forEach((doc) => {
        if (doc && doc.url && doc.label) { const a = el("a", "", doc.label); a.href = doc.url; links.appendChild(a); }
      });
      article.appendChild(links);
      target.appendChild(article);
    });
  }

  function appendListSection(parent, title, value) {
    if (!value || (Array.isArray(value) && value.length === 0)) return;
    const section = el("section", "case-section");
    section.appendChild(el("h2", "", title));
    if (Array.isArray(value)) {
      const list = el("ul", "case-list");
      value.forEach((item) => { const li = el("li", ""); li.textContent = item; list.appendChild(li); });
      section.appendChild(list);
    } else {
      section.appendChild(el("p", "", value));
    }
    parent.appendChild(section);
  }

  function renderArchitecture(parent, architecture) {
    if (!architecture || !architecture.length) return;
    const section = el("section", "case-section");
    section.appendChild(el("h2", "", "Model or system design"));
    architecture.forEach((block) => {
      const wrapper = el("div", "architecture-block");
      wrapper.appendChild(el("h3", "", block.label));
      const flow = el("ol", "architecture-flow");
      (block.items || []).forEach((item) => { const li = el("li", "", item); flow.appendChild(li); });
      wrapper.appendChild(flow);
      section.appendChild(wrapper);
    });
    parent.appendChild(section);
  }

  function renderFigures(parent, figures) {
    if (!figures || !figures.length) return;
    const section = el("section", "case-section");
    section.appendChild(el("h2", "", "Figures and outputs"));
    const grid = el("div", "figure-grid");
    figures.forEach((figure) => {
      if (!figure || !figure.src || !figure.alt) return;
      const wrapper = el("figure", "case-figure");
      const image = el("img", "");
      image.src = figure.src;
      image.alt = figure.alt;
      image.loading = "lazy";
      wrapper.appendChild(image);
      if (figure.caption) wrapper.appendChild(el("figcaption", "", figure.caption));
      grid.appendChild(wrapper);
    });
    if (grid.children.length) {
      section.appendChild(grid);
      parent.appendChild(section);
    }
  }

  function renderCaseStudy() {
    const target = document.getElementById("case-study");
    if (!target) return;
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("slug");
    const project = projects.find((item) => item.slug === slug) || projects[0];
    document.title = `${project.shortTitle || project.title} | Anthony Hayes`;

    const back = el("a", "back-link", "← Back to selected work");
    back.href = "../#selected-work";
    target.appendChild(back);
    const header = el("header", "case-header");
    header.appendChild(el("p", "eyebrow", project.category));
    header.appendChild(el("h1", "", project.title));
    if (project.attribution) header.appendChild(el("p", "attribution", project.attribution));
    header.appendChild(el("p", "lede", project.fullSummary || project.shortSummary));
    const meta = el("dl", "case-meta");
    [["Status", project.status], ["Last substantive update", project.lastUpdated]].forEach(([k, v]) => { const div = el("div", ""); div.appendChild(el("dt", "", k)); div.appendChild(el("dd", "", v)); meta.appendChild(div); });
    header.appendChild(meta);
    target.appendChild(header);

    appendListSection(target, "Project summary", project.fullSummary || project.shortSummary);
    appendListSection(target, "Attribution", project.attribution);
    appendListSection(target, "Status and evidence level", `Status: ${project.status}. ${project.currentOutputs ? project.currentOutputs.join(" ") : ""}`);
    appendListSection(target, "Research question", project.researchQuestion);
    appendListSection(target, "Why it matters", project.whyItMatters);
    renderArchitecture(target, project.architecture);
    appendListSection(target, "Data", project.data);
    appendListSection(target, "Methodology", project.methods);
    appendListSection(target, "Assumptions", project.assumptions);
    appendListSection(target, "Evaluation framework", project.evaluation);
    appendListSection(target, "Results or current outputs", project.findings || project.currentOutputs);
    appendListSection(target, "Trading frictions", project.tradingFrictions);
    appendListSection(target, "Risk controls", project.riskControls);
    appendListSection(target, "Limitations", project.limitations);
    appendListSection(target, "Next steps", project.nextSteps);
    appendListSection(target, "Technologies", project.technologies);
    renderFigures(target, project.figures);

    const linkPairs = [["Repository", project.repositoryUrl], ["Report", project.reportUrl], ["Demo", project.demoUrl]].filter((pair) => pair[1]);
    const documentPairs = (project.documentLinks || []).filter((doc) => doc && doc.url && doc.label).map((doc) => [doc.type ? `${doc.label} (${doc.type})` : doc.label, doc.url]);
    if (linkPairs.length || documentPairs.length) {
      const section = el("section", "case-section");
      section.appendChild(el("h2", "", "Repository, report and demo links"));
      const links = el("div", "card-links");
      linkPairs.concat(documentPairs).forEach(([label, url]) => { const a = el("a", "case-link", label); a.href = url; links.appendChild(a); });
      section.appendChild(links);
      target.appendChild(section);
    }
    appendListSection(target, "Last substantive update", project.lastUpdated);
  }

  function appendVerifiedLinkedIn() {
    const heroActions = document.querySelector ? document.querySelector(".hero-actions") : null;
    const contactLinks = document.querySelector ? document.querySelector(".contact-links") : null;
    if (heroActions && !heroActions.querySelector('a[href="' + LINKEDIN_URL + '"]')) {
      const heroLink = el("a", "button", "LinkedIn");
      heroLink.href = LINKEDIN_URL;
      heroActions.appendChild(heroLink);
    }
    if (contactLinks && !contactLinks.querySelector('a[href="' + LINKEDIN_URL + '"]')) {
      const contactLink = el("a", "", "linkedin.com/in/anthony-hayes-033423232");
      contactLink.href = LINKEDIN_URL;
      contactLinks.appendChild(contactLink);
    }
  }

  appendVerifiedLinkedIn();
  renderFeaturedProjects();
  renderCaseStudy();
})();
