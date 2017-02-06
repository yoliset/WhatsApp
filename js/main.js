var liListItem = null;

function onMensajeKey(evt)
{
	if(evt.keyCode == 13)
	{
		var elInputMensajes = document.getElementById("mensajes");

		crearChat(elInputMensajes.value);
		crearMensaje(elInputMensajes.value);

		elInputMensajes.value = "";
	}
}

function crearMensaje(_mensaje)
{
	var htmlMensajeIn = '<div class="w-message w-message-in">' +
		'<div class="w-message-text">' +
			'<h5 class="green-1">Maria Paula Rivarola</h5>'+
			'<p>Jajaja Sii finalmente se corto!!</p>'+
			'<div class="time">11:13</div>'+
		'</div>'+
	'</div>';

	var d = new Date();
	var htmlMensajeOut = '<div class="w-message w-message-out">' +
		'<div class="w-message-text">' +
			'<p>' + _mensaje + '</p>' +
			'<div class="time">' + d.getHours() + ':' + d.getMinutes(); + '</div>' +
		'</div>' +
	'</div>';

	var mensaje = liListItem.getElementsByClassName("w-last-message")[0];
	mensaje.innerHTML = _mensaje;
	console.log();


	var elChat = document.getElementById("chat");
	elChat.innerHTML += htmlMensajeOut;
	elChat.scrollTop = elChat.scrollHeight;
}

function crearListaChats()
{

}
function crearChat(_mensaje)
{
	var elListaChats = document.getElementById("lista-chats");

	if(liListItem == null)
	{
		liListItem = document.createElement('LI');
		var htmlChatItem =  '<div class="avatar">' +
				'<img src="image/logocodeacademy.png" alt="" class="wh-44">' +
				'<h4 class="w-contact-name">Laboratoria Perú</h4>' +
				'<p class="w-last-message" id="mensaje">' + _mensaje + '</p>' +
			'</div>' +
			'<div class="time" id="hora">14:27</div>';

		liListItem.innerHTML = htmlChatItem;

		elListaChats.insertBefore(liListItem, elListaChats.childNodes[0]);
	}
	//elListaChats.innerHTML += htmlChatItem;
}

function actualizarCabeceraChat()
{

}