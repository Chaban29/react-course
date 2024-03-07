import axios from 'axios';

class PostService {
  static async getAll() {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      return response;
    } catch (err) {
      return new Error('Axios error...');
    }
  }
}

export { PostService };
