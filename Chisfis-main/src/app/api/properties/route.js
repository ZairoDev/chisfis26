import { connectDb } from "../../../helper/db";
import { NextResponse } from "next/server";
import { Property } from "@/models/listing";

connectDb();

export async function GET() {
    // const {
    //     ObjectId,
	// 	userId,
    //     propertyType,
    //     placeName,
    //     rentalForm,
    //     numberOfPortions,
    //     street,
    //     postalCode,
    //     city,
    //     state,
    //     country,
    //     center,
    //     portionName,
    //     portionSize,
    //     guests,
    //     bedrooms,
    //     beds,
    //     bathroom,
    //     kitchen,
    //     childrenAge,
    //     basePrice,
    //     weekendPrice,
    //     monthlyDiscount,
    //     currency,
    //     generalAmenities,
    //     otherAmenities,
    //     safeAmenities,
    //     smoking,
    //     pet,
    //     party,
    //     cooking,
    //     additionalRules,
    //     reviews,
    //     propertyCoverFileUrl,
    //     propertyPictureUrls,
    //     portionCoverFileUrls,
    //     portionPictureUrls,
	// 	night,
	// 	time,
	// 	datesPerPortion,	
	// 	isLive,
    // } = await Property.find({country: "Greece"});


    const shortlistedProperties = await Property.find({ country: "Greece" }); 

    try {
        console.log('inside try')
        return NextResponse.json(shortlistedProperties);
    } catch (error) {
        console.log("error: ", error);
        return NextResponse.json({
            message: "failed to fetch user from route",
        });
    }
}
