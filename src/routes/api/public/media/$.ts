import { createFileRoute } from "@tanstack/react-router";

const HOP_BY_HOP = new Set([
  "connection",
  "keep-alive",
  "transfer-encoding",
  "upgrade",
]);

async function proxy(request: Request, params: { _splat?: string }) {
  const base = process.env["R2_PUBLIC_BASE_URL"];
  if (!base) {
    return new Response("Media storage is not configured", { status: 503 });
  }

  const key = (params._splat ?? "").replace(/^\/+/, "");
  if (!key) return new Response("Not found", { status: 404 });

  const target = `${base.replace(/\/+$/, "")}/${key
    .split("/")
    .map((part) => encodeURIComponent(decodeURIComponent(part)))
    .join("/")}`;

  const forwarded = new Headers();
  const range = request.headers.get("range");
  if (range) forwarded.set("range", range);
  const ifNoneMatch = request.headers.get("if-none-match");
  if (ifNoneMatch) forwarded.set("if-none-match", ifNoneMatch);

  const upstream = await fetch(target, {
    method: request.method === "HEAD" ? "HEAD" : "GET",
    headers: forwarded,
  });

  const headers = new Headers();
  upstream.headers.forEach((value, name) => {
    if (!HOP_BY_HOP.has(name.toLowerCase())) headers.set(name, value);
  });
  headers.set("accept-ranges", "bytes");
  headers.set("cache-control", "public, max-age=31536000, immutable");

  return new Response(request.method === "HEAD" ? null : upstream.body, {
    status: upstream.status,
    headers,
  });
}

export const Route = createFileRoute("/api/public/media/$")({
  server: {
    handlers: {
      GET: ({ request, params }) => proxy(request, params),
      HEAD: ({ request, params }) => proxy(request, params),
    },
  },
});
