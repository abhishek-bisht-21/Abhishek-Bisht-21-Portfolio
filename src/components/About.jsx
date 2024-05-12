import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";

const About = () => {
	return (
		<div className="border-b border-neutral-900 pb-4">
			<h2 className="my-20 text-center text-4xl">
				About
				<span className="text-neutral-500"> Me</span>
			</h2>

			<div className="flex flex-wrap">
				<div className="flex items-center justify-center">
					<img className="rounded-2xl" src={aboutImg} alt="about" />
				</div>

				<div className="flex justify-center lg:justify-start">
					<p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
				</div>
			</div>
		</div>
	)
}

export default About