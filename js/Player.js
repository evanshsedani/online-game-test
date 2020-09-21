class Player{
    constructor(){

    }
    getCount(){
        database.ref('playerCount').on("value",function (data){
            playercount  = data.val()
        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        });
    }


    update(name){
        var playerindex = "player"+playercount;
        database.ref(playerindex).set({
            name:name
        });
    }
}