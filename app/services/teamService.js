import axios from "axios"

const axiosClient = axios.create({
    baseURL: "http://localhost:9001",
})

export const searchTeamName = teamName =>
    axiosClient.get(`/search/team/${teamName}`)
        .then(({data}) => data)

export const exists = teamName =>
    searchTeamName(teamName).then(teams => teams.some(({name}) => teamName === name))