# Changelog-generator

This is a project made with [Next.js](https://nextjs.org) to create easy and fast changelogs.

![Preview](./docs-assets/preview.png) 

## How to use

### Configuration and changelog data entry
The data that will be part of the changelog is obtained from a JSON file. You must edit the file located in the directory `data/changelog.json`.  

![Preview](./docs-assets/data.png) 

You must also edit the file of configuration located in the directory `data/configuration.json`.  

![Preview](./docs-assets/configuration.png) 

After edit JSON files, you are ready to publish.

> 💡 TIP: If you need to change the changelog data frequently, you should consider automating the generation of the changelog.json file.

### Publish
Execute the comand `npm run publish`. A directory called `/out` will be created. Move all content of that folder to your web server. Of course, you can publish the website generated on GitHub Pages, Surge or similar services.


### Developing
Useful commands:
* Run the project with 'watch' option: `npm run dev`.    
* Run a basic linter: `npm run lint`.   


### Requirements
This project require [Node.js](https://nodejs.org) installed on your computer.
Clone or download this repository and then install the dependencies: `npm install`.
