import { useState, useEffect } from 'react';
import {  searchGithubUser } from '../api/API';  // Assuming these are the functions to search for candidates

const CandidateSearch = () => {
  interface Candidate {
    avatar_url: string;
    login: string;
    name?: string;
    location?: string;
    email?: string;
    company?: string;
    html_url: string;
  }

  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [potentialCandidates, setPotentialCandidates] = useState<Candidate[]>(() => {
    const savedCandidates = localStorage.getItem('potentialCandidates');
    return savedCandidates ? JSON.parse(savedCandidates) : [];
  });

  // Fetch candidates from GitHub (you can use searchGithub or searchGithubUser as per your setup)
  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const data = await searchGithubUser('someUsername');  // Replace 'someUsername' with the actual username
        console.log('Data:', data);
        setCandidates(data);  // Adjust according to the response structure
      } catch (error) {
        console.error('Error fetching candidates:', error);
      }
    };

    fetchCandidates();
  }, []);

  const saveCandidate = (candidate: Candidate) => {
    const updatedCandidates = [...potentialCandidates, candidate];
    setPotentialCandidates(updatedCandidates);
    localStorage.setItem('potentialCandidates', JSON.stringify(updatedCandidates));
  };

  const skipCandidate = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  if (currentIndex >= candidates.length) {
    return <h1>No more candidates available</h1>;
  }

  const currentCandidate = candidates[currentIndex];

  return (
    <div>
      <h1>Candidate Search</h1>
      <div>
        <img src={currentCandidate.avatar_url} alt={currentCandidate.login} />
        <h2>{currentCandidate.name || currentCandidate.login}</h2>
        <p>Username: {currentCandidate.login}</p>
        <p>Location: {currentCandidate.location || 'N/A'}</p>
        <p>Email: {currentCandidate.email || 'N/A'}</p>
        <p>Company: {currentCandidate.company || 'N/A'}</p>
        <a href={currentCandidate.html_url} target="_blank" rel="noopener noreferrer">
          GitHub Profile
        </a>
      </div>

      <div>
        <button onClick={() => saveCandidate(currentCandidate)}>+</button>
        <button onClick={skipCandidate}>-</button>
      </div>
    </div>
  );
};

export default CandidateSearch;
