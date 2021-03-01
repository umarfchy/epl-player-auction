import React from 'react';

const AuctionSummary = (props) => {
    return (
        <div>
            <h2>
                    Auction Summary
                </h2>
                <h4> Total player: {props.addePlayer.length}</h4>
                <p>Names of the players</p>
                <ul>
                </ul>
                <p>
                    total budget = ----
                </p>
        </div>
    );
};

export default AuctionSummary;