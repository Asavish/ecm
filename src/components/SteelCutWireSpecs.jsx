import { Box, Paper, Typography, useTheme } from "@mui/material";

export default function SteelCutWireShots () {
    const theme = useTheme();
    return (
        <>
        <Typography variant="h4" color={theme.palette.text.secondary} 
            sx={
                {
                padding:2,
                marginBottom : '10px'
                }
            }
            >
            Specification
            </Typography>

            <Box
            display='flex'
			flexDirection= {{xs : 'column', md :'column'}}
			alignItems="center"
			justifyContent="center"
			height="auto"
			padding={2}
			width="80%"
			margin = '0 auto'
		>
            
			<Paper
				sx={{
					width: '100%',
					textAlign: 'left',
					padding: { xs: '10px 10px 10px 10px', sm: '20px 20px 20px 20px' }, // Responsive padding
					margin: { xs: '10px 10px 10px 0px', sm: '20px 20px 20px 20px' }, // Responsive margin
					display: 'flex',
					flexDirection: { xs: 'column', md: 'column' }, // Stack on small screens, row on medium and up
					alignItems: 'center',
					justifyContent: 'center',
                    backgroundColor: theme.palette.background.secondary
				  }}
			>
				<Box
					flexDirection="column"
					alignItems="center"
					justifyContent="center"
					height="auto"
					width="85%"
				>
				
					<Typography variant="body1" style={{ marginTop: "10px",  color: theme.palette.text.default}}>
					<h2>Carbon Steel Cut Wire Shot</h2>
                     <p>Carbon Steel Cut Wire Shot is a popular alternative to cast steel abrasives.
                         This is particularly used for peening/blasting applications where a higher 
                         level of abrasive hardness is desirable or when components to be 
                         peened/blasted have a high level of inherent hardness.
                          It is ideal abrasives for shot peening/blasting operation.</p> 
                          <h2>General Information</h2>
                          <ul> 
                            <li><strong>Abrasive:</strong>
                            Carbon steel cut wire shot</li> 
                                <li><strong>Shape:</strong> 
                                Round, conditioned, As-cut </li> 
                                <li><strong>Application:</strong> 
                                Shot Peening, Shot Blasting</li> 
                                </ul> 
                              
                              <h3>Chemical Composition</h3> 
                              <ul> <li><strong>C:</strong> 0.45 – 0.85 %</li>
                               <li><strong>Mn:</strong> 0.30 – 1.20 %</li> 
                               <li><strong>Si:</strong> 0.10 – 0.35 %</li> 
                               <li><strong>P max:</strong> 0.04 %</li> 
                               <li><strong>S max:</strong> 0.05 %</li> 
                               </ul> <h3>Physical Properties</h3> <ul> 
                                <li><strong>Hardness (Standard):</strong>
                                 40–52 HRC (400–550 HV1)</li> <li><strong>Hardness (High):</strong> 
                                 55–62 HRC (600–750 HV1)</li> <li><strong>Sizes:</strong> 
                                 0.3mm to 2.8mm</li> <li><strong>MicroStructure:</strong>
                                  Tempered Martensite</li> <li><strong>Density:</strong> 
                                  min. 7.8 g/cm³</li> <li><strong>Packing:</strong>
                                   Packed in 25 kgs HDPE Double bags</li> 
                                   <li><strong>Lifecycle:</strong> 4500+</li> 
                                   </ul> 
                                    <h3>Industries Users:</h3>
                                     <p>Foundries, Forgings, Automobile Components, Gears & Springs,
                                         Heat Treatment Shop, Non-Ferrous Castings, Plate Preparation,
                                          Railway Wagon & Defense, Earth movers, Aeronautics, 
                                          Steel Fabrication, and other various type of applications.
                                          </p>
                    </Typography>
				</Box>
			</Paper>
			<Paper
				sx={{
					width: '100%',
					textAlign: 'left',
					padding: { xs: '10px 10px 10px 10px', sm: '20px 20px 20px 20px' }, // Responsive padding
					margin: { xs: '10px 10px 10px 10px', sm: '20px 20px 20px 20px' }, // Responsive margin
					display: 'flex',
					flexDirection: { xs: 'column', md: 'column' }, // Stack on small screens, row on medium and up
					alignItems: 'center',
					justifyContent: 'center',
                    backgroundColor: theme.palette.background.secondary
				  }}
			>
				<Box
					flexDirection="column"
					alignItems="center"
					justifyContent="center"
					height="auto"
					width="85%"
				>
					<Typography variant="body1" style={{ marginTop: "10px", color:theme.palette.text.default}}>
					
					<h2> Higher-Manganese Low-Carbon Condition Wire Shot</h2> 
                    <p>If components are blasted with wire shot to produce the surface finish,
                        production economy plays a significant role, apart from the positive
                         optical effects. If the component hardness is 40 HRC or less, then 
                         low-hardness High-Manganese steel cut wire shot is the first choice.</p> 
                         <h3>General Information</h3> 
                            <ul> 
                            <li><strong>Abrasive:</strong>
                            High Manganese Low Hardness steel cut wire shot</li> 
                                <li><strong>Shape:</strong> 
                                Round, conditioned</li> 
                                <li><strong>Application:</strong> 
                                Shot blasting</li> 
                                </ul> 
                                 
                                 <h3>Chemical Composition</h3> <ul>
                                     <li><strong>C:</strong> 0.10 – 0.40 %</li>
                                      <li><strong>Mn:</strong> 1.20 – 1.70 %</li> 
                                      <li><strong>Si:</strong> 0.10 – 0.25 %</li> 
                                      <li><strong>P max:</strong> 0.035 %</li> 
                                      <li><strong>S max:</strong> 0.035 %</li>
                                       </ul>
                                        <h3>Physical Properties</h3> 
                                        <ul> 
                                        <li><strong>Hardness (Standard):</strong>
                                         35–40 HRC (350–400 HV1)</li> 
                                         <li><strong>Sizes:</strong> 
                                         0.6mm to 2.0mm</li> 
                                         <li><strong>MicroStructure:</strong> 
                                         Tempered Martensite</li> 
                                         <li><strong>Density:</strong> 
                                         min. 7.8 g/cm³</li> 
                                         <li><strong>Packing:</strong>
                                          Packed in 25 kgs HDPE Double bags</li> 
                                          <li><strong>Lifecycle:</strong> 5400+</li> 
                                          </ul> 
                                          <h3>Industries Users:</h3> 
                                          <p>Forgings, Steel Fabrication, Bright Bar, 
                                            Pre Engineering Steel Structure, Descaling, 
                                            Deburring, LPG Cylinders, Tipper, Trailer, etc.
                                            </p>
					</Typography>
				</Box>
				
			</Paper>
			
		</Box>
        </>
        
    );
}