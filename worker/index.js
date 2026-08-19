export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.hostname === "blog.tonyghouse.com" && url.pathname === "/") {
      url.pathname = "/blog/";
      return env.ASSETS.fetch(url);
    }

    return env.ASSETS.fetch(request);
  },
};
