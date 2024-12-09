import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const ProfiForm = () => {
  const { register, watch, setValue, handleSubmit } = useForm({
    defaultValues: {
      accountType: "personal",
      businessName: "",
      taxNumber: "",
      personalName: "",
    },
  });

  // Наблюдение за типом аккаунта
  const accountType = watch("accountType");

  // Сброс полей, если выбран "Personal"
  useEffect(() => {
    if (accountType === "personal") {
      setValue("businessName", "");
      setValue("taxNumber", "");
    }
  }, [accountType, setValue]);

  const onSubmit = (data) => {
    console.log("Form data submitted:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="accountType">Account Type</label>
        <select id="accountType" {...register("accountType")}>
          <option value="personal">Personal</option>
          <option value="business">Business</option>
        </select>
      </div>

      {accountType === "business" && (
        <>
          <div>
            <label htmlFor="businessName">Business Name</label>
            <input
              id="businessName"
              {...register("businessName", { required: "Business name is required" })}
              placeholder="Enter your business name"
            />
          </div>
          <div>
            <label htmlFor="taxNumber">Tax Number</label>
            <input
              id="taxNumber"
              {...register("taxNumber", { required: "Tax number is required" })}
              placeholder="Enter your tax number"
            />
          </div>
        </>
      )}

      {accountType === "personal" && (
        <div>
          <label htmlFor="personalName">Your Name</label>
          <input
            id="personalName"
            {...register("personalName", { required: "Your name is required" })}
            placeholder="Enter your name"
          />
        </div>
      )}

      <button type="submit">Submit</button>
    </form>
  );
};

export default ProfiForm;
