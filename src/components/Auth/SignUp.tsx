import React, { useState } from 'react';
import { Auth } from 'aws-amplify';

const SignUp: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [authCode, setAuthCode] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const signUp = async () => {
    try {
      await Auth.signUp({
        username,
        password,
        attributes: { email },
      });
      setShowConfirmation(true);
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  const confirmSignUp = async () => {
    try {
      await Auth.confirmSignUp(username, authCode);
      alert('Successfully signed up!');
    } catch (error) {
      console.error('Error confirming sign-up:', error);
    }
  };

  return (
    <div>
      {!showConfirmation ? (
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
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={signUp}>Sign Up</button>
        </div>
      ) : (
        <div>
          <input
            placeholder="Confirmation Code"
            value={authCode}
            onChange={(e) => setAuthCode(e.target.value)}
          />
          <button onClick={confirmSignUp}>Confirm Sign Up</button>
        </div>
      )}
    </div>
  );
};

export default SignUp;
