// ===== Types =====
import React, { Suspense, useState, useEffect, lazy, memo } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import Skeleton from '@mui/material/Skeleton';
import { Auth } from 'aws-amplify';
import SimpleState from '../subcomponents/SimpleState';
import { SeverityPill } from 'components/severity-pill';

interface UserInfo {
  points: number;
  userType: number;
  characters: number;
  tokenUsage: number;
  useremail: string;
  permission: string;
  accesscode: string;
  loading: boolean;
}

interface LinearProps {
  linearValue: number;
  description: string;
}

// ===== Subcomponents =====
const LinearBalance: React.FC<LinearProps> = memo(({ linearValue, description }) => (
  <CardContent>
    <LinearProgress sx={{ minWidth: '100px' }} value={linearValue} variant="determinate" />
    <Box sx={{ mt: 1 }}>
      <Typography component="span" color="textSecondary" variant="subtitle2">
        {description}
      </Typography>
    </Box>
  </CardContent>
));

const UserCardDetailsList = lazy(() => import('./UserCardDetailsList'));

// ===== Main Component =====
const AccountGeneralSettings: React.FC = () => {
  const [progress, setProgress] = useState<UserInfo>({
    points: 1,
    userType: 1,
    characters: 0,
    tokenUsage: 0,
    useremail: '',
    permission: 'Free',
    accesscode: '',
    loading: true,
  });

  // 👉 Fetch usage data
  const fetchData = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const token = (await Auth.currentSession()).getIdToken().getJwtToken();
      const response = await fetch('https://api.maila.ai/data-usage', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: JSON.stringify({ username: user.username }),
      });
      const data = await response.json();
      setProgress({ ...data, loading: false });
    } catch {
      setProgress(prev => ({ ...prev, loading: false }));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const wordDesc = `${Math.round(progress.characters / 4)} of 10000 words`;

  return (
    <Grid container spacing={2}>
      {/* 🔢 Usage Summary */}
      <Grid item lg={4} md={6} xl={3} xs={12}>
        <Card>
          <CardContent>
            <SimpleState
              label="Characters usage"
              number={!progress.loading ? progress.characters : <Skeleton width={80} />}
              label2="Token usage"
              number2={!progress.loading ? progress.tokenUsage : <Skeleton width={80} />}
            />
          </CardContent>
        </Card>
      </Grid>

      {/* 👤 User Details */}
      <Grid item lg={8} md={6} xl={9} xs={12}>
        <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={200} />}>
          <UserCardDetailsList
            title="User Information"
            emailLabel="Email"
            email={!progress.loading ? progress.useremail : 'Loading...'}
            name1="Access Code"
            value1={!progress.loading ? progress.accesscode : 'Loading...'}
            name2="Point"
            value2={!progress.loading ? progress.points.toString() : 'Loading...'}
            userTypeLabel="User Type"
            userType={
              progress.loading ? (
                <Skeleton width={80} />
              ) : progress.userType === 3 ? (
                <SeverityPill color="success">Premium</SeverityPill>
              ) : progress.userType === 2 ? (
                <SeverityPill color="primary">Premium subscription</SeverityPill>
              ) : (
                <>
                  <SeverityPill color="warning">Free Trial</SeverityPill>
                  <LinearBalance linearValue={(progress.characters * 100) / 50000} description={wordDesc} />
                </>
              )
            }
            upgradeLabel={progress.userType > 2 ? null : 'Upgrade'}
          />
        </Suspense>
      </Grid>
    </Grid>
  );
};

export default AccountGeneralSettings;
