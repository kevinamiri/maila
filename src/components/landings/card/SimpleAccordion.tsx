import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Define the properties for the PopUpCard component.
interface PopUpCardProps {
  title?: string;
  body?: string;
  id?: string;
  ariaControls?: string;
}

/**
 * SimpleAccordion is a functional component that displays a collapsible card with a title and body.
 * It uses the Material UI Accordion components for the UI.
 *
 * @param {PopUpCardProps} props - The properties passed to the component.
 * @returns {JSX.Element} - The rendered component.
 */
export default function SimpleAccordion({
  title = 'simple',
  body = 'answers',
  id,
  ariaControls,
}: PopUpCardProps): JSX.Element {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={ariaControls}
        id={id}
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{body}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}




import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

// Define the interface for QuestionListProps
interface QuestionListProps {
  questions: Array<[string, string]>;
}

// AccordionBlock Component
const AccordionBlock = ({ questions }: QuestionListProps) => {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{
          backgroundColor: (theme) => `${theme.palette.background.paper}`,
        }}
        component='section'
      >
        <Box sx={{ p: "5%" }}>
          {questions.map((question, index) => (
            <SimpleAccordion
              ariaControls={"question" + index}
              id={"header" + index}
              key={index}
              title={question[0]}
              body={question[1]}
            />
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

