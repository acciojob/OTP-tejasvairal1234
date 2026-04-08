const codes = document.querySelectorAll('.code');

// Focus first input on load
if (codes.length > 0) {
  codes[0].focus();
}

codes.forEach((code, index) => {
  code.addEventListener('keydown', (e) => {
    const key = e.key;

    // Allow only digits (0–9)
    if (key >= '0' && key <= '9') {
      code.value = ''; // clear before inserting new digit

      setTimeout(() => {
        // Move to next input
        if (index < codes.length - 1) {
          codes[index + 1].focus();
        }
      }, 10);
    }

    // Handle Backspace
    else if (key === 'Backspace') {
      setTimeout(() => {
        if (code.value === '' && index > 0) {
          // Move focus to previous input and clear it
          codes[index - 1].focus();
          codes[index - 1].value = '';
        }
      }, 10);
    }

    // Allow Tab key, block everything else
    else if (key !== 'Tab') {
      e.preventDefault();
    }
  });

  // Optional: handle paste (bonus improvement)
  code.addEventListener('paste', (e) => {
    const data = e.clipboardData.getData('text').split('');

    if (data.length === codes.length) {
      codes.forEach((input, i) => {
        input.value = data[i];
      });
      codes[codes.length - 1].focus();
    }

    e.preventDefault();
  });
});