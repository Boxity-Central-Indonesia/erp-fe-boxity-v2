import z from "zod";

export const formSchemaInvoicesCreate = z.object({
  order_id: z.number().int().positive({ message: "Order harus diisi" }), // Must be a positive integer
  due_date: z
    .string()
    .regex(
      /^\d{4}-\d{2}-\d{2}$/,
      { message: "Due date harus dalam format YYYY-MM-DD" }
    )
    .refine(
      (date) => !isNaN(Date.parse(date)),
      { message: "Due date harus tanggal valid" }
    ),
  invoice_date: z
    .string()
    .regex(
      /^\d{4}-\d{2}-\d{2}$/,
      { message: "Invoice date harus dalam format YYYY-MM-DD" }
    )
    .refine(
      (date) => !isNaN(Date.parse(date)),
      { message: "Invoice date harus tanggal valid" }
    ),
  status: z.enum(["partial", "paid", "unpaid"], {
    message: "Status harus salah satu dari: partial, paid, unpaid",
  }),
});
