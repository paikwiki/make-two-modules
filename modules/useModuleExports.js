// useModuleExports.js


module.exports = function(msg) {
    return {
        getMsg: function() {
            return msg;
        },
        getDate: function() {
            return new Date();            
        }
    };
}