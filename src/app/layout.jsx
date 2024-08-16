'use client'
import { Box,Typography } from "@mui/joy";
import { blueGrey, grey } from "@mui/material/colors";

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <Box component= "body" sx={{
        backgroundColor: blueGrey[900],
      }}>
        <Box sx={{
          display: "flex",
          justifyContent: "center",
          padding: 5
        }}>
          <Typography level='h1' textColor={grey[50]} sx={{fontSize: 57}}>My Portofolio</Typography>
        </Box>
        <main>{children}</main>
      </Box>
    </html>
  );
}