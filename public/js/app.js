const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const locationText = document.querySelector('#location')
const weatherSummary = document.querySelector('#summary')
const tempHigh = document.querySelector('#temp-high')
const tempLow = document.querySelector('#temp-low')
const container = document.querySelector('.container')

container.classList.remove('container')
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const location = search.value
    locationText.textContent = 'Loading...'
    weatherSummary.textContent = ''
    tempHigh.textContent = ''
    tempLow.textContent = ''
    
    fetch(`/weather?address=${location}`).then(response => {
      response.json().then(data => {
            if (data.error) {
                locationText.textContent = data.error
            } else {
                container.classList.add('container')
                locationText.textContent = data.location
                weatherSummary.textContent = `${data.forecast.summary} It is currently ${data.forecast.temperature}°C out.`
                tempHigh.textContent = `Temperature High: ${data.forecast.tempHigh}°C`
                tempLow.textContent = `Temperature Low: ${data.forecast.tempLow}°C`
            }
      })
    })
})
