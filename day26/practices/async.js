async function fetchData() {
  try {
    const response = await fetch("");

    const data = await response.json();
  } catch (error) {
    console.error(error);
  }
}

fetchData();
