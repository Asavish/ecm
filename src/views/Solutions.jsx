import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import SectionTitle from "../components/SectionTitle";

function Solutions() {
	return (
		<Box
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
			height="auto"
			padding={2}
			width="80%"
			margin = '0 auto'
		>
			<SectionTitle text="Solutions" />
			<Paper
				sx={{
					width: '100%',
					textAlign: 'center',
					padding: { xs: '10px', sm: '20px' }, // Responsive padding
					margin: { xs: '10px', sm: '20px' }, // Responsive margin
					display: 'flex',
					flexDirection: { xs: 'column', md: 'row' }, // Stack on small screens, row on medium and up
					alignItems: 'center',
					justifyContent: 'center',
				  }}
			>
				<Box
					flexDirection="column"
					alignItems="center"
					justifyContent="center"
					height="auto"
					width="100%"
				>
					<Typography variant="h4" fontWeight="bold">
						What is Shot Blasting?
					</Typography>
					<Typography variant="body1" style={{ marginTop: "10px" }}>
						Shot Blasting is a surface finishing technique that involves rapidly
						impacting the surface of an object with a controlled stream of
						abrasive shot material. It is faster and more effective than filing
						for removing flash that my remain on a part after the casting or
						stamping process.
						<br />
						<br />
						Shot Blasting is also used for removing burrs, scale and rust that
						may interfere with the part’s integrity, appearance or definition.
						Shot blasting can also prepare the surface of a part for coating by
						removing surface contaminants and provide a surface profile for
						increased coating adhesion.
						<br />
						<br />
						By varying the type of shot, we can Shot Blast a wide variety of
						materials. For example, a smaller size steel shot can be used to
						produce a smooth, polished surface, while a larger shot can
						aggressively remove heavy flash.
					</Typography>
				</Box>
				<Box>
					<img
						src="https://www.orishots.com/wp-content/uploads/2019/10/shot-blasting.jpg"
						alt="Shot Blasting"
						style={{
							width: '100%', // Make the image responsive
							height: 'auto', // Maintain aspect ratio
							maxWidth: '600px', // Optional: limit the maximum width
							marginTop: '20px', // Optional: add some spacing above the image
						  }}
					/>
				</Box>
			</Paper>
			<Paper
				sx={{
					width: '100%',
					textAlign: 'center',
					padding: { xs: '10px', sm: '20px' }, // Responsive padding
					margin: { xs: '10px', sm: '20px' }, // Responsive margin
					display: 'flex',
					flexDirection: { xs: 'column', md: 'row' }, // Stack on small screens, row on medium and up
					alignItems: 'center',
					justifyContent: 'center',
				  }}
			>
				<Box
					flexDirection="column"
					alignItems="center"
					justifyContent="center"
					height="auto"
					width="100%"
				>
					<Typography variant="h4" fontWeight="bold">
						What is Shot peening?
					</Typography>
					<Typography variant="body1" style={{ marginTop: "10px" }}>
						Improving Resistance To Fatigue
						<br />
						<br />
						Shot peening is a process specifically designed to enhance the
						fatigue strength of components which are subject to high alternating
						stress.
						<br />
						<br />
						Surface treatment procedures like grinding, milling, bending or heat
						treatment procedures cause Tensile Residual Stress. This Tensile
						Residual Stress leads to low life cycles of the parts. Shot Peening
						converts Tensile Residual Stress into Compressive Residual Stress
						which leads to significant increases in the life cycle of parts and
						their maximum load capacities.
					</Typography>
				</Box>
				<Box>
					<img
						src="https://www.orishots.com/wp-content/uploads/2019/10/shotpeening.jpg"
						alt="Shot Peening"
						style={{
							width: '100%', // Make the image responsive
							height: 'auto', // Maintain aspect ratio
							maxWidth: '600px', // Optional: limit the maximum width
							marginTop: '20px', // Optional: add some spacing above the image
						  }}
					/>
				</Box>
			</Paper>
			<Paper
				width="100%"
				textAlign="center"
				wrap="wrap"
				style={{ padding: "20px", margin: "20px" }}
			>
				<Typography variant="h4" fontWeight="bold">
					How to Choose your Abrasives?
				</Typography>
				<Typography variant="body1" style={{ marginTop: "10px" }}>
					The impact power and coverage of steel abrasive is governed by its
					mass and velocity in accordance with equation of kinetic energy.
					<br />
					<br />
					Ke = 1/2 MV2 (Where Ke = Kinetic Energy M= Mass V= Velocity).
					<br />
					<br />
					The impact force delivered to the work piece will change only if the
					mass factor (i.e. the abrasive size) is altered.
					<br />
					<br />
					The economy and performance of blast cleaning depends upon the
					abrasives used. The proper size and type of abrasives and its quality
					is most important. The following three factors should be considered
					while selecting the abrasives.
					<br />
					<br />
					(a) Area of job surface these can clean
					<br />
					<br />
					(b) Quality of work produced
					<br />
					<br />
					(c) Cost of the shot
					<br />
					<br />
					We have expert engineers having 40 years of experience in the line of
					shot blasting /peening who can provide you total solutions to any
					issues or queries related to it.
				</Typography>
			</Paper>
			<Paper
				width="100%"
				textAlign="center"
				wrap="wrap"
				style={{ padding: "20px", margin: "20px" }}
			>
				<Typography variant="body1" style={{ marginTop: "10px" }}>
					We are Orient Industries understand that customization in products is
					extremely important given the dynamic business requirements. We
					believe in providing customized solutions to all our customers rather
					than just delivering products.
					<br />
					<br />
					We have dedicated team of experts and engineers to help us and the
					customers to understand the shot blasting requirements such that it
					improves cost efficiencies for the customers. We design abrasive
					specifications keeping in mind the end product which needs to be shot
					blasted or peed.
					<br />
					<br />
					Basis the analysis and understanding, Orishots then produces
					tailor-made suitable abrasive for each purpose, precisely matched to
					the required characteristics, such as blasting time and intensity as
					well as the conditions of the works. We determine the medium with the
					best possible properties for the customer’s needs and create the
					desired quality as per customer’s components, such as size, hardness,
					shot shape and the density.
					<br />
					<br />
					As shot blasting solution providers we provide the following services:
					<ul>
						<li>Conducting process audit periodically</li>
						<li>Testing under expert supervision</li>
						<li>Training for operators</li>
						<li>Driving Cost efficiencies</li>
						<li>
							Customized Training Programs on client site as per the customer
							need assessment. Practical training to service staff for machine
							handling to optimize shot blasting operations
						</li>
						<li>
							Regular Seminars for theoretical and practical sessions on
							<ul>
								<li>Shot Blasting Process</li>
								<li>Shot Peening Process</li>
							</ul>
						</li>
						<li>Optimization Techniques to improve Cost efficiencies</li>
					</ul>
				</Typography>
			</Paper>
		</Box>
	);
}

export default Solutions;
