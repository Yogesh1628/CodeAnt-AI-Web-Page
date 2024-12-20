import React from 'react';
import Sidebar from '../components/LeftSidebar/Sidebar.jsx';
import RightContent from '../components/RightContent/RightContent.jsx';
import './RepositoryScreen.css';

function RepositoryScreen() {
  return (
    <div className="app1">
      <Sidebar />
      <RightContent />
    </div>
  );
}

export default RepositoryScreen;