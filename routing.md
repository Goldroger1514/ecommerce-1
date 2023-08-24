# Typically with react , we will be using one of two main libraries
# 1- react router
# 2- rich router
# They are both different libraries that essentially tackle the same topic, which is how you determine based off the URL i.e. the navigation on a website what pages to render
# Remember, in react everything is a component, so you want to think about pages the same way 
# Navigation is pretty much the standard way that we navigate througout a website
# Let's say on a website , when you land on your homepage, you have some component like a navigation bar
# That navigation bar contain some links , each one of them takes you to different routes on this website
# Let's say that we selected the first link , takes you to https://www.crwn-clothing.com/route-1
# When you navigate here ,we might expect a specific page to render 
# What we'll notice though, is that page is an entire component that we mount onto the page in response to navigationg to route-1
# Now what we notice also is that the navigation bar component is still there
# In alot of our applications , regardless of where you navigate onto the page , there are certain components that are always there , particularly navigation bars, side panels , all of those are always present
# And the libraries what we use , whether it be react router or rich router , should allow us that functionality
# We should be able to modify and change what lives on the page based on the route and what's changing is going to be what components render and don't render
# So in our particular case with the navigation bar , most of the time we probably always want it there