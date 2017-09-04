import axios from "axios"
import config from "config/index"

const axiosClient = axios.create({
    baseURL: config.USER_SERVICE_URL,
})

export const searchTeamName = teamName =>
    axiosClient.get(`/search/team/${teamName}`)
        .then(({data}) => data)

export const exists = teamName =>
    searchTeamName(teamName).then(teams => teams.some(({name}) => teamName === name))