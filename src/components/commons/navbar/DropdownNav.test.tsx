import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { DropdownNav } from './DropdownNav';
import { useAuth } from '@/hooks/useAuth';
import '@testing-library/jest-dom'; // For matchers like toBeInTheDocument()

// Mock the useAuth hook
jest.mock('@/hooks/useAuth');

describe('DropdownNav component', () => {
  const mockLogout = jest.fn();

  beforeEach(() => {
    // Clear mocks before each test
    jest.clearAllMocks();
  });

  test('renders user information when user is authenticated', async () => {
    // Mocking the user object returned by useAuth
    (useAuth as jest.Mock).mockReturnValue({
      user: { name: 'John Doe', email: 'johndoe@example.com' },
      logout: mockLogout,
    });

    // Render the DropdownNav component
    render(<DropdownNav />);

    // Open the dropdown by clicking the avatar
    await fireEvent.click(screen.getByRole('button'));

    // Ensure dropdown content is rendered
    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('johndoe@example.com')).toBeInTheDocument();
    });
  });

  test('does not render user information when no user is authenticated', async () => {
    // Mocking no user
    (useAuth as jest.Mock).mockReturnValue({
      user: null,
      logout: mockLogout,
    });

    // Render the DropdownNav component
    render(<DropdownNav />);

    // Open the dropdown by clicking the avatar
    await fireEvent.click(screen.getByRole('button'));

    // Ensure user info is not present
    await waitFor(() => {
      expect(screen.queryByText('John Doe')).not.toBeInTheDocument();
      expect(screen.queryByText('johndoe@example.com')).not.toBeInTheDocument();
    });
  });

  test('calls logout function when Log out button is clicked', async () => {
    // Mocking the user and logout function
    (useAuth as jest.Mock).mockReturnValue({
      user: { name: 'John Doe', email: 'johndoe@example.com' },
      logout: mockLogout,
    });

    // Render the DropdownNav component
    render(<DropdownNav />);

    // Open the dropdown by clicking the avatar
    await fireEvent.click(screen.getByRole('button'));

    // Wait for the "Log out" button to be rendered
    const logoutButton = await screen.findByText(/log out/i);

    // Click on the "Log out" button
    fireEvent.click(logoutButton);

    // Verify that the logout function was called once
    expect(mockLogout).toHaveBeenCalledTimes(1);
  });
});
