import nodemailer from "nodemailer";

export async function GET() {
  return Response.json({ message: "This endpoint accepts POST requests only." });
}

export async function POST(req: Request) {
    const body = await req.json();
    const { naam, email, message } = body;
    const { NEXT_PUBLIC_USER, NEXT_PUBLIC_PASS } = process.env

    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: NEXT_PUBLIC_USER,
            pass: NEXT_PUBLIC_PASS,
        },
    });

    try {
        await transport.sendMail({
            from: email,
            to: NEXT_PUBLIC_USER,
            subject: `Portfolio Contact From ${naam}`,
            text: `Message from ${naam} (${email}):\n\n${message}`,
        });

        return Response.json({ message: "success" });
    } catch (error) {
        console.log(error);
        return new Response(
            JSON.stringify({ message: "Message could not be sent." }),
            {
                status: 500,
            }
        );
    }
}
