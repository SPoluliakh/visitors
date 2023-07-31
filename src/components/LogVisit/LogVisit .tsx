import { useEffect } from 'react';

import axios from 'axios';

export const LogVisit = () => {
  useEffect(() => {
    logVisit();
  }, []);

  const logVisit = async () => {
    try {
      const response = await axios.get('https://api.ipify.org?format=json');
      const ip = response.data.ip;
      const visitData = {
        timestamp: Date.now(),
        url: window.location.href,
        ipAddress: ip,
      };

      await axios.post('https://visitor-log.onrender.com/log', visitData);
      // await axios.post('http://localhost:4000/log', visitData);
    } catch (error) {
      console.log(error);
    }
  };

  return <div>TEST</div>;
};
