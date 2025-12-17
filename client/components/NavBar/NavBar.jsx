import { Button, AppBar, Toolbar } from "@mui/material"
import { Link } from "react-router-dom";
import { COLORS, FONTS } from "../../constants/theme.js";

export default function NavBar(props) {
    console.log(props);

    return (
        <AppBar position="static" sx={{ mb: '1.6rem' }}>
            <Toolbar>
                <Button
                    component={Link}
                    to="/"
                    sx={buttonStyles}
                >
                    Home
                </Button>
                <Button
                    component={Link}
                    to="/about"
                    sx={buttonStyles}
                >
                    About
                </Button>
            </Toolbar>
        </AppBar>
    );
}

const buttonStyles = {
    color: COLORS.secondary,
    fontSize: FONTS.size.lg,
    textDecoration: 'none',
}