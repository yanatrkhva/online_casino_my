

let power_card = "8A";
// let card_1 = "KS";
// let card_2 = "KC";


let manual_player_hand = ["TH", "JA", "AA", "QH", "AD", "JS"];
let auto_player_hand = ["TS", "8D", "8C", "QC", "JH", "QS"];

function compare_hand_cards_with_power_color(hand_cards, power_card) {
    let power_card_color = power_card[1].slice(-1);
    let hand_power_cards = [];

    for (let card of hand_cards) {
        let hand_card_color = card[1].slice(-1);   
        
        if (hand_card_color === power_card_color) {
            hand_power_cards.push(card);
        }

    }
    return hand_power_cards;
}

let manual_player_power_cards = compare_hand_cards_with_power_color(manual_player_hand, power_card);
console.log(`Manual player power cards: ${manual_player_power_cards}`);

let auto_player_power_cards = compare_hand_cards_with_power_color(auto_player_hand, power_card);
console.log(`Auto player power cards: ${auto_player_power_cards}`);


