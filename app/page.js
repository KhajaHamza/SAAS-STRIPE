import Image from "next/image";
import getStripe from "@/utils/getstripe";
import { SignedIn,SignedOut,UserButton } from "@clerk/nextjs";
import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import Head from "next/head";
export default function Home() {
  return (
    <Container maxWidth="lg">
      <Head>
        <title>Flashcard Saas</title>
        <meta name="description" content="Create flashcard from your text" ></meta>
      </Head>

      <AppBar position="static">
        <Toolbar>
        <Typography variant="h6">Flashcard Saas</Typography>
        <SignedOut>
          <Button>LogIn</Button>
          <Button>Sign Up</Button>
        </SignedOut>
        <SignedIn>
          <UserButton/>
        </SignedIn>

        </Toolbar>
      </AppBar>
    </Container>
  )
}
