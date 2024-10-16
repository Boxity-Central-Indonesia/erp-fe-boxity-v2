import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
  import { deleteUser } from "@/services/userServices"
  import { useToast } from "@/hooks/use-toast"

  type AlertDialogProps = {
    id: string,
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
    setRefresh: React.Dispatch<React.SetStateAction<boolean>>
    refresh: boolean
  }
  
  export const AlertDialogDelete:React.FC<AlertDialogProps> = ({
    id,
    setOpenModal,
    setLoading,
    setRefresh,
    refresh
  }) => {

    const {toast} = useToast()

    const handleClick = async () => {
      setLoading(true)
      await deleteUser(id)
      setRefresh(!refresh)
      setOpenModal(false)
      setLoading(false)
      toast({
        title: 'User berhasil dihapus'
      })
    }

    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className="bg-red-600 hover:bg-red-700 text-white hover:text-white" variant="outline">Hapus</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Apakah kamu yakin?</AlertDialogTitle>
            <AlertDialogDescription>
            Tindakan ini tidak dapat dibatalkan. Tindakan ini akan menghapus data Anda secara permanen dan menghapus data Anda dari server kami.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Batal</AlertDialogCancel>
            <AlertDialogAction onClick={() => handleClick()} className="bg-red-600 hover:bg-red-700 text-white">Lanjutkan</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  