import MenuLateral from "./MenuLateral";
import Card from "./Card";

function PanelControl() {
    return (
        <div className="panel-control">
            <MenuLateral/>
            <section className="panel-control-section">
                <Card/>
                <Card/>
                <Card/>
            </section>
        </div>
    )
}

export default PanelControl;