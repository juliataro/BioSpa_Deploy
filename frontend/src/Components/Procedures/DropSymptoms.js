import React, { useEffect, useState, useContext } from "react";
import { GlobalContext } from "./../../Context";
import axios from "axios";

import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ReactTooltip from "react-tooltip";

// Styling the input
import { makeStyles } from "@material-ui/core/styles";

// For fetching data
import Grid from "@mui/material/Grid";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const { REACT_APP_API_URL } = process.env;

//////////////////////////////////////////////////////////////////////////////

//  TODO Extract list of diseases from db into dropdown list
function DropSymptoms() {
  const [symptoms, setSymptoms] = useState([]);
  const { symptomsValue, setSymptomsValue } = useContext(GlobalContext); // Catches chosen Symptoms in Dropdown

  // Fetch Symptoms in dropdown on PageLoad
  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get(`${REACT_APP_API_URL}/symptoms/all/et`);
      setSymptoms(response.data);
    };
    loadData();
  }, [setSymptoms]);

  function handleSelectChange(event, newValues) {
    setSymptomsValue(newValues.map((symptom) => symptom.symp_id));
    console.log(symptomsValue);
  }

  // Input TextField color on Focus
  const useStyles = makeStyles({
    focus: {
      // input label when focused
      "& label.Mui-focused": {
        color: "#72bb94",
        "& label.MuiFormLabel-root": {
          backgroundColor: "#fff",
          marginLeft: "-5px",
          padding: "0 6px",
        },
      },

      // focused color for input with variant='outlined'
      "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
          borderColor: "#72bb94",
        },
      },
    },
    tooltip: {
      fontSize: "18px !important",
    },
  });

  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12}>
        {/* -------------------------------------------------------------------------------------------------- */}
        {/* Dropdown element */}
        <Autocomplete
          onChange={handleSelectChange}
          data-tip="Leia endale soovitatud protseduurid" // Tooltip text
          multiple={true}
          id="valueId"
          options={symptoms}
          disableCloseOnSelect
          getOptionLabel={(option) => `${option.symp_title_et}`}
          variant="outlined"
          className={classes.focus}
          // onChange={handleChange}
          renderOption={(props, option, { setSymptomsValue }) => (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={setSymptomsValue}
              />
              {[option.symp_title_et]}
            </li>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Kaebused"
              // placeholder="Vali kaebused"
            />
          )}
        />

        <ReactTooltip
          // Tooltip styling
          className={classes.tooltip}
          arrow={false}
          backgroundColor="#4e5154"
        />
      </Grid>

      {/* -------------------------------------------------------------------------------------------------- */}
      {/* Fetching Procedures data from DataBase */}
    </Grid>
  );
}
export default DropSymptoms;
