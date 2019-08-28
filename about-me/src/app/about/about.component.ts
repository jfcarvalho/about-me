import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  data: any[] = [
    {  
    'name' : 'Capgemini (Sept/2019-present)',  
    'position' : 'Systems Analyst Fulltime',
    'activities' : ['In progress'],   
    },
    {
    'name' : 'Solutis Tecnologias (Oct/2018-Ago/2019)',  
    'position' : 'Developer Analyst Fulltime',
    'activities' : ['JSF Framework (MVC)', 'Hibernate and JPA for persistence data.', 'Primefaces, Bootstrap, Ajax and jQuery for frontend programming', 'Maven POM for automatic dependency management', 'ORACLE and SQL SERVER Data base', 'SCRUM Agile methodology', 'Project Design Analysis with Use Case and Class Diagrams', 'JBOSS and ISS aplication servers with Docker and Openshift for container management', 'Continous Integration with Jenkins tool', 'GIT and SVN for Version Control tools', 'jUnit and Mockito for Unity Tests Development', 'JasperReports and iReport for report design' ],
    },
    {      
    'name' : 'W6 Solutions (Feb/2018-Jun/2018)',  
    'position' : 'Intern Fullstack Developer',
    'activities' : ['PHP coding','Wordpress template and plugins coding','REST WebServices development']       
    },
    {
    'name' : 'Companhia de Transportes do Estado da Bahia (Oct/2015-Ago/2017)',  
    'position' : 'Java Web Developer',
    'activities' : ['Java Spring MVC development', 'HTML5, CSS3, jQuery, Thymeleaf for frontend development','SQL language for database query', 'Use Case and Requirements artifacts analysis']          
    }

            ];

  socialMedia: any[] = [
  {
    'iname' : 'certificates',
    'icon' : 'assets/img/certificates.jpg',
    'link' : 'https://drive.google.com/drive/folders/0ByVFvHfrhC5XWmNkZnl1WUt5aGM?usp=sharing',
  },
  {
    'iname' : 'facebook',
    'icon' : 'assets/img/fb.png',
    'link' : 'https://www.facebook.com/jean.carvalho.37',
  },
  {
    'iname' : 'linkedin',
    'icon' : 'assets/img/linkedin.png',
    'link' : 'https://www.linkedin.com/in/jean-carvalho-a5b6b544/',
  },
  {
    'iname' : 'overleaf',
    'icon' : 'assets/img/resume.png',
    'link' : 'https://pt.overleaf.com/read/szzzkwwbmvjx',
  },
  {
    'iname' : 'github',
    'icon' : 'assets/img/github.png',
    'link' : 'http://github.com/jfcarvalho',
  },
  ];

  myOptionsTP = {
    'placement': 'left',
    'show-delay': 500
  }

  skills: any[] = [
    {
      'language' : 'Java',
      'level' : '90',
    },
    {
      'language' : 'HTML/CSS/JS',
      'level' : '90',
    },
    {
      'language' : 'PHP',
      'level' : '90',
    },
  
    {
      'language' : 'SQL',
      'level' : '80',

    },
    {
      'language' : 'R',
      'level' : '80',

    },
    {
      'language' : 'Ruby',
      'level' : '70',
    },
    {
      'language' : 'Angular',
      'level' : '40',
    },




 
  
    ];

            
  constructor() { }

  ngOnInit() {
  }

}
