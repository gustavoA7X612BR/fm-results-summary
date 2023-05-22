function setResults() {
  const scoredElement = document.querySelector('.scored');
  let number = 0;
  const timer = setInterval(() => {
    scoredElement.innerText = number;
    number++;
    if (number > 10 ) {
      clearInterval(timer);
    }
  }, 100);
}

setResults();