import React from 'react';
import {connect} from 'react-redux';
import {selectSong} from '../actions'

const styles = {color: "white", backgroundColor:"blue", outline:"none", border:"none", padding:"10px 30px", cursor: 'pointer'}

function Songs(props) {
    console.log(props);
    return (
        <div>
            {
                props.songs.map(item => {
                    // console.log(selectSong(item));
                    return <div style={{display: "flex", width:"300px", justifyContent:"space-evenly", margin:"10px"}} key={item.title}>
                        <p>{item.title}</p>
                        <button style={styles} onClick={() => props.selectSong(item)}>select</button>
                    </div>
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
return {songs: state.songs}
}

export default connect(mapStateToProps, {selectSong})(Songs)
