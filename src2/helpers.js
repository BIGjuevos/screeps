module.exports = {
    /**
     * Initializes the memory we will eventually use
     */
    init: function() {
        if (!Memory.cities) {
            Memory.cities = [];

            for ( var i in Game.rooms ) {
                var room = Game.rooms[i];
                var city = require('./city');
                city.room = room;

                Memory.cities.push(city)
            }
        }
    },
    /**
     * Call this every so often to monitor cpu usage
     */
    monitorCpu: function() {
        var tail = 16;
        Memory.CPU = Memory.CPU || [];
        Memory.CPU[Game.time % tail] = Game.cpu.getUsed(), "of", Game.cpuLimit;

        var avgCPU = 0;
        for (var k in Memory.CPU) {
            avgCPU = avgCPU + Memory.CPU[k];
        }

        avgCPU = Math.round(avgCPU / Memory.CPU.length * 100) / 100;
        var stdevCPU = 0;
        for (var k in Memory.CPU) {
            stdevCPU = stdevCPU + (Memory.CPU[k] - avgCPU) * (Memory.CPU[k] - avgCPU);
        }

        stdevCPU = Math.round(Math.sqrt(stdevCPU) / tail * 100) / 100;
        console.log("CPU:", avgCPU, "+/-", stdevCPU);
    }
};
