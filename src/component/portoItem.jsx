import { Card, CardContent, Typography} from "@mui/joy";
import ItemList from './itemListCard';

export default function Page({porto}) {
    return (
      <Card sx={{ width: "25vw" }}>
        <CardContent>
          <Typography level="h1">{porto.title}</Typography>
          <Typography level="body-lg">{porto.description}</Typography>
          <ItemList header="Position" data={porto.positions} />
          <ItemList header="Framework" data={porto.frameworks} />
          <ItemList header="Language" data={porto.languages} />
          <ItemList header="Evidence" data={porto.evidences} type="link" />
        </CardContent>
      </Card>
    );
}