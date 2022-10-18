import Composition from "./composition"

function CompositionBlock(){
    const data = [
        {img:"img/Люся Чеботина.jpg",name:"Солнце Монако", artist: "Люся Чеботина"},
        {img:"img/late night show.jpg",name:"LATE NIGHT SHOW", artist: "dlb"},
        {img:"img/gayazov brazers2.jpg",name:"МАЛИНОВАЯ ЛАДА", artist: "GAYAZOV$ BROTHER$"},
        {img:"img/Mnogoznaal.jpg",name:"Muna", artist: "Mnogoznaal"},]
    return (
        <div className="composition_block ">
            <div className="composition_header ">
                популярно сегодня!
                </div>
                <div className="compositions ">
                    {data.map((item)=>{
                        return <Composition name={item.name} src={item.img} artist={item.artist}/>
                    })}
                </div>
        </div>
)
}

export default CompositionBlock