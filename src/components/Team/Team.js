import React from 'react';
import { Card,Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Team.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Team = (props) => {
    const {idTeam, strTeam, strTeamBadge } = props.team;
    const history = useHistory();
    const showTeamDetail = id =>{
        const url = `teamDetail/${idTeam}`;
        history.push(url)
    }
    return (
        <div>
            <Card className="bg-warning justify-content-center align-items-center" style={{ width: '21rem' , margin: '10%' }}>
                <Card.Img className="w-75" variant="top" src={strTeamBadge} />
                <Card.Body >
                    <Card.Title><h1>{strTeam}</h1></Card.Title>
                    <Card.Text>
                        <small> Sports Type: Football</small>
                    </Card.Text>
                    <Button onClick={() => showTeamDetail()} variant="primary">Explore <FontAwesomeIcon icon={faArrowRight} /> </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Team;