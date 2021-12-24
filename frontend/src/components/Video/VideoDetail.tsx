import { useTranslation } from 'next-i18next';
import React from 'react';
import ReactCountryFlag from 'react-country-flag';
import ReactPlayer from 'react-player';
import { FacebookShareButton, FacebookIcon } from 'react-share';

import { Card, CardContent, CardActions, Button, List, ListItemText, ListItem, ListItemAvatar, Avatar, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DateRangeIcon from '@material-ui/icons/DateRange';
import HelpIcon from '@material-ui/icons/Help';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import PregnantWomanIcon from '@material-ui/icons/PregnantWoman';
import ReportIcon from '@material-ui/icons/Report';
import SportsMmaIcon from '@material-ui/icons/SportsMma';

import { IDataProps } from '../../interfaces/interfaces';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
  },
  wrapper: {
    position: 'relative',
    paddingTop: '56.25%',
  },
  player: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
  },
  flagIcon: {
    position: 'relative',
  },
  tooltipIcon: {
    position: 'absolute',
    left: '7rem',
    top: '1rem',
  },
}));

interface ItemProps {
  data: IDataProps;
}

<<<<<<< HEAD
const VideoDetail = function ({ data }: ItemProps): JSX.Element {
=======
const VideoDetail = function({ data }: ItemProps): JSX.Element {
>>>>>>> f1866bbe5b615fa6e0e06bff7984854fa56d41b8
  const classes = useStyles();
  const { t } = useTranslation('common');

  const { offender, victim, date, country, countryCode, city, evidence, level } = data;

  return (
    <Card className={classes.root}>
<<<<<<< HEAD
      <CardContent>
        <List
        // sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <div className={classes.wrapper}>
            <ReactPlayer className={classes.player} url={evidence} width="100%" height="100%" />
          </div>
=======
        <CardContent>
          <List
          // sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <div className={classes.wrapper}>
              <ReactPlayer
                className={classes.player}
                url={evidence}
                width="100%"
                height="100%"
              />
            </div>
>>>>>>> f1866bbe5b615fa6e0e06bff7984854fa56d41b8

          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <ReactCountryFlag countryCode={countryCode} svg className={classes.flagIcon} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={t('Country')} secondary={country} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <MyLocationIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={t('City')} secondary={city} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <DateRangeIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={t('Date')} secondary={date} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <SportsMmaIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={t('Offender')} secondary={t(offender)} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <PregnantWomanIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={t('Victim')} secondary={t(victim)} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <ReportIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={t('Level')} secondary={level} />
            <Tooltip title="레벨1은 언어 폭력 / 레벨2는 폭행 / 레벨3은 살인, 강간 등 강력범죄">
              <HelpIcon className={classes.tooltipIcon} />
            </Tooltip>
          </ListItem>
        </List>
      </CardContent>

<<<<<<< HEAD
      <CardActions>
        <FacebookShareButton url="https://racism-report.vercel.app">
          <FacebookIcon size={48} round borderRadius={24} />
        </FacebookShareButton>

        <Button size="small" color="primary">
          {t('Share')}
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
=======
        <CardActions>
          <FacebookShareButton url="https://racism-report.vercel.app">
            <FacebookIcon size={48} round borderRadius={24} />
          </FacebookShareButton>

          <Button size="small" color="primary">
            {t("Share")}
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
>>>>>>> f1866bbe5b615fa6e0e06bff7984854fa56d41b8
  );
};

export default VideoDetail;
