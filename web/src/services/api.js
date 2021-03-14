// const senddatatoapi = (data) => {
//   return fetch("http://localhost:3001/card", {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       return data;
//     });
// };

// export default senddatatoapi;

const getCard = () => {
  //return (fetch("http://localhost:3000/card/:id:/")
  return fetch("http://localhost:3000/card/card")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

const sendCard = (data) => {
  return fetch("http://localhost:3000/card", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export default {
  getCard: getCard,
  sendCard: sendCard,
};
