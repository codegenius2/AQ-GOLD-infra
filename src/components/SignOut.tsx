
import React from 'react';
import { Auth } from 'aws-amplify';
import './Auth.css';

interface SignOutProps {
  onSignOut: () => void;
}

const SignOut: React.FC<SignOutProps> = ({ onSignOut }) => {
  const signOut = async () => {
    try {
      await Auth.signOut();
      onSignOut();
    } catch (error) {
      console.log('Error signing out:', error);
    }
  };

  return (
    <button onClick={signOut} className="auth-button">
      Sign Out
    </button>
  );
};

export default SignOut;
