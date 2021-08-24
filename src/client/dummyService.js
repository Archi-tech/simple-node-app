import axios from "axios";

class DummyService {
    url = "https://jsonplaceholder.typicode.com";

    getPost = async (pid) => {
        const response = await axios.get(`${this.url}/posts/${pid}`);
        return response.data;
    };
}
const dummyService = new DummyService();
export default dummyService;
