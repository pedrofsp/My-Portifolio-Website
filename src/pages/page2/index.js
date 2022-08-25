import React, { useEffect } from 'react';
import Sidebar from '../../components/Page2/sidebar';
import VideoComponent from '../../components/Page2/video';
import './style.scss';

export default function Page2() {
  return (
    <div className="all-page2">
      <div className="content">
        <h1>Pagina 2</h1>
        <br />
        <VideoComponent />
        <br />
        <Sidebar />
      </div>
    </div>
  );
}
