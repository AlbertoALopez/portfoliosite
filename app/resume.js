import VanillaModal from 'vanilla-modal';
import JSONFormatter from 'json-formatter-js';
import framework from '../style/framework.scss';
import modalcss from "../style/_modal.scss";
import resumecss from "../style/_resume.scss";

const options = {

};

const modal = new VanillaModal(options);
modal.open('#modal-1');

var jsonView = document.getElementById("jsonView");
var resume =
{
	"downloadAsPDF": {
		"url": "http://codepen.io/albertalopez/"
	},
  "basics": {
    "name": "Alberto A. Lopez",
    "label": "Developer",
    "picture": "",
    "email": "me@albertoalopez.co",
    "phone": "(647) 703-6582",
    "website": "albertoalopez.ca",
    "summary": "Alberto is a programmer, developer and tinkerer hailing from Toronto, Ontario. \n He has experience in automation, data visualization, web development and project management. \n His non-work interests lie in analog electronics, songwriting, and taking selfies with his cats.",
    "location": {
      "address": "#1-668 Bathurst Street",
      "postalCode": "M5S 2R3",
      "city": "Toronto",
      "countryCode": "CA",
      "region": "ON"
    },
    "profiles": [
      {
        "network": "Codepen",
        "username": "albertolopez",
        "url": "http://codepen.io/albertalopez/"
      }
    ]
  },
  "relevantExperience": [
    {
      "company": "Freelance Web Developer",
      "position": "Self-employed",
      "website": "albertoalopez.co",
      "startDate": "2016-01-01",
      "endDate": "Present",
      "summary": "Freelance web developer.",
      "highlights": [
        "Developed and deployed multiple websites for professional and educational purposes.",
				"Maintained personal VPS for hosting and deployment.",
      ]
    },
		{
      "company": "19gale",
      "position": "Project Manager",
      "website": "19gale.ca",
      "startDate": "2012-01-01",
      "endDate": "2013-09-01",
      "summary": "Managed projects for a small web development company, with a team including a developer, designer \n and copywriter.",
      "highlights": [
        "Successfully delivered several websites for small businesses and organizations within the GTA region."
      ]
    },
		{
      "company": "Bahai National Center",
      "position": "National Statistics Officer",
      "website": "www.ca.bahai.org",
      "startDate": "2012-02-01",
      "endDate": "2013-03-01",
      "summary": "Responsible for statistical analysis, data visualization and training of regional officers.",
      "highlights": [
        "Implemented a robust system of reporting, providing quantitative and qualitative analysis that informed \n decision making.",
				"Developed training materials focused on raising technical and qualitative analytical skills.",
				"Automated workflow using Python, pywin32, MS Access and SQL."
      ]
    }
  ],
  "additionalWork": [
    {
      "company": "Newcon Optik",
      "position": "Electro Optical Technician",
      "website": "www.newcon-optik.com",
      "startDate": "2015-05-01",
      "endDate": "2015-11-01",
      "summary": "Assembly, testing and calibration of high end optical equipment for the defense industry.",
      "highlights": [
        "Supported engineering, optics and quality assurance departments to ensure product quality met \n industry standards.",

				"Assisted in porting FPGA routines to proprietary C code.",
				"Developed new documentation, implementation standards and testing practices."
      ]
    }
  ],
  "education": [
    {
      "institution": "Wilfrid Laurier University",
      "area": "Waterloo",
      "studyType": "Economics",
      "startDate": "2007",
      "endDate": "2011"
    },
    {
      "institution": "Ryerson University Chang School",
      "area": "Toronto",
      "studyType": "Computer Science",
      "startDate": "2013",
      "endDate": "Present",
      "courses": [
        "Computer science I",
				"Computer science II",
				"Introduction to C and Unix",
				"Data structures and algorithms"
      ]
    }
  ],
  "skills": [
    {
      "name": "Recently used",
      "level": "",
      "keywords": [
        "Javascript",
				"Python",
				"HTML5",
				"CSS3",
				"SQL",
				"NodeJS",
				"Apache",
				"Nginx"
      ]
    },
    {
      "name": "Frameworks/libraries",
      "level": "",
      "keywords": [
        "jQuery",
				"React/flux/redux",
				"GSAP",
				"Flask"
      ]
    },
    {
      "name": "Tools/Technology",
      "level": "",
      "keywords": [
				"npm",
				"Grunt",
				"Webpack",
				"CLI tools",
				"Linux/Windows/OSX",
				"Arduino"
      ]
		},
    {
      "name": "Rapidly forgetting",
      "level": "",
      "keywords": [
				"C",
				"C++",
				"Java",
				"R"
      ]
    }
  ]
};

try {
	var formatter = new JSONFormatter(resume, 5, {hoverPreviewEnabled: true, });
	jsonView.innerHTML = "";
	jsonView.appendChild(formatter.render());
}
catch(e) {
	console.error(e);
}
