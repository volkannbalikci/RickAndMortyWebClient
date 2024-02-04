import React from 'react';
import { Link } from 'react-router-dom';


const LocationCard = ({ locationDto }) => {
    let { id, name, dimension } = locationDto;
    return (
        <div className='col-3 mt-2'>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <hr></hr>
                    <p class="card-text text-success">{dimension}</p>
                    <div class="d-grid gap-2">
                        <Link to={`konum/${id}`}
                            key={id} >
                        <a class="d-grid gap-2 mt-1 btn btn-warning">Detaylar</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>);
}


export default LocationCard