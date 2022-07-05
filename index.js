// code your solution here
let superbowlWin = function (record) {
    let yearWin = null  
    yearWin = record.find(record => record.result === "W")
    if(yearWin === undefined) {
        return yearWin
    } else {
        return yearWin.year
    }
}
