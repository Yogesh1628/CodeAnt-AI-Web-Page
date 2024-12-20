import React from 'react';
import RepositoryCard from './RepositoryCard';

const repositories = [
  { name: 'design-system', type: 'Public', language: 'React', size: '7320 KB', updated: 'Updated 1 day ago' },
  { name: 'codeant-ci-app', type: 'Private', language: 'JavaScript', size: '5871 KB', updated: 'Updated 2 days ago' },
  { name: 'design-system', type: 'Public', language: 'React', size: '7320 KB', updated: 'Updated 1 day ago' },
  { name: 'codeant-ci-app', type: 'Private', language: 'JavaScript', size: '5871 KB', updated: 'Updated 2 days ago' },
  { name: 'design-system', type: 'Public', language: 'React', size: '7320 KB', updated: 'Updated 1 day ago' },
  { name: 'design-system', type: 'Public', language: 'React', size: '7320 KB', updated: 'Updated 1 day ago' },
  { name: 'codeant-ci-app', type: 'Private', language: 'JavaScript', size: '5871 KB', updated: 'Updated 2 days ago' },
];

const RepositoryList = () => {
  return (
    <div className="repository-list">
      {repositories.map((repo, index) => (
        <RepositoryCard key={index} repo={repo} />
      ))}
    </div>
  );
};

export default RepositoryList;
