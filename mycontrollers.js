
app.controller('ExperienceController',['myRepository',function(myRepository){

	this.selectOrg = '';
	this.org_list = myRepository.org_list;
    this.selectCmpny={};
    this.visible = myRepository.visibility;    
    this.basic_details = myRepository.basic_details;
}]);


app.controller("DetailsController",['myRepository', function(myRepository) {
	this.visible = myRepository.visibility;
	
	this.setTab = function(currentTab) {
		this.tab = currentTab ;
	}
	this.isSelected = function(checkTab){
		return this.tab === checkTab || 0;
	}
	
    this.radioModel = '';    
    this.roles_respns = myRepository.roles_rspns;
    this.bus_doms = myRepository.bus_domains;
    this.locations = myRepository.org_otherLocations;
}]);

app.controller('trainController',['myRepository',function(myRepository){
 this.isCollapsed = myRepository.visibility;	
 this.radioModel = '';
}]);