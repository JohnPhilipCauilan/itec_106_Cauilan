const numTermsInput = document.getElementById('num-terms');
const generateSeriesButton = document.getElementById('generate-series');
const resultDiv = document.getElementById('resultDiv');
const errorMessage = document.getElementById('error-message');

generateSeriesButton.addEventListener('click', () => {
  const numTerms = parseInt(numTermsInput.value.trim(), 10);

  if (isNaN(numTerms) || numTerms <= 0 || numTerms >= 100) {
    resultDiv.textContent = '';
    errorMessage.textContent = 'Ensure the number is not greater than or equal to 100.';
    errorMessage.classList.remove('hidden');

    generateSeriesButton.disabled = true;

    setTimeout(() => {
      generateSeriesButton.disabled = false;
    }, 1000);
  } else {
    errorMessage.textContent = '';
    errorMessage.classList.add('hidden');

    const fibonacciSeries = [0, 1];
    for (let i = 2; i < numTerms; i++) {
      fibonacciSeries[i] = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
    }

    resultDiv.textContent = fibonacciSeries.slice(0, numTerms).join(', ');

    window.scrollTo({ top: 0, behavior: 'smooth' });

    generateSeriesButton.disabled = true;

    setTimeout(() => {
      generateSeriesButton.disabled = false;
    }, 1000);
  }
});