const covidMainBlock = document.querySelector('#covidMainBlock')
const covidInput = document.querySelector('#covidInput')
const covidError = document.querySelector('#covidError')
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
    loadingCovid()
    getCor19()
        .then((country) => {
            toHTML(country, countryName)
            return country
        })
        .catch((e) => {
            // covidMainBlock.innerHTML = 'Бро, что-то пошло не так!'
            console.error('Something wrong', e);
        })
}

getCor19()

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
let arrSlug = [] 
const toHTML = (globalObj, countryName) => {
    arrSlug = []
    const currentCountry = document.querySelector('#covidCountry')
    for (let i = 0; i < globalObj.Countries.length; i++) {
        arrSlug.push(globalObj.Countries[i].Slug)
        if (globalObj.Countries[i].Slug === countryName) {
            covidMainBlock.innerHTML = renderCovidResults(globalObj.Countries[i])
            currentCountry.innerHTML = globalObj.Countries[i].Country
            covidError.innerHTML = ''
            break;
        }
    }
    if (arrSlug.indexOf(countryName) === -1) {
        showError(countryName)
    }
    console.log(arrSlug, globalObj.Countries);
}

const showCovid = (event) => {
    event.preventDefault()
    const input = covidInput.value
    // getCor19(covidInput)
    if (input === '') {
        return;
    }
    showCovid19ByCountry(input)
}

const showError = (a) => {
    covidError.innerHTML = "Бро, пошло что-то не так такой страны как " + "'" + a + "'" + " не существует"
}



document.querySelector('#showCovidResults').addEventListener('click', showCovid)
showCovid19ByCountry()
// getCor19()

