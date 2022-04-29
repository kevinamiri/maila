import React from "react";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TypingEffect from "./TypingEffect";

const firstTwoWords = (string: string) =>
  string.split(" ").slice(0, 2).join(" ");

const afterTwo = (string: string) => string.split(" ").slice(2, 100).join(" ");
interface HomeHeroPageProps {
  title?: string;
  header?: string;
  cta?: string;
  labelbutton?: string;
  helpernotice?: string;
}

const HomeHeroPage: React.FC<HomeHeroPageProps> = ({
  header = "the here text",
  title = "the hero title",
  labelbutton = "Button name",
  cta = "Start writing with your first 10,000 words free trial and see if your work improves.",
  helpernotice = "These results are pre-generated and fully powered by AI",
}: HomeHeroPageProps) => {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <>
      <Grid
        container
        sx={{
          display: matches ? "flex !important" : "flex !important",
          backgroundColor: (theme) => theme.palette.background.paper,
          marginTop: "4rem",
        }}
        component='section'
      >
        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          sm={12}
          xs={12}
          sx={{
            marginTop: "4rem",
            backgroundColor: (theme) => theme.palette.background.paper,
          }}
        >
          <Box
            sx={{
              position: "relative",
              display: "flex",
              width: "100%",
              height: "100%",
            }}
          >
            <Grid
              container
              direction='column'
              justifyContent='center'
              alignItems='center'
              sx={{
                backgroundColor: (theme) => theme.palette.background.paper,
              }}
            >
              <Grid
                item
                sx={{
                  margin: "3rem",
                  backgroundColor: (theme) => theme.palette.background.paper,
                }}
                justifyContent='center'
                alignContent='center'
                component='header'
              >
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    mb: "1rem",
                  }}
                >
                  <Typography color='primary' variant='h1'>
                    {firstTwoWords(title) + " "}
                  </Typography>
                  <Typography color='success.main' variant='h1'>
                    {` ${afterTwo(title)}`}
                  </Typography>
                </Box>

                <Typography color='text.secondary' variant='body2'>
                  {header}
                </Typography>
                <Typography
                  sx={{ mt: 1 }}
                  color='text.secondary'
                  variant='body2'
                >
                  {cta}
                </Typography>
              </Grid>
              <Grid
                sx={{ mb: 3 }}
                item
                justifyContent='center'
                alignContent='center'
              >
                <Button href='/app' variant='contained'>
                  <Typography
                    variant='body2'
                    sx={{
                      color: "white",
                    }}
                  >
                    {labelbutton}
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          sm={10}
          xs={12}
          sx={{
            display: matches ? "flex !important" : "block !important",
          }}
        >
          <Box
            sx={{
              display: "flex",
              position: "relative",
              width: "100%",
              height: "100%",
            }}
          >
            <svg
              width='100%'
              height='100%'
              viewBox='0 0 3517 3075'
              version='1.1'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              xmlSpace='preserve'
              style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeLinejoin: "round",
                strokeMiterlimit: 2,
              }}
            >
              <g>
                <circle
                  cx='2789.91'
                  cy='2887.5'
                  r={188}
                  style={{ fill: "#75e3ea" }}
                />
                <circle
                  cx='1496.95'
                  cy='2737.5'
                  r={200}
                  style={{ fill: "#ffc278" }}
                />
                <circle
                  cx='2458.33'
                  cy='1297.08'
                  r={1000}
                  style={{ fill: "rgba(86, 248, 211, 0.86)" }}
                />
                <circle
                  cx='1600.95'
                  cy='2057.5'
                  r={1000}
                  style={{ fill: "rgba(255, 177, 230, 0.7)" }}
                />
                <circle
                  cx='1596.95'
                  cy='1157.5'
                  r={1000}
                  style={{ fill: "rgba(86, 100, 210, 0.8)" }}
                />
              </g>
            </svg>
            <Box
              sx={{
                position: "absolute",
                zIndex: 100,
                alignContent: "center",
                top: "0",
                width: "77%",
                right: "17%",
                marginTop: "19%",
              }}
            >
              <TypingEffect helpernote={helpernotice} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default HomeHeroPage;
