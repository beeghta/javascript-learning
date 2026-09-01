
const getStatus = (activity) => {
    if (activity >= 0.8) {
        return "Highly Active";
    }
    if (activity >= 0.5) {
        return "Active";
    }
    return "InActive";
}
const calculatePotentional = (activity) => {
    return activity * 100;
}
module.exports = { getStatus, calculatePotentional };