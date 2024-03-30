import { authOptions } from "@/auth.config";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    const session = await getServerSession(req, res, authOptions);

    if (!session) {
        res.status(401).json({
            "error": true,
            "title": "User Not Authenticated",
            "description": "You need to login to access this api"
        })
        return;
    }

    res.status(200).json({
        "hello": "world"
    })

}