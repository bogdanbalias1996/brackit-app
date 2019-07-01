import * as React from 'react'
import { FlatList } from 'react-native'
import { PoliticiansItem } from './PoliticiansItem'
import { Politician, PoliticiansListProps } from './'

export const PoliticiansList = ({ politicians, onItemPress }: PoliticiansListProps) => {
  return (
    <FlatList
      data={politicians}
      renderItem={({ item }) => (
        <PoliticiansItem
          politician={item}
          onPress={() => {
            if (onItemPress) onItemPress(item)
          }}
        />
      )}
      keyExtractor={(item: Politician) => String(item.id)}
    />
  )
}
