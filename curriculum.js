const curriculum = {
    "Phase 1: Fundamentals": [
        {
            title: "1. Variables & Data Types",
            theory: "Variables are containers for storing data values. Python has no command for declaring a variable; it is created the moment you first assign a value to it. Important types include int, float, str, and bool.",
            theory_tamil: "Variables என்பவை data values-ஐ store செய்ய பயன்படும் containers ஆகும். Python-ல் variables-ஐ declare செய்ய தனியாக command தேவையில்லை; value assign செய்யும் போதே அது create ஆகிவிடும். முக்கிய Data Types: int, float, str, bool.",
            code: 'age = 21\nname = "Karthik"\nprice = 99.99\nis_student = True\n\nprint(f"{name} is {age} years old.")',
            code_breakdown: [
                "<code>age = 21</code> creates an integer.",
                "<code>print(f'...')</code> is an f-string, letting you inject variables directly into text."
            ],
            interviews: [
                {q: "What is dynamic typing in Python?", a: "You don't have to specify the type of a variable (like int or string) when creating it. Python figures it out at runtime."}
            ],
            quizzes: [
                {q: "Which data type is '3.14'?", options: ["Integer", "Float", "String"], ans: 1}
            ],
            exercise: "Create a variable named 'score' and set it to 100. Print it.",
            starter_code: "score = \nprint( )",
            expected_output: "100"
        },
        {
            title: "2. If/Else Conditions",
            theory: "Conditional statements allow your code to make decisions. The `if` keyword evaluates a condition, and if True, runs the block of code beneath it. Use `elif` for multiple conditions.",
            theory_tamil: "Conditional statements உங்கள் code-ஐ முடிவுகளை (decisions) எடுக்க அனுமதிக்கின்றன. `if` keyword ஒரு condition-ஐ செக் செய்யும், அது True ஆக இருந்தால் அந்த block-ஐ execute செய்யும். பல conditions இருந்தால் `elif` பயன்படுத்தவும்.",
            code: 'score = 85\nif score >= 90:\n    print("A")\nelif score >= 80:\n    print("B")\nelse:\n    print("Fail")',
            code_breakdown: [
                "<code>if score >= 90:</code> checks the first condition.",
                "<code>elif</code> stands for 'else if' and is checked only if the first is False."
            ],
            interviews: [
                {q: "Does Python use braces {} for if statements?", a: "No, Python uses indentation (spaces/tabs) to define code blocks."}
            ],
            quizzes: [
                {q: "What happens if an 'if' condition is False?", options: ["Code crashes", "It jumps to the else/elif block", "It loops forever"], ans: 1}
            ],
            exercise: "Write an if/else block that prints 'Pass' if 'marks' is greater than 50. Assume marks = 60.",
            starter_code: "marks = 60\nif \n    print('Pass')\n",
            expected_output: "Pass"
        },
        {
            title: "3. While & For Loops",
            theory: "Loops are used for iterating over a sequence. A `for` loop executes a set of statements for each item in a list or range. A `while` loop executes as long as a condition is true.",
            theory_tamil: "Loops ஒரு sequence-ஐ iterate செய்ய பயன்படும். ஒரு list அல்லது range-ல் உள்ள ஒவ்வொரு item-க்கும் `for` loop ஒரு block-ஐ execute செய்யும். ஒரு condition True ஆக இருக்கும் வரை `while` loop ஓடிக்கொண்டே இருக்கும்.",
            code: 'for i in range(3):\n    print(i)\n\nx = 3\nwhile x > 0:\n    print(x)\n    x -= 1',
            code_breakdown: [
                "<code>range(3)</code> generates numbers 0, 1, and 2.",
                "<code>x -= 1</code> is crucial to prevent an infinite while loop."
            ],
            interviews: [
                {q: "What is the difference between break and continue?", a: "Break completely exits the loop. Continue skips the rest of the current iteration and moves to the next one."}
            ],
            quizzes: [
                {q: "How many times does range(5) loop?", options: ["4", "5", "6"], ans: 1}
            ],
            exercise: "Write a for loop using range(2) that prints 'Hello'.",
            starter_code: "for i in range(2):\n    print('Hello')",
            expected_output: "Hello\nHello"
        },
        {
            title: "4. Functions (def)",
            theory: "A function is a block of code which only runs when it is called. You can pass data, known as parameters, into a function. Use the `def` keyword to create them.",
            theory_tamil: "Function என்பது அழைக்கும்போது (called) மட்டுமே இயங்கும் ஒரு code block ஆகும். Function-க்குள் parameters மூலம் data-வை அனுப்பலாம். இவற்றை உருவாக்க `def` keyword பயன்படுத்தப்படுகிறது.",
            code: 'def add_numbers(a, b):\n    return a + b\n\nresult = add_numbers(5, 10)\nprint(result)',
            code_breakdown: [
                "<code>def add_numbers</code> defines the function signature.",
                "<code>return</code> sends the computed value back to where the function was called."
            ],
            interviews: [
                {q: "What is a parameter vs an argument?", a: "Parameter is the variable in the declaration. Argument is the actual value passed in when calling."}
            ],
            quizzes: [
                {q: "Which keyword is used to return a value?", options: ["get", "yield", "return"], ans: 2}
            ],
            exercise: "Create a function called 'greet' that prints 'Hi'. Call it.",
            starter_code: "def greet():\n    print('Hi')\ngreet()",
            expected_output: "Hi"
        }
    ],
    "Phase 1.5: Intermediate Masterclass": [
        {
            title: "5. List Comprehensions",
            theory: "List comprehensions offer a shorter syntax when you want to create a new list based on the values of an existing list. It operates at C-level speeds, making it much faster than a standard for-loop.",
            theory_tamil: "List comprehensions என்பது ஒரு existing list-ல் இருந்து புது list-ஐ create செய்வதற்கான ஒரு short syntax ஆகும். இது சாதாரண for-loop-ஐ விட மிகவும் வேகமாக (C-level speeds) வேலை செய்யும்.",
            code: 'nums = [1, 2, 3, 4, 5]\nsquares = [x * x for x in nums if x % 2 != 0]\nprint(squares)',
            code_breakdown: [
                "<code>for x in nums</code> iterates through the original list.",
                "<code>if x % 2 != 0</code> filters to only keep odd numbers.",
                "<code>x * x</code> is the operation applied to the kept numbers."
            ],
            interviews: [
                {q: "Are list comprehensions always better?", a: "They are faster and cleaner for simple operations, but can become unreadable if the logic gets too complex."}
            ],
            quizzes: [
                {q: "What does [x for x in l if x > 0] do?", options: ["Filters positive numbers", "Squares numbers", "Syntax Error"], ans: 0}
            ],
            exercise: "Use list comprehension to create a list of doubles for [1, 2, 3]. Print the new list.",
            starter_code: "nums = [1, 2, 3]\ndoubles = [x*2 for x in nums]\nprint(doubles)",
            expected_output: "[2, 4, 6]"
        },
        {
            title: "6. Dictionary Mastery",
            theory: "Dictionaries are used to store data values in key:value pairs. They are highly optimized Hash Maps, meaning looking up a value by its key takes O(1) time.",
            theory_tamil: "Dictionaries என்பது தரவுகளை key:value pairs-ஆக store செய்ய பயன்படும். இவை Hash Maps ஆக செயல்படுவதால், ஒரு value-ஐ அதனுடைய key மூலமாக தேடி எடுப்பது மிக வேகமாக (O(1) time) நடக்கும்.",
            code: 'user = {"name": "John", "role": "Admin"}\nprint(user.get("age", "Not Found"))\nuser["age"] = 30',
            code_breakdown: [
                "<code>.get()</code> safely looks up a key without throwing a KeyError if it's missing.",
                "<code>user['age'] = 30</code> adds a new key-value pair."
            ],
            interviews: [
                {q: "What's the time complexity of looking up a key in a dict?", a: "O(1) average case, because it uses a hash table internally."}
            ],
            quizzes: [
                {q: "How do you safely avoid a KeyError?", options: ["Try/catch only", "Use .get()", "You can't"], ans: 1}
            ],
            exercise: "Create a dictionary with 'color' = 'blue'. Print the value of 'color'.",
            starter_code: "d = {'color': 'blue'}\nprint(d['color'])",
            expected_output: "blue"
        },
        {
            title: "7. Lambda Functions",
            theory: "A lambda function is a small anonymous function. It can take any number of arguments, but can only have one expression.",
            theory_tamil: "Lambda function என்பது ஒரு சிறிய anonymous function (பெயரற்ற function). இது எத்தனை arguments வேண்டுமானாலும் எடுத்துக்கொள்ளும், ஆனால் ஒரே ஒரு expression மட்டுமே கொண்டிருக்கும்.",
            code: 'add = lambda a, b: a + b\nprint(add(5, 5))',
            code_breakdown: [
                "<code>lambda a, b:</code> defines the arguments.",
                "<code>a + b</code> is the single expression that gets returned implicitly."
            ],
            interviews: [
                {q: "When should you use lambdas?", a: "For short, throwaway functions (like passing a sorting key) where a full 'def' block is overkill."}
            ],
            quizzes: [
                {q: "Can a lambda have multiple lines?", options: ["Yes", "No", "Only if indented"], ans: 1}
            ],
            exercise: "Create a lambda that multiplies a number by 10. Call it with 2 and print the result.",
            starter_code: "mult = lambda x: x * 10\nprint(mult(2))",
            expected_output: "20"
        },
        {
            title: "8. Map & Filter",
            theory: "Map and Filter are powerful built-in functions used to apply operations to entire lists without writing standard for-loops.",
            theory_tamil: "Map மற்றும் Filter என்பவை சாதாரண for-loops எழுதாமல், முழு lists மீதும் operations செய்ய உதவும் சக்திவாய்ந்த built-in functions ஆகும்.",
            code: 'nums = [1, 2, 3]\ndoubled = list(map(lambda x: x*2, nums))\nprint(doubled)',
            code_breakdown: [
                "<code>map()</code> applies the lambda to every item in the list.",
                "<code>list()</code> converts the map object back into a readable list."
            ],
            interviews: [
                {q: "What is the alternative to Map/Filter?", a: "List Comprehensions! They are usually preferred in Python because they are more readable."}
            ],
            quizzes: [
                {q: "What does filter() do?", options: ["Changes values", "Removes items that evaluate to False", "Sorts the list"], ans: 1}
            ],
            exercise: "Print 'Map Ready'.",
            starter_code: "print('Map Ready')",
            expected_output: "Map Ready"
        },
        {
            title: "9. Error Handling (Try/Except)",
            theory: "When an error occurs, Python will normally stop and generate an error message. Exceptions can be handled using the try statement.",
            theory_tamil: "Error வரும்போது, Python சாதாரணமாக நின்று error message-ஐ காட்டும். இதைத் தடுக்க try statement-ஐ பயன்படுத்தி exceptions-ஐ handle செய்யலாம்.",
            code: 'try:\n    print(10 / 0)\nexcept ZeroDivisionError:\n    print("Cannot divide by zero!")\nfinally:\n    print("Done")',
            code_breakdown: [
                "<code>try:</code> wraps the risky code.",
                "<code>except:</code> catches the specific error so the program doesn't crash.",
                "<code>finally:</code> executes regardless of whether an error occurred (good for closing files)."
            ],
            interviews: [
                {q: "Is it bad to use a bare 'except:'?", a: "Yes, catching all exceptions (including KeyboardInterrupts) can mask bugs and make stopping the program difficult."}
            ],
            quizzes: [
                {q: "Which block always runs?", options: ["try", "except", "finally"], ans: 2}
            ],
            exercise: "Print 'Safe'.",
            starter_code: "print('Safe')",
            expected_output: "Safe"
        }
    ],
    "Phase 2: Object Oriented Python": [
        {
            title: "10. Classes & Objects",
            theory: "Python is an object oriented language. Almost everything in Python is an object, with its properties and methods. A Class is like an object constructor.",
            theory_tamil: "Python ஒரு object oriented language. இதில் உள்ள எல்லாமே objects தான், அவற்றுக்கு properties மற்றும் methods இருக்கும். Class என்பது ஒரு object-ஐ உருவாக்கும் blueprint (constructor).",
            code: 'class Dog:\n    def __init__(self, name):\n        self.name = name\n\n    def bark(self):\n        return f"{self.name} says woof!"\n\nmy_dog = Dog("Rex")\nprint(my_dog.bark())',
            code_breakdown: [
                "<code>__init__</code> is the constructor method, called when the object is created.",
                "<code>self</code> refers to the instance of the object itself."
            ],
            interviews: [
                {q: "What is 'self'?", a: "It binds the attributes with the given arguments. It's how methods know which instance of the object they belong to."}
            ],
            quizzes: [
                {q: "What is a Class?", options: ["A function", "An object blueprint", "A variable"], ans: 1}
            ],
            exercise: "Print 'Class Built'.",
            starter_code: "print('Class Built')",
            expected_output: "Class Built"
        },
        {
            title: "11. Inheritance & Super()",
            theory: "Inheritance allows us to define a class that inherits all the methods and properties from another class.",
            theory_tamil: "ஒரு class-ன் முறைகள் மற்றும் பண்புகளை மற்றொரு class-க்கு மரபுரிமையாக (inherit) கொடுக்க Inheritance பயன்படுகிறது.",
            code: 'class Animal:\n    def eat(self):\n        print("Eating")\n\nclass Cat(Animal):\n    def meow(self):\n        print("Meow")\n\nc = Cat()\nc.eat()',
            code_breakdown: [
                "<code>class Cat(Animal)</code> makes Cat the child class of Animal.",
                "The Cat inherits the <code>eat()</code> method automatically."
            ],
            interviews: [
                {q: "What does super() do?", a: "It returns a temporary object of the superclass, allowing you to call its methods (like its __init__ constructor)."}
            ],
            quizzes: [
                {q: "Why use inheritance?", options: ["To run code faster", "To reuse code", "To secure code"], ans: 1}
            ],
            exercise: "Print 'Inheritance Works'.",
            starter_code: "print('Inheritance Works')",
            expected_output: "Inheritance Works"
        },
        {
            title: "12. Encapsulation",
            theory: "Encapsulation prevents data from direct modification. In Python, we use underscores to indicate private variables.",
            theory_tamil: "Encapsulation என்பது data-வை நேரடியாக மாற்றுவதை தடுக்கிறது. Python-ல் private variables-ஐ குறிக்க underscores (_) பயன்படுத்துகிறோம்.",
            code: 'class Bank:\n    def __init__(self):\n        self.__balance = 100\n\n    def get_balance(self):\n        return self.__balance',
            code_breakdown: [
                "<code>__balance</code> with double underscores triggers name mangling, making it harder to access from outside."
            ],
            interviews: [
                {q: "Are private variables truly private in Python?", a: "No, nothing is strictly private. The __ double underscore just 'mangles' the name to prevent accidental access."}
            ],
            quizzes: [
                {q: "How do you indicate a private variable?", options: ["private x", "__x", "x.private"], ans: 1}
            ],
            exercise: "Print 'Secured'.",
            starter_code: "print('Secured')",
            expected_output: "Secured"
        }
    ],
    "Phase 3: Advanced Concepts": [
        {
            title: "13. Decorators",
            theory: "Decorators are a very powerful and useful tool in Python since it allows programmers to modify the behaviour of a function or class without permanently modifying it.",
            theory_tamil: "Decorators என்பது ஒரு function அல்லது class-ன் source code-ஐ மாற்றாமலேயே அதன் நடத்தையை (behaviour) மாற்ற உதவும் மிகவும் சக்திவாய்ந்த tool ஆகும்.",
            code: 'def logger(func):\n    def wrapper():\n        print("Executing...")\n        func()\n        print("Done.")\n    return wrapper\n\n@logger\ndef hello():\n    print("Hello")\n\nhello()',
            code_breakdown: [
                "<code>@logger</code> wraps the hello function inside the wrapper function."
            ],
            interviews: [
                {q: "What is a decorator fundamentally?", a: "A higher-order function that takes a function as an argument and returns a modified function."}
            ],
            quizzes: [
                {q: "Which symbol denotes a decorator?", options: ["#", "$", "@"], ans: 2}
            ],
            exercise: "Print 'Decorated'.",
            starter_code: "print('Decorated')",
            expected_output: "Decorated"
        },
        {
            title: "14. Generators & Yield",
            theory: "Generators are functions that return an iterable set of items, one at a time, in a special way using the `yield` keyword. They are highly memory efficient.",
            theory_tamil: "Generators என்பவை `yield` keyword-ஐப் பயன்படுத்தி items-ஐ ஒவ்வொன்றாக return செய்யும் functions ஆகும். இவை massive data-ஐ handle செய்யும்போது memory-ஐ மிகக் குறைவாகவே பயன்படுத்தும்.",
            code: 'def countdown(n):\n    while n > 0:\n        yield n\n        n -= 1\n\nfor val in countdown(3):\n    print(val)',
            code_breakdown: [
                "<code>yield n</code> pauses the function, returning n, and saves the state.",
                "The next time it is called, it resumes right where it left off."
            ],
            interviews: [
                {q: "Why use yield instead of return?", a: "Return sends everything at once, consuming memory. Yield streams it one item at a time, perfect for large datasets."}
            ],
            quizzes: [
                {q: "Generators are highly efficient in terms of:", options: ["CPU Speed", "Memory / RAM", "Disk Storage"], ans: 1}
            ],
            exercise: "Print 'Yielded'.",
            starter_code: "print('Yielded')",
            expected_output: "Yielded"
        },
        {
            title: "15. Magic Methods (Dunder)",
            theory: "Dunder or magic methods in Python are the methods having two prefix and suffix underscores in the method name. Example: __init__, __str__.",
            theory_tamil: "Python-ல் Magic methods (அல்லது Dunder) என்பவை பெயருக்கு முன்னும் பின்னும் இரண்டு underscores கொண்டிருக்கும். (உதாரணம்: __init__, __str__).",
            code: 'class Book:\n    def __init__(self, title):\n        self.title = title\n    def __str__(self):\n        return f"Book: {self.title}"\n\nb = Book("1984")\nprint(b)',
            code_breakdown: [
                "<code>__str__</code> intercepts the print() function, allowing you to return a custom readable string instead of the memory object."
            ],
            interviews: [
                {q: "What is the difference between __str__ and __repr__?", a: "__str__ is for readable output for end users. __repr__ is for developers to recreate the object."}
            ],
            quizzes: [
                {q: "What does __str__ do?", options: ["Deletes object", "Makes object string-readable", "Initializes object"], ans: 1}
            ],
            exercise: "Print 'Magic'.",
            starter_code: "print('Magic')",
            expected_output: "Magic"
        },
        {
            title: "16. *args & **kwargs",
            theory: "*args and **kwargs allow you to pass multiple arguments or keyword arguments to a function without explicitly defining them all.",
            theory_tamil: "*args மற்றும் **kwargs மூலம் ஒரு function-க்கு எத்தனை arguments மற்றும் keyword arguments வேண்டுமானாலும் முன்கூட்டியே define செய்யாமல் அனுப்பலாம்.",
            code: 'def magic(*args, **kwargs):\n    print(args)    # Tuple of positional args\n    print(kwargs)  # Dict of keyword args\n\nmagic(1, 2, name="John")',
            code_breakdown: [
                "<code>*args</code> packages extra positional variables into a Tuple.",
                "<code>**kwargs</code> packages extra named variables into a Dictionary."
            ],
            interviews: [
                {q: "Do you have to use the words 'args' and 'kwargs'?", a: "No, the asterisks (*) are what matter. You could use *numbers and **details."}
            ],
            quizzes: [
                {q: "What data type is *args packed into?", options: ["List", "Tuple", "Dict"], ans: 1}
            ],
            exercise: "Print 'Args passed'.",
            starter_code: "print('Args passed')",
            expected_output: "Args passed"
        }
    ],
    "Phase 4: Machine Learning 🤖": [
        {
            title: "17. Data Analysis with Pandas",
            theory: "Pandas is the industry standard library for data manipulation. It introduces the DataFrame, which is essentially a powerful programmatic Excel spreadsheet.",
            theory_tamil: "Pandas என்பது Data Analysis-க்கான industry standard library ஆகும். இது DataFrame எனப்படும் கட்டமைப்பை அறிமுகப்படுத்துகிறது, இது சுருக்கமாக ஒரு சக்திவாய்ந்த programmatic Excel spreadsheet போல செயல்படும்.",
            code: 'import pandas as pd\n\ndata = {"Name": ["Ajith", "Vijay"], "Age": [45, 43]}\ndf = pd.DataFrame(data)\n\nprint(df.head())',
            code_breakdown: [
                "<code>import pandas as pd</code> is the standard alias convention.",
                "<code>pd.DataFrame(data)</code> converts a dictionary into a 2D table."
            ],
            interviews: [
                {q: "What is the difference between a Series and a DataFrame?", a: "A Series is a 1D column. A DataFrame is a 2D table made up of multiple Series."}
            ],
            quizzes: [
                {q: "What is Pandas primarily used for?", options: ["Web Dev", "Data Manipulation", "Game Dev"], ans: 1}
            ],
            exercise: "Import pandas as pd. Print the text 'Pandas Ready'. (We can't render dataframes in this terminal, so just verify the import works!)",
            starter_code: "import pandas as pd\nprint('Pandas Ready')",
            expected_output: "Pandas Ready"
        },
        {
            title: "18. NumPy Numerical Computing",
            theory: "NumPy is the core library for scientific computing in Python. It provides a high-performance multidimensional array object, which is much faster than standard Python lists.",
            theory_tamil: "NumPy என்பது Python-ல் scientific computing-க்கான முக்கிய library. இது standard Python lists-ஐ விட மிக வேகமான multidimensional array-ஐ வழங்குகிறது.",
            code: 'import numpy as np\n\narr = np.array([1, 2, 3, 4, 5])\nprint(arr * 2) # Broadcasts the multiplication',
            code_breakdown: [
                "<code>np.array()</code> creates a highly optimized C-backed array.",
                "<code>arr * 2</code> multiplies every element instantly without a for-loop (vectorization)."
            ],
            interviews: [
                {q: "Why is NumPy faster than Python lists?", a: "NumPy arrays are stored at one continuous place in memory unlike lists, so processes can access and manipulate them very efficiently (Locality of reference)."}
            ],
            quizzes: [
                {q: "What does vectorization mean in NumPy?", options: ["Drawing lines", "Applying operations to entire arrays at once", "Sorting elements"], ans: 1}
            ],
            exercise: "Print 'NumPy Ready'.",
            starter_code: "print('NumPy Ready')",
            expected_output: "NumPy Ready"
        },
        {
            title: "19. Linear Regression (Scikit-Learn)",
            theory: "Scikit-Learn (sklearn) is the premier machine learning library. Linear Regression is a supervised learning algorithm used for predicting continuous values by finding the best-fit line through data points.",
            theory_tamil: "Scikit-Learn என்பது Machine Learning-க்கான முதன்மை library ஆகும். Linear Regression என்பது supervised learning algorithm ஆகும், இது data points வழியே ஒரு சிறந்த fit கோட்டை வரைந்து தொடர்ச்சியான மதிப்புகளைக் கணிக்கப் பயன்படுகிறது.",
            code: 'from sklearn.linear_model import LinearRegression\n\n# X = Features, y = Target\nX = [[1], [2], [3]]\ny = [10, 20, 30]\n\nmodel = LinearRegression()\nmodel.fit(X, y)\n\nprediction = model.predict([[4]])\nprint(prediction) # 40',
            code_breakdown: [
                "<code>model = LinearRegression()</code> initializes the ML algorithm.",
                "<code>model.fit(X, y)</code> trains the model on the data.",
                "<code>model.predict([[4]])</code> asks the trained model to predict the outcome for 4."
            ],
            interviews: [
                {q: "What does the fit() function do in Scikit-Learn?", a: "It trains the algorithm on the provided dataset."}
            ],
            quizzes: [
                {q: "Linear Regression is used for what kind of tasks?", options: ["Predicting continuous numbers", "Classifying images", "Clustering data"], ans: 0}
            ],
            exercise: "Print 'Model Trained' to simulate successful completion.",
            starter_code: "print('Model Trained')",
            expected_output: "Model Trained"
        },
        {
            title: "20. Model Evaluation",
            theory: "After training a model, you must evaluate its performance on unseen data to ensure it hasn't just memorized the training set (Overfitting).",
            theory_tamil: "ஒரு மாடலை train செய்த பிறகு, அது training set-ஐ அப்படியே மனப்பாடம் (Overfitting) செய்துவிடவில்லை என்பதை உறுதிப்படுத்த, பார்க்காத data-ல் (unseen data) அதன் performance-ஐ evaluate செய்ய வேண்டும்.",
            code: 'from sklearn.metrics import mean_squared_error\n\ntrue_values = [3, -0.5, 2, 7]\npredictions = [2.5, 0.0, 2, 8]\n\nmse = mean_squared_error(true_values, predictions)\nprint("MSE:", mse)',
            code_breakdown: [
                "<code>mean_squared_error</code> calculates the average squared difference between the estimated values and the actual value."
            ],
            interviews: [
                {q: "What is overfitting?", a: "When a model learns the detail and noise in the training data to the extent that it negatively impacts the performance of the model on new data."}
            ],
            quizzes: [
                {q: "What does a lower Mean Squared Error (MSE) mean?", options: ["Worse model", "Better model", "Slower model"], ans: 1}
            ],
            exercise: "Print 'Course Complete!'.",
            starter_code: "print('Course Complete!')",
            expected_output: "Course Complete!"
        }
    ]
};
