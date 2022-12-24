const Home = () => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide homecarosal"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="https://uploads-ssl.webflow.com/60edc0a8835d5b38bf11f03f/61cf0877b81e1a02854e1139_Check-In-Check-Out-Software.jpeg"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://uploads-ssl.webflow.com/60edc0a8835d5b38bf11f03f/61cf045ef7200a50f92f04a9_Improve-Business-Profit-through-Asset-Tracking-System.png"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://uploads-ssl.webflow.com/60edc0a8835d5b38bf11f03f/61cf0602721bdaf2ade3947f_Inventory-Asset-Tracking-Practices-for-Your-Restaurant.jpeg"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          {/* <span className="sr-only">Previous</span> */}
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          {/* <span className="sr-only">Next</span> */}
        </a>
      </div>
    </div>
  );
};
export default Home;
