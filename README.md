# Notes

Download Notes with the following command:
```
npm install -g @joshuawilliams/notes

```
Run Notes:
```
notes --add "My first note"
```
The response should be:
```
note saved My first note
```
Add a note with `-a` or `--add`  
Give the note a category by adding `-c` or `--category` after the note:
```
notes -a "My second note" --category "fun"

```
If no category is listed, it will default to general.

See all of your notes with `-l` or `--list`
```
notes --list
```
This will show all of your notes in this format: 
```
My first note
Category: general   ID: 5f38c52dbc1076b8442c8731
-------------------------------------------------------
```

See all of your notes of a certain category:
```
notes -l category-name
```
Delete a note with `-d` or `--delete` followed by the id of the note you want to delete
```
notes -d 5f38c52dbc1076b8442c8731
```
The response will be: 
```
Deleted Note 5f38c52dbc1076b8442c8731
```
## License:
MIT License