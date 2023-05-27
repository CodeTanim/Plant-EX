[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11012694&assignment_repo_type=AssignmentRepo)


# PlantEX

PlantEX is a comprehensive plant care application designed to assist both seasoned and novice gardeners in nurturing their green friends. Built using Vite, React, and Express, this robust tool boasts a range of features aimed at simplifying and enhancing the plant care journey.


## Prerequisites

Before you begin, ensure you have met the following requirements:
* You have installed [Node.js](https://nodejs.org/) and [pnpm](https://pnpm.io/installation).


## Local Setup

To set up PlantEX locally on your computer, please follow the steps below:

1. Clone the repository:
```bash
git clone https://github.com/csc473-spring23/final-project-linkin-code.git
```

2. Navigate to the project directory:
```bash
cd final-project-linkin-code 
```

3. Install the dependencies:
```bash
pnpm install
```

## Running PlantEX

1. Open a new terminal in the project directory (final-project-linkin-code) and start the server:

``` bash
pnpm run dev
```

2. Open another terminal in the same project directory and start the client:

``` bash
pnpm run client
```

Once both the server and the client are running, you can view the app by navigating to the localhost URL specified by the 'pnpm run client' command in your web browser. NOTE: If the client local host is not http://localhost:5175,
http://localhost:3000, or http://localhost:5174, please let me know because I need to add your client local host to the PLANTNET Api settings in order for the image identification feature to work. 


## Features Showcase

Before we dive into the main features, let's have a look at our About page and Sign Up page:

### About Page

Our About page provides users with an overview of what PlantEX is all about. 

![About Page Screenshot](https://i.postimg.cc/vBCJ2zWK/Screenshot-2023-05-21-at-5-47-06-PM.png)

### Sign Up Page

The following is the signup page

![Sign Up Page Screenshot](https://i.postimg.cc/ZYM2TZMh/Screenshot-2023-05-21-at-6-09-25-PM.png)



PlantEX is equipped with several features to aid in plant identification and care. Here we will showcase two of our main features:

### Main Feature 1: Text Input Search
You can input any plant name, and the application will show you the top 4 results for that plant name. Clicking on any of the results will take you to that plant's specific information page. The GIF below demonstrates this feature:

![Text Input Search GIF](http://g.recordit.co/oUwC91ysO5.gif)

### Main Feature 2: Image Input Search
Similar to the text input search, you can upload an image of a plant and the application will show you the BEST result matching that image. Clicking the result will take you to that plant's specific information page. This feature is particularly useful when you have a plant you cannot identify by name. The GIF below demonstrates this feature:

![Image Input Search GIF](http://g.recordit.co/MYa5Dz5FnL.gif)




