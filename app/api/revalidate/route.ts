import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const secret = req.nextUrl.searchParams.get("secret");
    if (
      process.env.SANITY_REVALIDATE_SECRET &&
      secret !== process.env.SANITY_REVALIDATE_SECRET
    ) {
      return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
    }

    const body = await req.json().catch(() => ({}));
    const type = body?._type;

    if (type === "event") {
      revalidatePath("/events");
    } else if (type === "teamMember") {
      revalidatePath("/team");
    } else if (type === "charity") {
      revalidatePath("/");
    } else {
      revalidatePath("/", "layout");
    }

    return NextResponse.json({
      revalidated: true,
      type: type || "all",
      now: Date.now(),
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Error revalidating";
    return NextResponse.json({ message }, { status: 500 });
  }
}
