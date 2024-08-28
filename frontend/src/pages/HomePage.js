import React from "react";
import Login from "../components/Authentication/Login.js";
import Signup from "../components/Authentication/Signup.js";
import { Container, Text, Box } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        textAlign={"center"}
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="3xl" fontWeight="bold">
          CHAT-PORTAL
        </Text>
      </Box>
      <Box p={4} bg="white" w="100%" borderRadius="lg" borderWidth="1px">
        <Tabs variant="soft-rounded">
          <TabList mb="1em">
            <Tab w={"50%"} borderRadius={"lg"}>
              Login
            </Tab>
            <Tab w={"50%"} borderRadius={"lg"}>
              Sign-Up
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
