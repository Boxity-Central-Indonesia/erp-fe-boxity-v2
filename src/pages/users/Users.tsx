import { useEffect, useState } from "react";
import { getUsers } from "@/services/userServices";
import { SkeletonTable } from "@/components/commons/skeleton/SkeletonTable";
import { SkeletonText } from "@/components/commons/skeleton/SkeletonText";
import { TableUser } from "./Table";
import { userForm } from "./type/userType";

export const Users = () => {
    // State untuk menyimpan data pengguna
    const [data, setData] = useState<userForm[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const users = await getUsers(); // Menunggu data pengguna diambil
                setData(users); // Set data ke state
            } catch (error) {
                console.error("Failed to fetch users:", error);
            } finally {
                setLoading(false); // Menghentikan loading setelah data diambil atau terjadi error
            }
        };

        fetchData(); // Panggil fungsi fetchData untuk mengambil data saat komponen dimuat
    }, []);

    if (loading) {
        return (
            <section>
                <SkeletonText />
                <SkeletonTable />
            </section>
        );
    }
    return (
        <>
            <section>
                <div className="mb-5 space-y-2">
                    <p className="text-2xl font-semibold">Daftar pengguna</p>
                    <p className="max-w-[90%]">Daftar pengguna adalah cara untuk mengatur dan mengelola kelompok pengguna pada sebuah situs web atau platform. Ini membantu Anda menyasar pesan-pesan tertentu, personalisasi pengalaman, menyederhanakan tugas-tugas manajemen, dan memperoleh wawasan yang lebih baik tentang bagaimana perilaku segmen pengguna yang berbeda. Di bagian daftar pengguna, Anda biasanya dapat membuat daftar baru, melihat yang sudah ada, menambahkan atau menghapus pengguna, dan mengedit detail daftar.</p>
                </div>
               <TableUser data={data}/>
            </section>
        </>
    );
};
