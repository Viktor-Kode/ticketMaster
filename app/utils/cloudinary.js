// utils/cloudinary.js
export const uploadImageToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "ticketmaster"); // your unsigned preset name

  const res = await fetch(
    "https://api.cloudinary.com/v1_1/dqtgn3li4/image/upload", // replace with your cloud name
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await res.json();
  return data.secure_url; // the URL of uploaded image
};
