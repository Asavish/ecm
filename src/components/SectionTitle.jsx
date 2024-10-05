import React from 'react';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

function SectionTitle({ text, variant = 'h5', align = 'center', style = {} }) {
  const theme = useTheme();
  return (
    <Box sx={{ 
        position: 'relative', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        textAlign: align, 
        padding: '10px 0',
        color: theme.palette.text.primary,
        ...style 
    }}>
      <Typography variant={variant}>
        {text}
      </Typography>
    </Box>
  );
}

SectionTitle.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.string,
  align: PropTypes.string,
  style: PropTypes.object,
};

export default SectionTitle;