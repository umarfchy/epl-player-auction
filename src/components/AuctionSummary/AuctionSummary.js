import React from 'react';

const AuctionSummary = (props) => {
    const addedPlayer = props.addedPlayer;
    const totalAddedPlayer = addedPlayer.reduce((totalPlayer, oldPlayer) => totalPlayer + oldPlayer.salary, 0)

    return (
        <div>
            <h2>Auction Summary</h2>
            <h4> Total player: {props.addedPlayer.length}</h4>
            <p>Name and annual salary of the selected player(s):-</p>
            <ol>
                {
                    addedPlayer.map(player => <li>{player.name} - £{player.salary}</li>)
                }
            </ol>
            <p>
            Total Budget (Cumulative Annual Salary) = £{totalAddedPlayer}
            </p>
        </div>
    );
};

export default AuctionSummary;