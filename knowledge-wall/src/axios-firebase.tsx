import axios from "axios";

const firebaseInstance = axios.create({
  baseURL: "https://knowledge-wall-2019.firebaseio.com/"
});

export async function GetAllBites() {
  const response = await firebaseInstance.get("/bites.json");
  let transformedData = Object.keys(response.data).map(function(i) {
    return { id: i, biteData: response.data[i] };
  });
  return transformedData;
}

export default firebaseInstance;
