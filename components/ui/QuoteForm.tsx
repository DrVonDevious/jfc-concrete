'use client'

import { Box, Button, Grid, TextField } from "@mui/material";

export default function QuoteForm() {
  return (
    <Box
      component='form'
      noValidate
    >
      <Grid
        container
        direction='column'
        spacing={2}
        minWidth={520}
        px={4}
      >
        <Grid item>
          <TextField
            required
            fullWidth
            id='email-address'
            label='Email'
            InputProps={{ style: { backgroundColor: 'white'}}}
          />
        </Grid>
        <Grid item>
          <TextField
            required
            fullWidth
            id='information'
            multiline
            rows={8}
            label='Project Details'
            InputProps={{ style: { backgroundColor: 'white'}}}
          />
        </Grid>
        <Grid item my={2} alignSelf='center'>
          <Button variant='contained'>
            Send Information
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}
