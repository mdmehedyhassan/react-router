import React from 'react';
import { Card,Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Team.css'

const Team = (props) => {
    const {idTeam, strTeam, strTeamBadge } = props.team;
    const history = useHistory();
    const showTeamDetail = id =>{
        const url = `teamDetail/${idTeam}`;
        history.push(url)
    }
    return (
        <div>
            <Card className="bg-warning " style={{ width: '21rem' , margin: '10%' }}>
                <Card.Img variant="top" src={strTeamBadge} />
                <Card.Body>
                    <Card.Title>{strTeam}</Card.Title>
                    <Card.Text>
                        <small> Sports Type: Football</small>
                    </Card.Text>
                    <Button onClick={() => showTeamDetail()} variant="primary">Explore</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Team;