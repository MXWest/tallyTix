import {
    argv
} from 'node:process';
import {
    leftRowSeatRealStatus
} from "./rowRealSeatStatus.js";
import {
    centerRowSeatRealStatus
} from "./rowRealSeatStatus.js";
import {
    rightRowSeatRealStatus
} from "./rowRealSeatStatus.js";

const debug = argv.length > 2;

/* Rest of the file needn't be changed */
const priceLevels = {
    '21': 40,
    '22': 35,
    '23': 30,
    '24': 25
}
const leftRowPriceLevelID = [
    ['', '', '', '', '', '', '22', '22', '22'],
    ['', '', '22', '22', '22', '22', '22', '22', '22'],
    ['', '22', '22', '22', '22', '22', '22', '22', '22'],
    ['22', '22', '22', '22', '22', '22', '22', '22', '22'],
    ['22', '22', '22', '22', '22', '22', '22', '22', '22'],
    ['22', '22', '22', '22', '22', '22', '22', '22', '22'],
    ['22', '22', '22', '22', '22', '22', '22', '22', '22'],
    ['22', '22', '22', '22', '22', '22', '22', '22', '22'],
    ['23', '23', '23', '23', '23', '23', '23', '23', '23'],
    ['23', '23', '23', '23', '23', '23', '23', '23', '23'],
    ['23', '23', '23', '23', '23', '23', '23', '23', '23'],
    ['23', '23', '23', '23', '23', '23', '23', '23', '23'],
    ['23', '23', '23', '23', '23', '23', '23', '23', '23'],
    ['23', '23', '23', '23', '23', '23', '23', '23', '23'],
    ['23', '23', '23', '23', '23', '23', '23', '23', '23'],
    ['23', '23', '23', '23', '23', '23', '23', '23', '23'],
    ['23', '23', '23', '23', '23', '23', '23', '23', '23'],
    ['23', '23', '23', '23', '23', '23', '23', '23', '23'],
    ['24', '24', '24', '24', '24', '24', '24', '24', '24'],
    ['24', '24', '24', '24', '24', '24', '24', '24', '24'],
    ['24', '24', '24', '24', '24', '24', '24', '24', '24'],
    ['24', '24', '24', '24', '24', '24', '24', '24', '24'],
    ['24', '24', '24', '24', '24', '24', '24', '24', '24']
];
const centerRowPriceLevelID = [
    ['', '21', '21', '21', '21', '21', '21', '21', '21', '21', '21', '21', '21', '21'],
    ['21', '21', '21', '21', '21', '21', '21', '21', '21', '21', '21', '21', '21', '21'],
    ['', '21', '21', '21', '21', '21', '21', '21', '21', '21', '21', '21', '21', '21'],
    ['22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22'],
    ['', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22'],
    ['22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22'],
    ['', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22'],
    ['22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22'],
    ['', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22'],
    ['22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22'],
    ['', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22'],
    ['22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22'],
    ['', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22'],
    ['22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22'],
    ['', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22'],
    ['23', '23', '23', '23', '23', '23', '23', '23', '23', '23', '23', '23', '23', '23'],
    ['', '23', '23', '23', '23', '23', '23', '23', '23', '23', '23', '23', '23', '23'],
    ['23', '23', '23', '23', '23', '23', '23', '23', '23', '23', '23', '23', '23', '23'],
    ['', '23', '23', '23', '23', '23', '23', '23', '23', '23', '23', '23', '23', '23'],
    ['23', '23', '23', '23', '23', '23', '23', '23', '23', '23', '23', '23', '23', '23'],
    ['', '23', '23', '23', '23', '23', '23', '23', '23', '23', '23', '23', '23', '23']
];
const rightRowPriceLevelID = [
    ['22', '22', '22', '', '', '', '', '', ''],
    ['22', '22', '22', '22', '22', '22', '22', '', ''],
    ['22', '22', '22', '22', '22', '22', '22', '22', ''],
    ['22', '22', '22', '22', '22', '22', '22', '22', '22'],
    ['22', '22', '22', '22', '22', '22', '22', '22', '22'],
    ['22', '22', '22', '22', '22', '22', '22', '22', '22'],
    ['22', '22', '22', '22', '22', '22', '22', '22', '22'],
    ['22', '22', '22', '22', '22', '22', '22', '22', '22'],
    ['23', '23', '23', '23', '23', '23', '23', '23', '23'],
    ['23', '23', '23', '23', '23', '23', '23', '23', '23'],
    ['23', '23', '23', '23', '23', '23', '23', '23', '23'],
    ['23', '23', '23', '23', '23', '23', '23', '23', '23'],
    ['23', '23', '23', '23', '23', '23', '23', '23', '23'],
    ['23', '23', '23', '23', '23', '23', '23', '23', '23'],
    ['23', '23', '23', '23', '23', '23', '23', '23', '23'],
    ['23', '23', '23', '23', '23', '23', '23', '23', '23'],
    ['23', '23', '23', '23', '23', '23', '23', '23', '23'],
    ['23', '23', '23', '23', '23', '23', '23', '23', '23'],
    ['24', '24', '24', '24', '24', '24', '24', '24', '24'],
    ['24', '24', '24', '24', '24', '24', '24', '24', '24'],
    ['24', '24', '24', '24', '24', '24', '24', '24', '24'],
    ['24', '24', '24', '24', '24', '24', '24', '24', '']
];


function countSeats(r, p, h) {
    let sold = 0;
    let soldDollars = 0.00;
    let ticketPrice = 0.00;
    let available = 0;
    let availableDollars = 0.00;
    let unavailable = 0;
    let tempHold = 0;
    let k = 0;
    let unknown = 0;
    let seatStatus;
    for (let i = 0; i < r.length; i++) {
        for (let j = 0; j < r[i].length; j++) {
            seatStatus = r[i][j]
            switch (seatStatus) {
                case 'X':
                    sold++;
                    ticketPrice = priceLevels[p[i][j]]
                    soldDollars += ticketPrice
                    if (debug) {
                        console.log("S\t" + sold + "\t" + ticketPrice + "\t" + p[i][j] + "\t" + soldDollars)
                    }
                    break;
                case 'O':
                    available++;
                    ticketPrice = priceLevels[p[i][j]]
                    availableDollars += ticketPrice
                    if (debug) {
                        console.log("A\t" + available + "\t" + ticketPrice + "\t" + p[i][j] + "\t" + availableDollars)
                    }
                    break;
                case 'T':
                    tempHold++
                    if (debug) {
                        console.log(seatStatus + "\t" + tempHold + "\t" + ticketPrice + "\trow:" + i + "\tseat:" + j + "\t" + availableDollars)
                    }
                    break;
                case 'U':
                    unavailable++;
                    if (debug) {
                        console.log(seatStatus + "\t" + unavailable + "\t" + ticketPrice + "\trow:" + i + "\tseat:" + j + "\t" + availableDollars)
                    }
                    break;
                case 'K':
                    k++;
                    break;
                case '':
                    // The empty string indicates there's no seat. Example: Right 2nd row has only 7 seats.
                    break;
                default:
                    if (debug) {
                        console.log(seatStatus + "\trow:" + i + "\tseat:" + j)
                    }
                    unknown++;
                    break;
            }
        }
    }
    console.log("\n---------- " + h + " -----------")
    console.log("# Tickets:               " + sold)
    console.log("Dollar Amount:           $" + soldDollars)
    console.log("avail/ unav /'K' /'T': " + available + "/" + unavailable + "/" + k + "/" + tempHold)
    if (unknown) {
        console.log("unknown: " + unknown)
    }
    return [sold, soldDollars, available, availableDollars, tempHold]
}

let leftTotals = countSeats(leftRowSeatRealStatus, leftRowPriceLevelID, "<< Left >>");
let centerTotals = countSeats(centerRowSeatRealStatus, centerRowPriceLevelID, "<<Center>>");
let rightTotals = countSeats(rightRowSeatRealStatus, rightRowPriceLevelID, "<< Right>>");
let totalTickets = leftTotals[0] + centerTotals[0] + rightTotals[0];
let totalDollars = leftTotals[1] + centerTotals[1] + rightTotals[1];
let totalAvailableTickets = leftTotals[2] + centerTotals[2] + rightTotals[2]
let totalAvailableDollars = leftTotals[3] + centerTotals[3] + rightTotals[3]
let totalTempHold = leftTotals[4] + centerTotals[4] + rightTotals[4]
console.log("\n--------- << TOTALS >> ----------")
console.log("# Tickets Sold:          " + totalTickets)
console.log("Dollar Amount:           $" + totalDollars.toFixed(2))
console.log("Split (50%):             $" + (totalDollars * .5).toFixed(2))
console.log("Split (60%):             $" + (totalDollars * .6).toFixed(2))
console.log("\n# Tickets Available:     " + totalAvailableTickets)
console.log("Dollar Value:            $" + totalAvailableDollars)
console.log("Venue Capacity:          " + (totalTickets + totalAvailableTickets + totalTempHold))