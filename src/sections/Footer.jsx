import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { GlobalStaticState } from "../state/GlobalStaticState";

function Footer() {
	const theme = useTheme();
	const { copyright } = GlobalStaticState.footer;
	return (
		<Box
			component="footer"
			sx={{
				display: "flex",
				justifyContent: "space-between",
				py: 3,
				px: 2,
				mt: "auto",
				backgroundColor: theme.palette.accent.main,
				color: theme.palette.text.default,
                width: '100%',
			}}
		>
			<Box padding={1}>
				<Typography variant="body2" align="center">
					{copyright}
				</Typography>
			</Box>
			<Box padding={1}>
				<Typography variant="body2" align="center">
					<Link color="inherit" href="https://yourwebsite.com/">
						<img
							src={`${process.env.PUBLIC_URL}/js_logo_full.png`}
							alt="Company Logo"
							style={{ height: "20px" }}
						/>
					</Link>{" "}
				</Typography>
			</Box>
		</Box>
	);
}

export default Footer;
