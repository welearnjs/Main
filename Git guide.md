## How to use Git
___

### Using git to push your solution to our repo:

1. Download git. For downloading latest version of git go to http://git-scm.com/downloads and choose version for your operating system.
2. Open git-bash, create new folder, where you will be storing your project and initialize git.
Commands:
   + Create folder: **mkdir folderName**
   + Go to folder: **cd folderName**
   + Initialize git: **git init**

![Picture-1]()

3. Create a working copy of a local repository by running the command:
   + **git clone https://github.com/welearnjs/Challenges.git**


![Picture-2]()

4. Go to /Challenges folder and change branch from master to challenges.
Commands:
   + Go to /Challenges: **cd /Challenges**
   + Change branch: **git checkout challenges**

![Picture-3]()

5. And now you can solve tasks and copy your solutions to an appropriate folder. For example I’ve added "ExampleDay1.js" file to the folder (/Challenges/FCC/Day1). After running command "git status" you can see a list of files which are untracked. The git status command displays the state of the working directory.
Commands:
    + Check git status: **git status**

![Picture-4]()

6. Now you need to make a file tracked by running  command "git add ExampleDay1.js". It‘s good practice to check the state of your repository before committing changes so that you don’t accidentally commit something you don't mean to.
Commands:
   + Add file: **git add ExampleDay1.js**  (or "git add *", will add all files)
   + Check git status: **git status**

![Picture-5]()


7. To actually commit these changes use: git commit -m “Your comment”. Now the file is committed, but not in your remote repository yet. Note: comment should be meaningful
Commands:
   + Commit file: git commit -m “Your comment”
   + Git status: git status

![Picture-6]()

8. Your changes are now in the HEAD of your local working copy. To send those changes to your remote repository, execute git push origin challenges. And after we can see our file on remote repository on github.com
Commands:
   + Push committed file to remote repository:  git push origin challenges

![Picture-7]()
![Picture-8]()









---








#### Example

* Slack username linking to github profile : Status : Field of Activity


22.07.15 - Table is updating...


| Github | Badge |
| ------ | ----------- |
| __[p9gehka](https://github.com/welearnjs)__ | ![p-1](http://i.imgur.com/xpdc0wn.png) ![FCC](http://i.imgur.com/teM4A62.png)|
| __[Imanuel](https://github.com/welearnjs)__ | ![p-1](http://i.imgur.com/xpdc0wn.png) ![FCC](http://i.imgur.com/teM4A62.png) ![starter-1](http://i.imgur.com/j73IMb7.png) |
| __[Oleg](https://github.com/welearnjs)__ | ![p-1](http://i.imgur.com/xpdc0wn.png) ![FCC](http://i.imgur.com/teM4A62.png) ![starter-1](http://i.imgur.com/j73IMb7.png)|
| __[ramez](https://github.com/welearnjs)__ | ![p-2 starter](http://i.imgur.com/3X2poWc.png) |
| __[romanovsci](https://github.com/welearnjs)__ | ![FCC](http://i.imgur.com/teM4A62.png) |
| __[lukyanovfedor](https://github.com/welearnjs)__ | ![FCC](http://i.imgur.com/teM4A62.png) |


All Badges:

![starter-2](http://i.imgur.com/3X2poWc.png)
![starter-1](http://i.imgur.com/j73IMb7.png)
![p-1](http://i.imgur.com/xpdc0wn.png)
![p-2](http://i.imgur.com/chhyuw4.png)
![FCC](http://i.imgur.com/teM4A62.png)
![study-gd](http://i.imgur.com/P5iCfRz.png)

---
# Good luck and have fun learning!


