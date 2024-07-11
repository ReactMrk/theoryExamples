import React from 'react';
import ClientForm from "./ClientForm";
import ClientList from "./ClientList";
import { ClientProvider } from './ClientContext';

const ClientManagement = () => {
  return (
    <ClientProvider>
      <ClientForm />
      <ClientList />
    </ClientProvider>
  )
};

export default ClientManagement;