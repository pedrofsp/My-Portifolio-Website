import React, { useEffect } from 'react';
import './style.scss';
import postsApi from '../../api/posts';

export default function Page3() {
  const getPosts = async () => {
    const res = await postsApi.searchPosts();
    console.log(res);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="all-page3">
      <div className="content">
        <h1>Pagina 3</h1>
      </div>
    </div>
  );
}
