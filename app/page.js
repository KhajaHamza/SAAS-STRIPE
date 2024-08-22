import Image from "next/image";
//import getStripe from "@/utils/getstripe";
import { SignedIn,SignedOut,UserButton } from "@clerk/nextjs";
import { AppBar, Box, Button, Container, Toolbar, Typography,Grid } from "@mui/material";
import Head from "next/head";
export default function Home() {
  return (
    <Container maxWidth="lg">
    <Head>
      <title>Flashcard SaaS</title>
      <meta name="description" content="Create flashcards from your text" />
    </Head>
  
    <AppBar position="static" sx={{ backgroundColor: '#1e3a5f' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>Flashcard SaaS</Typography>
        <SignedOut>
          <Button color="inherit">Log In</Button>
          <Button color="inherit">Sign Up</Button>
        </SignedOut>
        <SignedIn>  
          <UserButton />
        </SignedIn>
      </Toolbar>
    </AppBar>
  
    <Box
      sx={{
        textAlign: 'center',
        my: 4,
        backgroundColor: '#b39ddb', // Lighter purple background
        color: '#ffffff', // White text for contrast
      }}
    >
      <Typography variant="h2">Welcome to Flashcard SaaS</Typography>
      <Typography variant="h5">
        The easiest way to make flashcards from your text
      </Typography>
      <Button variant="contained" color="primary" sx={{ mt: 2, backgroundColor: '#8e24aa' }}>
        Get Started
      </Button>
    </Box>
  
    <Box sx={{ my: 6, backgroundColor: '#f3f0ff' }}>
      <Typography variant="h4" component="h2" sx={{ color: '#4a148c' }}>
        Features
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ color: '#8e24aa' }}>
            Easy Text Input
          </Typography>
          <Typography sx={{ color: '#4a148c' }}>
            Simply input your text and let the software do the rest. Creating flashcards has never been easier.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ color: '#8e24aa' }}>
            Smart Organization
          </Typography>
          <Typography sx={{ color: '#4a148c' }}>
            Keep your flashcards organized effortlessly with intuitive sorting and categorization.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ color: '#8e24aa' }}>
            Study Efficiently
          </Typography>
          <Typography sx={{ color: '#4a148c' }}>
            Utilize advanced algorithms to optimize your study sessions for better retention.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  </Container>
  
  )}  