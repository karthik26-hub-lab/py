const curriculum = {
    "Phase 1: Python Fundamentals": [
        {
            title: "1. Installing Python & IDE Setup",
            theory: "An Integrated Development Environment (IDE) is a software suite that consolidates basic tools required to write and test software. Think of it like a fully equipped kitchen. Without an IDE, you are cooking on a campfire (Notepad).",
            theory_examples: [
                "Real World Case: Professional developers use IDEs like VS Code or PyCharm because they include syntax highlighting (coloring code), auto-completion, and live error checking, which saves hours of debugging."
            ],
            code: "print('Hello World')",
            code_breakdown: [
                "print(): This is a built-in Python function that outputs data to your screen.",
                "'Hello World': A string (text) passed into the function as an argument."
            ],
            interviews: [
                { q: "What is an IDE and why use it over a basic text editor?", a: "An IDE provides tools like debuggers, version control integration, and intellisense which drastically improve developer velocity.", example: "VS Code, PyCharm, IntelliJ" },
                { q: "What is the difference between a compiler and an interpreter?", a: "A compiler translates the entire code into machine code before running. Python uses an interpreter, which translates and executes the code line-by-line." }
            ],
            quizzes: [
                { q: "Which of the following is NOT an IDE?", options: ["A) VS Code", "B) PyCharm", "C) Microsoft Word"], ans: 2 }
            ],
            exercise: "Use the print function to output exactly: 'Player 1 Ready'",
            starter_code: "print('Player 1 Ready')",
            expected_output: "Player 1 Ready"
        },
        {
            title: "2. Variables and Data Types",
            theory: "A variable is a labeled container in the computer's RAM. When you assign data to it, Python allocates memory and attaches your label to that memory address.",
            theory_examples: [
                "Game Dev Case: In a video game, variables store player state. `health = 100` allows the game to constantly read and modify the player's health over time."
            ],
            code: "score = 50\nname = 'Karthik'\nis_active = True",
            code_breakdown: [
                "score = 50: Initializes an Integer variable. The single '=' is the assignment operator.",
                "name = 'Karthik': Initializes a String variable (enclosed in quotes).",
                "is_active = True: Initializes a Boolean variable. Note the capital 'T' in Python."
            ],
            interviews: [
                { q: "Is Python statically or dynamically typed?", a: "Dynamically typed. You do not need to declare variable types (e.g., `int x = 5`). Python infers the type at runtime.", example: "You can do `x = 5` and then `x = 'hello'` without crashing." },
                { q: "What are the rules for naming variables?", a: "Must start with a letter or underscore. Cannot start with a number. Cannot use reserved keywords (like 'for', 'if')." }
            ],
            quizzes: [
                { q: "Which variable name is invalid in Python?", options: ["A) _score", "B) 1st_player", "C) player_one"], ans: 1 },
                { q: "What data type is the value 3.14?", options: ["A) String", "B) Integer", "C) Float"], ans: 2 }
            ],
            exercise: "Create a variable called 'price' and set it to 9.99. Print it.",
            starter_code: "price = 9.99\nprint(price)",
            expected_output: "9.99"
        },
        {
            title: "3. Conditionals & Loops",
            theory: "Control flow dictates the order in which code executes. Conditionals (if/else) act as decision forks, while Loops (for/while) allow repetitive execution of code blocks without rewriting them.",
            theory_examples: [
                "E-Commerce Case: When checking out on Amazon, an `if` statement checks `if user.balance >= item.price`. If True, purchase goes through. Else, it returns 'Insufficient Funds'."
            ],
            code: "for num in range(3):\n    if num % 2 == 0:\n        print('Even')\n    else:\n        print('Odd')",
            code_breakdown: [
                "for num in range(3): Loops exactly 3 times (num becomes 0, 1, 2).",
                "if num % 2 == 0: The modulo operator (%) returns the remainder of division. If remainder is 0, the number is Even.",
                "print('Even'): Code blocks in Python are defined by indentation (4 spaces). This runs if the condition is True."
            ],
            interviews: [
                { q: "What is an infinite loop?", a: "A loop whose exit condition is never met. Often occurs in `while` loops if you forget to increment the counter.", example: "while True: pass" },
                { q: "What is the difference between `break` and `continue`?", a: "`break` completely escapes and destroys the loop. `continue` immediately skips the rest of the current iteration and jumps to the next one." }
            ],
            quizzes: [
                { q: "What does the modulo (%) operator do?", options: ["A) Calculates percentage", "B) Returns the remainder of division", "C) Divides two numbers"], ans: 1 },
                { q: "Which keyword skips the current loop iteration?", options: ["A) stop", "B) break", "C) continue"], ans: 2 }
            ],
            exercise: "Write a loop that adds 0, 1, 2, 3, and 4 together. Print the final sum.",
            starter_code: "total = 0\nfor i in range(5):\n    total += i\nprint(total)",
            expected_output: "10"
        }
    ],
    "Phase 1.5: Intermediate Python ($500 Masterclass)": [
        {
            title: "18.1 List Comprehension Mastery",
            theory: "List Comprehensions provide a concise way to create lists. Common applications are to make new lists where each element is the result of some operations applied to each member of another sequence or iterable. They are considered highly 'Pythonic'.",
            theory_examples: [
                "Data Science Case: You have a database dump of user ages as strings ['18', '21', '35']. You need them as Integers to do math. A List Comprehension handles this transformation in milliseconds."
            ],
            code: "# The Old Way (Slow)\nnums = [1, 2, 3, 4]\ndoubled = []\nfor x in nums:\n    if x % 2 == 0:\n        doubled.append(x * 2)\n\n# The Pythonic Way (Fast)\npythonic_doubled = [x * 2 for x in nums if x % 2 == 0]",
            code_breakdown: [
                "[ ... ]: The brackets indicate we are building a new List.",
                "x * 2: The 'Expression' or 'Output'. This is what gets saved into the new list.",
                "for x in nums: The 'Iterable'. We are looping through the existing list.",
                "if x % 2 == 0: The optional 'Condition'. Only items that pass this test are processed."
            ],
            interviews: [
                { q: "Why use List Comprehension over a traditional For Loop?", a: "List comprehensions are generally faster under the hood (written in C) and make the code more readable by reducing 4 lines of logic into 1.", example: "[name.upper() for name in users]" },
                { q: "Can you have nested loops in a List Comprehension?", a: "Yes, though it can become hard to read. Example: [x*y for x in range(3) for y in range(3)]" },
                { q: "What happens if you use parentheses () instead of brackets []?", a: "It creates a Generator Expression instead of a List Comprehension, which is highly memory efficient." }
            ],
            quizzes: [
                { q: "What is the primary output of a List Comprehension?", options: ["A) A Dictionary", "B) A new List", "C) A Tuple"], ans: 1 },
                { q: "Which syntax is used for the condition in a List Comprehension?", options: ["A) while condition:", "B) filter(condition)", "C) if condition"], ans: 2 },
                { q: "True or False: List comprehensions are generally faster than standard for-loops in Python.", options: ["A) True", "B) False", "C) Only for floats"], ans: 0 }
            ],
            exercise: "Create a list comprehension that converts all names to uppercase. Print only the first name in the new list.",
            starter_code: "names = ['karthik', 'john', 'doe']\n# Your code here:\nupper_names = [n.upper() for n in names]\nprint(upper_names[0])",
            expected_output: "KARTHIK"
        },
        {
            title: "18.2 *args and **kwargs Deep Dive",
            theory: "When building enterprise functions, you often don't know how many arguments a user will pass. The unpacking operators `*` (args) and `**` (kwargs) act as dynamic nets, catching unlimited arguments and packing them into Tuples and Dictionaries.",
            theory_examples: [
                "Web Dev Case: A logging function needs to accept any number of variables to print them to the server console. By using `*args`, the logger can accept 1 string or 50 strings without crashing."
            ],
            code: "def server_log(timestamp, *args, **kwargs):\n    print(f'Time: {timestamp}')\n    \n    for msg in args:\n        print(f'Log: {msg}')\n        \n    for key, val in kwargs.items():\n        print(f'Meta - {key}: {val}')\n\nserver_log('10:00', 'DB Failed', 'Retrying', user_id=405, server='AWS')",
            code_breakdown: [
                "timestamp: A standard, required positional argument.",
                "*args: Catches 'DB Failed' and 'Retrying' and packs them into a Tuple.",
                "**kwargs: Catches the keyword arguments user_id=405 and server='AWS' and packs them into a Dictionary.",
                "kwargs.items(): Used to loop over both the Keys and Values of a dictionary."
            ],
            interviews: [
                { q: "Does the variable have to be named 'args'?", a: "No, the magic is in the `*` symbol. You could name it `*toppings` or `*data`. However, `*args` is the industry standard convention." },
                { q: "What is the mandatory order of arguments in a function definition?", a: "Standard Args -> *args -> Default/Keyword Args -> **kwargs." },
                { q: "How do you unpack a list into a function?", a: "By putting a `*` in front of the list when calling the function. e.g., `func(*my_list)`." }
            ],
            quizzes: [
                { q: "What data type does **kwargs compile into?", options: ["A) Tuple", "B) List", "C) Dictionary"], ans: 2 },
                { q: "What data type does *args compile into?", options: ["A) Tuple", "B) List", "C) Dictionary"], ans: 0 },
                { q: "Which is the correct order for parameters in a function signature?", options: ["A) *args, normal, **kwargs", "B) normal, *args, **kwargs", "C) **kwargs, *args, normal"], ans: 1 }
            ],
            exercise: "Write a function using *args that adds an unlimited amount of numbers together and returns the sum. Print the result of passing 10, 20, 30, and 40 into it.",
            starter_code: "def add_all(*args):\n    return sum(args)\n\nprint(add_all(10, 20, 30, 40))",
            expected_output: "100"
        }
    ]
};
