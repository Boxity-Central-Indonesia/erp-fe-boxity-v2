import { SelectInvoices } from "./SelectInvoices"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DatePicker } from "./DatePicker"
import React, { useEffect } from "react"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { getInvoices } from "@/services/invoicesServices"

interface InvoiceOption {
    value: number;
    label: string;
}


interface FormPaymentsProps {
    dataInvoices: InvoiceOption[]
    selectDataInvoices: number | undefined
    amount: string | undefined
    paymentMethod: string | undefined
    date: Date | undefined
    setDataInvoices: React.Dispatch<React.SetStateAction<InvoiceOption[]>>
    setSelectDataInvoices: React.Dispatch<React.SetStateAction<number | undefined>>
    setAmount: any
    setPaymentMethod: any
    setDate: any
    errors: any
}
export const FormPayments: React.FC<FormPaymentsProps> = ({
    dataInvoices,
    selectDataInvoices,
    amount,
    paymentMethod,
    date,
    setDataInvoices,
    setSelectDataInvoices,
    setAmount,
    setPaymentMethod,
    setDate,
    errors
}) => {

    useEffect(() => {
        const getData = async () => {
            const response = await getInvoices()
            const newData = response.map(item => ({
                value: item.id,
                label: item.kode_invoice
            }))
            setDataInvoices(newData)
        }
        getData()
    }, [])


    return (
        <>
            <div className="grid grid-cols-2 w-full items-center gap-3">
                <div>
                    <SelectInvoices 
                    dataInvoices={dataInvoices} setSelectDataInvoices={setSelectDataInvoices} />
                    {errors.invoice_id && <p className="text-red-600 text-sm mt-2">{errors.invoice_id}</p>}
                </div>
                <div>
                    <Label htmlFor="amount">Tagihan terbayar</Label>
                    <Input onChange={(e) => setAmount(e.target.value)} className="mt-2" type="text" placeholder="Tagihan terbayar" />
                    {errors.amount_paid && <p className="text-red-600 text-sm mt-2">{errors.amount_paid}</p>}
                </div>
                <div>
                    <Label htmlFor="status">Metode pembayaran</Label>
                    <div className="mt-2">
                        <Select onValueChange={(value) => setPaymentMethod(value)}>
                            <SelectTrigger>
                                <SelectValue placeholder="Pilih status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Metode pembayaran</SelectLabel>
                                    <SelectItem value="cash">Cash</SelectItem>
                                    <SelectItem value="Credit">Credit</SelectItem>
                                    <SelectItem value="online">Online</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        {errors.payment_method && <p className="text-red-600 text-sm mt-2">{errors.payment_method}</p>}
                    </div>
                </div>
                <div>
                    <Label htmlFor="amount">Tanggal terbayar</Label>
                    <div className="mt-2">
                        <DatePicker setDate={setDate} date={date} />
                        {errors.payment_date && <p className="text-red-600 text-sm mt-2">{errors.payment_date}</p>}
                    </div>
                </div>
            </div>
        </>
    )
}