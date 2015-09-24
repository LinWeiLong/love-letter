var PEOPLE = (function(){
	var index = 0;
	var name = "Player";
	var status = 1;//0:dead, 1:normal, 2:invincible
	var handCard;
	var showCard;

	function init(){
		return {
			index:index++,
			name:name,
			status:status,
			handCard:handCard,
			showCard:showCard

		};
	}
	return init;	
})();

var USEDCARD = [];
var UNUSEDCARD = [];