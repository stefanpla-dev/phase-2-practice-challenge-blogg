# Practice code challenge The Blogg

## Setup the project

```
npm install
npm start
```

## Setup the server

```
npm run server
```

### Endpoints for the deliverables

GET / POST

```
http://localhost:4000/blogs
```

PATCH / DELETE

```
http://localhost:4000/blogs/:id
```


## Deliverables

- See list of blog posts on the page, using the `BlogPost` component. The
  `BlogPost` component should display the title, author, and the article.
- Click on the `Read` button and change the text of the button to `Unread` every time you click. The data does not need to persisted.
- Click on the `Show form` button and conditionally hide/unhide the form. Use the form to make a post request to the api and render the new blog post at the bottom of the page. The data needs to be persisted in the database.

### Optional deliverables

- Using the search box in the `Header` component, user should be able to search through the blog posts searching for the title `or` the author.
- When the `read` button is clicked make a `PATCH` request to the api `isRead: true` and using the return value change the text of the `Read` button to `Unread / Read`
