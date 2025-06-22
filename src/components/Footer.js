// src/components/Footer.js
import { Box, Typography } from "@mui/material";

const Footer = () => (
  <Box
    component="footer"
    sx={{
      py: 2,
      textAlign: "center",
      bgcolor: "primary.main",
      color: "white",
    }}
  >
    <Typography variant="body2">© 2025 John Ferlin Limoran</Typography>
  </Box>
);

export default Footer;
