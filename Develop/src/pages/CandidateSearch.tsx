import { useEffect, useState } from 'react';
import { searchGithub } from '../api/API';
import type Candidate from '../interfaces/Candidate.interface';
import CandidateCard from '../components/CandidateCard';

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const fetchCandidates = async () => {
      const data = await searchGithub();
      setCandidates(data); // Set all candidates to state
    };
    fetchCandidates();
  }, []);

  const getNextCandidate = () => {
    if (currentIndex + 1 < candidates.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Display a message when there are no more candidates
      alert("No more candidates available.");
    }
  };

  const handleSaveCandidate = () => {
    const savedCandidates = JSON.parse(localStorage.getItem("potentialCandidates") || "[]");
    savedCandidates.push(candidates[currentIndex]);
    localStorage.setItem("potentialCandidates", JSON.stringify(savedCandidates));
    getNextCandidate();
  };

  return (
    <div>
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
