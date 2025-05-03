import supabase from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { img, title, description, link, techstack } = body;



    const { data: projectData, error: insertError } = await supabase.from("projects").insert([{ img, title, description, link, techstack }]);

    if (projectData) {

      return Response.json({ projectData: "Data added successfully" }, { status: 201 });
    }
    const ster = JSON.stringify(insertError);
    if (insertError) {
      console.error('Detailed insert error:', ster);
      return Response.json({ error: 'Failed to insert data', details: ster }, { status: 500 });
    }

    return Response.json({
      success: true,
      projectData: "Data added successfully",
    }, { status: 201 });
  } catch (e) {
    console.error('Detailed insert error:', e);
    return Response.json({ e: "An unexpected error occurred", success: false }, { status: 500 });
  }
}
export async function GET() {
  const { data: projectData, error } = await supabase.from("projects").select("*");

  if (error) {
    console.error('Detailed fetch error:', error);
    return Response.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }

  return Response.json({ projects: projectData }, { status: 200 });
}
