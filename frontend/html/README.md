# fed-html-css-javascript
Basics of web development HTML5

- **HTML5, CSS3, JavaScript**
- Bootstrap, JQuery
- NodeJS, ExpressJS
- MongoDB
- Authentication and Authorization

## FrontEnd

### Set Up Envirnment
- Set up a development envirnment (**web browser** and a **text editor**)
- Is asking and receiveing data all the time (**making http/https requests**)
- DNS: Domain Name System => internet service that **translates** domain **names** into **IP** addresses

### FrontEnd Basics
- HTML, CSS and JavaScript are the core languages of FrontEnd
- It is also know as the client side
- It is constructed by the backend

- HTML: HyperText Markup Language
- The 'nouns' of the webpage. The structure of the web page. The skeleton.
- Describe the structure of the pages

- CSS: Cascate Style Sheets
- Style of the page. Is not mandatory
- Considered the skin of the page. The 'adjectives' of a page

- JavaScript: the actions of a page-
- The 'verbs' of a page

## HTML Bascis
- It started with extanges of papers in the early 1990
- Allows hyperlinks between papers
- Encode struture into it with html tags

- HTML is just text that is interpreted by the web browser (view source code and inspect in it)
- Search in 'MDN html element' for example
- <html> represents the root of an HTML document
- It may have one <head> and one <body>
- <head>: provides metadata (information about the data) including title, links and style Sheets
- <body>: put all our content
- Coments on HTML are written with <!--comment-->
- <title>: is important because it determines the name of the tag and also comes in the search engines
- In modern text editors, just type 'html' and click enter (get the boilerplate for html)

- 'MDN element reference': get all the elements in html (+100 og them). 10 or 15 are used all the time
- <h1-h6>: heading where each one has his own line
- <p>: paragraph is a block-level element, meanig that they go on their own line too

- Block-level element: they take their own block (example <h1-h6> or <p>)
- Inline elements: will not force a new line <strong> or <em>

- <strong>: make a more meaningful statement
- <em>: enphasis meaning something more. Seprate our style(how it looks) from our structure(what it mmeans)

- Lists are very used in web sites (originally very popular in papers in acadamics studyes)
- Two types: ordered list <ol> and unordered list <ul>
- List by its own don do anything. The need a list of idtems <li>

- Div and Spans allow you to froup content together
- <div>: is a block level generic container  
- <span>: also a generic but an inline container (does not break into a new paragraph)

- Attributes: area a way we add additional information to the html elements
- In the forma or key-value par (propertie and it correspondent value)
- Search: 'MDN attributes reference'
- Not every attributes works for every elements

- Images: important and fun part of a web sites
- <img>: its a self closing tag and it has an src attribute

- Links: anchor tag to create links to other pages
- <a>: anchor has an href attribute
- its an inline block
- Need to specify the protocole (file or htpps).
- Can place a file in the href
- Two types: relative (aiming to a file) or absolute path

- Table: display information, create charts
- Search: MDN elemet table
- <table>: needs table row <tr> and table <td>
- <th>: table header

- Table: may be design in a different aquitecture
- <thead>: the header will be placed here
- <tbody>: the content of the table in here

- shortcuts: **alt+<select-a-position-multiple-times>**: write code once and add it in multiple places at once

- Form: get input from a user
- Sign up a page, comment a photo and much more
- Grupos the hole information and all goes at once in a requests
- Forms require a backend with database to work properly
- <form>: is a container with two important attributes
- Attr action: where the form sends data to
- Attr method: what http method (get, post)
- Attr name: will send with the request in the form of query the data retrieved from the input elements
- Get: no changes are being made in the database

- <input>: go inside the Form
- Attr type: of type, text, color,
- Search: 'mdn attribute'

- Form defaults for action is to the exact same place (refresh the page) and the method is a get

- Labels: its important to make the form more accessible and readable
- Implementation can be by placing the input inside the label tag
- Or separate <label> from <input> but connect them by the attr 'for' and 'id' respectivaly

- Simple validation: can be done in plain html
- Check if it is not empty (attr required). Presence validation
- Check data type (example the input email)

- When a button is added at the end of a form it is used as a submit button by default
- Attr name in the input of type radio connect them to be able to choose only one
- Attr value specifies what is hte value chosen when the radio input is clicked

- Select tag allows to get dropdown menus
- <select>: is used with the <option> tag for the choises
- Attr name is also used in the select and Attr value in the option

- TextArea is useful to allow the user to write longer texts
- Attr rows and cols are used to change the size of the <textarea>


## BackEnd Basics
- Multiple programming languages
- Data bases, Services, Configurations files.
- Static or Dynamic pages (static means it is always the same; dynamic implies same update in contents)
- Templating toolkit is useful for static pages
- Modern JS frameworks are more usefulfor dynamic contents
