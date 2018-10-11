const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu cursus metus. Curabitur pharetra odio vitae nisl pharetra, sit amet bibendum mauris accumsan.`

const jobTypes = ["Part-time", "Full-time"]

const ad1 = {
    id: 1,
    title: "Electrical/Avionics systems engineer (FAL)",
    createdAt: "20181012",
    jobType: 0,
    description: description,
    position: 1,
    experienceMin: null,
    experienceMax: null,
    city: "Montreal",
    industry: "Aeronautic"
},
    ad2 = {
        id: 2,
        title: "Android developer",
        createdAt: "20181012",
        jobType: 1,
        description: description,
        position: 1,
        experienceMin: 2,
        experienceMax: 5,
        city: "Toronto",
        industry: "Medias"
    },
    ad3 = {
        id: 3,
        title: "Full stack java developer",
        createdAt: "20181012",
        jobType: 1,
        description: description,
        position: 1,
        experienceMin: 3,
        experienceMax: null,
        city: "Montreal",
        industry: "Medias"
    }

const ads = [ad1, ad2, ad3, ad1, ad2, ad3, ad1, ad2, ad3, ad1, ad2, ad3, ad1, ad2, ad3, ad1, ad2, ad3]

export { ads, jobTypes }
