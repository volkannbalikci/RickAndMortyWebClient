import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';


const CharacterCard = ({ characterDto }) => {
    let { id, name, image, status, gender, species, created } = characterDto;
    let date = new Date(created);
    let alignedDate = moment(date).format('MMMM Do YYYY').toString();
    return (
        <div className='col-3 mt-2'>
            <div class="card">
                <div class="btn-group" role="group">
                    <input type="checkbox" class="btn-check" id={id} />
                    <label class="btn btn-outline-primary" for={id}>Favori Karakter</label>
                </div>
                <div class="card-body">
                    <div >
                        <img src={image} class="card-img-top" alt="..." />
                    </div>                <hr></hr>
                    <h5 class="card-title">{name}</h5>
                    <h5 class="card-title">{status}</h5>
                    <h7 class="card-title">{gender}</h7>
                    <h7 class="card-text">{species}</h7>
                    <div class="d-grid gap-2 mt-1">
                        <Link to={`/karakter/${id}`}
                            key={id} >
                            <a class="d-grid gap-2 mt-1 btn btn-success">Detaylar</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>);
}


export default CharacterCard