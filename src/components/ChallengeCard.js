import { 
    Box, Typography, 
    Card, CardContent, CardMedia, Collapse,
    ImageList, ImageListItem, ImageListItemBar
 } from '@mui/material';
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
                        {new Date(props.date * 1000).toDateString()} - {props.name}
                    </Typography>
                    <Collapse in={props.expanded || expanded} timeout="auto" unmountOnExit>
                        <Typography variant="body1">
                            {props.description}
                        </Typography>
                        {props.images?.length > 0 &&
                        <Box>
                            <Typography variant="h5">
                                Album
                            </Typography>
                            <ImageList variant="masonry" cols={3} gap={8} rowHeight={180}>
                                {props.images?.map((image) => (
                                    <ImageListItem key={image.id}>
                                    <img
                                        srcSet={`${image.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                        src={`${image.url}?w=248&fit=crop&auto=format`}
                                        loading="lazy"
                                    />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </Box>
                        }
                    </Collapse>
                </CardContent>
            </Box>
        </Card>
    )
}