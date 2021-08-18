
export function initJsBridge() {

    if (window.initJs != undefined) {

        return
    }

    window.injectInstance = () => {

        if (window.callbacks) {
    
            window.callbacks = {}
        }
    }
    
    window.regCallbacks = (callback) => {
    
        let callbackId = new Date().getTime()
    
        window.callBacks[callbackId] = (params)=>{
    
            callback(params)
        } 
    }
    
    window.onResponseNative = (callbackId, params) => {
    
        let callback = window.callBacks[callbackId]
    
        if (callback == undefined) {
    
            return
        }
    
        callback(params)
    
        window.callBacks[callbackId] = undefined
    }
    
    window.callIOSNative = (data, callback)=>{
    
        let callbackId = window.regCallbacks(callback)
    
        data['callbackId'] = callbackId
    
        window.webkit.messageHandlers.JygJSBridge.postMessage(data)
    }    
}
