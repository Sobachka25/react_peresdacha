function Header(){
    const shapka=["любимые треки","мои плейлисты","мои исполнители","любимое братишек","рекомендации"]    
    return (
        <header className="header">
       
        <a href="/">
            <img src="img/logo.png" height="50px" width="auto"/>
        </a>
        {shapka.map((item)=>{
            return  (<a href="#" className="b">
            {item}
            </a>)
        })}
        <form action="" method="get" className="header_searchbox">
            <input type="search" placeholder="Поиск" className="searchbox_image" />
        </form>
        <div>
            <img className="user" src="img/anonim.png" alt="User" height="40px"/>
        </div>
        </header>
    )
}

export default Header;