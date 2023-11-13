import './styles.css';

export const List = () => {
  const data = [
    'abc',
    'def',
    { keyValue1: '', keyValue2: 333, keyValue4: [1, '234', 5] },
    123,
    [
      9,
      { a: 123, def: '888', ghi: { a: 456 } },
      123,
      'nx',
      [123, '0', [{ e: 2, abc: { h: 91, l: { htw: '123' } } }]],
    ],
  ];
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
            if (Array.isArray(entry) === true) {
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
                    (function deepTraversal(obj: any) {
                      for (const key in obj) {
                        if (typeof obj[key] === 'object') {
                          deepTraversal(obj[key]);
                        } else {
                          return (
                            <ul>
                              <li>{obj[key]}</li>
                            </ul>
                          );
                        }
                      }
                    })(arrEntry);
                }
              });
            } else {
              (function deepTraversal(obj: any) {
                for (const key in obj) {
                  if (typeof obj[key] === 'object') {
                    deepTraversal(obj[key]);
                  } else {
                    console.log(key, obj[key]);
                  }
                }
              })(entry);
            }
        }
      })}
    </div>
  );
};
