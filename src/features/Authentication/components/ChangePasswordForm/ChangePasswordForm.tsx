import { Button, Checkbox, Divider, FormControlLabel, Stack, Typography } from "@mui/material"
import { ArrowBack, CustomTextField, PasswordField, SocialLogin } from "components"
import { COLORS, ROUTES } from "constant"
import { FormProvider, useForm } from "react-hook-form"


const ChangePasswordForm = () => {
  const method = useForm()
  const submitData = (data: any) => {
    console.log(data)
  }
  return (
    <Stack gap={'30px'} justifyContent={'center'} direction={'column'} height={'100%'}>
      <ArrowBack/>
      <Stack gap={'20px'}>
        <Typography variant="h4" sx={{ fontWeight: 600 }}>
          Set a password
        </Typography>
        <Typography variant="caption" sx={{ fontSize: '13px', color: COLORS.gray.light }}>
          Your previous password has been reseted. Please set a new password for your account.
        </Typography>
      </Stack>
      <Stack gap={'20px'}>
        <form onSubmit={method.handleSubmit(submitData)} >
          <FormProvider {...method}>


            <Stack gap={'20px'}>
            
              <PasswordField name="password" label="Password" />
              <PasswordField name="conformPassword" label=" Confrom password" />
            </Stack>

          </FormProvider>
        </form>
     
        <Button type="submit" variant="contained" sx={{ textTransform: 'capitalize', py: '10px', fontSize: '18px' }}>
          Set Password
        </Button>
   
      
      </Stack>



    </Stack>
  )
}




export default ChangePasswordForm
