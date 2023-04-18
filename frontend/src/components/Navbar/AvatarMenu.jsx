import React from 'react'
import {Menu,MenuButton,MenuItem,MenuList,Avatar} from '@chakra-ui/react'

const AvatarMenu = () => {
  return (
    <Menu>
        <MenuButton>
          <Avatar
            h={"32px"}
            w={"32px"}
            name="Oshigaki Kisame"
            src="https://qsf.cf2.quoracdn.net/-4-images.new_grid.profile_default.png-26-688c79556f251aa0.png"
          />
        </MenuButton>
        <MenuList>
          <MenuItem>New Tab</MenuItem>
          <MenuItem>New Window</MenuItem>
          <MenuItem>Open Closed Tab</MenuItem>
          <MenuItem>Open File...</MenuItem>
        </MenuList>
      </Menu>
  )
}

export default AvatarMenu
