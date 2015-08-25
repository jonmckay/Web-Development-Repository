
var bio = {
	"name" : "Jon McKay",
	"role" : "Web Developer",
	"welcomeMessage" : "Welcome to my test website for learning javascript",
	"contacts" : {
		"mobile" : "801-111-1111",
		"email" : "someone@example.com",
		"github" : "johndoe",
		"twitter" : "@johndoe",
		"location" : "Utah",
	},	
	"skills" : ["sleeping", "coding", "thinking"],
	"pictureUrl" : "images/fry.jpg"
}

var work = {
	"jobs" : [		
		{		
			"employer" : "Generic Employer",
			"title" : "Software Engineer",
			"dates" : "1999-2015",
			"location" : "Salt Lake City",
			"description" : "I created a lot of software in this job"
		},		
		{
			"employer" : "Generic Company",
			"title" : "Software Engineer",
			"dates" : "1901-1950",
			"location" : "Cool City",
			"description" : "I did a lot in this job"
		}
	]
}

var education = {
	 "schools" : [
		{
			"name" : "Highschool",
			"location" : "Middle of nowhere",
			"degree" : "BS",
			"majors" : ["none"],			
			"dates" : 2007,
			"url" : "http://example.com"
		},
		{
			"name" : "College",
			"location" : "Middle of nowhere",
			"degree" : "BS",	
			"majors" : ["comp sci"],			
			"dates" : 2013,
			"url" : "http://example.com"
		}
	],

	"onlineCourses" : [
		{
			"title" : "javascript Syntax",
			"school" : "Udacity",
			"dates" : 2015,
			"url" : "http://www.udacity.com"
		}
	]
}

var projects = {
	"projects" : [ 
		{
			"title" : "Manufacturing Calibration Application",
			"dates" : "2012-Present",
			"description" : "Calibration for tools",
			"images" : ["images/mfgCal.jpg", "images/mfgCal.jpg"]
		},
		{
			"title" : "Database Viewer Application",
			"dates" : "2015-Present",
			"description" : "Allows users to view the database",
			"images" : ["images/databaseViewer.jpg", "images/databaseViewer.jpg"]
		}
	]
}




 var formattedName = HTMLheaderName.replace("%data%", bio.name);
 $("#header").append(formattedName);

 var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
 $("#header").append(formattedRole);

var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#header").append(mobile);

var email = HTMLemail.replace("%data%", bio.contacts.email);
$("#header").append(email);

var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#header").append(twitter);

$("#header").append(HTMLcontactGeneric.replace("%data%", twitter))

var formattedPicture = HTMLbioPic.replace("%data%",bio.pictureUrl);
$("#header").append(formattedPicture);

var github = HTMLgithub.replace("%data%", bio.contacts.github);
$("#header").append(github);

var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMessage);


if (bio.skills.length > 0) 
	{ 
		$("#header").append(HTMLskillsStart);
		
		var skills = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(skills);
		skills = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(skills);
		skills = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(skills);
	};

function displayWork()
{
	for(job in work.jobs)
	{
		$("#workExperience").append(HTMLworkStart);

		var formatEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formatTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formatEmployer + formatTitle;
		var formatDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formatDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formatDate);
		$(".work-entry:last").append(formatDescription);
	}
}


displayWork();

$(document).click(function(loc) {
  logClicks(x, y);
});

// $("#main").append(education.name);
// $("#main").append(work["position"]);


// var education = {};

// education["name"] = "Generic School";
// education["years"] = "1999-2004";
// education["city"] = "Generic City";

// $("#header").append(HTMLContactGeneric);


