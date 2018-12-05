# AA
** What will the visualization look like? Will it be interactive? If so, how? **
Yes, the concept is that there are selections along the sidebar which allow the user to filter the pinned contents based on location, time, and other details. The categories in the sidebar are expandable. When a pin is selected the sidebar displays details specifc to the selected location and the user can get back to the filter by clicking the close button. 

** How will the data need to be mapped to the visual elements? **
Data will appear in as text and pinned contents. Note: the sidebar sections accordian based on the content. 

** For that mapping, what needs to be done to the data? Be specific and clear. Will it require filtering, aggregation, restructuring, and/or something else? How will this be done? **
I think the data preparation we've done will be enough but honestly I don't know enough about how we're expected to format the data we've collected. To what degree do we have control over HTML, CSS, etc. It seems late in the semester to introduce those so I'm guessing our formatting option will be very limited. 

** What is the default view (if any)? **
The default view has the sidebar for location opened but no selections have been made.

** What assumptions are you making about the user? **
There are a ton of assumptions; the user is looking for a meeting in NYC, the user has already landed on a page with AA branding and other information, the user is visiting in a desktop browser, the user knows their search is anonymous, and more. 


# Dear Diary
** What will the visualization look like? Will it be interactive? If so, how? **
Aside from the scrolling web page this isn't interactive.

** How will the data need to be mapped to the visual elements? **
The data mapping is super simple; there's an image and accomopanying text in two columns. 

** For that mapping, what needs to be done to the data? Be specific and clear. Will it require filtering, aggregation, restructuring, and/or something else? How will this be done? **
There just needs to be a relation between the image and text. I've dropped the idea of including video and audio for the sake of simplification. 

** What is the default view (if any)? **
Like a blog the most recent entry will appear at the top of the vertical stack of entries.

** What assumptions are you making about the user? **
There are behaviorial assumptions, like that they'll care about the content, but the layout is narrow, stacked and simple to work on both desktop and mobile browswers.


# Sensors
** What will the visualization look like? Will it be interactive? If so, how? **
Currently there's no plan for interaction beyond the scrolling page.

** How will the data need to be mapped to the visual elements? **
The entries are stacked vertically, most recent at the top. The bars map to percentage increments of the potentimeter which reads from 0-3000. 

** For that mapping, what needs to be done to the data? Be specific and clear. Will it require filtering, aggregation, restructuring, and/or something else? How will this be done? **
There will be 10 increments that define the meter width and these will be based on percentage. 

Values
1-300		ffffcc
301-600		ffeda0
601-900		fed976
901-1200	feb24c
1201-1500	fd8d3c
1501-1800	fc4e2a
1801-2100	e31a1c
2101-2400	bd0026
2401-2700	800026
2701-3000	5c001a

** What is the default view (if any)? **
The default view is as seen in the screenshot.

** What assumptions are you making about the user? **
That they care. They understand what the data represents. Because my use of the potentiameter isn't really clear I'm calling this mood swings and letting the user determine what that means. 