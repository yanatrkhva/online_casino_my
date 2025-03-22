
export function generate_game_result() {
    let game_result = Math.floor(Math.random() * 10) + 1;
    console.log(`Game round result: ${game_result}`);
    return game_result;
}
