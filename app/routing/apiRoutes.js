// Linking the friend data
let friends = require('../data/friends.js')

// Function
module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends)
  });
  app.post("/api/friends", function(req, res) {
    let newFriend = req.body

    // First, I create a difference array that will store the index number and the total diff for each friend.
    let diffArr = []

    // Then, I have two loops, one which will 
    // loop through each friend object, and one
    // that will loop through the scores array and compare
    // the values between newFriend and the already set friends
    for (i=0; i < friends.length; i++) {
      let totalDiff = 0;
      for (x=0; x < newFriend.scores.length; x++) {
        if (friends[i].scores[x] !== newFriend.scores[x]) {
          let diff = Math.abs(parseFloat(friends[i].scores[x]) - parseFloat(newFriend.scores[x]))
                  
          totalDiff += diff
        }
        else {
          
          totalDiff += 0;
        }
      }

      // Each time a friend is finished, the 
      // id and totalDiff get pushed to the array
      diffArr.push({
        "id": i,
        "totalDiff": totalDiff
      })
      console.log(diffArr)
    }

    // I set lowestDiff to the first index
    // and change it if any other items in the
    // array are lower
    let lowestDiff = diffArr[0].totalDiff
   
    let matchId = diffArr[0].id
    // Now I run a final loop to determine the 
    // lowest totalDiff (the best friend)
    for (j=0; j<friends.length; j++) {
      if (diffArr[j].totalDiff < lowestDiff) {
        lowestDiff = diffArr[j].totalDiff;
        matchId = diffArr[j].id
      }
    }
    let bestMatch = friends[matchId]
    
    friends.push(newFriend)

    res.json(bestMatch)   
  });
}