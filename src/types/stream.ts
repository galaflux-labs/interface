export interface IStream {
  streamId: number
  owner: string,
  recipient: string,
  amount: number,
  claimed_amount: number,
  start_time: number,
  end_time: number,
  rate_per_second: number,
}