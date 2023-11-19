export async function fetchData(url) {
  const API_URL = "http://192.168.1.23:3001";
  try {
    let response = await fetch(API_URL + url, {
      method: "GET",
    });

    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }

    let data = await response.json();
    // setBannerData(dataMonth);
    return data;
  } catch (error) {
    // console.log('Fetch error: ', error);
    throw new Error(error);
  }
  // ========== Start Get data from api /month ==========
}
