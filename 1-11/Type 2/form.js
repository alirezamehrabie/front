const inputList = document.querySelectorAll('input');
for (const input of inputList){
	input.addEventListener('blur', validity_check);
}



function validity_check(event){
	const input = event.target;
	let validityState = input.validity


	if (validityState.valueMissing) 
	{
		input.setCustomValidity('کادر ایمیل هنوز پر نشده');
	}
	else if (validityState.rangeUnderflow)
	{
		input.setCustomValidity('عدد بالاتری وارد کنید');
	}
	else if (validityState.tooLong)
	{
		input.setCustomValidity('حداکثر تعداد کاراکتر 50 می باشد');
	}
	else if (validityState.typeMismatch) 
	{
		input.setCustomValidity('ایمیل باید دارای @ باشد');
	}
	
	else 
	{
		input.setCustomValidity('');
	}

	  input.reportValidity();
}