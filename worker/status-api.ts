// Optional Cloudflare Worker helper retained from the pre-static version.
// GitHub Pages has no server runtime; the production page calls this public API
// directly from the browser instead.
export async function getMinecraftStatus() {
  try {
    const response = await fetch("https://api.mcstatus.io/v2/status/java/slidetime.space", {
      headers: { Accept: "application/json" },
    });
    if (!response.ok) throw new Error("Status provider unavailable");
    const data = await response.json() as {
      online?: boolean;
      players?: { online?: number; max?: number };
      motd?: { clean?: string };
    };
    return {
      online: Boolean(data.online),
      players: data.players ? { online: data.players.online ?? 0, max: data.players.max ?? 0 } : null,
      motd: data.motd?.clean ?? "",
    };
  } catch {
    return { online: false, players: null, error: "status_unavailable" };
  }
}
