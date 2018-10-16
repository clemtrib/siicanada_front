/**
*
* https://recruit.zoho.com/recruit
* Login: 
* Password: 
* https://accounts.zoho.com/apiauthtoken/nb/create?SCOPE=ZohoRecruit/recruitapi&EMAIL_ID=${email}&PASSWORD=${password}
*/

let token = '',
login = '',
password = '',
path1 = `https://accounts.zoho.com/apiauthtoken/nb/create?SCOPE=ZohoRecruit/recruitapi&EMAIL_ID=${login}&PASSWORD=${password}`

const options = {
    mode: 'no-cors',
    headers: {
        'method': 'GET',
        'Content-Type': 'application/json'
    }
}

const getApiKey = () => fetch(path1, options).then(results => {
    console.log(results)
    return ''
})

const getApiKeyAndGetJobs = (callback) => {

}

const getJobs = (callback) => {
    token = ''
    const scope = 'ZohoRecruit'
    const baseUrl = 'https://recruit.zoho.com/recruit/private/json/JobOpenings/getRecords'
    const url = `${baseUrl}?authtoken=${token}&scope=${scope}`

    const req = new XMLHttpRequest()
    req.open('GET', url, false)
    req.send(null)

    const jobOpenings = JSON.parse(req.response).response.result.JobOpenings.row
    const attributes = ["JOBOPENINGID", "Posting Title", "Date Opened", "Job Opening Status"]

    const jobsOpened = jobOpenings.map(({ FL }) =>
        FL.filter(({ val }) => attributes.includes(val))
            .reduce((jobAccu, { val, content }) => {
                const job = { ...jobAccu }
                job[val.replace(' ', '_')] = content
                return job
            }, {})
    )
    callback(jobsOpened)
}

export { getApiKey, getJobs }
