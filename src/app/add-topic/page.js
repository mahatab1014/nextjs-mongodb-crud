"use client";

import { revalidateTag } from "next/cache";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AddTopic = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const doc = {
      title,
      description,
    };

    try {
      const res = await fetch(
        "https://nextjs-mongodb-crud-topaz.vercel.app/api/topics",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(doc),
        }
      );
      if (res.ok) {
        router.push("/");
        router.refresh();
      }
    } catch (err) {}
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mt-5 space-y-3">
        <input
          className="outline-none w-full border px-5 py-2 focus:border-blue-500"
          type="text"
          name="title"
          placeholder="Topic Title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          className="outline-none w-full border px-5 py-2 focus:border-blue-500"
          name="description"
          placeholder="Topic Description"
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <button
          type="submit"
          className="bg-green-600 px-5 py-2 text-white active:scale-95 transition-all"
        >
          Add Topic
        </button>
      </form>
    </>
  );
};

export default AddTopic;
