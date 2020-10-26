// function WidgetCallback(JSONobject) {
//     var wHelloWorld = JSONobject[0];
//     var wHTML = "";

//     wHTML += ('<div id="frame">'); //open chat frame tag
//     wHTML += ('<div class="content"><div class="contact-profile"><img src=""' + wHelloWorld.image_url + '"" alt="" /><p><span class="AgentName">Harvey Specter</span>');
//     wHTML += ('<span class="AgentText">Questions? we are here to help</span></p><a href="javascript:;" class="minimizeChat2">');
//     wHTML += ('<i class="fa fa-window-minimize" aria-hidden="true"></i></a>');
//     wHTML += ('</div><div class="messages"><ul><li class="sent"><img src="assets/images/userimg.jpg" alt="" /><p>How may i help you?</p></li>');
//     wHTML += ('<li class="replies"><img src="assets/images/userimg.jpg" alt="" /><p>Hi there.!</p></li></ul></div>');
//     wHTML += ('<div class="message-input"><div class="wrap"><input type="text" placeholder="Write your message..." /><i class="fa fa-paperclip attachment" aria-hidden="true"></i>');
//     wHTML += ('<button class="submit">send</button></div></div></div>');
//     wHTML += ('</div>'); //close chat frame tag
   
// console.log(wHTML);
//     document.getElementById('ChatWidget').innerHTML = wHTML;
// }
var link = "https://chat-widget-2.glitch.me/";
var wHTML = "";
    wHTML += ('<div id="frame">'); //open chat frame tag
    wHTML += ('<div class="content"><div class="contact-profile"><img src="'+link+'assets/images/userimg.jpg" alt="" /><p><span class="AgentName">Harvey Specter</span>');
    wHTML += ('<span class="AgentText">Questions? we are here to help</span></p><a href="javascript:;" class="minimizeChat2">');
    wHTML += ('<i class="fa fa-window-minimize" aria-hidden="true"></i></a>');
    wHTML += ('</div><div class="messages"><ul><li class="sent"><img src="assets/images/userimg.jpg" alt="" /><p>How may i help you?</p></li>');
    wHTML += ('<li class="replies"><img src="assets/images/userimg.jpg" alt="" /><p>Hi there.!</p></li></ul></div>');
    wHTML += ('<div class="message-input"><div class="wrap"><input type="text" placeholder="Write your message..." /><i class="fa fa-paperclip attachment" aria-hidden="true"></i>');
    wHTML += ('<button class="submit">send</button></div></div></div>');
    wHTML += ('</div>'); //close chat frame tag
    document.getElementById('ChatWidget').innerHTML = wHTML;