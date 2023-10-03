let tweets = [
    {
      id: 1,
      text: '드림코더분들 화이팅',
      createdAt: Date.now().toString(),
      name: 'Bob',
      username: 'bob',
      url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
    },
    {
        id: 2,
        text: '드림코더분들 화이팅',
        createdAt: Date.now().toString(),
        name: 'UJ',
        username: 'uj',
        url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
    },
];

export function getAll(){
    return tweets;
}

export function getAllByUsername(username){
    return tweets.filter(t => t.username === username);
}

export function getById(id){
    return tweets.find(t => t.id == id);
}

export function create(text, name, username){
    const tweet = {
        id: Date.now().toString(),
        text,
        createdAt: new Date(),
        name,
        username,
    }
    tweets = [tweet, ...tweets];
    return tweet;
}

export function update(id, text){
    const tweet = getById(id);
    if(tweet){
        tweet.text = text;
        return tweet;
    }
    return tweet;
}

export function remove(id){
    tweets = tweets.filter(tweet => tweet.id != id);
}