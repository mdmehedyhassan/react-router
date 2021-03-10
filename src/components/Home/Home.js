import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
import './Home.css'

const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League'
        fetch(url)
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, []);


    return (
        <div className ="bg-dark">
            <div className="club-background-image">
                <div className="club-background-text">
                    <h1 style={{fontSize:"50px", fontWeight:"900"}}>English Premier League</h1>
                </div>
            </div>
            <div className="justify-content-center ">
                <div className="m-5 p-5 d-flex flex-wrap justify-content-between">
                    {
                        teams.map(team => <Team key={team.idTeam} team={team}></Team>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;