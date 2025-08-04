import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Divider, FormControlLabel, Stack, Typography } from "@mui/material";
import { CustomTextField, PasswordField, SocialLogin } from "components";
import { COLORS, ROUTES } from "constant";
import { useAuth } from "context";
import { FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const LoginForm = () => {
    const { user, setUser } = useAuth();
    const navigate = useNavigate();
    const method = useForm();


    useEffect(() => {
        if (user) {
            navigate(ROUTES.HOME);
        }
    }, [user, navigate]);

    const submitData = (data: any) => {
        console.log(data);
        setUser(data);
    };

    return (
        <Stack gap={"30px"} justifyContent={"center"} direction={"column"} height={"100%"}>
            <Stack gap={"20px"}>
                <Typography variant="h4" sx={{ fontWeight: 600 }}>
                    Login
                </Typography>
                <Typography variant="caption" sx={{ fontSize: "13px", color: COLORS.gray.light }}>
                    Login to access your travelwise account
                </Typography>
            </Stack>
            <Stack gap={"20px"}>
                <form onSubmit={method.handleSubmit(submitData)}>
                    <FormProvider {...method}>
                        <Stack gap={"20px"}>
                            <CustomTextField name="email" placeholder="enter your email" type="email" label="Email" endAdornment />
                            <PasswordField name="password" label="password" />
                        </Stack>

                        <Stack direction={"row"} sx={{ justifyContent: "space-between", alignItems: "center" }}>
                            <FormControlLabel control={<Checkbox />} label="Remember me" sx={{ fontSize: "13px" }} />
                            <Link to={ROUTES.FORGOT_PASSWORDS} style={{ color: COLORS.error.main, fontSize: "13px", textDecoration: "none" }}>
                                Forgot Password
                            </Link>
                        </Stack>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ textTransform: "capitalize", py: "10px", fontSize: "18px", width: "100%" }}
                        >
                            Login
                        </Button>
                    </FormProvider>
                </form>
                <Typography variant="body2" textAlign={"center"}>
                    Don’t have an account?{" "}
                    <Link to={ROUTES.SIGNUP} style={{ color: COLORS.error.main, textDecoration: "none", fontSize: "14px" }}>
                        Sign up
                    </Link>
                </Typography>
                <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                    <Divider flexItem orientation="horizontal" sx={{ width: "37%", mb: "10px" }} />
                    <Typography textAlign={"center"} color={COLORS.gray.main} sx={{ textWrap: "nowrap", pt: "2px" }}>
                        Or login with
                    </Typography>
                    <Divider flexItem orientation="horizontal" sx={{ width: "37%", mb: "10px" }} />
                </Stack>
            </Stack>
            <SocialLogin />
        </Stack>
    );
};

export default LoginForm;
