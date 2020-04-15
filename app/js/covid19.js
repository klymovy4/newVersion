const covidMainBlock = document.querySelector('#covidMainBlock')
const url = 'https://api.covid19api.com/summary'

// covidMainBlock.innerHTML = 'Пиздец'

const loadingCovid = () => {
    return covidMainBlock.innerHTML = 'Loading// /'
}

const getCor19 = async () => {
    loadingCovid()
    try {
        const response = await fetch(url)
        const country = await response.json()
        toHTML(country)
        // showCovid(country)
        console.log(country)
    } catch (e) {
        console.error('error')
    }
}

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

const toHTML = (globalObj) => {
    const currentCountry = document.querySelector('#covidCountry')
    for (let i = 0; i < globalObj.Countries.length; i++) {
        if (globalObj.Countries[i].Slug === 'ukraine') {
            covidMainBlock.innerHTML = renderCovidResults(globalObj.Countries[i])
            currentCountry.innerHTML = globalObj.Countries[i].Country
            break;
        }
    }
}

const showCovid = (event) => {
    event.preventDefault()
    const covidInput = document.querySelector('#covidInput').value
    toHTML(globalObj)
    // return covidInput

}


document.querySelector('#showCovidResults').addEventListener('click', showCovid)
getCor19()

