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
                m: "0 auto"
            }}>
            <Box
                maxWidth="1500px"
                textAlign="center"
                marginBottom="auto"
            >
                {children}
            </Box>
        </Box>
    );
}
