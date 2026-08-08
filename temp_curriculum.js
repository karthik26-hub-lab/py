const curriculum = {
    "Phase 1: Python Fundamentals": [
        {
            title: "1. Python IDE Setup",
            theory: "An Integrated Development Environment (IDE) consolidates basic tools required to write and test software. Without an IDE, you're coding on a campfire.",
            theory_examples: ["Real World Case: Developers use IDEs like VS Code because syntax highlighting and live error checking save hours of debugging."],
            code: "print('Hello World')",
            code_breakdown: ["print(): Built-in function to output data.", "'Hello World': A string argument."],
            interviews: [{ q: "What is an IDE?", a: "A software suite offering code editing, debugging, and execution tools.", example: "VS Code, PyCharm" }],
            quizzes: [{ q: "Which is an IDE?", options: ["A) Terminal", "B) VS Code", "C) Python"], ans: 1 }],
            exercise: "Print 'Ready' to the terminal.",
            starter_code: "print('Ready')",
            expected_output: "Ready"
        },
        {
            title: "2. Variables & Data Types",
            theory: "A variable is a labeled container in memory. Data types tell Python how to handle that memory (Text, Numbers, Decimals).",
            theory_examples: ["Game Dev: `health = 100` allows the game to modify player state over time."],
            code: "name = 'Karthik'\nage = 19\nprice = 9.99",
            code_breakdown: ["name: String variable.", "age: Integer variable.", "price: Float variable."],
            interviews: [{ q: "Is Python statically typed?", a: "No, dynamically typed. You don't declare types upfront." }],
            quizzes: [{ q: "What data type is 3.14?", options: ["A) Integer", "B) String", "C) Float"], ans: 2 }],
            exercise: "Create a variable `x` set to 50, and print it.",
            starter_code: "x = 50\nprint(x)",
            expected_output: "50"
        },
        {
            title: "3. Input and Output",
            theory: "Input() pauses the program to capture keystrokes from the user. It always returns a string, so math requires casting (int() or float()).",
            theory_examples: ["E-Commerce: Asking a user for their credit card requires capturing input and converting it securely."],
            code: "age_str = input('Age? ')\nage = int(age_str)",
            code_breakdown: ["input(): Halts execution to read terminal text.", "int(): Converts the string text into a math-ready integer."],
            interviews: [{ q: "What does input() return?", a: "Always returns a String type." }],
            quizzes: [{ q: "How do you convert string '5' to a math number?", options: ["A) str('5')", "B) int('5')", "C) float('5')"], ans: 1 }],
            exercise: "Print exactly: 'Input Accepted'",
            starter_code: "# Normally we do name = input()\nprint('Input Accepted')",
            expected_output: "Input Accepted"
        },
        {
            title: "4. Operators",
            theory: "Operators are verbs. Arithmetic operators do math (+, -, %, /). Comparison operators evaluate Truth (==, !=, >, <).",
            theory_examples: ["Banking App: `if withdrawal <= balance:` uses a comparison operator to allow/deny funds."],
            code: "a = 10\nb = 3\nprint(a % b)",
            code_breakdown: ["a % b: Modulo. Divides 10 by 3 and returns the remainder (1)."],
            interviews: [{ q: "Difference between = and ==?", a: "= assigns a value. == compares two values." }],
            quizzes: [{ q: "What does 10 % 3 output?", options: ["A) 3.33", "B) 1", "C) 3"], ans: 1 }],
            exercise: "Print the remainder of 10 divided by 3.",
            starter_code: "print(10 % 3)",
            expected_output: "1"
        },
        {
            title: "5. Conditionals (If/Else)",
            theory: "Conditionals act as decision forks. `if` a condition is True, a block runs. `elif` chains conditions. `else` is the final fallback.",
            theory_examples: ["Authentication: `if password == db_password:` unlocks the account."],
            code: "hp = 0\nif hp > 0:\n    print('Alive')\nelse:\n    print('Dead')",
            code_breakdown: ["if hp > 0: Evaluates to False (0 is not > 0).", "else:: Catches all False conditions."],
            interviews: [{ q: "Can you use else without if?", a: "No, else must immediately follow an if or elif block." }],
            quizzes: [{ q: "When does 'else' trigger?", options: ["A) Always", "B) When preceding 'if' is False", "C) When an error occurs"], ans: 1 }],
            exercise: "Write an if/else block that prints 'Pass' if score is 50. I set score to 50 for you.",
            starter_code: "score = 50\nif score >= 50:\n    print('Pass')\nelse:\n    print('Fail')",
            expected_output: "Pass"
        },
        {
            title: "6. Loops (For / While)",
            theory: "Loops automate repetition. A `for` loop iterates a specific number of times. A `while` loop runs endlessly until a condition becomes False.",
            theory_examples: ["Game Engine: A `while True:` loop keeps the game running frame-by-frame until the user hits Quit."],
            code: "for i in range(3):\n    print(i)",
            code_breakdown: ["range(3): Generates a sequence 0, 1, 2.", "print(i): Executes 3 times."],
            interviews: [{ q: "What is `break` vs `continue`?", a: "`break` exits the loop permanently. `continue` skips the current iteration and moves to the next." }],
            quizzes: [{ q: "Which loop is best for running code exactly 5 times?", options: ["A) While Loop", "B) For Loop", "C) Infinite Loop"], ans: 1 }],
            exercise: "Write a for loop that adds 0, 1, and 2 together. Print the final sum.",
            starter_code: "total = 0\nfor i in range(3):\n    total += i\nprint(total)",
            expected_output: "3"
        },
        {
            title: "7. Functions",
            theory: "Functions are reusable machines. You pass raw materials (arguments), it executes isolated code, and spits out a product (return).",
            theory_examples: ["Banking: `calculate_tax(salary)` can be reused for every employee without copying the math 10,000 times."],
            code: "def add(a, b):\n    return a + b\n\nresult = add(5, 5)",
            code_breakdown: ["def: Keyword to define a function.", "return: Hands data back to the global scope. Ends the function instantly."],
            interviews: [{ q: "Print vs Return?", a: "Print is just for humans to read. Return actually saves the data into memory for the computer to use." }],
            quizzes: [{ q: "What keyword sends data back from a function?", options: ["A) yield", "B) return", "C) output"], ans: 1 }],
            exercise: "Write a function `multiply(x, y)` that returns the product. Print multiply(4, 5).",
            starter_code: "def multiply(x, y):\n    return x * y\nprint(multiply(4, 5))",
            expected_output: "20"
        },
        {
            title: "8. Lists",
            theory: "Lists are mutable, ordered arrays. They store multiple items in a single variable. Accessible via 0-based indexing.",
            theory_examples: ["Social Media: A user's timeline is a List of post objects, ordered by time."],
            code: "cart = ['Apple', 'Banana']\ncart.append('Orange')\nprint(cart[0])",
            code_breakdown: [".append(): Method that adds an item to the end of the list in memory.", "cart[0]: Retrieves the 1st item (Apple)."],
            interviews: [{ q: "How do you get the last item in a list?", a: "Use `my_list[-1]`." }],
            quizzes: [{ q: "What index is the first item in a Python list?", options: ["A) 1", "B) -1", "C) 0"], ans: 2 }],
            exercise: "Print the 2nd item in this list.",
            starter_code: "names = ['John', 'Karthik', 'Bob']\nprint(names[1])",
            expected_output: "Karthik"
        },
        {
            title: "9. Tuples",
            theory: "Tuples are identical to Lists, but they are IMMUTABLE. Once created, they can never be modified. They use less memory.",
            theory_examples: ["Database: SQL query results are returned as Tuples to prevent the app from accidentally changing the raw database data."],
            code: "coords = (10, 20)\n# coords[0] = 15  <-- Crashes!",
            code_breakdown: ["(10, 20): Parentheses define a Tuple. Brackets define a List."],
            interviews: [{ q: "Why use a Tuple over a List?", a: "To ensure data integrity (read-only) and for slight performance gains." }],
            quizzes: [{ q: "Are Tuples mutable?", options: ["A) Yes", "B) No"], ans: 1 }],
            exercise: "Create a tuple `t` with values 1 and 2. Print the first value.",
            starter_code: "t = (1, 2)\nprint(t[0])",
            expected_output: "1"
        },
        {
            title: "10. Dictionaries",
            theory: "Dictionaries store Key-Value pairs. They are optimized for instant O(1) lookups by Key.",
            theory_examples: ["Web APIs: Almost all web traffic (JSON) translates directly into Python dictionaries (e.g. `user['email']`)."],
            code: "user = {'id': 5, 'name': 'Karthik'}\nprint(user['name'])",
            code_breakdown: ["{'id': 5}: Curly braces define a dictionary. 'id' is the Key, 5 is the Value."],
            interviews: [{ q: "What happens if you access a missing key?", a: "Throws a KeyError. Use `dict.get('key')` to return None safely instead." }],
            quizzes: [{ q: "What is the lookup speed of a dictionary key?", options: ["A) O(1) Instant", "B) O(N) Linear", "C) O(N^2)"], ans: 0 }],
            exercise: "Print the value of the 'age' key.",
            starter_code: "data = {'name': 'Karthik', 'age': 19}\nprint(data['age'])",
            expected_output: "19"
        },
        {
            title: "11. Sets",
            theory: "Sets are unordered collections of UNIQUE items. They are built on Hash Tables, making checking `if item in set` lightning fast.",
            theory_examples: ["Analytics: Finding unique visitors to a website. Add all IP addresses to a Set, and duplicates vanish instantly."],
            code: "ids = {1, 2, 2, 3}\nprint(ids) # {1, 2, 3}",
            code_breakdown: ["{1, 2, 2}: Defines a Set. The second '2' is instantly destroyed."],
            interviews: [{ q: "Do sets maintain order?", a: "No. You cannot use indexing like `my_set[0]` on a set." }],
            quizzes: [{ q: "Which structure automatically destroys duplicate items?", options: ["A) List", "B) Tuple", "C) Set"], ans: 2 }],
            exercise: "Convert the list to a set to remove duplicates, then print the length.",
            starter_code: "nums = [1, 1, 2, 2, 3]\nclean = set(nums)\nprint(len(clean))",
            expected_output: "3"
        },
        {
            title: "12. Strings",
            theory: "Strings are actually just immutable Lists of characters under the hood. You can slice them `name[0:3]` and loop through them.",
            theory_examples: ["Data Cleaning: Strip whitespace from user inputs `email.strip().lower()` before saving to database."],
            code: "text = ' Hello '\nclean = text.strip()",
            code_breakdown: [".strip(): Built-in method that destroys leading/trailing whitespace."],
            interviews: [{ q: "Are strings mutable?", a: "No. `text.replace()` creates a brand new string in memory." }],
            quizzes: [{ q: "What does .upper() do?", options: ["A) Makes text bold", "B) Converts text to UPPERCASE", "C) Deletes vowels"], ans: 1 }],
            exercise: "Print the string in uppercase.",
            starter_code: "print('python'.upper())",
            expected_output: "PYTHON"
        },
        {
            title: "13. OOP (Classes)",
            theory: "Object-Oriented Programming (OOP) allows you to bundle Data (variables) and Behaviors (functions) into a single Custom Object.",
            theory_examples: ["Enterprise Architecture: Everything in an app is an Object. `User`, `Invoice`, `DatabaseConnection`."],
            code: "class Dog:\n    def __init__(self, name):\n        self.name = name\n\nd = Dog('Rex')\nprint(d.name)",
            code_breakdown: ["class Dog:: Defines the blueprint.", "__init__: The constructor. Runs automatically when a new Dog is created.", "self: References the specific object being instantiated."],
            interviews: [{ q: "What is `self`?", a: "A reference to the current instance of the class, allowing access to its specific attributes." }],
            quizzes: [{ q: "What method acts as the constructor in Python?", options: ["A) __build__", "B) __init__", "C) start()"], ans: 1 }],
            exercise: "Print the name of the Car object.",
            starter_code: "class Car:\n    def __init__(self, brand):\n        self.brand = brand\nc = Car('Tesla')\nprint(c.brand)",
            expected_output: "Tesla"
        }
    ],
    "Phase 1.5: Intermediate Python": [
        {
            title: "14. List Comprehension",
            theory: "A highly optimized, 'Pythonic' way to construct new lists from iterables in a single line of code.",
            theory_examples: ["Data Engineering: Parsing millions of rows. List comprehensions are written in C under the hood, running much faster than normal Python loops."],
            code: "evens = [x for x in range(10) if x % 2 == 0]",
            code_breakdown: ["x: The output value.", "for x in range: The loop.", "if x % 2 == 0: The condition filter."],
            interviews: [{ q: "Why use list comprehension?", a: "Performance speed and code readability." }],
            quizzes: [{ q: "Is list comprehension faster than a standard for-loop?", options: ["A) Yes", "B) No"], ans: 0 }],
            exercise: "Print a list of numbers 0,1,2 using list comprehension.",
            starter_code: "nums = [x for x in range(3)]\nprint(nums)",
            expected_output: "[0, 1, 2]"
        },
        {
            title: "15. *args and **kwargs",
            theory: "Allows a function to accept a dynamic, unlimited number of arguments. *args packs them into a Tuple, **kwargs packs keyword args into a Dict.",
            theory_examples: ["Logging: `def log(*args)` can accept 1 message or 50 messages dynamically."],
            code: "def add(*args):\n    return sum(args)",
            code_breakdown: ["*args: The asterisk unpacks unlimited positional arguments into a single Tuple."],
            interviews: [{ q: "What data type is **kwargs?", a: "A Dictionary." }],
            quizzes: [{ q: "What data type is *args?", options: ["A) Tuple", "B) List", "C) Dictionary"], ans: 0 }],
            exercise: "Use the add function to sum 10 and 20. Print the result.",
            starter_code: "def add(*args):\n    return sum(args)\nprint(add(10, 20))",
            expected_output: "30"
        },
        {
            title: "16. Enumerate & Zip",
            theory: "Enumerate tracks the index while looping. Zip perfectly combines two parallel lists together like a jacket zipper.",
            theory_examples: ["Data Science: Zipping a list of 'Column_Names' with a list of 'Data_Values' to create a Dictionary."],
            code: "names = ['A', 'B']\nfor idx, name in enumerate(names):\n    print(idx)",
            code_breakdown: ["enumerate(): Yields a tuple of (index, value) on each iteration."],
            interviews: [{ q: "Why use enumerate instead of range(len())?", a: "It's cleaner, more Pythonic, and prevents off-by-one errors." }],
            quizzes: [{ q: "What function pairs two lists together?", options: ["A) combine()", "B) zip()", "C) join()"], ans: 1 }],
            exercise: "Print the index of the first enumerate loop.",
            starter_code: "for idx, val in enumerate(['Apple']):\n    print(idx)",
            expected_output: "0"
        },
        {
            title: "17. Big O Notation",
            theory: "Big O measures how algorithm performance degrades as data scales to infinity. O(1) is instant. O(N) takes linear time.",
            theory_examples: ["System Design: If you have 1 Billion users, an O(N) list search takes 10 seconds. An O(1) Hash Map lookup takes 1 millisecond."],
            code: "# O(1) Dictionary Lookup\ndata = {'id': 55}\nprint(data['id'])",
            code_breakdown: ["data['id']: Python calculates the hash of 'id' and jumps directly to that memory address. No searching required."],
            interviews: [{ q: "What is the time complexity of a List lookup vs a Set lookup?", a: "List is O(N) because it must iterate. Set is O(1) because it uses hashing." }],
            quizzes: [{ q: "Which is faster for looking up if an item exists?", options: ["A) A List", "B) A Set", "C) They are equal"], ans: 1 }],
            exercise: "Print 'True' to confirm Sets are O(1).",
            starter_code: "print('True')",
            expected_output: "True"
        }
    ],
    "Phase 2: Databases (SQL)": [
        {
            title: "18. Database & SQL Basics",
            theory: "A Database is a structured system for storing data on disk. SQL is the programming language used to interact with Relational (Table-based) Databases.",
            theory_examples: ["Backend Dev: When a user registers, Python opens a connection and runs an `INSERT INTO users` SQL query."],
            code: "import sqlite3\nconn = sqlite3.connect(':memory:')\nc = conn.cursor()\nc.execute('CREATE TABLE usr (name TEXT)')",
            code_breakdown: ["sqlite3.connect(':memory:'): Creates a temporary, blazing fast RAM database.", "cursor(): The object used to execute raw SQL commands."],
            interviews: [{ q: "What is SQL Injection?", a: "A severe vulnerability where a hacker submits raw SQL code in an input field to bypass auth or drop tables." }],
            quizzes: [{ q: "Which SQL command retrieves data?", options: ["A) PULL", "B) GET", "C) SELECT"], ans: 2 }],
            exercise: "Print 'DB Connected' to verify you understand the theory.",
            starter_code: "print('DB Connected')",
            expected_output: "DB Connected"
        },
        {
            title: "19. Joins and Aggregations",
            theory: "SQL JOINs connect multiple tables together based on a shared Key. Aggregations (SUM, COUNT) calculate math on those joined tables.",
            theory_examples: ["Analytics: Joining a `Users` table and `Orders` table to calculate the total lifetime spend per user."],
            code: "# SELECT u.name, SUM(o.price)\n# FROM users u\n# INNER JOIN orders o ON u.id = o.user_id",
            code_breakdown: ["INNER JOIN: Keeps only rows that have matches in both tables.", "ON: Defines the link (Foreign Key matches Primary Key)."],
            interviews: [{ q: "Difference between INNER and LEFT join?", a: "LEFT JOIN keeps all rows from the primary table, even if the secondary table has no matching data." }],
            quizzes: [{ q: "Which keyword counts rows?", options: ["A) TALLY()", "B) COUNT()", "C) SUM()"], ans: 1 }],
            exercise: "Print 'Query Executed'",
            starter_code: "print('Query Executed')",
            expected_output: "Query Executed"
        }
    ],
    "Phase 3: Algorithms": [
        {
            title: "20. The Two Sum Algorithm",
            theory: "Algorithms are step-by-step recipes to solve logical problems. Data Structures are the pantries used to organize data for the recipe.",
            theory_examples: ["FAANG Interviews: Two Sum is the most famous interview algorithm. The brute-force O(N^2) solution fails. You must use a Dictionary for O(N) performance."],
            code: "def two_sum(nums, target):\n    seen = {}\n    for i, num in enumerate(nums):\n        if target - num in seen:\n            return [seen[target - num], i]\n        seen[num] = i",
            code_breakdown: ["seen = {}: Initializes an O(1) lookup dictionary to store numbers we have passed.", "target - num: Calculates the complement needed to hit the target."],
            interviews: [{ q: "What is the space complexity of optimized Two Sum?", a: "O(N), because in the worst case, we must store every number in the dictionary." }],
            quizzes: [{ q: "What data structure optimizes Two Sum to O(N) time?", options: ["A) Nested Loops", "B) Dictionary / Hash Map", "C) Tuple"], ans: 1 }],
            exercise: "Run the Two Sum logic manually. Target is 9. Nums are [2, 7]. Print the list of indices.",
            starter_code: "print([0, 1])",
            expected_output: "[0, 1]"
        }
    ]
};
