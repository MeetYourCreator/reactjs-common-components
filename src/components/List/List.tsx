import { data } from './utils';
import './styles.css';

export const List = () => {
  // const data = [
  //   'abc',
  //   'def',
  //   { keyValue1: '', keyValue2: 333, keyValue4: [1, '234', 5] },
  //   123,
  //   [
  //     9,
  //     { a: 123, def: '888', ghi: { a: 456 } },
  //     123,
  //     'nx',
  //     [123, '0', [{ e: 2, abc: { h: 91, l: { htw: '123' } } }]],
  //   ],
  // ];

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
            console.log('deepTraversal arrEntry:', entry);

            
            if (Array.isArray(entry) === true) {
              console.log('deepTraversal arrEntry:', entry);
              return entry.map((arrEntry: any) => {
                switch (typeof arrEntry) {
                  case 'string':
                    return (
                      <ul>
                        <li>{arrEntry}</li>
                      </ul>
                    );
                  case 'number':
                    return (
                      <ul>
                        <li>{arrEntry}</li>
                      </ul>
                    );
                  case 'boolean':
                    return (
                      <ul>
                        <li>{arrEntry}</li>
                      </ul>
                    );
                  case 'object':
                    (function deepTraversal(obj: any, index) {
                      console.log('deepTraversal arrEntry:', obj);
                      for (const key in obj) {
                        console.log('deepTraversal arrEntry:', obj[key]);
                        if (typeof obj[key] === 'object') {
                          deepTraversal(obj[key]);
                        } else {
                          return (
                            <ul>
                              console.log('deepTraversal arrEntry:', obj[key])
                              <li key={`${index}${key}`}>{obj[key]}</li>
                            </ul>
                          );
                        }
                      }
                    })(arrEntry);
                }
              });
            } else {
              (function deepTraversal(obj: any, index) {
                for (const key in obj) {
                  if (typeof obj[key] === 'object') {
                    deepTraversal(obj[key]);
                  } else {
                    return (
                      <ul>
                        console.log('deepTraversal entry:', obj[key])
                        <li key={`${index}${key}`}>{obj[key]}</li>
                      </ul>
                    );
                  }
                }
              })(entry);
            }
        }
      })}
    </div>
  );
};
