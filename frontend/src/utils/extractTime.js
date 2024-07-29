export function extractTime(dateString) {
    // create a date object from the date string
    const date = new Date(dateString);

    // get the hours and pad with leading zero if needed
    const hours = padZero(date.getHours());

    // get the minutes and pad with leading zero if needed
    const minutes = padZero(date.getMinutes());

    // return the time in hh:mm format
    return `${hours}:${minutes}`;

    // helper function to add leading zeroes if the number is less than 10
    function padZero(number) {
        return number.toString().padStart(2, "0");
    }
}
