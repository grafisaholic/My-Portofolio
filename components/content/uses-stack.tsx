import { Link } from "@nextui-org/react";

export function DevSoftware() {
	return (
		<ul className="list-disc px-5 space-y-2">
			<li>
				<Link
					href={"https://code.visualstudio.com"}
					target="_blank"
					isExternal
					color="secondary"
					showAnchorIcon
				>
					Visual Studio Code
				</Link>
				<ul>
					<li className="flex flex-row gap-2">
						<h4>Theme : </h4>
						<Link
							href={
								"https://marketplace.visualstudio.com/items?itemName=sdras.night-owl"
							}
							color="primary"
						>
							Night Owl
						</Link>
					</li>
					<li className="flex flex-row gap-2">
						<h4>Font : </h4>
						<Link
							href={"https://github.com/microsoft/cascadia-code"}
							color="primary"
						>
							Cascadia Code
						</Link>
					</li>
					<li className="flex flex-col md:flex-row gap-2">
						<h4>Extension : </h4>
						<div className="space-x-1">
							<Link
								href={
									"https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss"
								}
								color="primary"
							>
								Tailwind CSS IntelliSense,
							</Link>
							<Link
								href={
									"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"
								}
								color="primary"
							>
								Prettier,
							</Link>
							<Link
								href={
									"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"
								}
								color="primary"
							>
								Eslint,
							</Link>
							<Link
								href={
									"https://marketplace.visualstudio.com/items?itemName=Dart-Code.dart-code"
								}
								color="primary"
							>
								Dart
							</Link>
						</div>
					</li>
				</ul>
			</li>
			<li>
				<Link
					href={"https://iterm2.com"}
					target="_blank"
					isExternal
					color="secondary"
				>
					iTerm2
				</Link>
				<ul>
					<li className="flex flex-row gap-2">
						<h4>Custom : </h4>
						<Link href={"https://github.com/ohmyzsh/ohmyzsh"} color="primary">
							oh-my-zsh
						</Link>
					</li>
				</ul>
			</li>
			<li>
				<Link
					href={"https://www.figma.com/"}
					target="_blank"
					isExternal
					color="secondary"
					showAnchorIcon
				>
					Figma
				</Link>
			</li>
			<li>
				<Link
					href={"https://brave.com"}
					target="_blank"
					isExternal
					color="secondary"
					showAnchorIcon
				>
					Brave
				</Link>
			</li>
			<li>
				<Link
					href={"https://www.postman.com"}
					target="_blank"
					isExternal
					color="secondary"
					showAnchorIcon
				>
					Postman
				</Link>
			</li>
		</ul>
	);
}

export function OtherSoftware() {
	return (
		<ul className="list-disc px-5 space-y-2">
			<li>
				<Link
					href={"https://xmind.app"}
					target="_blank"
					isExternal
					color="secondary"
				>
					Xmind
				</Link>
			</li>
			<li>
				<Link
					href={"https://www.notion.so"}
					target="_blank"
					isExternal
					color="secondary"
				>
					Notion
				</Link>
			</li>
			<li>
				<Link
					href={"https://open.spotify.com"}
					target="_blank"
					isExternal
					color="secondary"
					showAnchorIcon
				>
					Spotify
				</Link>
			</li>
			<li>
				<Link
					href={"https://trello.com"}
					target="_blank"
					isExternal
					color="secondary"
					showAnchorIcon
				>
					Trello (Mangement Task)
				</Link>
			</li>
		</ul>
	);
}
