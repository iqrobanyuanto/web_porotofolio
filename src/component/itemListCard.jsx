import { Card, CardContent, Divider, Typography, List, ListItem, Link} from "@mui/joy";

export default function Page({header, data, type}) {
    return (
      <Card sx={{
        width: "23vw",
        }}>
        <CardContent>
          <Typography level="title-lg">{header}</Typography>
          <Divider />
          <List marker="disc">
            {data.map((item, index) => (
              <ListItem>
                {type == 'link'? 
                <Link key={index} href={item}>
                    <Typography key={index} level="body-lg">
                        {item}
                    </Typography>
                </Link> : 
                <Typography key={index} level="body-lg">
                  {item}
                </Typography>}
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    );
}