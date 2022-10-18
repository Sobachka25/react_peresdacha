import React, { useEffect } from "react"
interface Props{
    updateData:(value: string) => void
}

const api_key = 'd36b1811684397ee00df5fd634932b73';
const Aside =( {updateData}:Props )=>{
    const [playlists, setPlaylists] = React.useState({topartists:{artist:[{name:"", mbid:""}]}})
    const [recentSongs, setRecentTracks] = React.useState({tracks:{track:[{name:""}]}})
    useEffect(()=>{
        fetch(`http://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=hip-hop&api_key=d36b1811684397ee00df5fd634932b73&format=json`).then(res=>res.json()).then(setPlaylists)//.filter(word=>word!="Juice WRLD")
        fetch('http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=hip-hop&api_key=d36b1811684397ee00df5fd634932b73&format=json').then(res => res.json()).then(setRecentTracks)
    },[])
    return(
        <aside className="accordion">
            <ul className="accordion1">
                <li className="accordion2">
                    <div className="accordion5">Лучшие треки</div>
                    <ul className="accordion3" id="recent_tracks">
                    {recentSongs.tracks.track.slice(0,15).map((item)=> <li className="accordion4">{item.name}</li>)}
                    </ul>
                </li>
                <li className="accordion2">
                <div className="accordion5">Топ rap исполнителей</div>
                    <ul className="accordion3" id="playlists_list">
                        <div>
                        {playlists.topartists.artist.filter(word=>word.mbid!==undefined).slice(0,15).map((item)=> <li className="accordion4" onClick={()=>updateData(item.mbid)}>{item.name}</li>)}
                        </div>
                    </ul>
                </li>
            </ul>
        </aside>
    )
}

export default Aside