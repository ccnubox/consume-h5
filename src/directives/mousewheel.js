let waiting = false
// let callBackWarpped
// let scrollCallback = function(e) {
//     console.log("e = ", e)
// }

var scrollCallback = function(e){
    console.log(e)
}
export default {
    inserted: function(el, binding, vnode) {
        // callBackWarpped = scrollCallback.bind({}, binding.value)
        // window.addEventListener("mousewheel",scrollCallback.bind(this,e))
        window.addEventListener("mousewheel", function(e) {
            if (waiting) return
            binding.value(e)
            waiting = true
            setTimeout(function() {
                waiting = false
            }, 1500);
        })
    },
    unbind: function() {
        // window.removeEventListener("mousewheel", callBackWarpped(e))
    }
}
