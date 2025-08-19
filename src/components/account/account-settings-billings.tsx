import React, { memo, Suspense, lazy } from 'react';
import { Box } from '@mui/material';
import { Button } from '@mui/material';
import { Card } from '@mui/material';
import { CardProps } from '@mui/material';
import { CardHeader } from '@mui/material';
import { CardContent } from '@mui/material';
import { Divider } from '@mui/material';
import { Paper } from '@mui/material';
import { Typography } from '@mui/material';
import { Skeleton } from '@mui/material';

import { SeverityPill } from 'components/severity-pill';
import usePayInfo from '../../hooks/usePayInfo';

// ===================================
// 📐 Types
// ===================================
export interface AccountBillingSettingsProps extends CardProps {}

interface Plan {
  id: string;
  current_period_start: number;
  current_period_end: number;
  canceled_at?: number;
  status: string;
  plan: {
    amount: number;
    currency: string;
    object: string;
  };
}

// ===================================
// 🔢 Constants
// ===================================
const plans = [
  {
    id: 'sub_JaPgh3l1s5x32V',
    current_period_start: 1625073909,
    current_period_end: 1627752309,
    canceled_at: 1625504147,
    status: 'inactive',
    plan: {
      amount: 980,
      currency: 'eur',
      object: 'plan',
    },
  },
] as const;

// ===================================
// 🕒 Utils
// ===================================
const formatDate = (timestamp: number): string =>
  new Date(timestamp * 1000).toDateString();

// ===================================
// 🏷️ Components
// ===================================
const AccountSettingsBillingsPlans = lazy(() => import('./account-settings-billings-plans'));
const Redeemer = lazy(() => import('./Redeemer'));

const AccountBillingSettings = memo(
  ({ sx, ...cardProps }: AccountBillingSettingsProps) => {
    const planData = usePayInfo(plans);

    return (
      <>
        {/* 🎟️ Redeem Voucher Section */}
        <Card {...cardProps} sx={sx}>
          <CardHeader title="Redeem a Discount Voucher" />
          <Divider />
          <CardContent>
            <Suspense
              fallback={<Skeleton variant="rectangular" width="100%" height={118} />}
            >
              <Redeemer />
            </Suspense>
          </CardContent>
        </Card>

        {/* 📋 Manage Plan Section */}
        <Card sx={{ mt: 2 }}>
          <CardHeader title="Manage your plan" />
          <Divider />
          <CardContent>
            {planData.length ? (
              planData.map((item, index) => (
                <Paper key={index} variant="outlined" sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 3 }}>
                    <Typography variant="h4">
                      {item.plan.amount / 100} {item.plan.currency}
                    </Typography>
                    <Typography variant="overline">{item.plan.object}</Typography>
                  </Box>
                  <Divider />
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 3 }}>
                    <Box>
                      <Typography variant="body2">
                        Start: {formatDate(item.current_period_start)}
                      </Typography>
                      <Typography variant="body2">
                        End: {formatDate(item.current_period_end)}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="body2">
                        Status:{' '}
                        {item.status === 'active' ? (
                          <SeverityPill color="success">Active</SeverityPill>
                        ) : (
                          item.status
                        )}
                      </Typography>
                      {item.canceled_at && (
                        <Typography variant="body2">
                          Canceled at: {formatDate(item.canceled_at)}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                </Paper>
              ))
            ) : (
              <Suspense
                fallback={<Skeleton variant="rectangular" width="100%" height={118} />}
              >
                <AccountSettingsBillingsPlans />
              </Suspense>
            )}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', m: 1 }}>
              <Button
                color="secondary"
                size="small"
                variant="contained"
                disabled
                aria-label="cancel"
                sx={{ m: 2 }}
              >
                Cancel
              </Button>
              <Button
                color="primary"
                size="small"
                variant="contained"
                href="https://buy.stripe.com/cN27sP08H1Sn1Nu9AC"
                sx={{ m: 2 }}
                aria-label="upgrade plan"
                disabled={planData[0]?.status === 'active'}
              >
                Upgrade Plan
              </Button>
            </Box>
          </CardContent>
        </Card>
      </>
    );
  }
);

export default AccountBillingSettings;