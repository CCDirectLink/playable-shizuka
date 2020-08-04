ccmod.resources.jsonGenerators.add('data/animations/player-shizuka.json', async () => {
    const playerData = await ccmod.resources.loadJSON('data/animations/player.json');
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

ccmod.resources.jsonGenerators.add('data/animations/shizuka-hugging.json', async () => {
    const playerData = await ccmod.resources.loadJSON('data/animations/player-hugging.json');
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

ccmod.resources.jsonGenerators.add('data/animations/shizuka-poses.json', async () => {
    const playerData = await ccmod.resources.loadJSON('data/animations/player-poses.json');
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

ccmod.resources.jsonGenerators.add('data/animations/shizuka-poses-debug.json', async () => {
    const playerData = await ccmod.resources.loadJSON('data/animations/player-poses-debug.json');

    playerData.namedSheets.debug = 'media/entity/player/shizuka/poses-debug.png';

    return playerData;
});

ccmod.resources.jsonGenerators.add('data/animations/shizuka-weak.json', async () => {
    const playerData = await fetch('data/animations/player-poses.json');

    playerData.namedSheets.walk = 'media/entity/player/shizuka/move-weak.png';

    return playerData;
});

ccmod.resources.jsonGenerators.add('data/characters/main/leazuka.json', async () => {
    const playerData = await ccmod.resources.loadJSON('data/characters/main/lea.json');

    playerData.name = {
        "en_US": "Leazuka",
        "de_DE": "Leazuka",
        "zh_CN": "Leazuka",
        "ja_JP": "Leazuka",
        "ko_KR": "Leazuka",
        "langUid": 1
    };

    playerData.animSheet = 'player-shizuka';

    playerData.face.src = 'leazuka.png';

    const subTypes = [
        'panic',
        'hand',
        'special'
    ];

    for (const subType of subTypes) {
        playerData.face.subImages[subType] = `leazuka-${subType}.png`;
    }

    return playerData;
});

ccmod.resources.jsonGenerators.add('data/players/leazuka.json', async () => {
    const playerData = await ccmod.resources.loadJSON('data/players/lea.json');

    playerData.character = 'main.leazuka';
    playerData.sheet = 'player-shizuka';

    return playerData;
});
