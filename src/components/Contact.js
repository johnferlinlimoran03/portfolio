// src/components/Contact.js
import React from "react";
import {
  Container,
  Typography,
  Divider,
  Box,
  Stack,
  Link as MuiLink,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { motion } from "framer-motion";
import { useZoomRatio } from "../hooks/useZoomRatio";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Contact = () => {
  const { containerMaxWidth, containerPaddingX } = useZoomRatio();

  return (
    <Container
      maxWidth={containerMaxWidth}
      sx={{ px: containerPaddingX, mt: 5, pb: 10 }}
      component={motion.div}
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      <Typography variant="h4" gutterBottom textAlign="center">
        Contact Information
      </Typography>
      <Divider sx={{ mb: 4 }} />

      <Stack spacing={3} alignItems="flex-start">
        <motion.div variants={fadeInUp}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <PhoneIcon color="primary" sx={{ mr: 2 }} />
            <Typography variant="body1">0966 708 6033</Typography>
          </Box>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <EmailIcon color="primary" sx={{ mr: 2 }} />
            <Typography variant="body1">
              <MuiLink href="mailto:johnferlinlimoran03@gmail.com" underline="hover">
                johnferlinlimoran03@gmail.com
              </MuiLink>
            </Typography>
          </Box>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <LinkedInIcon color="primary" sx={{ mr: 2 }} />
            <Typography variant="body1">
              <MuiLink
                href="https://www.linkedin.com/in/john-ferlin-limoran-074858304/"
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
              >
                LinkedIn Profile
              </MuiLink>
            </Typography>
          </Box>
        </motion.div>
      </Stack>
    </Container>
  );
};

export default Contact;
