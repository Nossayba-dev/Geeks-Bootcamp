const apiKey = 'de2a27a6025dd519a3747295'; // Replace with your key

const fromSelect = document.getElementById('from');
const toSelect = document.getElementById('to');
const amountInput = document.getElementById('amount');
const resultEl = document.getElementById('result');
const switchBtn = document.getElementById('switch');

async function fetchSupportedCurrencies() {
  const res = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/codes`);
  const data = await res.json();
  if(data.result === "success"){
    for(const [code, name] of data.supported_codes){
      const optionFrom = document.createElement('option');
      optionFrom.value = code;
      optionFrom.textContent = `${code} - ${name}`;
      fromSelect.appendChild(optionFrom);

      const optionTo = optionFrom.cloneNode(true);
      toSelect.appendChild(optionTo);
    }
    // Set default selections
    fromSelect.value = 'USD';
    toSelect.value = 'EUR';
  } else {
    alert("Failed to fetch supported currencies.");
  }
}

async function convertCurrency() {
  const from = fromSelect.value;
  const to = toSelect.value;
  const amount = amountInput.value;

  if(!amount || amount <= 0){
    alert("Please enter a valid amount");
    return;
  }

  const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${from}/${to}/${amount}`;
  const res = await fetch(url);
  const data = await res.json();

  if(data.result === "success"){
    resultEl.textContent = `${amount} ${from} = ${data.conversion_result.toFixed(2)} ${to}`;
  } else {
    resultEl.textContent = "Conversion failed. Try again.";
  }
}

// Switch currencies and re-convert
switchBtn.addEventListener('click', () => {
  const temp = fromSelect.value;
  fromSelect.value = toSelect.value;
  toSelect.value = temp;
  convertCurrency();
});

document.getElementById('convert').addEventListener('click', convertCurrency);

// Initialize currency options on load
fetchSupportedCurrencies();
