import { Card, CardContent, Typography } from "@mui/joy";

export default function Page({porto}) {

    return (
      <Card sx={{width: '25vw'}}>
        <CardContent>
          <Typography level="h1">{porto.title}</Typography>
          <Typography level='body-md'>{porto.description}</Typography>
        </CardContent>
      </Card>
    );
}