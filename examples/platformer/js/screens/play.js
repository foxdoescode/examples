game.PlayScreen = me.Stage.extend({
    /**
     *  action to perform on state change
     */
    onResetEvent: function() {
      // load a level
        me.levelDirector.loadLevel("map1");

        // reset the score
        game.data.score = 0;

        // add our HUD to the game world
        if (typeof this.HUD === "undefined") {
            this.HUD = new game.HUD.UIContainer();
        }
        me.game.world.addChild(this.HUD);

        // play some music
        // me.audio.playTrack("dst-gameforest");
    },

    /**
     *  action to perform on state change
     */
    onDestroyEvent: function() {

        // remove the HUD from the game world
        me.game.world.removeChild(this.HUD);

        // stop some music
        me.audio.stopTrack("dst-gameforest");
    }
});
