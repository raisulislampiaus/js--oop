const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMssg = document.querySelector('.update-mssg');




newChatForm.addEventListener('submit',e=>{
	e.preventDefault()
	const message = newChatForm.message.value.trim();
	chatroom.addChat(message)
	.then(()=>newChatForm.reset())
	.catch(err=>console.log(err))
})


newNameForm.addEventListener('submit',e=>{
	e.preventDefault()

	const newName = newNameForm.name.value.trim()
	chatroom.updateName(newName);
	newNameForm.reset();


	updateMssg.innerHTML = `your name update to ${newName}`
	setTimeout(()=>{
		updateMssg.innerHTML = ""

	},3000)

})

const username = localStorage.username ? localStorage.username : "404" 

const chatUI = new ChatUI(chatList)

const chatroom = new Chatroom(username)

chatroom.getChats(data=>{
	chatUI.render(data)
})
