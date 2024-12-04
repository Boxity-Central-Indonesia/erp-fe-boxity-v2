import { Input } from "@/components/ui/input"
import { DatePicker } from "@/components/commons/datePicker/DatePicker"
import { Label } from "@/components/ui/label";
import { SelectInput } from "@/components/commons/select/SelectInput";
import { Textarea } from "@/components/ui/textarea";
import { TabelForDeliveryNotesItems } from "./TabelForDeliveryNotesItem";

interface FormsDeliveryNotesProps {
    date: Date | undefined
    setDate: any
    setSelectVendor: any
    dataVendor: []
    dataWarehous: []
    setSelectWarehouse: any
    setNoref: any
    setDetails: any
    setRows: any
    rows: any
    errors: any
}

export const FormsDeliveryNotes: React.FC<FormsDeliveryNotesProps> = ({
    date,
    setDate,
    setSelectVendor,
    dataVendor,
    dataWarehous,
    setSelectWarehouse,
    setNoref,
    setDetails,
    setRows,
    rows,
    errors
}) => {


    return (
        <>
            <div className="grid grid-cols-2 w-full items-center gap-3">
                <div>
                    <Label>Kode ref transaksi</Label>
                    <Input onChange={(e) => setNoref(e.target.value)} className="mt-2" type="text" placeholder="Kode ref transaksi" />
                    {errors.number && <p className="text-red-600 text-sm mt-2">{errors.number}</p>}
                </div>
                <div>
                    <Label>Tanggal</Label>
                    <div className="mt-2">
                        <DatePicker date={date} setDate={setDate} />
                        {errors.date && <p className="text-red-600 text-sm mt-2">{errors.date}</p>}
                    </div>
                </div>
                <div>
                    <Label htmlFor="status">Pilih vendor</Label>
                    <div>
                        <SelectInput
                            data={dataVendor}
                            setSelectData={setSelectVendor}
                            name="vendor_id"
                            placeHolder="Pilih vendor" marginTop={null} />
                    </div>
                    {errors.vendor_id && <p className="text-red-600 text-sm mt-2">{errors.vendor_id}</p>}
                </div>
                <div>
                    <Label htmlFor="status">Pilih warehouse</Label>
                    <div>
                        <SelectInput
                            data={dataWarehous}
                            setSelectData={setSelectWarehouse}
                            name="warehouse_id"
                            placeHolder="Pilih warehouse" marginTop={null} />
                    </div>
                    {errors.warehouse_id && <p className="text-red-600 text-sm mt-2">{errors.warehouse_id}</p>}
                </div>
                <div className="col-span-2">
                    <Label>Detail</Label>
                    <Textarea onChange={(e) => setDetails(e.target.value)} placeholder="Tulis detail disni"></Textarea>
                </div>
                <div className="col-span-2">
                    <TabelForDeliveryNotesItems
                        setRows={setRows}
                        rows={rows}
                        errors={errors}
                    />
                </div>
            </div>
        </>
    )
}