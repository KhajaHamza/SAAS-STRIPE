import React, { useState } from 'react';
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { 
  AppBar, Box, Button, Container, Toolbar, Typography, Grid, Card, CardContent, CardActions,
  TextField, Switch, Accordion, AccordionSummary, AccordionDetails, FormControlLabel
} from "@mui/material";
import Head from "next/head";

// Helper component for emoji icons
const EmojiIcon = ({ label, symbol }) => <span role="img" aria-label={label}>{symbol}</span>;

// Sample Flashcard Component
const Flashcard = ({ front, back }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <Card 
      sx={{ 
        height: 200, 
        width: 300, 
        perspective: '1000px', 
        cursor: 'pointer',
        transformStyle: 'preserve-3d',
        transition: 'transform 0.6s',
        transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
      }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <CardContent sx={{ 
        height: '100%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        backfaceVisibility: 'hidden',
        position: 'absolute',
        width: '100%',
        transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
      }}>
        <Typography variant="h6">{isFlipped ? back : front}</Typography>
      </CardContent>
    </Card>
  );
};

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [email, setEmail] = useState('');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleNewsletterSignup = (e) => {
    e.preventDefault();
    // Handle newsletter signup logic here
    console.log('Signed up with email:', email);
    setEmail('');
  };

  return (
    <Container maxWidth="lg" sx={{ bgcolor: darkMode ? '#121212' : 'background.default', color: darkMode ? 'white' : 'text.primary' }}>
      <Head>
        <title>Flashcard SaaS</title>
        <meta name="description" content="Create flashcards from your text" />
      </Head>
      <AppBar position="static" sx={{ backgroundColor: darkMode ? '#121212' : '#9b59b6' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, color: '#ffffff' }}>Flashcard SaaS</Typography>
          <TextField 
            placeholder="Search flashcards" 
            variant="outlined" 
            size="small" 
            sx={{ mr: 2, backgroundColor: 'white' }}
          />
          <FormControlLabel
            control={<Switch checked={darkMode} onChange={toggleDarkMode} />}
            label="Dark Mode"
          />
          <SignedOut>
            <Button color="inherit">Log In</Button>
            <Button color="inherit">Sign Up</Button>
          </SignedOut>
          <SignedIn>  
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>
      
      {/* Hero Section */}
      <Box
        sx={{
          textAlign: 'center',
          my: 4,
          backgroundColor: darkMode ? '#1E1E1E' : '#f1c40f',
          color: darkMode ? 'white' : '#34495e',
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

      {/* Features Section */}
      <Box sx={{ my: 6, backgroundColor: darkMode ? '#1E1E1E' : '#ecf0f1', padding: 4, borderRadius: 2 }}>
        <Typography variant="h4" component="h2" sx={{ color: darkMode ? 'white' : '#9b59b6', mb: 3, textAlign: 'center' }}>
          Features
        </Typography>
        <Grid container spacing={4}>
          {/* ... (previous feature cards) ... */}
        </Grid>
      </Box>

      {/* Sample Flashcard */}
      <Box sx={{ my: 6, textAlign: 'center' }}>
        <Typography variant="h4" sx={{ mb: 4 }}>Try a Sample Flashcard</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Flashcard front="What is the capital of France?" back="Paris" />
        </Box>
      </Box>

      {/* Pricing Section */}
      <Box sx={{ my: 6, textAlign: 'center' }}>
        <Typography variant="h4" sx={{ mb: 4 }}>Pricing</Typography>
        <Grid container spacing={4} justifyContent="center">
          {/* ... (previous pricing cards) ... */}
        </Grid>
      </Box>

      {/* FAQ Section */}
      <Box sx={{ my: 6 }}>
        <Typography variant="h4" sx={{ mb: 4, textAlign: 'center' }}>Frequently Asked Questions</Typography>
        <Accordion>
          <AccordionSummary>
            <Typography>How do I create flashcards?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Simply input your text into our system, and our AI will automatically generate flashcards for you. You can also create custom flashcards manually.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            <Typography>Can I export my flashcards?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, you can export your flashcards in various formats including PDF, CSV, and our proprietary format for backup purposes.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* Add more FAQ items as needed */}
      </Box>

      {/* Newsletter Signup */}
      <Box sx={{ my: 6, textAlign: 'center' }}>
        <Typography variant="h4" sx={{ mb: 4 }}>Stay Updated</Typography>
        <form onSubmit={handleNewsletterSignup}>
          <TextField
            label="Email Address"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mr: 2 }}
          />
          <Button type="submit" variant="contained" color="primary">
            Sign Up for Newsletter
          </Button>
        </form>
      </Box>

      {/* Footer */}
      <Box component="footer" sx={{ bgcolor: darkMode ? '#1E1E1E' : '#34495e', py: 6, color: 'white', borderRadius: 2 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="space-between">
            {/* ... (previous footer content) ... */}
          </Grid>
          <Typography variant="body2" sx={{ mt: 5 }}>
            © 2024 Flashcard SaaS. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Container>
  );
}