import { Button, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

function MaterialForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: "400px", margin: "auto" }}>
      <TextField
        label="Имя"
        fullWidth
        margin="normal"
        {...register("name", { required: "Имя обязательно" })}
        error={!!errors.name}
        helperText={errors.name ? errors.name.message : ""}
      />

      <TextField
        label="Email"
        type="email"
        fullWidth
        margin="normal"
        {...register("email", {
          required: "Email обязателен",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Неверный формат email",
          },
        })}
        error={!!errors.email}
        helperText={errors.email ? errors.email.message : ""}
      />

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Отправить
      </Button>
    </form>
  );
}

export default MaterialForm;
