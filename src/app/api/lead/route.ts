import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Log the lead data (in production, you'd send this to a CRM or email)
    console.log("New lead received:", data);
    
    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.service) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    
    // TODO: Uncomment and configure webhook for CRM integration
    // const webhookUrl = process.env.LEAD_WEBHOOK_URL;
    // if (webhookUrl) {
    //   await fetch(webhookUrl, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(data),
    //   });
    // }
    
    return NextResponse.json(
      { success: true, message: "Lead received successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing lead:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
