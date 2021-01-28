import React, { useEffect, useState } from "react";
import { useContacts } from "./useContacts";
import { ContactsTable } from "./ContactsTable";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import { ToggleDataViewMode } from "./ToggleDataViewMode";

const useStyles = makeStyles({
  root: {
    marginTop: "25px",
  },
  titleContacts: {
    marginBottom: "25px",
  },
});

const DATA_VIEW_MODES = {
  TABLE: "table",
  GRID: "grid",
};

const getInitialDataViewMode = () => {
  return localStorage.getItem("dataViewMode") || DATA_VIEW_MODES.TABLE;
};

export const Contacts = () => {
  const contacts = useContacts();
  const classes = useStyles();
  const [dataViewMode, setDataViewMode] = useState(getInitialDataViewMode);

  useEffect(() => {
    localStorage.setItem("dataViewMode", dataViewMode);
  }, [dataViewMode]);

  return (
    <Container className={classes.root}>
      <Grid container>
        <Grid item xs={12} className={classes.titleContacts}>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h3" component="h1">
              Contacts
            </Typography>
            <ToggleDataViewMode
              dataViewMode={dataViewMode}
              setDataViewMode={setDataViewMode}
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          {(() => {
            if (contacts.isLoading) {
              return <CircularProgress />;
            }

            if (contacts.isError) {
              return <div>Error</div>;
            }

            if (dataViewMode === DATA_VIEW_MODES.TABLE) {
              return <ContactsTable data={contacts.data} />;
            }

            if (dataViewMode === DATA_VIEW_MODES.GRID) {
              return <div>GRID</div>;
            }

            return null;
          })()}
        </Grid>
      </Grid>
    </Container>
  );
};
