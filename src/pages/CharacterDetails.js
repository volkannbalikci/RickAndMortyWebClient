import { React, useEffect, useState } from 'react'
import CharacterCard from '../components/CharacterCard';
import { useParams } from 'react-router-dom';
import LocationCard from '../components/LocationCard';
import EpisodeCard from '../components/EpisodeCard';

const CharacterDetails = () => {
    let { id } = useParams();
    console.log(id);
    let [pageNumer, setPageNumber] = useState(1);
    let [characterDto, setCharacterDto] = useState({});
    let [episodeDtoList, setEpisodeDtoList] = useState([]);
    let [origin, setOrigin] = useState({});
    let [location, setLocation] = useState({});

    let [title, setTitle] = useState('');
    let [message, setMessage] = useState('');

    let apiUrlString = `http://localhost:5176/api/Episodes/GetCharacterDetailsById?characterId=${id}`;

    useEffect(() => {
        (async function () {
            let apiResponse = await fetch(apiUrlString).then(response => response.json());
            setCharacterDto(apiResponse.data);
            setEpisodeDtoList(apiResponse.data.episode)
            setOrigin(apiResponse.data.origin)
            setLocation(apiResponse.data.location)
            setTitle(apiResponse.title);
            setMessage(apiResponse.message);
        })();
    }, [apiUrlString])

    let characterDtoResponse = <CharacterCard characterDto={characterDto}></CharacterCard>
    let episodeDtoListResponse = episodeDtoList.map((episodeDto) => {
        return (<EpisodeCard episodeDto={episodeDto}></EpisodeCard>);
    });
    let originResponse = <LocationCard locationDto={origin}></LocationCard>
    let locationResponse = <LocationCard locationDto={location}></LocationCard>
    if(episodeDtoList.length > 0){
        return <><div class="row">
        <div class="col">
            <hr></hr>
            <h2 class="text-dark text-center">{characterDto.name}</h2>
            <h2 class="text-success text-center">{characterDto.status}</h2>
            <h2 class="text-success text-center">{characterDto.species}</h2>
            <hr></hr>
        </div>
        <div class="row">
            <img src={characterDto.image} width={600} height={600} />
        </div>
        <hr></hr>
        <h3 class="text-primary text-center">Bulunduğu Bölümler</h3>
        <hr></hr>
        <div class="row">
            {episodeDtoListResponse}
        </div>
        <div class="row">
            
                <hr></hr>
                <h3 class="text-warning text-center">Origin Bilgileri</h3>
                <hr></hr>
                {originResponse}

                <hr></hr>
                <h3 class="text-warning text-center">Location Bilgileri</h3>
                <hr></hr>
                {locationResponse}

        </div>
    </div></>;
    }
    else{
        return<><div class="spinner d-flex justify-content-center">
        <div class="spinner spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div></>
}    
}

export default CharacterDetails;



