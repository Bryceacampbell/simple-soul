import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import GalleryListItem from "./GalleryListItem";
import axios from "axios";

const gallery = [
  {
    id: 1,
    imgUrl:
      "https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/109135306_337558323909161_2005087224939391288_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=105&_nc_ohc=mJTgZLKolA0AX8N0EyM&oh=6cd5934a826dc2711895cfa2eac896c3&oe=5F3BEAD7",
  },
  {
    id: 2,
    imgUrl:
      "https://scontent-lax3-2.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/107845315_746104409478067_845128011546920216_n.jpg?_nc_ht=scontent-lax3-2.cdninstagram.com&_nc_cat=107&_nc_ohc=KbZwOtO1nTcAX84TKl3&oh=9f86e76067941aa2f859d8acb6014cfc&oe=5F3F0F27",
  },
  {
    id: 3,
    imgUrl:
      "https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/108594909_574625826560705_1721125652431664825_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=105&_nc_ohc=SHZf4xdvFgUAX8s-Sk3&oh=39764565aee4bb20d34f65b74851a9a0&oe=5F3BA354",
  },
];

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

  {
    console.log(data);
  }
  return (
    <Grid container spacing={4}>
      {data.map((image) => (
        <Grid item xs={12} sm={4} key={image.id}>
          <GalleryListItem img={image} />
        </Grid>
      ))}
    </Grid>
  );
};

export default GalleryList;
