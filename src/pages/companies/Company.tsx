import { useEffect, useState } from "react"
import { getCompanies, Companies } from "@/services/companiesServices"
import { SkeletonTable } from "@/components/commons/skeleton/SkeletonTable"
import { SkeletonText } from "@/components/commons/skeleton/SkeletonText"
import { TableCompany } from "./Table"


export const Company = () => {
    const [data, setData] = useState<Companies[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const companies = await getCompanies()
                setData(companies)
            } catch (error) {
                console.error("Failed to fetch users:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchData()
    }, [])


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
                    <p className="text-2xl font-semibold">Daftar perusahaan</p>
                    <p className="max-w-[90%]">Daftar perusahaan adalah direktori atau database perusahaan, sering kali disusun berdasarkan industri, lokasi, ukuran, atau kriteria relevan lainnya. Ini berharga untuk menemukan calon mitra, pemasok, pelanggan, atau pesaing. Daftar perusahaan juga dapat membantu riset pasar, pencarian kerja, dan peluang investasi. Tergantung pada platformnya, Anda mungkin dapat memfilter daftar perusahaan, melihat profil perusahaan dengan informasi kontak, dan mendapatkan wawasan tentang kinerja keuangan mereka.</p>
                </div>
                <TableCompany data={data} />
            </section>
        </>
    )
}