import React from "react";
import { useContacts } from "./useContacts";
import { ContactsTable } from "./ContactsTable";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    marginTop: "25px",
  },
  titleContacts: {
    marginBottom: "25px",
  },
});

export const Contacts = () => {
  const contacts = useContacts();
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container>
        <Grid item xs={12} className={classes.titleContacts}>
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
