import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";

const BMICalculator = () => {
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      weight: "",
      height: "",
    },
  });

  const calculateBMI = (weight, height) => {
    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    let category = "";
    if (bmiValue < 18.5) category = "Underweight";
    else if (bmiValue >= 18.5 && bmiValue <= 24.9) category = "Normal weight";
    else if (bmiValue >= 25 && bmiValue <= 29.9) category = "Overweight";
    else category = "Obesity";

    setBmi(bmiValue);
    setBmiCategory(category);
  };

  // Form submit handler
  const onSubmit = (data) => {
    const { weight, height } = data;
    calculateBMI(weight, height);
    reset();
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        BMI Calculator
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Weight Field */}
        <Controller
          name="weight"
          control={control}
          rules={{
            required: "Weight is required",
            min: { value: 1, message: "Weight must be greater than 0" },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              type="number"
              label="Weight (kg)"
              fullWidth
              margin="normal"
              error={!!errors.weight}
              helperText={errors.weight?.message}
            />
          )}
        />

        {/* Height Field */}
        <Controller
          name="height"
          control={control}
          rules={{
            required: "Height is required",
            min: { value: 30, message: "Height must be greater than 30 cm" },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              type="number"
              label="Height (cm)"
              fullWidth
              margin="normal"
              error={!!errors.height}
              helperText={errors.height?.message}
            />
          )}
        />

        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
          Calculate
        </Button>
      </form>

      {bmi && (
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6">Your BMI: {bmi}</Typography>
          <Typography variant="subtitle1">Category: {bmiCategory}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default BMICalculator;
