import React from 'react';
import { useHistory } from 'react-router-dom';

export const AboutPage: React.FunctionComponent = () => {
  const history = useHistory();
  return (
    <>
      <h1>Страница информации</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi amet quis
        repellendus dolor labore architecto quibusdam veritatis eos earum
        doloremque deserunt, nam aut blanditiis nisi ipsum accusantium obcaecati
        illo vitae?
      </p>
      <button className="btn" onClick={() => history.push('/')}>
        Обратно к списку дел
      </button>
    </>
  );
};
