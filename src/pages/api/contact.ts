/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import { mailOptions, transporter } from "@/config/nodemailer";

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
const handler = async (req: any, res: any) => {
  if (req.method === 'POST') {
    const data = req.body;
    if (!data.name || !data.email || !data.message) {
      return res.status(400).json({ message: "Bad Request" })
    }
    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: `Message from ${data.name}`,
        text: "Hello",
        html: `<h1>Name: ${data.name}</h1>
        <h2>Email: ${data.email}</h2>
        <p>Message: ${data.message} </p>
        `
      })
      return res.status(200).json({
        success: true
      })
    } catch (err: any) {
      console.log(err)
      return res.status(400).json({ message: err?.mesage })
    }
  }
  console.log(req.body)
  return res.status(400).json({ message: "Bad Request" })
}
export default handler