import { Card, CardContent, Box, Typography, Link, List, ListItem, Divider } from "@mui/joy";

export default function Page({data_head, data}) {
  return (
    <Card>
      <CardContent>
        <Typography level="title-lg">Evidences</Typography>
        <Divider />
        <List>
          {data.map((item, index) => (
            <ListItem>
              <Box sx={{mb:2}}>
                <Typography key={index} level="body-lg">
                  {data_head[index]}
                </Typography>
                <Divider/>
                <Link key={index} href={item}>
                  <Typography key={index} level="body-lg">
                    {item}
                  </Typography>
                </Link>
              </Box>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
