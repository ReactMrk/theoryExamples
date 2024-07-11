import React from 'react';
import { render, screen } from '@testing-library/react';
import ClientManagement from './ClientManagement';
import ClientForm from './ClientForm';
import ClientList from './ClientList';

// jest.mock('./ClientForm', () => () => <div>Client form component</div>);
// jest.mock('./ClientList', () => () => <div>Client list component</div>);

jest.mock('./ClientForm', () => jest.fn());
jest.mock('./ClientList', () => jest.fn());

ClientForm.mockImplementation(() => <div>Client form component</div>);
ClientList.mockImplementation(() => <div>Client list component</div>);

const renderComponent = () => render(<ClientManagement />);

describe('ClientManagement', () => {
  it('should render components ClientForm and ClientList', () => {
    renderComponent();
    expect(ClientForm).toHaveBeenCalledWith({}, {});
    expect(ClientList).toHaveBeenCalledWith({}, {});
    expect(screen.getByText('Client form component')).toBeInTheDocument();
    expect(screen.getByText('Client list component')).toBeInTheDocument();
  });
});
