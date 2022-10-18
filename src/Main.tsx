import React from "react"
import { useEffect } from "react"
import CompositionBlock from "./compositionBlock"
import Song from "./Song"

interface Props{
    selected:string
}
function Main(selected:Props){
    const [songs, setTracks]=React.useState({toptracks:{track:[{artist:{name:""},name:"", playcount:'0',image:[{text:""}]}]}})
    useEffect(()=>{
        fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&mbid=${selected.selected}&api_key=d36b1811684397ee00df5fd634932b73&format=json`).then(res => res.json()).then(setTracks)
    },[selected.selected])
    return <div className="main">
        <CompositionBlock/>
                <div className="songs_header ">Треки</div>
                
                {songs.toptracks.track.map((item)=>{return <Song duration={Math.floor((Math.random() * 180000) + 170000)} image='img/library.png' id="" name = {item.name} author={item.artist.name}/>})}
                
            </div>
}

export default Main