import { Button } from 'bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';


const EpisodeCard = ({ episodeDto }) => {
    let { id, name, air_date, episode } = episodeDto;
    return (
        <div className='col-3 mt-2'>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{name} <span class="text-success">{episode}</span></h5>
                    <hr></hr>
                    <h7 class="card-text"> Yayınlanma Tarihi {air_date}</h7>
                    <div class="d-grid gap-2">
                        <Link to={`bolum/${id}`}
                            key={id} >
                        <a class="d-grid gap-2 mt-2 btn btn-primary">Detaylar</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>);
}


export default EpisodeCard