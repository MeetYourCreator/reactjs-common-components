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
            switch (Array.isArray(entry)) {
              case false:
                return Object.entries(entry).map((obj: any) =>
                  // console.log(
                  //   'obj[1]:',
                  //   obj[1],
                  //   typeof obj[1],
                  //   Array.isArray(obj[1])
                  // );
                  {
                    switch (Array.isArray(obj[1])) {
                      //obj[1] is an object
                      case false:
                        console.log('obj[1]', obj[1]);
                        if (typeof obj[1] !== 'object') {
                          return (
                            <>
                              <ul>
                                <li>{obj[1]}</li>
                              </ul>
                            </>
                          );
                        } else {
                          console.log(typeof obj[1]);
                        }
                        // Object.entries(obj[1]).map((el: any, index: any) => {
                        //   console.log('el', el[1]);
                        //   return (
                        //     <>
                        //       <ul>
                        //         <li key={index}>{el}</li>
                        //       </ul>
                        //     </>
                        //   );
                        // });

                        //obj[1] is an array
                        break;
                      case true:

                      // console.log('true', Array.isArray(obj[1]), obj[1]);
                    }
                  }
                );

              case true:
            }
          //if the object is not an array

          //Goodup to this point 11/14
          //
          //
          //
          //what remains is if obj[1] ia an array or an object
          //if obj[1] is not an array
          //       } else if (Array.isArray(obj[1]) === false) {
          //         (function deepTraversal() {
          //           return Object.entries(entry).map((obj: any) => {
          //             return (
          //               <ul>
          //                 <li>{obj[1]}</li>
          //               </ul>
          //             );
          //           });
          //         })();
          //       }
          //     });
          //   })();
          // } else {
          //   // (function deepTraversal(obj: any, index) {
          //   //   for (const key in obj) {
          //   //     if (typeof obj[key] === 'object') {
          //   //       deepTraversal(obj[key]);
          //   //     } else {
          //   //       return (
          //   //         <ul>
          //   //           console.log('deepTraversal entry:', obj[key])
          //   //           <li key={`${index}${key}`}>{obj[key]}</li>
          //   //         </ul>
          //   //       );
          //   //     }
          //   //   }
          //   // })(entry);
          // }
        }
      })}
    </div>
  );
};
