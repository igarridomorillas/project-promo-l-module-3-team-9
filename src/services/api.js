const getDataFromApi = () => {
  fetch("https://awesome-profile-cards.herokuapp.com/card")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      this.setState({
        series: data,
      });
    });
};

export default {
  getDataFromApi,
};
