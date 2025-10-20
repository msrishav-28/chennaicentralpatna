import Image from "next/image";
import Link from "next/link";

const MenuPreviewSection = () => {
  return (
    <section className="bg-background-light py-20">
      <div className="container">
        <div className="text-center">
          <h2 className="font-display text-[48px] font-bold uppercase tracking-[1px] text-text-secondary">
            OUR MENU
          </h2>
        </div>
        <div className="mt-10">
          <div className="mx-auto max-w-[800px]">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3b426fc-3685-4feb-bb4c-9a7a886042b9-therameshwaramcafe-org/assets/images/menu1-3.png?"
              alt="The Rameshwaram Cafe Menu Preview"
              width={800}
              height={1271}
              className="h-auto w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/our-menu"
            className="inline-block rounded-[4px] bg-text-secondary px-10 py-4 text-[15px] font-semibold uppercase tracking-[1px] text-primary-foreground transition-all duration-300 ease-in-out hover:scale-105 hover:bg-background-secondary"
          >
            VIEW OUR COMPLETE MENU
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MenuPreviewSection;