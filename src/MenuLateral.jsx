import userimage from './assets/mac.jpg'
function MenuLateral() {
    return (
    <aside className="panel-control-aside">
        <div>
            <img src={userimage} alt="" />
        </div>
        <nav>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </nav>
    </aside>
    )
}

export default MenuLateral;