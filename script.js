function formFunction() {
  let usernameCall = document.forms['loginForm']['username'].value;
  let emailCall = document.forms['loginForm']['email'].value;
  let passwordCall = document.forms['loginForm']['password'].value;
  if (usernameCall === '') {
    alert('Please Input Your Username !');
    return false;
  }
  if (emailCall === '') {
    alert('Please Input Your Email !');
    return false;
  }
  if (passwordCall === '') {
    alert('Please Input Your Password !');
    return false;
  }
  return alert('Your Login is Successfull.');
}
