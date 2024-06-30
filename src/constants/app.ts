export const basename = (() => {
  if (import.meta.env.PROD) {
    if (import.meta.env.VITE_GITHUB_PAGES_REPO_NAME) {
      return `/${import.meta.env.VITE_GITHUB_PAGES_REPO_NAME}/`;
    }
  }
  return "/";
})();
