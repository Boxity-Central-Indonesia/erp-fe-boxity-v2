import z from 'zod';

export const formSchemaOrderCreate = z.object({
  vendor_id: z.number().int().positive({ message: "Vendor ID must be a positive integer" }),
  warehouse_id: z.union([z.number().positive(), z.null()]).optional(), // Nullable warehouse
  no_ref: z.string().min(1, { message: "Reference number cannot be empty" }),
  order_type: z.string().min(1, { message: "Order type cannot be empty" }),
  details: z.string().optional().nullable(), // Optional and nullable
});

