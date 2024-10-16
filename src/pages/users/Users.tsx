import { useEffect, useState } from "react";
import { getUsers } from "@/services/userServices";
import { SkeletonTable } from "@/components/commons/skeleton/SkeletonTable";
import { SkeletonText } from "@/components/commons/skeleton/SkeletonText";
import { TableUser } from "./table/Table";
import { userForm } from "./type/userType";
import { Loading } from "@/components/commons/loading/Loading";

export const Users = () => {
    // State untuk menyimpan data pengguna
    const [data, setData] = useState<userForm[]>([]);
    const [loadingForSkeleton, setLoadingForSkeleton] = useState<boolean>(true);
    const [refresh, setRefresh] = useState<boolean>(false)
    const [isLoading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const users = await getUsers(); // Menunggu data pengguna diambil
                setData(users); // Set data ke state
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
                <SkeletonText />
                <SkeletonTable />
            </section>
        );
    }
    return (
        <>
            {isLoading && (
                <Loading />
            )}
            <section>
                <div className="mb-5 space-y-2">
                    <p className="text-2xl font-semibold">Daftar pengguna</p>
                    <p className="max-w-[90%]">Daftar pengguna adalah cara untuk mengatur dan mengelola kelompok pengguna pada sebuah situs web atau platform. Ini membantu Anda menyasar pesan-pesan tertentu, personalisasi pengalaman, menyederhanakan tugas-tugas manajemen, dan memperoleh wawasan yang lebih baik tentang bagaimana perilaku segmen pengguna yang berbeda. Di bagian daftar pengguna, Anda biasanya dapat membuat daftar baru, melihat yang sudah ada, menambahkan atau menghapus pengguna, dan mengedit detail daftar.</p>
                </div>
                <TableUser
                    data={data}
                    setRefresh={setRefresh}
                    refresh={refresh}
                    setLoading={setLoading}
                />
            </section>
        </>
    );
};
