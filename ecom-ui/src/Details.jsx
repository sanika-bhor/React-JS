import "./Detail.css";

function Details({ name, description }) {
  return (
    <div className="wrap">

      <svg className="wave-svg left" viewBox="0 0 400 120" fill="none">
        <path d="M10 60 C 60 10, 120 110, 180 60 S 300 10, 380 60" />
      </svg>

      <div className="details">
        <h1>{name}</h1>
        <hr />
        <p>{description}</p>
      </div>

      <svg className="wave-svg right" viewBox="0 0 400 120" fill="none">
        <path d="M10 60 C 60 10, 120 110, 180 60 S 300 10, 380 60" />
      </svg>

    </div>
  );
}

export default Details;
