import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Player.css'


const Player = (props) => {
    const {name, image, role, salary} = props.player;
    return (
        <div className= 'card'>
            <img src={image} alt=""/>
            <p></p>
            <p> Player Name:</p>
            <h4>{name}</h4>
            <p>Role: {role}</p>
            <h5>Salary: {salary}</h5>
            <Button onClick = {
                ()=> props.handleAddPlayer(props.player)
            }> <FontAwesomeIcon icon={faUserPlus} /> Add Player</Button>
        </div>
    );
};

export default Player;