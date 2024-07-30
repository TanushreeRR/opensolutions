import Issue from "@/models/issues";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (req: NextRequest, { params }: { params: { id: string } }) => {
  try {
    const { id } = params;

    const body = await req.json();
    const updatedEntry: Partial<any> = body; // Assuming any updated fields can be accepted

    const updatedIssue = await Issue.findByIdAndUpdate(id, updatedEntry, { new: true });

    if (!updatedIssue) {
      return NextResponse.json({ message: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Product updated", data: updatedIssue }, { status: 200 });
  } catch (error) {
    console.error("Error updating product:", error);
    return NextResponse.json({ message: "Error updating product", error }, { status: 500 });
  }
};

export const DELETE = async (req: NextRequest, { params }: { params: { id: string } }) => {
    try {
      const { id } = params;
  
      const deletedIdea = await Issue.findByIdAndDelete(id);
  
      if (!deletedIdea) {
        return NextResponse.json({ message: "Idea not found" }, { status: 404 });
      }
  
      return NextResponse.json({ message: "Idea deleted" }, { status: 200 });
    } catch (error) {
      console.error("Error deleting idea:", error);
      return NextResponse.json({ message: "Error deleting idea", error }, { status: 500 });
    }
  };