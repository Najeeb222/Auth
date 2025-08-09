import { Logout } from "@mui/icons-material";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Stack,
  Divider
} from "@mui/material";
import { useAuth, useToast } from "context";
import { useNavigate } from "react-router";
import { ROUTES } from "constant";

const WelcomeToUser = () => {
  const { user, logout } = useAuth();
  const {showToast}=useToast()
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate(ROUTES.LOGIN);
    showToast('Logout successful' ,'success')
    
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{
        background: "linear-gradient(135deg, #e0f7fa, #f1f8e9)",
        p: 2,
      }}
    >
      <Card
        sx={{
          width: 400,
          borderRadius: 3,
          boxShadow: 4,
          p: 2,
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: 600, color: "primary.main" }}
          >
            Welcome
          </Typography>

          <Divider sx={{ mb: 2 }} />

          {user && (
            <Stack spacing={1.5}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                User Information
              </Typography>
              <Typography variant="body2">
                <strong>ID:</strong> {user.id}
              </Typography>
              <Typography variant="body2">
                <strong>Created:</strong>{" "}
                {new Date(user.iat * 1000).toLocaleString()}
              </Typography>
              <Typography variant="body2">
                <strong>Expiry:</strong>{" "}
                {new Date(user.exp * 1000).toLocaleString()}
              </Typography>
            </Stack>
          )}

          <Divider sx={{ my: 3 }} />

          <Button
            fullWidth
            variant="contained"
            color="error"
            startIcon={<Logout />}
            sx={{ fontWeight: 600, py: 1 }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default WelcomeToUser;
