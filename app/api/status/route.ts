import { NextResponse } from "next/server";

export const runtime = "edge";

// Workers cannot use raw TCP. mcstatus.io exposes the Minecraft Java ping over HTTPS.
export async function GET() {
  try {
    const response = await fetch("https://api.mcstatus.io/v2/status/java/slidetime.space", { headers: { Accept: "application/json" } });
    if (!response.ok) throw new Error("Status provider unavailable");
    const data = await response.json() as { online?: boolean; players?: { online?: number; max?: number }; motd?: { clean?: string } };
    return NextResponse.json({ online: Boolean(data.online), players: data.players ? { online: data.players.online ?? 0, max: data.players.max ?? 0 } : null, motd: data.motd?.clean ?? "" }, { headers: { "Cache-Control": "public, max-age=20" } });
  } catch {
    return NextResponse.json({ online: false, players: null, error: "status_unavailable" }, { status: 503, headers: { "Cache-Control": "no-store" } });
  }
}
