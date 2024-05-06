import { Box, Typography, Grid, TextField, Button } from '@mui/material';

export default function CreateChallengePage() {
    return (
        <Box>
            <Typography variant="h3">Create a Challenge</Typography>
            <Box sx={{
                padding: 5
            }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Box sx={{
                            display: 'flex'
                        }}>
                            <Typography variant="h5" sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginRight: 2
                            }}>Name</Typography>
                            <TextField fullWidth label="Challenge Name" />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h5">Description</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth multiline rows={4} />
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            gap: 2
                        }}>
                            <Button variant="contained" color="primary">Generate</Button>
                            <Button variant="contained" color="primary">Submit</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}