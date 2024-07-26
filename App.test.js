import React from 'react';
import { render, screen, waitFor } from '@testing-library/react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import SignupScreen from './app/screens/SignupScreen';
import LoginScreen from './app/screens/LoginScreen';
import SpotsScreen from './app/screens/SpotsScreen';
import ClbScreen from './app/screens/ClbScreen';
import ErcScreen from './app/screens/ErcScreen';
import HssmlScreen from './app/screens/HssmlScreen';
import MedSciScreen from './app/screens/MedSciScreen';
import StephenScreen from './app/screens/StephenScreen';
import YaleScreen from './app/screens/YaleScreen';
import ProfileScreen from './app/screens/ProfileScreen';

describe('WelcomeScreen', () => {
  it('renders the welcome screen UI', async () => {
    // Render the component
    render(<WelcomeScreen navigation={{ navigate: jest.fn() }} />);

    // Assert the presence of the image
    const image = await screen.findByTestId('welcome-image');
    expect(image).toBeDefined();

    // Assert the presence of the "I've been here before" button
    const firstButton = await screen.findByTestId('first-button');
    expect(firstButton).toBeDefined();

    // Assert the presence of the "I'm new here" button
    const secondButton = await screen.findByTestId('second-button');
    expect(secondButton).toBeDefined();

  });
});

describe('SignupScreen', () => {
  it('renders the SignupScreen UI', async () => {
    // Render the component
    render(<SignupScreen navigation={{ navigate: jest.fn() }} />);

    // Assert the presence of the title
    const title = await screen.findByText('BrainBuddies');
    expect(title).toBeDefined();

    // Assert the presence of the email input field
    const emailInput = await screen.findByPlaceholderText('Email');
    expect(emailInput).toBeDefined();

    // Assert the presence of the password input field
    const passwordInput = await screen.findByPlaceholderText('Password');
    expect(passwordInput).toBeDefined();

    // Assert the presence of the first name input field
    const firstNameInput = await screen.findByPlaceholderText('First name');
    expect(firstNameInput).toBeDefined();

    // Assert the presence of the last name input field
    const lastNameInput = await screen.findByPlaceholderText('Last name');
    expect(lastNameInput).toBeDefined();

    // Assert the presence of the faculty dropdown
    const facultyDropdown = await screen.findByTestId('faculty-dropdown');
    expect(facultyDropdown).toBeDefined();

    // Assert the presence of the year of study dropdown
    const yearOfStudyDropdown = await screen.findByTestId('year-of-study-dropdown');
    expect(yearOfStudyDropdown).toBeDefined();

    // Assert the presence of the sign up button
    const signUpButton = await screen.findByText('Sign Up');
    expect(signUpButton).toBeDefined();

    // Assert the presence of the go back button
    const goBackButton = await screen.findByText('Go back to Welcome');
    expect(goBackButton).toBeDefined();
  });
});

describe('LoginScreen', () => {
  it('renders the LoginScreen UI', async () => {
    // Render the component
    render(<LoginScreen navigation={{ navigate: jest.fn() }} />);

    // Assert the presence of the title
    const title = await screen.findByText('BrainBuddies');
    expect(title).toBeDefined();

    // Assert the presence of the email input field
    const emailInput = await screen.findByPlaceholderText('Email');
    expect(emailInput).toBeDefined();

    // Assert the presence of the password input field
    const passwordInput = await screen.findByPlaceholderText('Password');
    expect(passwordInput).toBeDefined();

    // Assert the presence of the sign in button
    const signInButton = await screen.findByText('Sign In');
    expect(signInButton).toBeDefined();

    // Assert the presence of the go back button
    const goBackButton = await screen.findByText('Go back to Welcome');
    expect(goBackButton).toBeDefined();
  });
});

describe('SpotsScreen', () => {
  it('renders the SpotsScreen UI', async () => {
    // Render the component
    render(<SpotsScreen navigation={{ navigate: jest.fn() }} />);

    // Assert the presence of the first spot
    const firstSpot = await screen.findByText('Central Library');
    expect(firstSpot).toBeDefined();

    // Assert the presence of the second spot
    const secondSpot = await screen.findByText('Yale-NUS Library');
    expect(secondSpot).toBeDefined();

    // Assert the presence of the third spot
    const thirdSpot = await screen.findByText('Medicine + Science');
    expect(thirdSpot).toBeDefined();

    // Assert the presence of the fourth spot
    const fourthSpot = await screen.findByText('HSSML');
    expect(fourthSpot).toBeDefined();

    // Assert the presence of the fifth spot
    const fifthSpot = await screen.findByText('ERC(Utown)');
    expect(fifthSpot).toBeDefined();

    // Assert the presence of the sixth spot
    const sixthSpot = await screen.findByText('Stephen Raidy Centre');
    expect(sixthSpot).toBeDefined();
  });
});

