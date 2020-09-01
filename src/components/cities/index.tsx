import React, {FC, ReactElement} from "react"
import {Chip, Item, ListContainer} from './cities.styled'

interface HookFunctionProp{
  onClick: Function,
  cityList: {
    city: string
  }[]
}

const Cities: FC<HookFunctionProp> = ({onClick, cityList}): ReactElement => {
  return (
    <ListContainer>
      {cityList.map(item => (
        <Item key={item.city} id={item.city} onClick={() => onClick(item)} data-testid={item.city}>
          <Chip>{item.city}</Chip>
        </Item>
      ))}
    </ListContainer>
  )
}

export default Cities


