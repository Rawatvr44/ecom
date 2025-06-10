import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
	cloud_name: "dboacmqsf",
	api_key: 187317568776665,
	api_secret: "JKIEnRQUjF8C_-zlEIVZRrH8AVg",
});

export default cloudinary;
