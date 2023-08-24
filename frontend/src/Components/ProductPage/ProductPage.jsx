import { styled } from "styled-components";
import Card from "./Card";
import Sidebar from "./Sidebar";

const ProductPage = () => {
    return <DIV>
        <div className="sidebar">
            <Sidebar />
        </div>
        <div className="cardsLayout">
            <Card />
        </div>

    </DIV>
}


const DIV = styled.div`
display: flex;
justify-content: space-evenly;
.sidebar{
    width: 28%;
}
.cardsLayout{
    width: 68%;
}
`;

export default ProductPage;