import React from "react";
import { Paper, Typography } from "@material-ui/core";

import styles from './VideoDetail.module.css'

const videoDetail = ({ video }) => {
  if (!video)
    return (
      <div className={styles.Search}>
        <b>Pesquise um Video</b>
      </div>
    );

  console.log(video.id.videoId);

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <React.Fragment>
      <Paper elevation={1} style={{ height: "70%" }}>
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          src={videoSrc}
          title="Video Player"
          align="center"
        />
      </Paper>
      <Paper>
        <Typography variant="h4">
          {video.snippet.title} - {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle1">
          {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2">{video.snippet.description}</Typography>
      </Paper>
    </React.Fragment>
  );
};

export default videoDetail;
