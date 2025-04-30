import axios from "axios"
import { GoogleGenerativeAI } from "@google/generative-ai"

const WEATHER_API_KEY = "c42c86ec481709a1d9e8895291f8d6ae"
const GEMINI_API_KEY = "AIzaSyBXcogXdjAmvi7HGuTHMAbRlOzmtiaDrvo"

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY)

function obterCoordenadasDaCidade(nomeCidade) {
  const url = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(nomeCidade)}&limit=1&appid=${WEATHER_API_KEY}`

  return axios.get(url)
    .then(response => {
      const data = response.data

      if (data.length === 0) {
        console.log(`Cidade "${nomeCidade}" não encontrada.`)
        return null
      }

      const cidade = data[0]
      console.log(`Coordenadas de ${cidade.name}, ${cidade.country}:`)
      console.log(`   Latitude: ${cidade.lat}`)
      console.log(`   Longitude: ${cidade.lon}`)
      return `latitude ${cidade.lat}, longitude ${cidade.lon}`
    })
    .catch(error => {
      if (error.response) {
        console.error(`Erro HTTP: ${error.response.status} - ${error.response.statusText}`)
      } else {
        console.error("Erro ao buscar coordenadas:", error.message)
      }
      return null
    })
}

async function localGemini(local) {
  const prompt = `Responda apenas com um JSON no seguinte formato, sem explicações extras ou texto fora do JSON:

  {
    "cidade": "",
    "idioma": "",
    "moeda": "",
    "curiosidade": "",
    "sugestaoTuristica": ""
  }

Use as informações baseadas no local descrito por: ${local}`

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })
    const result = await model.generateContent([prompt])
    const response = result.response
    const text = await response.text()

    const cleaned = text.replace(/```json|```/g, "").trim()

    let parsed
    try {
      parsed = JSON.parse(cleaned)
      console.log("\n")
      console.log(parsed)
    } catch {
      console.log("\nResposta não é JSON válido. Mostrando texto bruto:")
      console.log(text)
    }
  } catch (error) {
    console.error("Erro ao usar Gemini:", error.message)
  }
}

function executar() {
  obterCoordenadasDaCidade("lisboa").then(coordenadas => {
    if (coordenadas) {
      localGemini(coordenadas)
    }
  })
}

executar()
