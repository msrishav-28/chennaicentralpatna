import React from 'react';

const AboutSection = () => {
  return (
    <section className="bg-[#f5ede5] py-[50px] md:py-20">
      <div className="container">
        <div className="text-center">
          <h2 className="font-display font-bold uppercase text-text-secondary text-[2rem] leading-tight tracking-[1px] md:text-[3rem] mb-10">
            ABOUT US
          </h2>
          <p className="max-w-[900px] mx-auto font-body text-text-tertiary text-[1.1rem] leading-[1.8]">
            The Rameshwaram Cafe is a premium South Indian chain of QSR module and is a trademark registered brand under the mother company M/s. Altran Ventures Pvt. Ltd. At The Rameshwaram Café it is ensured that all the cuisines are prepared on-the-go and served hot to customers using the best and fresh high-quality ingredients, authentic recipes with the highest hygiene standards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;