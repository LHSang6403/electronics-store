import Image from "next/image";

export default function Footer(): JSX.Element {
  return (
    <footer className="w-full h-fit flex flex-col gap-8 pb-12 items-center px-16 xl:px-6 sm:px-4 bg-[#EEEEEE] text-black py-6">
      <div className="w-[84%] sm:w-full h-fit font-light text-justify flex justify-center items-center">
        Discover a world of innovation and technology at our electronic
        emporium. Elevate your lifestyle with cutting-edge gadgets, superior
        appliances, and the latest electronics. Explore an array of premium
        products curated to enhance your everyday experiences. With a commitment
        to quality and customer satisfaction, we invite you to join us on a
        journey of technological excellence. Elevate your living spaces,
        simplify your routines, and embrace the future with our range of
        top-tier electronic solutions. Experience the difference at [Your Shop
        Name], where technology meets lifestyle.
      </div>
      <div
        className="h-fit w-full flex flex-row items-center justify-between
      sm:flex-col sm:gap-4"
      >
        <div className="w-full">
          <div className="w-[150px] h-[47px] xl:w-[120px] xl:h-[37px] sm:w-[100px] sm:h-[31px]">
            <Image
              alt="App Logo"
              src="/assets/logo.png"
              width={404}
              height={125}
            />
          </div>
          <hr
            className="w-[450px] h-[1px] mt-2 rounded bg-black border-none
          lg:w-[90%] sm:w-full"
          ></hr>
          <p className="mt-2">123 Street, Ho Chi Minh City, Vietnam</p>
        </div>
        <div className="w-full h-fit flex flex-row justify-end sm:justify-start items-center gap-6">
          <div className="w-36 h-36 border-black rounded-xl shadow-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31355.769673958013!2d106.67776295497266!3d10.775176369892032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f38f9ed887b%3A0x14aded5703768989!2zUXXhuq1uIDEsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1698481663133!5m2!1svi!2s"
              width="100%"
              height="100%"
              loading="lazy"
              title="Google Maps Embed"
            ></iframe>
          </div>
          <div className="w-fit">
            <h2 className="text-lg font-semibold">Connect with us</h2>
            <ul className="mt-2">
              <li>
                <a href="#" className="hover:text-white">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
