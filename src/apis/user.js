import request from '../utils/http'

export function LoginAPI({account,password}){
    return request({
        url:'/login',
        method:'post',
        method:'post',
        data:{
            account,
            password
        }
    })
}