import supabase from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { 
      id, 
      img, 
      title, 
      description, 
      link, 
      techstack = [], 
      cover, 
      links = [], 
      ytvidlink, 
      share_link 
    } = body as any;

    console.log("Received data:", body);

    // Basic validation
    if (!img || !title || !description) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Convert complex fields to appropriate formats
    const techstackPrepared = Array.isArray(techstack) ? techstack : [techstack];
    
    // Format links as a proper PostgreSQL array of JSONB objects
    let linksPrepared = [];
    try {
      linksPrepared = Array.isArray(links) ? links : JSON.parse(links || '[]');
      // Ensure each link has required fields
      linksPrepared = linksPrepared.map((link: any) => ({
        id: link.id || 0,
        img: link.img || '',
        link: link.link || '',
        title: link.title || 'Link'
      }));
    } catch (e) {
      console.error('Error processing links:', e);
      linksPrepared = [];
    }

    // Prepare the data object for insertion
    const insertData = {
      id: id || Date.now(), // Use provided ID or generate one
      img,
      title,
      description,
      link,
      techstack: techstackPrepared,
      cover,
      links: linksPrepared,
      ytvidlink,
      Share_link : share_link 
    };

    console.log("Data being inserted:", insertData);

    const { data: projectData, error: insertError } = await supabase
      .from("projects")
      .insert([insertData])
      .select(); // Add .select() to return the inserted data
    
    if (insertError) {
      console.error("Supabase insert error:", insertError);
      return Response.json({ 
        error: 'Failed to insert data', 
        details: insertError.message 
      }, { status: 500 });
    }
    
    console.log("Successfully inserted:", projectData);
    
    return Response.json({
      success: true,
      message: "Data added successfully",
      data: projectData
    }, { status: 201 });
    
  } catch (e) {
    console.error("API Error:", e);
    return Response.json({ 
      error: "An unexpected error occurred", 
      success: false 
    }, { status: 500 });
  }
}

export async function GET() {
  try {
    const { data: projectData, error } = await supabase
      .from("projects")
      .select("*")
      .order('id', { ascending: false }); // Order by ID descending

    if (error) {
      console.error("Supabase select error:", error);
      return Response.json({ error: 'Failed to fetch projects' }, { status: 500 });
    }

    return Response.json({ projects: projectData }, { status: 200 });
  } catch (e) {
    console.error("GET API Error:", e);
    return Response.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}