import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
      return (
            <Box
                  component="footer"
                  sx={{
                        backgroundColor: (theme) =>
                              theme.palette.mode === "light"
                                    ? theme.palette.grey[200]
                                    : theme.palette.grey[800],
                        p: 3,
                  }}
            >
                  <Container maxWidth="lg">
                        <Grid container>
                              <Grid item xs={12} sm={6} md={3}>
                                    <Typography variant="h6" color="text.primary" gutterBottom>
                                          Ceazur
                                    </Typography>
                                    <Typography variant="h6" color="text.primary" gutterBottom>
                                          Address
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                          63 Main Street, Anytown, USA
                                    </Typography>


                              </Grid>
                              <Grid item xs={12} sm={6} md={3}>
                                    <Typography variant="h6" color="text.primary" gutterBottom>
                                          Website
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                          Home
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                          About Us
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" href="/order" gutterBottom>
                                          Carrier
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                          T&C
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                          Privacy Policy
                                    </Typography>
                              </Grid>

                              <Grid item xs={12} sm={6} md={3}>
                                    <Typography variant="h6" color="text.primary" gutterBottom>
                                          CUSTOMER POLICIES
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                          Track Order
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                          Shipping
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                          Cancellation
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                          Return
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                          FAQ
                                    </Typography>
                              </Grid>
                              <Grid item xs={12} sm={6} md={3}>
                                    <Typography variant="h6" color="text.primary" gutterBottom>
                                          Contact Us
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                          Email: info@example.com
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                          Phone: +1 234 567 8901
                                    </Typography>
                              </Grid>
                        </Grid>
                        <Box mt={5} >

                              <Link href="https://www.facebook.com/" color="inherit">
                                    <Facebook />
                              </Link>
                              <Link
                                    href="https://www.instagram.com/"
                                    color="inherit"
                                    sx={{ pl: 1, pr: 1 }}
                              >
                                    <Instagram />
                              </Link>
                              <Link href="https://www.twitter.com/" color="inherit">
                                    <Twitter />
                              </Link>


                              <Typography variant="body2" color="text.secondary" align="center">
                                    {"Copyright © "}
                                    <Link color="inherit" href="https://your-website.com/">
                                          Your Website
                                    </Link>{" "}
                                    {new Date().getFullYear()}
                                    {"."}
                              </Typography>
                        </Box>

                  </Container >
            </Box >
      );
}