import React from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import PanelOne from "./PanelOne";
import PanelTwo from "./PanelTwo";

const AddQuestions = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} borderRadius={'20px'}bg={'#b92b27'} color={'white'}>Add Questions</Button>

      <Modal isOpen={isOpen} onClose={onClose} size={"xl"} isCentered>
        <ModalOverlay />
        <ModalContent height={"400px"}>
          <ModalCloseButton left={"0"} />
          <ModalBody mt={"40px"}>
            <Tabs isFitted>
              <TabList>
                <Tab>Add questions</Tab>
                <Tab>Create post</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <PanelOne />
                  <ModalFooter mt={'140px'} mr={'-50px'}>
                    <Button variant="ghost" onClick={onClose}>
                      Cancel
                    </Button>
                    <Button colorScheme="blue" mr={3} borderRadius={"20px"}>
                      Add question
                    </Button>
                  </ModalFooter>
                </TabPanel>
                <TabPanel>
                  <PanelTwo />
                  <ModalFooter mt={'70px'} mr={'-50px'}>
                    <Button colorScheme="blue" mr={3} borderRadius={"20px"}>
                      Post
                    </Button>
                  </ModalFooter>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
          {/* <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" mr={3} borderRadius={"20px"}>
              Add question
            </Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddQuestions;
