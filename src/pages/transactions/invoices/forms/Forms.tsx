import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { SelectOrder } from "./SelectOrder"
import { DatePicker } from "./DatePicker"
import React, { useEffect } from "react"
import { getOrders } from "@/services/orderServices"


interface OrderOption {
    value: number;
    label: string;
}

interface FormInvoicesProps {
    dataOrder: [];
    setDataOrder: React.Dispatch<React.SetStateAction<OrderOption[]>>;
    date: Date | undefined; // Allow `date` to be `null`
    dueDate: Date | undefined; // Allow `dueDate` to be `null`
    status: string | undefined;
    setDate: (date: Date | undefined) => void; // Explicitly type `setDate` to accept `null`
    setDueDate: (date: Date | undefined) => void; // Explicitly type `setDueDate` to accept `null`
    setStatus: (status: string) => void;
    setSelectDataOrder: (data: any) => void;
    errors: any
}

export const FormInvoices: React.FC<FormInvoicesProps> = ({
    dataOrder,
    setDataOrder,
    date,
    dueDate,
    setDate,
    setDueDate,
    status,
    setStatus,
    setSelectDataOrder,
    errors
}) => {

    useEffect(() => {
        const getDataOrder = async () => {
            const response = await getOrders()
            const newData = response.map(item => ({
                value: item.id,
                label: item.kode_order
            }))

            setDataOrder(newData)
        }

        getDataOrder()
    }, [])

    return (
        <>
            <div className="grid grid-cols-2 w-full items-center gap-3">
                {/* Order Selection */}
                <div>
                    <SelectOrder dataOrder={dataOrder} setSelectDataOrder={setSelectDataOrder}/>
                    {errors.order_id && <p className="text-red-600 text-sm mt-2">{errors.order_id}</p>}
                </div>

                {/* Invoice Date */}
                <div>
                    <Label htmlFor="invoice-date">Tanggal tagihan</Label>
                    <div className="mt-2">
                        <DatePicker date={date} setDate={setDate} />
                        {errors.invoice_date && <p className="text-red-600 text-sm mt-2">{errors.invoice_date}</p>}
                    </div>
                </div>

                {/* Due Date */}
                <div>
                    <Label htmlFor="due-date">Tenggat waktu</Label>
                    <div className="mt-2">
                        <DatePicker date={dueDate} setDate={setDueDate} />
                        {errors.due_date && <p className="text-red-600 text-sm mt-2">{errors.due_date}</p>}
                    </div>
                </div>

                {/* Status Selection */}
                <div>
                    <Label htmlFor="status">Status</Label>
                    <div className="mt-2">
                        <Select onValueChange={(value) => setStatus(value)}>
                            <SelectTrigger>
                                <SelectValue placeholder="Pilih status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Status</SelectLabel>
                                    <SelectItem value="unpaid">Belum lunas</SelectItem>
                                    <SelectItem value="partial">Cicilan</SelectItem>
                                    <SelectItem value="paid">Lunas</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        {errors.status && <p className="text-red-600 text-sm mt-2">{errors.status}</p>}
                    </div>
                </div>
            </div>
        </>
    );
};
