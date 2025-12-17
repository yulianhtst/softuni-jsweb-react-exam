import { Box, Button, Typography } from "@mui/material";
import { COLORS } from "../../constants/theme.js";

export default function HomePage() {
    return (
        <Box
            maxWidth="1500px"
            textAlign="center"
            marginBottom="auto"
        >
            <Typography
                variant="h3"
            >
                Lorem ipsum dolor sit amet.
            </Typography>

            <Typography
                color={COLORS.primary}
                sx={{ mb: 3 }}
                wrap
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sed,
            </Typography>

            <Button
                variant="contained"
                size="large"
            >
                Test
            </Button>
        </Box>
    )
}