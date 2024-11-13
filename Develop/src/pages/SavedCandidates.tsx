import { useState, useEffect } from 'react';
import type { Candidate } from '../interfaces/Candidate.interface';

const PotentialCandidates = () => {
  const [potentialCandidates] = useState(() => {
    const savedCandidates = localStorage.getItem('potentialCandidates');
    return savedCandidates ? JSON.parse(savedCandidates) : [];
  });

  if (potentialCandidates.length === 0) {
    return <h1>No candidates have been accepted</h1>;
  }

  return (
    <div>
      <h1>Potential Candidates</h1>
      {potentialCandidates.map((candidate, index) => (
        <div key={index}>
          <img src={candidate.avatar_url} alt={candidate.name} />
          <h2>{candidate.name}</h2>
          <p>Username: {candidate.login}</p>
          <p>Location: {candidate.location}</p>
          <p>Email: {candidate.email}</p>
          <p>Company: {candidate.company}</p>
          <a href={candidate.html_url}>GitHub Profile</a>
        </div>
      ))}
    </div>
  );
};

export default PotentialCandidates;
