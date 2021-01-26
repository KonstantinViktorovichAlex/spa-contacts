import React from "react";
import { useContacts } from "./useContacts";
import { ContactsTable } from "./ContactsTable";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  createStyles({
    root: {
      marginTop: theme.spacing(3),
    },
  });
});

export const Contacts = () => {
  const contacts = useContacts();
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h3" component="h1">
            Contacts
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {(() => {
            if (contacts.isLoading) {
              return <div>...loading</div>;
            }

            if (contacts.isError) {
              return <div>Error</div>;
            }
            return <ContactsTable data={contacts.data} />;
          })()}
        </Grid>
      </Grid>
    </Container>
  );
};
