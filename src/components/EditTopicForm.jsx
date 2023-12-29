"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTopicForm({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.push("/");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-5 space-y-3">
      <input
        className="outline-none w-full border px-5 py-2 focus:border-blue-500"
        type="text"
        name="title"
        placeholder="Topic Title"
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
      />
      <textarea
        className="outline-none w-full border px-5 py-2 focus:border-blue-500"
        name="description"
        placeholder="Topic Description"
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
      ></textarea>
      <button
        type="submit"
        className="bg-green-600 px-5 py-2 text-white active:scale-95 transition-all"
      >
        Update Topic
      </button>
    </form>
  );
}
