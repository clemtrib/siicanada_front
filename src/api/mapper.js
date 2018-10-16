import  { jobsData }  from "./example";

console.log(jobsData.response.result.JobOpenings.row)

const obj = jobsData.response.result.JobOpenings.row.forEach(line => {
    console.log(line)
    line.FL.forEach(l => {
        //l.val.filter("City")
        //return l.val === "City" ? true : false
    })
})

console.log(obj)
