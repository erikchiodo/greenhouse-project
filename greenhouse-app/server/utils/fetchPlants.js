const fetch = require("node-fetch");

async function fetchPlantsList() {
  try {
    const response = await fetch("https://perenual.com/api/species-list?keysk-Sw5b64a4ab927a0531477");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching species list:", error);
    throw error;
  }
}

module.exports = {fetchPlantsList};
