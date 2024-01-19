import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("This is not a valid email"),
  message: z.string().min(1, { message: "Message is required" }),
});

export default formSchema;
