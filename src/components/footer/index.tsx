import { FC } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Random Footer
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This is a random footer that i found in google. Just for adding
              some content to the page
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Me
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Doroshenka 22, Lviv, Ukraine
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: ykravchenko.dev@gmail.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +380 (93) 194 83 10
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Me
            </Typography>
            <Link
              href="https://www.linkedin.com/in/yaroslav-kravchenko0710/"
              target="_blank"
              color="inherit"
            >
              <Facebook />
            </Link>
            <Link
              href="https://www.linkedin.com/in/yaroslav-kravchenko0710/"
              color="inherit"
              target="_blank"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link
              href="https://www.linkedin.com/in/yaroslav-kravchenko0710/"
              color="inherit"
              target="_blank"
            >
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              Y.Kravchenko
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
