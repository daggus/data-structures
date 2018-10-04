#Part 1

#Part 2

Updated credentials with my SQL username

Updated endpoint URL
db_credentials.host = 'dbrad-database.c3pgqmf4c0fp.us-east-1.rds.amazonaws.com';

Saved password to remote location
ec2-user:~/environment (master) $ export AWSRDS_PW="kalamazoo05";
ec2-user:~/environment (master) $ export AWSRDS_PW="kalamazoo05"
ec2-user:~/environment (master) $ printenv | grep AWSRDS_PW

Had issues with my database.
* First pass at creating the db didn't take
* Created a new db
* Then running week4part2.js wouldn't result in anything
* Had to create yet another db. My third attempt

#Part 3
Copied over credentials from week4part2.js
Required the node fs module and updated that variable
Updated var thisQuery to reference the streetAddress, lat and long specified in my JSON file