import React, { useState } from 'react';
import TinderCard from "react-tinder-card"
import "./TinderCards.css";


function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: "Elon Musk",
            url: "https://media.gqmagazine.fr/photos/5ff858d4bb43933d687f9494/master/pass/464172224",
        },
        {
            name: "Samuel L. Jackson",
            url: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTTINMLZfueI4G2Fwsc0QalqUQBnoD6KV8jY2yHXJA5rJqMXLPyetXA8Yqq0ySP",
        },
        {
            name: "Jim Carrey",
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Jim_Carrey_2008.jpg/640px-Jim_Carrey_2008.jpg",
        },
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing" + nameToDelete);
    };

    const outOfFrame = (name) => {
        console.log(name + " left the screen");
    };





  return (
    <div className="tinderCards">
        <div className="tinderCards__cardContainter">
            {people.map((person) => (
            <TinderCard
                className = "swipe"
                key={person.name}
                preventSwipe={["up", "down"]}
                onSwipe={(dir) => swiped(dir, person.name)}
                onCardLeftScreen={() => outOfFrame(person.name)}
            >
                <div
                style={{ backgroundImage: `url(${person.url})` }}
                className="card">
                    <h3>{person.name}</h3>
                </div>
            </TinderCard>
        ))}
        </div> 
    </div>
    );
    }

export default TinderCards;
