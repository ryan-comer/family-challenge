import { Box, Typography, Card, CardContent, CardMedia, Collapse } from '@mui/material';
import { useState } from 'react';

export default function ChallengeCard(props) {
    const [expanded, setExpanded] = useState(false);
    const [hovered, setHovered] = useState(false);

    const { interactive = true} = props;

    return (
        <Card variant='outlined' sx={{
            borderRadius: 2
        }}>
            <Box 
            onClick={() => setExpanded(!expanded)}
            onMouseEnter={() => interactive && setHovered(true)}
            onMouseLeave={() => interactive && setHovered(false)}
            sx={{
                backgroundColor: hovered ? 'lightgray' : 'inherit',
                cursor: hovered ? 'pointer' : 'default',
            }}
            >
                <CardContent>
                    <Typography component="div" variant="h5">
                        {props.date.toDateString()} - {props.title}
                    </Typography>
                    <Collapse in={props.expanded || expanded} timeout="auto" unmountOnExit>
                        <Typography variant="body1">
                            {props.description}
                        </Typography>
                    </Collapse>
                </CardContent>
            </Box>
        </Card>
    )
}