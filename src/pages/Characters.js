import {React, useEffect, useState} from 'react'
import CharacterCard from '../components/CharacterCard';

const Characters = () => {

    let [pageNumer, setPageNumber] = useState(1);
    let [characterDtoList, setCharacterDtoList] = useState([]);
    let [title, setTitle] = useState('');
    let [message, setMessage] = useState('');
    let apiUrlString = `http://localhost:5176/api/characters/GetPaginatedCharacterDtoList?pageIndex=0&pageSize=8`;
  
    useEffect(() => {
      (async function () {
        let apiResponse = await fetch(apiUrlString).then(response => response.json());
        setCharacterDtoList(apiResponse.data.items);
        setTitle(apiResponse.title);
        setMessage(apiResponse.message);
      })();
    }, [apiUrlString])

    let charactersResponse;
    if (characterDtoList) {
        charactersResponse = characterDtoList.map((characterDto) => {
            let { id, name, status, gender, species, created } = characterDto;
            return (<CharacterCard characterDto={characterDto}></CharacterCard>);
        });
    } else {
        charactersResponse = "Karakter Bulunamadı.";
    }

    return <>{charactersResponse}</>;
}

export default Characters;



