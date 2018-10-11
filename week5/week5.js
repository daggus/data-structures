// Part 2
var diaryEntries = [];
var async = require('async'); // npm install async

class DiaryEntry {
  constructor(primaryKey, date, time, audio, text, image, video) {
    this.diary = {};
    this.diary.S = primaryKey
    this.date = {}; 
    this.date.S = new Date(date).toDateString();
    this.time = {};
    this.time.S = time;
    if (audio != null) {
        this.audio = {};
        this.audio.S = audio;
  }
    
    if (text != null) {
        this.text = {};
        this.text.S = text;
  }
    
      if (image != null) {
        this.image = {};
        this.image.S = image;
  }
  
  if (video != null) {
        this.video = {};
        this.video.S = video;
  }
}
}

diaryEntries.push(new DiaryEntry('01', 'October 9, 2018', "12:00pm", "MP3", "I see a wolf", "jpeg", "youtube"));
diaryEntries.push(new DiaryEntry('02', 'October 10, 2018', "2:32am", "There was a face in the clouds"));
diaryEntries.push(new DiaryEntry('03', 'October 11, 2018', "6:45pm", "There was a racoon in a babys eyes", "youtube"));
diaryEntries.push(new DiaryEntry('04', 'October 12, 2018', "1:30pm", "MP3", "The stain on the wall looked like Michigan", "youtube"));

// Part 3
console.log(diaryEntries);

var AWS = require('aws-sdk');
AWS.config = new AWS.Config();
AWS.config.accessKeyId = process.env.AWS_ID;
AWS.config.secretAccessKey = process.env.AWS_KEY;
AWS.config.region = "us-east-1";

var dynamodb = new AWS.DynamoDB();

// need to figure out this loop
async.eachSeries(diaryEntries, function(value, callback) {
    var params = {};
    params.Item = value; 
    params.TableName = "deardiary";
    dynamodb.putItem(params, function (err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});

//slow callback, reset to 2000 which is in milliseconds and equals 2 seconds
setTimeout(callback, 2000);

});

