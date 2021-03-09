# Welcome to StackEdit!

Hi! I'm your first Markdown file in **StackEdit**. If you want to learn about StackEdit, you can read me. If you want to play with Markdown, you can edit me. Once you have finished with me, you can create new files by opening the **file explorer** on the left corner of the navigation bar.


# Files

StackEdit stores your files in your browser, which means all your files are automatically saved locally and are accessible **offline!**

## Create files and folders

The file explorer is accessible using the button in left corner of the navigation bar. You can create a new file by clicking the **New file** button in the file explorer. You can also create folders by clicking the **New folder** button.

## Switch to another file

All your files and folders are presented as a tree in the file explorer. You can switch from one to another by clicking a file in the tree.

## Rename a file

You can rename the current file by clicking the file name in the navigation bar or by clicking the **Rename** button in the file explorer.

## Delete a file

You can delete the current file by clicking the **Remove** button in the file explorer. The file will be moved into the **Trash** folder and automatically deleted after 7 days of inactivity.

## Export a file

You can export the current file by clicking **Export to disk** in the menu. You can choose to export the file as plain Markdown, as HTML using a Handlebars template or as a PDF.


# Synchronization

Synchronization is one of the biggest features of StackEdit. It enables you to synchronize any file in your workspace with other files stored in your **Google Drive**, your **Dropbox** and your **GitHub** accounts. This allows you to keep writing on other devices, collaborate with people you share the file with, integrate easily into your workflow... The synchronization mechanism takes place every minute in the background, downloading, merging, and uploading file modifications.

There are two types of synchronization and they can complement each other:

- The workspace synchronization will sync all your files, folders and settings automatically. This will allow you to fetch your workspace on any other device.
	> To start syncing your workspace, just sign in with Google in the menu.

- The file synchronization will keep one file of the workspace synced with one or multiple files in **Google Drive**, **Dropbox** or **GitHub**.
	> Before starting to sync files, you must link an account in the **Synchronize** sub-menu.

## Open a file

You can open a file from **Google Drive**, **Dropbox** or **GitHub** by opening the **Synchronize** sub-menu and clicking **Open from**. Once opened in the workspace, any modification in the file will be automatically synced.

## Save a file

You can save any file of the workspace to **Google Drive**, **Dropbox** or **GitHub** by opening the **Synchronize** sub-menu and clicking **Save on**. Even if a file in the workspace is already synced, you can save it to another location. StackEdit can sync one file with multiple locations and accounts.

## Synchronize a file

Once your file is linked to a synchronized location, StackEdit will periodically synchronize it by downloading/uploading any modification. A merge will be performed if necessary and conflicts will be resolved.

If you just have modified your file and you want to force syncing, click the **Synchronize now** button in the navigation bar.

> **Note:** The **Synchronize now** button is disabled if you have no file to synchronize.

## Manage file synchronization

Since one file can be synced with multiple locations, you can list and manage synchronized locations by clicking **File synchronization** in the **Synchronize** sub-menu. This allows you to list and remove synchronized locations that are linked to your file.


# Publication

Publishing in StackEdit makes it simple for you to publish online your files. Once you're happy with a file, you can publish it to different hosting platforms like **Blogger**, **Dropbox**, **Gist**, **GitHub**, **Google Drive**, **WordPress** and **Zendesk**. With [Handlebars templates](http://handlebarsjs.com/), you have full control over what you export.

> Before starting to publish, you must link an account in the **Publish** sub-menu.

## Publish a File

You can publish your file by opening the **Publish** sub-menu and by clicking **Publish to**. For some locations, you can choose between the following formats:

- Markdown: publish the Markdown text on a website that can interpret it (**GitHub** for instance),
- HTML: publish the file converted to HTML via a Handlebars template (on a blog for example).

## Update a publication

After publishing, StackEdit keeps your file linked to that publication which makes it easy for you to re-publish it. Once you have modified your file and you want to update your publication, click on the **Publish now** button in the navigation bar.

> **Note:** The **Publish now** button is disabled if your file has not been published yet.

## Manage file publication

