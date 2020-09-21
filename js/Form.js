class Form{
    constructor(){

    }
    view(){
        var title = createElement('h1')
        title.html("mygame");
        title.position(130, 0);

        var input = createInput("name");
        var button = createButton("play!");
        var greeting = createElement('h3');
        input.position(130, 160);
        button.position(250, 200);

        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playercount+= 1
            player.update(name);
            player.updateCount(playercount);
            greeting.html("hello "+name);
            greeting.position(130,160);
        })
    }
}