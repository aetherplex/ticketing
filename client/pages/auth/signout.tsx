import { Heading } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import Router from 'next/router';

import useRequest from '../../hooks/useRequest';

function Signout() {
  const { doRequest } = useRequest({
    url: '/api/users/signout',
    method: 'post',
    body: {},
    onSuccess: () => Router.push('/'),
  });

  useEffect(() => {
    doRequest();
  }, []);

  return <Heading size="sm">Signing you out...</Heading>;
}

export default Signout;
