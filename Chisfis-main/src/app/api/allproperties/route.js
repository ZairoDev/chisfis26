import { connectDb } from "../../../helper/db";
import { NextResponse } from "next/server";
import { Property } from "@/models/listing";

connectDb();

export async function GET() {
    try {
        const allProperties = await Property.find();

        return NextResponse.json(allProperties);
    } catch (error) {
        console.error("Error fetching properties: ", error);

        return NextResponse.json({
            message: "Failed to fetch properties from the database",
        });
    }
}