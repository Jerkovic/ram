import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "@mui/system";
import { Grid, Typography } from "@mui/material";

const OverlayContainer = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  zIndex: 1301,
  cursor: "wait",
});

interface LoadingOverlayProps {
  loading: boolean;
  text: string;
}

const LoadingOverlay = (props: LoadingOverlayProps) => (
  <>
    {props.loading && (
      <OverlayContainer>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={0}
        >
          <Grid item xs={12}>
            <CircularProgress color="inherit" />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ backgroundColor: "#fff" }}
            >
              {props.text}
            </Typography>
          </Grid>
        </Grid>
      </OverlayContainer>
    )}
  </>
);

export default LoadingOverlay;
