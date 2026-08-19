(() => {
  const pageCache = new Map();
  const parser = new DOMParser();
  let navigationId = 0;
  let scrollFrame;

  const getInternalUrl = (link) => {
    if (
      (link.target && link.target !== "_self") ||
      link.hasAttribute("download") ||
      link.dataset.noRouter !== undefined
    ) {
      return null;
    }

    const url = new URL(link.href, window.location.href);

    if (url.origin !== window.location.origin || !["http:", "https:"].includes(url.protocol)) {
      return null;
    }

    return url;
  };

  const fetchPage = (url) => {
    const cacheKey = url.href;

    if (!pageCache.has(cacheKey)) {
      const request = fetch(cacheKey, {
        headers: { Accept: "text/html" },
      })
        .then(async (response) => {
          const contentType = response.headers.get("content-type") || "";

          if (!response.ok || !contentType.includes("text/html")) {
            throw new Error(`Unable to load ${url.pathname}`);
          }

          const document = parser.parseFromString(await response.text(), "text/html");

          if (!document.querySelector("header") || !document.querySelector("main")) {
            throw new Error(`Invalid page returned for ${url.pathname}`);
          }

          const resolvedUrl = new URL(response.url);
          resolvedUrl.hash = url.hash;

          return { document, url: resolvedUrl };
        })
        .catch((error) => {
          pageCache.delete(cacheKey);
          throw error;
        });

      pageCache.set(cacheKey, request);
    }

    return pageCache.get(cacheKey);
  };

  const updateMetadata = (nextDocument) => {
    document.title = nextDocument.title;
    document.documentElement.lang = nextDocument.documentElement.lang || "en";
    document.body.className = nextDocument.body.className;

    const currentDescription = document.querySelector('meta[name="description"]');
    const nextDescription = nextDocument.querySelector('meta[name="description"]');

    if (currentDescription && nextDescription) {
      currentDescription.content = nextDescription.content;
    }
  };

  const replacePage = (nextDocument) => {
    const currentHeader = document.querySelector("header");
    const currentMain = document.querySelector("main");
    const nextHeader = nextDocument.querySelector("header").cloneNode(true);
    const nextMain = nextDocument.querySelector("main").cloneNode(true);

    currentHeader.replaceWith(nextHeader);
    currentMain.replaceWith(nextMain);
    updateMetadata(nextDocument);
  };

  const focusPage = () => {
    const main = document.querySelector("main");
    main.tabIndex = -1;
    main.focus({ preventScroll: true });
    main.addEventListener("blur", () => main.removeAttribute("tabindex"), { once: true });
  };

  const navigate = async (url, { push = true, scrollPosition = { x: 0, y: 0 } } = {}) => {
    const thisNavigation = ++navigationId;
    const currentMain = document.querySelector("main");
    currentMain?.setAttribute("aria-busy", "true");

    try {
      const page = await fetchPage(url);

      if (thisNavigation !== navigationId) {
        return;
      }

      if (push) {
        history.replaceState(
          { ...history.state, router: true, scrollX: window.scrollX, scrollY: window.scrollY },
          "",
          window.location.href,
        );
        history.pushState({ router: true, scrollX: 0, scrollY: 0 }, "", page.url.href);
      }

      const update = () => replacePage(page.document);
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (document.startViewTransition && !reduceMotion) {
        await document.startViewTransition(update).finished;
      } else {
        update();
      }

      focusPage();

      if (page.url.hash) {
        document.getElementById(decodeURIComponent(page.url.hash.slice(1)))?.scrollIntoView();
      } else {
        window.scrollTo(scrollPosition.x, scrollPosition.y);
      }
    } catch (error) {
      if (thisNavigation === navigationId) {
        window.location.assign(url.href);
      }
    } finally {
      if (thisNavigation === navigationId) {
        document.querySelector("main")?.removeAttribute("aria-busy");
      }
    }
  };

  history.scrollRestoration = "manual";
  history.replaceState(
    { ...history.state, router: true, scrollX: window.scrollX, scrollY: window.scrollY },
    "",
    window.location.href,
  );

  document.addEventListener("click", (event) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const link = event.target.closest("a[href]");
    const url = link && getInternalUrl(link);

    if (!url) {
      return;
    }

    const samePage = url.pathname === window.location.pathname && url.search === window.location.search;

    if (samePage && url.hash) {
      return;
    }

    event.preventDefault();

    if (url.href === window.location.href) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    navigate(url);
  });

  const prefetchLink = (event) => {
    const link = event.target.closest?.("a[href]");
    const url = link && getInternalUrl(link);

    if (url && url.href !== window.location.href) {
      fetchPage(url).catch(() => {});
    }
  };

  document.addEventListener("pointerover", prefetchLink, { passive: true });
  document.addEventListener("focusin", prefetchLink);

  window.addEventListener("scroll", () => {
    if (scrollFrame) {
      return;
    }

    scrollFrame = window.requestAnimationFrame(() => {
      history.replaceState(
        { ...history.state, router: true, scrollX: window.scrollX, scrollY: window.scrollY },
        "",
        window.location.href,
      );
      scrollFrame = undefined;
    });
  }, { passive: true });

  window.addEventListener("popstate", (event) => {
    navigate(new URL(window.location.href), {
      push: false,
      scrollPosition: {
        x: event.state?.scrollX || 0,
        y: event.state?.scrollY || 0,
      },
    });
  });
})();
