import { apiFetch } from "./api";

export const stdAdmUpload = async (uploadFile) => {
  try {
    const formData = new FormData();

    formData.append("stdAdmPhoto", uploadFile);
    const uploaded = await apiFetch(
      "http://localhost:3000/api/upload/stdAdmPhoto",
      {
        method: "POST",
        body: formData,
      },
    );

    const data = await uploaded.json();

    if (!uploaded.ok) {
      throw new Error(data.message || "Upload failed");
    }
    return data;
  } catch (error) {
    throw error;
  }
};
