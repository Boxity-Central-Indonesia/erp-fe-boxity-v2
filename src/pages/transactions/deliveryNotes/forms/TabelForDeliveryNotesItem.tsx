import React, { useState, useEffect } from 'react';
import { Label } from "@/components/ui/label";
import { getOrders } from '@/services/orderServices';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PlusIcon, Cross2Icon } from "@radix-ui/react-icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getProducts } from '@/services/productServices';

interface Props {
  setRows: React.Dispatch<React.SetStateAction<RowData[]>>; // Ensure RowData type is used here
  rows: RowData[];
  errors: { [key: string]: any }; // Error object should be a more precise structure
}

interface RowData {
  order_id: string;
  product_id: string;
  quantity: string;
}

export const TabelForDeliveryNotesItems: React.FC<Props> = ({
  setRows,
  rows,
  errors,
}) => {
  // State for Orders and Products
  const [dataOrder, setDataOrder] = useState<any[]>([]);
  const [dataProduct, setDataProduct] = useState<any[]>([]);

  // Function to Add a Row
  const handleAddRow = () => {
    setRows([...rows, { order_id: '', product_id: '', quantity: '' }]); // Add a default row
  };

  // Function to Remove a Row
  const handleRemoveRow = (index: number) => {
    setRows(rows.filter((_: RowData, idx: number) => idx !== index)); // Remove row at index
  };

  // Function to Update a Row
  const handleRowUpdate = (index: number, field: keyof RowData, value: string) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  useEffect(() => {
    const getData = async () => {
      const order = await getOrders();
      const newOrder = order.map((item: any) => ({
        value: item.id,
        label: item.kode_order,
      }));
      setDataOrder(newOrder);

      const product = await getProducts();
      const newProduct = product.map((item: any) => ({
        value: item.id,
        label: item.name,
      }));
      setDataProduct(newProduct);
    };
    getData();
  }, []);

  return (
    <div>
      <Label>Tabel item pengiriman barang</Label>
      {errors.deliveryNoteItems && <p className="text-red-600 text-sm mt-2">{errors.deliveryNoteItems}</p>}
      <Table className="mt-2">
        <TableHeader>
          <TableRow>
            <TableHead>Order</TableHead>
            <TableHead>Product</TableHead>
            <TableHead className="text-right">Quantity</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Render Rows Dynamically */}
          {rows.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center text-gray-500">
                No items added.
              </TableCell>
            </TableRow>
          ) : (
            rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">
                  <Select onValueChange={(value) => handleRowUpdate(index, 'order_id', value)}>
                    <SelectTrigger className="w-[200px]">
                      <SelectValue placeholder="Pilih order" />
                    </SelectTrigger>
                    <SelectContent>
                      {dataOrder.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.deliveryNoteItems?.[index]?.order_id && (
                    <p className="text-red-600 text-sm mt-2">
                      {errors.deliveryNoteItems[index].order_id.message}
                    </p>
                  )}
                </TableCell>
                <TableCell>
                  <Select onValueChange={(value) => handleRowUpdate(index, 'product_id', value)}>
                    <SelectTrigger className="w-[200px]">
                      <SelectValue placeholder="Pilih product" />
                    </SelectTrigger>
                    <SelectContent>
                      {dataProduct.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className="text-right">
                  <input
                    type="number"
                    className="border-none rounded p-1 text-right w-full"
                    placeholder="Quantity"
                    value={row.quantity}
                    onChange={(e) => handleRowUpdate(index, 'quantity', e.target.value)}
                  />
                  {errors.deliveryNoteItems?.[index]?.quantity && (
                    <p className="text-red-600 text-sm mt-2">
                      {errors.deliveryNoteItems[index].quantity.message}
                    </p>
                  )}
                </TableCell>
                <TableCell
                  className="hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleRemoveRow(index)} // Handle Row Removal
                >
                  <Cross2Icon className="mx-auto" />
                </TableCell>
              </TableRow>
            ))
          )}
          <TableRow>
            {/* Add Row Handler */}
            <TableCell
              className="hover:bg-gray-100 py-3 cursor-pointer"
              colSpan={4}
              onClick={handleAddRow}
            >
              <PlusIcon className="mx-auto" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
