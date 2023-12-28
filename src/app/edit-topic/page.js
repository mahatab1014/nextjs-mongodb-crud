import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section className="text-center py-5">
      <h2 className="text-2xl mb-5 font-bold">Topic ID Not Found</h2>
      <Link href="/" className="bg-gray-900 text-white px-3 py-2">
        Go Back Home
      </Link>
    </section>
  );
};

export default page;
