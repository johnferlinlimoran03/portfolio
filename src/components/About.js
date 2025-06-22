// src/components/About.js
import {
  Typography,
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@mui/material";
import { motion } from "framer-motion";
import { useZoomRatio } from "../hooks/useZoomRatio";
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const About = () => {
  const { containerMaxWidth, containerPaddingX } = useZoomRatio();

  return (
    <Container maxWidth={containerMaxWidth}  sx={{ px: containerPaddingX, mt: 5, pb: 10 }}
        component={motion.div}
          initial="hidden"
      animate="visible"
      variants={fadeInUp}>
        <Typography variant="h4" gutterBottom textAlign="center">
        About Me
      </Typography>
   <motion.div variants={fadeInUp}>
  <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
         
          <List>
            <ListItem>
              <ListItemText
                primary="Name"
                secondary="John Ferlin G. Limoran"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Address"
                secondary="Tierra Nevada Ph1 Blk 36 Lot 9, Gen. Trias, Cavite"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Date of Birth"
                secondary="November 4, 1991"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Marital Status"
                secondary="Married"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Languages Known"
                secondary="Tagalog and English"
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
   </motion.div>
    
    </Container>
  );
};

export default About;
