interface Props{
    src: string;
    name: string;
    artist: string;
}
function Composition(props:Props){
 return(
    <div className="composition ">
        <img src={props.src} alt="composition" width="150px " height="150px"/>
        <div>{props.name}</div>
        <div>{props.artist}</div>
    </div>
 )
}

export default Composition