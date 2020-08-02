export default class PlayableShizukaMod {
    constructor(mod) {
        this.mod = mod;
    }

    async preload() {
        DynamicJson.forExactUrl('data/animations/player-shizuka.json', async function() {
            const playerData = await fetch('data/animations/player.json');
            const values = [
                "walk",
                "walk2",
                "walk3",
                "poses",
                "itemPoses",
                "idlePoses"
            ];
            for (const value of values) {
                playerData.namedSheets[value].src = "media/entity/player/shizuka/move.png";
            }
            
            const values2 = [
                "throw",
                "special"
            ];

            for (const value of values2) {
                playerData.namedSheets[value].src = "media/entity/player/shizuka/throw.png";
            }

            return playerData;
        });

        DynamicJson.forRegExpUrl('data/animations/shizuka-hugging.json', async function() {
            const playerData = await fetch('data/animations/player-hugging.json');
            const values = [
                "schneider1",
                "schneider2",
                "schneider3",
                "emilie1",
                "ctron1",
                "apollo1",
                "mixed"
            ];
            for (const value of values) {
                playerData.namedSheets[value].src = "media/entity/player/shizuka/hugging.png";
            }

            return playerData;
        });

        DynamicJson.forRegExpUrl('data/animations/shizuka-poses.json', async function() {
            const playerData = await fetch('data/animations/player-poses.json');
            const values = [
                "poses",
                "poses4dir",
                "sideWalk",
                "sidePoses",
                "sidePoses2",
                "sleepPoses",
                "sleepPoses2",
                "drill",
                "drillSide"
            ];
            for (const value of values) {
                playerData.namedSheets[value].src = "media/entity/player/shizuka/poses.png";
            }
            
            return playerData;
        });

        DynamicJson.forRegExpUrl('data/animations/shizuka-poses-debug.json', async function() {
            const playerData = await fetch('data/animations/player-poses-debug.json');

            playerData.namedSheets.debug = 'media/entity/player/shizuka/poses-debug.png';
            
            return playerData;
        });

        DynamicJson.forRegExpUrl('data/animations/shizuka-weak.json', async function() {
            const playerData = await fetch('data/animations/player-poses.json');

            playerData.namedSheets.walk = 'media/entity/player/shizuka/move-weak.png';
            
            return playerData;
        });
    }

}