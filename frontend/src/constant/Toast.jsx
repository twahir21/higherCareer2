import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastExample = () => {
  const showToast = () => {
    toast.success("Your action was successful!", {
      position: "top-right",
      autoClose: 3000, // Closes after 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div>
      <button onClick={showToast} className="toast-btn">
        Show Toast
      </button>
      <ToastContainer />
    </div>
  );
};

export default ToastExample;

// we can also use warn, error or info