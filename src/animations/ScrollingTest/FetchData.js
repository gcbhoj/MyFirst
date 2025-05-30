let chapters = [];

export async function loadVerses() {
  try {
    const response = await fetch("/data/verses.json");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (Array.isArray(data.verse)) {
      chapters = data.verse.map((item) => ({
        gitaSlokh: item.text,
      }));
    }

    return chapters; // Return the array of split slokhs
  } catch (error) {
    console.error("Failed to load verses:", error);
    return [];
  }
}
