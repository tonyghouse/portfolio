(() => {
  const storageKey = "tonyghouse-theme";
  const root = document.documentElement;

  const getTheme = () => (root.classList.contains("dark") ? "dark" : "light");

  const syncThemeControls = () => {
    const theme = getTheme();
    const isDark = theme === "dark";

    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      button.setAttribute("aria-pressed", String(isDark));
      button.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} theme`);
      button.title = `Switch to ${isDark ? "light" : "dark"} theme`;
    });

    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) {
      themeColor.content = isDark ? "#0c0a09" : "#f7f5f2";
    }
  };

  const setTheme = (theme) => {
    root.classList.toggle("dark", theme === "dark");

    try {
      localStorage.setItem(storageKey, theme);
    } catch {
      // The selected theme still applies when storage is unavailable.
    }

    syncThemeControls();
  };

  document.addEventListener("click", (event) => {
    if (event.target.closest("[data-theme-toggle]")) {
      setTheme(getTheme() === "dark" ? "light" : "dark");
    }
  });

  window.addEventListener("site:navigation", syncThemeControls);
  syncThemeControls();
})();
