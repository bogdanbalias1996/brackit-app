export type Discussion = {
  "id": string
  "author": string
  "date": string
  "text": string
  "type": string
}

export type DiscussionsProps = {
  data: Array<Discussion>
}