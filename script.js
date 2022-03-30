const changeAdvice = () => {
  fetch("https://api.adviceslip.com/advice").then((response) => {
    response.json().then((data) => {
      document.querySelector(".advice").innerHTML =
        "&#8220;" + data.slip.advice + "&#8221;";
      document.querySelector("#advice-id").innerHTML = "#" + data.slip.id;
    });
  });
};
