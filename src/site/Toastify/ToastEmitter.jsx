import { toast } from "react-toastify";

export const emitSuccessToast = (message) => {
  toast.success(message);
};

export const emitErrorToast = (message) => {
  toast.error(message);
};

export const emitWarnToast = (message) => {
  toast.warn(message);
};

export const emitInfoToast = (message) => {
  toast.info(message);
};
