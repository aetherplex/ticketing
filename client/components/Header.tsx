import { Button, ButtonGroup, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';

function Header({ currentUser = null }) {
  const navLinks = [
    !currentUser && { label: 'Log In', href: '/auth/signin' },
    !currentUser && { label: 'Sign Up', href: '/auth/signup' },
    currentUser && { label: 'Log Out', href: '/auth/signout' },
  ]
    .filter((linkParams) => linkParams)
    .map(({ label, href }) => {
      return (
        <Link key={href} href={href}>
          <a>
            <Button>{label}</Button>
          </a>
        </Link>
      );
    });

  return (
    <Flex w="100%" justify="space-between" align="center" py={8}>
      <Flex justify="center" align="center">
        <Link href="/">
          <a>
            <Heading>Ticketing</Heading>
          </a>
        </Link>
      </Flex>
      <Flex justify="center" align="center">
        <ButtonGroup spacing={4}>{navLinks}</ButtonGroup>
      </Flex>
    </Flex>
  );
}

export default Header;
