"use client";

import { Spacer } from "@nextui-org/react";
import { FeatureProject, Project } from "../../components/content/project";

import ProjectData from "@/_data/projects.json";

export default function ProjectsPage() {
	const primaryProject = ProjectData.filter((project) => project.isPrimary)[0];
	const featuredProject = ProjectData.filter(
		(project) => project.featured && !project.isPrimary
	);
	const otherProjects = ProjectData.filter((project) => !project.featured);

	return (
		<div className="grid gap-2 max-w-[1280px] px-6">
			<div className="flex flex-col w-full mb-4">
				<h2 className="text-[30px]">Featured Project</h2>
				<p className="opacity-60">
					Some of the projects are from work and some are on my own time.
				</p>
			</div>

			<div className="grid grid-rows-2 grid-flow-col gap-6">
				<div className="row-span-2">
					<FeatureProject
						release={primaryProject.release}
						name={primaryProject.name}
						desc={primaryProject.description}
						link={primaryProject.link}
					/>
				</div>
				<div className="row-span-3">
					{featuredProject.map((r) => (
						<div key={r.name}>
							<Project
								key={r.name}
								release={r.release}
								name={r.name}
								desc={r.description}
								link={r.link}
							/>
							<Spacer y={6} />
						</div>
					))}
				</div>
			</div>

			<Spacer y={2} />
			<div className="flex flex-col mb-4">
				<h2 className="text-[30px]">Other Projects</h2>
			</div>

			<div className="grid gap-6">
				{otherProjects.map((r) => (
					<div key={r.name}>
						<Project
							release={r.release}
							name={r.name}
							desc={r.description}
							link={r.link}
						/>
					</div>
				))}
			</div>
		</div>
	);
}
