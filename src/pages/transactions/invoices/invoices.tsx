import { useEffect, useState } from "react";
import { Loading } from "@/components/commons/loading/Loading";
import { SkeletonTable } from "@/components/commons/skeleton/SkeletonTable";
import { getInvoices } from "@/services/invoicesServices";
import { Invoice } from "../type/invoicesType";
import { TableInvoices } from "./table/Table";
// import

export const Invoices = () => {
    const [data, setData] = useState<Invoice[]>([]);
    const [refresh, setRefresh] = useState<boolean>(false)
    const [loadingForSkeleton, setLoadingForSkeleton] = useState<boolean>(true);
    const [isLoading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const invoices = await getInvoices(); // Menunggu data pengguna diambil
                setData(invoices)
            } catch (error) {
                console.error("Failed to fetch users:", error);
            } finally {
                setLoadingForSkeleton(false); // Menghentikan loading setelah data diambil atau terjadi error
            }
        };

        fetchData(); // Panggil fungsi fetchData untuk mengambil data saat komponen dimuat
    }, [refresh]);

    if (loadingForSkeleton) {
        return (
            <section>
                <SkeletonTable />
            </section>
        );
    }

    return (
        <>
            {isLoading && (
                <Loading />
            )}

             <TableInvoices
                 data={data}
                 setRefresh={setRefresh}
                 refresh={refresh}
                 setLoading={setLoading}
             />
        </>
    )
}