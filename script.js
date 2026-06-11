const API_KEY = '3d1474a3a3549a34f99597fd297def2a'
const btnBuscar = document.getElementById('btn-buscar')
const inputCidade = document.getElementById('input-cidade')
const resultado = document.getElementById('resultado')

btnBuscar.addEventListener('click', async function() {
  const cidade = inputCidade.value

  if (!cidade) {
    resultado.innerHTML = `<p>Digite o nome de uma cidade.</p>`
    return
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${API_KEY}&units=metric&lang=pt_br`
  const resposta = await fetch(url)
  const dados = await resposta.json()

  if (dados.cod === '404') {
    resultado.innerHTML = `<p>Cidade não encontrada. Tente novamente.</p>`
    return
  }

  resultado.innerHTML = `
    <h2>${dados.name}</h2>
    <p class="temp">${Math.round(dados.main.temp)}°C</p>
    <p>${dados.weather[0].description}</p>
  `
})