import {NextRequest, NextResponse} from "next/server";
import {headers} from "next/headers";
import stripe from "@/lib/stripe";


export async function POST(req: NextRequest) {
    const headersList = headers();
    const details = await req.json();
    const price = details.price;
    

    const lineItems = {
      price_data: {
        currency: "usd",
        product_data: {
          name: "Pay RAG Builder",
          // add vendor name, and a description and space for promo codes
          description: `${price} Credits for $${price} - $1.00 per credit. Credits allow you to use RAG Builder to create and share your own RAGs.`,
          images: ["https://via.placeholder.com/500"],

        },
        unit_amount: price * 100,
      },
      quantity: 1,
    }

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [lineItems],
            mode: "payment",
            success_url: `${headersList.get("origin")}/thank-you`,
            cancel_url: `${headersList.get("origin")}/`,
        });

        return NextResponse.json({sessionId: session.id});
    } catch (err) {
        console.log(err)
        return NextResponse.json({error: "Error creating checkout session"});
    }
}