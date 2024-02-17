import "../mongodb";
import { NextRequest, NextResponse } from "next/server";


// req body
export const POST = async (req: NextRequest, res: NextResponse) => {

    const {text} = await req.json()

    console.log(text); // your request body here
    
};

// req query
export const DELETE = async (req: NextRequest, res: NextResponse) => {

    const id = new URL(req.url).searchParams.get("id")

    console.log(id); // your request query here
    
};
