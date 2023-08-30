import Link from "next/link";

import CurrentFavTech from "./content/current-fav-tech";

function Hero() {
	return (
		<section className="gap-8 text-center flex flex-col container">
			<h1 className="tracking-tight inline font-bold text-[60px] bg-gradient-to-r from-red-600 to-blue-600  bg-clip-text text-transparent">
				Grafisaholic
			</h1>

			<div>
				<p className="opacity-60">
					Hi, my name is Khabibur Rokhman. Full stack web developer skilled SQL,
					mongoDB, node.js, and want to try to learn more.
				</p>
				<p>
					<span className="opacity-60">
						I&apos;m currently building project{" "}
					</span>
					<Link
						className="underline decoration-pink-600 decoration-[3px] underline-offset-4 font-bold"
						passHref
						href="https://payreless.com"
						target="_blank"
					>
						payreless
					</Link>{" "}
					<span className="opacity-60">and working on </span>
					<Link
						className="underline decoration-pink-600 decoration-[3px] underline-offset-4 font-bold"
						passHref
						href="https://findig.id"
						target="_blank"
					>
						PT. Fintek Digital Nusantara
					</Link>{" "}
					<span className="opacity-60">at day to day.</span>
				</p>
			</div>

			<div className="items-center gap-3 justify-center w-full flex flex-col">
				<h3 className="opacity-60">Current favourite tech stack / tools :</h3>
				<CurrentFavTech />
			</div>
		</section>
	);
}

export default Hero;
