export async function GET() {
  try {
    const res = await fetch("https://api.sansekai.my.id/api/melolo/trending", {
      cache: "no-store"
    });

    const data = await res.json();

    return Response.json(data);
  } catch (error) {
    return Response.json({ error: "Failed to fetch drama" });
  }
}
