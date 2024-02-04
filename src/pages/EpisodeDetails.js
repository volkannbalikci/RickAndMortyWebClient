import {React, useEffect, useState} from 'react'
import EpisodeCard from '../components/EpisodeCard';

const EpisodeDetails = () => {

    let [pageNumer, setPageNumber] = useState(1);
    let [episodeDtoList, setEpisodeDtoList] = useState([]);
    let [title, setTitle] = useState('');
    let [message, setMessage] = useState('');
  
    let apiUrlString = `http://localhost:5176/api/episodes/GetPaginatedEpisodeDtoList?pageIndex=0&pageSize=5`;
  
    useEffect(() => {
      (async function () {
        let apiResponse = await fetch(apiUrlString).then(response => response.json());
        setEpisodeDtoList(apiResponse.data.items);
        setTitle(apiResponse.title);
        setMessage(apiResponse.message);
      })();
    }, [apiUrlString])

    let episodesResponse;
    if (episodeDtoList) {
        episodesResponse = episodeDtoList.map((episodeDto) => {
            return (<EpisodeCard episodeDto={episodeDto}></EpisodeCard>);
        });
    } else {
        episodesResponse = "Bölüm Bulunamadı.";
    }

    return <>{episodesResponse}</>;
}

export default EpisodeDetails;



