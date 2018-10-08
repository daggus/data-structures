# Part 1
Pruducing sketches
I've done bunches of wireframes for client side development but this is my first time producing schematics for database architecture so I've produced two diagrams to facilitate conversation and, hopefullly, tease out different perspectives.'

# Part 2

Updated credentials with my SQL username

Updated endpoint URL
db_credentials.host = 'dbrad-database.c3pgqmf4c0fp.us-east-1.rds.amazonaws.com';

Saved password to remote location
ec2-user:~/environment (master) $ export AWSRDS_PW="*******";
ec2-user:~/environment (master) $ export AWSRDS_PW="*******"
ec2-user:~/environment (master) $ printenv | grep AWSRDS_PW

Had issues with my database.
* First pass at creating the db didn't take
* Created a new db
* Then running week4part2.js wouldn't result in anything
* Had to create yet another db. My third attempt

# Part 3
Copied over credentials from week4part2.js
Required the node fs module and updated that variable
Updated var thisQuery to reference the streetAddress, lat and long specified in my JSON file

# Gitelman reading
Midwifery of thought 
Slipbox as assistant
Evernote, it grows more useful with time  
Connection to machine learning, virtual assistants and a mapping dialogue

# Hills reading
It's difficult to understand how this applies to the design of an actual database. As has been the case through much of our Hills reading I wish there was a consistent case study to follow.

## ACID

**Atomicity**
A DBMS transaction that will act as though it's indivisible. Either all affected tables update or the transaction fails.

**Consistency**
Enforces constraints on data. String fields may only contain strings, date fields can only contain dates, numeric fields can only contain numbers, etc

**Isolation**
Transactions can only see the results of previous transactions. Transaction won't interfere with one another. 
*To what degree is this about efficiency vs. security?*

**Durability**
Once a transaction is complete its results are permanently visible.

Scalability is an issue.


## BASE

For horizontal scaling to work, setting farms of servers side-by-side, you must choose two of the following:
* Consistency
* Availability
* Partitiion tolerance

Since ACID isn't easily achievalbe BASE is the fallback position.
**Basic availability**
Most of the data is available most of the time.

**Soft State**
A commit might not always succeed.

**Eventual consistency**
Out of sycn copies will eventually catch up.

*Is it a hacker strategy to track and exploit consistent positions of transaction failure?*
