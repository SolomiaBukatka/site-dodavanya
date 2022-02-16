
      function myFunc(){
    
       
        let inputIn1 = +document.getElementById('text1').value;
        let inputIn2 = +document.getElementById('text2').value;
       // let button = document.querySelector('button').onclick;
        let a = inputIn1 + inputIn2;
       
           alert(`Число: ${a}`);
           document.getElementById("text1").value = "";
           document.getElementById("text2").value = "";
        
          console.log((a));
    }
  