import { render, screen, fireEvent } from '@testing-library/react';
import { ModalFooter } from './ModalFooter';
import '@testing-library/jest-dom';
import * as Dialog from "@radix-ui/react-dialog";

describe('ModalFooter component', () => {
  const setOpenModal = jest.fn(); // Mocking the setOpenModal function
  const setErrors = jest.fn(); // Mocking the setErrors function

  const defaultProps = {
    setOpenModal,
    setErrors,
    children: <div>Test Footer Content</div>,
  };

  beforeEach(() => {
    jest.clearAllMocks(); // Clear mock function calls before each test
  });

  test('renders ModalFooter with children content', () => {
    render(<Dialog.Root><ModalFooter {...defaultProps} /></Dialog.Root>);

    // Verifying if the child content is rendered correctly
    expect(screen.getByText('Test Footer Content')).toBeInTheDocument();
  });

  test('calls setOpenModal and setErrors when close button is clicked', () => {
    render(<Dialog.Root><ModalFooter {...defaultProps} /></Dialog.Root>);

    // Simulate click on the close button
    fireEvent.click(screen.getByLabelText('Close'));

    // Check if setOpenModal and setErrors were called
    expect(setOpenModal).toHaveBeenCalledTimes(1);
    expect(setOpenModal).toHaveBeenCalledWith(false); // Ensuring it is called with 'false'
    expect(setErrors).toHaveBeenCalledTimes(1);
    expect(setErrors).toHaveBeenCalledWith({}); // Ensuring it is called with empty object
  });

  test('close button is rendered', () => {
    render(<Dialog.Root><ModalFooter {...defaultProps} /></Dialog.Root>);

    // Check if the close button is rendered
    expect(screen.getByLabelText('Close')).toBeInTheDocument();
  });
});
