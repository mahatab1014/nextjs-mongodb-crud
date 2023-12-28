import Topic from "@/libs/models/topic";
import connectMongoDB from "@/libs/mongo/mongodb";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();

  // Connect to MongoDB
  await connectMongoDB();

  // Find the document by ID and update it
  const filter = { _id: id };
  const update = { title, description };
  const options = { new: true }; // Return the modified document

  const updatedData = await Topic.findOneAndUpdate(filter, update, options);

  return NextResponse.json(
    { message: "Topic updated successfully" },
    { status: 200 }
  );
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const filter = { _id: id };
  const topic = await Topic.findOne(filter);
  return NextResponse.json({ topic }, { status: 200 });
}
