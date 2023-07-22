import { Link, Row, Text, Grid } from "@nextui-org/react";

export function DevSoftware() {
	return (
		<>
			<li>
				<Link
					href={"https://code.visualstudio.com"}
					target="_blank"
					isExternal
					color="secondary"
				>
					Visual Studio Code
				</Link>
				<ul>
					<li>
						<Row>
							<Text>Theme : </Text>
							<Link
								href={
									"https://marketplace.visualstudio.com/items?itemName=sdras.night-owl"
								}
								color="primary"
								css={{
									marginLeft: 7,
								}}
							>
								Night Owl
							</Link>
						</Row>
					</li>
					<li>
						<Row>
							<Text>Font : </Text>
							<Link
								href={"https://github.com/microsoft/cascadia-code"}
								color="primary"
								css={{
									marginLeft: 7,
								}}
							>
								Cascadia Code
							</Link>
						</Row>
					</li>
					<li>
						<Grid.Container direction="row">
							Extension :
							<div>
								<Link
									href={
										"https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss"
									}
									color="primary"
									css={{
										marginLeft: 7,
									}}
								>
									Tailwind CSS IntelliSense,
								</Link>
								<Link
									href={
										"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"
									}
									color="primary"
									css={{
										marginLeft: 7,
									}}
								>
									Prettier,
								</Link>
								<Link
									href={
										"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"
									}
									color="primary"
									css={{
										marginLeft: 7,
									}}
								>
									Eslint,
								</Link>
								<Link
									href={
										"https://marketplace.visualstudio.com/items?itemName=Dart-Code.dart-code"
									}
									color="primary"
									css={{
										marginLeft: 7,
									}}
								>
									Dart
								</Link>
							</div>
						</Grid.Container>
					</li>
				</ul>
			</li>
			<li>
				<Link
					href={"https://www.figma.com/"}
					target="_blank"
					isExternal
					color="secondary"
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
				>
					Postman
				</Link>
			</li>
		</>
	);
}

export function OtherSoftware() {
	return (
		<>
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
					href={"https://iterm2.com"}
					target="_blank"
					isExternal
					color="secondary"
				>
					iTerm2
				</Link>
				<ul>
					<li>
						<Row>
							<Text>Custom : </Text>
							<Link
								href={"https://github.com/ohmyzsh/ohmyzsh"}
								color="primary"
								css={{
									marginLeft: 7,
								}}
							>
								oh-my-zsh
							</Link>
						</Row>
					</li>
				</ul>
			</li>
			<li>
				<Link
					href={"https://open.spotify.com"}
					target="_blank"
					isExternal
					color="secondary"
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
				>
					Trello (Mangement Task)
				</Link>
			</li>
		</>
	);
}
