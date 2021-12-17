const inputList = document.querySelectorAll('input');
for (const input of inputList){
	input.addEventListener('focusout', validity_check);
}


function validity_check(event){
	const input = event.target;
	let validityState = input.validity


	if (validityState.valueMissing) {
		input.setCustomValidity('فیلد را پر کنید');
	  } else if (validityState.rangeUnderflow) {
		input.setCustomValidity('عدد بالاتری وارد کنید');
	  } else if (validityState.rangeOverflow) {
		input.setCustomValidity('عدد پایین تری وارد کنید');
	  } else if (validityState.stepMismatch) {
		input.setCustomValidity('بر اساس گام نیست');
	  } else {
		input.setCustomValidity('');
	  }

	  input.reportValidity();
}