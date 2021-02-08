const fromCurrencyEle = document.getElementById('fromCurrency');
const fromAmountEle = document.getElementById('fromAmount');
const toCurrencyEle = document.getElementById('toCurrency');
const toAmountEle = document.getElementById('toAmount');
const rateEle = document.getElementById('rate');
const exchange = document.getElementById('exchange');
 
fromCurrencyEle.addEventListener('change', calculate);
fromAmountEle.addEventListener('input', calculate);
toCurrencyEle.addEventListener('change', calculate);
toAmountEle.addEventListener('input', calculate);
 
exchange.addEventListener('click', () => {
	const temp = fromCurrencyEle.value;
	fromCurrencyEle.value = toCurrencyEle.value;
	toCurrencyEle.value = temp;
	calculate();
});
 
function calculate() {
	const fromCurrency = fromCurrencyEle.value;
	const toCurrency = toCurrencyEle.value;
	
	fetch(`https://api.exchangeratesapi.io/latest?base=${fromCurrency}`)
		.then(response => response.json())
		.then(response => {
		const rate = response.rates[toCurrency];
		rateEle.innerText = `1 ${fromCurrency} = ${rate} ${toCurrency}`
		toAmountEle.value = (fromAmountEle.value * rate).toFixed(2);
	})
}
 
calculate();