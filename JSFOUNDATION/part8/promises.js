/**promises are created by a keyword new and then the promises and prams, it takes callback and two parameters resove and reject */

function fetchdata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = false;
      if (success) {
        resolve("Data fetched successfully");

        /**resolve is for if everthing went success and anything passed should linked to .then() */
        /** we can use objects{}, arrays[] too, in reject also same follows*/

      } else {
        reject("Error fetching data"); /**reject is linked to .catch() */
      }
    }, 3000);
  });
}
/**if print it here it will provide promise in pending state, we have to use then and catch for the fulfilled(resolve) and rejected(reject) state.*/

//promise chaining{of .then() and .catch()},we can chain .then too//

fetchdata()
  .then((data) => {
    console.log(data);
    return `Satyam`;
  }) // then and catch have a callback,data catches anything sent via resolve.
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
