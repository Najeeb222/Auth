import { useState } from "react";
import { Button, Divider, Grid, Stack, Typography } from "@mui/material";
import { CustomTextField, PasswordField, SocialLogin } from "components";
import { COLORS, ROUTES } from "constant";
import { useAuth, useToast } from "context";
import { signupUser } from "libs";
import { FormProvider, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";

interface SignUpFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm = () => {
  const { login } = useAuth();
  const { showToast } = useToast();
  const methods = useForm<SignUpFormData>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const submitData = async (data: SignUpFormData) => {
    // Client-side validation
    if (data.password !== data.confirmPassword) {
      showToast("Passwords do not match", "error");
      return;
    }

    setIsLoading(true);
    
    try {
      const payload = {
        username: data.username,
        email: data.email,
        password: data.password,
      };
      
      const res = await signupUser(payload);
      
      if (res.token) {
        login(res.token);
        showToast('Account created successfully!', 'success');
        navigate(ROUTES.HOME); // Changed to dashboard
      } else {
        // Handle different error cases
        const errorMessage = res.message || 'Sign up failed. Please try again.';
        showToast(errorMessage, "error");
      }
    } catch (error: any) {
      // Improved error handling
      let errorMessage = "Sign up failed. Please try again.";
      
      if (error.response) {
        // Server responded with error status
        errorMessage = error.response.data?.message || 
                        `Server error: ${error.response.status}`;
      } else if (error.request) {
        // Request was made but no response received
        errorMessage = "No response from server. Please check your connection.";
      }
      
      showToast(errorMessage, "error");
      console.error("Signup error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Stack 
      gap={"30px"} 
      justifyContent={"center"} 
      direction={"column"} 
      height={"100%"} 
      maxWidth={500} 
      margin="0 auto"
      p={2}
    >
      <Stack gap={"20px"} textAlign="center">
        <Typography variant="h4" sx={{ fontWeight: 600 }}>
          Create Account
        </Typography>
        <Typography variant="body1" sx={{ color: COLORS.gray.light }}>
          Let's get you set up to access your personal account
        </Typography>
      </Stack>
      
      <form onSubmit={methods.handleSubmit(submitData)}>
        <FormProvider {...methods}>
          <Grid container spacing={2}>
            <Grid  size={12}>
              <CustomTextField 
                name="username" 
                placeholder="Enter your username" 
                type="text" 
                label="Username"
                
                
              />
            </Grid>
            
            <Grid  size={12}>
              <CustomTextField 
                name="email" 
                placeholder="Enter your email" 
                type="email" 
                label="Email"
                
                
              />
            </Grid>
            
            <Grid  size={{md:6,xs:12}}>
              <PasswordField 
                name="password" 
                label="Password" 
                placeholder="Create a password (min 6 characters)"
                
                
              />
            </Grid>
            
            <Grid  size={{md:6,xs:12}}>
              <PasswordField 
                name="confirmPassword" 
                label="Confirm Password" 
                placeholder="Re-enter your password"
                
                
              />
            </Grid>
          </Grid>
          
          <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
            By creating an account, you agree to our{" "}
            <Link 
              to={ROUTES.SIGNUP} 
              style={{ 
                color: COLORS.primary.main,
                textDecoration: 'underline',
              }}
            >
              Terms
            </Link>{" "}
            and{" "}
            <Link 
              to={ROUTES.SIGNUP} 
              style={{ 
                color: COLORS.primary.main,
                textDecoration: 'underline',
              }}
            >
              Privacy Policy
            </Link>
          </Typography>
          
          <Button 
            type="submit" 
            variant="contained" 
            disabled={isLoading}
            fullWidth
            sx={{ 
              mt: 3, 
              py: 2,
              fontSize: '1rem',
              fontWeight: 600
            }}
          >
            {isLoading ? "Creating Account..." : "Create Account"}
          </Button>
        </FormProvider>
      </form>
      
      <Typography variant="body2" textAlign={"center"}>
        Already have an account?{" "}
        <Link 
          to={ROUTES.LOGIN} 
          style={{ 
            color: COLORS.primary.main, 
            textDecoration: 'none',
            fontWeight: 600
          }}
        >
          Log in
        </Link>
      </Typography>
      
      <Stack direction={"row"} alignItems={"center"} gap={2} sx={{ my: 2 }}>
        <Divider flexItem sx={{ flexGrow: 1 }} />
        <Typography color={COLORS.gray.main}>or continue with</Typography>
        <Divider flexItem sx={{ flexGrow: 1 }} />
      </Stack>
      
      <SocialLogin />
    </Stack>
  );
};

export default SignUpForm;