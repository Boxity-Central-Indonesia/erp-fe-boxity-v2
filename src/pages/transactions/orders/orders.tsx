import { useEffect, useState } from "react";
import { getOrders } from "@/services/orderServices";
import { TableOrder } from "./table/Table";
import { Order } from "../type/orderType";
import { Loading } from "@/components/commons/loading/Loading";
import { SkeletonTable } from "@/components/commons/skeleton/SkeletonTable";

export const Orders = () => {
    const [data, setData] = useState<Order[]>([]);
    const [refresh, setRefresh] = useState<boolean>(false)
    const [loadingForSkeleton, setLoadingForSkeleton] = useState<boolean>(true);
    const [isLoading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const orders = await getOrders(); // Menunggu data pengguna diambil
                setData(orders)
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

            <TableOrder
                data={data}
                setRefresh={setRefresh}
                refresh={refresh}
                setLoading={setLoading}
            />
        </>
    )
}