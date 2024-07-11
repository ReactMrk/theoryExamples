
import React, { useContext } from 'react';
import { ClientContext } from './ClientContext';
import Alert from './Alert';

const ClientList = () => {
  const { clients } = useContext(ClientContext);
  return(
    <>
      <Alert />
      <ul className="client-list">
        {
          clients.map(client => {
            return (
              <li key={client.email}>
                <strong>{client.name}</strong><br />
                <span>Email: {client.email}</span><br />
                <span>Phone: {client.phone}</span><br />
                <span>Address: {client.address}</span><br />
              </li>
            )
          })
        }
      </ul>
    </>
  );
};

export default ClientList;