Since one file can be published to multiple locations, you can list and manage publish locations by clicking **File publication** in the **Publish** sub-menu. This allows you to list and remove publication locations that are linked to your file.


# Markdown extensions

StackEdit extends the standard Markdown syntax by adding extra **Markdown extensions**, providing you with some nice features.

> **ProTip:** You can disable any **Markdown extension** in the **File properties** dialog.


## SmartyPants

SmartyPants converts ASCII punctuation characters into "smart" typographic punctuation HTML entities. For example:

|                |ASCII                          |HTML                         |
|----------------|-------------------------------|-----------------------------|
|Single backticks|`'Isn't this fun?'`            |'Isn't this fun?'            |
|Quotes          |`"Isn't this fun?"`            |"Isn't this fun?"            |
|Dashes          |`-- is en-dash, --- is em-dash`|-- is en-dash, --- is em-dash|


## KaTeX

You can render LaTeX mathematical expressions using [KaTeX](https://khan.github.io/KaTeX/):

The *Gamma function* satisfying $\Gamma(n) = (n-1)!\quad\forall n\in\mathbb N$ is via the Euler integral

$$
\Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt\,.
$$

> You can find more information about **LaTeX** mathematical expressions [here](http://meta.math.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference).


## UML diagrams

You can render UML diagrams using [Mermaid](https://mermaidjs.github.io/). For example, this will produce a sequence diagram:

```mermaid
sequenceDiagram
Alice ->> Bob: Hello Bob, how are you?
Bob-->>John: How about you John?
Bob--x Alice: I am good thanks!
Bob-x John: I am good thanks!
Note right of John: Bob thinks a long<br/>long time, so long<br/>that the text does<br/>not fit on a row.

Bob-->Alice: Checking with John...
Alice->John: Yes... John, how are you?
```

And this will produce a flow chart:

```mermaid
graph LR
A[Square Rect] -- Link text --> B((Circle))
A --> C(Round Rect)
B --> D{Rhombus}
C --> D
```
### Category: Organization 

|  **Name**  | TIOF Full Logo |  |  |  |
|----------------|-------------------------------|-----------------------------|-------------------------------|-----------------------------|
| **Sample** | <img src="https://github.com/TheIOFoundation/TIOF/raw/main/Project%20Identity/Logos/%5BTIOF%5D%20Comms%20%5BP%5D%20Full%20Logo%20TIOF%20FC%20T%20HiRes%20ENG%20v1.6.png" width ="100px" /> | <img src="https://github.com/TheIOFoundation/TIOF/raw/main/Project%20Identity/Logos/%5BTIOF%5D%20Comms%20%5BP%5D%20Full%20Logo%20TIOF%20FC%20T%20HiRes%20ENG%20v1.6.svg" width ="100px" /> | <img src="https://github.com/TheIOFoundation/TIOF/raw/main/Project%20Identity/Logos/%5BTIOF%5D%20Comms%20%5BP%5D%20Full%20Logo%20TIOF%20W%20T%20HiRes%20ENG%20v1.6.png" width ="100px" /> | <img src="https://github.com/TheIOFoundation/TIOF/raw/main/Project%20Identity/Logos/%5BTIOF%5D%20Comms%20%5BP%5D%20Full%20Logo%20TIOF%20W%20T%20HiRes%20ENG%20v1.6.svg" width ="100px" /> | 
| **Format** | PNG | SVG | PNG | SVG | 
|  **Code**  |  |  |  |  |
| **Features** | Hi Resolution / Full Color / Transparent Background / English | Hi Resolution / Full Color / Transparent Background / English | Hi Resolution / White / Transparent Background / English | Hi Resolution / White / Transparent Background / English |
| **Usage** | | | | |


|  **Name**  | PLD Lock |  |  |  |
|----------------|-------------------------------|-----------------------------|-------------------------------|-----------------------------|
| **Sample** | <img src="https://github.com/TheIOFoundation/ProjectLockdown/raw/master/Project%20Identity/Logos/%5BTIOF%20PLD%5D%20Comms%20%5BP%5D%20Lock%20Logo%20LM%20T%20HiRes%20XXX%20v1.0.png" width ="100px" /> | <img src="https://github.com/TheIOFoundation/ProjectLockdown/raw/master/Project%20Identity/Logos/%5BTIOF%20PLD%5D%20Comms%20%5BP%5D%20Lock%20Logo%20LM%20T%20HiRes%20XXX%20v1.0.svg" width ="100px" /> | <img src="https://github.com/TheIOFoundation/ProjectLockdown/raw/master/Project%20Identity/Logos/%5BTIOF%20PLD%5D%20Comms%20%5BP%5D%20Lock%20Logo%20DM%20T%20HiRes%20XXX%20v1.0.png" width ="100px" /> | <img src="https://github.com/TheIOFoundation/ProjectLockdown/raw/master/Project%20Identity/Logos/%5BTIOF%20PLD%5D%20Comms%20%5BP%5D%20Lock%20Logo%20DM%20T%20HiRes%20XXX%20v1.0.svg" width ="100px" /> | 
| **Format** | PNG | SVG | PNG | SVG | 
|  **Code**  |  |  |  |  |
| **Features** | Hi Resolution / Light Mode / Transparent Background | Hi Resolution / Light Mode / Transparent Background | Hi Resolution / Dark Mode | Hi Resolution / Dark Mode
| **Usage** | | | | |





|Single backticks|`'Isn't this fun?'`            |'Isn't this fun?'            |
|Quotes          |`"Isn't this fun?"`            |"Isn't this fun?"            |
|Dashes          |`-- is en-dash, --- is em-dash`|-- is en-dash, --- is em-dash|





| The IO Foundation | UDDR | TechUp | Project Lockdown | BHR in Tech |
|----------------|-------------------------------|-----------------------------|-------------------------------|-----------------------------|
|<img src="https://github.com/TheIOFoundation/TIOF/raw/main/Project%20Identity/Logos/%5BTIOF%5D%20Comms%20%5BP%5D%20Hex%20Logo%20TIOF%20FC%20T%20HiRes%20XXX%20v1.6.png" width ="75px" /> | <img src="https://github.com/TheIOFoundation/UDDR/raw/main/Project%20Identity/Logos/%5BTIOF%20UDDR%5D%20Comms%20%5BP%5D%20Logo%20FC%20NoT%20HiRes%20XXX%20v1.0.png" width ="75x" /> | <img src="https://github.com/TheIOFoundation/TechUp/raw/main/Project%20Identity/Logos/%5BTIOF%20TU%5D%20Comms%20%5BP%5D%20U%20Logo%20FC%20NoT%20HiRes%20XXX%20v1.0.png" width ="75px" /> | <img src="https://github.com/TheIOFoundation/ProjectLockdown/raw/master/Project%20Identity/Logos/%5BTIOF%20PLD%5D%20Comms%20%5BP%5D%20Lock%20Logo%20LM%20NoT%20HiRes%20XXX%20v1.0.png" width ="75x" /> | <img src="https://github.com/TheIOFoundation/BiT/raw/main/Project%20Identity/Logos/%5BTIOF%20BiT%5D%20Comms%20%5BP%5D%20Logo%20FC%20NoT%20HiRes%20XXX%20v1.0.png" width ="75x" /> | 
|[Media Kit](https://github.com/TheIOFoundation/TIOF/wiki/Media-Kit)| [Media Kit](https://github.com/TheIOFoundation/UDDR/wiki/Media-Kit) | [Media Kit](https://github.com/TheIOFoundation/TechUp/wiki/Media-Kit) | [Media Kit](https://github.com/TheIOFoundation/ProjectLockdown/wiki/Media-Kit) |  [Media Kit](https://github.com/TheIOFoundation/BiT/wiki/Media-Kit) | 




| UDDR | TechUp | Project Lockdown | BHR in Tech |
|----------------|-------------------------------|-----------------------------|-------------------------------|
| <img src="https://github.com/TheIOFoundation/UDDR/raw/main/Project%20Identity/Logos/%5BTIOF%20UDDR%5D%20Comms%20%5BP%5D%20Logo%20FC%20NoT%20HiRes%20XXX%20v1.0.png" width ="75x" /> | <img src="https://github.com/TheIOFoundation/TechUp/raw/main/Project%20Identity/Logos/%5BTIOF%20TU%5D%20Comms%20%5BP%5D%20U%20Logo%20FC%20NoT%20HiRes%20XXX%20v1.0.png" width ="75px" /> | <img src="https://github.com/TheIOFoundation/ProjectLockdown/raw/master/Project%20Identity/Logos/%5BTIOF%20PLD%5D%20Comms%20%5BP%5D%20Lock%20Logo%20LM%20NoT%20HiRes%20XXX%20v1.0.png" width ="75x" /> | <img src="https://github.com/TheIOFoundation/BiT/raw/main/Project%20Identity/Logos/%5BTIOF%20BiT%5D%20Comms%20%5BP%5D%20Logo%20FC%20NoT%20HiRes%20XXX%20v1.0.png" width ="75x" /> | 
| [Media Kit](https://github.com/TheIOFoundation/UDDR/wiki/Media-Kit) | [Media Kit](https://github.com/TheIOFoundation/TechUp/wiki/Media-Kit) | [Media Kit](https://github.com/TheIOFoundation/ProjectLockdown/wiki/Media-Kit) |  [Media Kit](https://github.com/TheIOFoundation/BiT/wiki/Media-Kit) | 






|        **Color**        | | | | | | | | | | | | |
|----------------|-------------------------------|-----------------------------|-------------------------------|-----------------------------|-------------------------------|-------------------------------|-----------------------------|-------------------------------|-----------------------------|-------------------------------|-------------------------------|-----------------------------|
|  **Code**  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| **Sample** | <img src="https://github.com/TheIOFoundation/TIOF/raw/main/Project%20Identity/Color%20Palette/%5BTIOF%5D%20Comms%20%5BP%5D%20Color%20Palette%20-%20Light%20gray%20XXX%20v1.0.png" width ="50px" /> | <img src="https://github.com/TheIOFoundation/TIOF/raw/main/Project%20Identity/Color%20Palette/%5BTIOF%5D%20Comms%20%5BP%5D%20Color%20Palette%20-%20Dark%20gray%20XXX%20v1.0.png" width ="50px" /> | <img src="https://github.com/TheIOFoundation/TIOF/raw/main/Project%20Identity/Color%20Palette/%5BTIOF%5D%20Comms%20%5BP%5D%20Color%20Palette%20-%20Light%20blue%20XXX%20v1.0.png" width ="50px" /> | <img src="https://github.com/TheIOFoundation/TIOF/raw/main/Project%20Identity/Color%20Palette/%5BTIOF%5D%20Comms%20%5BP%5D%20Color%20Palette%20-%20Dark%20blue%20XXX%20v1.0.png" width ="50px" /> | <img src="https://github.com/TheIOFoundation/TIOF/raw/main/Project%20Identity/Color%20Palette/%5BTIOF%5D%20Comms%20%5BP%5D%20Color%20Palette%20-%20Orange%20XXX%20v1.0.png" width ="50px" /> |
| **R** | 137 | 78 | 102 | 80 | 247 |
| **G** | 137 | 80 | 181 | 145 | 149 |
| **B** | 142 | 86 | 197 | 158 | 82 |
| **H** | 240 | 225 | 190 | 190 | 24 |
| **S** | 2.2 | 4.9 | 45.0 | 32.8 | 91.2 |
| **L** | 54.7 | 32.2 | 58.6 | 46.7 | 64.5 |
| **Hex** | #89898E | #4E5056 | #66B5C5 | #50919F | #F79552 |





|        **Theme Colors**        | | | 
|----------------|-------------------------------|-----------------------------|
|  **Code**  | G1 | W | 
| **Sample** | <img src="https://github.com/TheIOFoundation/ProjectLockdown/raw/master/Project%20Identity/Color%20Palette/%5BTIOF%20PLD%5D%20Comms%20%5BP%5D%20Color%20Palette%20-%20%23333333%20XXX%20v1.0.png" width ="50px" /> | <img src="https://github.com/TheIOFoundation/ProjectLockdown/raw/master/Project%20Identity/Color%20Palette/%5BTIOF%20PLD%5D%20Comms%20%5BP%5D%20Color%20Palette%20-%20%23FFFFFF%20XXX%20v1.0.png" width ="50px" /> | 
| **R** | 51 | 255 |
| **G** | 51 | 255 |
| **B** | 51 | 255 | 
| **H** | 0 | 0 |
| **S** | 0 | 0 |
| **L** | 20 | 100 |
| **Hex** | #333333 | #FFFFFF |


|        **Grey shades swatch**        |  |  |  |  |  | 
|----------------|-------------------------------|-----------------------------|-----------------------------|-----------------------------|-----------------------------|
|  **Code**  | G2 | G3 | G4 | G5 | G6 |
| **Sample** | <img src="https://github.com/TheIOFoundation/ProjectLockdown/raw/master/Project%20Identity/Color%20Palette/%5BTIOF%20PLD%5D%20Comms%20%5BP%5D%20Color%20Palette%20-%20%234F4F4F%20XXX%20v1.0.png" width ="50px" /> | <img src="https://github.com/TheIOFoundation/ProjectLockdown/raw/master/Project%20Identity/Color%20Palette/%5BTIOF%20PLD%5D%20Comms%20%5BP%5D%20Color%20Palette%20-%20%23828282%20XXX%20v1.0.png" width ="50px" /> |  <img src="https://github.com/TheIOFoundation/ProjectLockdown/raw/master/Project%20Identity/Color%20Palette/%5BTIOF%20PLD%5D%20Comms%20%5BP%5D%20Color%20Palette%20-%20%23BDBDBD%20XXX%20v1.0.png" width ="50px" /> |  <img src="https://github.com/TheIOFoundation/ProjectLockdown/raw/master/Project%20Identity/Color%20Palette/%5BTIOF%20PLD%5D%20Comms%20%5BP%5D%20Color%20Palette%20-%20%23E0E0E0%20XXX%20v1.0.png" width ="50px" /> |  <img src="https://github.com/TheIOFoundation/ProjectLockdown/raw/master/Project%20Identity/Color%20Palette/%5BTIOF%20PLD%5D%20Comms%20%5BP%5D%20Color%20Palette%20-%20%23F2F2F2%20XXX%20v1.0.png" width ="50px" /> | 
| **R** | 79 | 130 | 189 | 224 | 242 |
| **G** | 79 | 130 | 189 | 224 | 242 |
| **B** | 79 | 130 |  189 | 224 | 242 |
| **H** | 0 | 0 | 0 | 0 | 0 |
| **S** | 0 | 0 | 0 | 0 | 0 |
| **L** | 31 | 51 | 74 | 88 | 95|
| **Hex** | #4F4F4F | #828282 | #BDBDBD | #E0E0E0 | #F2F2F2|


|        **Map and Infographics**        |  |  |  |  |  | 
|----------------|-------------------------------|-----------------------------|-----------------------------|-----------------------------|-----------------------------|
|  **Code**  | B1 | M1 | O1 | R1 | G7 |
| **Sample** | <img src="https://github.com/TheIOFoundation/ProjectLockdown/raw/master/Project%20Identity/Color%20Palette/%5BTIOF%20PLD%5D%20Comms%20%5BP%5D%20Color%20Palette%20-%20%237AAEFF%20XXX%20v1.0.png" width ="50px" /> | <img src="https://github.com/TheIOFoundation/ProjectLockdown/raw/master/Project%20Identity/Color%20Palette/%5BTIOF%20PLD%5D%20Comms%20%5BP%5D%20Color%20Palette%20-%20%236FCF97%20XXX%20v1.0.png" width ="50px" /> |  <img src="https://github.com/TheIOFoundation/ProjectLockdown/raw/master/Project%20Identity/Color%20Palette/%5BTIOF%20PLD%5D%20Comms%20%5BP%5D%20Color%20Palette%20-%20%23F2994A%20XXX%20v1.0.png" width ="50px" /> |  <img src="https://github.com/TheIOFoundation/ProjectLockdown/raw/master/Project%20Identity/Color%20Palette/%5BTIOF%20PLD%5D%20Comms%20%5BP%5D%20Color%20Palette%20-%20%23EB5757%20XXX%20v1.0.png" width ="50px" /> |  <img src="https://github.com/TheIOFoundation/ProjectLockdown/raw/master/Project%20Identity/Color%20Palette/%5BTIOF%20PLD%5D%20Comms%20%5BP%5D%20Color%20Palette%20-%20%23CCCCCC%20XXX%20v1.0.png" width ="50px" /> | 
| **R** | 122 | 111 | 242 | 235| 204 |
| **G** | 174 | 201 | 153 | 87 | 204 |
| **B** | 255 | 151 |  74 | 87 | 204 |
| **H** | 217 | 145 | 28 | 0 | 0 |
| **S** | 100 | 50 | 87 | 79 | 0 |
| **L** | 74 | 62 | 62 | 63 | 80 |
| **Hex** | #7AAEFF| #6FCF97| #F2994A| #EB5757| #CCCCCC |





|  **URL**  |  | 
|----------------|-------------------------------|
| **Alternative URLs** |  |
| **Short URL** |  |
| **Full URL** |  |
| **Status**  |  | 
| **Content**  |  | 
| **Usage** |  | 

|  **URL**  | [https://TheIOFoundation.org](https://TheIOFoundation.org) | 
|----------------|-------------------------------|
| **Alternative URLs** | [.com](https://TheIOFoundation.com) [.net](https://TheIOFoundation.net) [.eu](https://TheIOFoundation.eu) [.asia](https://TheIOFoundation.asia) |
| **ShortURL** | https://TIOF.Click/TIOFWeb |
| **Status**  | Active | 
| **Usage** |  | 



|  **URL**  | [http://TIOF.Click](http://TIOF.Click) | [http://DoThe.Click](http://DoThe.Click) | 
|----------------|-------------------------------|-------------------------------|
| **Alternative URLs** | None | None |
| **Short URL** | None | None |
| **Full URL** | None | None |
| **Status**  | Active | Active |
| **Usage** | Shorten URLs related to TIOF and its projects | Shorten URLs related to other organizations or projects that TIOF supports | 


|  **Domains**  | @TheIOFoundation.org | 
|----------------|-------------------------------|
| **Alternative Domains** | None |
| **Status**  | Active | 
| **Usage** | Official communications from TIOF members both internally and externally | 




|  **Email**  | [Contact@TheIOFoundation.org](mailto://Contact@TheIOFoundation.org) | [Media@TheIOFoundation.org](mailto://Media@TheIOFoundation.org) | 
|----------------|-------------------------------|-------------------------------|
| **Status**  | Active | Active |
| **Usage** | Official communications and inquiries | Media related communications and inquiries | 






|  **Platform**  | LinkedIn | Twitter | Facebook | 
|----------------|-------------------------------|-------------------------------|
| **Alternative URLs** | None | None |
| **Short URL** | http://TIOF.Click/TIOFGitHub| http://TIOF.Click/TIOFRepo|
| **Full URL** | https://github.com/TheIOFoundation/ | https://github.com/TheIOFoundation/TIOF |
| **Status**  | Active | WIP |
| **Content**  | Official profile of TIOF in GitHub | Public repository showcasing TIOF's advocacy work |
| **Usage** | Consolidation of all GH presence for TIOF | Project Management + Community Collaboration + Transparency platform  | 

<!--stackedit_data:
eyJoaXN0b3J5IjpbMTc1NTYyMTcxOCwxOTMxNzAxNTU4LC0xNz
kxMjIwODk3LDE1MzE2NjkzMCw5MTQzMzEyNzEsLTc0NDA1ODgx
LC05MzUxNTE0MDksLTU2MTgxMjQzNSwtMTAyMjAwODg1MCwyMD
EzNjE1MTEwLC0yMDMzMzAyODg2LC0xMzAwOTcxMDYwLDM0NjA4
ODc0MywtMTc0ODA0MDcwLC0zOTIyNjk3MjEsLTEyODIzMjE2OT
ksMTAzMDI5MTc4MSw1ODA4NjY4NTEsMTgyNDMzNzQ0XX0=
-->