# 2nd part of the Complete 2019 Web Developer Bootcamp

This is a follow along from Angela Yu's bootcamp which is to create numerous applications with modern software and programming languages.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Running Ubuntu 18.04 Bionic Beaver standard image
Visit ubuntu.com to get the latest image.
Google how to install the iso.
(iso on USB through UniversalUSB installer works.)
```



### Installing

A step by step series of examples that tell you how to get a development env running



Node
```
sudo apt update
sudo apt install nodejs npm
node -v
'check what version you have'
```


Install mongoDB
```
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4

echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list

sudo apt-get update

sudo apt-get install -y mongodb-org

sudo service mongod start
```


Start up a shell
```
mongo
```

making the directory
```
mkdir fruitsprojects
cd fruitsprojects
npm init
(accept all defaults)
npm install mongoose
```


```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

There are no breakdown of these tests.

```
```

### And coding style tests

There are no breakdown of these coding tests.

```
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Node.js](https://nodejs.org/en/) - JavaScript runtime
* [Express.js](https://expressjs.com/) - Fast, unopinionated, minimalist web framework
* [PM2](https://github.com/Unitech/pm2) - Node.js Production Process Manager with a built-in Load Balancer.
* [MongoDB](https://www.mongodb.com/) - MongoDB is a document database with the scalability and flexibility
* [mongoose](https://mongoosejs.com/) - elegant mongodb object modeling for node.js

## Contributing

No contribution.md file setup yet. No contributions at this time.

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## Authors

* **Noe Alvarado** - *Initial work* - [CeroDosUno](https://github.com/CeroDosUno)

## License

This project is licensed under the GNU Public License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Thank you to anyone that blogs, teaches coding courses, or contributes funds towards the development of coding skills among minorities.
* This engineer couldn't have gotten far without you guys.
* Thank you to the Angela Yu @ App Brewery
