import ReturnedObj from './ReturnedObj';
import TranscriptSentence from './TranscriptSentence';

export default interface TranscriptContent extends ReturnedObj {
  content: TranscriptSentence[];
  keywords: string[];
}