This is a [News site](https://vercel.com/yagi91/news-cast2)

## Getting Started
## Tools Used

- React
- JavaScript
- Next
- Tailwind
- News Pulling API

![news cast](https://user-images.githubusercontent.com/84844806/220809133-9111dbb7-937f-4921-94f3-0858bae3620c.PNG)


# News Cast

*TABLE OF CONTENT*
- [Description of Project](#description).
- [LINK to app](https://yagi91.github.io/pomodoro-clock/).
- [Tools Used and why I choose them.](#tools).
- [User Stories](#users-story-completed-and-added-functionality-of-the-clock).
- [Problems Encountered](#problems-faced).
- [Credit](#credits).

### Description
NewsCast pulls news from various sources around the globe in many langguages. Details containing the article is scrabed and displayed in a seperate page to the end user. Various common categories are available for the user to browse through.


### TOOLS:
- NextJS: It provides me with sever side rendering wich is important for a side using a 3rd party API. Also implementing page routing with this was a breeze ⚡ 
- TailwindCSS: Facilates developing mobile freindly side with a few class, though it could be hectic managing the classes.💼
- JSOm & Readabilty: A javaScript library to ease scraping of the content from the offcial news site since the Google's news API does not provide the content;
## USERS STORY COMPLETED
- I can see a title element that has a corresponding id="title.
- Bottom and left axis are present.
- I can see dots, that each have a class of dot, which represent the data being plotted.
- Each dot has a property of data-xvalue and data-yvalue, each dot should be within the range of the actual dta and in the caorrect format intergers for years or Date objects are acceptable for data-yvalue minutes use Date objets.
- I can see multiple tick labels on the y-axis with %M:%S time format.
- I can see a legend containing descriptive text that has id="legend".
- I can mouse over an area and see a tooltip with a corresponding `id="tooltip"` which displays more information about the dot.
- My tooltip should have a data-date property that corresponds to the data-date of the active area..

### PROBLEMS FACED
Using the correct axes to represent the time in minutes and seconds I also had to learn about how to edit tick formats to suit the purpose.

#### CREDITS
This scatter plot was created after completing my Data vizualization course on [FREE CODE CAMP](https://www.freecodecamp.org/).
