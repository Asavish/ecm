import React, { useEffect } from "react";
import { Box, Typography, Paper, useTheme } from "@mui/material";
import SectionTitle from "../components/SectionTitle";
import { GlobalStaticState } from "../state/GlobalStaticState";

function AboutUs() {
    const theme = useTheme();
	useEffect(() => {
		window.scrollTo(0, 0);
	  }, []);

	return (
		<Box
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
			height="auto"
			padding={2}
			width="80%"
			margin = '0'
            
		>
			<SectionTitle text="Company Profile" />
			<Paper
				sx={{
					width: '100%',
					textAlign: 'left',
					padding: { xs: '10px', sm: '20px' }, // Responsive padding
					// margin: { xs: '10px', sm: '20px' }, // Responsive margin
					display: 'flex',
					flexDirection: { xs: 'column', md: 'row' }, // Stack on small screens, row on medium and up
					alignItems: 'center',
					justifyContent: 'center',
                    color:theme.palette.text.default,
                    bgcolor:theme.palette.background.secondary,
                    marginBottom:5
				  }}
			>
				<Box
					flexDirection="column"
					alignItems="center"
					justifyContent="center"
					height="auto"
					width="85%"
				>
					<Typography variant="body1" style={{ marginTop: "10px" }}
                    
                    >
                    Jain Shots Industries, founded by Vikas Kumar Jain, specializes in producing a 
                    wide range of high-quality abrasives used in shot peening and blasting 
                    operations throughout India. With 8 years of experience in the field, 
                    the company has built a solid reputation for its commitment to quality and 
                    reliability. Jain Shots works closely with a wide array of multinational 
                    corporations and medium-sized companies, ensuring that their abrasive solutions 
                    meet the demanding needs of industries across the country. The company's 
                    expertise and dedication make it a trusted partner for businesses seeking 
                    dependable abrasive products.
						<br />
						<br />
						Customization is the heart of what we do at Jain Shots. We don’t 
                        just make abrasives—we craft solutions tailored to your exact needs.
                         Whether it's blasting time, intensity, or the unique conditions of your
                          operation, we ensure every abrasive is designed with precision. 
                          From selecting the right size, hardness, and shape to fine-tuning 
                          the density, we take care of all the details so you don’t have to. 
                          Our goal is simple: to deliver abrasives that work seamlessly in your 
                          process, ensuring your components come out with the perfect finish every
                           time. That's the Jain Shots difference.

						<br />
						<br />
						At Jain Shots, we pride ourselves on delivering “Quality backed by 
                        Experience” to every single customer. Whether you're from India or 
                        anywhere across the globe, we warmly invite you to reach out or visit 
                        us to discuss your specific business needs. Our commitment goes beyond 
                        just delivering products—we offer prompt delivery and exceptional 
                        after-sales support to ensure that your expectations are not only met 
                        but exceeded. With Jain Shots, you’ll experience more than just a 
                        supplier; you'll find a trusted partner dedicated to offering the finest 
                        quality at the most competitive prices. Your satisfaction is our mission,
                         and we’re here to ensure your journey with us leads to complete customer 
                         delight.
					</Typography>
				</Box>
				
			</Paper>
			<Paper
				sx={{
					width: '100%',
					textAlign: 'left',
					padding: { xs: '10px', sm: '20px' }, // Responsive padding
					// margin: { xs: '10px', sm: '20px' }, // Responsive margin
					display: 'flex',
					flexDirection: { xs: 'column', md: 'row' }, // Stack on small screens, row on medium and up
					alignItems: 'center',
					justifyContent: 'center',
                    // boxShadow : 'none',
                    gap : 2
				  }}
			>
                <Box> 
					<img
						src={GlobalStaticState.imageLink.aboutUs1.link}

						alt={GlobalStaticState.imageLink.aboutUs1.src}
						style={{
							width: '100%', // Make the image responsive
							height: 'auto', // Maintain aspect ratio
							maxWidth: '600px', // Optional: limit the maximum width
							marginTop: '20px', // Optional: add some spacing above the image
						  }}
					/>
				</Box>
				<Box
					flexDirection="column"
					alignItems="center"
					justifyContent="center"
					height="auto"
					width="75%"
                    textAlign='left'
				>
                    <SectionTitle text = 'Discover Our Diverse Offerings'/>
					<Typography variant="body1" style={{ marginTop: "10px" }}>
                    Here are some points highlighting the various industries and operations that utilize the abrasives produced by Jain Shots Industries:
<ul>
<li><b>Aerospace Industry</b>: Used for surface preparation, cleaning, and finishing of aircraft components.</li>

<li><b>Automotive Industry</b>: Essential for machining, grinding, and finishing processes in manufacturing parts and components.</li>

<li><b>Construction Sector</b>: Employed for surface preparation, such as cleaning concrete and removing coatings.</li>

<li><b>Metal Fabrication</b>: Utilized for cutting, grinding, and polishing metal parts to achieve precise finishes.</li>

<li><b>Shipbuilding</b>: Used in the blasting and cleaning of hulls and structures to ensure durability and longevity.</li>

<li><b>Foundries</b>: Applied in the cleaning and finishing of castings to enhance surface quality.</li>

<li><b>Electronics Manufacturing</b>: Critical for cleaning and preparing surfaces for component assembly.</li>

<li><b>Glass and Ceramics</b>: Employed in grinding and polishing processes to achieve smooth and polished finishes.</li>

<li><b>Oil and Gas Industry</b>: Used for surface treatment and cleaning of pipelines and equipment.</li>

<li><b>General Manufacturing</b>: Applied in various machining and finishing operations across multiple sectors to improve product quality.</li>

<li>These diverse applications demonstrate the versatility and importance of Jain Shots' abrasives across multiple industries.</li>
</ul>
					</Typography>
				</Box>
				
			</Paper>
		</Box>
	);
}

export default AboutUs;
