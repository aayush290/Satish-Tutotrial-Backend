# Satish-Tutotrial-Backend

Changes to be made:

1.Make sure that all the pages get navigated through the buttons i.e add 
  href of every button. (Note: don't use .html in href eg: href="coures" 
  is correct, not href="courses.html" because we have already created routes
  and are using ejs not html)

2. While changing the front-end as per front-end of your pc make sure the 
   you don't change things that may cause issue to the back end.

3. Change the login button in every ejs file if not changed and keep it as 
   same as present in admission.ejs .

4. Don't try to change the file strucure, keep it as it is.

5. If there is issue in running the code then create a new empty folder and
   install 
	MOST IMP THING: firstly add package.json (npm init -y), then install-
	a) body-parser : npm i body-parser
	b) ejs: npm i ejs
	c) express: npm i express
	d) mongoose: npm i mongoose
	e) nodemon: npm i nodemon

6. If you are using nodemon(preffered to use) then after installation, do 
   a change in package.json file which is, in "scripts" below 
   "test": "echo \"Error: no test specified\" && exit 1" add another script
   i.e "dev": "nodemon src/app.js".

7. To run the code using nodemon type below code in terminal:
			npm run dev
