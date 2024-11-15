import type Candidate from '../interfaces/Candidate.interface';

type CandidateCardProps = {
  candidate: Candidate;
  onSave: () => void;
  onSkip: () => void;
};

const CandidateCard = ({ candidate, onSave, onSkip }: CandidateCardProps) => (
  <div className="candidate-card">
    <img src={candidate.avatar_url} alt={`${candidate.name}'s avatar`} style={{ width: '400px', height: '400px' }} />
    <h2>{candidate.name}</h2>
    <p> {candidate.username}</p>
    <p>Username: {candidate.login}</p>
    <a href={candidate.html_url}>GitHub Profile</a>
    <br />
    <div>
      <button onClick={onSave} className='save'>+</button> {/* Save button */} <button onClick={onSkip} className='skip'>-</button> {/* Skip button */}
    </div>
  </div>
);

export default CandidateCard;
