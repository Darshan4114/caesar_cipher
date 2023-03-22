function encrypt() {
	// Get the input values
	const text = document.getElementById("text").value;
	const shift = parseInt(document.getElementById("shift").value);

	// Convert the text to uppercase
	const uppercaseText = text.toUpperCase();

	// Initialize the result variable
	let result = "";

	// Iterate over each character in the text
	for (let i = 0; i < uppercaseText.length; i++) {
		// Get the ASCII code of the character
		const charCode = uppercaseText.charCodeAt(i);

		// Check if the character is a letter
		if (charCode >= 65 && charCode <= 90) {
			// Apply the shift
			const shiftedCharCode = ((charCode - 65 + shift) % 26) + 65;

			// Convert the shifted character code back to a character
			const shiftedChar = String.fromCharCode(shiftedCharCode);

			// Add the shifted character to the result
			result += shiftedChar;
		} else {
			// If the character is not a letter, just add it to the result
			result += uppercaseText.charAt(i);
		}
	}

	// Update the result on the page
	document.getElementById("result").textContent = result;
}
