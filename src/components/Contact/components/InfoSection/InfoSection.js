import React from 'react'
import InfoCard from './InfoCard'
import {Grid} from '@material-ui/core'

const InfoSection = () => {
  return (
    <Grid spacing={5} style={{marginTop: '.5em'}} container justify='center'>
      <Grid item><InfoCard /></Grid>
      <Grid item><InfoCard /></Grid>
    </Grid>
  )
}

export default InfoSection
