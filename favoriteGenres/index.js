var getFavorites = (userSongs, songGenres) =>{
    songToGenres = {}
    for(let genre in songGenres){
        for(let song of songGenres[genre]){
            songToGenres[song] = genre
        }
    }

    let userGenres = {}
    for(let user in userSongs){
        let userCount = {}
        for(let song of userSongs[user]){
            if (!(song in songToGenres)){
                continue
            }
            let genre = songToGenres[song]
            if(genre in userCount){
                userCount[genre] += 1;
            }
            else{
                userCount[genre] = 1
            }
        }
        userGenres[user] = userCount
    }

    result = {}
    for(let user in userGenres){
       let userResult = []
       let most = 0
       for(let genre in userGenres[user]){
           let songCount = userGenres[user][genre];
           if (songCount>= most){
               if(songCount > most){
                   userResult = []
                   most = songCount 
               }
               userResult.push(genre)
           }
       }
       result[user] = userResult
        
    }
    return result;
}


let userSongs = {  
   "David": ["song1", "song2", "song3", "song4", "song8"],
   "Emma":  ["song5", "song6", "song7"]
};
let songGenres = {  }

getFavorites(userSongs,songGenres)