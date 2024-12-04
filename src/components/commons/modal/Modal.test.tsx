import { render, screen, fireEvent } from '@testing-library/react';
import { Modal } from './Modal';
import '@testing-library/jest-dom';

// Mock data for modal props
const modalProps = {
  width: 'w-1/2',
  modalTitle: 'Test Modal Title',
  modalDescriptions: 'This is a test modal description.',
  modalBodyComponents: <div>Body Content</div>,
  modalBodyFooter: <button>Close</button>,
  componetsTriger: <button>Open Modal</button>,
  open: true,
  setOpenModal: jest.fn(),
  setErrors: jest.fn(),
};

describe('Modal component', () => {
  test('renders the modal with correct title and description', () => {
    render(<Modal {...modalProps} />);

    // Check if the modal title and description are rendered correctly
    expect(screen.getByText('Test Modal Title')).toBeInTheDocument();
    expect(screen.getByText('This is a test modal description.')).toBeInTheDocument();
  });

  test('renders modal body and footer components', () => {
    render(<Modal {...modalProps} />);

    // Check if the body content is rendered correctly
    expect(screen.getByText('Body Content')).toBeInTheDocument();

    // Check if the footer content (button) is rendered correctly
    expect(screen.getByText('Close')).toBeInTheDocument();
  });

  test('calls setOpenModal when modal footer button is clicked', () => {
    render(<Modal {...modalProps} />);

    // Simulate click on the footer button
    fireEvent.click(screen.getByLabelText('Close'));

    // Check if setOpenModal is called when footer button is clicked
    expect(modalProps.setOpenModal).toHaveBeenCalledTimes(1);
  });

  test('does not render modal when open is false', () => {
    const closedModalProps = { ...modalProps, open: false };
    render(<Modal {...closedModalProps} />);

    // The modal should not be in the document when `open` is false
    expect(screen.queryByText('Test Modal Title')).toBeNull();
  });
});
