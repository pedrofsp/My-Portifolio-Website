import Api from './index';

class ApiPosts extends Api {
  async searchPosts() {
    const response = await this.get('/posts');
    return response.json();
  }
}

const postsApi = new ApiPosts();
export default postsApi;
