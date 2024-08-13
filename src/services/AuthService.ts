import { Auth } from 'aws-amplify';

export async function signIn(username: string, password: string): Promise<any> {
  try {
    const user = await Auth.signIn(username, password);
    return user;
  } catch (error) {
    console.error('Error signing in:', error);
    throw error;
  }
}

export async function signUp(username: string, password: string, email: string): Promise<any> {
  try {
    const user = await Auth.signUp({
      username,
      password,
      attributes: { email },
    });
    return user;
  } catch (error) {
    console.error('Error signing up:', error);
    throw error;
  }
}

export async function confirmSignUp(username: string, code: string): Promise<any> {
  try {
    const response = await Auth.confirmSignUp(username, code);
    return response;
  } catch (error) {
    console.error('Error confirming sign up:', error);
    throw error;
  }
}

export async function signOut(): Promise<void> {
  try {
    await Auth.signOut();
  } catch (error) {
    console.error('Error signing out:', error);
    throw error;
  }
}
