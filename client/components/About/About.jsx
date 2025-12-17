import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { COLORS, SIZES } from "../../constants/theme.js";

export default function About() {
    return (
        <>
            <Typography variant="h4">Few words about us</Typography>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    px: SIZES.padding2,
                    boxShadow: '0px 0px 8px 1px rgba(0, 0, 0, 0.12);',
                }}
            >
                <Typography sx={{ textAlign: 'center', color: COLORS.secondary}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque doloribus molestias, harum voluptates beatae reiciendis ea molestiae quae ducimus dolor magni alias eveniet rem vero recusandae minima fugit id labore ad impedit! Labore quidem ipsum quisquam eius id quaerat quam?
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        gap: '1rem',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Link
                        style={{ textDecoration: 'none', color: COLORS.primary }}
                        to="/register"
                    >
                        Register
                    </Link>
                    <Link
                        style={{ textDecoration: 'none', color: COLORS.primary }}
                        to="/login"
                    >
                        Login
                    </Link>
                </Box>
            </Box>
        </>

    )
}