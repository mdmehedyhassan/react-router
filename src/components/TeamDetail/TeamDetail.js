import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const TeamDetail = () => {
    const { id } = useParams();
    const [teamDetail, setTeamDetail] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeamDetail(data.teams))

    }, [])
    return (
        <div>
            <div className="club-background-image">
                <div className="club-background-text">
                    <h1 style={{ fontSize: "50px", fontWeight: "900" }}> Hello </h1>
                </div>
            </div>
            {
                teamDetail.map(team =>
                    <div>
                        <div className="row bg-warning justify-content-center align-items-center">
                            <div className="col-md-6 mt-3 mb-3 p-4 ">
                                <h3>{team.strTeam}</h3>
                                <p>Rounded: {team.intFormedYear}</p>
                                <p>Country: {team.strCountry}</p>
                                <p>Sport Type: Football</p>
                                <p>Gender: {team.strGender}</p>
                            </div>
                            <div className="col-md-6">
                                <img className="w-100 p-4" src={team.strTeamFanart4} alt="" />
                            </div>
                        </div>
                        <div>
                            <p>{team.strDescriptionEN}</p>
                            <br/>
                            <p>{team.strDescriptionIT}</p>
                        </div>
                    </div>
                )
            }

            <div class="d-flex justify-content-center">
            <FontAwesomeIcon icon={faCoffee} />
            </div>
        </div>
    );
};

export default TeamDetail;