# AA
### Learning outcomes
This was good as an introduction to AWS, applied Javascript, data scraping, arrays and setting up the dev pipeline to create databases. It helped establish baseline vocabulary we would use throughout the class.

### Challenges
My lack of familiarity with Javascript and programming fundamentals was the single hardest thing about this assignment. This class, actually. It was a challenge not knowing Javascript then that was layered with assignments about designing UI and database structures without understanding the final shape of the assignment. I wasn't prepared for the amount of time I'd have to spend learning the skills that were required but not really taught. 

https://github.com/daggus/data-structures/tree/master/finals/projects/aa/AA01.png

https://github.com/daggus/data-structures/tree/master/finals/projects/aa/AA02.png

### Project notes

The initial step was to make a request for each fo the AA pages for Manhattan. The key decision here was whether to loop and iterate on the request or simply make multiple requests. I did the later because there were only 10 files and I wanted the practice of typing and repeating an action. Saved file to AWS Cloud 9 and uploaded to Github.

I had Zone 3. Use Cheerio to parse the data from the previous assignment into a list of addresses. Output this list into a text file. First involved use and practive of loops. Consider the format structure of the source documents. How can these be effectively searched and cleaned up? Organize these into JSON files to be more easily addressed later.

Create a TAMU account. Using TAMU make a request to each address and produce lat/long data. Make sure formatting is consisent for all addresses. The final output is an array containing street addresses with lat/long. 

Create tables in an RDS database. Updated credentials with my SQL username. Updated endpoint URL
db_credentials.host = 'dbrad-database.c3pgqmf4c0fp.us-east-1.rds.amazonaws.com';

Saved password to remote location.

Had issues with my database.
* First pass at creating the db didn't take
* Created a new db
* Then running week4part2.js wouldn't result in anything
* Had to create yet another db. My third attempt

Copied over credentials from week4part2.js
Required the node fs module and updated that variable
Updated var thisQuery to reference the streetAddress, lat and long specified in my JSON file 

When it came time to write queries for the AA database I realized, in hindsight, that I hadn't set up the query for all of the required table data. I have addresses but not meeting times, etc. 

Assignment 7 was the doozy. Up until this part of the project everything had a challenging, but predicatable learning curve. This assignment produced more frustration than learning value. Our team of 5 worked about a total of 100 hours and still didn't figure it out. We tried using code that Michael Wolf provided, which worked, but didn't clarify the assignment. It didn't seem like we had much choice though because we were stumped. 

We took our .txt address data for different zones, converted that to JSON, and combined those files. For me this assignment was pure frustration. I would take a class that is just this assignment. 

The samples for all three projects, provided in the Week 10 assignment, were very helpful. I wish I'd know about them earlier. It would've been a userful in-class exercise to view and discuss these well before we even began collecting data. 

For the final step of all three projects I wrote a server.js file that address both the RDS and DyanmoDB databases that have been created thus far, updating the credentials in the sample file. 



# Dear Diary
### Learning outcomes
Learning how to set up and manage a database and the differences between SQL and NoSQL. It was a surprise at the end of the assignment that we would also be doing some HTML and CSS. I wish that had been discussed in class so we could better prepare. The working vocabulary and high level concepts have been very useful in other classes and my freelence work. I enjoyed the personal aspect of this project, beign able to define our own ideas and test them. 

### Challenges
Not knowing much about databases, much of their set up felt arbitrary. I was mostly able to follow the instructions we were given but the underlying reasoning didn't always make sense. Just keeping up with the homwork was enough to occupy my time but I'd like/need to learn more about the connections between various setup decisions. 

https://github.com/daggus/data-structures/tree/master/finals/projects/diary/DearDiary01.png

https://github.com/daggus/data-structures/tree/master/finals/projects/diary/DearDiary02.png

https://github.com/daggus/data-structures/tree/master/finals/projects/diary/DearDiary03.png



### Project notes
Create a database using Dynamo DB. It took me some time to figure out the vocabulary used on AWS is confusing. The assingment, AWS are about created a database but I believe we created an Instance, which can support multiple databases. 

Using the interface sketch we proposed begin defining the structure of the Dear Diary database. Set constructors (ex. date, time, media type, effectively). Begin created sample entries. Some confusion about what to use as a PK and whether a PK is even needed. This is one of those points where its hard to define something when the ultimate project needs are unknown. 

Installed the AWS SDK for Javascript to generate access keys to the database. 

Write query NoSQL databases I created, filtering, aggregating, and/or restructuring the data in the process. Here's where I learned the importance of a PK. I had to rewrite this a couple times. I struggled with the formatting of the date entries as well. Note: the external reference to AWS ID and KEY>



# Sensor
### Learning outcomes
I really enjoyed using the sensors. After so much work outputting data is was refreshing to work on something physical. It was helpful to connect the various stages for this project: the controller setup, the IDE for the controller, the data collection and the presentation. I'm very interested in the physicalization of data and this project helped to connect some dots. 

### Challenges
Having no previous experience with the sensors made it difficult to choose one at the beginning of the semester. It would've been helpful to see examples before making the selection. In general, I think more examples would have helped each assignment. Again, it wasn't clear how the actual data visualization would happen. 

https://github.com/daggus/data-structures/tree/master/finals/projects/sensor/Sensor01.png

https://github.com/daggus/data-structures/tree/master/finals/projects/sensor/Sensor01.png


### Project notes
Set up Particle. This was refreshingly straight forward. I had some issues connecting from home but resolved those easily enough. Turns out it wasn't an issue with the wifi but a loose connection on the board itself. Human error. Always double-check connections. 

Produce a sketch. I wasn't entirely sure what my potentiometer would be good for so I did a sketch and the final result ended up becing Completely different.

Creating the table I was initially confused and thought we needed to create an actual new table, as opposed to using our existing table and write new data to that. A pretty simple task through. Updated credentials in the sample file to make this work including my database endpoint.

