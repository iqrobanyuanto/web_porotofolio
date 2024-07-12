import { Box, Typography} from "@mui/joy";
import portoData from "../data.json";
import CardItem from "./portoItem";

export default function Page() {

  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 10,
      padding: 5
    }}>
      <Typography level='h1'sx={{textTransform: 'capitalize'}}>my portofolio</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: 'center',
          gap: 10,
        }}
      >
        {portoData.map((porto, index) => (
          <CardItem key={index} porto={porto}/>
        ))}
      </Box>
    </Box>
  );
}
