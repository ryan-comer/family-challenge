import { Typography, Box, Grid } from "@mui/material";
import ChallengeCard from "./ChallengeCard";

export default function ChallengeList(props) {
    return (
        <Box>
            <Grid container>
                <Grid item xs={12}>
                    {props.challenges.map((challenge) => {
                        return <Box key={challenge.id} sx={{marginBottom: 1}}>
                            <ChallengeCard {...challenge} />
                        </Box>
                    })}
                </Grid>
            </Grid>
        </Box>
    )

}