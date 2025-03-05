import MenuLateral from "./MenuLateral";
import Card from "./Card";

function ListadoClientes(){
    return(
<div className="panel-control">
            <MenuLateral/>
            <section className="panel-control-Clientes">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </section>
        </div>
    )
}

export default ListadoClientes;