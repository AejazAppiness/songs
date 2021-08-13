import {combineReducers} from 'redux';

const songs = () => {
    return [
        {title: "song1", duration: '2.30'},
        {title: "song2", duration: '3.30'},
        {title: "song3", duration: '4.30'},
        {title: "song4", duration: '5.30'},
    ]
}

const selectSong = (selectedSong = null, action) =>{
    if(action.type === 'SELECT_SONG') {
        return action.payload
    }
    return selectedSong
}

export default combineReducers({songs: songs, selectedSong: selectSong})