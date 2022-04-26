throttle = function(callback,delay){
    let pre = 0
    return function(){
        let now = new Date()
        let context = this
        let arg = arguments
        if(now-pre>delay){
            callback.apply(context,arg)
            pre = now
        }
    }
}
export default throttle