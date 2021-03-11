import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag, faFutbol, faMars, faPodcast } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const TeamDetail = () => {
    const { id } = useParams();
    const [teamDetail, setTeamDetail] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeamDetail(data.teams))
    }, [id]);
    return (
        <div className="bg-dark">
            {
                teamDetail.map(team =>
                    <div key={team.idTeam}>
                        <div className="club-background-image">
                            <div className="club-background-text">
                                <img className="w-75" src={team.strTeamBadge} alt="" />
                                <h1 style={{ fontSize: "70px", fontWeight: "900" }}>{team.strTeam}</h1>
                            </div>
                        </div>

                        <div className="m-5">
                            <div className="row bg-warning m-1 align-items-center">
                                <div className="col-md-6 mt-3 mb-3 p-4 ">
                                    <h1 style={{ fontSize: "50px", fontWeight: "900" }}>{team.strTeam}</h1>
                                    <h3><FontAwesomeIcon icon={faPodcast} /> Rounded: {team.intFormedYear}</h3>
                                    <h3><FontAwesomeIcon icon={faFlag} /> Country: {team.strCountry}</h3>
                                    <h3><FontAwesomeIcon icon={faFutbol} /> Sport Type: Football</h3>
                                    <h3><FontAwesomeIcon icon={faMars} /> Gender: {team.strGender}</h3>
                                </div>
                                <div className="col-md-6">
                                    <img className="w-100 p-2" src={team.strTeamFanart4} alt="" />
                                </div>
                            </div>
                            <div className="text-warning pt-5">
                                <p >{team.strDescriptionEN}</p>
                                <br />
                                <p>{team.strStadiumDescription}</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center pb-5">
                            <h1 style={{ fontSize: "70px"}}>
                                <FontAwesomeIcon className="p-2 text-primary" icon={faTwitter} />
                                <FontAwesomeIcon className="p-2 text-primary" icon={faFacebook} />
                                <FontAwesomeIcon className="p-2 text-danger" icon={faYoutube} />
                            </h1>
                            
                        </div>
                    </div>
                )
            }

        </div>
    );
};

export default TeamDetail;