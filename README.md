# Substantive Research - Technical test

## by Matthew Schultz ##

## How to run ##

This project has been completed as a Vue application. To run this application locally you will need to:

1. Clone the repository

`git clone ...`

2. Enter the directory

`cd tech-test`

3. Install dependencies

`npm install`

4. Run the application

`npm run dev`

## Plan of attack ##

The starting point for me is deciding which javascript framework (if any) I would like to use for this task. The job ad said that Substantive Research utilises a Vue.js frontend. I decided that this would be a good opportunity to use Vue as it's a framework I haven't got much experience in but have wanted to learn more about. After completing a quick Vue refresher (thanks youtube and front end masters) I decided that this would be an appropriate framework for the project.

The next step is to look at the API data to see what data is provided and to decide how best to display this to a user. As per the project requirements the user should be able to see the percentage of interactions that this client has with a sector. While the percentage isn't provided by the API, it can be calculated by using the total number of interactions and the number of interactions with each specific sector.

## Current iteration

Now that I had a plan of attack it was time to create the project. First step was creating a new Vue application. After creating the application I just wanted to put together a very basic page that provided all the information required using fake data.

I then decided it was time to make an API call so that the project can pull real data. For the API call I decided to use axios over the native 'fetch' API due to having more familiarity with it and preferring its error handling process. I set up axios in the project and pulled all the API data and displayed it.

I now had to manipulate the data so that I could calculate and display the percentages. I considered doing this in a separate file or component as my usual preference would be to leave data manipulation to the backend but I figured it was a simple enough process that could be handled in the component for the purposes of this task.

After getting the required data correctly displayed I decided it was time to make it all look a bit nicer. I looked up what options there are for displaying the data in a chart or graph and found chart.js to be a commonly used library. From there I was able to find a really quick and easy to use library called vue chartkick which was really easy to implement. All I had to do was slightly modify the format of how the API data was being stored to make integration really simple.

## Future improvements ##

There are quite a few improvements that could be made to this project with a little more time.

First priority would be to add more unit tests. At the moment there is no testing of the API request and there are a few elements on the page that should be tested further.

I would like to add Typescript to it since the data structure is well defined and consistent. As the project grows Typescript is a good tool for catching any type related errors and would make the code easier to follow as other people potentially started adding to the project themselves.

As the project grows more complex it would also be nice to utilise more of SASS. I installed SASS for this project but I haven't started taking advantage of the benefits it offers. It would be nice to set up some variables to make theming easier and the application more accessible for users with visual impairments.

Another improvement would be utilising more of chart.js to make the charts more customisable. Chartkick is really good because it's really easy to implement, however you do lose a lot of the customisation options that are offered in other frameworks or by chart.js itself.
