import nodemailer from "nodemailer";

export async function POST(req: Request) {
    const body = await req.json();
    const { naam, email, message } = body;

    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.USER,
            pass: process.env.PASS,
        },
    });

    try {
        await transport.sendMail({
            from: email,
            to: process.env.USER,
            subject: `Portfolio Contact From ${naam}`,
            text: `Message from ${naam} (${email}):\n\n${message}`,
        });

        return Response.json({ message: "Message sent successfully." });
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
