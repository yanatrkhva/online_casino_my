
import { 
    pickCard
} from "./helper.js";
   

export function dealing_first_hand_for_manual_player() {
    let manual_player = [];
    let i = 1;
    while (i <= 6) {
        let new_card = pickCard();
        manual_player.push(new_card);
        i++;
    }
    return manual_player;
};

export function dealing_first_hand_for_auto_player() {
    let auto_player = [];
    let i = 1;
    while (i <= 6) {
        let new_card = pickCard();
        auto_player.push(new_card);
        i++;
    }
    return auto_player;
};

export function dealing_power_color() {
    let power_color = [];
    let new_card = pickCard();
    power_color.push(new_card);
    return power_color;
};

export function dealing_unrevealed_cards() {
    let unrevealed_cards = [];
    let new_card_check = true;
    while (new_card_check) {
        let new_card = pickCard();
        if (new_card) {
            unrevealed_cards.push(new_card);
        }
        else {
            new_card_check = false;
        }
    }
    return unrevealed_cards;
}

// 7. Create the function that:
//     - take as an input manual_plaer cards and auto_player cards, power_color
//     - check who have power_color lowest card
//     - returns player and lowest card

export function determine_player_who_starts(human_player, automatic_player, power_card) {
    console.log(power_card);
    let current_power_color = power_card[0].slice(-1);






    return current_power_color;
}