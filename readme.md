
# notifications
generate_welcome_message(player, player_balance)
notify_about_place_in_ranking(player_place, player_balance, current_timestamp)

# game
generate_game_result()

# helpers
get_current_timestamp()
sort_ranking_by_player_balance(ranking)
count_records_in_ranking(ranking)
determine_player_place_in_the_ranking(ranking_list, current_player_name)

# online_casino
get_bet_ammount(player_balance)
determine_end_result(game_result, player)
count_consecutive_wins(round_result, wins)
determine_bonus(wins)
calculate_payout(round_result, current_balance, bet_stake, if_bonus)
trim_list_to_defined_length(amount_of_records, ranking)
save_player_session(player_name, player_balance, current_timestamp)
