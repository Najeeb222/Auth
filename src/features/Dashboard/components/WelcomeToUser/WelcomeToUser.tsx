import { Logout } from "@mui/icons-material";
import {
    Box,
    Typography,

    Button,
    Card,
    CardContent,
    Stack
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
            bgcolor="#f0f0f0"
        >
            <Card sx={{ width: 400, borderRadius: 2, boxShadow: 3 }}>
                <CardContent>


                    <Typography variant="h5" align="center" gutterBottom>
                        Welcome
                    </Typography>

                    <Stack spacing={1} sx={{ mt: 2 }}>
                        <Typography><strong>User ID:</strong> {user?.id || "N/A"}</Typography>
                        <Typography><strong>Account Created:</strong> {formatTimestamp(user?.iat)}</Typography>
                        <Typography><strong>Token Expiry:</strong> {formatTimestamp(user?.exp)}</Typography>
                    </Stack>

                    <Button
                        fullWidth
                        variant="contained"
                        color="secondary"
                        onClick={handleLogout}
                        sx={{ mt: 4 }}
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
