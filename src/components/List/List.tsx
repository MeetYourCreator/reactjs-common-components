import { ReactNode } from 'react';
import { data } from './utils';
import './styles.css';

export const List = () => {
  function deepTraversal(entry: any) {
    Object.entries(entry).map((obj: any) => {
      if (typeof obj[1] === 'object') {
        deepTraversal(obj[1]);
      } else {
        return (
          <ul>
            <li>{obj[1]}</li>
          </ul>
        );
      }
    });
  }

  return (
    <div className="listContainer">
      {data.map((entry: any, index) => {
        switch (typeof entry) {
          case 'string':
            return (
              <ul>
                <li key={index}>{entry}</li>
              </ul>
            );
          case 'number':
            return (
              <ul>
                <li key={index}>{entry}</li>
              </ul>
            );
          case 'boolean':
            return (
              <ul>
                <li key={index}>{entry}</li>
              </ul>
            );
          case 'object':
            // switch (Array.isArray(entry)) {
            //   case false:
            return Object.entries(entry).map((obj: any, index: number) => {
              if (typeof obj[1] !== 'object') {
                return (
                  <ul>
                    <li key={`2-${index}`}>{obj[1]}</li>
                  </ul>
                );
              } else if (Array.isArray(obj[1])) {
                console.log(entry, obj[1]);

                return obj[1].map((element: any, index: number) => {
                  console.log('element', element);
                  return (
                    <ul>
                      <li key={`3-${index}`}>{element[1]}</li>
                    </ul>
                  );
                });
              }
              //if Array is not Array obj[1]
              else if (!Array.isArray(obj[1])) {
                return (
                  <h1>
                    obj[1] is not an array but an object. typeof obj[1]:{' '}
                    {typeof obj[1]}
                  </h1>
                );
              }
            });
        }
      })}
    </div>
  );
};
