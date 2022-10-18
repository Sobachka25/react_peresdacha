interface Props{
    image:string;
    id:string;
    name:string;
    author:string;
    duration:number;
}
function Song(props:Props){
    return(
        <div className="song">
            <img src={props.image}  width="20px" alt="song_img" height="20px" className="song_image "/>
            <div>{props.author} — {props.name}</div>
            <div className="time1 ">{getTime(props.duration)}</div>
        </div>
    )
}
function getTime(duration: number){
    const minutes = Math.trunc(duration / 60000);
    let seconds = `${Math.trunc((duration - minutes * 60000) / 1000)}`;
    if (+seconds < 10) seconds = `0${seconds}`;
    return `${minutes}:${seconds}`;
}
export default Song