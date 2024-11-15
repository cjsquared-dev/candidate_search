import type Candidate from '../interfaces/Candidate.interface';

type CandidateCardProps = {
  candidate: Candidate;
  onSave: () => void;
  onSkip: () => void;
};

const CandidateCard = ({ candidate, onSave, onSkip }: CandidateCardProps) => (
  <div className="candidate-card">
    <img src={candidate.avatar} alt={`${candidate.name}'s avatar`} />
    <h2>{candidate.name}</h2>
    <p>Username: {candidate.username}</p>
    <p>Location: {candidate.location}</p>
    <p>Company: {candidate.company}</p>
    <p>Email: {candidate.email}</p>
    <a href={candidate.html_url}>GitHub Profile</a>
    <button onClick={onSave}>+</button> {/* Save button */}
    <button onClick={onSkip}>-</button> {/* Skip button */}
  </div>
);

export default CandidateCard;
