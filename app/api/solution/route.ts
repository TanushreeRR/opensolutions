import Solution from "@/models/Solution";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  const { name, contact, email, title, description} = await request.json();

  await connect();

   
  const newUser = new Solution({
    name,
    contact,
    email,
    title,
    description,
  });

  try {
    await newUser.save();
    return new NextResponse("contact saved", { status: 200 });
  } catch (err: any) {
    return new NextResponse(err, {
      status: 500,
    });
  
}
};

export async function GET() {
  await connect();
  const entries = await Solution.find({});
  return NextResponse.json(entries);
}
