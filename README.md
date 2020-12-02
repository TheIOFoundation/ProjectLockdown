<a id="top"></a>
 ![logo](https://user-images.githubusercontent.com/9198668/85232285-68543380-b430-11ea-8353-1aafb79baf78.png) 
<!-- HACKTOBERFEST LOGO -->

<!-- ![screenshot](https://user-images.githubusercontent.com/9198668/94893112-f96b8980-04b8-11eb-984f-ad13b882a35a.png) -->
***

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

See more about our mission, vision and values in the [wiki (About::Values)](https://github.com/TheIOFoundation/ProjectLockdown/wiki/About/_edit#values).

## Operational Framework

Project Lockdown is composed of a number of modules that complement each other following the project's Operational Framework.
This repository tries to consolidate all of them under a same roof so that the main goal is always kept in mind.

<img src="https://github.com/TheIOFoundation/ProjectLockdown/blob/master/Docs/General/%5BTIOF%20PLD%5D%20Comms%20%5BP%5D%20Operational%20Framework%20ENG%20v1.5.png" alt="Operational Framework" title="Operational Framework"/>


## Project architecture
The following diagram showcases how all Modules integrate in the project:

<img src="https://github.com/TheIOFoundation/ProjectLockdown/blob/master/Docs/Diagrams/%5BTIOF%20PLD%5D%20Docs%20%5BP%5D%20General%20Modules%20Diagram%20ENG%20v1.0.png" alt="Project Diagram" title="Project Diagram"/>

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
    <td><sub> - </td>
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
    <td align="Right"><sub>Tag</td>
    <td><sub>
<a title="Check Issues for this Component" alt="Check Issues for this Component" class="IssueLabel--big d-inline-block v-align-top lh-condensed js-label-link" href="/TheIOFoundation/ProjectLockdown/labels/DEI">
<span style="background-color: #fbca04; color: #000000; padding: 0 10px; font-size: 12px; font-weight: 500; line-height: 22px!important; border:1px solid transparent; border-radius: 2em;display: inline-block!important;vertical-align: top!important;text-decoration: none;cursor: pointer;">
DEI
</span>
</a>
</td>
    <td><sub><a title="Check Issues for this Component" alt="Check Issues for this Component" class="IssueLabel--big d-inline-block v-align-top lh-condensed js-label-link" href="/TheIOFoundation/ProjectLockdown/labels/DB" style="background-color: #fbca04; color: #000000; ">
        <span>DB</span>
      </a></td>
    <td><a title="Check Issues for this Component" alt="Check Issues for this Component" class="IssueLabel--big d-inline-block v-align-top lh-condensed js-label-link" href="/TheIOFoundation/ProjectLockdown/labels/API" style="background-color: #fbca04; color: #000000; ">
        <span>API</span>
      </a></td>
    <td><sub><a title="Check Issues for this Component" alt="Check Issues for this Component" class="IssueLabel--big d-inline-block v-align-top lh-condensed js-label-link" href="/TheIOFoundation/ProjectLockdown/labels/MP" style="background-color: #fbca04; color: #000000; ">
        <span>MP</span>
      </a></td>
    <td><sub><a title="Check Issues for this Component" alt="Check Issues for this Component" class="IssueLabel--big d-inline-block v-align-top lh-condensed js-label-link" href="/TheIOFoundation/ProjectLockdown/labels/WEB" style="background-color: #fbca04; color: #000000; ">
        <span>WEB</span>
      </a></td>
  </tr> 
<tr align="center">
    <td align="Right"><sub>More info</td>
    <td><sub>
<a class="IssueLabel--big d-inline-block v-align-top lh-condensed js-label-link" href="https://github.com/TheIOFoundation/ProjectLockdown/wiki/%5BBackOffice%5D-Data-Entry-Interface-(DEI)" style="text-decoration: none;cursor: pointer;" title="Learn more about this Component" alt="Learn more about this Component"><span>Wiki</span>
</a>
</td>
    <td><sub>
<a class="IssueLabel--big d-inline-block v-align-top lh-condensed js-label-link" href="https://github.com/TheIOFoundation/ProjectLockdown/wiki/%5BBack-End%5D-Database-(DB)" style="text-decoration: none;cursor: pointer;" title="Learn more about this Component" alt="Learn more about this Component"><span>Wiki</span>
</a>
</td>
    <td><sub>
<a class="IssueLabel--big d-inline-block v-align-top lh-condensed js-label-link" href="https://github.com/TheIOFoundation/ProjectLockdown/wiki/%5BBackEnd%5D-Open-Data-API-(API)" style="text-decoration: none;cursor: pointer;" title="Learn more about this Component" alt="Learn more about this Component"><span>Wiki</span>
</a>
</td>
    <td><sub>
<a class="IssueLabel--big d-inline-block v-align-top lh-condensed js-label-link" href="https://github.com/TheIOFoundation/ProjectLockdown/wiki/%5BFrontEnd%5D-Mapping-Platform-(MP)" style="text-decoration: none;cursor: pointer;" title="Learn more about this Component" alt="Learn more about this Component"><span>Wiki</span>
</a>
</td>
    <td><sub>
<a class="IssueLabel--big d-inline-block v-align-top lh-condensed js-label-link" href="https://github.com/TheIOFoundation/ProjectLockdown/wiki/%5BFrontEnd%5D-Website-(WEB)" style="text-decoration: none;cursor: pointer;" title="Learn more about this Component" alt="Learn more about this Component"><span>Wiki</span>
</a>
</td>
  </tr>
</table>





## Contributing

Did you find a bug? Feel free create a PR, and we'll look at it as soon as we can. Please run `npm run format` before pushing 🙂.
