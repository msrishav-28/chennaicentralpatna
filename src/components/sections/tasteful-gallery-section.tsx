import Image from 'next/image';

const galleryImages = [
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3b426fc-3685-4feb-bb4c-9a7a886042b9-therameshwaramcafe-org/assets/images/pic1-4.jpg?",
    alt: "",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3b426fc-3685-4feb-bb4c-9a7a886042b9-therameshwaramcafe-org/assets/images/pic2-5.jpg?",
    alt: "",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3b426fc-3685-4feb-bb4c-9a7a886042b9-therameshwaramcafe-org/assets/images/pic3-6.jpg?",
    alt: "",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3b426fc-3685-4feb-bb4c-9a7a886042b9-therameshwaramcafe-org/assets/images/pic4-7.jpg?",
    alt: "",
  },
];

const TastefulGallerySection = () => {
  return (
    <section className="bg-[#fdf5f0] py-20">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          <div className="w-full lg:w-1/2 text-center">
            <h2 className="font-script text-accent-secondary text-[2rem] leading-none mb-2">
              Authentic
            </h2>
            <h3 className="font-display font-bold text-text-heading-accent text-[2.5rem] lg:text-[4rem] leading-tight uppercase">
              TASTEFUL
            </h3>
            <div className="w-20 h-[2px] bg-accent-secondary mx-auto mt-4"></div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-5">
              {galleryImages.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={400}
                    className="aspect-square w-full h-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TastefulGallerySection;