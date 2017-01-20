# README

INTRODUCTION
Thanks again for taking a look at my demo. This readme will give you some background on what I was thinking when I created this demo and some of the things I would have done given more time. I look forward to talking to you all about the code and getting your feedback!

FEATURES
* On the feature side my demo is adaptive to device, screen size and number of educators.
* The process of sorting the data happens in the back end using rails and the JavaScript contains the logic to size and place each data point while optimizing for vertical space by recognizing when more than one event can fit in a lane.
* I included logic that displays the bars of living people as continuous and the deceased as truncated.
GIVEN MORE TIME
* I would not show the year 2017.
* Make adjustment to bar height.
* Add new, create, and delete routes, to add and delete ‘people’.

EXTRAS
* Clean, easy to follow, clearly displays the lifespan of all educators.
* Fixed time line elements make it easy to compare dates.
* Hover effect on decades provides additional information without cluttering the screen when not needed.
GIVEN MORE TIME
* Display summary of individual when hovering over lifespan.

CODE LOCATIONS
heroku app can be found at: https://mannahs-alt-school-demo.herokuapp.com/
Data is seeded in: AltSchoolDemo/db/seeds.rb
time line controller is: AltSchoolDemo/app/controllers/timeline_controller.rb
time line view is: AltSchoolDemo/app/views/timeline/index.html.erb
life spans are generated: AltSchoolDemo/app/assets/javascripts/makeTimeline.js
style sheet is: AltSchoolDemo/app/assets/stylesheets/timeline.scss

