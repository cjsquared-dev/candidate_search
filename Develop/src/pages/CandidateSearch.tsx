import { useEffect, useState } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import type Candidate from '../interfaces/Candidate.interface';
import CandidateCard from '../components/CandidateCard';

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Fetch candidates from GitHub
  useEffect(() => {
    const fetchCandidates = async () => {
      const data = await searchGithub();
      setCandidates(data); // Set all candidates to state

    };
    fetchCandidates();
  }, []);

  // Get the next candidate
  const getNextCandidate = () => {
    if (currentIndex + 1 < candidates.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Display a message when there are no more candidates
      alert("No more candidates available.");
    }
  };

  // Save the current candidate to local storage
  const handleSaveCandidate = async () => {
    const savedCandidates = JSON.parse(localStorage.getItem("potentialCandidates") || "[]");
    const candidate = candidates[currentIndex];
    console.log(candidate);


    if (candidate) {
      const userData = await searchGithubUser(candidate.login);
      console.log(userData);
      if (userData) {
        savedCandidates.push(userData);
        localStorage.setItem("potentialCandidates", JSON.stringify(savedCandidates));
        getNextCandidate();
      } else {
        alert("No candidate to save.");
      }
    }
  };

  return (
    <div>
      <h1>Candidate Search</h1>
      {candidates.length > 0 ? (
        <CandidateCard
          candidate={candidates[currentIndex]}
          onSave={handleSaveCandidate}
          onSkip={getNextCandidate}
        />
      ) : (
        <p>Loading candidates...</p>
      )}
    </div>
  );
};

export default CandidateSearch;
