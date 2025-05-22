function getFormvalue() {
    //Write your code here
	  event.preventDefault();
	  const firstName = form.fname.value.trim();
    const lastName = form.lname.value.trim();
	   alert(`${firstName} ${lastName}`);

}
