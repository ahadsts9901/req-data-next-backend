import "../mongodb";
import { NextRequest, NextResponse } from "next/server";


// form data request
export const POST = async (req: NextRequest, res: NextResponse) => {

    const formData = await req.formData();
    const fileSizeLimit = 2000000 // file size limit

    const files: any = [];
    let i: number = 0;
    let fileSizeExceeded: boolean = false;

    while (true) {
        const file = formData.get(`file${i}`);
        if (!file) {
            break;
        }
        if (file.size > fileSizeLimit) {
            fileSizeExceeded = true;
            break;
        }
        files.push(file);
        i++;
    }

    if (fileSizeExceeded) {
        return NextResponse.json({
            message: 'file too large',
        });
    }

    console.log(files); // here you will get an array of files upload them to your storage bucket


};