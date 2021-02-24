# ABOUT:
	This repository contains the files from NW4, a fast learning week for improve abilities into NodeJS and ReactJS or start at this knowledge;
	For the backend track, we built a email sender api where we developped this entire structure in Model-Repository-Controllers way

### Fast notes:

Database: migrations and entire DB features;
Models: DB connexion with table correspondance;
Repositories: functions and activities used by the controller to access the DB/models;
Controllers: Responsable for create the first layer which going to access the repositories;

-Automatized Tests:
	-- Unit Test: normaly used when using TDD (When you start a development by a test and implement all functionalities after that);
	-- Integration Test: We test the entire functionality test, for example in this case: starts testing: request -> routes -> controller -> repository || Test the entire flux; (Used in this work)
														<- repository <- controller <- response	
	-- End to End (E2E): Test all the user interation. Usually implemented in Front-end;



