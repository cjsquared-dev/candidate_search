import { useState, useEffect } from 'react';
import { searchGithubUser, searchGithub } from '../api/API';
import type { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [potentialCandidates, setPotentialCandidates] = useState(() => {
    const savedCandidates = localStorage.getItem('potentialCandidates');
    return savedCandidates ? JSON.parse(savedCandidates) : [];
  });
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetchCandidate();
  }, [index]);

  const fetchCandidate = async () => {
    let candidateData;
    if (index % 2 === 0) {
      candidateData = await searchGithubUser();
    } else {
      candidateData = await searchGithub();
    }
    setCandidate(candidateData);
  };

  const handleSaveCandidate = () => {
    setPotentialCandidates((prev) => {
      const updatedCandidates = [...prev, candidate];
      localStorage.setItem('potentialCandidates', JSON.stringify(updatedCandidates));
      return updatedCandidates;
    });
    setIndex((prev) => prev + 1);
  };

  const handleSkipCandidate = () => {
    setIndex((prev) => prev + 1);
  };

  if (!candidate) {
    return <h1>No more candidates available</h1>;
  }

  return (
    <div>
      <h1>CandidateSearch</h1>
      <div>
        <img src={candidate.avatar_url} alt={candidate.name} />
        <h2>{candidate.name}</h2>
        <p>Username: {candidate.login}</p>
        <p>Location: {candidate.location}</p>
        <p>Email: {candidate.email}</p>
        <p>Company: {candidate.company}</p>
        <a href={candidate.html_url}>GitHub Profile</a>
      </div>
      <button onClick={handleSaveCandidate}>+</button>
      <button onClick={handleSkipCandidate}>-</button>
    </div>
  );
};

export default CandidateSearch;
