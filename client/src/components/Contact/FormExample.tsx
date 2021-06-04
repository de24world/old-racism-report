import React, { useState } from "react";

// Libarary
import { CopyToClipboard } from "react-copy-to-clipboard";

// Material UI
import {
  makeStyles,
  withStyles,
  Typography,
  Tooltip,
} from "@material-ui/core/";
import Alert from "@material-ui/lab/Alert";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ControlPointDuplicateIcon from "@material-ui/icons/ControlPointDuplicate";

const useStyles = makeStyles((theme) => ({
  root: {},
  sampleSection: {
    position: "relative",
    backgroundColor: theme.palette.grey[100],
    padding: theme.spacing(2),
  },
  copyIcon: {
    position: "absolute",
    top: "1rem",
    right: "1rem",
  },
  explain: {
    padding: theme.spacing(2),
    display: "flex",
  },
}));

interface Props {}

const FormExample = (props: Props) => {
  const classes = useStyles();

  const [isCopied, setIsCopied] = useState(false);
  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  const codeSnippet = `{
  offender: "WHITE GUY",
  victim: "BLACK WOMEN",
  time: "2020-Jan",
  country: "USA",
  countryCode: "US",
  city: "BOSTON",
  evidence: "https://youtu.be/dWehG6U2JOo",
  level: "1",
},
{
  offender: "BLACK GUY",
  victim: "ASIAN WOMEN",
  time: "2020-Jan",
  country: "UNITED KINGDOM",
  countryCode: "GB",
  city: "LONDON",
  evidence: "https://youtu.be/dWehG6U2JOo",
  level: "2",
},`;

  return (
    <div className="formexample __block">
      <Typography variant="h4" color="primary" gutterBottom>
        Multiple Data example
      </Typography>

      <div className={classes.sampleSection}>
        <pre>
          <code>{codeSnippet}</code>
        </pre>
        <Tooltip title="Copy the Data" aria-label="copy">
          <CopyToClipboard
            className={classes.copyIcon}
            text={codeSnippet}
            onCopy={onCopyText}
          >
            <Typography>{isCopied ? "Copied!" : <FileCopyIcon />}</Typography>
          </CopyToClipboard>
        </Tooltip>
      </div>
      <Alert severity="warning">꼭 샘플데로 대소문자 구분해서 보내주세요</Alert>

      <div className={classes.explain}>
        <ControlPointDuplicateIcon /> &nbsp;
        <Typography variant="subtitle2">
          If you want to send us multiple Racism Report Data, you can copy over
          the example(Multiple Data exmaple). And please send directly our
          E-Mail &nbsp;
          <a href="mailto:de24world@gmail.com">de24world@gmail.com</a>
        </Typography>
      </div>
    </div>
  );
};

export default FormExample;