import * as React from "react";
import { Card, CardContent, CardHeader } from "@mui/material";
import Typography from "@mui/material/Typography";

const Home = () => {
  return (
    <Card
      sx={{
        my: 3,
        minHeight: "60vh",
      }}
    >
      <CardHeader title="Section Title" />
      <CardContent>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Ut tempor auctor ante, ut porttitor risus pulvinar eget. Nullam odio
          felis, auctor vel tellus sed, molestie imperdiet lectus. Proin
          pretium, odio quis euismod eleifend, lacus elit varius tortor, at
          tempor sem tortor sit amet mauris. Curabitur nec gravida arcu. Donec
          faucibus lobortis elementum. Mauris ultricies maximus quam at
          suscipit. Proin id viverra ante, quis mattis dui. Nulla eu elit eu
          elit volutpat sagittis. Etiam egestas nulla tortor, sed pulvinar ante
          sollicitudin non. Phasellus lacinia fermentum dui non interdum. Nam
          condimentum, tortor ornare cursus dictum, massa sem gravida purus, non
          congue massa augue et massa. Sed erat ex, malesuada vel mi id,
          ultrices malesuada dui. Maecenas gravida, arcu a posuere auctor, elit
          ipsum dapibus massa, ac viverra magna orci id erat.
        </Typography>
        <Typography variant="h1" gutterBottom>
          h1. Heading
        </Typography>
        <Typography variant="h2" gutterBottom>
          h2. Heading
        </Typography>
        <Typography variant="h3" gutterBottom>
          h3. Heading
        </Typography>
        <Typography variant="h4" gutterBottom>
          h4. Heading
        </Typography>
        <Typography variant="h5" gutterBottom>
          h5. Heading
        </Typography>
        <Typography variant="h6" gutterBottom>
          h6. Heading
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quos blanditiis tenetur
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quos blanditiis tenetur
        </Typography>
        <Typography variant="body1" gutterBottom>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="body2" gutterBottom>
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="button" display="block" gutterBottom>
          button text
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
          caption text
        </Typography>
        <Typography variant="overline" display="block" gutterBottom>
          overline text
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Home;
