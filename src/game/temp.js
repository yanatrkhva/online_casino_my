
// create a function that compares cards by rank and color 
// Function 1 - comparing cards color:
// - if card 1 color = power card color return true, if not - false   
// - if card 2 color = power card color return true, if not - false 
// - if card 1 and card 2 = power card color return both
// ** In main function (if one of the cards = true): 
// - if card 1 color = true and card 2 color = false => return card 1 is stronger 
// - if card 1 color = false and card 2 color = true => return card 2 is stronger 
// Function 2 - comparing card rank:
// - ex: card_rank = card[0].slice(-1):
// - write all possible combinations 
// - return strongest card
// ** In main function (both cards = true)
// - if card 1 color = true and card 2 color = true 
// - invoking new function compare_ranks_only 
// ** In main function (both cards = false)
// return error message 


// add case if both cards are not power cards color 
// test fully functions :)


const deck_of_cards = [
    "6H", "7H", "8H", "9H", "TH", "JH", "QH", "KH", "AH",
    "6D", "7D", "8D", "9D", "TD", "JD", "QD", "KD", "AD",
    "6C", "7C", "8C", "9C", "TC", "JC", "QC", "KC", "AC",
    "6S", "7S", "8S", "9S", "TS", "JS", "QS", "KS", "AS"
];

let power_card = "8A";
let card_1 = "KS";
let card_2 = "KC";


let manual_player_hand = ["TH", "JD", "AC", "QH", "AD", "JS"];
let auto_player_hand = ["7D", "8D", "8C", "QC", "JH", "QS"];

function compare_cards_color(card_1, card_2, power_card) {
    let current_power_color = power_card[1].slice(-1);
    console.log(`Power color: ${current_power_color}`);
    
    let card_1_color = card_1[1].slice(-1);
    console.log(`Card 1 color: ${card_1_color}`);

    let card_2_color = card_2[1].slice(-1);
    console.log(`Card 2 color: ${card_2_color}`);

    if (card_1_color === current_power_color && card_2_color === current_power_color) {
        console.log("both_power_color");
        return "both_power_color"; 
    }

    else if (card_1_color === card_2_color) {
        console.log("both_same_non_power_color");
        return "both_same_non_power_color"; 
    }
    
    else if (card_1_color === current_power_color) {
        console.log("true_1");
        return "true_1";
    }   

    else if (card_2_color === current_power_color) {
        console.log("true_2");
        return "true_2";
    }   
}

function convert_card_rank_to_number(card) {
    let card_rank = card[0].slice(-1);

    if (card_rank === "T") {
        return 10;
    }

    else if (card_rank === "J") {
        return 11;
    }

    else if (card_rank === "Q") {
        return 12;
    }

    else if (card_rank === "K") {
        return 13;
    }

    else if (card_rank === "A") {
        return 14;
    }

    else {
        return card_rank;
    }
}    

function compare_cards_rank(card_1, card_2) {
    let rank_card_1 = convert_card_rank_to_number(card_1);
    console.log(rank_card_1);
    let rank_card_2 = convert_card_rank_to_number(card_2);
    console.log(rank_card_2);

    if (rank_card_1 > rank_card_2) {
        return "card_1"
    }

    else if (rank_card_1 < rank_card_2) {
        return "card_2"
    }

    else {
       return "equal";
    }
}

function define_stronger_card(card_1, card_2, power_card) { 
    let strongest_card_by_color = compare_cards_color(card_1, card_2, power_card);

    if (strongest_card_by_color === "true_1") {
        console.log("card_1");
        return card_1;
    }

    else if (strongest_card_by_color === "true_2") {
        console.log("card_2");
        return card_2;
    }

    else if (strongest_card_by_color === "both_power_color" || strongest_card_by_color === "both_same_non_power_color") {
        let strongest_card_by_rank = compare_cards_rank(card_1, card_2);

        if (strongest_card_by_rank === "card_1") {
            console.log("card 1");
            return card_1;
        }
        else if (strongest_card_by_rank === "card_2") {
            console.log("card 2");
            return card_2;
        }
    }

    else {
        console.log(false);
        return false;
    }
}

define_stronger_card(card_1, card_2, power_card);


function determine_player_who_starts(manual_player_hand, auto_player_hand, power_card) {
    
    
    
}

determine_player_who_starts(power_card);