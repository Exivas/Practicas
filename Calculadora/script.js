let displayText = document.getElementById('display-text');
let btns = document.querySelectorAll('.btn-controller');



document.addEventListener('keydown', letter=(e)=>{
  if(e.key==='c'||e.key==='C'){
    displayText.value='';
  }
  if(e.key==='Enter'){
    evaluatez()
  } 
})

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        displayText.value += btn.innerText;
    });
});


function evaluatez() {
    try {
        displayText.value = eval(displayText.value);
    } catch (error) {
        displayText.value = 'Error';
    }
}
