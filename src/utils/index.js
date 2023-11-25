export async function fetchData(url) {
  const API_URL = "https://travel-web-server-5hhv.onrender.com";
  try {
    let response = await fetch(API_URL + url, {
      method: "GET",
    });

    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }

    let data = await response.json();
    return data;
  } catch (error) {
    // console.log('Fetch error: ', error);
    throw new Error(error);
  }
}
