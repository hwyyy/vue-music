import originJsonp from 'jsonp'

export default function jsonp(url, data, option){
    //对外暴露一个方法 
    // url (String) url to fetch
    // opts (Object), optional
    //     param (String) name of the query string parameter to specify the callback (defaults to callback)
    //     timeout (Number) how long after a timeout error is emitted. 0 to disable (defaults to 60000)
    //     prefix (String) prefix for the global callback functions that handle jsonp responses (defaults to __jp)
    //     name (String) name of the global callback functions that handle jsonp responses (defaults to prefix + incremented counter)
    // fn callback
   url += (url.indexOf('?') < 0 ? "?" : "&") + param(data)
   return new Promise((resolve,reject) => {
        originJsonp(url,option,(err,data) => {
            if(!err){
               resolve(data)
            }else{
                reject(err)
            }
        })
   })

}
export function param(data){
    let url = ''
    for(var key in data){
        let value = data[key] !== undefined ? data[key] : ''
        url += '&' + key + '=' + encodeURIComponent(value) //encodeURIComponent 记得要对参数进行编码
    } 
    return url ? url.substring(1) :''
}

