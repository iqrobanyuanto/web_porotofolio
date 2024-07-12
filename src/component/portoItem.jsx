import { Box, Card, CardContent, Typography} from "@mui/joy";
import ItemList from './itemListCard';

export default function Page({porto}) {
    return (
      <Card sx={{width: "25vw"}}>
        <CardContent sx={{
          gap: 2
        }}>
          <Box sx={{
            display: "flex",
            flexWrap: 'wrap',
            flexDirection: "column",
            gap: 0.5
          
          }}>
            <Typography level="h1">{porto.title}</Typography>
            <Typography level="body-lg">{porto.description}</Typography>
          </Box>
          <ItemList header="Position" data={porto.positions} />
          <ItemList header="Framework" data={porto.frameworks} />
          <ItemList header="Language" data={porto.languages} />
          <ItemList header="Evidence" data={porto.evidences} type="link" />
        </CardContent>
      </Card>
    );
}