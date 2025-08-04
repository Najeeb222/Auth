import { Button, Checkbox, Divider, FormControlLabel, Grid, Stack, Typography } from "@mui/material"
import { CustomTextField, PasswordField, SocialLogin } from "components"
import { COLORS, ROUTES } from "constant"
import { useAuth } from "context"
import { FormProvider, useForm } from "react-hook-form"
import { Link } from "react-router"


const SignUpForm = () => {
    const { setUser, user } = useAuth()
    const method = useForm()
    const submitData = (data: any) => {
        if (data.password !== data.conformpassword) {
            alert("Passwords do not match");
            return;
        }
        console.log(data);
        setUser(data);
    }

    console.log(user)
    return (
        <Stack gap={'30px'} justifyContent={'center'} direction={'column'} height={'100%'}>
            <Stack gap={'20px'}>
                <Typography variant="h4" sx={{ fontWeight: 600 }}>
                    Sign up
                </Typography>
                <Typography variant="caption" sx={{ fontSize: '13px', color: COLORS.gray.light }}>
                    Let’s get you all st up so you can access your personal account.
                </Typography>
            </Stack>
            <Stack gap={'20px'}>
                <form onSubmit={method.handleSubmit(submitData)} >
                    <FormProvider {...method}>
                        <Grid container spacing={2}>


                            <Grid size={6}  >
                                <CustomTextField name="firstName" placeholder="enter your first name" type="text" label="First Name" endAdornment />
                            </Grid>
                            <Grid size={6}  >
                                <CustomTextField name="LastName" placeholder="enter your last name" type="text" label="Last Name" endAdornment />
                            </Grid>

                            <Grid size={6}  >
                                <CustomTextField name="email" placeholder="enter your email" type="email" label="Email" endAdornment />
                            </Grid>
                            <Grid size={6}  >
                                <CustomTextField name="phone" placeholder="enter your phone number" type="text" label="Phone" endAdornment />
                            </Grid>
                            <Grid size={12}>

                                <PasswordField name="password" label="Password" placeholder="enter your password" />
                            </Grid>
                            <Grid size={12}>

                                <PasswordField name="conformpassword" label="Confrom password" placeholder="conform password" />
                            </Grid>
                        </Grid>

                        <Stack direction={'row'} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                            <FormControlLabel
                                control={<Checkbox />}
                                label={
                                    <Typography variant="body2" sx={{ fontSize: '13px' }}>
                                        Agree to all the{' '}
                                        <span
                                            style={{
                                                color: COLORS.error.main
                                            }}
                                        >
                                            Terms
                                        </span>
                                        {""}     and {""}
                                        <span
                                            style={{
                                                color: COLORS.error.main,
                                            }}
                                        >
                                            Privacy Policy
                                        </span>
                                    </Typography>
                                }
                            />

                        </Stack>
                        <Button type="submit" variant="contained" sx={{ textTransform: 'capitalize', py: '10px', fontSize: '18px', width: '100%' }}>
                            Create account
                        </Button>
                    </FormProvider>
                </form>
                <Typography variant="body2" textAlign={'center'}>
                    Already have an account? Login <Link to={ROUTES.LOGIN} style={{ color: COLORS.error.main, textDecoration: 'none', fontSize: '14px', }}>Login</Link>
                </Typography>
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                    <Divider flexItem orientation="horizontal" sx={{ width: '37%', mb: '10px' }} />
                    <Typography textAlign={'center'} color={COLORS.gray.main} sx={{ textWrap: 'nowrap', pt: '2px' }}>
                        Or login with
                    </Typography>
                    <Divider flexItem orientation="horizontal" sx={{ width: '37%', mb: '10px' }} />
                </Stack>
            </Stack>
            <SocialLogin />


        </Stack>
    )
}



export default SignUpForm
