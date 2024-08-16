import { Card, CardContent, Divider, Typography, List, ListItem, Link, Box} from "@mui/joy";


export default function Page({header, data}) {
    return (
      <Card sx={{
        width: "23vw",
        }}>
        <CardContent>
          <Typography level="title-lg">{header}</Typography>
          <Divider />
          <List marker="disc">
            {data.map((item, index) => (
              <ListItem key={index}>
                <Typography key={index} level="body-lg">
                  {item}
                </Typography>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    );
}