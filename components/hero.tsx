import { Grid, Text } from "@nextui-org/react";
import Link from "next/link";

import CurrentFavTech from "./content/current-fav-tech";

function Hero() {
	return (
		<Grid.Container gap={2} direction="column" css={{ textAlign: "center" }}>
			<Grid>
				<Text h1 size={60} css={{ textGradient: "45deg, $red600, $blue600" }}>
					Grafisaholic
				</Text>
			</Grid>
			<Grid>
				<Text css={{ opacity: 0.6 }}>
					Hi, my name is Khabibur Rokhman. Full stack web developer skilled SQL,
					mongoDB, node.js, and want to try to learn more.
				</Text>
				<Text css={{ opacity: 0.6 }}>
					I&apos;m currently building project{" "}
					<Link
						target={"_blank"}
						href="https://payreless.com"
						style={{ textDecoration: "underline" }}
					>
						Payreless{" "}
					</Link>
					and working on{" "}
					<Link
						target={"_blank"}
						href="https://findig.id"
						style={{ textDecoration: "underline" }}
					>
						PT. Fintek Digital Nusantara{" "}
					</Link>
					at day to day.
				</Text>
			</Grid>
			<Grid
				alignItems="center"
				justify="center"
				css={{ w: "100%", marginTop: 10 }}
				direction="row"
			>
				<Text css={{ opacity: 0.6 }}>
					Current favorite tech stack / tools :
				</Text>
				<CurrentFavTech />
			</Grid>
		</Grid.Container>
	);
}

export default Hero;
