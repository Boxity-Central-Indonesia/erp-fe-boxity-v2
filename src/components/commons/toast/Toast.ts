// utils/toast.ts
import Swal from "sweetalert2";

export const showToast = ({
  icon = "success",
  title = "",
  position = "top-end",
  timer = 3000,
  toast = true,
}: {
  icon?: "success" | "error" | "warning" | "info" | "question";
  title: string;
  position?: "top" | "top-start" | "top-end" | "center" | "center-start" | "center-end" | "bottom" | "bottom-start" | "bottom-end";
  timer?: number;
  toast?: boolean;
}) => {
  const Toast = Swal.mixin({
    toast,
    position,
    showConfirmButton: false,
    timer,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  Toast.fire({
    icon,
    title,
  });
};
