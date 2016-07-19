module.exports.loop = function() {
    // load everything
    var helpers = require('./helpers');

    // do some initialization
    helpers.init();

    // say hello to our fancy separator
    console.log("-=-=-=-=-=-=-=-=-=-=-=-=-");
    helpers.monitorCpu();

    for ( var i in Memory.cities ) {
        var city = Memory.cities[i];
        
        if ( !city.isStaffed() ) {
            city.init();
        }
    }
};