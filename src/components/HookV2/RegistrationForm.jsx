import { Box, Button, TextField, Typography } from "@mui/material";
import { MuiTelInput } from "mui-tel-input";
import React from "react";
import { Controller, useForm } from "react-hook-form";

const RegistrationForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset(); // Сбрасываем форму после отправки
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Регистрация
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Имя */}
        <Controller
          name="firstName"
          control={control}
          rules={{
            required: "Имя обязательно",
            minLength: {
              value: 2,
              message: "Минимум 2 символа",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Имя"
              fullWidth
              margin="normal"
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
            />
          )}
        />

        {/* Фамилия */}
        <Controller
          name="lastName"
          control={control}
          rules={{
            required: "Фамилия обязательна",
            minLength: {
              value: 2,
              message: "Минимум 2 символа",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Фамилия"
              fullWidth
              margin="normal"
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
            />
          )}
        />

        {/* Email */}
        <Controller
          name="email"
          control={control}
          rules={{
            required: "Email обязателен",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Некорректный email",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              fullWidth
              margin="normal"
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          )}
        />

        {/* Номер телефона */}
        <Controller
          name="phone"
          control={control}
          rules={{
            required: "Номер телефона обязателен",
            validate: (value) => !!value || "Введите корректный номер телефона",
          }}
          render={({ field }) => (
            <MuiTelInput
              {...field}
              label="Телефон"
              fullWidth
              margin="normal"
              defaultCountry="US"
              error={!!errors.phone}
              helperText={errors.phone?.message}
            />
          )}
        />

        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }} disabled={isSubmitting}>
          {isSubmitting ? "Отправка..." : "Зарегистрироваться"}
        </Button>
      </form>
    </Box>
  );
};

export default RegistrationForm;
