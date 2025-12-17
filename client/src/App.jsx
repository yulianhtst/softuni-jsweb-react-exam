import { Box, Button, Container, Typography } from "@mui/material";
import { COLORS, FONTS } from "../constants/theme.js";

function App() {
  return (
    <Box
      maxWidth="1500px"
      textAlign="center"
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
  );
}

export default App;
