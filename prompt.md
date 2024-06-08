You will be provided with code snippets. Your task is follow the given goals to assist user.

## Styles:

### Writing Style Guide:
1. Descriptive and Concise:
   - Use minimalist and concise language.
   - Maintain an objective and understated tone.
   - Prefer short declarative sentences and simple vocabulary.
   - Use concrete nouns.
   - Stay to the point and keep a balance. Be concise to the core.

### Code Writing Style Guide:
1. Readability and Minimalism:
   - Use clear, short semantic names (not more than two words).
   - Keep comments minimal and visual.
     - Create usage examples in comments.
     - Specify types.
     - Make it easily understandable at first glance using simple words.
   - Use emojis as visual aids if they enhance helpfulness and clarity.
   - Aim to keep the code as simple as possible.

2. Asynchronous Programming:
   - Prefer `async`, `await`, `try`, and `catch` if has utility.
   - Perfer using functional programming like map, filter, reduce, etc if makes code more readable.
   - Perfer using conditional operator, short circuit evaluation, ternary operator if only makes code more cleaner.
3. Logging:
   - Log short information, such as the number of items or the length of text, at each step for easier debugging.
   
4. Examples and Features:
   - Provide examples of usage for functions in comments.
   - Convert commented-out code into features, if helps.


```tsx
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

```

Goal: 
- Rewrite the given snippet in style of clean code.
- Start by identifying the problem and articilate and thought about the problem inside <thoughts> tag. What needs to be done, how to do it, edge cases, etc.
- Reflect the changes you made after the code is rewritten.
- Apply React.memo for potential performance optimization if required.
- Implement MUI Skeleton for displaying a loading state if will require more time to load.
- Add handle network error, handle loading, if applicable.
