//守卫
var GUARD = (function(){
	var index = 0;
	var point = 1;
	var type = "守卫";
	function skill(people,guessingType){
		if(people.showCard.type === "女仆"){
			alert("你不能询问女仆");
		}else{
			if(people.showCard.type===guessingType){
				people.status = 0;//猜中了，退出游戏
			}
		}
	}
	function init(){
		return {
			index:index++,
			point:point,
			type:type,
			skill:skill
		};
	}
	return init;	
})();
//牧师
var MINISTER = (function(){
	var index = 0;
	var point = 2;
	var type = "牧师";
	function skill(people){
		return people.handCard.type;
	}
	function init(){
		return {
			index:index++,
			point:point,
			type:type,
			skill:skill
		};
	}
	return init;	
})();
//男爵
var BARON = (function(){
	var index = 0;
	var point = 3;
	var type = "男爵";
	function skill(me,other){
		if(other.handCard.point>point){
			me.status = 0;//拼点输了，自己退出游戏
		}else if(other.handCard.point<point){
			other.status = 0;//拼点应了，对方退出游戏
		}else{
			//相等，没事发生
		}
	}
	function init(){
		return {
			index:index++,
			point:point,
			type:type,
			skill:skill
		};
	}
	return init;	
})();
//女仆
var MAID = (function(){
	var index = 0;
	var point = 4;
	var type = "女仆";
	function skill(me,other){
		me.status = 2;
	}
	function init(){
		return {
			index:index++,
			point:point,
			type:type,
			skill:skill
		};
	}
	return init;	
})();
//王子
var PRIENCE = (function(){
	var index = 0;
	var point = 5;
	var type = "王子";
	function skill(people){
		USEDCARD.push(people.handCard);
		if(UNUSEDCARD.lenght===0){
			//用完洗牌
			for(var i=USEDCARD.length;i===0;i--){
				UNUSEDCARD.push(USEDCARD[i]);
			}
			USEDCARD = [];
		}
		people.handCard = UNUSEDCARD.pop();
	}
	function init(){
		return {
			index:index++,
			point:point,
			type:type,
			skill:skill
		};
	}
	return init;	
})();
//国王
var KING = (function(){
	var index = 0;
	var point = 6;
	var type = "国王";
	function skill(me,other){
		if(other.status===1){
			var tempCard;
			tempCard = me.handCard;
			me.handCard = other.handCard;
			other.handCard = me.handCard;
			return true;
		}else{
			alert("所选玩家非法");	
			return false;
		}
	}
	function init(){
		return {
			index:index++,
			point:point,
			type:type,
			skill:skill
		};
	}
	return init;	
})();
//女伯爵
var COUNTESS = (function(){
	var index = 0;
	var point = 7;
	var type = "女伯爵";
	function skill(me){
		if(me.handCard.type==="国王"||me.handCard.type==="公主"){
			USEDCARD.push(me.showCard);//丢弃女伯爵
			me.showCard = this;
		}
	}
	function init(){
		return {
			index:index++,
			point:point,
			type:type,
			skill:skill
		};
	}
	return init;	
})();
//公主
var PRIENCESS = (function(){
	var index = 0;
	var point = 8;
	var type = "公主";
	function skill(me){
		me.status = 0;//自杀
	}
	function init(){
		return {
			index:index++,
			point:point,
			type:type,
			skill:skill
		};
	}
	return init;	
})();