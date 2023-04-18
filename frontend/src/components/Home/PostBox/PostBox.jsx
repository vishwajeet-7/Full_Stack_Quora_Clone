import React from 'react'
import {Stack,Flex,Avatar, Input,Text,Button} from '@chakra-ui/react'
import {BsQuestionCircle,BsQuestionCircleFill} from 'react-icons/bs'
import {BiEdit} from 'react-icons/bi'
import {FiEdit2} from 'react-icons/fi'

const PostBox = () => {
  return (
    <Stack w={'600px'} border={'1px solid red'} bg={'white'} p={'1rem'}>
      <Flex gap={3}>
      <Avatar
            h={"32px"}
            w={"32px"}
            name="Oshigaki Kisame"
            src="https://qsf.cf2.quoracdn.net/-4-images.new_grid.profile_default.png-26-688c79556f251aa0.png"
          />
          <Input borderRadius={'25px'} placeholder='What do you want to ask or share?'size={'sm'}/>
      </Flex>
      <Flex justify={'space-evenly'}>
       <Button bg={'none'} leftIcon={<BsQuestionCircle/>}>Ask</Button> 
       <Button bg={'none'} leftIcon={<BiEdit/>}>Answer</Button>
       <Button bg={'none'} leftIcon={<FiEdit2/>}>Post</Button>
      </Flex>
    </Stack>
  )
}

export default PostBox
