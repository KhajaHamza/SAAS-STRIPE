import Image from "next/image";
//import getStripe from "@/utils/getstripe";
import { SignedIn,SignedOut,UserButton } from "@clerk/nextjs";
import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import Head from "next/head";
export default function Home() {
  return (
    <Container maxWidth="lg">
      <Head>
        <title>Flashcard Saas</title>
        <meta name="description" content="Create flashcard from your text" />
      </Head>

      <AppBar position="static">
        <Toolbar>
        <Typography variant="h6" style={{flexGrow:1}}>Flashcard Saas</Typography>
        <SignedOut>
          <Button color="inherit">LogIn</Button>
          <Button color="inherit">Sign Up</Button>
        </SignedOut>
        <SignedIn>  
          <UserButton/>
        </SignedIn>

        </Toolbar>
      </AppBar>
      <Box
      sx={{
        textAlign:'center',
        my:4
      }}
      >
        <Typography variant="h2">Welcome to Flashcard Saas</Typography>
        <Typography variant="h5">
          {' '}
          The easiest way to make flashcards from your text
          </Typography>
          <Button variant="contained" color="primary" sx={{mt:2}}>
            Get Started
          </Button>
      </Box>
      <Box sx ={{my:6}}>
        <Typography variant="h4" components="h2">
          Features
        </Typography>
      </Box>
    </Container>
  )
}
