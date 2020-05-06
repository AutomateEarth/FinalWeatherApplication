const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=daee8029d5db056020599978117e83cb&query=' + latitude + ',' + longitude + '&units=f'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to the weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, `Current Temperature: ${body.current.temperature} Feels Like (Temperature): ${body.current.feelslike} Weather Details: ${body.current.weather_descriptions} Wind Speed: ${body.current.wind_speed} Wind Direction: ${body.current.wind_dir} Precipitation: ${body.current.precip} Humidity: ${body.current.humidity} Cloud Cover: ${body.current.cloudcover}`)
        }
    })
}

module.exports = forecast