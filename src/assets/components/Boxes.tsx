import "./Boxes.css";
const Boxes = () => {
  return (
    <div id="boxes">
      <div id="leftbox">
        <span> Sun</span>
      </div>
      <div id="middlebox">
        <span>25 °C</span>
      </div>
      <div id="rightbox">
        <span>
          a<i className="bi bi-thermometer-half"></i> feels like: 35C<br></br>
          Humidty: 32% <br></br>
          Wind: 11km/h<br></br>
        </span>
      </div>
    </div>
  );
};

export default Boxes;
