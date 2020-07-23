import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import GalleryListItem from "./GalleryListItem";
import axios from "axios";

const GalleryList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        'https://instagram.com/graphql/query/?query_id=17888483320059182&variables={"id":"35178977820","first":10,"after":null}'
      );
      const results = res.data.data.user.edge_owner_to_timeline_media.edges;
      const picturesOnly = [];
      results.forEach(res => {
          if (picturesOnly.length < 3) {
              if (!res.node.is_video) {
                  picturesOnly.push(res.node.display_url)
              }
          }
      })
      setData(picturesOnly);
    };
    fetchData();
  }, []);
  return (
    <Grid container spacing={4}>
      {data.map((image, i) => (
        <Grid item xs={12} sm={4} key={i}>
          <GalleryListItem img={image} />
        </Grid>
      ))}
    </Grid>
  );
};

export default GalleryList;
