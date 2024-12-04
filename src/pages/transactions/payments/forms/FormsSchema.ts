import z from "zod";

export const formSchemaPaymentsCreate = z.object({
  invoice_id: z.number().int().positive({ message: "Faktur tagihan harus diisi" }), // Must be a positive integer
  amount_paid: z
    .string(), // Must be a positive number
  payment_method: z.enum(["cash", "credit", "online", "other"], {
    message: "Metode pembayaran harus salah satu dari: Cash, Credit Card, Bank Transfer, Other",
  }), // Restrict to specific payment methods
  payment_date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, { message: "Tanggal pembayaran harus dalam format YYYY-MM-DD" }) // Validate date format
    .refine((date) => !isNaN(Date.parse(date)), {
      message: "Tanggal pembayaran harus valid",
    }), // Ensure it's a valid date
});
