 ### 🧑‍🤝‍🧑 Integrantes do grupo (em ordem alfabética)

   | Nome completo            | RA        |
   |--------------------------|-----------|
   |Alef Vicente de Figueiredo|2040482322044|
   |Isabel Santos Marques     |2040482412027|
   |Jonas Godoy Diamantino    |2040482322014|
   |Vinicius Bezerra Medeiros |2040482423022|

## ✅ Requisitos

### 1. Consulta de coordenadas latitude/longitude em função do nome de uma cidade

Utilizando a API de geocodificação do OpenWeatherMap:

🔗 https://openweathermap.org/api/geocoding-api

O sistema deve:
- Enviar o nome de uma cidade
- Obter as coordenadas `latitude` e `longitude`

📌 **Obrigatório**: tratar Promises usando `.then()` e `.catch()`

💬 **Mensagem do commit**:
```
feat(p1): obtem coords a partir de cidade
```

---

### 2. Consulta de informações da cidade em função de suas coordenadas

Utilize a **API do Google Gemini** para obter os seguintes dados com base nas coordenadas obtidas:

- Nome da cidade
- Idioma(s) falado(s)
- Moeda local
- Curiosidades ou fatos históricos
- Uma sugestão turística (ponto para visitar)

🧠 **Exemplo de prompt a ser enviado ao Gemini**:
> "Com base na localização de latitude -23.00 e longitude -46.00, me diga o nome da cidade e escreva um parágrafo com curiosidades, idioma, moeda e uma sugestão turística."

🔗 https://ai.google.dev/gemini-api/docs

📌 **Obrigatório**: tratar Promises com `async/await` e `try/catch`.

📌 **Obrigatório**: instruir o Gemini a devolver o resultado como um `JSON` e tratá-lo como tal.

💬 **Mensagem do commit**:
```
feat(p1): obtem infos da cidade usando Gemini
```

---

## 🏁 Finalização

Após concluir as etapas acima, gere uma **tag anotada** no repositório com a seguinte mensagem:

💬 **Mensagem da tag**:
```
entrega(p1): conclui as atividades
```

---


