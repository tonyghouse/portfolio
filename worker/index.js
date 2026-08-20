export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.hostname === "blog.tonyghouse.com" && url.pathname === "/") {
      url.pathname = "/blog/";
      return env.ASSETS.fetch(url);
    }

    const retiredRoutes = new Map([
      ["/projects", "/#projects"],
      ["/projects/", "/#projects"],
      ["/experience", "/#experience"],
      ["/experience/", "/#experience"],
      ["/about", "/"],
      ["/about/", "/"],
    ]);
    const destination = retiredRoutes.get(url.pathname);

    if (destination) {
      return Response.redirect(new URL(destination, url), 308);
    }

    return env.ASSETS.fetch(request);
  },
};
