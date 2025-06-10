import Redis from "ioredis"
import dotenv from "dotenv";


dotenv.config()


export const redis = new Redis("rediss://default:AXBgAAIjcDE2OTJmZjQxYjIxZjc0YTU0YWNhZDBkM2JhYjc4YTczY3AxMA@intimate-katydid-28768.upstash.io:6379");
