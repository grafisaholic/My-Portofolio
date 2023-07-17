"use client";

import { Grid, Text, Spacer } from "@nextui-org/react";
import { FeatureProject, Project } from "../../components/content/project";

import ProjectData from "@/_data/projects.json";

export default function ProjectsPage() {
	const primaryProject = ProjectData.filter((project) => project.isPrimary)[0];
	const featuredProject = ProjectData.filter(
		(project) => project.featured && !project.isPrimary
	);
	const otherProjects = ProjectData.filter((project) => !project.featured);

	return (
		<>
			<Grid.Container gap={3}>
				<Grid xs={12} direction="column">
					<Text size={30} h2 css={{ paddingBottom: 0 }}>
						Featured Projects
					</Text>
					<Text
						color="rgb(161 161 170)"
						css={{ marginTop: -10, marginBottom: 15 }}
					>
						Some of the projects are from work and some are on my own time.
					</Text>
					<hr />
				</Grid>

				<Grid xs={12} lg={6} md={6}>
					<FeatureProject
						release={primaryProject.release}
						name={primaryProject.name}
						desc={primaryProject.description}
						link={primaryProject.link}
					/>
				</Grid>
				<Grid xs={12} lg={6} md={6} direction="column">
					{featuredProject.map((r) => (
						<>
							<Project
								key={r.name}
								release={r.release}
								name={r.name}
								desc={r.description}
								css={{ p: "$6" }}
								link={r.link}
							/>
							<Spacer y={1} />
						</>
					))}
				</Grid>

				<Spacer y={2} />
				<Grid xs={12} direction="column">
					<Text size={30} h2 css={{ paddingBottom: 0 }}>
						Other Projects
					</Text>
					<hr />
				</Grid>

				<Grid.Container gap={2} direction="row">
					{otherProjects.map((r) => (
						<Grid xs={12} lg={4} md={4} key={r.name}>
							<Project
								release={r.release}
								name={r.name}
								desc={r.description}
								css={{ p: "$6" }}
								link={r.link}
							/>
						</Grid>
					))}
				</Grid.Container>
			</Grid.Container>
		</>
	);
}
