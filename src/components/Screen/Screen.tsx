import React, { useId } from 'react';
import './styles.css';

export const Screen = ({ children }: any) => {
  const screenId = useId();

  return (
    <section className="appContainer" id={screenId}>
      {children.map((screen: any, index: number) => {
        return (
          <div className="screenContainer panels" key={index}>
            {screen}
          </div>
        );
      })}
    </section>
  );
};
