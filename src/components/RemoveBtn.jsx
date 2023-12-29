"use client";
import { useRouter } from "next/navigation";
import { HiOutlineTrash } from "react-icons/hi";
const RemoveBtn = ({ id }) => {
  const router = useRouter();
  const deleteTopic = async () => {
    await fetch(`http://localhost:3000/api/topics?id=${id}`, {
      method: "DELETE",
    }).then((response) => {
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
