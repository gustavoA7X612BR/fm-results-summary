function setAnimatedResult(elementQuery, value) {
  const steps = 4;
  let number = 0;
  const element = document.querySelector(elementQuery);
  const timer = setInterval(() => {
    if (number > steps) {
      clearInterval(timer);
      element.innerText = value;
      return;
    }
    element.innerText = Math.round((value / steps) * number);
    number += 1;
  }, 200);
}

const listElement = document.querySelector('.summary-items');

function fillList(data) {
  data.forEach((item) => {
    const { category, score, icon } = item;
    const listItem = document.createElement('li');
    listItem.innerHTML = `<img width="20" height="20" class="icon" src="${icon}" alt="" role="none">
    <p class="name">${category}</p>
    <p class="score"><span>${score}</span> / 100</p>`;
    const categoryLowerCase = category.toLowerCase();
    listItem.classList.add(categoryLowerCase);
    listElement.appendChild(listItem);
    setAnimatedResult(`li.${categoryLowerCase} .score span`, score);
  });
}

fetch('../data.json')
  .then((res) => res.json())
  .then((json) => {
    fillList(json);

    let averageScore = json.reduce((accumulator, { score }) => accumulator + score, 0);
    averageScore = Math.floor(averageScore / json.length);

    setAnimatedResult('.circle .scored', averageScore);
  });
