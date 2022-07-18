import "../components/css/SectionTwo.css";
const AdvantageCard = ({ title, description, icon, alt }) => {
  return (
    <div className="advantage-card columns-container-s2 gap-3 blue-shadow">
      <div>
        <img src={icon} alt={alt} className="width-100" />
      </div>
      <div>
        <p className="text-underline font-bold">{title}</p>
        <p className="font-small-card">{description}</p>
      </div>
    </div>
  );
};

export default AdvantageCard;
