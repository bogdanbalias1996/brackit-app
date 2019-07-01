export type ActionItem = {
  label: string
  action: () => void
}

export type CardWithActionsProps = {
  actionsConfig: Array<ActionItem>
  children: any
}