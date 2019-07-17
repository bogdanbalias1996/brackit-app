export type Tag = {
  text: string
  type: string
}

export type TagsProps = {
  tags: Array<Tag>
  containerStyle?: any
  tagStyle?: any
}

export type TagPresetTypes = {
  textColor: string
  bgColor: string
}