import { IOhm } from "./types";

export const IOhmValueCalculator = (IOhm: IOhm) => {
    let total = 0;
    if (IOhm.BandC !== undefined){
        total += IOhm.BandA * 100;
        total += IOhm.BandB * 10;
        total += IOhm.BandC;
    } else {
        total += IOhm.BandA * 10;
        total += IOhm.BandB;
    }
    return total * (Math.pow(10,IOhm.BandD));
}