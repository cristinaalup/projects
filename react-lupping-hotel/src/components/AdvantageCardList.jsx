import Advantages from "../data/advantages.json";
import AdvantageCard from "./AdvantageCard";

const AdvantageCardsList = () => {
  return (
    <>
      {Advantages.map((adv) => {
        return (
          <div key={adv.id}>
            <AdvantageCard
              title={adv.title}
              description={adv.description}
              icon={adv.icon}
            />
          </div>
        );
      })}
    </>
  );
};

export default AdvantageCardsList;
