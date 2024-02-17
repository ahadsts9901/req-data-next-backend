import "../../mongodb";
import { NextRequest, NextResponse } from "next/server";


// req params
export const GET = async (req: NextRequest, res: NextResponse) => {

    const id = req.url.slice(req.url.lastIndexOf('/'))

    console.log(id); // your request params here
    
    
};