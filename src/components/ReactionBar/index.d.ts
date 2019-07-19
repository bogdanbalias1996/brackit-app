export type ReactionList = 'blush' | 'rage'

export type Reactions = {
  [key in ReactionList]?: number
}

export type ReactionsProps = {
  onSelect: (reaction: ReactionList) => void
  selected?: Reactions
  style?: any
  stylesReactionItem?: any
  hideText?: boolean
}

export type ReactionBarProps = Reactions & ReactionsProps