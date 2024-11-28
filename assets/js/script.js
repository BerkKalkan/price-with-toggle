const priceList = document.querySelectorAll('.price');
const inputChange = document.querySelector(".input-change");

inputChange.addEventListener('input', () => {
  if (inputChange.checked) {
    for (let i = 0; i < priceList.length; i++) {
      priceList[0].innerHTML = '19.99';
      priceList[1].innerHTML = '24.99';
      priceList[2].innerHTML = '39.99';
    }
  } else {
    for (let i = 0; i < priceList.length; i++) {
      priceList[0].innerHTML = '199.99';
      priceList[1].innerHTML = '249.99';
      priceList[2].innerHTML = '399.99';
    }
  }
});