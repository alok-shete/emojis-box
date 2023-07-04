import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Emoji from '../src/index';

describe('Emoji Component', () => {
  it('should render the correct emoji based on the provided name', () => {
    // Arrange
    const emojiName = 'grinning face';

    // Act
    const { getByText } = render(<Emoji name={emojiName} />);

    // Assert
    expect(getByText('😀')).toBeInTheDocument();
  });

  it('should render the "prohibited" emoji when the provided name does not exist', () => {
    // Arrange
    const emojiName: any = 'non-existing emoji';

    // Act
    const { getByText } = render(<Emoji name={emojiName} />);

    // Assert
    expect(getByText('🚫')).toBeInTheDocument();
  });
});
