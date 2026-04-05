//your JS code here. If required.
const codes = document.querySelectorAll('.code');

codes[0].focus();

codes.forEach((code, idx) => {
  code.addEventListener('keydown', (e) => {

    // Allow only numbers and control keys
    if (e.key >= 0 && e.key <= 9) {
      code.value = "";
      setTimeout(() => {
        if (idx < codes.length - 1) {
          codes[idx + 1].focus();
        }
      }, 10);
    }

    // Handle backspace
    else if (e.key === "Backspace") {
      setTimeout(() => {
        if (code.value === "" && idx > 0) {
          codes[idx - 1].focus();
        }
      }, 10);
    }

  });
});