import * as React from "react";
import { Suspense } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import { Auth } from "aws-amplify";
import UserCardDetailsList from "./UserCardDetailsList";
import SimpleState from "../subcomponents/SimpleState";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import { SeverityPill } from "components/severity-pill";

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

interface userinfo {
  points: number;
  userType: number;
  characters: any;
  useremail: string;
  tokenUsage: any;
  permission: string;
  accesscode: string;
  loading: boolean;
}

const AccountGeneralSettings = () => {
  const [progress, setProgress] = React.useState<userinfo>({
    points: 1,
    userType: 1,
    characters: 0,
    tokenUsage: 0,
    useremail: "",
    permission: "Free",
    accesscode: "",
    loading: true,
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

  const descr = `${Math.round(Number(progress.characters) / 4)} of 10000 words`;

  return (
    <Grid container spacing={2}>
      <Grid item lg={4} md={6} xl={3} xs={12}>
        <Card>
          <CardContent>
            <SimpleState
              label='Characters usage'
              number={!progress.loading ? progress.characters : "Loading..."}
              label2='Token usage'
              number2={!progress.loading ? progress.tokenUsage : "Loading..."}
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid item lg={8} md={6} xl={9} xs={12}>
        <Suspense fallback={<div>Loading...</div>}>
          <UserCardDetailsList
            title='User Information'
            emailLabel='Email'
            email={!progress.loading ? progress.useremail : "Loading..."}
            name1='Access Code'
            value1={!progress.loading ? progress.accesscode : "Loading..."}
            name2='Point'
            value2={!progress.loading ? progress.points : "Loading..."}
            userTypeLabel='User Type'
            userType={
              progress.loading ? (
                "Loading..."
              ) : progress.userType === 3 ? (
                <SeverityPill color='success'> Premium</SeverityPill>
              ) : progress.userType === 2 ? (
                <SeverityPill color='primary'>
                  {" "}
                  Premium subscription
                </SeverityPill>
              ) : progress.userType === 1 ? (
                <>
                  <SeverityPill color='warning'> Free Trial</SeverityPill>
                  <LinearProgressBalance
                    linearValue={(Number(progress.characters) * 100) / 50000}
                    description={descr}
                  />
                </>
              ) : null
            }
            upgradeLabel={
              progress.userType !== 3 && progress.userType !== 2
                ? "Upgrade"
                : null
            }
          />
        </Suspense>
      </Grid>
    </Grid>
  );
};

export default AccountGeneralSettings;
