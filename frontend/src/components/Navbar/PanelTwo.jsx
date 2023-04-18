import { Flex, Stack,Avatar,Text, Button,Textarea } from '@chakra-ui/react'
import React from 'react'
import {MdOutlineArrowForwardIos} from 'react-icons/md'

const PanelTwo = () => {
  return (
    <Stack>
      <Flex gap={4}>
      <Avatar
            h={"42px"}
            w={"42px"}
            name="Oshigaki Kisame"
            src="https://qsf.cf2.quoracdn.net/-4-images.new_grid.profile_default.png-26-688c79556f251aa0.png"
          />
          <Stack>
            <Text fontWeight={'bold'}>Vishwajeet Singh</Text>
            <Button rightIcon={<MdOutlineArrowForwardIos/>} borderRadius={'20px'}>Choose credential</Button>
          </Stack>
      </Flex>
      <Textarea placeholder='Say somethig...' border={'none'}/>
    </Stack>
  )
}

export default PanelTwo
