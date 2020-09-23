import React from "react";
import { ToastContainer, toast } from "react-toastify";

const Notification = ({notifyType, notifySms}) => {
    
  //switching notification type
  const notify = (notifyType, notifySms) => {
    switch (notifyType) {
      case "success":
        toast.success(notifySms);
        break;
      case "error":
        toast.error(notifySms);
        break;
      default:
        break;
    }
  };

  //calling notufier
    notify(notifyType, notifySms);

//returning the notification
  return <ToastContainer />;
}

export default Notification;