"use client";
import { useRouter } from "next/navigation";
import { HiOutlineTrash } from "react-icons/hi";
const RemoveBtn = ({ id }) => {
  const router = useRouter();
  const deleteTopic = async () => {
    await fetch(
      `https://nextjs-mongodb-crud-topaz.vercel.app/api/topics?id=${id}`,
      {
        method: "DELETE",
      }
    ).then((response) => {
      if (response.ok) {
        router.refresh();
      }
    });
  };

  return (
    <button onClick={deleteTopic} className="text-red-400">
      <HiOutlineTrash />
    </button>
  );
};

export default RemoveBtn;
