import { unAuthenticated } from "@/lib/errors";
import { serverAuth } from "@/lib/serverAuth";

export async function GET(req: Request) {
    const session = await serverAuth();

    if (!session) { return unAuthenticated; }

    return Response.json({
        "hello": "world"
    }, {
        status: 200
    });
}

export async function POST(req: Request) {
    const session = await serverAuth();

    // if (!session) { return unAuthenticated }

    const res = await req.json()

    return Response.json({
        "status": "success",
    }, {
        status: 200
    });
}