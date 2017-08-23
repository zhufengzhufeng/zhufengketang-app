export const get = (url)=>{
    return fetch(url,{
        method:'get',//获取的方法
        credentials:'include',//跨域携带cookie
        headers:{
            accept:'application/json'
        }
    }).then(res=>res.json())
};
export const post =(url,data)=>{
    return fetch(url,{
        method:'post',
        credentials:'include',
        headers:{
            'Content-Type':'application/json',
            accept:'application/json'
        },
        body:JSON.stringify(data)
    }).then(res=>res.json())
};