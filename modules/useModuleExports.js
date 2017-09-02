// useModuleExports.js


module.exports = function(msg) {
    return {
        getMsg: function() {
            return msg;
        }
    };
}