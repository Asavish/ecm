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
			// sx={{
			// 	display: "flex",
			// 	justifyContent: "space-between",
			// 	py: 3,
			// 	px: 2,
			// 	mt: "auto",
			// 	backgroundColor: theme.palette.background.primary,
			// 	color: theme.palette.text.default,
            //     width: '100%',
			// }}
			sx={{ 
				display: 'flex', 
				flexDirection: { xs: 'column', md: 'row' },
				alignItems: 'center', 
				justifyContent: 'space-around', 
				width: { xs: '90%' ,md : 1200}, // Responsive widths
				margin: '0' ,
				gap: 2,
				backgroundColor: theme.palette.background.primary,
				color : theme.palette.text.default,
				padding:2,
			  }}
		>
			<Box alignItems={'center'}>
			<Box padding={1} display='flex' justifyContent='center' alignItems= 'center'>
				<img 
					src={`${process.env.PUBLIC_URL}/js_logo_full.png`} 
					alt="Company Logo" 
					style={{ height: '100px'}} 
					/>
			</Box>
			<Box padding={1}>
				<Typography variant="body2" align="center">
					{copyright}
				</Typography>
			</Box>
			</Box>
			  <Box alignItems={'center'}>
			  <Box padding={1} display='flex' justifyContent='center' alignItems= 'center'>
				<img 
					src={`${process.env.PUBLIC_URL}/mainPageImage/cons.png`} 
					alt="Company Logo" 
					style={{ height: '30px'}} 
					/>
			</Box>
			<Box padding={1}>
			<Typography variant="body2" align="center">
				Developed by CONS
			</Typography>
			</Box>
			  </Box>
		</Box>
	);
}

export default Footer;
