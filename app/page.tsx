
'use client'

import React from 'react';
import { Button, Grid, Typography } from '@mui/material'
import ImageCarousel from '../components/ui/ImageCarousel'
import Link from 'next/link';

export default function Home() {
  return (
    <Grid
      container
      alignItems='center'
      direction='column'
      sx={{ background: '#59A5D8' }}
    >
      <Typography
        variant='h6'
        sx={{ maxWidth: '816px', padding: '64px 16px'}}
        align='center'
        textAlign='center'
        alignItems='center'
        justifySelf='center'
        color='white'
      >
        This is some text describing the function of the company and what we do. Maybe a little bit about us, and why we can get the job done.
      </Typography>
      <ImageCarousel />
      <Link href='quote'>
        <Button
          variant='contained'
          sx={{ margin: '4em 0em'}}
        >
          Get A Quote
        </Button>
      </Link>
    </Grid>
  )
}
