import { Redis } from "@upstash/redis";
import { cookies } from "next/headers";

const redis = Redis.fromEnv();

export async function GET() {
  const cookieStore = await cookies();

  const alreadyVisited = cookieStore.get("portfolio-visited");

  let count = await redis.get("visitor-count");

  if (!count) {
    count = 0;
  }

  if (!alreadyVisited) {
    count = await redis.incr("visitor-count");

    cookieStore.set("portfolio-visited", "true", {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      httpOnly: true,
      sameSite: "lax",
    });
  }

  return Response.json({
    visitors: Number(count),
  });
}