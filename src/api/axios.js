import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
  params: {
    appid: import.meta.env.VITE_API_KEY,
    units: 'metric', // Pour obtenir la température en Celsius
    lang: 'fr', // Pour obtenir les résultats en français
  },
})

export default api
