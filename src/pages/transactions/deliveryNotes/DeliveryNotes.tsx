import { useEffect, useState } from "react";
import { Loading } from "@/components/commons/loading/Loading";
import { SkeletonTable } from "@/components/commons/skeleton/SkeletonTable";
import { DeliveryNote } from "../type/deliveryNotes";
import { getDeliveryNotes } from "@/services/deliveryNotesServices";
import { TableDeliveryNotes } from "./Table/Table";
// import

export const DeliveryNotes = () => {
    const [data, setData] = useState<DeliveryNote[]>([]);
    const [refresh, setRefresh] = useState<boolean>(false)
    const [loadingForSkeleton, setLoadingForSkeleton] = useState<boolean>(true);
    const [isLoading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const deliveryNotes = await getDeliveryNotes(); // Menunggu data pengguna diambil
                setData(deliveryNotes)
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

             <TableDeliveryNotes
                 data={data}
                 setRefresh={setRefresh}
                 refresh={refresh}
                 setLoading={setLoading}
             />
        </>
    )
}