
import { Box, Grid } from "@mui/material"
import { COLORS, socialLoginIcons } from "constant"


const SocialLogin = () => {
    return (
        <Grid container spacing={1.5}>

            {socialLoginIcons.map((icon,i) => (
                <Grid  key={i}size={4} sx={{ border: `1px solid ${COLORS.primary.main}`, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', py: '2px' ,cursor: 'pointer'}}>

                    <Box component={'img'} src={icon} sx={{ width: '35px', height: '35px', p: '2px',  }} />

                </Grid>

            ))}

        </Grid>
    )
}

export default SocialLogin

