module.exports = {
    /**
     * @type {Array}
     */
    creepBuildQueue: [],

    /**
     * @type {Room}
     */
    room: null,

    /**
     * Initialize this city
     */
    init: function() {

    },

    /**
     * Tells us if the room has staff maintaining it
     * @returns {boolean}
     */
    isStaffed: function() {
        return !room.find(FIND_CREEPS);
    }
};