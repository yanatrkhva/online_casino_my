
0. Customer requirement: I want a cool, card game. 
1. Busienss requirements. 
2. Software requirements. 
3. Detail design software requirements.


# Business requirements
1. Deck of cards: 36. Colors: hearts, diamonds, clubs, spades. Ranks: 6, 7, 8, 9, 10, Jack(J), Queen (Q), King (K), Ace (A).
2. there are 2 players. one real user, one automatic. 
3. initial phase: each player gets 6 random cards, one another card gets revealed as power colour (trump suit), rest of the cards stay unrevealed for later phases. 
4. game started player, which has the lowest rank card of the selected power color.
5. if manual player starts the game, he must be prompted to chose a card. 
   if auto player start, he must always use the logic defined in point 6. 
6. Logic for autoplayer card selection - when he attacts:
    a. chose the lowest rank of any non-power color
    b. if all cards are power color, chose the lowest one
7. Logic for autoplayer card selection - when he defends:
    a. chose if he has a card in the same color as the one used to attack him
    b. if yes, defend with the lowest available rank, higher than the card used for the attack
    c. if not, defend with the lowest rank of the power color
8. If a player can not defend himself, the player must take all the cards from the table to his set. 
9. Each another round is started by the player who successfully defend himself or the player who successfully attacked. 
10. If a player successfully defend himself, all the cards from the table are getting removed from the game. 
11. The max number of cards used to attack in one round is 6. 
12. When the cards are removed from the round, all players must take cards from the deck, to keep mininum number of 6 at hand. 
13. A player who attacked, takes cards from the deck as first one. 
14. If there are no enough cards in the deck, to fill 6 in each it is expected and the players should be notified about it. 
15. A player who gets rid of all cards as a first one, wins the game. A player who remains with cards, becomes DURAK heheheh.


# Software requirements
1. Declare deck of card as a hardcoded list. Example: 6H, 7D, QC, AS. 
2. Declare two variables -> one for each player. 
3. Declare a variable for power color. 
4. Create a function which chooses cards randomly and allocates 6 for each player. Each player variable must be a list which contains his set of cards. 
5. The function from point 4 must also chose one random card and unrevel it as power color - notify players about it. 
6. The function must also retun a list with all the rest cards, without revealing them. 
7. 
