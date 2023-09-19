import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
const steps = ["SELECCIONE IDIOMA", "SELECCIONE HORARIO", "MODALIDAD DE PAGO"];
// import TextField from '@mui/material/TextField';
import Autocomplete from "@mui/material/Autocomplete";
// import Stack from '@mui/material/Stack';
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";

const top100Films = [
  { label: "INGLES", year: 1994 },
  { label: "PORTUGUES", year: 1972 },
  { label: "QUECHUA", year: 1974 },
  { label: "AYMARA", year: 2008 },
  { label: "ITALIANO", year: 1957 },
  { label: "FRANCES", year: 1993 },
  { label: "CHINO MANDARIN", year: 1994 },
];

const top100Films1 = [
  { label: "abcThe Shawshank Redemption", year: 1994 },
  { label: "abcThe Godfather", year: 1972 },
  { label: "abcThe Godfather: Part II", year: 1974 },
  { label: "abcThe Dark Knight", year: 2008 },
  { label: "abc12 Angry Men", year: 1957 },
  { label: "abcSchindler's List", year: 1993 },
  { label: "abcPulp Fiction", year: 1994 },
];

export default function RegisterNote() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const [step1Data, setStep1Data] = useState({ label: '' });


  // State for step 1 form data
  const [step2Data, setStep2Data] = React.useState({ label: ""} );

  // State for step 2 form data
  // const [step3Data, setStep3Data] = React.useState({}); // State for step 3 form data
  // const [isActive, setIsActive] = React.useState(false);

  // const handleSubmit = () => {
  //   setIsActive(!isActive);
  // };

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };


  const handleReset = () => {
    setActiveStep(0);
  };

  const handleStep1Change = (event, newValue) => {
    setStep1Data({ ...step1Data, label: newValue?.label || '' });
  };

  const handleStep2Change = (event, newValue) => {
    setStep2Data({ ...step2Data, label: newValue?.label || '' });
  };

  // const handleStep3Change = (event) => {
  //   setStep3Data({ ...step3Data, [event.target.name]: event.target.value });
  // };

  //* save data step 1
  const handLeSubmitstep1 = (event) => {
    event.preventDefault();
    // Aquí puedes enviar los datos de step1Data al servidor o realizar otras acciones
    console.log('Datos enviados:', step1Data);
  };

  //* save data step 2

  const handLeSubmitstep2 = (event) => {
    event.preventDefault();
    // Aquí puedes enviar los datos de step1Data al servidor o realizar otras acciones
    console.log('Datos enviados:', step2Data);
  };


  return (
    <Box sx={{ width: "100%", marginTop: "100px" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );

        })}
      </Stepper>
      <Box sx={{ width: "80%", margin: "0 auto" }}>
        {activeStep === 0 && (
          <FormControl
            component={"form"}
            sx={{ width: "100%", margin: "0 auto", padding: "100px 100px" }}
            onSubmit={handLeSubmitstep1}
          >
            {/* <TextField
              label="Field for Step 1"
              name="fieldStep1"
              value={step1Data.fieldStep1 || ''}
              onChange={handleStep1Change}
            /> */}

            <Autocomplete
              disablePortal
              id="autocomplete"
              options={top100Films}
              sx={{ width: "100%" }}
              renderInput={(params) => (
                <TextField {...params} label="Selecciona Idioma" />
              )}
              
              value={
                top100Films.find(
                  (option) => option.label === step1Data.label
                ) || null
              }
              onChange={handleStep1Change}
            />

            <Button type="submit">Enviar</Button>
          </FormControl>
        )}

        {activeStep === 1 && (
          <FormControl
            sx={{ width: "100%", margin: "0 auto", padding: "100px 100px" }}
            onSubmit= { handLeSubmitstep2 }
          >
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={top100Films1}
              sx={{ width: "100%" }}
              renderInput={(params) => (
                <TextField {...params} label="seleccione Horario" />
              )}

              value={
                top100Films1.find(
                  (option) => option.label === step2Data.label
                ) || null
              }
              onChange={handleStep2Change}
            />
          </FormControl>
        )}
        {activeStep === 2 && (
          <Box sx={{ width: "100%", margin: "0 auto", padding: "50px 50px" }}>
            <TabContext value={value} sx={{ width: "100%" }} centered>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }} centered>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  sx={{ width: "100%", margin: "0 auto" }}
                  centered
                >
                  <Tab label="PAGO ONLINE" value="1" />
                  <Tab label="BANCO DE LA NACION" value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">PAGO ONLINE</TabPanel>
              <TabPanel value="2">BANCO DE LA NACION</TabPanel>
            </TabContext>
          </Box>
        )}
      </Box>

      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
