export async function getPageData(page: string) {
  try {
    const res = await fetch(`/assets/pages/${page}.json`);
    if (!res.ok) throw new Error("Page JSON not found");
    return await res.json();
  } catch (err) {
    console.error(`[PageData] Failed to fetch: ${page}`, err);
    return null;
  }
}
