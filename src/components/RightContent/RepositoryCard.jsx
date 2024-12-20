import React from 'react';
import blueDot from '../../assets/BlueDot.png'

const RepositoryCard = ({ repo }) => {
  return (
    <div className="repository-card">
      <div className='card-header'>
        <div className='card-name'>{repo.name}</div>
        <div className='card-type'>{repo.type}</div>
      </div>
      <div className="repo-details">
        <div className='details-header'>
          <p>{repo.language}</p>
          <img src={blueDot} />
        </div>
        <p>{repo.size}</p>
        <p>{repo.updated}</p>
      </div>
    </div>
  );
};

export default RepositoryCard;
