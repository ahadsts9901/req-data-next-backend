import "../mongodb";
import { NextRequest, NextResponse } from "next/server";


// form data request
export const POST = async (req: NextRequest, res: NextResponse) => {

    const formData = await req.formData();

    const text = formData.get('text')
    
    console.log(text); // your form data text here you can also get files by the same method
    

};