import logo from "../assets/AbhishekBishtLogo.jpeg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
	return (
		<nav className="mb-20 flex items-center justify-between py-6">
			<div className="flex flex-shrink-0 items-center">
				<img className="mx-2 w-10" src={logo} alt="logo" />
			</div>
			<div className="m-8 flex items-center justify-center gap-4 text-2xl">
				<a href="https://www.linkedin.com/in/abhishek-bisht-437a201a6/"><FaLinkedin /></a>
				<a href="https://github.com/abhishek-bisht-21"><FaGithub /></a>

				<FaInstagram />
				<a href="https://twitter.com/Abhishe09058552"><FaSquareXTwitter /></a>

			</div>
		</nav>
	);
};

export default Navbar;