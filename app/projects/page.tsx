"use client";

import ProjectData from "@/_data/projects.json";
import { Spacer } from "@nextui-org/react";
import { motion } from "framer-motion";

import { FeatureProject, Project } from "../../components/content/project";

export default function ProjectsPage() {
	const primaryProject = ProjectData.filter((project) => project.isPrimary)[0];
	const featuredProject = ProjectData.filter(
		(project) => project.featured && !project.isPrimary
	);
	const otherProjects = ProjectData.filter((project) => !project.featured);

	return (
		<>
			<div className="flex flex-col w-full mb-6">
				<h2 className="text-[30px] font-semibold">Featured Project</h2>
				<p className="opacity-60">
					Some of the projects are from work and some are on my own time.
				</p>
			</div>

			<motion.div></motion.div>
			<div className="grid md:grid-rows-2 md:grid-flow-col gap-6">
				<motion.div
					className="row-span-2"
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<FeatureProject
						release={primaryProject.release}
						name={primaryProject.name}
						desc={primaryProject.description}
						link={primaryProject.link}
					/>
				</motion.div>
				<div className="row-span-3">
					{featuredProject.map((r, i) => (
						<motion.div
							key={r.name}
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 * (i + 1) }}
						>
							<Project
								key={r.name}
								release={r.release}
								name={r.name}
								desc={r.description}
								link={r.link}
							/>
							<Spacer y={6} />
						</motion.div>
					))}
				</div>
			</div>

			<Spacer y={2} />
			<div className="flex flex-col mb-6">
				<h2 className="text-[30px] font-semibold">Other Projects</h2>
			</div>

			<div className="grid gap-6">
				{otherProjects.map((r, i) => (
					<motion.div
						key={r.name}
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 * (i + 1) }}
					>
						<Project
							release={r.release}
							name={r.name}
							desc={r.description}
							link={r.link}
						/>
					</motion.div>
				))}
			</div>
		</>
	);
}
