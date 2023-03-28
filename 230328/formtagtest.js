const Submittest = document.getElementById('Submittest');

const Onsubmit=()=>{
  if(Submittest.children[0].value!==undefined){
    window.alert('빈칸없이 입력하세요.')
  }
}

Submittest.setAttribute('onsubmit','return Onsubmit()');