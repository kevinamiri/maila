import React, { Suspense, useState, useEffect, lazy, memo } from "react";
import { Box, Card, CardContent, Grid, Typography, LinearProgress, Skeleton } from "@mui/material";
import { Auth } from "aws-amplify";
import SimpleState from "../subcomponents/SimpleState";
import { SeverityPill } from "components/severity-pill";

const UserCardDetailsList = lazy(() => import("./UserCardDetailsList"));

interface UserInfo {
  points: number;
  userType: number;
  characters: number;
  useremail: string;
  tokenUsage: number;
  permission: string;
  accesscode: string;
  loading: boolean;
}

const LinearProgressBalance = memo(({ linearValue, description }: { linearValue: number; description: string }) => (
  <CardContent>
    <LinearProgress sx={{ minWidth: "100px" }} value={linearValue} variant='determinate' />
    <Box sx={{ mt: 1 }}>
      <Typography component="span" color='textSecondary' variant='subtitle2'>
        {description}
      </Typography>
    </Box>
  </CardContent>
));

const AccountGeneralSettings = () => {
  const [progress, setProgress] = useState<UserInfo>({
    points: 1,
    userType: 1,
    characters: 0,
    tokenUsage: 0,
    useremail: "",
    permission: "Free",
    accesscode: "",
    loading: true,
  });

  const fetchData = async () => {
    try {
      const url = `https://api.maila.ai/data-usage`;
      const user = await Auth.currentAuthenticatedUser();
      const params = { username: user.username };
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`,
        },
        method: "POST",
        body: JSON.stringify(params),
      });
      const data = await response.json();
      setProgress({ ...data, loading: false });
    } catch (error) {
      console.error("Error fetching data", error);
      setProgress((prevState) => ({ ...prevState, loading: false }));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const descr = `${Math.round(progress.characters / 4)} of 10000 words`;

  return (
    <Grid container spacing={2}>
      <Grid item lg={4} md={6} xl={3} xs={12}>
        <Card>
          <CardContent>
            <SimpleState
              label='Characters usage'
              number={!progress.loading ? progress.characters : <Skeleton width={80} />}
              label2='Token usage'
              number2={!progress.loading ? progress.tokenUsage : <Skeleton width={80} />}
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid item lg={8} md={6} xl={9} xs={12}>
        <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={200} />}>
          <UserCardDetailsList
            title='User Information'
            emailLabel='Email'
            email={!progress.loading ? progress.useremail : "Loading..."}
            name1='Access Code'
            value1={!progress.loading ? progress.accesscode : "Loading..."}
            name2='Point'
            value2={!progress.loading ? progress.points.toString() : "Loading..."}
            userTypeLabel='User Type'
            userType={
              progress.loading ? (
                <Skeleton width={80} />
              ) : progress.userType === 3 ? (
                <SeverityPill color='success'>Premium</SeverityPill>
              ) : progress.userType === 2 ? (
                <SeverityPill color='primary'>Premium subscription</SeverityPill>
              ) : progress.userType === 1 ? (
                <>
                  <SeverityPill color='warning'>Free Trial</SeverityPill>
                  <LinearProgressBalance
                    linearValue={(progress.characters * 100) / 50000}
                    description={descr}
                  />
                </>
              ) : null
            }
            upgradeLabel={
              progress.userType !== 3 && progress.userType !== 2 ? "Upgrade" : null
            }
          />
        </Suspense>
      </Grid>
    </Grid>
  );
};

export default AccountGeneralSettings;
