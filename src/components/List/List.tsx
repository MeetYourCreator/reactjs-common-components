import { data } from './utils';
import './styles.css';

export const List = () => {
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
            //if the object is not an array
            if (Array.isArray(entry) === false) {
              console.log('object is not an array, object is:', entry);
              return Object.entries(entry).map((obj: any) => {
                console.log('object is :', obj[1], typeof obj[1]);

                if (typeof obj[1] === 'string') {
                  console.log('string obj:', obj[1]);
                  return (
                    <ul>
                      <li>{obj[1]}</li>
                    </ul>
                  );
                } else if (typeof obj[1] === 'string') {
                  return (
                    <ul>
                      <li>{obj}</li>
                    </ul>
                  );
                } else if (typeof obj[1] === 'boolean') {
                  return (
                    <ul>
                      <li>{obj}</li>
                    </ul>
                  );
                } else if (typeof obj[1] === 'object') {
                  (function deepTraversal(obj: any, index) {
                    console.log('deepTraversal object is:', obj);
                    for (const key in obj) {
                      // console.log('deepTraversal object is:', obj);
                      if (typeof obj[key] === 'object') {
                        deepTraversal(obj[key]);
                      } else {
                        return (
                          <ul>
                            {/* console.log('deepTraversal arrEntry:', obj[key]) */}
                            <li key={`${index}${key}`}>{obj[key]}</li>
                          </ul>
                        );
                      }
                    }
                  })(obj);
                }
              });
            } else {
              // (function deepTraversal(obj: any, index) {
              //   for (const key in obj) {
              //     if (typeof obj[key] === 'object') {
              //       deepTraversal(obj[key]);
              //     } else {
              //       return (
              //         <ul>
              //           console.log('deepTraversal entry:', obj[key])
              //           <li key={`${index}${key}`}>{obj[key]}</li>
              //         </ul>
              //       );
              //     }
              //   }
              // })(entry);
            }
        }
      })}
    </div>
  );
};
