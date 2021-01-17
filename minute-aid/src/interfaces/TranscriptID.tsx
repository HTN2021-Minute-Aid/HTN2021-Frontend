export default interface TranscriptID {
  ownerID: string,
  transcriptID: string,
  contentID: string,
  title: string,
  date: {
    _seconds: number,
    _nanoseconds: number
  }
}