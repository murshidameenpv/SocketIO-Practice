export const sendNotification = (message, user) => {
    
}


export const checkPageStatus = (message, user) => {
    if(!("Notification" in window)) {
      alert("This browser does not support system notifications!")
    } 
    else if(Notification.permission === "granted") {
      sendNotification(message, user)
    }
    else if(Notification.permission !== "denied") {
       Notification.requestPermission((permission)=> {
          if (permission === "granted") {
            sendNotification(message, user)
          }
       })
    }
}