import axios from "axios";

const authLoader = async () => {
    try {
        let response = await axios.get('http://localhost:3001/api/v1/auth/me', {
            withCredentials: true
        });
        return response.data.user;
    } catch (error) {
        return null;
    }
}

export default authLoader;