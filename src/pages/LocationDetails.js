import {React, useEffect, useState} from 'react'
import CharacterCard from '../components/CharacterCard';
import LocationCard from '../components/LocationCard';

const LocationDetails = () => {

    let [pageNumer, setPageNumber] = useState(1);
    let [locationDtoList, setLocationDtoList] = useState([]);
    let [title, setTitle] = useState('');
    let [message, setMessage] = useState('');
  
    let apiUrlString = `http://localhost:5176/api/episodes/GetPaginatedEpisodeDtoList?pageIndex=0&pageSize=5`;
  
    useEffect(() => {
      (async function () {
        let apiResponse = await fetch(apiUrlString).then(response => response.json());
        setLocationDtoList(apiResponse.data.items);
        setTitle(apiResponse.title);
        setMessage(apiResponse.message);
      })();
    }, [apiUrlString])

    let locationsResponse;
    if (locationDtoList) {
        locationsResponse = locationDtoList.map((locationDto) => {
            return (<LocationCard locationDto={locationDto}></LocationCard>);
        });
    } else {
        locationsResponse = "Karakter Bulunamadı.";
    }

    return <>{locationsResponse}</>;
}

export default LocationDetails;



