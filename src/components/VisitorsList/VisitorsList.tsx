import { useEffect, useState } from 'react';
import axios from 'axios';
import * as SC from './Visitors.styled';

interface IVisitors {
  country: string;
  createdAt: string;
  ipAddress: string;
  timestamp: string;
  updatedAt: string;
  url: string;
  _id: string;
}

export const VisitorsList = () => {
  const [visitors, setVisitors] = useState<[] | IVisitors[]>([]);
  useEffect(() => {
    getVisitors().then(setVisitors).catch(console.log);
  }, []);

  const getVisitors = async () => {
    const { data } = await axios.get(
      'https://visitor-log.onrender.com/visitors'
    );
    return data.data.visitors;
  };
  return (
    <SC.VisitorsList>
      {visitors.map(({ country, ipAddress, timestamp, url }) => {
        const date = new Date(+timestamp);
        var localDateString = date.toLocaleString();
        return (
          <SC.VisitorsListItem>
            <p>country: {country}</p>
            <p>ipAddress: {ipAddress}</p>
            <p>timestamp:{localDateString}</p>
            <p>url: {url}</p>
          </SC.VisitorsListItem>
        );
      })}
    </SC.VisitorsList>
  );
};
