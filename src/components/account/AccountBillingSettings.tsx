import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import usePayInfo from "../../hooks/usePayInfo";
import BillingPlanCardContent from "./BillingPlanCardContent";
import * as Yup from "yup";
import { Formik } from "formik";
import Redeemer from "./Redeemer";
import { SeverityPill } from "components/severity-pill";

const plans = [
  {
    id: "sub_JaPgh3l1s5x32V",
    object: "subscription",
    application_fee_percent: null,
    automatic_tax: {
      enabled: false,
    },
    billing_cycle_anchor: 1622481909,
    billing_thresholds: null,
    cancel_at: null,
    cancel_at_period_end: false,
    canceled_at: 1625504147,
    collection_method: "charge_automatically",
    created: 1622481909,
    current_period_end: 1627752309,
    current_period_start: 1625073909,
    customer: "cus_JaPgyyECNu5guM",
    days_until_due: null,
    default_payment_method: "pm_1IxErQB590gI84dnT26roVZv",
    default_source: null,
    default_tax_rates: [],
    discount: null,
    ended_at: 1625504147,
    items: {
      object: "list",
      data: [
        {
          id: "si_JaPgoJdKwN6QdU",
          object: "subscription_item",
          billing_thresholds: null,
          created: 1622481910,
          metadata: {},
          plan: {
            id: "price_1IwkG7B590gI84dnJQf4UIJE",
            object: "plan",
            active: true,
            aggregate_usage: null,
            amount: 980,
            amount_decimal: "989",
            billing_scheme: "per_unit",
            created: 1622364275,
            currency: "eur",
            interval: "month",
            interval_count: 1,
            livemode: false,
            metadata: {},
            nickname: null,
            product: "prod_JZu4FCD2qzlALz",
            tiers_mode: null,
            transform_usage: null,
            trial_period_days: null,
            usage_type: "licensed",
          },
          price: {
            id: "price_1IwkG7B590gI84dnJQf4UIJE",
            object: "price",
            active: true,
            billing_scheme: "per_unit",
            created: 1622364275,
            currency: "eur",
            livemode: false,
            lookup_key: null,
            metadata: {},
            nickname: null,
            product: "prod_JZu4FCD2qzlALz",
            recurring: {
              aggregate_usage: null,
              interval: "month",
              interval_count: 1,
              trial_period_days: null,
              usage_type: "licensed",
            },
            tiers_mode: null,
            transform_quantity: null,
            type: "recurring",
            unit_amount: 980,
            unit_amount_decimal: "980",
          },
          quantity: 1,
          subscription: "sub_JaPgh3l1s5x32V",
          tax_rates: [],
        },
      ],
      has_more: false,
      total_count: 1,
      url: "/v1/subscription_items?subscription=sub_JaPgh3l1s5x32V",
    },
    latest_invoice: "in_1J879xB590gI84dnACowTUGi",
    livemode: false,
    metadata: {},
    next_pending_invoice_item_invoice: null,
    pause_collection: null,
    pending_invoice_item_interval: null,
    pending_setup_intent: null,
    pending_update: null,
    plan: {
      id: "price_1IwkG7B590gI84dnJQf4UIJE",
      object: "plan",
      active: true,
      aggregate_usage: null,
      amount: false,
      amount_decimal: "980",
      billing_scheme: "per_unit",
      created: 1622364275,
      currency: "eur",
      interval: "month",
      interval_count: 1,
      livemode: false,
      metadata: {},
      nickname: null,
      product: "prod_JZu4FCD2qzlALz",
      tiers_mode: null,
      transform_usage: null,
      trial_period_days: null,
      usage_type: "licensed",
    },
    quantity: 1,
    schedule: null,
    start_date: 1622481909,
    status: false,
    transfer_data: null,
    trial_end: null,
    trial_start: null,
  },
];

