import React from "react";
import { Grid } from "@material-ui/core";

import VideoItem from "./VideoItem";

const videoList = ({ videos, onVideoSelect }) => {
  let listOfVideos = videos.map((video, id) => (
    <VideoItem onVideoSelect={onVideoSelect} key={id} video={video} />
  ));

  return (
    <Grid container spacing={0}>
      {listOfVideos}
    </Grid>
  );
};

export default videoList;
