import { Stack,Image,Center } from '@chakra-ui/react'
import React from 'react'
import Form from './Form'


const Login = () => {
  return (
    <Stack>
    <Image src={'https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.home_page_bg_desktop.png-26-4770753d59b970e1.png'} h={'100vh'}/>
    <Center >
      <Form/>
    </Center>
  </Stack>
  )
}

export default Login
