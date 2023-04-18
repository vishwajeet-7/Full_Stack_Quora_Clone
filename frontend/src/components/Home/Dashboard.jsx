import { Stack } from '@chakra-ui/react'
import React from 'react'
import PostBox from './PostBox/PostBox'
import PostCard from './PostCard/PostCard'

const Dashboard = () => {
  return (
    <Stack >
     <PostBox/>
     <PostCard/>
    </Stack>
  )
}

export default Dashboard
