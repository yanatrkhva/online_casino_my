import { 
    deck_of_cards
} from "./constants.js";


function createCardPicker(cards) {
    let usedCards = [];  // Tracks the cards that have already been picked

    return function() {
        // If all cards have been picked, reset the state
        if (usedCards.length === cards.length) {
            usedCards = [];  // Reset used cards
            return false;    // Return false since all cards are used
        }

        // Pick a random card that's not used yet
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * cards.length);
        } while (usedCards.includes(randomIndex));

        // Mark this card as used
        usedCards.push(randomIndex);

        // Return the randomly picked card
        return cards[randomIndex];
    };
}

export const pickCard = createCardPicker(deck_of_cards);
