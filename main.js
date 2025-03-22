// Import from notifications.js
import { generate_welcome_message, notify_about_place_in_ranking } from "./src/notifications/notifications.js";

// Import from game.js
import { generate_game_result } from "./src/game/game.js";

// Import from helpers.js
import { 
    get_current_timestamp, 
    determine_player_place_in_the_ranking 
} from "./src/helpers/helpers.js";

// Import from online_casino.js
import { 
    get_bet_ammount, 
    determine_end_result, 
    count_consecutive_wins, 
    determine_bonus, 
    calculate_payout, 
    save_player_session 
} from "./src/online_casino/online_casino.js";



    
import readline from "readline-sync";
let player_name = readline.question("Please enter your name: ");

let start_player_balance = 10;
let minimum_balance = 5;

generate_welcome_message(player_name, start_player_balance);

let count_round = 1;
let continue_the_game = true;
let win_counter = 0;
let player_balance = start_player_balance; // Declare outside of the loop


while (continue_the_game) {
    console.log(`You are starting the round number: ${count_round}`);
    let bet_amount = get_bet_ammount(start_player_balance);
    let random_game_result = generate_game_result();
    let end_result = determine_end_result(random_game_result, player_name);
    win_counter = count_consecutive_wins(end_result, win_counter);
    let if_bonus;
    [if_bonus, win_counter] = determine_bonus(win_counter);

    let calculated_balance;
    if (count_round === 1) {
        calculated_balance = calculate_payout(end_result, start_player_balance, bet_amount, if_bonus); 
    }
    else {
        calculated_balance = calculate_payout(end_result, player_balance, bet_amount, if_bonus);
    }

    player_balance = calculated_balance;
    console.log(`Your current balance is: ${player_balance}`);

    if (player_balance < minimum_balance) {
        let current_timestamp = get_current_timestamp();
        let updated_ranking = save_player_session(player_name, player_balance, current_timestamp);
        let player_place = determine_player_place_in_the_ranking(updated_ranking, player_name);
        console.log(`Unfortunatly you current balance is below ${minimum_balance}. Please refill you balance.`);
        notify_about_place_in_ranking(player_place, player_balance, current_timestamp);
        break;
    }

    let continue_game_input = readline.question("Do you want to play again?").toLowerCase();
    if(continue_game_input === "yes") {
        continue_the_game = true;
    }
    else if(continue_game_input === "no") {
        continue_the_game = false;
        let current_timestamp = get_current_timestamp();
        let updated_ranking = save_player_session(player_name, player_balance, current_timestamp);
        // input arguments should be updated 
        let player_place = determine_player_place_in_the_ranking(updated_ranking, player_name);
        notify_about_place_in_ranking(player_place, player_balance, current_timestamp);
        break;
    }
    else {
        console.log(`Your input is invalid. Please enter 'yes' or 'no'.`);
        continue_game_input = readline.question("Do you want to play again?").toLowerCase(); 
    }
    count_round++;
}


