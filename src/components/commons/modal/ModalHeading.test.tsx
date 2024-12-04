import { render, screen } from '@testing-library/react';
import { ModalHeading } from './ModalHeading';
import '@testing-library/jest-dom';
import * as Dialog from "@radix-ui/react-dialog";


describe('ModalHeading component', () => {
  const modalTitle = 'Test Modal Title';
  const modalDescriptions = 'This is a test modal description.';

  test('renders the modal title and description', () => {
    // Render ModalHeading with title and description
    render(<Dialog.Root><ModalHeading modalTitle={modalTitle} modalDescriptions={modalDescriptions} /></Dialog.Root>);

    // Check if the modal title is rendered correctly
    expect(screen.getByText(modalTitle)).toBeInTheDocument();

    // Check if the modal description is rendered correctly
    expect(screen.getByText(modalDescriptions)).toBeInTheDocument();
  });
});
