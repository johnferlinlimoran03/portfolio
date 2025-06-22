
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Stack,
} from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import SecurityIcon from "@mui/icons-material/Security";
import CodeIcon from "@mui/icons-material/Code";
import ApiIcon from "@mui/icons-material/Api";
import StorageIcon from "@mui/icons-material/Storage";
import { motion } from "framer-motion";
import { useZoomRatio } from "../hooks/useZoomRatio";

const workExperience = [
  {
    company: "Nityo Infotech (Assigned to PBCOM)",
    period: "Aug 2024 – May 2025",
    role: ".NET Developer",
    description:
      "Developed modules for the Financial Management System (FMS), including UI design, API development using ASP.NET Core, React JS, and C#, and database procedures using MS SQL.",
    tech: ["ASP.NET Core", "React.js", "C#", "JavaScript", "MS SQL"],
    icon: <ApiIcon fontSize="large" color="primary" />,
  },
  {
    company: "Infolink and Teligent Systems (Assigned to PNB)",
    period: "Jan 2022 – Aug 2024",
    role: "Programmer / Support",
    description:
      "Implemented MFA and Active Directory integration for banking systems. Resolved security issues, provided production support, and worked with tools like JIRA and Cherwell.",
    tech: [
      "ASP.NET WebForms",
      "ASP.NET Core",
      "C#",
      "VB.NET",
      "JavaScript",
      "MS SQL",
      "JIRA",
      "SVN",
    ],
    icon: <SecurityIcon fontSize="large" color="primary" />,
  },
  {
    company: "Neltex Development Corp. Inc.",
    period: "Nov 2019 – Dec 2021",
    role: "Junior Programmer Analyst",
    description:
      "Supported existing systems and developed new web apps. Migrated legacy systems to modern frameworks.",
    tech: ["ASP.NET WebForms", "C#", "VB.NET", "HTML", "CSS", "JavaScript", "SVN"],
    icon: <CodeIcon fontSize="large" color="primary" />,
  },
  {
    company: "IOT Technology Inc.",
    period: "Mar 2019 – Aug 2019",
    role: "Web Developer",
    description:
      "Developed APIs and backend processes for mobile and web apps. Created UI for EasyCashOut system.",
    tech: ["PHP", "HTML", "CSS", "JavaScript", "MS SQL"],
    icon: <BusinessIcon fontSize="large" color="primary" />,
  },
  {
    company: "We Support Inc. (Amdocs PH)",
    period: "Mar 2018 – Jan 2019",
    role: "SQL Analyst / Support",
    description:
      "Maintained test result databases and dashboards. Provided SQL optimization and incident support for Kenan and Clarity systems.",
    tech: ["MS SQL", "CE Reports", "Kenan", "Clarity"],
    icon: <StorageIcon fontSize="large" color="primary" />,
  },
];
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const Experience = () => {
  const { containerMaxWidth, containerPaddingX } = useZoomRatio();

  return (
    <Container maxWidth={containerMaxWidth} sx={{ px: containerPaddingX, mt: 5, pb: 10 }}
       component={motion.div}
      initial="hidden"
      animate="visible"
      variants={fadeInUp}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Professional Experience
      </Typography>
      <Divider sx={{ mb: 4 }} />

      <Grid container spacing={3}>
          <motion.div variants={fadeInUp}>
  {workExperience.map((job, index) => (
          <Grid item xs={12} sm={6} key={index} sx={{ mt: 2 }}>
            <Card
              elevation={4}
              sx={{
                height: "100%",
                width: 800,
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.02)",
                },
                p: 2,

                borderRadius: 3,
              }}
            >
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                  {job.icon}
                  <Box>
                    <Typography variant="h6" color="primary">
                      {job.company}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                      {job.period} — {job.role}
                    </Typography>
                  </Box>
                </Box>

                <Typography variant="body2" sx={{ mb: 2 }}>
                  {job.description}
                </Typography>

                <Stack direction="row" spacing={1} flexWrap="wrap">
                  {job.tech.map((tech, i) => (
                    <Chip
                      key={i}
                      label={tech}
                      size="small"
                      sx={{ mb: 1 }}
                      color="primary"
                      variant="outlined"
                    />
                  ))}
                </Stack>
              </CardContent>

            </Card>
          </Grid>
        ))}
          </motion.div>
      
      </Grid>
    </Container>
  );
};

export default Experience;
