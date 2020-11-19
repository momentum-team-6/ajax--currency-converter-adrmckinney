// class stuff
/* global fetch*/
// const url = "https://api.github.com/orgs/momentum-team-6"
// const container = document.querySelector('#github-data')  This calls upon the id that was created in her HTML

// fetch(url)
//   .then(function(response) {
//   return response.json()
// })
//   .then(function(data){
//   console.log(data)
//   // container.innerHTML = `<h1>${data.name}</h1>`
// })
// this returns what we were able to do in Insomnia quickly. The promise (first .then) returns the data that was gathered in json format.

// fetch(url)
//   .then(res => res.json())
//   .then(data => {
//     container.innerHTML = `<h1>${data.name}</h1>`
//   })
//   .then(repos_url => fetch(reposUrl)
//   .then(res => res.json()
//   .then(data => {
      // const list = document.createElement('select')
      // conatiner.appendChild(list)
      // for (let repo of data) {
//      const listItem = document.createElement('option')
        // listItem.innerText = repo.name
        // list.appendChild(listItem)
//   }
// })
  


const currencies = [
  'EUR',
  'CAD',
  'HKD',
  'ISK',
  'PHP',
  'DKK',
  'HUF',
  'CZK',
  'AUD',
  'RON',
  'SEK',
  'IDR',
  'INR',
  'BRL',
  'RUB',
  'HRK',
  'JPY',
  'THB',
  'CHF',
  'SGD',
  'PLN',
  'BGN',
  'TRY',
  'CNY',
  'NOK',
  'NZD',
  'ZAR',
  'USD',
  'MXN',
  'ILS',
  'GBP',
  'KRW',
  'MYR'
]



// Create main Converter Container
const mainConverterContainer = document.createElement('div')
mainConverterContainer.classList.add('main-container')


// create title element
const titleElement = document.createElement('h1')
titleElement.innerText = "Currency Converter"
titleElement.classList.add("title")
mainConverterContainer.appendChild(titleElement)


// create currency country container (children: convertFrom and convertTo)
const currencyCountryContainer = document.createElement('div')
currencyCountryContainer.classList.add('dropdown-countainer')
mainConverterContainer.appendChild(currencyCountryContainer)

// create text before convertFrom dropdown
const instructionFrom = document.createElement('p')
instructionFrom.innerText = 'Convert from'
instructionFrom.classList.add('instruction-from-text')
currencyCountryContainer.appendChild(instructionFrom)

// create convertFrom dropdown menu inside currencyCountryContainer
const convertFrom = document.createElement('select')
convertFrom.classList.add('convert-from-dropdown')
currencyCountryContainer.appendChild(convertFrom)

// create instruction to convertTo dropdown
const instructionTo = document.createElement('p')
instructionTo.innerText = 'to'
instructionTo.classList.add('instruction-to-text')
currencyCountryContainer.appendChild(instructionTo)

// create convertFromList loop inside convertFrom

for (let currency of currencies) {
  const convertFromList = document.createElement('option')
  convertFromList.innerHTML = currency
  convertFrom.appendChild(convertFromList)
}


// create convertTo dropdown menu inside currencyCountyContainer
const convertTo = document.createElement('select')
convertTo.classList.add('convert-to-dropdown')
currencyCountryContainer.appendChild(convertTo)

// create convertToList loop inside convertTo
for (let currency of currencies) {
const convertToList = document.createElement('option')
  convertToList.innerHTML = currency
  convertTo.appendChild(convertToList)
}
// create currencyConverterContainer (children: convertFrom side and conversion side)
const currencyConverterContainer = document.createElement('div')
currencyConverterContainer.classList.add('calculationContainer')
mainConverterContainer.appendChild(currencyConverterContainer)

// create convert from side with quantityField and quantityCurrency
const fromContainer = document.createElement('div')
fromContainer.classList.add('from-container')
currencyConverterContainer.appendChild(fromContainer)

// create child quantityField inside fromContainer
const quantityField = document.createElement('input')
quantityField.classList.add('input-quantity')
quantityField.placeholder = "Input quantity"
quantityField.type = "number"
fromContainer.appendChild(quantityField)

// create display of from currency selected inside fromContainer
const convertFromDisplay = document.createElement('div')
convertFromDisplay.classList.add('input-display')
convertFromDisplay.innerText = "Test"
fromContainer.appendChild(convertFromDisplay)

// create conversionOutputContainer (children: outputDisplay and convCurrencyName)
const conversionOutputContainer = document.createElement('div')
conversionOutputContainer.classList.add('conversion-output-container')
currencyConverterContainer.appendChild(conversionOutputContainer)

// create child outputDisplay inside conversionOutputContainer
const outputDisplay = document.createElement('div')
outputDisplay.classList.add('output-display')
outputDisplay.innerText = "output"
conversionOutputContainer.appendChild(outputDisplay)

// create a name for output currency inside conversionOutputContainer
const outputCurrency = document.createElement('div')
outputCurrency.classList.add('output-currency')
outputCurrency.innerText = "Test2"
conversionOutputContainer.appendChild(outputCurrency)


// place converter container into body
const body = document.querySelector('body')
body.appendChild(mainConverterContainer)

function getCurrencyConversion(from, to, amount) {
  const ratesUrl = `https://api.exchangeratesapi.io/latest?base=${from}&symbols=${to}`
  console.log(ratesUrl)
  fetch(ratesUrl)
    .then(function(response) {
    return response.json()
  })
    .then(function(data){
    console.log(data)
    const result = data.rates[to] * amount
    document.querySelector('.output-display').innerText = `${result}`
  })
}

// create child convertButton inside currencyConverterContainer
const convertButton = document.createElement('button')
convertButton.classList.add('convert-button')
convertButton.id = 'convert-button'
convertButton.innerText = "Convert button"
currencyConverterContainer.appendChild(convertButton)

// getting the data that the user input..
// calling the getCurrencyConversion function to update the result
convertButton.addEventListener('click', function(event) {
  const from = document.querySelector('.convert-from-dropdown')
  const to = document.querySelector('.convert-to-dropdown')
  const amount = document.querySelector('.input-quantity')

  // getCurrencyConversion('USD', 'JPY', 22)
  getCurrencyConversion(from.value, to.value, amount.value)

  
})


// fetch(url)
//   .then(function(response) {
//   return response.json()
// })
//   .then(function(data){
//   console.log(data)
//   // container.innerHTML = `<h1>${data.name}</h1>`
// })