import { styled } from "styled-components";

// Container for the body of the login page
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* Responsive layout */
  @media (max-width: 1000px) {
    margin-top: 10rem;
  }
`;

// Styled component for the wrapper that holds both boxes
export const BoxWrapper = styled.div`
  display: flex;
  flex: 1;
  gap: 5rem;
  margin: 1rem 0;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  @media (max-width: 1000px) {
    margin-top: 4rem;
  }

  @media (max-width: 800px) {
    margin-top: 2rem;
    gap: 0rem;
  }
`;

// Container for login form
export const LoginContainer = styled.div`
  flex: 1;
  padding: 20px;
  background-color: var(--cambridge-blue);
  border-radius: 8px;
  @media (max-width: 1200px) {
    width: 50rem;
  }
  @media (max-width: 800px) {
    width: 30rem;
  }
`;

// Message on the right asking the user to sign up
export const Message = styled.div`
  flex: 1;
  background-image: url("/chalkboard.jpeg");
  background-size: cover;
  background-position: center;
  padding: 20px;
  font-size: 1.2rem;
  color: white;
  text-align: center;
  border-radius: 8px;
  height: 100%;
`;

// Login form styling
export const LoginForm = styled.form`
  background-image: url("/chalkboard.jpeg");
  background-size: cover;
  background-position: center;
  padding: 20px;
  border-radius: 8px;
  color: white;
`;

export const TextInput = styled.input`
  width: 80%;
  max-width: 100%;
  padding: 10px;
  border: 2px solid white;
  border-radius: 8px;
  background-color: transparent;
  color: white;
  font-size: 16px;
  outline: none;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  border: 2px solid white;
  border-radius: 8px;
  background-color: transparent;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;
