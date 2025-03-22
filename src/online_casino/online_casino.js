// Import from helpers.js
import { 
    sort_ranking_by_player_balance, 
    count_records_in_ranking
} from "../helpers/helpers.js";

import readline from "readline-sync";
import fs from 'fs';
let current_rank = JSON.parse(fs.readFileSync('./global_ranking.json', 'utf8'));


export function get_bet_ammount(player_balance) {
    let bet_amount = Number(readline.question("Please place your bet: "));
    
    if (Number.isInteger(bet_amount) && bet_amount > 0 && bet_amount <= player_balance) {
        console.log(`Bet accepted! Your bet is ${bet_amount}.`)
        return bet_amount;
      }
    else if (bet_amount > player_balance) {
        throw new TypeError(`Not enough founds. Bet ammonut must be less than your current balance: ${player_balance}.`);
    }
    else {
        throw new TypeError("Bet must be a positive integer number.");
    };
};


export function determine_end_result(game_result, player) {
    const winning_number = 7;
    if (game_result == winning_number) {
        console.log(`The winning number is 7. Congratulations, ${player}! You won! Enjoy your winnings and keep the streak going!`);
        return "win";
    }
    else {
        console.log(`The winning number is 7. Tough luck, ${player}! Don't give up - your next big win could be just around the corner!`);
        return "lose";
    }
}

export function count_consecutive_wins(round_result, wins) {
    if (round_result === "lose") {
        wins = 0;
    }
    else {
        wins++;
    }
    return wins;
}

export function determine_bonus(wins) {
    // Create and invoke another new export function which is checking the value of the counter and determines whether bonus must be granted for the user
    if (wins == 3) {
        console.log("You just have 3 wins in a row, so you win a bonus 5!")
        wins = 0;
        return ["bonus", wins];
    }
    else {
        return ["no bonus", wins];
    }
}

export function calculate_payout(round_result, current_balance, bet_stake, if_bonus) {
    // if user wins - double stake
    // if user loses - substruct 50% of hist stake 
    // we need: player balance, round result, bet amount 
    if (round_result === "win") {
        current_balance = current_balance + (bet_stake * 2);
        if (if_bonus === "bonus") {
            current_balance = current_balance + 5;
        }
        return current_balance;
    }
    else {
        current_balance = current_balance - (bet_stake / 2);
        return current_balance;
    }
}



export function trim_list_to_defined_length(amount_of_records, ranking) {
    if (amount_of_records >= 5) {
    let adjusted_ranking = ranking.slice(0, 5);
    return adjusted_ranking;
    }
    else {
    return ranking;
    }
}



export function save_player_session(player_name, player_balance, current_timestamp) {
    

    if (current_rank.hasOwnProperty("Game rounds")) {
        current_rank["Game rounds"].push({"Player name":player_name,"Player balance":player_balance, "Current timestamp":current_timestamp});
    }
    else {
        current_rank = {["Game rounds"]: [{["Player name"]: player_name, ["Player balance"]: player_balance, ["Current timestamp"]: current_timestamp}]};
    }
    sort_ranking_by_player_balance(current_rank["Game rounds"]);
    let amount_of_records = count_records_in_ranking(current_rank["Game rounds"]);
    let adjusted_list = trim_list_to_defined_length(amount_of_records, current_rank["Game rounds"]);
    let adjusted_rank = {["Game rounds"]: adjusted_list};
    const jsonData = JSON.stringify(adjusted_rank, null, 2);
    fs.writeFile("./global_ranking.json", jsonData, (err) => {
        if (err) {
            console.error('Error appending to the file:', err);
        }
        else {
            console.log('Data was successfully appended!');
        }
    });
    return adjusted_list;
    };