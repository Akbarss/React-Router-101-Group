import React from "react";
import { useForm } from "react-hook-form";

const WatchSingleField = () => {
  const { register, watch } = useForm();

  // Наблюдение за одним полем
  const watchedName = watch("name");

  return (
    <form>
      <input {...register("name")} placeholder="Enter your name" />
      <p>Current value: {watchedName}</p>
    </form>
  );
};

export default WatchSingleField;
