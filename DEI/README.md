<a id="top"></a>
![logo](https://user-images.githubusercontent.com/9198668/85232285-68543380-b430-11ea-8353-1aafb79baf78.png)
***

## DOCUMENTATION STAGE: WIP - This documentation page is still a work in progress.

# Project Lockdown: Data Entry Interface module

# Table of Contents
1. [About this module](#about-this-module)
2. [The module in Project Lockdown](#the-module-in-project-lockdown)
3. [General overview of the module](#general-overview-of-the-module)
4. [Accessing the module](#accessing-the-module)
5. [Contributing](#contributing)
6. [More information](#more-information)

***

# About this module

IMPORTANT: The Data Entry Interface is the first version of Back Office that Project Lockdown implemented. It is scheduled to be deprecated as soon as the [Back Office](https://github.com/TheIOFoundation/ProjectLockdown/wiki/Back-Office-(BO)) module is released.

The Data Entry Interface (DEI) module is the current interface for the Insourcing Funnel.
It is built on a Google Sheet and uses a number of Google App Scripts to perform all the data introduction logic.

NOTE: Currently Project Lockdown only offers one DSL (COVID-19 NPIs) and the DEI is configured exclusively for it.

It provides:
- A Global sheet where all territories are listed and Team Research members assigned to the different data production stages
- One sheet per territory where all the datapoints and their values are available
- A direct, view-only mode access to the data collected

<a href="#top">Back to top</a>

# The module in Project Lockdown
The following diagram showcases how this module integrates in the project:

<img src="https://github.com/TheIOFoundation/ProjectLockdown/blob/master/docs/Diagrams/%5BTIOF%20PLD%5D%20Docs%20%5BP%5D%20General%20Modules%20Diagram%20Focus%20DEI%20ENG%20v1.0.png" alt="DEI in Project Lockdown general diagram" title="DEI in Project Lockdown general diagram"/>

<a href="#top">Back to top</a>

# General overview of the module
The following diagram showcases the general design of the Back End module:

[WIP]

<a href="#top">Back to top</a>

# Accessing the module
To access the Data Entry Interface, please visit
https://TIOF.Click/PLDDEI
(Status: Deployed)

<a href="#top">Back to top</a>

# Contributing
The open GitHub Issues can be found here:

NOTE: While the DEI is scheduled to be deprecated, there remain some potential maintenance tasks.

Pending tasks (Labels: Module: DEI + Stage: Ready)
https://github.com/TheIOFoundation/ProjectLockdown/issues?q=is%3Aopen+is%3Aissue+label%3A%22Stage%3A+Ready%22+label%3A%22Module%3A+DEI%22

Tasks in progress (Labels: Module: DEI + Stage: In Progress)
https://github.com/TheIOFoundation/ProjectLockdown/issues?q=is%3Aopen+is%3Aissue+label%3A%22Module%3A+DEI%22+label%3A%22Stage%3A+In+Progress%22

Upcoming tasks that are being prepared (Labels: Module: DEI + Stage: Not Ready)
https://github.com/TheIOFoundation/ProjectLockdown/issues?q=is%3Aopen+is%3Aissue+label%3A%22Module%3A+DEI%22+label%3A%22Stage%3A+Not+Ready%22

<a href="#top">Back to top</a>

# More information
For all the necessary information please refer to the technical documentation in the wiki:
https://github.com/TheIOFoundation/ProjectLockdown/wiki/Data-Entry-Interface-(DEI)

<a href="#top">Back to top</a>
