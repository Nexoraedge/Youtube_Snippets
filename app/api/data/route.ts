import supabase from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { img, title, description, link, techstack, cover, links, ytvidlink, Share_link } = body;
    
    const { data: projectData, error: insertError } = await supabase
      .from("projects")
      .insert([{ img, title, description, link, techstack, cover, links, ytvidlink, Share_link }]);
    
    if (projectData) {
      return Response.json({ projectData: "Data added successfully" }, { status: 201 });
    }
    
    const ster = JSON.stringify(insertError);
    if (insertError) {
      return Response.json({ error: 'Failed to insert data', details: ster }, { status: 500 });
    }
    
    return Response.json({
      success: true,
      projectData: "Data added successfully",
    }, { status: 201 });
  } catch (e) {
    return Response.json({ e: "An unexpected error occurred", success: false }, { status: 500 });
  }
}
export async function GET() {
  const { data: projectData, error } = await supabase.from("projects").select("*");

  if (error) {
    return Response.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }

  return Response.json({ projects: projectData }, { status: 200 });
}
