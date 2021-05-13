import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

interface Props {}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const FaQ = (props: Props) => {
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
  ];

  return (
    <>
      <Container maxWidth="lg">
        <Typography variant="h4" color="primary" gutterBottom>
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
      </Container>
    </>
  );
};

export default FaQ;
