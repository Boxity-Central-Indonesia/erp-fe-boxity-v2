import { render, screen } from '@testing-library/react';
import { ModalBody } from './ModalBody';
import '@testing-library/jest-dom';

describe('ModalBody component', () => {
  test('renders the ModalBody with children', () => {
    // Render ModalBody with some children
    render(
      <ModalBody>
        <p>Test Body Content</p>
      </ModalBody>
    );

    // Check if the children (content) is rendered
    expect(screen.getByText('Test Body Content')).toBeInTheDocument();
  });
});
