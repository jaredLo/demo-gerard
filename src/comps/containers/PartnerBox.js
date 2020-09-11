import React from "react";
import logo1 from "../../assets/5-partners/apple.PNG";
import logo2 from "../../assets/5-partners/airbnb.png";
import logo3 from "../../assets/5-partners/google.PNG";
import logo4 from "../../assets/5-partners/nvidia.PNG";
import logo5 from "../../assets/5-partners/tesla.PNG";
import logo6 from "../../assets/5-partners/samsung.PNG";
import logo7 from "../../assets/5-partners/facebook.PNG";
import logo8 from "../../assets/5-partners/microsoft.PNG";

function PartnerBox() {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

  return (
    <div className="partner-box">
      {logos.map((each, key) => (
        <img src={each} alt="partner" key={key} />
      ))}
    </div>
  );
}

export default PartnerBox;
