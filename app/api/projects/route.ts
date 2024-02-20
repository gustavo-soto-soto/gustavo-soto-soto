import { MongoClient, ServerApiVersion } from "mongodb"
import { NextResponse } from "next/server";

const MONGODB_URI: string = process.env.MONGODB_URI || "";

const client = new MongoClient(MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export async function GET() {
  try {
    await client.connect();

    await client.db("admin").command({ ping: 1 });

    const database = client.db("Portfolio");
    const collection = database.collection("projects");

    const projects = await collection.find({}).toArray();

    return NextResponse.json({ projects });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error });
  }
}

export async function POST(request: Request) {
  try {
    const newProject = await request.json();

    await client.connect();

    const database = client.db("Portfolio");
    const collection = database.collection("projects");

    const response = await collection.insertOne(newProject);

    return NextResponse.json({
      message: "Project added successfully",
      id: response.insertedId,
    });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error });
  }
}
