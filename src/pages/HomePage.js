import { Box, Typography } from '@mui/material';

import ChallengeCard from '../components/ChallengeCard';
import ChallengeList from '../components/ChallengeList';

const challenges = [
    {
        id: 1,
        title: "Challenge 1",
        description: "This is the first challenge",
        date: new Date(),
    },
    {
        id: 2,
        title: "Challenge 2",
        description: "This is the second challenge",
        date: new Date(),
    },
    {
        id: 3,
        title: "Challenge 3",
        description: "This is the third challenge",
        date: new Date(),
    },
];

export default function HomePage() {
    return (
        <Box sx={{
            padding: 2
        }}>
            <Typography variant="h2" gutterBottom>
                Current Challenge
            </Typography>
            <ChallengeCard expanded={true} interactive={false} {...challenges[0]} />
            <Box sx={{
                marginY: 3,
                border: '1px solid gray',
                borderRadius: 2,
            }}/>
            <Typography variant="h4" gutterBottom>
                Previous Challenges
            </Typography>
            <ChallengeList challenges={challenges} />
        </Box>
    )
}