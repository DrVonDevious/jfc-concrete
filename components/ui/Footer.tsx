import { Grid, Link, Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
  return (
    <React.Fragment>
      <Grid
        container
        direction='row'
        justifyContent='center'
        columnSpacing={2}
        sx={{
          borderTop: 1,
          borderColor: 'divider',
          width: '100%',
          position: 'fixed',
          bottom: 0,
          left: 16,
          py: 1,
          backgroundColor: 'white'
        }}
      >
        <Grid item sx={{ display: 'flex' }}>
          <Typography pr={2}>
            Email:
          </Typography>
          <Link
            href='https://www.linkedin.com/in/william-rutland/'
            underline='none'
          >
            jfc.concreteco@gmail.com
          </Link>
        </Grid>
        <Grid item sx={{ display: 'flex' }}>
          <Typography pr={2}>
            Phone:
          </Typography>
          <Link
            href='https://www.linkedin.com/in/william-rutland/'
            underline='none'
          >
            482-142-2992
          </Link>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
