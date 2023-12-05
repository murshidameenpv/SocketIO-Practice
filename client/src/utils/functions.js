function sendNotification(message, user) {
    const notification = new Notification("New message from Open Chat", {
      icon: '../assets/chat.png',
      body: `@${user}: ${message}`
    })
    notification.onclick = ()=> function() {
      window.open("http://localhost:3000/chat")
  }
  console.log("Notificationpoped up!!!!!!!!!!!!");
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