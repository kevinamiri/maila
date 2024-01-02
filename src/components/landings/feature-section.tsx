import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import { CodeDisplayComponent } from './code-box';

interface FeatureSectionProps {
    title: string;
    description?: string;
    primaryButtonText?: string;
    secondaryButtonText?: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ title = '', description = '', primaryButtonText = '', secondaryButtonText = '' }) => {
    return (
        <Box sx={{ flexGrow: 1, padding: 3, mt: 7, mb: 7 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{ mb: { xs: 2, md: 0 } }}>
                    <Typography variant="h4">{title}</Typography>
                    <Typography variant="body1" sx={{ my: 2 }}>{description}</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', py: 4, pr: 8 }}>
                        <Button size="small" variant="contained" color="primary" sx={{ my: 1 }}>
                            {primaryButtonText}
                        </Button>
                        {secondaryButtonText && (<Button size="small" variant="contained" color="primary" sx={{ m: 1, }}>
                            {secondaryButtonText}
                        </Button>)}
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <CodeDisplayComponent />
                </Grid>
            </Grid>
        </Box>
    );
};

export default FeatureSection;
