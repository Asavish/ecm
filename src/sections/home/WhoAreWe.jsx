import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import SectionTitle from '../../components/SectionTitle';

function WhoAreWe() {
  const theme = useTheme();
  return (
    <Box 
    display="flex"
        flexWrap="wrap"
        justifyContent="center"
        gap={5}
        p={2}
        sx={{
          maxWidth: "100%",
          "@media (min-width: 600px)": {
            justifyContent: "space-between",
          },
          "@media (min-width: 960px)": {
            justifyContent: "center",
          },
        }}
    >
      <SectionTitle text="Who Are We?" />
      
      <Typography color= {theme.palette.accent.main}>
      We are one of few names to offer a vast and qualitive range of industrial steel abrasive products. Commited to follow fair business practices, we have earned the desired goodwill in the market.<br/><br/>

We also maintain cordial relationships with our esteemed clients. We are manufacturing these abrasives as per the international & other industry recommended standered. Some of the features of steel shot are durability, resistance to impact fatigue and maximum cleaning efficiency. We are offering these abrasives at economical price in the market.<br/><br/>

We use quality material from reliable sources and before being used in the production process, it undergoes strict quality inspection by our team of quality controllers.<br/>
      </Typography>
    </Box>
  );
}

export default WhoAreWe;