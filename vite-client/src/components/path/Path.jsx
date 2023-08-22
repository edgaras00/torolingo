import Unit from "./Unit";
import "../../styles/path.css";

import mascotImage1 from "../../images/mascots/mascot-1l.png";
import mascotImage2 from "../../images/mascots/mascot-1r.jpg";
import mascotImage3 from "../../images/mascots/mascot-2l.jpg";
import mascotImage4 from "../../images/mascots/mascot-2r.png";
import mascotImage5 from "../../images/mascots/mascot-3l.png";
import mascotImage6 from "../../images/mascots/mascot-3r.jpg";
import mascotImage7 from "../../images/mascots/mascot-4l.png";
import mascotImage8 from "../../images/mascots/mascot-4r.png";
import mascotImage9 from "../../images/mascots/mascot-5l.png";
import mascotImage10 from "../../images/mascots/mascot-5r.png";

const Path = () => {
  return (
    <div className="path-container">
      <Unit
        number="1"
        primaryColor="#ff4b4b"
        secondaryColor="#c23e39"
        hoverColor="#c45551"
        description="Form basic sentences"
        leftMascot={mascotImage1}
        rightMascot={mascotImage2}
        leftMascotSize="190"
        rightMascotSize="160"
        leftMascotID="left-mascot-1"
        rightMascotID="right-mascot-1"
      />
      <Unit
        number="2"
        primaryColor="#5ad12a"
        secondaryColor="#3e8f1e"
        hoverColor="#4e9632"
        description="Get around in a city"
        leftMascot={mascotImage3}
        leftMascotSize="120"
        rightMascot={mascotImage4}
        rightMascotSize="190"
        leftMascotID="left-mascot-2"
        rightMascotID="right-mascot-2"
      />
      <Unit
        number="3"
        primaryColor="#2a6fc9"
        secondaryColor="#21569c"
        hoverColor="#305f9c"
        description="Order food and drink"
        leftMascot={mascotImage5}
        leftMascotSize="190"
        rightMascot={mascotImage6}
        rightMascotSize="210"
        leftMascotID="left-mascot-3"
        rightMascotID="right-mascot-3"
      />
      <Unit
        number="4"
        primaryColor="#eb9c3d"
        secondaryColor="#b8792e"
        hoverColor="#bd8542"
        description="Describe family"
        leftMascot={mascotImage7}
        rightMascot={mascotImage8}
        rightMascotSize="190"
        leftMascotSize="190"
        leftMascotID="left-mascot-4"
        rightMascotID="right-mascot-4"
      />
      <Unit
        number="5"
        primaryColor="#e03879"
        secondaryColor="#ad2b5e"
        hoverColor="#b53e6c"
        description="Shop for clothes"
        leftMascot={mascotImage9}
        leftMascotSize="210"
        rightMascot={mascotImage10}
        rightMascotSize="150"
        leftMascotID="left-mascot-5"
        rightMascotID="right-mascot-5"
      />
    </div>
  );
};

export default Path;
