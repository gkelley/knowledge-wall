import axios from "axios";
import { biteData, commitment } from "./models/models";

const firebaseInstance = axios.create({
  baseURL: "https://knowledge-wall-2019.firebaseio.com/"
});

export async function GetAllBites() {
  return await firebaseInstance
    .get("/bites.json")
    .then(response => {
      return Object.keys(response.data).map(function(i) {
        return { id: i, biteData: response.data[i] };
      });
    })
    .catch((reason: any) => {
      console.log(reason);
      return [];
    });
}

export async function PostBite(formData: biteData) {
  return await firebaseInstance
    .post("/bites.json", formData)
    .then(response => {
      return true;
    })
    .catch((reason: any) => {
      //Todo
      console.log(reason);
      return false;
    });
}

export async function PatchCommitment(formData:  {commitment: commitment}, postId: string) {
  return await firebaseInstance
    .patch("/bites/" + postId + ".json", formData)
    .then(response => {
      return true;
    })
    .catch((reason: any) => {
      //Todo
      console.log(reason);
      return false;
    });
}

export default firebaseInstance;
