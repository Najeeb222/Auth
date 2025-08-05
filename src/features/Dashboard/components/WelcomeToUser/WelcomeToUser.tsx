import { Logout } from "@mui/icons-material";
import { Box, Typography, Stack, Avatar, Button } from "@mui/material";
import { useAuth } from "context";

const WelcomeToUser = () => {
    const { user, setUser } = useAuth(); // Make sure `logout` is available from your auth context

    const firstLetter =
        user?.firstName?.[0]?.toUpperCase() ||
        user?.email?.[0]?.toUpperCase() ||
        "?";

    const handleLogout = () => {
        setUser(null)
    }
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            bgcolor="#f5f7fa"
            px={2}
        >
            <Stack spacing={2} textAlign="center" alignItems="center">
                <Avatar
                    sx={{
                        bgcolor: "#1976d2",
                        width: 80,
                        height: 80,
                        fontSize: 32,
                        fontWeight: 600,
                    }}
                >
                    {firstLetter}
                </Avatar>
                <Typography variant="h4" fontWeight={600} color="primary">
                    Welcome 👋
                </Typography>
                <Typography variant="h6" fontWeight={500} color="text.secondary">
                    {user?.firstName || user?.email || "Guest"}
                </Typography>


                <Button

                    variant="outlined"
                    color="error"
                    onClick={handleLogout}
                    sx={{ mt: 2 }}
                    endIcon={<Logout />}
                >
                    Logout
                </Button>
            </Stack>
        </Box>
    );
};

export default WelcomeToUser;
