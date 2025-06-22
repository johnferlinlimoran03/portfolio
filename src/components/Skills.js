// src/components/Skills.js
import React from "react";
import {
  Container,
  Typography,
  Divider,
  Stack,
  Chip,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import { useZoomRatio } from "../hooks/useZoomRatio";

const skillCategories = {
  "Frontend": ["React.js", "JavaScript", "HTML", "CSS", "Bootstrap"],
  "Backend": ["ASP.NET Core", "ASP.NET WebForms", "C#", "VB.NET", "Node.js", "PHP"],
  "Database": ["MS SQL Server"],
  "Tools": ["SVN Tortoise", "JIRA", "Cherwell"],
  "Others": ["API Development", "MFA Implementation", "Active Directory Integration"]
};
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const Skills = () => {
  const { containerMaxWidth, containerPaddingX } = useZoomRatio();

  return (
    <Container maxWidth={containerMaxWidth} sx={{ px: containerPaddingX, mt: 5, pb: 10 }}
        component={motion.div}
         initial="hidden"
      animate="visible"
      variants={fadeInUp}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Technical Skills
      </Typography>
      <Divider sx={{ mb: 4 }} />
   <motion.div variants={fadeInUp}>
   {Object.entries(skillCategories).map(([category, skills], index) => (
        <Box key={index} sx={{ mb: 4 }}>
          <Typography variant="h6" color="primary" sx={{ mb: 2 }}>
            {category}
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap">
            {skills.map((skill, i) => (
              <Chip
                key={i}
                label={skill}
                color="primary"
                variant="outlined"
                sx={{ mb: 1 }}
              />
            ))}
          </Stack>
        </Box>
      ))}
   </motion.div>
   
    </Container>
  );
};

export default Skills;
