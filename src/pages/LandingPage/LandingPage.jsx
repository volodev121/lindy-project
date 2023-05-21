import React from "react";
import AssistantSection from "./AssistantSection";
import SummonSection from "./SummonSection";
import FeaturesSection from "./FeaturesSection";
const LandingPage = () => {
  return (
    <div className="w-full  object-cover flex-col items-center text-[1rem] flex relative visible">
      <section className="w-full" id="assistant">
        <AssistantSection></AssistantSection>
      </section>
      <section className="w-full">
        <SummonSection></SummonSection>
      </section>
      <section className="w-full" id="features">
        <FeaturesSection></FeaturesSection>
      </section>
    </div>
  );
};

export default LandingPage;
