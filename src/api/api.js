import * as axios from "axios";
//создаем отдельный экземпляр axios
const instance = axios.create({
    baseURL: `http://localhost:4000/`
})

export const hikesAPI = {
    getSuggestedHikes() {
        return instance.get(`suggestedHikes`).then(resp => resp.json)
    }
}
