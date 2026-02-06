import axios from "axios";
import { retry } from "../utils/retry";

export class ExternalApiService {
  static async fetchAPI() {
    return retry(() =>
      axios.get("https://jsonplaceholder.typicode.com/posts")
    );
  }
}
