import axios from "axios";
class Post {
  create(formData) {
    const url = "http://localhost:8000/api/upload";
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    return axios.post(url, formData, config);
  }
}
export default new Post();
