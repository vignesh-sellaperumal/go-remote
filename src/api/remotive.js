import axios from "axios";

export default axios.create({
  baseURL: "https://remotive.com/api/remote-jobs",
});
