
import { 
    dealing_first_hand_for_manual_player, 
    dealing_first_hand_for_auto_player, 
    dealing_power_color, 
    dealing_unrevealed_cards,
    determine_player_who_starts
} from "./durak.js";



function run_durak() {
    console.log("Durak");

    let manual_player = dealing_first_hand_for_manual_player();
    console.log(`My cards: ${manual_player}`);

    let auto_player = dealing_first_hand_for_auto_player();
    console.log(`Auto player cards: ${auto_player}`);

    let power_color = dealing_power_color();
    console.log(`Power color: ${power_color}`);

    let unrevealed_cards = dealing_unrevealed_cards();
    console.log(`Deck: ${unrevealed_cards}`);

    let player_who_starts = determine_player_who_starts(manual_player, auto_player, power_color);
    console.log(player_who_starts);

}

run_durak();