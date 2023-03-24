import type { APIRoute } from "astro";

export const get: APIRoute = async ({ params, request }) => {
  return new Response(
    JSON.stringify({
      message: "Success!",
    }),
    { status: 200 }
  );
};

