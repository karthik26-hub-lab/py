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
        }
    ],
    "Phase 1.5: Intermediate Python": [
        {
            title: "3. List Comprehensions",
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
            starter_code: "nums = [1, 2, 3]\ndoubles = [ ]\nprint(doubles)",
            expected_output: "[2, 4, 6]"
        },
        {
            title: "4. Dictionary Mastery",
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
            starter_code: "d = { }\nprint( )",
            expected_output: "blue"
        }
    ],
    "Phase 4: Machine Learning (Tamil Video)": [
        {
            title: "5. Data Analysis with Pandas",
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
            title: "6. Linear Regression (Scikit-Learn)",
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
        }
    ]
};
