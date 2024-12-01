const mongoose = require('mongoose');

const urlschema = new mongoose.Schema({
    LongURL: {
        type: String,
        required:true,
    },
    ShortenedURL: {
        type: String,
        required:true,
    }
});

const URL = mongoose.model('URL',urlschema , 'urls'); //note that if we don't name the collection with (urls) it will automatically call it "urls" beacause of lowercase and ploralize od the model name URL 

URL.inputURL = function (LongURL,ShortenedURL){
    const addedURL = new URL({
        LongURL: LongURL,
        ShortenedURL: ShortenedURL,
    });

    addedURL.save().then(()=> console.log("The new URL added successfully"));
    
}

module.exports = URL;
