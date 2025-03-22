

let power_card = "8A";
// let card_1 = "KS";
// let card_2 = "KC";


let manual_player_hand = ["TH", "JD", "AC", "QH", "AD", "JS"];
let auto_player_hand = ["7D", "8D", "8C", "QC", "JH", "QS"];

function compare_hand_cards_with_power_color(manual_player_hand, power_card) {
    let power_card_color = power_card[1].slice(-1);
    console.log(`Power color: ${power_card_color}`);

    for (let card of manual_player_hand) {
        let hand_card_color = manual_player_hand[0].slice(-1);   
        console.log(`Card color: ${hand_card_color}`);
        if (hand_card_color === power_card_color) {
            console.log(card);
        }
        else if (hand_card_color !== power_card_color) {
            console.log("false");
        }
    }
    
}

compare_hand_cards_with_power_color(manual_player_hand, power_card);



