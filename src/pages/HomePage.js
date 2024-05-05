import { Box, Typography } from '@mui/material';

import ChallengeCard from '../components/ChallengeCard';
import ChallengeList from '../components/ChallengeList';

import { getChallenges } from '../services/ChallengeService';
import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';

export default function HomePage() {
    const [challenges, setChallenges] = useState([]);
    const theme = useTheme();

    useEffect(() => {
        getChallenges().then((challenges) => {
            setChallenges(challenges);
        }).catch((error) => {
            console.error(error);
        });
    }, []);

    return (
        <Box sx={{
            padding: 2
        }}>
            <Typography variant="h4" gutterBottom>
                Current Challenge
            </Typography>
            <ChallengeCard expanded={true} interactive={false} {...challenges[0]} />
            <Box sx={{
                marginY: 3,
                border: `5px solid ${theme.palette.primary.main}`,
                borderRadius: 1,
            }}/>
            <Typography variant="h4" gutterBottom>
                Previous Challenges
            </Typography>
            <ChallengeList challenges={challenges} />
        </Box>
    )
}