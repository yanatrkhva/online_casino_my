export function generate_welcome_message(player, player_balance) {
    console.log(`Welcome, ${player}! Step into the action at Super Casino - where big wins and endless fun await. Good luck and enjoy the game! Your current balance is ${player_balance}.`);
};

export function notify_about_place_in_ranking(player_place, player_balance, current_timestamp) {
        if (player_place === 1) {
                console.log(`Big win! You are 1-st in the ranking! Thank you for the game, lucky duck! Your balance is ${player_balance}. Hope to see you soon! Current timestamp: ${current_timestamp}`);
            }
            else if (player_place === false) {
                console.log(`Thank you for the game! Your balance is ${player_balance}. Hope to see you soon! Current timestamp: ${current_timestamp}`); 
            }
            else {
                console.log(`Good game! You are ${player_place} in the ranking! Thank you for the game! Your balance is ${player_balance}. Hope to see you soon! Current timestamp: ${current_timestamp}`);
            }
        };