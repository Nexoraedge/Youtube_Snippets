import supabase from "@/lib/supabase";

export async function POST(req: Request) {
    try {
      const body = await req.json();
      const { 
        name,
        email,
        issue
      
      } = body as any;
  
      //console.log("Received data:", body);
  
      // Basic validation
      if (!name || !email || !issue) {
        return Response.json({ error: "Missing required fields" }, { status: 400 });
      }
  
      
      // Format links as a proper PostgreSQL array of JSONB objects
     
  
      // Prepare the data object for insertion
      const insertData = {
        name,
        email,
        issue,
        
      };
  
      //console.log("Data being inserted:", insertData);
  
      const { data: projectData, error: insertError } = await supabase
        .from("bug_reports")
        .insert([insertData])
        .select(); // Add .select() to return the inserted data
      
      if (insertError) {
        console.error("Supabase insert error:", insertError);
        return Response.json({ 
          error: 'Failed to insert data', 
          details: insertError.message 
        }, { status: 500 });
      }
      
      //console.log("Successfully inserted:", projectData);
      
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