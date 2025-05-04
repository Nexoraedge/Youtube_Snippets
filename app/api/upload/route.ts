import { NextRequest, NextResponse } from "next/server";
import supabase from "@/lib/supabase";
import { v4 as uuidv4 } from "uuid";

export async function POST(req: NextRequest) {
  try {
    // Get the form data from the request
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Generate a unique file name to avoid collisions
    const fileName = `${uuidv4()}-${file.name.replace(/\s+/g, "-").toLowerCase()}`;
    
    // Convert the file to an ArrayBuffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);

    // Upload the file to Supabase Storage
    const { data, error } = await supabase.storage
      .from("projectimages") // Make sure this bucket exists in your Supabase project
      .upload(fileName, buffer, {
        contentType: file.type,
        cacheControl: "3600",
        upsert: false,
      });

    if (error) {
      console.error("Supabase storage error:", error);
      return NextResponse.json(
        { error: "Failed to upload to storage", details: error.message },
        { status: 500 }
      );
    }

    // Get the public URL for the uploaded file
    const { data: urlData } = supabase.storage
      .from("projectimages")
      .getPublicUrl(fileName);

    return NextResponse.json({
      success: true,
      fileUrl: urlData.publicUrl,
      message: "File uploaded successfully",
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred during upload" },
      { status: 500 }
    );
  }
}

// Set the maximum file size to 10MB
export const config = {
  api: {
    bodyParser: false,
    responseLimit: "10mb",
  },
};