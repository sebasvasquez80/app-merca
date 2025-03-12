import MenuLateral from "./MenuLateral";
import Card from "./Card";
import { clientes } from "./database";
function ListadoClientes() {
    return (
        <div className="panel-control">
            <MenuLateral />
            <section className="panel-control-Clientes">
                {
                    clientes.map((cliente) => { 
                        return <Card type={'clientes'} prop={cliente} /> 
                    })
                }
            </section>
        </div>
    )
}

export default ListadoClientes;