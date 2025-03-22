
export function get_current_timestamp() {
    const currentTimestamp = new Date().toISOString();
    return currentTimestamp;
}

export function sort_ranking_by_player_balance(ranking) {
    ranking.sort((a, b) => b["Player balance"] - a["Player balance"]);
}

export function count_records_in_ranking(ranking) {
    let amount_of_records = ranking.filter((item) => item && typeof item === "object" && !Array.isArray(item)).length;
    return amount_of_records; 
 }

 export function determine_player_place_in_the_ranking(ranking_list, current_player_name) {
    for (let element of ranking_list) {
        if (element["Player name"] === current_player_name) {
            return (ranking_list.indexOf(element) + 1);
        } 
      } 
      return false;
}