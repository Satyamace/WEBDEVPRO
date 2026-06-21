function fetchUserdata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "Satyam", url: "https://acesatyam" });
    }, 3000);
  });
}

async function getUserData() {
  try {
    console.log("Fetching user data...");
    const userData = await fetchUserdata(); //only use await keyword when have async over the function.
    console.log("User data fetched successfully");
    
    console.log("User Data: ", userData);
    /**try and catch: This keyword is used to try to do a certain task if its happened good, but if there any error beign thrown dont crash the program just throw the error */
  } catch (error) {
    console.log("Error fetching data", error);
  }
}
getUserData();
