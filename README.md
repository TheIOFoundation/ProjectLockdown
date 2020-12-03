<a id="top"></a>
 ![logo](https://user-images.githubusercontent.com/9198668/85232285-68543380-b430-11ea-8353-1aafb79baf78.png) 
<!-- HACKTOBERFEST LOGO -->

<!-- ![screenshot](https://user-images.githubusercontent.com/9198668/94893112-f96b8980-04b8-11eb-984f-ad13b882a35a.png) -->
***
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](https://github.com/TheIOFoundation/ProjectLockdown/wiki/Code-of-Conduct)
[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://github.com/TheIOFoundation/ProjectLockdown/blob/master/LICENSE)


## NOTE: This is the new reppository for v2.0. Some information is still a work in progress. You can access the current runnning v1.0 repository <a href="https://github.com/Code-for-All/lockdown/">here</a> while we transition to the new version.


**Project Lockdown** (an initiative from The IO Foundation) is a civic tech, interactive platform providing an overview of the state of Human and  Digital Rights around the globe. It evaluates policies obtained from high quality sources that may impact their observance. It provides, among other tools, a layered map interface that allows for a visual representation of the policies adopted, assisting a broad range of stakeholders in understanding the global state of their Rights. This empowers them to become active agents of global change.

The project is the result of the collaborative effort from a global network of partners and volunteers who are dedicating their time and resources to ensure that we do not degrade the Rights we currently enjoy while simultaneously preparing them to become a new generation of Rights defenders.

The objective is to provide an overview of the state of the world to citizens and assist journalists and Human Rights defenders in their reporting and overseeing tasks.

https://ProjectLockdown.world

The IO Foundation: www.TheIOFoundation.org


## Values
Project Lockdown delivers its mission through the observance of the following values:
- Community
- Accountability
- Impact

See more about our [mission](https://github.com/TheIOFoundation/ProjectLockdown/wiki/About/#mission), [vision](https://github.com/TheIOFoundation/ProjectLockdown/wiki/About/#vision) and [values](https://github.com/TheIOFoundation/ProjectLockdown/wiki/About/#values) in the wiki.

By participating in Project Lockdown you also confirm to abide by its [Code of Conduct](https://github.com/TheIOFoundation/ProjectLockdown/wiki/Code-of-Conduct).



## Contributing


<table xwidth="100%">
  <tr align="center">
    <td xwidth="18%"><sub><a href="https://github.com/TheIOFoundation/ProjectLockdown/issues?q=is%3Aopen+is%3Aissue+label%3A%22Stage%3A+Ready%22"><img src="https://user-images.githubusercontent.com/9198668/101088120-2558d780-35ee-11eb-8655-976efa675820.png" alt="Opened Issues" title="Opened Issues" xwidth="100" height="45" />
<br/>
Opened Issues (Stage: Ready)</a>
</td>  
    <td xwidth="18%"><sub>
      <a href="https://github.com/TheIOFoundation/ProjectLockdown/issues?q=is%3Aopen+is%3Aissue+label%3A%22Stage%3A+Ready%22+label%3A%22Need%3A+Position%22"><img src="https://user-images.githubusercontent.com/9198668/101088123-268a0480-35ee-11eb-87df-e7b06a4e1196.png" alt="Database" title="Database" xwidth="100" height="50" />
<br/>
Position descriptions</a>
</td>
    <td xwidth="18%"><sub>
      <a href="https://github.com/TheIOFoundation/ProjectLockdown/issues?q=is%3Aopen+is%3Aissue+label%3A%22Stage%3A+Not+Ready%22"><img src="https://user-images.githubusercontent.com/9198668/101088115-238f1400-35ee-11eb-9186-e7887eda1394.png" alt="API" title="API" xwidth="100" height="50" />
<br/>
Features under consideration (Stage: Not Ready)</a>
</td>
  </tr>
  <tr valign="top">
    <td>Want to contribute? We have tasks ranging from code to UX/UI or requests for advice. <a href="https://github.com/TheIOFoundation/ProjectLockdown/issues?q=is%3Aopen+is%3Aissue+label%3A%22Stage%3A+Ready%22">Review open Issues</a>.</td>
   <td>Interested in joining the Project Lockdown community? <a href="https://github.com/TheIOFoundation/ProjectLockdown/issues?q=is%3Aopen+is%3Aissue+label%3A%22Stage%3A+Ready%22+label%3A%22Need%3A+Position%22">Explore the positions we have available</a>.</td>
    <td>While we put in place a publicly accessible Roadmap, you can <a href="https://github.com/TheIOFoundation/ProjectLockdown/issues?q=is%3Aopen+is%3Aissue+label%3A%22Stage%3A+Not+Ready%22">find out the ideas that are brewing</a>.</td>

  </tr>
 </table>


Did you find a bug? Feel free create a PR and we'll look at it as soon as possible. Please run `npm run format` before pushing 🙂.




## Operational Framework

Project Lockdown is composed of a number of modules that complement each other following the project's Operational Framework.
This repository tries to consolidate all of them under a same roof so that the main goal is always kept in mind.

<img src="https://github.com/TheIOFoundation/ProjectLockdown/blob/master/Docs/General/%5BTIOF%20PLD%5D%20Comms%20%5BP%5D%20Operational%20Framework%20ENG%20v1.5.png" alt="Operational Framework" title="Operational Framework"/>


## Project architecture
The following diagram showcases how all Modules integrate in the project:

<img src="https://github.com/TheIOFoundation/ProjectLockdown/blob/master/Docs/Diagrams/%5BTIOF%20PLD%5D%20Docs%20%5BP%5D%20General%20Modules%20Diagram%20ENG%20v1.0.png" alt="Project Diagram" title="Project Diagram"/>


## Modules overview

<table width="100%">
  <tr align="center" width="100%" valign="top">
    <td colspan="3"><b> Back Office Modules </b> </td>
  </tr>

<tr align="center">
 
 <td align="Right"><sub>Component</sub></td>
 
 <td xwidth="18%"><sub>
      <img src="https://user-images.githubusercontent.com/9198668/101093877-779df680-35f6-11eb-893b-9de1f924d4c5.png" alt="Back Office" title="Back Office" xwidth="100" height="50" />
<br/>
Back Office
<br/>(BO)
</td>
 
 
 <td xwidth="18%">
  <sub><img src="https://user-images.githubusercontent.com/9198668/94660914-e92ca080-0338-11eb-94ed-72817fadbd2c.png" alt="Data Entry Interface" title="Data Entry Interface" xwidth="100" height="50" />
<br/>
Data Entry Interface
<br/>(DEI - Back Office)
</td>
</tr>

  <tr valign="top">
    <td align="Right"><sub>Description</td>
    <td><sub>Manages sources + data points encoding and review.</td>
    <td><sub>Encoding data interface, including collection of sources.</td>
  </tr>
  
  <tr align="center">
    <td align="Right"><sub>URL</td>
    <td>
     <sub>
     <a class="IssueLabel--big d-inline-block v-align-top lh-condensed js-label-link" href="https://BO.ProjectLockdown.world" style="text-decoration: none;cursor: pointer;" title="Access to Back Office" alt="Access to Back Office"><span>BO.ProjectLockdown.world</span>
</a>
</td>
     
<td>
     <sub>
<a class="IssueLabel--big d-inline-block v-align-top lh-condensed js-label-link" href="https://DEI.ProjectLockdown.world" style="text-decoration: none;cursor: pointer;" title="Visit the Data Entry Interface" alt="Visit the Data Entry Interface"><span>DEI.ProjectLockdown.world</span>
</a>
</td>

  </tr>

<tr align="center">
    <td align="Right"><sub>Repo Folder</td>
    <td><sub>
<a class="IssueLabel--big d-inline-block v-align-top lh-condensed js-label-link" href="https://github.com/TheIOFoundation/ProjectLockdown/tree/master/BO" style="text-decoration: none;cursor: pointer;" title="Check the code at the master branch" alt="Check the code at the master branch"><span>/BO</span>
</a>
</td>

<td><sub>
<a class="IssueLabel--big d-inline-block v-align-top lh-condensed js-label-link" href="https://github.com/TheIOFoundation/ProjectLockdown/tree/master/DEI" style="text-decoration: none;cursor: pointer;" title="Check the code at the master branch" alt="Check the code at the master branch"><span>/DEI</span>
</a>
</td>
  </tr>


<tr align="center">
    <td align="Right"><sub>Label</td>
    <td><sub><a title="Check Issues for this Component" alt="Check Issues for this Component" class="IssueLabel--big d-inline-block v-align-top lh-condensed js-label-link" href="https://github.com/TheIOFoundation/ProjectLockdown/issues?q=is%3Aopen+is%3Aissue+label%3A%22Module%3A+BO%22" style="background-color: #fbca04; color: #000000; ">
        <span>Module: BO</span>
      </a></td>
     
<td><sub><a title="Check Issues for this Component" alt="Check Issues for this Component" class="IssueLabel--big d-inline-block v-align-top lh-condensed js-label-link" href="https://github.com/TheIOFoundation/ProjectLockdown/issues?q=is%3Aopen+is%3Aissue+label%3A%22Module%3A+DEI%22" style="background-color: #fbca04; color: #000000; ">
        <span>Module: DEI</span>
      </a></td>

  </tr> 

<tr align="center">
    <td align="Right"><sub>More info</td>

   <td><sub>
<a class="IssueLabel--big d-inline-block v-align-top lh-condensed js-label-link" href="https://github.com/TheIOFoundation/ProjectLockdown/wiki/Back-Office-(BO)" style="text-decoration: none;cursor: pointer;" title="Learn more about this Component" alt="Learn more about this Component"><span>Wiki</span>
</a>
</td>
 
   <td><sub>
<a class="IssueLabel--big d-inline-block v-align-top lh-condensed js-label-link" href="https://github.com/TheIOFoundation/ProjectLockdown/wiki/Data-Entry-Interface-(DEI)" style="text-decoration: none;cursor: pointer;" title="Learn more about this Component" alt="Learn more about this Component"><span>Wiki</span>
</a>
</td>

  </tr>
</table>


<table width="100%">
  <tr align="center" width="100%" valign="top">
    <td colspan="6"><b> Modules summary </b> </td>
  </tr>
  <tr align="center">
    <td align="Right"><sub>Component</sub></td>
    <td width="18%"><sub><img src="https://user-images.githubusercontent.com/9198668/94660914-e92ca080-0338-11eb-94ed-72817fadbd2c.png" alt="Data Entry Interface" title="Data Entry Interface" xwidth="100" height="50" />
<br/>
Data Entry Interface
<br/>(DEI - Back Office)
</td>  
    <td width="18%"><sub>
      <img src="https://user-images.githubusercontent.com/9198668/94664656-bb962600-033d-11eb-87f6-d26358650532.png" alt="Database" title="Database" xwidth="100" height="50" />
<br/>
Database
<br/>(DB - Back End)
</td>
    <td width="18%"><sub>
      <img src="https://user-images.githubusercontent.com/9198668/94660909-e7fb7380-0338-11eb-9fc4-e76ecacd4c34.png" alt="API" title="API" xwidth="100" height="50" />
<br/>
Open Data API
<br/>(API - Back End)
</td>
    <td width="18%"><sub>
      <img src="https://user-images.githubusercontent.com/9198668/94660918-e9c53700-0338-11eb-9a6b-0fda5063301b.png" alt="Mapping Platform" title="Mapping Platform" xwidth="100" height="50" />
<br/>
Mapping Platform
<br/>(MP - Front End)
</td>
    <td width="18%"><sub>
      <img src="https://user-images.githubusercontent.com/9198668/94660919-e9c53700-0338-11eb-96e4-dd85b22350bf.png" alt="Website" title="Website" xwidth="100" height="50" />
<br/>
Website
<br/>(WEB - Front End)
</td>
  </tr>

  <tr valign="top">
    <td align="Right"><sub>Description</td>
    <td><sub>Encoding data interface, including collection of sources.</td>
    <td><sub>Stores all PLD's data, both encoded and snapshots.</td>
    <td><sub>Provides an interface to communicate with the database to all components.</td>
    <td><sub>Mapping platform rendering PLD's research.</td>
    <td><sub>Project Lockdown's public website.</td>
  </tr>
  <tr align="center">
    <td align="Right"><sub>URL</td>
    <td><sub>
<a class="IssueLabel--big d-inline-block v-align-top lh-condensed js-label-link" href="https://DEI.ProjectLockdown.world" style="text-decoration: none;cursor: pointer;" title="Visit the Data Entry Interface" alt="Visit the Data Entry Interface"><span>DEI.ProjectLockdown.world</span>
</a>
</td>
    <td><sub>
     <a class="IssueLabel--big d-inline-block v-align-top lh-condensed js-label-link" href="https://DB.ProjectLockdown.world" style="text-decoration: none;cursor: pointer;" title="Access de DB" alt="Access de DB"><span>DB.ProjectLockdown.world</span>
</a>
</td>
    <td><sub>
<a class="IssueLabel--big d-inline-block v-align-top lh-condensed js-label-link" href="https://API.ProjectLockdown.world" style="text-decoration: none;cursor: pointer;" title="Test the API" alt="Test the API"><span>API.ProjectLockdown.world</span>
</a>
</td>
    <td><sub>
<a class="IssueLabel--big d-inline-block v-align-top lh-condensed js-label-link" href="https://MAP.ProjectLockdown.world" style="text-decoration: none;cursor: pointer;" title="Visit the Mapping Platform" alt="Visit the Mapping Platform"><span>MAP.ProjectLockdown.world</span>
</a>
</td>
    <td><sub>
<a class="IssueLabel--big d-inline-block v-align-top lh-condensed js-label-link" href="https://ProjectLockdown.world" style="text-decoration: none;cursor: pointer;" title="Visit Project Lockdown's website" alt="Visit Project Lockdown's website"><span>ProjectLockdown.world</span>
</a>
</td>
  </tr>
  <tr align="center">
    <td align="Right"><sub>Repo Folder</td>
    <td><sub>
<a class="IssueLabel--big d-inline-block v-align-top lh-condensed js-label-link" href="https://github.com/TheIOFoundation/ProjectLockdown/tree/master/DEI" style="text-decoration: none;cursor: pointer;" title="Check the code at the master branch" alt="Check the code at the master branch"><span>/DEI</span>
</a>
</td>
    <td><sub>
<a class="IssueLabel--big d-inline-block v-align-top lh-condensed js-label-link" href="https://github.com/TheIOFoundation/ProjectLockdown/tree/master/DB" style="text-decoration: none;cursor: pointer;" title="Check the code at the master branch" alt="Check the code at the master branch"><span>/DB</span>
</a>
</td>
    <td><sub>
<a class="IssueLabel--big d-inline-block v-align-top lh-condensed js-label-link" href="https://github.com/TheIOFoundation/ProjectLockdown/tree/master/API" style="text-decoration: none;cursor: pointer;" title="Check the code at the master branch" alt="Check the code at the master branch"><span>/API</span>
</a>
</td>
    <td><sub>
<a class="IssueLabel--big d-inline-block v-align-top lh-condensed js-label-link" href="https://github.com/TheIOFoundation/ProjectLockdown/tree/master/MAP" style="text-decoration: none;cursor: pointer;" title="Check the code at the master branch" alt="Check the code at the master branch"><span>/MAP</span>
</a>
</td>
    <td><sub>
<a class="IssueLabel--big d-inline-block v-align-top lh-condensed js-label-link" href="https://github.com/TheIOFoundation/ProjectLockdown/tree/master/WEB" style="text-decoration: none;cursor: pointer;" title="Check the code at the master branch" alt="Check the code at the master branch"><span>/WEB</span>
</td>
  </tr>
  <tr align="center">
    <td align="Right"><sub>Label</td>
    <td><sub><a title="Check Issues for this Component" alt="Check Issues for this Component" class="IssueLabel--big d-inline-block v-align-top lh-condensed js-label-link" href="https://github.com/TheIOFoundation/ProjectLockdown/issues?q=is%3Aopen+is%3Aissue+label%3A%22Module%3A+DEI%22" style="background-color: #fbca04; color: #000000; ">
        <span>DB</span>
      </a></td>
    <td><sub><a title="Check Issues for this Component" alt="Check Issues for this Component" class="IssueLabel--big d-inline-block v-align-top lh-condensed js-label-link" href="https://github.com/TheIOFoundation/ProjectLockdown/issues?q=is%3Aopen+is%3Aissue+label%3A%22Module%3A+DB%22" style="background-color: #fbca04; color: #000000; ">
        <span>DB</span>
      </a></td>
    <td><sub><a title="Check Issues for this Component" alt="Check Issues for this Component" class="IssueLabel--big d-inline-block v-align-top lh-condensed js-label-link" href="https://github.com/TheIOFoundation/ProjectLockdown/issues?q=is%3Aopen+is%3Aissue+label%3A%22Module%3A+API%22" style="background-color: #fbca04; color: #000000; ">
        <span>API</span>
      </a></td>
    <td><sub><a title="Check Issues for this Component" alt="Check Issues for this Component" class="IssueLabel--big d-inline-block v-align-top lh-condensed js-label-link" href="https://github.com/TheIOFoundation/ProjectLockdown/issues?q=is%3Aopen+is%3Aissue+label%3A%22Module%3A+MAP%22" style="background-color: #fbca04; color: #000000; ">
        <span>MAP</span>
      </a></td>
    <td><sub><a title="Check Issues for this Component" alt="Check Issues for this Component" class="IssueLabel--big d-inline-block v-align-top lh-condensed js-label-link" href="https://github.com/TheIOFoundation/ProjectLockdown/issues?q=is%3Aopen+is%3Aissue+label%3A%22Module%3A+WEB%22" style="background-color: #fbca04; color: #000000; ">
        <span>WEB</span>
      </a></td>
  </tr> 
<tr align="center">
    <td align="Right"><sub>More info</td>
    <td><sub>
<a class="IssueLabel--big d-inline-block v-align-top lh-condensed js-label-link" href="https://github.com/TheIOFoundation/ProjectLockdown/wiki/Data-Entry-Interface-(DEI)" style="text-decoration: none;cursor: pointer;" title="Learn more about this Component" alt="Learn more about this Component"><span>Wiki</span>
</a>
</td>
    <td><sub>
<a class="IssueLabel--big d-inline-block v-align-top lh-condensed js-label-link" href="https://github.com/TheIOFoundation/ProjectLockdown/wiki/Database-(DB)" style="text-decoration: none;cursor: pointer;" title="Learn more about this Component" alt="Learn more about this Component"><span>Wiki</span>
</a>
</td>
    <td><sub>
<a class="IssueLabel--big d-inline-block v-align-top lh-condensed js-label-link" href="https://github.com/TheIOFoundation/ProjectLockdown/wiki/Open-Data-API-(API)" style="text-decoration: none;cursor: pointer;" title="Learn more about this Component" alt="Learn more about this Component"><span>Wiki</span>
</a>
</td>
    <td><sub>
<a class="IssueLabel--big d-inline-block v-align-top lh-condensed js-label-link" href="https://github.com/TheIOFoundation/ProjectLockdown/wiki/Mapping-Platform-(MAP)" style="text-decoration: none;cursor: pointer;" title="Learn more about this Component" alt="Learn more about this Component"><span>Wiki</span>
</a>
</td>
    <td><sub>
<a class="IssueLabel--big d-inline-block v-align-top lh-condensed js-label-link" href="https://github.com/TheIOFoundation/ProjectLockdown/wiki/Website-(WEB)" style="text-decoration: none;cursor: pointer;" title="Learn more about this Component" alt="Learn more about this Component"><span>Wiki</span>
</a>
</td>
  </tr>
</table>

<table width="100%">
  <tr align="center" width="100%" valign="top">
    <td colspan="6"><b> Modules summary </b> </td>
  </tr>
  <tr align="center">
    <td align="Right"><sub>Component</sub></td>
    <td width="18%"><sub><img src="https://user-images.githubusercontent.com/9198668/94660914-e92ca080-0338-11eb-94ed-72817fadbd2c.png" alt="Data Entry Interface" title="Data Entry Interface" xwidth="100" height="50" />
<br/>
Data Entry Interface
<br/>(DEI - Back Office)
</td>  
    <td width="18%"><sub>
      <img src="https://user-images.githubusercontent.com/9198668/94664656-bb962600-033d-11eb-87f6-d26358650532.png" alt="Database" title="Database" xwidth="100" height="50" />
<br/>
Database
<br/>(DB - Back End)
</td>
    <td width="18%"><sub>
      <img src="https://user-images.githubusercontent.com/9198668/94660909-e7fb7380-0338-11eb-9fc4-e76ecacd4c34.png" alt="API" title="API" xwidth="100" height="50" />
<br/>
Open Data API
<br/>(API - Back End)
</td>
    <td width="18%"><sub>
      <img src="https://user-images.githubusercontent.com/9198668/94660918-e9c53700-0338-11eb-9a6b-0fda5063301b.png" alt="Mapping Platform" title="Mapping Platform" xwidth="100" height="50" />
<br/>
Mapping Platform
<br/>(MP - Front End)
</td>
    <td width="18%"><sub>
      <img src="https://user-images.githubusercontent.com/9198668/94660919-e9c53700-0338-11eb-96e4-dd85b22350bf.png" alt="Website" title="Website" xwidth="100" height="50" />
<br/>
Website
<br/>(WEB - Front End)
</td>
  </tr>

  <tr valign="top">
    <td align="Right"><sub>Description</td>
    <td><sub>Encoding data interface, including collection of sources.</td>
    <td><sub>Stores all PLD's data, both encoded and snapshots.</td>
    <td><sub>Provides an interface to communicate with the database to all components.</td>
    <td><sub>Mapping platform rendering PLD's research.</td>
    <td><sub>Project Lockdown's public website.</td>
  </tr>
  <tr align="center">
    <td align="Right"><sub>URL</td>
    <td><sub>
<a class="IssueLabel--big d-inline-block v-align-top lh-condensed js-label-link" href="https://DEI.ProjectLockdown.world" style="text-decoration: none;cursor: pointer;" title="Visit the Data Entry Interface" alt="Visit the Data Entry Interface"><span>DEI.ProjectLockdown.world</span>
</a>
</td>
    <td><sub>
     <a class="IssueLabel--big d-inline-block v-align-top lh-condensed js-label-link" href="https://DB.ProjectLockdown.world" style="text-decoration: none;cursor: pointer;" title="Access de DB" alt="Access de DB"><span>DB.ProjectLockdown.world</span>
</a>
</td>
    <td><sub>
<a class="IssueLabel--big d-inline-block v-align-top lh-condensed js-label-link" href="https://API.ProjectLockdown.world" style="text-decoration: none;cursor: pointer;" title="Test the API" alt="Test the API"><span>API.ProjectLockdown.world</span>
</a>
</td>
    <td><sub>
<a class="IssueLabel--big d-inline-block v-align-top lh-condensed js-label-link" href="https://MAP.ProjectLockdown.world" style="text-decoration: none;cursor: pointer;" title="Visit the Mapping Platform" alt="Visit the Mapping Platform"><span>MAP.ProjectLockdown.world</span>
</a>
</td>
    <td><sub>
<a class="IssueLabel--big d-inline-block v-align-top lh-condensed js-label-link" href="https://ProjectLockdown.world" style="text-decoration: none;cursor: pointer;" title="Visit Project Lockdown's website" alt="Visit Project Lockdown's website"><span>ProjectLockdown.world</span>
</a>
</td>
  </tr>
  <tr align="center">
    <td align="Right"><sub>Repo Folder</td>
    <td><sub>
<a class="IssueLabel--big d-inline-block v-align-top lh-condensed js-label-link" href="https://github.com/TheIOFoundation/ProjectLockdown/tree/master/DEI" style="text-decoration: none;cursor: pointer;" title="Check the code at the master branch" alt="Check the code at the master branch"><span>/DEI</span>
</a>
</td>
    <td><sub>
<a class="IssueLabel--big d-inline-block v-align-top lh-condensed js-label-link" href="https://github.com/TheIOFoundation/ProjectLockdown/tree/master/DB" style="text-decoration: none;cursor: pointer;" title="Check the code at the master branch" alt="Check the code at the master branch"><span>/DB</span>
</a>
</td>
    <td><sub>
<a class="IssueLabel--big d-inline-block v-align-top lh-condensed js-label-link" href="https://github.com/TheIOFoundation/ProjectLockdown/tree/master/API" style="text-decoration: none;cursor: pointer;" title="Check the code at the master branch" alt="Check the code at the master branch"><span>/API</span>
</a>
</td>
    <td><sub>
<a class="IssueLabel--big d-inline-block v-align-top lh-condensed js-label-link" href="https://github.com/TheIOFoundation/ProjectLockdown/tree/master/MAP" style="text-decoration: none;cursor: pointer;" title="Check the code at the master branch" alt="Check the code at the master branch"><span>/MAP</span>
</a>
</td>
    <td><sub>
<a class="IssueLabel--big d-inline-block v-align-top lh-condensed js-label-link" href="https://github.com/TheIOFoundation/ProjectLockdown/tree/master/WEB" style="text-decoration: none;cursor: pointer;" title="Check the code at the master branch" alt="Check the code at the master branch"><span>/WEB</span>
</td>
  </tr>
  <tr align="center">
    <td align="Right"><sub>Label</td>
    <td><sub><a title="Check Issues for this Component" alt="Check Issues for this Component" class="IssueLabel--big d-inline-block v-align-top lh-condensed js-label-link" href="https://github.com/TheIOFoundation/ProjectLockdown/issues?q=is%3Aopen+is%3Aissue+label%3A%22Module%3A+DEI%22" style="background-color: #fbca04; color: #000000; ">
        <span>DB</span>
      </a></td>
    <td><sub><a title="Check Issues for this Component" alt="Check Issues for this Component" class="IssueLabel--big d-inline-block v-align-top lh-condensed js-label-link" href="https://github.com/TheIOFoundation/ProjectLockdown/issues?q=is%3Aopen+is%3Aissue+label%3A%22Module%3A+DB%22" style="background-color: #fbca04; color: #000000; ">
        <span>DB</span>
      </a></td>
    <td><sub><a title="Check Issues for this Component" alt="Check Issues for this Component" class="IssueLabel--big d-inline-block v-align-top lh-condensed js-label-link" href="https://github.com/TheIOFoundation/ProjectLockdown/issues?q=is%3Aopen+is%3Aissue+label%3A%22Module%3A+API%22" style="background-color: #fbca04; color: #000000; ">
        <span>API</span>
      </a></td>
    <td><sub><a title="Check Issues for this Component" alt="Check Issues for this Component" class="IssueLabel--big d-inline-block v-align-top lh-condensed js-label-link" href="https://github.com/TheIOFoundation/ProjectLockdown/issues?q=is%3Aopen+is%3Aissue+label%3A%22Module%3A+MAP%22" style="background-color: #fbca04; color: #000000; ">
        <span>MAP</span>
      </a></td>
    <td><sub><a title="Check Issues for this Component" alt="Check Issues for this Component" class="IssueLabel--big d-inline-block v-align-top lh-condensed js-label-link" href="https://github.com/TheIOFoundation/ProjectLockdown/issues?q=is%3Aopen+is%3Aissue+label%3A%22Module%3A+WEB%22" style="background-color: #fbca04; color: #000000; ">
        <span>WEB</span>
      </a></td>
  </tr> 
<tr align="center">
    <td align="Right"><sub>More info</td>
    <td><sub>
<a class="IssueLabel--big d-inline-block v-align-top lh-condensed js-label-link" href="https://github.com/TheIOFoundation/ProjectLockdown/wiki/Data-Entry-Interface-(DEI)" style="text-decoration: none;cursor: pointer;" title="Learn more about this Component" alt="Learn more about this Component"><span>Wiki</span>
</a>
</td>
    <td><sub>
<a class="IssueLabel--big d-inline-block v-align-top lh-condensed js-label-link" href="https://github.com/TheIOFoundation/ProjectLockdown/wiki/Database-(DB)" style="text-decoration: none;cursor: pointer;" title="Learn more about this Component" alt="Learn more about this Component"><span>Wiki</span>
</a>
</td>
    <td><sub>
<a class="IssueLabel--big d-inline-block v-align-top lh-condensed js-label-link" href="https://github.com/TheIOFoundation/ProjectLockdown/wiki/Open-Data-API-(API)" style="text-decoration: none;cursor: pointer;" title="Learn more about this Component" alt="Learn more about this Component"><span>Wiki</span>
</a>
</td>
    <td><sub>
<a class="IssueLabel--big d-inline-block v-align-top lh-condensed js-label-link" href="https://github.com/TheIOFoundation/ProjectLockdown/wiki/Mapping-Platform-(MAP)" style="text-decoration: none;cursor: pointer;" title="Learn more about this Component" alt="Learn more about this Component"><span>Wiki</span>
</a>
</td>
    <td><sub>
<a class="IssueLabel--big d-inline-block v-align-top lh-condensed js-label-link" href="https://github.com/TheIOFoundation/ProjectLockdown/wiki/Website-(WEB)" style="text-decoration: none;cursor: pointer;" title="Learn more about this Component" alt="Learn more about this Component"><span>Wiki</span>
</a>
</td>
  </tr>
</table>
