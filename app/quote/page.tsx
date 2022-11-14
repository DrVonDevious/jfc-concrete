'use client'

import { Grid, Typography } from '@mui/material'
import QuoteForm from '../../components/ui/QuoteForm'

export default function quote() {
  return (
    <Grid
      container
      my={6}
      display='flex'
      justifyContent='center'
      alignItems='center'
      direction='column'
      sx={{ background: '#59A5D8' }}
    >
      <Typography
        variant='h6'
        sx={{ maxWidth: '500px', padding: '32px 32px 64px 32px'}}
        align='center'
        textAlign='center'
        alignItems='center'
        justifySelf='center'
        color='white'
      >
        Send us information about your project and we will get back to you with an estimated quote
      </Typography>
      <QuoteForm />
    </Grid>
  )
}
