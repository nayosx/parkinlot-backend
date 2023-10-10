Create a folder on C:/storage

then generate the image, is necessary to create a folder on c:/storage and execute the next command

```
IF EXIST C:\storage ( docker run -d --name parkinglotcontainer -p 5432:5432 -e POSTGRES_DB=parkinglot -e POSTGRES_USER=rootparking -e POSTGRES_PASSWORD=rootparking -v C:/storage:/var/lib/postgresql/data parkinglotimagen:latest) ELSE (echo "The directory C:\storage does not exist. Please create it before running the container.")

```