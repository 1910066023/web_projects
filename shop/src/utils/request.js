import { post, get } from "./service"

export const loginApi = data => {
    return post({
        url:"/login",
        data
    })
}