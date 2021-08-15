import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button, Grid, Typography } from '@material-ui/core';
import teamData from '../Team/teamData';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width: 500,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: 12,
    outline: 'none',
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  list: {
    width: '100%'
  },
  listItemText: {
    paddingLeft: '1rem'
  }, 
  button: {
    position: "fixed", 
    bottom: 7, 
    right: 7
  }
}));

export default function ScheduleModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        className={classes.button}
        style={{ backgroundColor: "#000", color: "white", borderColor: "#fff", zIndex: 5 }}
        variant="outlined"
        onClick={handleOpen}>
        Schedule Now
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant='h5' style={{ color: '#598995' }}>Schedule With Simple Soul</Typography>
              </Grid>
              <List className={classes.list}>
                {teamData.map((member) => (
                  <a target='_blank' rel="noreferrer" href={member.link} style={{ textDecoration: 'none', color: 'inherit' }} key={`${member.name}-link`}>
                    <ListItem button key={member.name}>
                      <ListItemAvatar>
                        <Avatar alt={member.name} src={member.img} className={classes.avatar} />
                      </ListItemAvatar>
                      <ListItemText className={classes.listItemText} primary={member.name} secondary={member.location} />
                    </ListItem>
                  </a>
                ))}
              </List>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}