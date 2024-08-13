import React from 'react';
import { useAuth } from '../../context/AuthContext';

const SignOutButton: React.FC = () => {
  const { signOut } = useAuth();

  return <button onClick={signOut}>Sign Out</button>;
};

export default SignOutButton;
