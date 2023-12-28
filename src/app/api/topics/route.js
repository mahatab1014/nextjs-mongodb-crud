import Topic from "@/libs/models/topic";
import connectMongoDB from "@/libs/mongo/mongodb";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    // const { title, description } = await request.json();
    await connectMongoDB();
    const requestBody = await request.text();
    console.log("Request Body:", requestBody);
    const { title, description } = JSON.parse(requestBody);

    await Topic.create({ title, description });

    return NextResponse.json(
      { message: "Topic created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Invalid JSON format in the request body" },
      { status: 400 }
    );
  }
};

export const GET = async (request) => {
  await connectMongoDB();
  const topics = await Topic.find();
  return NextResponse.json({ topics: topics });
};

export const DELETE = async (request) => {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic deleted successfully" });
};
