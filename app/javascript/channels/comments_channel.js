import consumer from "./consumer"

consumer.subscriptions.create("CommentsChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
    console.log('Connected to the room!')
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    let div = document.querySelector('#comments');
    div.innerHTML += `<p>${data.content} - ${data.date}</p>`
  }
});
