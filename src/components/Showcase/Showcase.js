import React, { useEffect, useState } from 'react';
import AuctionSummary from '../AuctionSummary/AuctionSummary';
import Player from '../Player/Player';
import playerData from './../../playerData/players_info.json'
import './Showcase.css'


const Showcase = () => {
    
    const [players, setPlayers] = useState([]);
    const [addedPlayer, setAddedPlayer] = useState([]);

    // storing players data from json to players variable
    useEffect(() =>{
        setPlayers(playerData)
    }, [])
    
    //handling add player event
    const handleAddPlayer = (player)=> {
        // ensuring player added only once
        if (!addedPlayer.includes(player) ) {
            const newAddedPlayer = [...addedPlayer, player];
            setAddedPlayer(newAddedPlayer);
        }
        else{
            alert('Already added the player')
        }
    }


    return (
        <div className = 'container'>
            <div className = 'playerContainer'>
            {
                players.map(player => <Player handleAddPlayer = {handleAddPlayer} player = {player}>
                </Player>)
            }
            </div>
            <div className = 'summaryContainer'>
                <AuctionSummary addedPlayer={addedPlayer}>
                </AuctionSummary>
            </div>
        </div>
    );

};

export default Showcase;