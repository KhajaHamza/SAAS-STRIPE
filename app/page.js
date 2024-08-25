import Image from "next/image";
//import getStripe from "@/utils/getstripe";
import { SignedIn,SignedOut,UserButton } from "@clerk/nextjs";
import { AppBar, Box, Button, Container, Toolbar, Typography,Grid } from "@mui/material";
import Head from "next/head";
export default function Home() {
  return (<Container maxWidth="lg">
    <Head>
      <title>Flashcard SaaS</title>
      <meta name="description" content="Create flashcards from your text" />
    </Head>
    <AppBar position="static" sx={{ backgroundColor: '#9b59b6' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: '#ffffff' }}>Flashcard SaaS</Typography>
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
        backgroundColor: '#f1c40f',
        color: '#34495e',
        padding: 4,
      }}
    >
      <Typography variant="h2">Welcome to Flashcard SaaS</Typography>
      <Typography variant="h5">
        The easiest way to make flashcards from your text
      </Typography>
      <Button variant="contained" sx={{ 
        mt: 2, 
        backgroundColor: '#9b59b6', 
        '&:hover': { 
          backgroundColor: '#8e44ad' 
        } 
      }}>
        Get Started
      </Button>
    </Box>
    <Box sx={{ my: 6, backgroundColor: '#ecf0f1', padding: 4 }}>
      <Typography variant="h4" component="h2" sx={{ color: '#9b59b6', mb: 3 }}>
        Features
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ color: '#f1c40f' }}>
            Easy Text Input
          </Typography>
          <Typography sx={{ color: '#34495e' }}>
            Simply input your text and let the software do the rest. Creating flashcards has never been easier.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ color: '#f1c40f' }}>
            Smart Organization
          </Typography>
          <Typography sx={{ color: '#34495e' }}>
            Keep your flashcards organized effortlessly with intuitive sorting and categorization.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ color: '#f1c40f' }}>
            Study Efficiently
          </Typography>
          <Typography sx={{ color: '#34495e' }}>
            Utilize advanced algorithms to optimize your study sessions for better retention.
          </Typography>
        </Grid>
      </Grid>
    </Box>
    <Box sx={{my:6,textAlign:'center'}}>
      <Typography variant="h4">Pricing</Typography>
      < Grid container spacing={4}>
      <Box sx={{
        p:3,
        border:'1px solid',
        borderColor:'grey.300',
        borderRadius:2
      }}>
        <Typography variant="h5" gutterBottom >Basic</Typography>
        <Typography variant="h6" gutterBottom>5$ / month</Typography>
        <Typography>
          {' '}
          Access to Basic Flashcard and Limited Storage.
        </Typography>
        <Button variant="contained" color="primary">CHOOSE BASIC</Button>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ color: '#f1c40f' }}>
            Easy Text Input
          </Typography>
          <Typography sx={{ color: '#34495e' }}>
            Simply input your text and let the software do the rest. Creating flashcards has never been easier.
          </Typography>
        </Grid>
        </Box>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ color: '#f1c40f' }}>
            Smart Organization
          </Typography>
          <Typography sx={{ color: '#34495e' }}>
            Keep your flashcards organized effortlessly with intuitive sorting and categorization.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ color: '#f1c40f' }}>
            Study Efficiently
          </Typography>
          <Typography sx={{ color: '#34495e' }}>
            Utilize advanced algorithms to optimize your study sessions for better retention.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  </Container>


  )}  