import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3e6067586564436dae79e0276c41f32e",
  },
});