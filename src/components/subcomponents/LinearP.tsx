import React, { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Auth } from "aws-amplify";
import LinearProgress from "@mui/material/LinearProgress";
import CardContent from "@mui/material/CardContent";

function CircularProgressWithLabel(props) {
  return (
    <Box position='relative' display='inline-flex'>
      <CircularProgress variant='determinate' {...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position='absolute'
        display='flex'
        alignItems='center'
        justifyContent='center'
      >
        <Typography
          variant='caption'
          component='div'
          color='textSecondary'
        >{`${Math.round(props.value)}`}</Typography>
      </Box>
    </Box>
  );
}

export function LinearProgressBalance(props) {
  return (
    <CardContent>
      <LinearProgress
        sx={{ minWidth: "100px" }}
        value={props.linearValue}
        variant='determinate'
      />
      <Box sx={{ mt: 1 }}>
        <Typography color='textSecondary' variant='subtitle2'>
          {props.description}
        </Typography>
      </Box>
    </CardContent>
  );
}

export default function LinearP({ progressType }) {
  const [progress, setProgress] = React.useState(10);

  const datasource = async () => {
    const theUrl = `https://api.maila.ai/data-usage`;
    let params = {};
    const user = await Auth.currentAuthenticatedUser();
    params["username"] = user.username;
    const data = JSON.stringify(params);
    const response = await fetch(theUrl, {
      headers: {
        Authorization: `Bearer ${(await Auth.currentSession())
          .getIdToken()
          .getJwtToken()}`,
      },
      method: "POST",
      body: data,
    });
    const res = await response.json();
    const { points, characters } = res;
    const charsP = characters;
    return characters;
  };

  useEffect(() => {
    datasource().then(setProgress);
  }, []);

  const descr = `${Math.round(progress / 4)} of 25000 words`;
  return (
    <>
      {progressType ? (
        <CircularProgressWithLabel value={(progress * 100) / 100000} />
      ) : (
        <LinearProgressBalance
          linearValue={(progress * 100) / 100000}
          description={descr}
        />
      )}
    </>
  );
}
