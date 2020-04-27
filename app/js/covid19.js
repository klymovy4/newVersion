const covidMainBlock = document.querySelector('#covidMainBlock')
const url = 'https://api.covid19api.com/summary'

// covidMainBlock.innerHTML = 'Пиздец'

const loadingCovid = () => {
    return covidMainBlock.innerHTML = 'Loading// /'
}

async function getCor19() {
    const response = await fetch(url)
    const country = await response.json()
    return country
}

function showCovid19ByCountry(countryName = 'ukraine') {

    getCor19()
        .then((country) => {
            loadingCovid()
            toHTML(country, countryName)
        })
        .catch((e) => {
            covidMainBlock.innerHTML = 'Бро, что-то пошло не так'
            console.error('Something wrong');
        })
}

getCor19()
    .then((country) => console.log('test', country))

// const getCor19 = async (countryName = 'ukraine') => {
//     loadingCovid()
//     try {
//         const response = await fetch(url)
//         const country = await response.json()
//         toHTML(country, countryName)
//         // console.log(country)
//     } catch (e) {
//         console.error('error')
//     }
// }

const renderCovidResults = ({ NewConfirmed, NewDeaths, NewRecovered, TotalConfirmed, TotalDeaths, TotalRecovered }) => {
    return `
        <div class="row my-2">
            <div class='col-6'>
                <p>New Confirmed: ${NewConfirmed}</p>
                <p>New Deaths: ${NewDeaths}</p>
                <p>New Recovered: ${NewRecovered}</p>
            </div>
            <div class='col-6'>
                <p>Total Confirmed: ${TotalConfirmed} </p>
                <p>Total Deaths: ${TotalDeaths} </p>
                <p>Total Recovered: ${TotalRecovered}</p>
            </div>
        </div>
        `
}

const toHTML = (globalObj, countryName) => {
    const currentCountry = document.querySelector('#covidCountry')
    for (let i = 0; i < globalObj.Countries.length; i++) {
        if (globalObj.Countries[i].Slug === countryName) {
            covidMainBlock.innerHTML = renderCovidResults(globalObj.Countries[i])
            currentCountry.innerHTML = globalObj.Countries[i].Country
            break;
        }
    }
}

const showCovid = (event) => {
    event.preventDefault()
    const covidInput = document.querySelector('#covidInput').value
    // getCor19(covidInput)
    showCovid19ByCountry(covidInput)
}


document.querySelector('#showCovidResults').addEventListener('click', showCovid)
showCovid19ByCountry()
// getCor19()

