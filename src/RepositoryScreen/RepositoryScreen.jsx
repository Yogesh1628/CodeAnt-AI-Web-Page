import React from 'react';
import Sidebar from '../components/LeftSidebar/Sidebar';
import RightContent from '../components/RightContent/RightContent';
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