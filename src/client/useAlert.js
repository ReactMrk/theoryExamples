import { useState, useEffect, useContext } from 'react';
import { ClientContext } from './ClientContext';

const useAlert = () => {
  const [displayAlert, setDisplayAlert] = useState(false);
  const { clients } = useContext(ClientContext);

  useEffect(() => {
    if (clients.length > 0) {
      setDisplayAlert(true);
      setTimeout(() => {
        setDisplayAlert(false);
      }, 2000);
    }
  }, [clients]);

  return displayAlert;
};

export default useAlert;
