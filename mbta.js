const claculateStops = function(start, end){
    if (start < end) {
        return end - start;
    } else if(start > end) {
        return start - end;
    } else {
        return 0;
    }
}



const stopsBetweenStations = function (startLine, startStation, endLine, endStation) {
    const lines = {
        Red: [
            'South Station',
            'Park Street',
            'Kendall',
            'Central',
            'Harvard',
            'Porter',
            'Davis',
            'Alewife',
        ],
        Green: [
            'Government Center',
            'Park Street',
            'Boylston',
            'Arlingrton',
            'Copley',
            'Hynes',
            'Kenmore',
        ],
        Orange: [
            'North Station',
            'Haymarket',
            'Park Street',
            'Downtown Crossing',
            'chinatown',
            'Back Bay',
            'Forest Hills',
        ]
    };
    const startPoint = lines[startLine].indexOf(startStation) + 1;
    const endPoint = lines[endLine].indexOf(endStation) + 1;

    if(startLine !== endLine){
        let counter = 0;
        const parkSteetStart = lines[startLine].indexOf('Park Street') + 1;
        const parkSteetEnd = lines[endLine].indexOf('Park Street') + 1;

        counter += claculateStops(startPoint, parkSteetStart);
        counter += claculateStops(parkSteetEnd, endPoint);
        return counter
    } else {
        return claculateStops(startPoint, endPoint);
    }

}

console.log(stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife')); // 0 stops
console.log(stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station'));
console.log(stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore'));
console.log(stopsBetweenStations('Green', 'Government Center', 'Orange', 'North Station'));