describe('ClbScreen', () => {
  it('renders the ClbScreen UI', async () => {
    // Render the component
    render(<ClbScreen />);

    // Assert the presence of the map
    const map = await screen.findByTestId('map');
    expect(map).toBeDefined();

    // Assert the presence of the first image
    const firstImage = await screen.findByTestId('image-1');
    expect(firstImage).toBeDefined();

    // Assert the presence of the second image
    const secondImage = await screen.findByTestId('image-2');
    expect(secondImage).toBeDefined();

    // Assert the presence of the third image
    const thirdImage = await screen.findByTestId('image-3');
    expect(thirdImage).toBeDefined();

    // Assert the presence of the fourth image
    const fourthImage = await screen.findByTestId('image-4');
    expect(fourthImage).toBeDefined();
  });
});

describe('ErcScreen', () => {
  it('renders the ErcScreen UI', async () => {
    // Render the component
    render(<ErcScreen />);

    // Assert the presence of the map
    const map = await screen.findByTestId('map');
    expect(map).toBeDefined();

    // Assert the presence of the first image
    const firstImage = await screen.findByTestId('image-1');
    expect(firstImage).toBeDefined();

    // Assert the presence of the second image
    const secondImage = await screen.findByTestId('image-2');
    expect(secondImage).toBeDefined();

    // Assert the presence of the third image
    const thirdImage = await screen.findByTestId('image-3');
    expect(thirdImage).toBeDefined();
  });
});

describe('HssmlScreen', () => {
  it('renders the HssmlScreen UI', async () => {
    // Render the component
    render(<HssmlScreen />);

    // Assert the presence of the map
    const map = await screen.findByTestId('map');
    expect(map).toBeDefined();

    // Assert the presence of the first image
    const firstImage = await screen.findByTestId('image-1');
    expect(firstImage).toBeDefined();

    // Assert the presence of the second image
    const secondImage = await screen.findByTestId('image-2');
    expect(secondImage).toBeDefined();
  });
});

describe('MedSciScreen', () => {
  it('renders the MedSciScreen UI', async () => {
    // Render the component
    render(<MedSciScreen />);

    // Assert the presence of the map
    const map = await screen.findByTestId('map');
    expect(map).toBeDefined();

    // Assert the presence of the first image
    const firstImage = await screen.findByTestId('image-1');
    expect(firstImage).toBeDefined();

    // Assert the presence of the second image
    const secondImage = await screen.findByTestId('image-2');
    expect(secondImage).toBeDefined();
  });
});

describe('StephenScreen', () => {
  it('renders the StephenScreen UI', async () => {
    // Render the component
    render(<StephenScreen />);

    // Assert the presence of the map
    const map = await screen.findByTestId('map');
    expect(map).toBeDefined();

    // Assert the presence of the first image
    const firstImage = await screen.findByTestId('image-1');
    expect(firstImage).toBeDefined();

    // Assert the presence of the second image
    const secondImage = await screen.findByTestId('image-2');
    expect(secondImage).toBeDefined();
  });
});

describe('YaleScreen', () => {
  it('renders the YaleScreen UI', async () => {
    // Render the component
    render(<YaleScreen />);

    // Assert the presence of the map
    const map = await screen.findByTestId('map');
    expect(map).toBeDefined();

    // Assert the presence of the first image
    const firstImage = await screen.findByTestId('image-1');
    expect(firstImage).toBeDefined();

    // Assert the presence of the second image
    const secondImage = await screen.findByTestId('image-2');
    expect(secondImage).toBeDefined();

    // Assert the presence of the third image
    const thirdImage = await screen.findByTestId('image-3');
    expect(thirdImage).toBeDefined();

    // Assert the presence of the fourth image
    const fourthImage = await screen.findByTestId('image-4');
    expect(fourthImage).toBeDefined();
  });
});


describe('ProfileScreen', () => {
  it('renders the ProfileScreen UI', async () => {
    // Render the component
    render(<ProfileScreen />);

    // Assert the presence of the profile picture
    const profilePicture = await screen.findByTestId('profile-picture');
    expect(profilePicture).toBeDefined();

    // Assert the presence of the password input field
    const passwordInput = await screen.findByTestId('password-input');
    expect(passwordInput).toBeDefined();

    // Assert the presence of the first name input field
    const firstNameInput = await screen.findByTestId('first-name-input');
    expect(firstNameInput).toBeDefined();

    // Assert the presence of the last name input field
    const lastNameInput = await screen.findByTestId('last-name-input');
    expect(lastNameInput).toBeDefined();

    // Assert the presence of the update profile button
    const updateProfileButton = await screen.findByTestId('update-profile-button');
    expect(updateProfileButton).toBeDefined();

    // Assert the presence of the sign out button
    const signOutButton = await screen.findByTestId('sign-out-button');
    expect(signOutButton).toBeDefined();
  });
});
