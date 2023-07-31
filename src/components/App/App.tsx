import { useState } from 'react';
import { LogVisit } from '../LogVisit/LogVisit ';
import { VisitorsList } from '../VisitorsList/VisitorsList';
import { Form } from '../Form/Form';

export const App = () => {
  const [visit, setVisit] = useState(false);

  const handleVisit = () => {
    setVisit(!visit);
  };

  return (
    <>
      <LogVisit />
      <button onClick={handleVisit} type="button">
        visit
      </button>
      <Form />

      {visit && <VisitorsList />}
    </>
  );
};
