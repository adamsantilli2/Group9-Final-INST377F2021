## Description
Learning about the history of Black artists throughout the last few decades is difficult since there aren't many collective resources on the subject. This database and subsequent website look to fix that by providing an interactive and communal database about Black artists. It includes the name, album title, song titles, and much more and will have a section for others to upload data as well.

## Link To Website
https://agile-bastion-77876.herokuapp.com/

## Target Browsers
* All monitor sizes (Windows, Mac, etc)
* iPhone (multiple sizes)

# Developer Manual
## Installing the application and dependencies
1. Clone this repository to your own Github through the website.
2. Open the repository through GitHub Desktop.
3. Open in VScode
4. Type ```npm install``` in a terminal.
5. That installs all necessary dependencies.

## Running the application on a local browser
1. In a VScode terminal run ```npm start```
2. Go to a web browser and type the url: ```http://localhost:3000/```
3. The application will be up and running locally and will respond to changes made in VScode.

## We haven't written any tests for our software

## Server application APIs

```/api``` - API route that just responds with 'Welcome to the Black Musicians API!'

```/album``` - API route for items in the album table
* GET - Logs to console response query from URL. returns response 'Touched /album with GET'.
* POST - Creates a new album entry in the database and returns a JSON response
* PUT - Updates a currently existing entry in the album table and responds with 'Successful Update'
* Delete - Deletes entry in album table based on specific album ID


## Future Plans
* Finish the section of the website that allows users to update the database
* Clean incoming entries to handle NULL values or SQL injections
* Create more finished look on certain pages on the website
