import { Fragment, useState } from "react";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Typography from "@mui/material/Typography";

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

// Define the available plan options
const planOptions: PlanOption[] = [
  {
    id: "1",
    description: "Free 10,000 word per month",
    label: "Free",
    priceOptions: [
      {
        chargeType: "monthly",
        amount: 0,
      },
      {
        chargeType: "yearly",
        amount: 0,
      },
    ],
    value: "free",
    status: true,
  },
  {
    id: "2",
    description: "1M word/month",
    label: "Premium beta",
    priceOptions: [
      {
        chargeType: "monthly",
        amount: "9.8 USD",
      },
      {
        chargeType: "yearly",
        amount: "98 USD",
      },
    ],
    value: "Premium Beta",
    status: true,
  },
];

// Component for displaying and selecting billing plans
export const BillingPlanCardContent: React.FC = () => {
  // Initialize formik for form handling
  const formik = useFormik({
    initialValues: {
      plan: "free",
      submit: null,
    },
    validationSchema: Yup.object().shape({
      plan: Yup.mixed().oneOf(planOptions.map((option) => option.value)),
    }),
    onSubmit: async (values, helpers) => {
      try {
        helpers.setStatus({ success: true });
        helpers.setSubmitting(false);
      } catch (err) {
        console.error(err);
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    },
  });

  // State for handling the charge type (monthly/yearly)
  const [chargeType, setChargeType] = useState<string>("monthly");

  // Handler for changing the charge type
  const handleChargeTypeChange = (
    event: React.MouseEvent<HTMLElement>,
    newChargeType: string | null
  ) => {
    if (newChargeType) {
      setChargeType(newChargeType);
    }
  };

  return (
    <>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          px: 3,
          py: 2,
        }}
      >
        <Typography color='textPrimary' sx={{ mr: 3 }} variant='subtitle2'>
          Billing
        </Typography>
        <ToggleButtonGroup
          exclusive
          onChange={handleChargeTypeChange}
          size='small'
          value={chargeType}
        >
          <ToggleButton value='monthly'>Monthly</ToggleButton>
          <ToggleButton value='yearly'>Yearly</ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Divider />
      <RadioGroup
        name='plan'
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.plan}
      >
        {planOptions.map((option) => (
          <Fragment key={option.id}>
            <FormControlLabel
              disableTypography
              control={
                <Radio
                  {...(option.status ? {} : { disabled: true })}
                  color='primary'
                />
              }
              label={
                <Box
                  sx={{
                    alignItems: "center",
                    display: "flex",
                    width: "100%",
                  }}
                >
                  <div>
                    <Typography color='textPrimary' variant='body1'>
                      {option.label}
                    </Typography>
                    <Typography color='textSecondary' variant='caption'>
                      {option.description}
                    </Typography>
                  </div>
                  <Box sx={{ flexGrow: 1 }} />
                  <Typography color='textPrimary' variant='h5'>
                    {
                      option.priceOptions.find(
                        (priceOption: PriceOption) =>
                          priceOption.chargeType === chargeType
                      )?.amount
                    }
                  </Typography>
                </Box>
              }
              sx={{
                m: 0,
                px: 3,
                py: 1.5,
              }}
              value={option.value}
            />
            <Divider />
          </Fragment>
        ))}
      </RadioGroup>
      {formik.touched.plan && formik.errors.plan && (
        <FormHelperText error>{formik.errors.plan}</FormHelperText>
      )}
      {formik?.errors?.submit && (
        <FormHelperText error sx={{ mt: 2 }}>
          {typeof formik.errors.submit === "string"
            ? formik.errors.submit
            : JSON.stringify(formik.errors.submit)}
        </FormHelperText>
      )}
    </>
  );
};

export default BillingPlanCardContent;
