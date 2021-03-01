import React from 'react';
import './Player.css'

const Player = (props) => {
    const {name, image, role, salary} = props.player;
    return (
        <div className= 'card'>
            <img src={image} alt=""/>
            <p> Player Name:</p>
            <h3>{name}</h3>
            <p>Role: {role}</p>
            <h4>Salary: {salary}</h4>
            <button> Add Player</button>
        </div>
    );
};

export default Player;