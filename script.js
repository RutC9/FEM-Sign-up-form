function verify() {
  let inputs = document.querySelectorAll('input');
  //   let email_input=document.querySelectorAll('input[type=email]');
  //   let pass=document.querySelectorAll('input[type=password]');
  console.log(inputs);

  for (let i = 0; i < inputs.length; i++) {
    let text = 'inp' + i; /* for p tags */
    // console.log(text);
    let ptag = document.getElementById(text);
    let form_input = inputs[i];

    if (inputs[i].value == '') {
      /* display error p tag */
      ptag.style.display = 'block';
      form_input.classList.add('empty-text'); /* adding a class */
    } else if (inputs[i].value != '' && ptag.style.display == 'block') {
      /* hide error p tag */
      console.log('REMOVE');
      ptag.style.display = 'none';
      form_input.classList.remove('empty-text'); /* removing a class */
    }
  }
}

//add function empty-text class in inputs,chnage placeholder of email address ,remove placeholder of other inputs
