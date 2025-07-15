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

    // Create a signed URL (valid for 1 hour) so the file can be accessed even when the bucket is private
    const { data: signedData, error: signedError } = await supabase.storage
      .from("projectimages")
      .createSignedUrl(fileName, 60 * 60); // 1-hour expiry

    if (signedError) {
      console.error("Signed URL generation error:", signedError);
      return NextResponse.json(
        { error: "Failed to generate signed URL", details: signedError.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      fileUrl: signedData.signedUrl,
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
export async function POST_Error(req:Request) {
  
}

// Set the maximum file size to 10MB
export const config = {
  api: {
    bodyParser: false,
    responseLimit: "10mb",
  },
};