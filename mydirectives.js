app.directive("homePage",function() {

	return {
		restrict : 'E' ,
		templateUrl : "homepage.html"
	}
})

app.directive("profileSummary",function() {

	return {
		restrict : 'E' ,
		templateUrl : "prof_summary.html"
	}
})


app.directive("achievements",function() {

	return {
		restrict : 'E' ,
		templateUrl : "achievements.html"
	}
})

app.directive("training",function() {

	return {
		restrict : 'E' ,
		templateUrl : "trainings_new.html"
	}
})

app.directive("experience",function() {

	return {
		restrict : 'E' ,
		templateUrl : "experience.html"
	}
})

app.directive("skillSet",function() {

	return {
		restrict : 'E' ,
		templateUrl : "skillset.html"
	}
})

app.directive("rolesResponsibilities", function() {

	return {
		restrict : 'A' ,
		templateUrl : "roles_rspnsblts.html"
	};

});

app.directive("businessDomains", function() {

	return {
		restrict : 'A' ,
		templateUrl : "businessDomains.html"
	};

});


app.directive("otherLocations", function() {

	return {
		restrict : 'A' ,
		templateUrl : "otherLocations.html"
	};

});
