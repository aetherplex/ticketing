import React from 'react';
import Authentication from '../../components/Authentication';

function Signup() {
  return <Authentication type="signup" url="/api/users/signup" />;
}

export default Signup;
