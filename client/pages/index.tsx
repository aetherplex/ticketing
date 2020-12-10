import { Heading, Flex } from '@chakra-ui/react';

import buildClient from '../api/build-client';

export default function Home({ currentUser }) {
  return (
    <Flex justify="start" align="center" w="100%" mt={16}>
      {currentUser ? (
        <Heading size="md">You are signed in</Heading>
      ) : (
        <Heading size="md">You are not signed in</Heading>
      )}
    </Flex>
  );
}

export async function getServerSideProps(context) {
  const client = buildClient(context);
  const { data } = await client.get('/api/users/currentuser');

  return {
    props: {
      currentUser: data.currentUser,
    },
  };
}
