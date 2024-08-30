import React from 'react';
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { AppBar, Box, Button, Container, Toolbar, Typography, Grid, Card, CardContent, CardActions } from "@mui/material";
import Head from "next/head";

// Helper component for emoji icons
const EmojiIcon = ({ label, symbol }) => <span role="img" aria-label={label}>{symbol}</span>;

export default function Home() {
  return (
    <Container maxWidth="lg">
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
          borderRadius: 2,
        }}
      >
        <Typography variant="h2">Welcome to Flashcard SaaS</Typography>
        <Typography variant="h5" sx={{ my: 2 }}>
          The easiest way to make flashcards from your text
        </Typography>
        <Button 
          variant="contained" 
          size="large"
          sx={{ 
            mt: 2, 
            backgroundColor: '#9b59b6', 
            '&:hover': { 
              backgroundColor: '#8e44ad' 
            } 
          }}
        >
          Get Started
        </Button>
      </Box>

      <Box sx={{ my: 6, backgroundColor: '#ecf0f1', padding: 4, borderRadius: 2 }}>
        <Typography variant="h4" component="h2" sx={{ color: '#9b59b6', mb: 3, textAlign: 'center' }}>
          Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h1" sx={{ color: '#f1c40f', mb: 2, textAlign: 'center' }}>
                  <EmojiIcon label="books" symbol="📚" />
                </Typography>
                <Typography variant="h6" sx={{ color: '#f1c40f' }}>
                  Easy Text Input
                </Typography>
                <Typography sx={{ color: '#34495e' }}>
                  Simply input your text and let the software do the rest. Creating flashcards has never been easier.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h1" sx={{ color: '#f1c40f', mb: 2, textAlign: 'center' }}>
                  <EmojiIcon label="organization" symbol="🗂️" />
                </Typography>
                <Typography variant="h6" sx={{ color: '#f1c40f' }}>
                  Smart Organization
                </Typography>
                <Typography sx={{ color: '#34495e' }}>
                  Keep your flashcards organized effortlessly with intuitive sorting and categorization.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h1" sx={{ color: '#f1c40f', mb: 2, textAlign: 'center' }}>
                  <EmojiIcon label="brain" symbol="🧠" />
                </Typography>
                <Typography variant="h6" sx={{ color: '#f1c40f' }}>
                  Study Efficiently
                </Typography>
                <Typography sx={{ color: '#34495e' }}>
                  Utilize advanced algorithms to optimize your study sessions for better retention.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ my: 6, textAlign: 'center' }}>
        <Typography variant="h4" sx={{ mb: 4 }}>Pricing</Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>Basic</Typography>
                <Typography variant="h4" gutterBottom>$5 / month</Typography>
                <Typography>
                  Access to Basic Flashcard and Limited Storage.
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                <Button variant="contained" color="primary">Choose Basic</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', backgroundColor: '#f1c40f' }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>Pro</Typography>
                <Typography variant="h4" gutterBottom>$10 / month</Typography>
                <Typography>
                  Unlimited Flashcards, Advanced Features, and Priority Support.
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                <Button variant="contained" color="primary">Choose Pro</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Box component="footer" sx={{ bgcolor: '#34495e', py: 6, color: 'white', borderRadius: 2 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="space-between">
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom>
                About Us
              </Typography>
              <Typography variant="body2">
                We're dedicated to making learning easier and more efficient through our flashcard technology.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom>
                Contact
              </Typography>
              <Typography variant="body2">
                Email: support@flashcardsaas.com
              </Typography>
              <Typography variant="body2">
                Phone: (123) 456-7890
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom>
                Follow Us
              </Typography>
              <Typography variant="body2">
                Twitter | Facebook | Instagram
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="body2" sx={{ mt: 5 }}>
            © 2024 Flashcard SaaS. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Container>
  );
}