import Unit from "./Unit";
import "../../styles/path.css";

const Path = () => {
  return (
    <div className="path-container">
      <Unit
        number="1"
        primaryColor="#ff4b4b"
        secondaryColor="#c23e39"
        hoverColor="#c45551"
        description="Form basic sentences, greet people"
        leftMascot={`${process.env.PUBLIC_URL}/images/mascots/mascot-1l.png`}
        rightMascot={`${process.env.PUBLIC_URL}/images/mascots/mascot-1r.jpg`}
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
        leftMascot={`${process.env.PUBLIC_URL}/images/mascots/mascot-2l.jpg`}
        leftMascotSize="120"
        rightMascot={`${process.env.PUBLIC_URL}/images/mascots/mascot-2r.png`}
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
        leftMascot={`${process.env.PUBLIC_URL}/images/mascots/mascot-3l.png`}
        leftMascotSize="190"
        rightMascot={`${process.env.PUBLIC_URL}/images/mascots/mascot-3r.jpg`}
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
        leftMascot={`${process.env.PUBLIC_URL}/images/mascots/mascot-4l.png`}
        rightMascot={`${process.env.PUBLIC_URL}/images/mascots/mascot-4r.png`}
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
        leftMascot={`${process.env.PUBLIC_URL}/images/mascots/mascot-5l.png`}
        leftMascotSize="210"
        rightMascot={`${process.env.PUBLIC_URL}/images/mascots/mascot-5r.png`}
        rightMascotSize="150"
        leftMascotID="left-mascot-5"
        rightMascotID="right-mascot-5"
      />
    </div>
  );
};

export default Path;
