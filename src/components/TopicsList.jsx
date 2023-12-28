import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

//  const getTopics = async () => {
//   try {
//     const response = await fetch("http://localhost:3000/api/topics", {
//       cache: "no-store",
//     });

//     if (!response.ok) {
//       throw new Error("Error fetching topics");
//     }
//     return response.json();
//   } catch (e) {
//     console.log(e);
//   }
// };

const TopicsList = async () => {
  const res = await fetch("http://localhost:3000/api/topics", {
    cache: "no-store",
  });
  if (!res.ok) {
    console.log(`HTTP error! Status: ${res.status}`);
  }
  const { topics } = await res.json(); // Await the JSON parsing
  // const { topics } = await getTopics();

  return (
    <>
      {topics?.map((topic) => (
        <div
          key={topic._id}
          className="flex items-start justify-between p-4 shadow-lg border border-gray-300 rounded-lg"
        >
          <div>
            <div>
              <h2 className="font-bold text-xl">{topic?.title}</h2>
            </div>
            <div>{topic?.description}</div>
          </div>

          <div className="flex gap-4 [&>*]:text-2xl">
            <RemoveBtn id={topic?._id} />
            <Link href={`/edit-topic/${topic?._id}`}>
              <HiPencilAlt />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopicsList;
