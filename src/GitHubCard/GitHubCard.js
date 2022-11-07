import React from "react";
import { Card } from "react-bootstrap";
import avatar from './biggie_cheese.jpg';

export default function GitHubCard() {
    return (
        <Card>
            <Card.Img variant='top' src={avatar} />
            <Card.Title>Alex Schmidt</Card.Title>
            <Card.Text>
                My name is Alex and I love music and video games. <br />
                I am currently studying React in a coding bootcamp! 
            </Card.Text>
        </Card>
    );
}