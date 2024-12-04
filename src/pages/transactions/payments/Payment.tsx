import { useEffect, useState } from "react";
import { Loading } from "@/components/commons/loading/Loading";
import { SkeletonTable } from "@/components/commons/skeleton/SkeletonTable";
import { Payment } from "../type/paymentType";
import { getPayments } from "@/services/paymentServices";
import { TablePayments } from "./Table/Table";
// import

export const Payments = () => {
    const [data, setData] = useState<Payment[]>([]);
    const [refresh, setRefresh] = useState<boolean>(false)
    const [loadingForSkeleton, setLoadingForSkeleton] = useState<boolean>(true);
    const [isLoading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const payments = await getPayments(); // Menunggu data pengguna diambil
                setData(payments)
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

             <TablePayments
                 data={data}
                 setRefresh={setRefresh}
                 refresh={refresh}
                 setLoading={setLoading}
             />
        </>
    )
}