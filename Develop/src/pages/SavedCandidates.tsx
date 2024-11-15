import { useEffect, useState } from "react";
import type Candidate from "../interfaces/Candidate.interface";

const SavedCandidates = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const savedCandidates = localStorage.getItem("potentialCandidates") || "[]";
    if (savedCandidates.length > 0) {
      setCandidates(JSON.parse(savedCandidates));
    }
  }, []);

  const handleDeleteCandidate = (index: number) => {
    //remove candidate from local storage
    const updatedCandidates = candidates.filter((_, i) => i !== index);
    setCandidates(updatedCandidates);
    localStorage.setItem("potentialCandidates", JSON.stringify(updatedCandidates));
  };


  return (
    <>
      <h1>Potential Candidates</h1>
      {candidates.length === 0 ? (
        <p>No candidates have been accepted.</p>
      ) : (
        <table className="table" style={{ width: "80%" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Avatar</th>
              <th>Username</th>
              <th>Email</th>
              <th>Company</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate, index) => (
              <tr key={index}>
                <td>{candidate.name}</td>
                <td>
                  <img src={candidate.avatar_url} alt={candidate.name} style={{ width: '50px', height: '50px' }} />
                </td>
                <td>{candidate.login}</td>
                <td>{candidate.email}</td>
                <td>{candidate.company}</td>
                <td>
                  <button onClick={() => handleDeleteCandidate(index)} className="delete">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default SavedCandidates;
