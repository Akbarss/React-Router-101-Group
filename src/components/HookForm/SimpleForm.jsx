import React from "react";
import { useForm } from "react-hook-form";

function SimpleForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Имя</label>
        <input {...register("name", { required: "Имя обязательно" })} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label>Email</label>
        <input
          {...register("email", {
            required: "Email обязателен",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Неверный формат email",
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <button type="submit">Отправить</button>
    </form>
  );
}

export default SimpleForm;

function SimpleFrm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [formData, setFormData] = useState(null); // Состояние для хранения результата

  const onSubmit = (data) => {
    setFormData(data); // Сохраняем данные формы
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Имя</label>
          <input {...register("name", { required: "Имя обязательно" })} />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        <div>
          <label>Email</label>
          <input
            {...register("email", {
              required: "Email обязателен",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Неверный формат email",
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <button type="submit">Отправить</button>
      </form>

      {/* Результат формы */}
      {formData && (
        <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc" }}>
          <h3>Результаты формы:</h3>
          <p>
            <strong>Имя:</strong> {formData.name}
          </p>
          <p>
            <strong>Email:</strong> {formData.email}
          </p>
        </div>
      )}
    </div>
  );
}
