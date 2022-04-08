
Steps to run it:
npm install, npm run dev in a terminal and npm run watch in another.

This application is a gym member regiteration application where the required data is name, email, weight(in kgs), height(in cms) and the plan for signing up. Additional data is gender and age. The data is stored in input variable. OnSubmit button is handling the validation of the data using schema and then stored in the data, if validated, otherwise, an error message is supposed to be sent.

I tried to make a BMI calculated that I would have been proud of, if it worked, it takes the parameters from the weight and height input feilds and the displays the BMI rating in the console.

This app is incomplete because I wasn't able to handle the onSubmit handler. If you uncomment the lines on SignUp component (in src folder), my idea was to show a success message after it has been validated by CustomerSchema. However, it is not working. I tried the AJV validation(not included), but was giving me errors.

API documentation:

API endpoint:
router.get('/:id', getCustomer) -> gets the information of a customer using id

router.get('/', getCustomers); -> gets the list of all customer

router.post('/', postCustomer); -> creates a new customer after validation and addes it the database in json format.

router.get('/', getPackages);-> gets the packages available

router.post('/', postPackage); -> makes a new package that the customer chose.

Most of my response format is JSON object.

Each endpoint can be accessed using localhost:8080/{params}, where params are the above defined endpoints.