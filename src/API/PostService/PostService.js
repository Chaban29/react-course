import axios from 'axios';

class PostService {
  static async getAll(limit = 10, page = 1) {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
        {
          params: {
            _limit: limit,
            _page: page,
          },
        }
      );
      return response;
    } catch (err) {
      return new Error('Axios error...');
    }
  }
}

export { PostService };
