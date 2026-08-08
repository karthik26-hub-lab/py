const curriculum = {
    "Phase 1: Python Fundamentals": [
        {
            "title": "1. Python IDE Setup",
            "theory": "An Integrated Development Environment (IDE) consolidates basic tools required to write and test software. Without an IDE, you're coding on a campfire.",
            "theory_tamil": "Integrated Development Environment (IDE) என்பது மென்பொருளை எழுதவும் சோதிக்கவும் தேவையான அடிப்படை கருவிகளை ஒருங்கிணைக்கிறது. IDE இல்லாமல் code எழுதுவது கடினம்.",
            "code": "print('Hello World')",
            "code_breakdown": [
                "print(): Built-in function to output data.",
                "'Hello World': A string argument."
            ],
            "interviews": [
                {
                    "q": "What is an IDE?",
                    "a": "A software suite offering code editing, debugging, and execution tools.",
                    "example": "VS Code, PyCharm"
                }
            ],
            "quizzes": [
                {
                    "q": "Which is an IDE?",
                    "options": [
                        "A) Terminal",
                        "B) VS Code",
                        "C) Python"
                    ],
                    "ans": 1
                }
            ],
            "exercise": "Print 'Ready' to the terminal.",
            "starter_code": "print('Ready')",
            "expected_output": "Ready"
        },
        {
            "title": "2. Variables & Data Types",
            "theory": "A variable is a labeled container in memory. Data types tell Python how to handle that memory (Text, Numbers, Decimals).",
            "theory_tamil": "Variable என்பது memory-ல் உள்ள ஒரு container ஆகும். Data types (Text, Numbers) அந்த memory-ஐ எப்படி கையாள வேண்டும் என்பதை Python-க்கு தெரிவிக்கிறது.",
            "code": "name = 'Karthik'\nage = 19\nprice = 9.99",
            "code_breakdown": [
                "name: String variable.",
                "age: Integer variable.",
                "price: Float variable."
            ],
            "interviews": [
                {
                    "q": "Is Python statically typed?",
                    "a": "No, dynamically typed. You don't declare types upfront."
                }
            ],
            "quizzes": [
                {
                    "q": "What data type is 3.14?",
                    "options": [
                        "A) Integer",
                        "B) String",
                        "C) Float"
                    ],
                    "ans": 2
                }
            ],
            "exercise": "Create a variable `x` set to 50, and print it.",
            "starter_code": "x = 50\nprint(x)",
            "expected_output": "50"
        },
        {
            "title": "3. Input and Output",
            "theory": "Input() pauses the program to capture keystrokes from the user. It always returns a string, so math requires casting (int() or float()).",
            "theory_tamil": "Input() program-ஐ நிறுத்தி user-டமிருந்து keyboard input-ஐ பெறுகிறது. இது எப்போதுமே String-ஐ return செய்யும், எனவே math செய்ய int() அல்லது float() ஆக மாற்ற வேண்டும்.",
            "code": "age_str = input('Age? ')\nage = int(age_str)",
            "code_breakdown": [
                "input(): Halts execution to read terminal text.",
                "int(): Converts the string text into a math-ready integer."
            ],
            "interviews": [
                {
                    "q": "What does input() return?",
                    "a": "Always returns a String type."
                }
            ],
            "quizzes": [
                {
                    "q": "How do you convert string '5' to a math number?",
                    "options": [
                        "A) str('5')",
                        "B) int('5')",
                        "C) float('5')"
                    ],
                    "ans": 1
                }
            ],
            "exercise": "Print exactly: 'Input Accepted'",
            "starter_code": "# Normally we do name = input()\nprint('Input Accepted')",
            "expected_output": "Input Accepted"
        },
        {
            "title": "4. Operators",
            "theory": "Operators are verbs. Arithmetic operators do math (+, -, %, /). Comparison operators evaluate Truth (==, !=, >, <).",
            "theory_tamil": "Operators என்பவை கணித செயல்பாடுகளை (+, -, %, /) செய்யும். Comparison operators உண்மைத்தன்மையை (==, !=, >, <) சரிபார்க்கும்.",
            "code": "a = 10\nb = 3\nprint(a % b)",
            "code_breakdown": [
                "a % b: Modulo. Divides 10 by 3 and returns the remainder (1)."
            ],
            "interviews": [
                {
                    "q": "Difference between = and ==?",
                    "a": "= assigns a value. == compares two values."
                }
            ],
            "quizzes": [
                {
                    "q": "What does 10 % 3 output?",
                    "options": [
                        "A) 3.33",
                        "B) 1",
                        "C) 3"
                    ],
                    "ans": 1
                }
            ],
            "exercise": "Print the remainder of 10 divided by 3.",
            "starter_code": "print(10 % 3)",
            "expected_output": "1"
        },
        {
            "title": "5. Conditionals (If/Else)",
            "theory": "Conditionals act as decision forks. `if` a condition is True, a block runs. `elif` chains conditions. `else` is the final fallback.",
            "theory_tamil": "Conditionals முடிவுகளை எடுக்க உதவுகின்றன. `if` condition True ஆனால், அந்த block இயங்கும். `elif` பல conditions-ஐ சேர்க்கும். `else` இறுதியான fallback ஆகும்.",
            "code": "hp = 0\nif hp > 0:\n    print('Alive')\nelse:\n    print('Dead')",
            "code_breakdown": [
                "if hp > 0: Evaluates to False (0 is not > 0).",
                "else:: Catches all False conditions."
            ],
            "interviews": [
                {
                    "q": "Can you use else without if?",
                    "a": "No, else must immediately follow an if or elif block."
                }
            ],
            "quizzes": [
                {
                    "q": "When does 'else' trigger?",
                    "options": [
                        "A) Always",
                        "B) When preceding 'if' is False",
                        "C) When an error occurs"
                    ],
                    "ans": 1
                }
            ],
            "exercise": "Write an if/else block that prints 'Pass' if score is 50. I set score to 50 for you.",
            "starter_code": "score = 50\nif score >= 50:\n    print('Pass')\nelse:\n    print('Fail')",
            "expected_output": "Pass"
        },
        {
            "title": "6. Loops (For / While)",
            "theory": "Loops automate repetition. A `for` loop iterates a specific number of times. A `while` loop runs endlessly until a condition becomes False.",
            "theory_tamil": "Loops 반복-ஐ (repetition) தானியங்குபடுத்துகின்றன. ஒரு குறிப்பிட்ட முறை இயங்க `for` loop, condition False ஆகும் வரை ஓட `while` loop பயன்படும்.",
            "code": "for i in range(3):\n    print(i)",
            "code_breakdown": [
                "range(3): Generates a sequence 0, 1, 2.",
                "print(i): Executes 3 times."
            ],
            "interviews": [
                {
                    "q": "What is `break` vs `continue`?",
                    "a": "`break` exits the loop permanently. `continue` skips the current iteration and moves to the next."
                }
            ],
            "quizzes": [
                {
                    "q": "Which loop is best for running code exactly 5 times?",
                    "options": [
                        "A) While Loop",
                        "B) For Loop",
                        "C) Infinite Loop"
                    ],
                    "ans": 1
                }
            ],
            "exercise": "Write a for loop that adds 0, 1, and 2 together. Print the final sum.",
            "starter_code": "total = 0\nfor i in range(3):\n    total += i\nprint(total)",
            "expected_output": "3"
        },
        {
            "title": "7. Functions",
            "theory": "Functions are reusable machines. You pass raw materials (arguments), it executes isolated code, and spits out a product (return).",
            "theory_tamil": "Functions என்பவை மறுபயன்பாட்டுக்கு (reusable) ஏற்ற block ஆகும். Arguments-ஐ உள்ளே அனுப்பி, isolated code-ஐ இயக்கி, result-ஐ return செய்யும்.",
            "code": "def add(a, b):\n    return a + b\n\nresult = add(5, 5)",
            "code_breakdown": [
                "def: Keyword to define a function.",
                "return: Hands data back to the global scope. Ends the function instantly."
            ],
            "interviews": [
                {
                    "q": "Print vs Return?",
                    "a": "Print is just for humans to read. Return actually saves the data into memory for the computer to use."
                }
            ],
            "quizzes": [
                {
                    "q": "What keyword sends data back from a function?",
                    "options": [
                        "A) yield",
                        "B) return",
                        "C) output"
                    ],
                    "ans": 1
                }
            ],
            "exercise": "Write a function `multiply(x, y)` that returns the product. Print multiply(4, 5).",
            "starter_code": "def multiply(x, y):\n    return x * y\nprint(multiply(4, 5))",
            "expected_output": "20"
        },
        {
            "title": "8. Lists",
            "theory": "Lists are mutable, ordered arrays. They store multiple items in a single variable. Accessible via 0-based indexing.",
            "theory_tamil": "Lists என்பவை மாற்றக்கூடிய (mutable) arrays. பல items-ஐ ஒரே variable-ல் store செய்து 0-based indexing மூலம் அணுகலாம்.",
            "code": "cart = ['Apple', 'Banana']\ncart.append('Orange')\nprint(cart[0])",
            "code_breakdown": [
                ".append(): Method that adds an item to the end of the list in memory.",
                "cart[0]: Retrieves the 1st item (Apple)."
            ],
            "interviews": [
                {
                    "q": "How do you get the last item in a list?",
                    "a": "Use `my_list[-1]`."
                }
            ],
            "quizzes": [
                {
                    "q": "What index is the first item in a Python list?",
                    "options": [
                        "A) 1",
                        "B) -1",
                        "C) 0"
                    ],
                    "ans": 2
                }
            ],
            "exercise": "Print the 2nd item in this list.",
            "starter_code": "names = ['John', 'Karthik', 'Bob']\nprint(names[1])",
            "expected_output": "Karthik"
        },
        {
            "title": "9. Tuples",
            "theory": "Tuples are identical to Lists, but they are IMMUTABLE. Once created, they can never be modified. They use less memory.",
            "theory_tamil": "Tuples-ம் Lists போலவே இருக்கும், ஆனால் இவை மாற்ற முடியாதவை (IMMUTABLE). ஒருமுறை உருவாக்கினால் மாற்ற முடியாது, memory குறைவாக பயன்படுத்தும்.",
            "code": "coords = (10, 20)\n# coords[0] = 15  <-- Crashes!",
            "code_breakdown": [
                "(10, 20): Parentheses define a Tuple. Brackets define a List."
            ],
            "interviews": [
                {
                    "q": "Why use a Tuple over a List?",
                    "a": "To ensure data integrity (read-only) and for slight performance gains."
                }
            ],
            "quizzes": [
                {
                    "q": "Are Tuples mutable?",
                    "options": [
                        "A) Yes",
                        "B) No"
                    ],
                    "ans": 1
                }
            ],
            "exercise": "Create a tuple `t` with values 1 and 2. Print the first value.",
            "starter_code": "t = (1, 2)\nprint(t[0])",
            "expected_output": "1"
        },
        {
            "title": "10. Dictionaries",
            "theory": "Dictionaries store Key-Value pairs. They are optimized for instant O(1) lookups by Key.",
            "theory_tamil": "Dictionaries என்பவை Key-Value pairs ஆக தரவுகளை store செய்யும். Key மூலமாக தரவை உடனே (O(1)) தேடி எடுக்கலாம்.",
            "code": "user = {'id': 5, 'name': 'Karthik'}\nprint(user['name'])",
            "code_breakdown": [
                "{'id': 5}: Curly braces define a dictionary. 'id' is the Key, 5 is the Value."
            ],
            "interviews": [
                {
                    "q": "What happens if you access a missing key?",
                    "a": "Throws a KeyError. Use `dict.get('key')` to return None safely instead."
                }
            ],
            "quizzes": [
                {
                    "q": "What is the lookup speed of a dictionary key?",
                    "options": [
                        "A) O(1) Instant",
                        "B) O(N) Linear",
                        "C) O(N^2)"
                    ],
                    "ans": 0
                }
            ],
            "exercise": "Print the value of the 'age' key.",
            "starter_code": "data = {'name': 'Karthik', 'age': 19}\nprint(data['age'])",
            "expected_output": "19"
        },
        {
            "title": "11. Sets",
            "theory": "Sets are unordered collections of UNIQUE items. They are built on Hash Tables, making checking `if item in set` lightning fast.",
            "theory_tamil": "Sets என்பவை UNIQUE items கொண்ட வரிசையற்ற collections. Hash Tables அடிப்படையில் இயங்குவதால் தேடுதல் மிக விரைவாக நடக்கும்.",
            "code": "ids = {1, 2, 2, 3}\nprint(ids) # {1, 2, 3}",
            "code_breakdown": [
                "{1, 2, 2}: Defines a Set. The second '2' is instantly destroyed."
            ],
            "interviews": [
                {
                    "q": "Do sets maintain order?",
                    "a": "No. You cannot use indexing like `my_set[0]` on a set."
                }
            ],
            "quizzes": [
                {
                    "q": "Which structure automatically destroys duplicate items?",
                    "options": [
                        "A) List",
                        "B) Tuple",
                        "C) Set"
                    ],
                    "ans": 2
                }
            ],
            "exercise": "Convert the list to a set to remove duplicates, then print the length.",
            "starter_code": "nums = [1, 1, 2, 2, 3]\nclean = set(nums)\nprint(len(clean))",
            "expected_output": "3"
        },
        {
            "title": "12. Strings",
            "theory": "Strings are actually just immutable Lists of characters under the hood. You can slice them `name[0:3]` and loop through them.",
            "theory_tamil": "Strings என்பவை characters-ன் immutable List ஆகும். இவற்றை `name[0:3]` என slice செய்யலாம் மற்றும் loop செய்யலாம்.",
            "code": "text = ' Hello '\nclean = text.strip()",
            "code_breakdown": [
                ".strip(): Built-in method that destroys leading/trailing whitespace."
            ],
            "interviews": [
                {
                    "q": "Are strings mutable?",
                    "a": "No. `text.replace()` creates a brand new string in memory."
                }
            ],
            "quizzes": [
                {
                    "q": "What does .upper() do?",
                    "options": [
                        "A) Makes text bold",
                        "B) Converts text to UPPERCASE",
                        "C) Deletes vowels"
                    ],
                    "ans": 1
                }
            ],
            "exercise": "Print the string in uppercase.",
            "starter_code": "print('python'.upper())",
            "expected_output": "PYTHON"
        },
        {
            "title": "13. OOP (Classes)",
            "theory": "Object-Oriented Programming (OOP) allows you to bundle Data (variables) and Behaviors (functions) into a single Custom Object.",
            "theory_tamil": "OOP மூலம் தரவுகளை (Data) மற்றும் செயல்பாடுகளை (Behaviors) ஒரே Custom Object ஆக தொகுக்கலாம்.",
            "code": "class Dog:\n    def __init__(self, name):\n        self.name = name\n\nd = Dog('Rex')\nprint(d.name)",
            "code_breakdown": [
                "class Dog:: Defines the blueprint.",
                "__init__: The constructor. Runs automatically when a new Dog is created.",
                "self: References the specific object being instantiated."
            ],
            "interviews": [
                {
                    "q": "What is `self`?",
                    "a": "A reference to the current instance of the class, allowing access to its specific attributes."
                }
            ],
            "quizzes": [
                {
                    "q": "What method acts as the constructor in Python?",
                    "options": [
                        "A) __build__",
                        "B) __init__",
                        "C) start()"
                    ],
                    "ans": 1
                }
            ],
            "exercise": "Print the name of the Car object.",
            "starter_code": "class Car:\n    def __init__(self, brand):\n        self.brand = brand\nc = Car('Tesla')\nprint(c.brand)",
            "expected_output": "Tesla"
        }
    ],
    "Phase 1.5: Intermediate Python": [
        {
            "title": "14. List Comprehension",
            "theory": "A highly optimized, 'Pythonic' way to construct new lists from iterables in a single line of code.",
            "theory_tamil": "List Comprehension என்பது existing list-ல் இருந்து புது list-ஐ create செய்வதற்கான ஒரு short, fast (C-level speeds) syntax ஆகும்.",
            "code": "evens = [x for x in range(10) if x % 2 == 0]",
            "code_breakdown": [
                "x: The output value.",
                "for x in range: The loop.",
                "if x % 2 == 0: The condition filter."
            ],
            "interviews": [
                {
                    "q": "Why use list comprehension?",
                    "a": "Performance speed and code readability."
                }
            ],
            "quizzes": [
                {
                    "q": "Is list comprehension faster than a standard for-loop?",
                    "options": [
                        "A) Yes",
                        "B) No"
                    ],
                    "ans": 0
                }
            ],
            "exercise": "Print a list of numbers 0,1,2 using list comprehension.",
            "starter_code": "nums = [x for x in range(3)]\nprint(nums)",
            "expected_output": "[0, 1, 2]"
        },
        {
            "title": "15. *args and **kwargs",
            "theory": "Allows a function to accept a dynamic, unlimited number of arguments. *args packs them into a Tuple, **kwargs packs keyword args into a Dict.",
            "theory_tamil": "*args மற்றும் **kwargs மூலம் ஒரு function-க்கு எத்தனை arguments வேண்டுமானாலும் முன்கூட்டியே define செய்யாமல் அனுப்பலாம். *args Tuple ஆகவும், **kwargs Dict ஆகவும் மாறும்.",
            "code": "def add(*args):\n    return sum(args)",
            "code_breakdown": [
                "*args: The asterisk unpacks unlimited positional arguments into a single Tuple."
            ],
            "interviews": [
                {
                    "q": "What data type is **kwargs?",
                    "a": "A Dictionary."
                }
            ],
            "quizzes": [
                {
                    "q": "What data type is *args?",
                    "options": [
                        "A) Tuple",
                        "B) List",
                        "C) Dictionary"
                    ],
                    "ans": 0
                }
            ],
            "exercise": "Use the add function to sum 10 and 20. Print the result.",
            "starter_code": "def add(*args):\n    return sum(args)\nprint(add(10, 20))",
            "expected_output": "30"
        },
        {
            "title": "16. Enumerate & Zip",
            "theory": "Enumerate tracks the index while looping. Zip perfectly combines two parallel lists together like a jacket zipper.",
            "theory_tamil": "Enumerate என்பது loop-ல் index-ஐ track செய்ய உதவுகிறது. Zip இரண்டு lists-ஐ ஒன்றிணைக்க (combine) பயன்படுகிறது.",
            "code": "names = ['A', 'B']\nfor idx, name in enumerate(names):\n    print(idx)",
            "code_breakdown": [
                "enumerate(): Yields a tuple of (index, value) on each iteration."
            ],
            "interviews": [
                {
                    "q": "Why use enumerate instead of range(len())?",
                    "a": "It's cleaner, more Pythonic, and prevents off-by-one errors."
                }
            ],
            "quizzes": [
                {
                    "q": "What function pairs two lists together?",
                    "options": [
                        "A) combine()",
                        "B) zip()",
                        "C) join()"
                    ],
                    "ans": 1
                }
            ],
            "exercise": "Print the index of the first enumerate loop.",
            "starter_code": "for idx, val in enumerate(['Apple']):\n    print(idx)",
            "expected_output": "0"
        },
        {
            "title": "17. Big O Notation",
            "theory": "Big O measures how algorithm performance degrades as data scales to infinity. O(1) is instant. O(N) takes linear time.",
            "theory_tamil": "Big O என்பது ஒரு algorithm-ன் செயல்பாடு எவ்வாறு data scale ஆகும்போது மாறுபடும் என்பதை அளவிடுகிறது. O(1) instant, O(N) linear time எடுக்கும்.",
            "code": "# O(1) Dictionary Lookup\ndata = {'id': 55}\nprint(data['id'])",
            "code_breakdown": [
                "data['id']: Python calculates the hash of 'id' and jumps directly to that memory address. No searching required."
            ],
            "interviews": [
                {
                    "q": "What is the time complexity of a List lookup vs a Set lookup?",
                    "a": "List is O(N) because it must iterate. Set is O(1) because it uses hashing."
                }
            ],
            "quizzes": [
                {
                    "q": "Which is faster for looking up if an item exists?",
                    "options": [
                        "A) A List",
                        "B) A Set",
                        "C) They are equal"
                    ],
                    "ans": 1
                }
            ],
            "exercise": "Print 'True' to confirm Sets are O(1).",
            "starter_code": "print('True')",
            "expected_output": "True"
        }
    ],
    "Phase 4: Machine Learning 🤖": [
        {
            "title": "18. Data Analysis with Pandas",
            "theory": "Pandas is the industry standard library for data manipulation. It introduces the DataFrame, which is essentially a powerful programmatic Excel spreadsheet.",
            "theory_tamil": "Pandas என்பது Data Analysis-க்கான industry standard library ஆகும். இது DataFrame எனப்படும் கட்டமைப்பை அறிமுகப்படுத்துகிறது, இது சுருக்கமாக ஒரு சக்திவாய்ந்த programmatic Excel spreadsheet போல செயல்படும்.",
            "code": "import pandas as pd\n\ndata = {'Name': ['Ajith', 'Vijay'], 'Age': [45, 43]}\ndf = pd.DataFrame(data)\n\nprint(df.head())",
            "code_breakdown": [
                "import pandas as pd is the standard alias convention.",
                "pd.DataFrame(data) converts a dictionary into a 2D table."
            ],
            "interviews": [
                {
                    "q": "What is the difference between a Series and a DataFrame?",
                    "a": "A Series is a 1D column. A DataFrame is a 2D table made up of multiple Series."
                }
            ],
            "quizzes": [
                {
                    "q": "What is Pandas primarily used for?",
                    "options": [
                        "Web Dev",
                        "Data Manipulation",
                        "Game Dev"
                    ],
                    "ans": 1
                }
            ],
            "exercise": "Import pandas as pd. Print the text 'Pandas Ready'.",
            "starter_code": "import pandas as pd\nprint('Pandas Ready')",
            "expected_output": "Pandas Ready"
        },
        {
            "title": "19. NumPy Numerical Computing",
            "theory": "NumPy is the core library for scientific computing in Python. It provides a high-performance multidimensional array object, which is much faster than standard Python lists.",
            "theory_tamil": "NumPy என்பது Python-ல் scientific computing-க்கான முக்கிய library. இது standard Python lists-ஐ விட மிக வேகமான multidimensional array-ஐ வழங்குகிறது.",
            "code": "import numpy as np\n\narr = np.array([1, 2, 3, 4, 5])\nprint(arr * 2) # Broadcasts the multiplication",
            "code_breakdown": [
                "np.array() creates a highly optimized C-backed array.",
                "arr * 2 multiplies every element instantly without a for-loop (vectorization)."
            ],
            "interviews": [
                {
                    "q": "Why is NumPy faster than Python lists?",
                    "a": "NumPy arrays are stored at one continuous place in memory unlike lists, so processes can access and manipulate them very efficiently (Locality of reference)."
                }
            ],
            "quizzes": [
                {
                    "q": "What does vectorization mean in NumPy?",
                    "options": [
                        "Drawing lines",
                        "Applying operations to entire arrays at once",
                        "Sorting elements"
                    ],
                    "ans": 1
                }
            ],
            "exercise": "Print 'NumPy Ready'.",
            "starter_code": "print('NumPy Ready')",
            "expected_output": "NumPy Ready"
        },
        {
            "title": "20. Linear Regression (Scikit-Learn)",
            "theory": "Scikit-Learn (sklearn) is the premier machine learning library. Linear Regression is a supervised learning algorithm used for predicting continuous values by finding the best-fit line through data points.",
            "theory_tamil": "Scikit-Learn என்பது Machine Learning-க்கான முதன்மை library ஆகும். Linear Regression என்பது supervised learning algorithm ஆகும், இது data points வழியே ஒரு சிறந்த fit கோட்டை வரைந்து தொடர்ச்சியான மதிப்புகளைக் கணிக்கப் பயன்படுகிறது.",
            "code": "from sklearn.linear_model import LinearRegression\n\n# X = Features, y = Target\nX = [[1], [2], [3]]\ny = [10, 20, 30]\n\nmodel = LinearRegression()\nmodel.fit(X, y)\n\nprediction = model.predict([[4]])\nprint(prediction) # 40",
            "code_breakdown": [
                "model = LinearRegression() initializes the ML algorithm.",
                "model.fit(X, y) trains the model on the data.",
                "model.predict([[4]]) asks the trained model to predict the outcome for 4."
            ],
            "interviews": [
                {
                    "q": "What does the fit() function do in Scikit-Learn?",
                    "a": "It trains the algorithm on the provided dataset."
                }
            ],
            "quizzes": [
                {
                    "q": "Linear Regression is used for what kind of tasks?",
                    "options": [
                        "Predicting continuous numbers",
                        "Classifying images",
                        "Clustering data"
                    ],
                    "ans": 0
                }
            ],
            "exercise": "Print 'Model Trained' to simulate successful completion.",
            "starter_code": "print('Model Trained')",
            "expected_output": "Model Trained"
        },
        {
            "title": "21. Model Evaluation",
            "theory": "After training a model, you must evaluate its performance on unseen data to ensure it hasn't just memorized the training set (Overfitting).",
            "theory_tamil": "ஒரு மாடலை train செய்த பிறகு, அது training set-ஐ அப்படியே மனப்பாடம் (Overfitting) செய்துவிடவில்லை என்பதை உறுதிப்படுத்த, பார்க்காத data-ல் (unseen data) அதன் performance-ஐ evaluate செய்ய வேண்டும்.",
            "code": "from sklearn.metrics import mean_squared_error\n\ntrue_values = [3, -0.5, 2, 7]\npredictions = [2.5, 0.0, 2, 8]\n\nmse = mean_squared_error(true_values, predictions)\nprint('MSE:', mse)",
            "code_breakdown": [
                "mean_squared_error calculates the average squared difference between the estimated values and the actual value."
            ],
            "interviews": [
                {
                    "q": "What is overfitting?",
                    "a": "When a model learns the detail and noise in the training data to the extent that it negatively impacts the performance of the model on new data."
                }
            ],
            "quizzes": [
                {
                    "q": "What does a lower Mean Squared Error (MSE) mean?",
                    "options": [
                        "Worse model",
                        "Better model",
                        "Slower model"
                    ],
                    "ans": 1
                }
            ],
            "exercise": "Print 'Course Complete!'.",
            "starter_code": "print('Course Complete!')",
            "expected_output": "Course Complete!"
        }
    ]
};
