export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === "/health") {
      return Response.json({
        ok: true,
        service: "HermentivIO",
        owner: "Inventivia Marketing"
      });
    }

    return new Response(
      `HermentivIO está vivo.\n\nAsistente IA de Inventivia Marketing.\nRuta de salud: /health\n`,
      {
        headers: {
          "content-type": "text/plain; charset=utf-8"
        }
      }
    );
  }
};
