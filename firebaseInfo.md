# Firebase is an existing tool made by Google
# With Firebase, we can also leverage sign in with Google 
# Firebase is a google platform that allows you to spin up a database
# It actually is a pretty comprehensive suite of hosting tools and different things for your website
# But the primary usage is that it helps us leverage some kind of database
# That's the most important thing so that we do not have to set our own up

# Once you create a project (db) in firebase
# There is a unique identifier for my project
# It allows Firebase to say that once you instantiate up your instance of Firebase
# This is your Firebase platform's unique ID

# Now we need to allow our react application to leverage Firebase and Firestore and authentication
# And to do that we need to install the Firebase Library

# Our database is going to store all of our data ,wether it be our user data or collection of clothing, maybe invoices , maybe people's credit cards , maybe even all of the earnings

# Let's say we're trying to access crown-clothing
# What i do is i use crown-clothing google sign in so i don't have to create a specific account for only crown-clothing
# I can pretty much use my google account because google already authenticated me as a real person who owns this email

# I'm going to make a request to google server saying , hey i want to sign in for this user at nadimrifaii3@gmail.com
# I'm going to send over my credentials 
# What google will do is say are those credentials correct, yes i can verifiy this person
# So i'm going to generate an off token
# An off token is just a unique hashed string
# On that token is the confirmation that i am who i say i am which is at nadimrifaii3@gmail.com
# Google will then send that back to crown-clothing
# So now crown-clothing has this off token
# Then what's gonna happen is i'm going to send this off token to firebase
# Meaning the backend or the server that firebase is representing in order for it to verify whether or not i can access 
# some of the data that i'm trying to access specifically
# Firebase needs to confirm is this off token a valid off token or not
# So what Firebase will do is it is going to directly ask googke , can you verify this off token
# Google takes it and check it 
# If it's true then it's going to say i have verified this token
# If not it's just gonna send back an error
# If valid , google sends back a verification token
# Now because Firebase has authorized this token , it is then now going to create an access token ###
# This access token is going to define what the user should be able to access the user being specific
# So this access tells us what me at nadimrifaii3@gmail.com is able to access inside of the database
# Firebase sends back the access token to crown-clothing and now me as the user with this access token
# If i want to make different CRUD request against Firebase, what i'm going to do is i'm going to send the request 
# along side the access token back to firebase
# Firebase is then going to verify the access token to determine what different things this access token has access to
# Meaning what is this access token authorized to do
# If it is valid then it will check the crud request and say oh okay you are allowed to do and perform this request
# So then what's gonna happen is that Firebase is going to generate a CRUD response , meaning that
# It's like okay you want to create this data, if you're authorized to do it , i'm going to send you back the appropriate response
# The same thing for read meaning that i'm going to send you back the data that you want to read 
# update or delete
# The access token allows us to skip having to verify every single step as access token represents something to Firebase
# That we can indeed make requests against in the database

# The first thing that we want to think about is the fact that we are going to be interacting with an API
# The API in this particular case is going to be Firebase

# Utils folder going to contain utility files

# We are going to make sure that whenver a user authenticate we also create a record of them inside of firestore (our database)


# Firestore structure (data model):
# Inside Firestore is comprising data of three things 
# 1- Collection
# 2- Document
# 3- Data
# This visual is very good because it's kind of like looking abouta folder inside of a folder you migh have multiple documents 
# on each document the data related to that document is what's written on that document
# So we can imagine that if we had a collection of users
# We would make seperate folder with users on it
# So that we know that inside of that folder it's all of our data related to every instance of user that is inside of our database
# Each seperate document represents an individual piece of data , so an independant user
# Now the actual information related to that user is going to be the data

# Document: is the smallest units inside of firestore
# Imagin we had a shoe with a unique id of NikeAirMax
# This NikeAirMax inside will have data that tells you what the information regrading this shoe will be
# It's a JSON object that kind of holds the info that is relevant to shoes
{
    NikeAirMax:{
        name:"Air Max",
        "brand":"Nike",
        "imageUrl":"www.imageUrl.com",
        "cost":{
            "price":150,
            "currencty":"USD"
        }
    }
}
# Documents are pretty much JSON objects , NikeAirMax is a document and inside of it are the data

# Collections:
shoes:{
    NikeAirMax:{
        name:"Air Max",
        "brand":"Nike",
        "imageUrl":"www.imageUrl.com",
        "cost":{
            "price":150,
            "currencty":"USD"
        }
    },
    AdidasNMD:{
        name:"NMD",
        "brand":"Adidas",
        "imageUrl":"www.imageUrl.com",
        "cost":{
            "price":250,
            "currencty":"USD"
        }
    },
}
# Here we had a shoes collection , inside of that shoes collection we migh have our NikeAirMax which is a document of a shoes living inside our shoes collection
###
# shoes is the collection
# NikeAirMax and AdidasNMD those are unique strings that represent the ID of these individual seperate documents
# And then the values inside are the data respective for those documents
###
# Any data we're gonna store inside of Firebase is going to geenrally fit inside this model of collections,documents , their respective data
