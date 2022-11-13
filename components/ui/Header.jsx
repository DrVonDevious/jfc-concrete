import React from 'react'
import Link from 'next/link'
import { Toolbar, Typography } from '@mui/material'

export default function Header() {
  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, background: 'white', borderColor: 'divider', width: '100%' }}>
          <Typography
            component='h2'
            variant='h5'
            color='inherit'
            align='center'
            noWrap
            sx={{ flex: 1 }}
          >
            <Link href='/'>
              JFC Concrete Company
            </Link>
          </Typography>
      </Toolbar>
    </React.Fragment>
  )
}
