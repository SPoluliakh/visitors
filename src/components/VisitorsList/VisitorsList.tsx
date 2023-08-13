import { useEffect, useState } from 'react';
import axios from 'axios';
import * as SC from './Visitors.styled';

interface IVisitors {
  country: any;
  createdAt: string;
  ipAddress: string;
  timestamp: string;
  updatedAt: string;
  email: string;
  password: string;
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
      {visitors.map(
        ({ country, ipAddress, timestamp, url, password, email }) => {
          const date = new Date(+timestamp);
          var localDateString = date.toLocaleString();
          return (
            <SC.VisitorsListItem key={timestamp}>
              <p>continent_name: {country.continent_name}</p>
              <p>country_code: {country.country_code}</p>
              <p>country_name: {country.country_name}</p>
              <p>region_code: {country.region_code}</p>
              <p>region_name: {country.region_name}</p>
              <p>city: {country.city}</p>
              <p>zip: {country.zip}</p>
              <p>latitude: {country.latitude}</p>
              <p>longitude: {country.longitude}</p>
              <p>city: {country.city}</p>

              <p>ipAddress: {ipAddress}</p>
              <p>timestamp:{localDateString}</p>
              <p>url: {url}</p>
              <p>email: {email}</p>
              <p>password: {password}</p>
            </SC.VisitorsListItem>
          );
        }
      )}
    </SC.VisitorsList>
  );
};
