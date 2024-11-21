const lampadinaSpenta = document.querySelector('.off-lamp');
const lampadinaAccesa = document.querySelector('.on-lamp');
const btn = document.getElementById('bottone');

btn.addEventListener('click', ()=>{
  lampadinaSpenta.classList.toggle('hide');
  lampadinaAccesa.classList.toggle('hide');
  btn.innerHTML = lampadinaSpenta.classList.contains('hide') ? 'SPEGNI' : 'ACCENDI';
})