const AccountBillingSettings = (props) => {
  const progress = usePayInfo(plans);

  let { current_period_end, current_period_start, plan } = progress;
  var start = (new Date(current_period_start * 1000) + "").slice(0, 24);
  var end = (new Date(current_period_end * 1000) + "").slice(0, 24);
  let ingo = progress.map((items) => items.current_period_start);

  return (
    <>
      <Card {...props}>
        <CardHeader title='Redeem a Discount Voucher' />
        <Divider />
        <CardContent>
          <Redeemer />
        </CardContent>
      </Card>
      <Card sx={{ mt: 2 }}>
        <CardHeader title='Manage your plan' />
        <Divider />
        <CardContent>
          {progress[0] && progress[0].status ? (
            progress.map((items, inx) => (
              <Paper key={inx} variant='outlined' sx={{ mb: 2 }}>
                <Box
                  sx={{
                    alignItems: {
                      lg: "center",
                      xs: "flex-start",
                    },
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    flexDirection: {
                      lf: "row",
                      xs: "column-reverse",
                    },
                    p: 3,
                    m: 2,
                  }}
                >
                  <div>
                    <Typography
                      color='textPrimary'
                      display='inline'
                      variant='h4'
                    >
                      {items.plan.amount && items.plan.amount / 100}{" "}
                      {items.plan.amount && items.plan.currency}
                    </Typography>
                    <Typography
                      color='textPrimary'
                      display='inline'
                      variant='subtitle1'
                    ></Typography>
                  </div>
                  <Box
                    sx={{
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <Typography
                      color='textSecondary'
                      sx={{ ml: 1 }}
                      variant='overline'
                    >
                      {items.plan.object && items.plan.object}
                    </Typography>
                  </Box>
                </Box>
                <Divider />
                <Box
                  sx={{
                    alignItems: {
                      lg: "center",
                      xs: "flex-start",
                    },
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    flexDirection: {
                      lg: "row",
                      xs: "column-reverse",
                    },
                    p: 3,
                  }}
                >
                  <div>
                    <Typography color='textPrimary' variant='body2'>
                      Start :{" "}
                      {(new Date(items.current_period_start * 1000) + "").slice(
                        0,
                        24
                      )}
                    </Typography>
                    <Typography color='textPrimary' variant='body2'>
                      End :{" "}
                      {(new Date(items.current_period_end * 1000) + "").slice(
                        0,
                        24
                      )}
                    </Typography>
                  </div>
                  <div>
                    <Typography color='textPrimary' variant='body2'>
                      Status :{" "}
                      {items.status === "active" ? (
                        <SeverityPill color='success'> Active</SeverityPill>
                      ) : (
                        items.status
                      )}
                    </Typography>
                    <Typography color='textPrimary' variant='body2'>
                      {
                        <Typography color='textPrimary' variant='body2'>
                          {items.canceled_at
                            ? "canceled_at: " +
                              (new Date(items.canceled_at * 1000) + "").slice(
                                0,
                                24
                              )
                            : ""}
                        </Typography>
                      }
                    </Typography>
                  </div>
                  <div>
                    {items.plan.canceled_at && (
                      <Typography color='textPrimary' variant='body2'>
                        canceled_at
                      </Typography>
                    )}
                  </div>
                </Box>
              </Paper>
            ))
          ) : (
            <BillingPlanCardContent />
          )}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              m: 1,
            }}
          >
            <Button
              color='secondary'
              size='small'
              variant='contained'
              disabled
              aria-label='cancel'
              sx={{
                m: 2,
              }}
            >
              Cancel
            </Button>
            <Button
              color='primary'
              size='small'
              variant='contained'
              href={"https://buy.stripe.com/cN27sP08H1Sn1Nu9AC"}
              sx={{
                m: 2,
              }}
              aria-label='upgrade plan'
              disabled={
                progress[0] && progress[0].status === "active" ? true : false
              }
            >
              Upgrade Plan
            </Button>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default AccountBillingSettings;
