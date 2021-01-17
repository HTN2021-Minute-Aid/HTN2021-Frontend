import ReturnedObj from "./ReturnedObj";
import TranscriptID from "./TranscriptID";

export default interface UserTranscripts extends ReturnedObj {
  transcripts: TranscriptID[];
}