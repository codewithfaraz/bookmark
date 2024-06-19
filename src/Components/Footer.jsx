import Logo from "../images/logo-bookmark-footer.svg";
import Facebook from "../images/icon-facebook.svg";
import Twitter from "../images/icon-twitter.svg";
export default function Footer() {
  return (
    <footer id="footer" className="bg-veryDarkBlue p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-7 md:space-y-o">
        <div className="flex md:space-x-6 items-center flex-col md:flex-row space-y-6 md:space-y-0">
          <img src={Logo} alt="" />
          <a
            href=""
            className="text-grayishBlue uppercase hover:text-white duration-100"
          >
            Features
          </a>
          <a
            href=""
            className="text-grayishBlue uppercase hover:text-white duration-100"
          >
            Pricing
          </a>
          <a
            href=""
            className="text-grayishBlue uppercase hover:text-white duration-100"
          >
            Contact
          </a>
        </div>
        <div className="flex space-x-6">
          <img src={Facebook} alt="" />
          <img src={Twitter} alt="" />
        </div>
      </div>
    </footer>
  );
}
