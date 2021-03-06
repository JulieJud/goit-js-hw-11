
// sub-task 1


const delay = ms => {
    return Promise.resolve(ms);
    // Change this function
};

const logger = time => console.log(`Fulfilled after ${time}ms`);

// Tests
delay(2000).then(logger); // Fulfilled after 2000ms
delay(1000).then(logger); // Fulfilled after 1000ms
delay(1500).then(logger); // Fulfilled after 1500ms


// sub-task 2

const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: false },
];

const toggleUserState = (allUsers, username,) => {

    return new Promise (resolve => {
    const updatedUsers = allUsers.map(user =>
      user.name === username ? { ...user, active: !user.active } : user
    )
    resolve (updatedUsers);
  })
};
    

// Currently the function works like this
//toggleUserState(users, 'Mango', console.table);
//toggleUserState(users, 'Ajax', console.table);

// The function should work like this
toggleUserState(users, 'Mango').then(console.table);
toggleUserState(users, 'Ajax').then(console.table);



// sub-task 3


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

  const makeTransaction = transaction => { 
  return new Promise ((resolve,reject) => {
    const delay = randomIntegerFromInterval(200, 500);
  
    setTimeout(() => {
      const canProcess = Math.random() > 0.3;

      if (canProcess) {
        resolve({ id: transaction.id, time: delay });
      } 
        reject(transaction.id);
    }, delay);
  })};

const logSuccess = ({ id, time }) => {
  console.log(`Transaction ${id} processed in ${time}ms`);
};

const logError = id => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};

// Currently the function works like this
//makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
//makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);

// The function should work like this
makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);
makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);