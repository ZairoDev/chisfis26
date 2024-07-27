import {connectDb} from "@/helper/db";
import { NextResponse } from "next/server";
import { Property } from "@/models/listing";
// import { useRouter } from "next/router";

connectDb();

export async function GET(req) {
    console.log('called')
    const url = new URL(req.url)
    const referer = req.headers.get('referer');
    const idList = referer.split('id=')
    const id = idList[1];
    // const shortlistedProperties = await Property.find({ country: "Greece" }); 
    const particularProperty = await Property.findById(id);

    try {
        console.log('inside try')
        return NextResponse.json(particularProperty);
    } catch (error) {
        console.log("error: ", error);
        return NextResponse.json({
            message: "failed to fetch user from route",
        });
    }
}
