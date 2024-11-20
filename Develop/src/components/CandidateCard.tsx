import type Candidate from '../interfaces/Candidate.interface';

type CandidateCardProps = {
  candidate: Candidate;
  onSave: () => void;
  onSkip: () => void;
};

const CandidateCard = ({ candidate, onSave, onSkip }: CandidateCardProps) => (
  <div className="candidate-card">
    <img src={candidate.avatar_url} alt={`${candidate.name}'s avatar`} />
    <p>Name: {candidate.name}</p>
    <p>Username: {candidate.login}</p>
    <p>Location: {candidate.location}</p>
    <p>Email: {candidate.email}</p>
    <p>URL: {candidate.html_url}</p>
    <p>Company: {candidate.company}</p>
    <a href={candidate.html_url}>GitHub Profile</a>
    <br />
    <div>
      <button onClick={onSave} className='save'>+</button> {/* Save button */} <button onClick={onSkip} className='skip'>-</button> {/* Skip button */}
    </div>
  </div>
);

export default CandidateCard;
