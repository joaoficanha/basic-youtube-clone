import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'

const videoItem = ({video, onVideoSelect}) => {
    return (
        <Grid item xs={12} style={{border: '1px solid #707070'}}>
            <Paper style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}} onClick={() => onVideoSelect(video)}>
                <img style={{padding: '10px'}} alt="Video Thumbnail" src={video.snippet.thumbnails.medium.url}/>
                <Typography variant="subtitle1">{video.snippet.title}</Typography>
            </Paper>
        </Grid>
    )
}

export default videoItem