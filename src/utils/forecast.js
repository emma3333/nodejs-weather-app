const request = require('request') 

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/5546284b09953de244083feaf96dc52f/' + latitude + ',' + longitude + '?units=si'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather API', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, {
                summary: body.daily.data[0].summary,
                temperature: body.currently.temperature,
                tempHigh: body.daily.data[0].temperatureHigh,
                tempLow: body.daily.data[0].temperatureLow,
                chanceOfRain: body.currently.precipProbability
            })
        }
    })
}

module.exports = forecast
