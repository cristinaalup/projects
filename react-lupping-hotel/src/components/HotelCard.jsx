// import "./css/SectionOne.css";
import "./css/HotelCard.css";
function starRating(props) {
  if (props === 3) {
    return <p>&#9733; &#9733; &#9733;</p>;
  } else if (props === 4) {
    return <p> &#9733; &#9733; &#9733; &#9733;</p>;
  } else if (props === 5) {
    return <p> &#9733; &#9733; &#9733; &#9733; &#9733;</p>;
  }
}

const HotelCard = ({
  name,
  featured_image,
  star_rating,
  price_ppn,
  breakfast_price,
  alt,
}) => {
  return (
    <div className="card blue-text">
      <div className="image">
        <img src={featured_image} alt={alt} />
        <h3 className="no-margin">{name}</h3>
      </div>
      <div className="content">
        {/* <h3 className="no-margin">{name}</h3> */}
        <p>Room price/nigth: {price_ppn} €</p>
        {/* <div className="flex content-between "> */}
        <p className="font-small">Breakfast price: {breakfast_price} €</p>
        {starRating(star_rating)}
      </div>
    </div>
  );
};

export default HotelCard;
