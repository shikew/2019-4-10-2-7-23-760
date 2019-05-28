module.exports = function main(inputs) {
    // write your code here...
    let sum = 6 + 0.25 * inputs.parkTime

    if(inputs.distance > 2 && inputs.distance <= 8)
        sum += 0.8 * (inputs.distance - 2)
    else if(inputs.distance > 8)
        sum += 0.8 * (8-2) + 0.8*(1+0.5)*(inputs.distance -8)
    return Math.round(sum);
};
