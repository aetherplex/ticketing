import React from 'react';
import Authentication from '../../components/Authentication';

function Signin() {
  return <Authentication type="signin" url="/api/users/signin" />;
}

export default Signin;
