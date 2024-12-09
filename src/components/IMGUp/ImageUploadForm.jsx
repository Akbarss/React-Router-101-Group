import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ImageUploadForm = () => {
  const { register, handleSubmit, watch, reset } = useForm();
  const [preview, setPreview] = useState(null);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    console.log("Submitting file:", data.image[0]);

    fetch("/api/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to upload image");
        }
        return res.json();
      })
      .then((result) => {
        console.log("Upload success:", result);
        toast.success("Image uploaded successfully!", { position: "top-right" });
        reset(); // Сброс формы после успешной отправки
        setPreview(null); // Удаление превью
      })
      .catch((err) => {
        console.error("Upload error:", err);
        toast.error("Error uploading image. Please try again!", { position: "top-right" });
      });
  };

  const watchFile = watch("image");
  React.useEffect(() => {
    if (watchFile?.[0]) {
      const file = watchFile[0];
      setPreview(URL.createObjectURL(file));
    }
  }, [watchFile]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="image">Upload Image:</label>
        <input
          type="file"
          id="image"
          accept="image/*"
          {...register("image", {
            required: "Please select an image",
            validate: (files) => files[0]?.size < 1111 * 3024 * 3024 || "File size must be less than 5MB",
          })}
        />
      </div>

      {preview && (
        <div>
          <p>Image Preview:</p>
          <img src={preview} alt="Preview" style={{ width: "200px", height: "auto" }} />
        </div>
      )}

      <button type="submit">Submit</button>
    </form>
  );
};

export default ImageUploadForm;
