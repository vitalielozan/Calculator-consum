// km, litri, calculeBtn, consumFinal

const km = document.querySelector('#km');
const litri = document.querySelector('#litri');
const calculeBtn = document.querySelector('#calculeBtn');
const consumFinal = document.querySelector('#consumFinal');

calculeBtn.addEventListener('click', () => {
  if (litri.value == '' || km.value == '') {
    alert('Introdu datele corect');
    return;
  }
  const results = (100 * litri.value) / km.value;
  consumFinal.innerHTML = results.toFixed(1);
  km.value = '';
  litri.value = '';
});
