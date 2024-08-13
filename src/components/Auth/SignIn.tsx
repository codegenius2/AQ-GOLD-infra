import React, { useState } from 'react';
import { Auth } from 'aws-amplify';

const SignIn: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async () => {
    try {
      await Auth.signIn(username, password);
      alert('Successfully signed in!');
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  return (
    <div>
      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signIn}>Sign In</button>
    </div>
  );
};

export default SignIn;
