import { z } from 'zod';

export const formSchemaDeliveryNotes = z.object({
  number: z.string(), // "DN001"
  date: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid date format",
  }), // "2024-03-01"
  warehouse_id: z.number().int().positive(), // 1
  vendor_id: z.number().int().positive(), // 1
  details: z.string().optional(), // "Sample delivery note details" (optional)
  deliveryNoteItems: z.array(
    z.object({
      order_id: z.number().int().positive().refine(val => !isNaN(val), {
        message: "Order ID must be a valid number",
      }), // Make sure order_id is a valid number
      product_id: z.number().int().positive(), // 1
      quantity: z.string().refine(val => !isNaN(Number(val)) && Number(val) > 0, {
        message: "Quantity must be a positive number",
      }), // "12" - should be a positive number
    })
  ).min(1, { message: "At least one delivery item is required" }), // Ensure there's at least one item
});

