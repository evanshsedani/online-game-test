class Game{
    constructor(){

    }


    Start(){
        if(gamestate === 0){
        player = new Player();
        form = new Form();
        player.getCount()
        form.view()
        }


    }

    getState(){
        database.ref('gameState').on("value",function (data){
            gamestate  = data.val()
            });
        
    }

    update(state){
        database.ref('/').update({
            gameState:state 
        });
    }
}