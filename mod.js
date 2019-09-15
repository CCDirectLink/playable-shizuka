function hookMenuLea() {
	return {
		shizukaSkinGfx: new ig.Image("media/gui/menu-shizuka.png"),
		init() {
			this.parent();
			this.oldGfx = this.gfx;
		},
		updateDrawables(renderer) {
			if (sc.newgame.get('clone')) {
				this.gfx = this.shizukaSkinGfx;
			} else {
				this.gfx = this.oldGfx;
			}
			this.parent(renderer);
		}
	};
}

sc.MainMenu.LeaLarge.inject(hookMenuLea());


sc.MainMenu.LeaSmall.inject(hookMenuLea());

sc.PARTY_OPTIONS.push("Leazuka");




function hookMessages() {
	return {
		init(a){
			if (sc.newgame.get('clone')) {
				if(a.person.person === "main.lea") {
					a.person.person = "main.leazuka";
				}
			}
			this.parent(a);	
		}
	};
}

ig.EVENT_STEP.ADD_MSG_PERSON.inject(hookMessages());
ig.EVENT_STEP.REMOVE_MSG_PERSON.inject(hookMessages());
ig.EVENT_STEP.SET_MSG_EXPRESSION.inject(hookMessages());
ig.EVENT_STEP.SHOW_MSG.inject(hookMessages());
ig.EVENT_STEP.SHOW_CHOICE.inject(hookMessages());
ig.EVENT_STEP.SHOW_SIDE_MSG.inject(hookMessages());




function hookShowExternAnim() {
	return {
		init(a){
			const sheetMapping = {
				"player": "player-shizuka",
				"player-hugging": "shizuka-hugging",
				"player-poses": "shizuka-poses",
				"player-poses-debug": "shizuka-poses-debug",
				"player-weak": "shizuka-weak"
			};
			if (sc.newgame.get('clone')) {
				if (sheetMapping[a.anim.sheet]) {
					a.anim.sheet = sheetMapping[a.anim.sheet];
					if (a.followUp && sheetMapping[a.followUp.sheet]) {
						a.followUp.sheet = sheetMapping[a.followUp.sheet];
					}
				} else {
					console.log('Not a mapping', a.anim.sheet);
				}
				

			}
			this.parent(a);	
		}
	};
}

ig.ACTION_STEP.SHOW_EXTERN_ANIM.inject(hookShowExternAnim());
ig.EVENT_STEP.SHOW_EXTERN_ANIM.inject(hookShowExternAnim());

function hookShowAnim() {
	return {
		init(a){
			if(a.anim && a.anim.includes("Lea")) {
				debugger;
			}			
			const sheetMapping = {
				"solarFistHoldLea": "solarFistHoldLeazuka"
			};
			if (sc.newgame && sc.newgame.get('clone')) {
				if (sheetMapping[a.anim]) {
					a.anim = sheetMapping[a.anim];
					if (a.followUp && sheetMapping[a.followUp]) {
						a.followUp = sheetMapping[a.followUp];
					}
				} else {
					console.log('Not a mapping', a.anim);
				}
				

			}
			this.parent(a);	
		}
	};
}

ig.ACTION_STEP.SHOW_ANIMATION.inject(hookShowAnim());

ig.EVENT_STEP.SHOW_ANIMATION.inject(hookShowAnim());