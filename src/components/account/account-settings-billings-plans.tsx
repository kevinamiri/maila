import React, { memo, Fragment, useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Divider, FormControlLabel, FormHelperText, Radio, RadioGroup, ToggleButton, ToggleButtonGroup, Typography, Skeleton, Alert } from "@mui/material";

// Define the structure of a plan option
interface PlanOption {
  id: string;
  description: string;
  label: string;
  priceOptions: PriceOption[];
  value: string;
  status: boolean;
}

// Define the structure of a price option
interface PriceOption {
  chargeType: string;
  amount: string | number;
}

const AccountSettingsBillingsPlans: React.FC = () => {
  const [chargeType, setChargeType] = useState<string>("monthly");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [planOptions, setPlanOptions] = useState<PlanOption[]>([]);

  useEffect(() => {
    const fetchPlanOptions = async () => {
      try {
        // const response = await fetch('https://api.example.com/plan-options');
        const response =  [
          { id: "1", description: "Free 10,000 word per month", label: "Free", priceOptions: [{ chargeType: "monthly", amount: 0 }, { chargeType: "yearly", amount: 0 }], value: "free", status: true },
          { id: "2", description: "1M word/month", label: "Premium beta", priceOptions: [{ chargeType: "monthly", amount: "9.8 USD" }, { chargeType: "yearly", amount: "98 USD" }], value: "Premium Beta", status: true },
        ]
        // if (!response.ok) throw new Error('Failed to fetch plan options');
        // const data = await response.json();
        setPlanOptions(response);
      } catch (err) {
        setError('Failed to load plan options. Please try again later.');
        console.error('Error fetching plan options:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlanOptions();
  }, []);

  const formik = useFormik({
    initialValues: { plan: "free", submit: null },
    validationSchema: Yup.object().shape({
      plan: Yup.mixed().oneOf(planOptions.map(option => option.value)),
    }),
    onSubmit: async (values, helpers) => {
      setLoading(true);
      try {
        helpers.setStatus({ success: true });
        helpers.setSubmitting(false);
      } catch (err) {
        console.error("Network error:", err);
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      } finally {
        setLoading(false);
      }
    },
  });

  const handleChargeTypeChange = (event: React.MouseEvent<HTMLElement>, newChargeType: string | null) => {
    if (newChargeType) setChargeType(newChargeType);
  };

  if (loading) return <Skeleton variant="rectangular" width={300} height={200} />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <Box sx={{ alignItems: "center", display: "flex", flexDirection: "column" }}>
      <Box sx={{ alignItems: "center", display: "flex", px: 3, py: 2 }}>
        <Typography color="textPrimary" sx={{ mr: 3 }} variant="subtitle2">
          Billing
        </Typography>
        <ToggleButtonGroup exclusive onChange={handleChargeTypeChange} size="small" value={chargeType}>
          <ToggleButton value="monthly">Monthly</ToggleButton>
          <ToggleButton value="yearly">Yearly</ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Divider />
      <RadioGroup name="plan" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.plan}>
        {planOptions.map(option => (
          <Fragment key={option.id}>
            <FormControlLabel
              control={<Radio {...(option.status ? {} : { disabled: true })} color="primary" />}
              label={
                <Box sx={{ alignItems: "center", display: "flex", width: "100%" }}>
                  <div>
                    <Typography color="textPrimary" variant="body1">
                      {option.label}
                    </Typography>
                    <Typography color="textSecondary" variant="caption">
                      {option.description}
                    </Typography>
                  </div>
                  <Box sx={{ flexGrow: 1 }} />
                  <Typography color="textPrimary" variant="h5">
                    {option.priceOptions.find(priceOption => priceOption.chargeType === chargeType)?.amount}
                  </Typography>
                </Box>
              }
              sx={{ m: 0, px: 3, py: 1.5 }}
              value={option.value}
            />
            <Divider />
          </Fragment>
        ))}
      </RadioGroup>
      {formik.touched.plan && formik.errors.plan && <FormHelperText error>{formik.errors.plan as string}</FormHelperText>}
      {formik.errors.submit && <FormHelperText error sx={{ mt: 2 }}>{formik.errors.submit as string}</FormHelperText>}
    </Box>
  );
};

export default AccountSettingsBillingsPlans;
