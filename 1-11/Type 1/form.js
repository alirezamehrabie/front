function validation()
{
	var form = document.getElementById('form');
	var email = document.getElementById('email').value;
	var text = document.getElementById('text');
	var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,4}$/;

	if(email.match(pattern))
	{
		form.classList.add("valid");
		form.classList.remove("invalid");
		text.innerHTML = "ایمیل معتبر است";
		text.style.color = "#00ff00";
	}
	else
	{
		form.classList.add("invalid");
		form.classList.remove("valid");
		text.innerHTML = "ایمیل نامعتبر است";
		text.style.color = "#ff113a";
	}
	if(email=="")
	{
		form.classList.remove("invalid");
		form.classList.remove("invalid");
		text.innerHTML = ""; 
		text.style.color = "00ff00";
	}
}