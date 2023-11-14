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
              return (function deepTraversal() {
                return Object.entries(entry).map((obj: any) => {
                  //renders string values of obj
                  if (typeof obj[1] === 'string') {
                    return (
                      <ul>
                        <li>{obj[1]}</li>
                      </ul>
                    );
                    //renders number values of obj
                  } else if (typeof obj[1] === 'number') {
                    return (
                      <ul>
                        <li>{obj[1]}</li>
                      </ul>
                    );
                    //renders boolean values of obj
                  } else if (typeof obj[1] === 'boolean') {
                    return (
                      <ul>
                        <li>{obj[1]}</li>
                      </ul>
                    );
                    //Goodup to this point 11/14
                    //
                    //
                    //
                    //what remains is if obj[1] ia an array or an object
                    //if obj[1] is not an array
                  } else if (Array.isArray(obj[1]) === false) {
                    (function deepTraversal() {
                      return Object.entries(entry).map((obj: any) => {
                        return (
                          <ul>
                            <li>{obj[1]}</li>
                          </ul>
                        );
                      });
                    })();
                  }
                });
              })();
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
