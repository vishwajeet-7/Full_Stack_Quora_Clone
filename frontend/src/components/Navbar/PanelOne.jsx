import { Avatar, Flex, Stack,Button,Input } from '@chakra-ui/react'
import React from 'react'
import {MdPlayArrow} from 'react-icons/md'
import {SlPeople} from 'react-icons/sl'
import {RiArrowDownSLine} from 'react-icons/ri'


const PanelOne = () => {
  return (
    <Stack>
      <Flex alignItems={'center'} gap={2}>
      <Avatar
            h={"20px"}
            w={"20px"}
            name="Oshigaki Kisame"
            src="https://qsf.cf2.quoracdn.net/-4-images.new_grid.profile_default.png-26-688c79556f251aa0.png"
          />
        <MdPlayArrow/>
        <Button leftIcon={<SlPeople/>} rightIcon={<RiArrowDownSLine fontSize={'20px'}/>} borderRadius={'20px'}>Public</Button>
      </Flex>
      <Input variant='flushed' placeholder='Start your question with "What","How","Why",etc.' />
    </Stack>
  )
}

export default PanelOne
