const loadRandomQuote = (resultDiv) => {
  fetch("http://localhost:4000/random-quote").then((response) =>
    response.json().then((result) => {
      resultDiv.classList.add("alert", "alert-success");
      resultDiv.innerHTML = `<h2>Topic: ${result.topic} <br> Quote: ${result.quote}</h2>`;
    })
  );
};
