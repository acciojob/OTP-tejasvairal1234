// your JS code here. If required.
const codes = document.querySelectorAll('.code');

// focus first input initially
if (codes.length > 0) {
  codes[0].focus();
}

codes.forEach((code, idx) => {
  code.addEventListener('keydown', (e) => {
    const key = e.key;

    // Allow only digits 0–9
    if (key >= '0' && key <= '9') {
      code.value = '';
      // move to next after filling
      setTimeout(() => {
        if (idx < codes.length - 1) {
          codes[idx + 1].focus();
        }
      }, 10);
    }
    // Handle backspace
    else if (key === 'Backspace') {
      setTimeout(() => {
        if (code.value === '' && idx > 0) {
          codes[idx - 1].focus();
          codes[idx - 1].value = '';
        }
      }, 10);
    } else if (key !== 'Tab') {
      // prevent non-numeric characters except Tab for accessibility
      e.preventDefault();
    }
  });
});