# ABOUT:
This repository contains the files from NW4, a fast learning week for improve abilities into NodeJS and ReactJS or start at this knowledge;
For the backend track, we built a email sender api where we developped this entire structure in Model-Repository-Controllers way



### Fast notes (NodeJS):

Database: migrations and entire DB features;
Models: DB connexion with table correspondance;
Repositories: functions and activities used by the controller to access the DB/models;
Controllers: Responsable for create the first layer which going to access the repositories;

-Automatized Tests:
	-- Unit Test: normaly used when using TDD (When you start a development by a test and implement all functionalities after that);
	-- Integration Test: We test the entire functionality test, for example in this case: starts testing: request -> routes -> controller -> repository || Test the entire flux; (Used in this work)
														<- repository <- controller <- response	
	-- End to End (E2E): Test all the user interation. Usually implemented in Front-end;





#### Fast Notes (React):
Components: everything in React, things that u keep seem as repeated multiple times;
Properties: Like Attributes in HTML, what u can pass through the tags (every component receive "props" as everything, and always has a .children);
States: variables which u gonna use and change after use it, so you cant use static ways in your html body, u need to use states for that - Imutability principal

-Next - React Framework
SPA(Single Page Application) = just change some components in the page, but not them all, into the client side with JS (create the entire page in clientside);
SSR(Server Side Rendering) = 
SSG(Static Side Generation) = html, css, js pure, but we can update in some timesteps,

CSS modules to not impactate wrongs componentes in our application
hooks: triggered when called, to do something in this function
 

Note: When useEffect has second parameter as void ([]), he's going to be executed just one time, in the first page reload time
