import { styled } from "styled-components";
import Card from "./Card";
import Sidebar from "./Sidebar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPets } from "../../Redux/Pets/action";
import { useSearchParams } from "react-router-dom";

const ProductPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const data = useSelector((store) => store.petData.data);

  let obj = {
    params: {
      gender: searchParams.get("gender"),
      breed: searchParams.get("breed"),
      age: searchParams.get("age"),
      size: searchParams.get("size"),
    },
  };

  useEffect(() => {
    dispatch(getAllPets(obj));
  }, [searchParams]);

  return (
    <DIV>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="cardsLayout">
        {data.map((el, i) => {
          return <Card key={el._id} data={el} />;
        })}
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: #f3f3f3;

  .sidebar {
    width: 15%;
  }
  .cardsLayout {
    width: 69%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }
`;

export default ProductPage;
