import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import Form from '.';

describe('Welcome component', () => {
  it('selects button correctly', () => {
    render(<Form />);

    const get = screen.getByTestId('form-get');
    const post = screen.getByTestId('form-post');

    // fireEvent.click(get);

    expect(get).toHaveStyle("backgroundColor: green");
    expect(post).toHaveStyle("backgroundColor: grey");

    fireEvent.click(post);

    // expect(post).toHaveStyle("backgroundColor: orange");
  });
  
});