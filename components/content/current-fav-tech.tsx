import { Grid, Tooltip, Button } from "@nextui-org/react";
import React from "react";

function CurrentFavTech() {
	return (
		<Grid.Container
			gap={2}
			direction="row"
			justify="center"
			alignContent="center"
		>
			<Grid>
				<Tooltip content="Developers love Next.js" color="secondary">
					<Button flat auto color="secondary">
						Secondary
					</Button>
				</Tooltip>
			</Grid>
			<Grid>
				<Tooltip content="Developers love Next.js" color="secondary">
					<Button flat auto color="secondary">
						Secondary
					</Button>
				</Tooltip>
			</Grid>
			<Grid>
				<Tooltip content="Developers love Next.js" color="secondary">
					<Button flat auto color="secondary">
						Secondary
					</Button>
				</Tooltip>
			</Grid>
			<Grid>
				<Tooltip content="Developers love Next.js" color="secondary">
					<Button flat auto color="secondary">
						Secondary
					</Button>
				</Tooltip>
			</Grid>
		</Grid.Container>
	);
}

export default CurrentFavTech;
