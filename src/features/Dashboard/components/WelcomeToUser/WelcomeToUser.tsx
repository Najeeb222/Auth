import { Logout, Person, AccessTime, Schedule } from "@mui/icons-material";
import {

    Box,
    Typography,
    Button,
    Card,
    CardContent,
    Stack,
    Divider,
    useTheme
} from "@mui/material";
import { useAuth } from "context";
import { useNavigate } from "react-router";
import { ROUTES } from "constant";

const WelcomeToUser = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
 

    const handleLogout = () => {
        logout();
        navigate(ROUTES.LOGIN);
    };

    const formatTimestamp = (timestamp: number | undefined) => {
        if (!timestamp) return "N/A";
        return new Date(timestamp * 1000).toLocaleString();
    };

  

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            sx={{
                background: "linear-gradient(to right, #8EC5FC, #E0C3FC)",
                p: 2,
            }}
        >
            <Card
                sx={{
                    width: 400,
                    borderRadius: 4,
                    boxShadow: 6,
                    transition: "transform 0.3s ease",
                    "&:hover": {
                        transform: "scale(1.02)",
                    },
                }}
            >
                <CardContent>
                

                    <Typography variant="h4" align="center" fontWeight={600} gutterBottom>
                        Welcome, to your Dashboard!
                    </Typography>

                    <Divider sx={{ my: 2 }} />

                    <Stack spacing={1}>
                        <Typography variant="body1">
                            <Person sx={{ verticalAlign: "middle", mr: 1 }} />
                            <strong>User ID:</strong> {user?.id || "N/A"}
                        </Typography>
                        <Typography variant="body1">
                            <AccessTime sx={{ verticalAlign: "middle", mr: 1 }} />
                            <strong>Account Created:</strong> {formatTimestamp(user?.iat)}
                        </Typography>
                        <Typography variant="body1">
                            <Schedule sx={{ verticalAlign: "middle", mr: 1 }} />
                            <strong>Token Expiry:</strong> {formatTimestamp(user?.exp)}
                        </Typography>
                    </Stack>

                    <Button
                        fullWidth
                        variant="contained"
                        color="error"
                        onClick={handleLogout}
                        sx={{ mt: 4, py: 1.2, fontWeight: 600 }}
                        startIcon={<Logout />}
                    >
                        Logout
                    </Button>
                </CardContent>
            </Card>
        </Box>
    );
};

export default WelcomeToUser;
