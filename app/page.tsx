
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
        variant='h5'
        sx={{ maxWidth: '816px', padding: '64px 16px'}}
        align='center'
        textAlign='center'
        alignItems='center'
        justifySelf='center'
        color='white'
      >
        JFC Concrete Company is a family-owned and operated concrete business service. We've been providing services for more than 30 years in Houston and the surrounding areas. We offer a wide variety of services for commercial and residential concrete needs.
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
