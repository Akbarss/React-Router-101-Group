import React from "react";
import { useForm } from "react-hook-form";

const WatchMultipleFields = () => {
  const { register, watch } = useForm();

  // Наблюдение за несколькими полями
  const { firstName, lastName } = watch(["firstName", "lastName"]);

  return (
    <form>
      <input {...register("firstName")} placeholder="First Name" />
      <input {...register("lastName")} placeholder="Last Name" />
      <p>
        Full name: {firstName} {lastName}
      </p>
    </form>
  );
};

export default WatchMultipleFields;
