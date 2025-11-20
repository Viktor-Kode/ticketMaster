"use client";

import { useState } from "react";
import { db } from "../firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { uploadImageToCloudinary } from "../utils/cloudinary";

export default function CreateEvent() {
  const [form, setForm] = useState({
    eventName: "",
    artistName: "",
    section: "",
    row: "",
    seat: "",
    date: "",
    location: "",
    ticketType: "",
    level: "",
    ticketCount: "",
    imageFile: null, // File object
  });

  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleImageChange = (e) => {
    setForm({ ...form, imageFile: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.imageFile) return alert("Please upload an image.");
    try {
      setUploading(true);

      // Upload image to Cloudinary
      const imageUrl = await uploadImageToCloudinary(form.imageFile);

      // Save event data to Firestore
      await addDoc(collection(db, "events"), {
        ...form,
        image: imageUrl,
        imageFile: null, // remove file object
        createdAt: Timestamp.now(),
      });

      alert("Event created successfully!");
      setForm({
        eventName: "",
        artistName: "",
        section: "",
        row: "",
        seat: "",
        date: "",
        location: "",
        ticketType: "",
        level: "",
        ticketCount: "",
        imageFile: null,
      });
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4"
      >
        <h1 className="text-2xl font-bold text-center mb-4">Create Event</h1>

        {[
          { label: "Event Name", name: "eventName" },
          { label: "Artist Name", name: "artistName" },
          { label: "Section", name: "section" },
          { label: "Row", name: "row" },
          { label: "Seat", name: "seat" },
          { label: "Date", name: "date", type: "date" },
          { label: "Location", name: "location" },
          { label: "Ticket Type", name: "ticketType" },
          { label: "Level", name: "level" },
          { label: "Number of Tickets", name: "ticketCount", type: "number" },
        ].map((input) => (
          <div key={input.name} className="flex flex-col">
            <label className="font-medium text-sm mb-1">{input.label}</label>
            <input
              type={input.type || "text"}
              name={input.name}
              value={form[input.name]}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}

        {/* Image upload */}
        <div className="flex flex-col">
          <label className="font-medium text-sm mb-1">Event Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="border border-gray-300 rounded-md px-3 py-2"
            required
          />
        </div>

        <button
          type="submit"
          disabled={uploading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition"
        >
          {uploading ? "Uploading..." : "Create Event"}
        </button>
      </form>
    </div>
  );
}
