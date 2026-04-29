import React from "react";
import ExtraPart from "../../Extra/ExtraPart";
import SecondExtraPart from "../../Extra/SecondExtraPart";
import ThirdExtraPart from "../../Extra/ThirdExtraPart";
import LoadData from "../../Services/LoadService/LoadData";
import Services from "../../Services/Services";

import TestimonialCard from "../../Services/Testimonial/TestimonialCard";
// import Testimonial from '../../Services/Testimonial/Testimonial';
import Banner from "../../Shared/Banner";
import Footer from "../../Shared/Footer";
import Homes from "./Homes";
import Modaretors from "./Modaretors/Modaretors";

// import Homes from './Homes';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      {/* <ThirdExtraPart></ThirdExtraPart> */}
      <Homes></Homes>

      <SecondExtraPart></SecondExtraPart>
      <LoadData></LoadData>
      <ExtraPart></ExtraPart>
      <Modaretors></Modaretors>
      {/* <TestimonialCard></TestimonialCard> */}
      <Footer></Footer>
    </div>
  );
};

export default Home;
