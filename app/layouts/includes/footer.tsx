export default function Footer(): JSX.Element {
  return (
    <footer className="w-full px-[calc((100%-1050px)_/_2)] bg-[#EEEEEE] text-black py-8">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <img
            className="w-[150px] h-9 mt-1 object-cover"
            alt="logo"
            src="/assets/logo.png"
          ></img>
          <hr className="w-[450px] h-[1px] mt-2 rounded bg-black border-none"></hr>
          <p className="mt-2">123 Street, Ho Chi Minh City, Vietnam</p>
        </div>
        <div className="w-fit h-fit flex flex-row justify-center items-center">
          <div className="w-36 h-36 border-black rounded-xl shadow-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31355.769673958013!2d106.67776295497266!3d10.775176369892032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f38f9ed887b%3A0x14aded5703768989!2zUXXhuq1uIDEsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1698481663133!5m2!1svi!2s"
              width="100%"
              height="100%"
              loading="lazy"
              title="Google Maps Embed"
            ></iframe>
          </div>
          <div className="w-fit ml-8">
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
