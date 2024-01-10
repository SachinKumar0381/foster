import axios from "axios";
import React, { useEffect, useState } from "react";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import PercentIcon from '@mui/icons-material/Percent';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Carousell from "../components/Carousell";
import Itemcard from "../components/Itemcard";

const Homepage = () => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    const tokens = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${tokens}`,
      },
    };
    axios
      .get("https://staging.fastor.in/v1/m/restaurant?city_id=118&&", config)
      .then((res) => setItem(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div style={{ padding: "20px" }}>
      <h3 className="preh">
        Pre Order From
        <PersonSearchIcon />
      </h3>
      <h2 className="preb">Cannaught Place</h2>
      <div className="hrline"></div>
      <div className="flexbtn">
        <div>
        <h2 className="preh">Karan</h2>
        <h3 className="preb">Lets explore this evening.</h3>
        </div>
        <div>
            <button className="btni percentbtn"><PercentIcon fontSize="large"/></button>
            <button className="btni walletbtn"><AccountBalanceWalletIcon fontSize="large"/></button>
        </div>
      </div>
      <div className="flexbtn">
        <h3>Your taste</h3>
        <p>See all <span><ChevronRightIcon/></span></p>
      </div>
      <div className="cardflex">
        <div className="carocard">
            <img src="https://i1.fnp.com/images/pr/l/v20190520192511/black-forest-cake-half-kg_1.jpg" alt="" />
            <p>Nik Bakers</p>
            <p>Cannaught Place, New Delhi</p>
        </div>
        <div className="carocard">
            <img src="https://i1.fnp.com/images/pr/l/v20190520192511/black-forest-cake-half-kg_1.jpg" alt="" />
            <p>Nik Bakers</p>
            <p>Cannaught Place, New Delhi</p>
        </div>
        <div className="carocard">
            <img src="https://i1.fnp.com/images/pr/l/v20190520192511/black-forest-cake-half-kg_1.jpg" alt="" />
            <p>Nik Bakers</p>
            <p>Cannaught Place, New Delhi</p>
        </div>
      </div>
      <Carousell/>
      <div style={{marginTop:"10vh"}}>
        <h3>Popular Ones</h3>
        <div>
            {item.map((itm)=>
            <Itemcard itm={itm}/>
            )}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
