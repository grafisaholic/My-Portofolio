import React from "react";

type IconProps = {
	theme?: string | undefined;
};

export const BurgerIcon = ({ theme }: IconProps) => {
	return (
		<svg
			width="500px"
			height="500px"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M4 17H8M12 17H20M4 12H20M4 7H12M16 7H20"
				stroke={theme == "light" ? "#000000" : "#FFFFFF"}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
