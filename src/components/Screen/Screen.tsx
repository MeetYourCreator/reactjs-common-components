import React from 'react';
import './styles.css';

export const Screen = ({ children }: any) => {
  return (
    <section className="appContainer">
      {children.map((screen: any) => {
        return <div className="screenContainer panels">{screen}</div>;
      })}
    </section>
  );
};
