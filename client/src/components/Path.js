import Unit from "./Unit";

// Images
import guitarMascot from "../cow-guitar.png";
import dancingMascot from "../mascot-dancing.jpg";
import mascotStanding from "../bulls2.jpg";
import mascotPhone from "../mascot-phone.png";
import mascotPaper from "../bull-paper.png";
import mascotPaper2 from "../mascot-paper2.jpg";
import mascotSitting from "../mascot-sitting.png";
import mascotStanding2 from "../mascot-standing2.png";
import mascotMoney from "../mascot-money.png";
import bullTongue from "../bull-tongue.png";

import "../styles/path.css";

const Path = () => {
  return (
    <div className="path-container">
      <Unit
        number="1"
        primaryColor="#ff4b4b"
        secondaryColor="#c23e39"
        hoverColor="#c45551"
        description="Form basic sentences, greet people"
        leftMascot={guitarMascot}
        rightMascot={dancingMascot}
        leftMascotSize="190"
        rightMascotSize="160"
      />
      <Unit
        number="2"
        primaryColor="#5ad12a"
        secondaryColor="#3e8f1e"
        hoverColor="#4e9632"
        description="Get around in a city"
        leftMascot={mascotStanding}
        leftMascotSize="120"
        rightMascot={mascotPhone}
        rightMascotSize="190"
      />
      <Unit
        number="3"
        primaryColor="#2a6fc9"
        secondaryColor="#21569c"
        hoverColor="#305f9c"
        description="Order food and drink"
        leftMascot={mascotPaper}
        leftMascotSize="190"
        rightMascot={mascotPaper2}
        rightMascotSize="210"
      />
      <Unit
        number="4"
        primaryColor="#eb9c3d"
        secondaryColor="#b8792e"
        hoverColor="#bd8542"
        description="Describe family"
        leftMascot={mascotSitting}
        rightMascot={mascotStanding2}
        rightMascotSize="190"
        leftMascotSize="190"
      />
      <Unit
        number="5"
        primaryColor="#e03879"
        secondaryColor="#ad2b5e"
        hoverColor="#b53e6c"
        description="Shop for clothes"
        leftMascot={mascotMoney}
        leftMascotSize="210"
        rightMascot={bullTongue}
        rightMascotSize="150"
      />
    </div>
  );
};

export default Path;
