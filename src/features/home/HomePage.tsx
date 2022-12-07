import {
  Typography,
  Grid,
  Avatar,
  Box,
  Button,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  Link,
  Paper,
  TextField,
} from "@mui/material";
export default function HomePage() {
  /*  return <img src={"./images/LOGOBYHC.png"} alt="Logo" />; */
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url("./images/logoSmallVersion.png")',
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            //sx={{ m: 1, bgcolor: "secondary.main" }}
            sx={{ width: 156, height: 156 }}
            src="./images/LOGOBYHC3.png"
          ></Avatar>
          <Typography
            component="h1"
            variant="h5"
            fontStyle={"italic"}
            fontWeight={"bold"}
          >
            Rose
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <Typography
              component="h1"
              variant="h5"
              fontFamily={"Open Sans"}
              fontStyle={"italic"}
              gutterBottom
            >
              Rose is an e-commerce application designed to make life easier in
              this modern world.
            </Typography>
            <Typography
              component="h1"
              variant="h5"
              fontFamily={"Open Sans"}
              fontStyle={"italic"}
              gutterBottom
            >
              Our mission is to give everyone the opportunity to sell their
              products online and at the same time make it easier for everyone
              to buy their favorite things online.
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
