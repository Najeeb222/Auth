
import { Box, Container, Grid, Paper } from "@mui/material";
import { AuthSlider } from "..";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Container maxWidth={'md'} disableGutters sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>

            <Grid container spacing={3} component={Paper} elevation={3} sx={{ p: 3, my: 'auto', borderRadius: '30px' }} >

                <Grid size={{sm:7,xs:12}} order={{ xs: 2, sm: 1 }} >

                    {children}
                </Grid>
                <Grid size={{sm:5,xs:12}} order={{ xs: 1, sm: 2 }} >

                    <AuthSlider />
                </Grid>
            </Grid>

        </Container>
    )
}

export default AuthLayout