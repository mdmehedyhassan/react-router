import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faFlag, faFutbol, faMars, faPodcast } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const TeamDetail = () => {
    const { id } = useParams();
    const [teamDetail, setTeamDetail] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeamDetail(data.teams))
    }, []);
    return (
        <div className="bg-dark">
            {
                teamDetail.map(team =>
                    <div>
                        <div className="club-background-image">
                            <div className="club-background-text">
                                <img className="w-75" src={team.strTeamBadge} alt="" />
                                <h1 style={{ fontSize: "70px", fontWeight: "900" }}>{team.strTeam}</h1>
                            </div>
                        </div>

                        <div className="m-5">
                            <div className="row bg-warning m-1 align-items-center">
                                <div className="col-md-6 mt-3 mb-3 p-4 ">
                                    <h1>{team.strTeam}</h1>
                                    <p><FontAwesomeIcon icon={faPodcast} /> Rounded: {team.intFormedYear}</p>
                                    <p><FontAwesomeIcon icon={faFlag} /> Country: {team.strCountry}</p>
                                    <p><FontAwesomeIcon icon={faFutbol} /> Sport Type: Football</p>
                                    <p><FontAwesomeIcon icon={faMars} /> Gender: {team.strGender}</p>
                                </div>
                                <div className="col-md-6">
                                    <img className="w-100 p-4" src={team.strTeamFanart4} alt="" />
                                </div>
                            </div>
                            <div className="text-warning pt-5">
                                <p >{team.strDescriptionEN}</p>
                                <br />
                                <p>{team.strDescriptionIT}</p>
                            </div>
                        </div>
                        <div class="d-flex justify-content-center text-light pb-5">
                            <a style={{ fontSize: "50px"}} href="#" className="link-primary p-3"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a style={{ fontSize: "50px"}} href="#" className="link-primary p-3"><FontAwesomeIcon icon={faFacebook} /></a>
                            <a style={{ fontSize: "50px"}} href="#" className="link-danger p-3"><FontAwesomeIcon icon={faYoutube} /></a>
                        </div>
                    </div>
                )
            }

        </div>
    );
};

export default TeamDetail;