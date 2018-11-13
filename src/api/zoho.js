import config from "../config/config"

let token = ""

const options = {
    mode: 'no-cors',
    headers: {
        'method': 'GET',
        'Content-Type': 'application/json'
    }
}

const getApiKey = () => fetch(config.zohoUrlAccount(), options).then(results => {
    console.log(results)
})

const getJobs = (callback) => {
    
    if(!token) {
        token = config.zohoToken
        //getApiKey()
    }
    const url = `${config.zohoUrlRecruit()}&authtoken=${token}`

    const req = new XMLHttpRequest()
    req.open('GET', url, false)
    req.send(null)

    const jobOpenings = JSON.parse(req.response).response.result.JobOpenings.row
    const attributes = ["jobopeningid", "posting title", "date opened", "job opening status"]

    const jobsOpened = jobOpenings.map(({ FL }) =>
        FL.filter(({ val }) => attributes.includes(val.toLowerCase()))
            .reduce((jobAccu, { val, content }) => {
                const job = { ...jobAccu }
                job[val.replace(' ', '_')] = content
                return job
            }, {})
    )
    callback(jobsOpened)
    
}

export { getApiKey, getJobs }
