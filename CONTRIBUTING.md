# Contributing

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)
How to contribute to the project without generating conflicts and respecting the git workflow. Please use the terminal. ✨
### Requirements
We will use git so.. Download git.
| Requirement | Link |
| ------ | ------ |
| GIT | [https://git-scm.com/download/win][url] |

After downloading configure your github user in the terminal
```sh
git config --global user.name "YourName"
git config --global user.email "example@email.com"
```
### In Your Terminal
Make sure you are in the project folder path. Then, go to the master branch and pull the last changes.
```sh
cd C:\Users\Usuario\Documents\GitHub\Frontend-Web-Application-RepairNow
git checkout master
git pull
```
Then go to your branch where you will work. Or create a new branch. And merge the master branch into your branch.
```sh
git checkout -b "newBranch"
git merge master
```
Finally, make your changes, commit each change with its respective message, and push your changes to your branch.
```sh
git add .
git commit -a -m "new changes message"
git push origin newBranch
```
   [url]: <https://git-scm.com/download/win>
