import axios from "axios";

const todosLoader = async () => {
    try {
        const response = await axios.get('https://6ad21f9966cd28aed82da8b7.mockapi.io/todos');
        return response.data;
    } catch (error) {
        console.log('failed to fetch todos...try again', error); 
        return [];
    }
}

export default todosLoader;