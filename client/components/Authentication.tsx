import {
  Flex,
  Heading,
  chakra,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';
import Router from 'next/router';
import React, { useState } from 'react';
import useRequest from '../hooks/useRequest';

function Authentication({ type = 'signup', url }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { doRequest, errors } = useRequest({
    url,
    method: 'post',
    body: { email, password },
    onSuccess: () => Router.push('/'),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    doRequest();
  };

  return (
    <Flex
      flexDir="column"
      justify="center"
      align="center"
      maxW="900px"
      mx="auto"
      flexGrow={2}
    >
      <Flex
        flexDir="column"
        justify="center"
        align="center"
        shadow="md"
        borderRadius="md"
        my={8}
        px={16}
        py={16}
        w="500px"
      >
        <Heading size="lg">{type === 'signup' ? 'Sign Up' : 'Log In'}</Heading>
        <chakra.form onSubmit={(e) => handleSubmit(e)} w="100%">
          <FormControl>
            <FormLabel htmlFor="name">Email</FormLabel>
            <Input
              id="email"
              placeholder="Email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel htmlFor="name">Password</FormLabel>
            <Input
              id="password"
              placeholder="Password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          {errors}
          <Button type="submit" mt={8}>
            {type === 'signup' ? 'Signup' : 'Log In'}
          </Button>
        </chakra.form>
      </Flex>
    </Flex>
  );
}

export default Authentication;
