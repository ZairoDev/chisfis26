import {connectDb} from "@/helper/db";
import { NextResponse } from "next/server";
import { Property } from "@/models/listing";
// import { useRouter } from "next/router";

connectDb();

export async function GET(req) {

    console.log('called')
    const url = new URL(req.url)
    console.log('url: ', url, url.pathname.split('/'));
    const pathNameList = url.pathname.split('/');
    const searchedCountry = pathNameList[pathNameList.length - 1];

    const shortlistedProperties = await Property.find({ country: searchedCountry }); 
    // const particularProperty = await Property.findById(id);

    try {
        console.log('inside try in specific country')
        return NextResponse.json(shortlistedProperties);
    } catch (error) {
        console.log("error: ", error);
        return NextResponse.json({
            message: "failed to fetch user from route",
        });
    }
}
