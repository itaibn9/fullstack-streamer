import React, { useState, useEffect } from 'react';
import './ArtistPage.css';
import { useLocation  } from "react-router-dom";
import TitleBlock from '../shared_components/TitleBlock/TitleBlock';
import SongRow from '../shared_components/songRow/SongRow';
import SquareRow from '../shared_components/SqaureRow/SquareRow';
import axios from 'axios';

function ArtistPage() {
    const [location, setLocation] = useState(useLocation().pathname.split('/'));
    const [listOfSongs, setListOfSongs] = useState([]);

    useEffect(() => {
        (async () => {
          try {
            console.log(location)
            const { data } = await axios.get(`/api/artist/${location[3]}/list-of-songs`);
            console.log();
            setListOfSongs(data );
          } catch (error) {
            console.log(error);
          }
        })();
      }, [location]);

    return (
        <div className="artistPage">
            <TitleBlock />
            {listOfSongs[0]===undefined ? null :
            <SquareRow table={'artist'} page={'album'} />}
            <div className="list_of_songs">
            { listOfSongs[0]===undefined ?   <h1>No songs To this Artist</h1> :
            listOfSongs.map((song) => <SongRow name={song.name} length={song.length} artist={song.Artist.name}
             songID={song.id} type={location[2]} typeID={location[3]} />)  }
        </div>
            
        </div>
    )
}

export default ArtistPage;
