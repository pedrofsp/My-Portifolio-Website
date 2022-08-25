import React, { useState, useEffect } from 'react';
import ProfileCard from '../../components/Page1/ProfileCard';
import './style.scss';

export default function Page1() {
  const [content, setContent] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((res) => {
        setContent(res);
        console.log('content: ', res);
      });
  }, []);

  function listContent() {
    let filteredContent = content.filter((item) => {
      return item.name.toLowerCase().includes(text.toLowerCase());
    });
    return filteredContent.map((item) => (
      <ProfileCard
        name={item.name}
        site={item.website}
        email={item.email}
        phone={item.phone}
      />
    ));
  }

  return (
    <div className="all-page1">
      <div className="content">
        <h1>Pagina 1</h1>
        <div className="verical-space"></div>
        <input
          onChange={(e) => {
            setText(e.target.value);
          }}
          placeholder="Search for a user by name... "
        />
        <div className="verical-space"></div>
        {content.length == 0 && <p>loading...</p>}
        {listContent()}
      </div>
    </div>
  );
}
