import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../Auth/SignOutButton';
import { useAuth } from '../../context/AuthContext';

const Header: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        {isAuthenticated && (
          <>
            <Link to="/upload">Upload</Link>
            <Link to="/profile">Profile</Link>
            <SignOutButton />
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
