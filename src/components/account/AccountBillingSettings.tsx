import React, { Suspense, lazy, memo, useMemo } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Paper,
  Typography,
  Skeleton,
} from "@mui/material";
import { SeverityPill } from "components/severity-pill";
import usePayInfo from "../../hooks/usePayInfo";

const BillingPlanCardContent = lazy(() => import("./BillingPlanCardContent"));
const Redeemer = lazy(() => import("./Redeemer"));

const plans = [
  {
    id: "sub_JaPgh3l1s5x32V",
    current_period_start: 1625073909,
    current_period_end: 1627752309,
    canceled_at: 1625504147,
    status: "inactive",
    plan: {
      amount: 980,
      currency: "eur",
      object: "plan",
    },
  },
];

const formatDate = (timestamp: number): string =>
  new Date(timestamp * 1000).toDateString();

const AccountBillingSettings = memo((props) => {
  const progress = usePayInfo(plans);

  return (
    <>
      <Card {...props}>
        <CardHeader title="Redeem a Discount Voucher" />
        <Divider />
        <CardContent>
          <Suspense
            fallback={
              <Skeleton variant="rectangular" width="100%" height={118} />
            }
          >
            <Redeemer />
          </Suspense>
        </CardContent>
      </Card>
      <Card sx={{ mt: 2 }}>
        <CardHeader title="Manage your plan" />
        <Divider />
        <CardContent>
          {progress.length ? (
            progress.map((item, index) => (
              <Paper key={index} variant="outlined" sx={{ mb: 2 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", p: 3 }}>
                  <Typography variant="h4">
                    {item.plan.amount / 100} {item.plan.currency}
                  </Typography>
                  <Typography variant="overline">{item.plan.object}</Typography>
                </Box>
                <Divider />
                <Box sx={{ display: "flex", justifyContent: "space-between", p: 3 }}>
                  <div>
                    <Typography variant="body2">
                      Start: {formatDate(item.current_period_start)}
                    </Typography>
                    <Typography variant="body2">
                      End: {formatDate(item.current_period_end)}
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="body2">
                      Status:{" "}
                      {item.status === "active" ? (
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
                  </div>
                </Box>
              </Paper>
            ))
          ) : (
            <Suspense
              fallback={
                <Skeleton variant="rectangular" width="100%" height={118} />
              }
            >
              <BillingPlanCardContent />
            </Suspense>
          )}
          <Box sx={{ display: "flex", justifyContent: "flex-end", m: 1 }}>
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
              disabled={progress[0]?.status === "active"}
            >
              Upgrade Plan
            </Button>
          </Box>
        </CardContent>
      </Card>
    </>
  );
});

export default AccountBillingSettings;
