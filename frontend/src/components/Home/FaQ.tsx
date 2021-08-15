import React from "react";

// Material UI
import {
  makeStyles,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {},
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

interface Props {}

function FaQ(props: Props): JSX.Element {
  const classes = useStyles();

  const accordionData = [
    {
      headings: "What is Recism?",
      details: "Nulla facilisi. Phasellus sollicitudin nulla et",
    },
    {
      headings: "Why did I make it?",
      details: " et et et et et ",
    },
    {
      headings: "How can I report the Racism?",
      details: " et et et et et ",
    },
    {
      headings: "어떻게 인종을 나누었나요",
      details: " et et et et et ",
    },
    {
      headings: "인종 범죄 종류가 뭔가요",
      details: " et et et et et ",
    },
  ];

  return (
    <div className="faq __block">
      <Typography variant="h5" gutterBottom>
        FaQ
      </Typography>
      {accordionData.map((accordion, i) => {
        const { headings, details } = accordion;
        return (
          <Accordion key={i}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>{headings}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{details}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}

export default FaQ;
