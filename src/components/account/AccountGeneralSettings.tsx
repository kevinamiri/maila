import * as React from "react";
import { Suspense } from "react";
// import { useSnackbar } from "notistack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import { Auth } from "aws-amplify";
import UserCardDetailsList from "./UserCardDetailsList";
import SimpleState from "../subcomponents/SimpleState";

interface userinfo {
  points: number;
  userType: number;
  characters: number;
  useremail: string;
  accesscode: string;
}
const AccountGeneralSettings = () => {
  const [progress, setProgress] = React.useState<userinfo>({
    points: 1,
    userType: 1,
    characters: 1,
    useremail: "",
    accesscode: "",
  });
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
    return res;
  };
  React.useEffect(() => {
    datasource().then(setProgress);
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item lg={4} md={6} xl={3} xs={12}>
        <Card>
          <CardContent>
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <Suspense fallback={<div>Loading...</div>}>
                <SimpleState
                  label='characters usage'
                  number={progress.characters}
                  precent={Math.round(progress.characters / 100000) * 100}
                />
              </Suspense>
            </Box>
          </CardContent>
          <CardActions>
            <Button color='primary' fullWidth variant='text'>
              More
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item lg={8} md={6} xl={9} xs={12}>
        <Suspense fallback={<div>Loading...</div>}>
          <UserCardDetailsList
            title='User Information'
            emailLabel='Email'
            email={progress.useremail}
            name1='Access Code'
            value1={progress.accesscode}
            name2='Point'
            value2={progress.points}
            upgradeLabel={
              progress.userType == 2
                ? "Manage Your Subscription"
                : "Upgrade Your Plan"
            }
          />
        </Suspense>
      </Grid>
    </Grid>
  );
};

export default AccountGeneralSettings;
