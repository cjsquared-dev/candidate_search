// TODO: Create an interface for the Candidate objects returned by the API
export default interface Candidate {
  readonly Name: string;
  readonly Location: string;
  readonly Email: string;
  readonly Company: string;
  readonly Bio: string;
}
