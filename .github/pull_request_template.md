## What I did

- Thing I’ve done 
- Thing I’ve done
   - Detailing
   - Detailing

<img width="1680" alt="Screen Shot 2020-09-02 at 14 45 26" src="https://user-images.githubusercontent.com/41218597/92125097-f9526e00-edd4-11ea-8f25-d485a389a6fd.png">

## How to test

1. Open the terminal and go to the folder of this project

1. In terminal, open 3 tabs:
    1. Tab 1:
       1. `git checkout develop`
       1. `git pull`
       1. `git checkout <branch name>`
       1. `git pull origin <branch name>`
    1. Tab 2:
       1. `cd server`
       1. `npm install`
       1. `npm run start`
    1. Tab 3:
       1. `cd client`
       1. `node index.js`

1. In your browser go to http://localhost:3000 and http://localhost:3001/admin

1. Check if the component looks just like the mockup in the erspective widths
    1. 3000px (Larger than usual - Margin has to grow and the content stay in the middle)
    1. 1920px (large web - Has to be axactly equals to me mockup)
    1. 1600px (usual web - the content has to fit the screen without breaking)
    1. 1025px (Smallest web - the content has to fit the screen without breaking)
    1. 1024px (Biggest mobile - the content has to fit the screen without breaking)
    1. 600px (Usual mobile - the content has to fit the screen without breaking)
    1. 320px (Smallest mobile - the content has to fit the screen without breaking)
    
1. In the admin page, try to edit something relative to this issue and check if it updates in the front

1. Read the changed files section on GitHub and check if the code is okay

1. Test the things that you think are worth testing, even the ones that are not in this description 

Resolves: #<issue number>
