import {
  Stack,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Avatar,
  Box,
  Text,
  Heading,
  IconButton,
  Image,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import React from "react";
import {AiOutlineClose} from 'react-icons/ai'
import {RxThickArrowUp,RxThickArrowDown} from 'react-icons/rx'

const PostCard = () => {
  return (
    <Card w={'600px'}>
      <CardHeader>
        <Flex spacing="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />

            <Box>
              <Heading size="sm">Segun Adebayo</Heading>
              <Text>Creator, Chakra UI</Text>
            </Box>
          </Flex>
          <IconButton
            variant="ghost"
            colorScheme="gray"
            aria-label="See menu"
            icon={<AiOutlineClose/>}
          />
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>
          With Chakra UI, I wanted to sync the speed of development with the
          speed of design. I wanted the developer to be just as excited as the
          designer to create a screen.
        </Text>
      </CardBody>
      <Image
        objectFit="cover"
        src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="Chakra UI"
      />

      <CardFooter
        justify="space-between"
        flexWrap="wrap"
        sx={{
          "& > button": {
            minW: "136px",
          },
        }}
      >
        <Flex gap={2}>
            <Text>192K views</Text>
            <span>·</span>
            <Text>View 1,277 upvotes</Text>
            <span>·</span>
            <Text>View 15 shares</Text>
        </Flex>
        <Flex>
        <Button  variant="ghost" leftIcon={<RxThickArrowUp fontSize={'20px'}/>} border={'1px solid grey'} borderLeftRadius={'50px'} fontWeight={'normal'}>
          Upvote <span> · </span> 1.2K
        </Button>
        <Button variant="ghost" leftIcon={<RxThickArrowDown fontSize={'20px'}/>} borderRightRadius={'50px'} border={'1px solid grey'} w={'20px'}>
        </Button>
        <Button flex="1" variant="ghost" leftIcon={""}>
          Share
        </Button>
        </Flex>
        <Flex>

        </Flex>
        <Button leftIcon={""} variant="ghost"></Button>   
      </CardFooter>
    </Card>
  );
};

export default PostCard;
