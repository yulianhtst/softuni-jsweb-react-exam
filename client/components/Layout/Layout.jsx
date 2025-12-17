import { Box } from "@mui/material";

export default function Layout({ children }) {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: 'column',
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "grey",
                m:"0 auto"
            }}>
            {children}
        </Box>
    );
}
