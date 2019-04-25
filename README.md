README

www.cuturl.work ReactJS app./


This is the react app used for Rails url-shortener repo.

The application consists of a single landign screen that shows an input box where the end user will be able to transform his/her long url into a short one by sending a post to the rails' app: /url.json.

Depending on the response, the app will render a bootstrap alert the shows the new short url with a button to copy the url to the clipboard.


At the lower part of the screen, a table showing the top 100 urls is seen.
This is basically a table the iterates through the this.state.urls array that what populated asynchronously by the /top.json endpoint that was fetched with axios.

Finally, when a url is generated and used, React handles the request with a router switch so it will first look for the available routes and if none exists, it will hit the /:short_url endpoint in the rails app to get the long_url and redirect the user.


NPM packages used for the dev of this app:

create-react-component
axios
react-router-dom


After builgin the app, the static files were deployed to an AWS s3 bucket which has the web hosting property enabled. 
The domain used for cuturl.workl was bought in GoDaddy.
