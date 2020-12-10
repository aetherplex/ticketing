import { Flex } from '@chakra-ui/react';
import React from 'react';
import Header from './Header';

function Layout({ children, currentUser }) {
  return (
    <Flex
      justify="start"
      align="center"
      flexDir="column"
      w="95%"
      maxW="900px"
      mx="auto"
      minH="100vh"
    >
      <Header currentUser={currentUser} />
      {children}
    </Flex>
  );
}

export default Layout;
