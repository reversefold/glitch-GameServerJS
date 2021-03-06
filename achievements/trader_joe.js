var name		= "Trader Joe";
var collection_type	= 0;
var is_secret		= 0;
var desc		= "Traded with other players 3 times";
var status_text		= "It's not easy to earn a Trader Joe badge. It's not hard, either, but you've done it, so good on you.";
var last_published	= 1338927233;
var is_shareworthy	= 0;
var url		= "trader-joe";
var category		= "social";
var url_swf		= "http:\/\/c2.glitch.bz\/achievements\/2012-11-06\/trader_joe_1352232450.swf";
var url_img_180		= "http:\/\/c2.glitch.bz\/achievements\/2012-11-06\/trader_joe_1352232450_180.png";
var url_img_60		= "http:\/\/c2.glitch.bz\/achievements\/2012-11-06\/trader_joe_1352232450_60.png";
var url_img_40		= "http:\/\/c2.glitch.bz\/achievements\/2012-11-06\/trader_joe_1352232450_40.png";
function on_apply(pc){
	
}
var conditions = {
	384 : {
		type	: "group_sum",
		group	: "players_traded",
		value	: "3"
	},
};
function onComplete(pc){ // generated from rewards
	var multiplier = pc.buffs_has('gift_of_gab') ? 1.2 : pc.buffs_has('silvertongue') ? 1.05 : 1.0;
	multiplier += pc.imagination_get_achievement_modifier();
	if (/completist/i.exec(this.name)) { 
		 var level = pc.stats_get_level(); 
		 if (level > 4) {  
				multiplier *= (pc.stats_get_level()/4); 
		} 
	} 
	pc.stats_add_xp(round_to_5(100 * multiplier), true);
	pc.stats_add_favor_points("friendly", round_to_5(10 * multiplier));
	if(pc.buffs_has('gift_of_gab')) {
		pc.buffs_remove('gift_of_gab');
	}
	else if(pc.buffs_has('silvertongue')) {
		pc.buffs_remove('silvertongue');
	}
}
var rewards	= {
	"xp"	: 100,
	"favor"	: {
		"giant"		: "friendly",
		"points"	: 10
	}
};

//log.info("trader_joe.js LOADED");

// generated ok (NO DATE)
