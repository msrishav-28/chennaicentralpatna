import React from 'react';

type ValueItemProps = {
  letter: string;
  text: string;
  colClass: string;
};

const valuesData: Omit<ValueItemProps, 'colClass'>[] = [
  { letter: 'R', text: 'Reliable Brand Experience' },
  { letter: 'A', text: 'Attention To Details' },
  { letter: 'M', text: 'Mindful Work Ethics' },
  { letter: 'E', text: 'Efficient Management System' },
  { letter: 'S', text: 'Sustainable Practises' },
  { letter: 'H', text: 'Heart-Warming Meals' },
  { letter: 'W', text: 'Wholesomeness Added' },
  { letter: 'A', text: 'Authenticity At Every Step' },
  { letter: 'R', text: 'Rooted In Our Flavoursv' },
  { letter: 'A', text: 'Aspiring People Every Day' },
  { letter: 'M', text: 'Meticulous Techniques' },
];

const valueColumnClasses = [
    "w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/6", // R
    "w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/6", // A
    "w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/6", // M
    "w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/6", // E
    "w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/6", // S
    "w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/6", // H
    "w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/4", // W
    "w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/6", // A
    "w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/6", // R
    "w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/6", // A
    "w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/4", // M
];


const ValueItem: React.FC<ValueItemProps> = ({ letter, text, colClass }) => (
  <div className={`px-4 mb-[30px] ${colClass}`}>
    <div className="text-center text-white">
      <div className="mb-4">
        <span className="block text-accent-secondary font-bold text-[4rem] leading-none">
          {letter}
        </span>
      </div>
      <div>
        <h5 className="font-body text-sm font-normal leading-snug text-white">
          {text}
        </h5>
      </div>
    </div>
  </div>
);

const ValuesSection: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-fixed py-[100px] min-h-[600px]"
      style={{
        backgroundImage: "url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3b426fc-3685-4feb-bb4c-9a7a886042b9-therameshwaramcafe-org/assets/images/bg4-9.jpg?')",
      }}
    >
      <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
      <div className="relative z-10 container mx-auto px-15">
        <div className="text-center mb-20">
          <h3 className="font-display text-white text-[52px] font-semibold">
            Values
          </h3>
        </div>
        <div className="flex flex-wrap -mx-4">
          {valuesData.map((item, index) => (
            <ValueItem
              key={index}
              letter={item.letter}
              text={item.text}
              colClass={valueColumnClasses[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;