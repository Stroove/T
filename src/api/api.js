import axios from "axios";



export const generalInstance = {
    usersInstance: axios.create({
        withCredentials: true,
        baseURL:'https://social-network.samuraijs.com/api/1.0/',
        headers:{
            'API-KEY': '659dcbc8-9e8a-4a66-8084-da14b55f5c7c',
        }
    }),
    profileInstance: axios.create({
        baseURL:'https://social-network.samuraijs.com/api/1.0/',
        withCredentials: true,
        headers:{
            'API-KEY': '659dcbc8-9e8a-4a66-8084-da14b55f5c7c',
        }
    }),
    headerInstance: axios.create({
        baseURL:'https://social-network.samuraijs.com/api/1.0/',
        withCredentials: true,
    })
}


export const generalAPI = {
    getUsers: (currentPage=1,pageSize=10) => generalInstance.usersInstance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data),
    getProfile: userId => generalInstance.profileInstance.get(`profile/${userId}`).then(response=> response.data),
    postFollow: id => generalInstance.usersInstance.post(`follow/${id}`).then(response => response.data),
    deleteFollow: id => generalInstance.usersInstance.delete(`follow/${id}`).then(response => response.data),    
    auth: () => generalInstance.headerInstance.get('auth/me').then(response => response.data),
    getStatus: userId => generalInstance.profileInstance.get(`profile/status/` + userId),
    updateStatus: status => generalInstance.profileInstance.put(`profile/status/`, {status}),
    login: (email, password, rememberMe = false) => generalInstance.profileInstance.post(`auth/login`, {email, password, rememberMe}),
    logout: () => generalInstance.profileInstance.delete(`auth/login`)

}
