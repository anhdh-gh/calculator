import { ToastContainer, toast } from "react-toastify"

const Toast = () => <ToastContainer
    position="bottom-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
/>

export const notify = {
    error: message => {
        toast.dismiss() // All the displayed toasts will be removed
        const id = toast.error(message)
        return id
    },

    warn: message => {
        toast.dismiss()
        const id = toast.warn(message)
        return id
    },

    info: message => {
        toast.dismiss()
        const id = toast.info(message)
        return id
    },    

    success: message => {
        toast.dismiss()
        const id = toast.success(message)
        return id
    },    

    loading: message => {
        toast.dismiss()
        const id = toast.loading(message)
        return id
    },

    update: (id, message) => {
        toast.update(id, {render: message})
    }
}

export default Toast