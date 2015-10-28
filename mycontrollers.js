app.controller('trainController',function(visibility){
 this.isCollapsed = visibility;	
 this.radioModel = '';
});

app.controller('ExperienceController',function(org_summary, visibility){
	this.cmpns = org_summary;
    this.selectCmpny={};
    this.visible = visibility;

    
});

app.controller("DetailsController", function(visibility) {
	this.visible = visibility;
	
	this.setTab = function(currentTab) {
		this.tab = currentTab ;
	}
	this.isSelected = function(checkTab){
		return this.tab === checkTab || 0;
	}
	this.bdo = {};
	this.loc = {};
    this.radioModel = '';
});