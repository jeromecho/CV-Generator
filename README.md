# cv-generator
Generates CVs to be exported in PDF format. Made with React hooks, Typescript, 
html2canvas, jsPDF.

## DEMO

https://user-images.githubusercontent.com/71617542/177023457-81bf3b79-9bc2-4bd3-974c-f43f8dbfd418.mp4

## Technical Challenges 

**Migrating to a Function Based Mindset** 

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

**Learning Typescript** 

* I scoured a web tutorial, a YouTube tutorial, and the official docs. It took a while for the syntax to sink in, 
and a little bit of usage for me to realize how nice Typescript by forcing me to write code with standardized 
signatures built into my functions. For anyone scouring this README, I recommend Ben Awad's 'React Typescript Tutorial', 
the official docs, and the React section of this typescript deep dive (https://basarat.gitbook.io/typescript/tsx/react). 

## Reflection 

I typed everything this time for retention, but I finally got Vim-Snippets + Ultinsips working. Combined with LSP configuration, I hope my productivity 
increases even more. 


### Future Features 

* Adding a custom image instead of a handsome Korean man 
* Responsive font-sizing for long names (my legal name 'Jin' works fine, 'Jerome' is a bit long :unamused: ) 


