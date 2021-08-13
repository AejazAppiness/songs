import React from 'react'
import {connect} from 'react-redux'

function SongDetail(props) {
    console.log(props);
    if(!props.selectedSong) {
        return <div>select a song</div>
    }
    return (
        <div>
            
                <p>{props.selectedSong.title}</p>
                <p>{props.selectedSong.duration}</p>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        selectedSong: state.selectedSong
    }
}

export default connect(mapStateToProps)(SongDetail)
