import axios from "axios";

const KEY = "AIzaSyClz2j699-fHsPVmkqfCpSM8OOeAHYqINM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 10,
    key: `${KEY}`,
  },
});
