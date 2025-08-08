import { Button, Divider, Stack, Typography } from "@mui/material"
import { ArrowBack, CustomTextField, SocialLogin } from "components"
import { COLORS, ROUTES } from "constant"
import { PasswordOtp } from "libs"
import { FormProvider, useForm } from "react-hook-form"
import { Link } from "react-router"

const ForgotPasswordForm = () => {
  const method = useForm()
  // const submitData = (data: any) => {
  //   console.log(data)
  // }
  const submitData = async (data: any) => {
    try {
      const res = await PasswordOtp(data);
      console.log("OTP Response:", res);
      if (res.success) {
        alert("OTP sent successfully. Please check your email.");
      } else {
        alert(res.message || "Failed to send OTP");
      }
    } catch (err) {
      console.log("OTP Error:", err);
      alert("Failed to send OTP. Check your email.");
    }


  };
  return (
    <Stack gap={'30px'} justifyContent={'center'} direction={'column'} height={'100%'}>
      <FormProvider {...method}>
        <Stack gap={'30px'}>
          <ArrowBack />
          <Typography variant="h4" sx={{ fontWeight: 600 }}>
            Forgot your password?
          </Typography>
          <Typography variant="caption" sx={{ fontSize: '13px', color: COLORS.gray.light }}>
            Don’t worry, happens to all of us. Enter your email below to recover your password
          </Typography>
        </Stack>
        <Stack gap={'30px'}>
          <form onSubmit={method.handleSubmit(submitData)} >


            <Stack gap={'20px'}>
              <CustomTextField name="email" placeholder="enter your email" type="email" label="Email" endAdornment />

            </Stack>
            <Link to={ROUTES.SET_PASSWORD} style={{ color: COLORS.error.main, fontSize: "13px", textDecoration: "none" }}>
              Change Password
            </Link>

            <Button type="submit" variant="contained" sx={{ textTransform: 'capitalize', py: '10px', fontSize: '18px',width: '100%',mt:2 }}>
              Submit
            </Button>
          </form>

          <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Divider flexItem orientation="horizontal" sx={{ width: '37%', mb: '10px' }} />
            <Typography textAlign={'center'} color={COLORS.gray.main} sx={{ textWrap: 'nowrap', pt: '2px' }}>
              Or login with
            </Typography>
            <Divider flexItem orientation="horizontal" sx={{ width: '37%', mb: '10px' }} />
          </Stack>
        </Stack>
        <SocialLogin />
      </FormProvider>


    </Stack>
  )
}

export default ForgotPasswordForm
