import React from 'react';
import { render, screen } from '@testing-library/react';
import Alert from './Alert';
import useAlert from './useAlert';

jest.mock('./useAlert', () => jest.fn());

const renderComponent = () => render(<Alert />);

describe('Alert', () => {
  beforeEach(() => {
    useAlert.mockReturnValue(true);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should render text "New client has been added" when displayAlert is true', () => {
    renderComponent();
    expect(useAlert).toHaveBeenCalledWith();
    expect(screen.getByText('New client has been added')).toBeInTheDocument();
  });

  it('should not render alert component when displayAlert is false', () => {
    useAlert.mockReturnValue(false);
    renderComponent();
    expect(useAlert).toHaveBeenCalledWith();
    expect(
      screen.queryByText('New client has been added')
    ).not.toBeInTheDocument();
  });
});
