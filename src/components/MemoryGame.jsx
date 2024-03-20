// MemoryGame component

import React, { useState, useEffect } from "react";
import Card from "./Card";
import Scoreboard from "./ScoreBoard";

const MemoryGame = () => {
    const emojis = ['🍎', '🍌', '🍒', '🥝', '🍇', '🍉', '🍓', '🍍'];
    const [cards, setCards] = useState([]);
    const [selectedCards, setSelectedCards] = useState([]);
    const [totalClicks, setTotalClicks] = useState(0);
    const [score, setScore] = useState(0);

    useEffect(() => {
        initializeGame();
    }, []);

    const initializeGame = () => {
        const shuffledEmojis = shuffle([...emojis, ...emojis]);
        const initialCards = shuffledEmojis.map((emoji, index) => ({
            id: index,
            emoji: emoji,
            flipped: false,
        }));
        setCards(initialCards);
    };

    const shuffle = (array) => {
        let currentIndex = array.length, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    };

    const handleCardClick = (id) => {
        setTotalClicks(totalClicks + 1);

        const updatedCards = cards.map(card => {
            if (card.id === id && !card.flipped) {
                card.flipped = true;
                return card;
            }
            return card;
        });

        setSelectedCards([...selectedCards, id]);

        setCards(updatedCards);

        if (selectedCards.length === 1) {
            if (updatedCards[id].emoji === updatedCards[selectedCards[0]].emoji) {
                setScore(score + 1);
                setSelectedCards([]);
            } else {
                setTimeout(() => {
                    updatedCards[id].flipped = false;
                    updatedCards[selectedCards[0]].flipped = false;
                    setCards(updatedCards);
                    setSelectedCards([]);
                }, 1000);
            }
        } else if (selectedCards.length === 2) {
            setSelectedCards([]);
        }
    };

    const resetGame = () => {
        setTotalClicks(0);
        setScore(0);
        initializeGame();
    };

    return (
        <div className="memory-game">
            <h1>Memory Game</h1>
            <Scoreboard totalClicks={totalClicks} score={score} />
            <div className="cards">
                {cards.map(card => (
                    <Card
                        key={card.id}
                        id={card.id}
                        emoji={card.flipped ? card.emoji : '❓'}
                        handleClick={handleCardClick}
                    />
                ))}
            </div>
            <button onClick={resetGame}>Reset</button>
        </div>
    );
};

export default MemoryGame;