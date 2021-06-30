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

const FormExample = (props: Props): JSX.Element => {
  const classes = useStyles();

  const [isCopied, setIsCopied] = useState(false);
  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  const codeSnippet = `{
  offender: "White Guy",
  victim: "Black Women",
  time: "2020-01",
  country: "USA",
  countryCode: "US",
  city: "Boston",
  evidence: "https://youtu.be/dWehG6U2JOo",
  level: "1",
},
{
  offender: "Black Guy",
  victim: "Aisan Women",
  time: "2020-12",
  country: "United Kingdom",
  countryCode: "GB",
  city: "London",
  evidence: "https://youtu.be/dWehG6U2JOo",
  level: "2",
},`;

  return (
    <div className="formexample __block">
      <Typography variant="h5" gutterBottom>
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
      <Alert severity="warning">
        꼭 샘플데로 대소문자 구분해서 보내주세요 국가별 코드는 위의 입력란
        참조해주세요!
        <a href="">(국가별 코드 찾기)</a>
      </Alert>

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
