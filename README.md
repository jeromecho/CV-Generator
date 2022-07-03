# cv-generator
Generates CVs to be exported in PDF format. Made with React hooks, Typescript, 
html2canvas, jsPDF.

## DEMO

## Technical Challenges 

** Migrating to a Function Based Mindset ** 

* Class *setState* allows for a second argument, a callback that is called 
after the state updates, preventing wacky interpretations of the async 
*setState*. Function hooks didn't have anything like that (well, there is 
an npm package, but it runs into some errors with my Typescript setup). 
To solve this, I changed the way I thought of my problem. I didn't need my 
program to update *right* after the state value was updated. Rather, I just 
wanted the function of typing and getting results displayed in real time. 
Therefore, just adding a *useEffect* that called the needed callback with 
dependencies being every single state value that changed in my Experience 
component was sufficient for my user! 

## Reflection 


### Future Features 

* Adding a custom image instead of a handsome Korean man 
* Responsive font-sizing for long names (my legal name 'Jin' works fine, 'Jerome' is a bit long :unamused: ) 


