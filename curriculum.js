const curriculum = {
    "Phase 1: Python Programming Mastery": [
        {
            "title": "1. Core Python & Type Hinting",
            "theory": "Pro-level Python engineering demands strict adherence to typing and memory management. In large-scale enterprise applications, relying on dynamic typing often leads to catastrophic runtime errors that are notoriously difficult to debug. By utilizing Python's PEP 484 type hinting, we explicitly define the expected data types for function arguments and return values. This practice not only acts as self-documenting code but also empowers IDEs to catch type mismatches before the code is even executed.\n\nFurthermore, understanding how Python handles variable assignment (pass-by-object-reference) is crucial. When you pass a mutable object like a list into a function, you are passing a reference to the original memory address, meaning unintended modifications can bleed into the global state. Type hinting, combined with immutability where possible, forms the bedrock of writing resilient, production-ready machine learning pipelines.",
            "theory_tamil": "Pro-level Python பொறியியலுக்கு, typing மற்றும் memory management-ஐ கடுமையாகப் பின்பற்றுவது அவசியம். பெரிய அளவிலான enterprise applications-ல், dynamic typing-ஐ நம்பியிருப்பது பெரும் இயக்கநேர (runtime) பிழைகளுக்கு வழிவகுக்கும், இவற்றை debug செய்வது மிகவும் கடினம். Python-ன் PEP 484 type hinting-ஐப் பயன்படுத்துவதன் மூலம், function arguments மற்றும் return values-க்கான தரவு வகைகளை (data types) தெளிவாக வரையறுக்கிறோம். இது குறியீட்டைப் புரிந்துகொள்ள உதவுவதோடு, code இயங்கும் முன்பே பிழைகளை சுட்டிக்காட்ட IDE-களுக்கு உதவுகிறது.\n\nமேலும், Python எவ்வாறு variable assignment-ஐ கையாளுகிறது (pass-by-object-reference) என்பதைப் புரிந்துகொள்வது மிக முக்கியம். List போன்ற மாற்றக்கூடிய (mutable) object-ஐ function-க்குள் அனுப்பும்போது, நீங்கள் அதன் memory முகவரியையே அனுப்புகிறீர்கள். எனவே, எதிர்பாராத மாற்றங்கள் global state-ஐ பாதிக்கும் அபாயம் உள்ளது. Type hinting மற்றும் அவசியமான இடங்களில் immutability-ஐ பயன்படுத்துவதே உறுதியான ML pipelines அமைப்பதற்கான அடித்தளமாகும்.",
            "code": "def calculate_loss(predictions: list[float], targets: list[float]) -> float:\n    if len(predictions) != len(targets):\n        raise ValueError('Dimension mismatch: Predictions and targets must have the same length.')\n    \n    # Using a generator expression inside sum() for memory efficiency (no intermediate list created)\n    return sum((p - t)**2 for p, t in zip(predictions, targets)) / len(targets)",
            "code_breakdown": [
                "list[float]: Type hints explicitly declare that the lists must contain floating-point numbers.",
                "-> float: Declares that the function will guarantee a floating-point return value.",
                "generator expression: (p-t)**2 avoids creating a massive new list in RAM, computing values on-the-fly."
            ],
            "interviews": [
                {
                    "q": "Why use type hinting in Python if it is fundamentally a dynamically typed language?",
                    "a": "While Python ignores type hints at runtime, they are vital for static analysis tools (like mypy) and IDEs. They prevent a huge class of bugs in CI/CD pipelines and drastically improve the readability of large codebases."
                }
            ],
            "quizzes": [
                {
                    "q": "What happens if you pass a string to a function type-hinted to expect an integer?",
                    "options": [
                        "Python instantly crashes",
                        "It runs fine, but static linters will flag an error",
                        "It converts the string to an int automatically"
                    ],
                    "ans": 1
                }
            ],
            "exercise": "Define a type-hinted function `greet` that takes a string `name` and returns a string.",
            "starter_code": "def greet(name: str) -> str:\n    return 'Hello ' + name\nprint(greet('AI'))",
            "expected_output": "Hello AI"
        },
        {
            "title": "2. Advanced Data Structures",
            "theory": "Data structures are the architectural blueprints for how data is stored and retrieved in memory. Standard lists are versatile but highly inefficient for searching, taking O(N) linear time to scan. In performance-critical AI systems, choosing the correct optimized data structure is non-negotiable.\n\nSets are built upon Hash Tables, allowing for lightning-fast O(1) membership testing and deduplication. If you need to check if an element exists among millions of records, a Set accomplishes this instantly. Tuples are immutable arrays; once created in memory, they cannot be altered. This immutability ensures data integrity for critical hyperparameter configurations and allows them to be used as dictionary keys. Dictionaries (Hash Maps) map unique keys to values, forming the absolute backbone of JSON web APIs, configurations, and internal state management in frameworks like PyTorch.",
            "theory_tamil": "தரவுக் கட்டமைப்புகள் (Data structures) என்பவை தரவுகள் memory-ல் எவ்வாறு சேமிக்கப்பட்டு மீட்டெடுக்கப்படுகின்றன என்பதற்கான வரைபடங்களாகும். சாதாரண Lists பல்துறை பயன்பாடு கொண்டவை என்றாலும், தரவை தேடுவதற்கு O(N) நேரம் எடுப்பதால் அவை மெதுவானவை. அதிக செயல்திறன் தேவைப்படும் AI அமைப்புகளில், சரியான optimize செய்யப்பட்ட data structure-ஐத் தேர்ந்தெடுப்பது கட்டாயமாகும்.\n\nSets என்பவை Hash Tables அடிப்படையில் அமைந்தவை, இதனால் ஒரு தரவு உள்ளதா என்பதை O(1) நேரத்தில் (கணப்பொழுதில்) கண்டுபிடிக்க முடியும். பல மில்லியன் தரவுகளில் ஒரு மதிப்பு உள்ளதா எனத் தேட Set பயன்படுகிறது. Tuples என்பவை மாற்ற முடியாத (immutable) arrays. இவை memory-ல் உருவான பின் மாற்றி அமைக்க முடியாதவை. இந்தத் தன்மை, முக்கிய configurations மாறாமல் பாதுகாக்க உதவுகிறது. Dictionaries (Hash Maps) என்பவை Keys-ஐ Values-உடன் இணைக்கின்றன. JSON APIs மற்றும் PyTorch போன்ற frameworks-ன் உள் கட்டமைப்புகளுக்கு இவையே ஆணிவேராகும்.",
            "code": "from typing import Dict, Set, Tuple\n\n# Sets guarantee O(1) membership checks and instant deduplication\nactive_users: Set[str] = {'user_101', 'user_202', 'user_101'}\n\n# Tuples guarantee immutability (read-only state)\nhyperparams: Tuple[float, int] = (0.001, 64) \n\n# Dictionaries form the backbone of configuration payloads\nmodel_config: Dict[str, any] = {\n    'learning_rate': hyperparams[0],\n    'batch_size': hyperparams[1],\n    'optimizer': 'AdamW'\n}",
            "code_breakdown": [
                "Set[str]: A set of strings. The duplicate 'user_101' is instantly destroyed.",
                "Tuple[float, int]: A fixed-size, immutable array. Attempting to change hyperparams[0] will throw an error.",
                "Dict[str, any]: Standard pattern for flexible ML configurations."
            ],
            "interviews": [
                {
                    "q": "Explain the time complexity difference between checking if an item exists in a List vs a Set.",
                    "a": "A List requires iterating through potentially every element, making it O(N) time complexity. A Set hashes the element and looks up its memory address directly, making it O(1) constant time complexity."
                }
            ],
            "quizzes": [
                {
                    "q": "Which data structure is immutable and can be used as a Dictionary key?",
                    "options": [
                        "List",
                        "Set",
                        "Tuple"
                    ],
                    "ans": 2
                }
            ],
            "exercise": "Remove duplicates from the list by converting it to a set, then check if 'Adam' exists in it.",
            "starter_code": "opts = ['Adam', 'SGD', 'Adam']\nopts_set = set(opts)\nprint('Adam' in opts_set)",
            "expected_output": "True"
        },
        {
            "title": "3. Functions & Scopes",
            "theory": "In Python, functions are 'first-class citizens', meaning they are objects that can be assigned to variables, passed into other functions as arguments, and returned from other functions. This functional programming paradigm is crucial for writing clean, composable AI architectures and building complex data transformation pipelines.\n\nFurthermore, mastering function signatures via `*args` and `**kwargs` allows you to create highly flexible, variadic functions. `*args` packs an infinite number of positional arguments into a Tuple, while `**kwargs` packs keyword arguments into a Dictionary. This pattern is extensively used in almost every major ML library (like Scikit-Learn and PyTorch) to allow developers to pass dynamic configuration parameters without explicitly hardcoding hundreds of arguments in the function definition.",
            "theory_tamil": "Python-ல் functions என்பவை 'first-class citizens'. அதாவது, அவற்றை variables-க்கு assign செய்யலாம், மற்ற functions-க்குள் arguments ஆக அனுப்பலாம். இந்த Functional Programming முறை, தெளிவான AI கட்டமைப்புகளை உருவாக்கவும், சிக்கலான data pipelines-ஐ கையாளவும் மிகவும் முக்கியமானது.\n\nமேலும், `*args` மற்றும் `**kwargs` மூலம் நெகிழ்வான (flexible) functions-ஐ உருவாக்கலாம். `*args` பல positional arguments-ஐ ஒரு Tuple ஆகவும், `**kwargs` பல keyword arguments-ஐ ஒரு Dictionary ஆகவும் மாற்றுகின்றன. Scikit-Learn மற்றும் PyTorch போன்ற பெரிய ML libraries-ல், நூற்றுக்கணக்கான arguments-ஐ hardcode செய்யாமல், மாறும் parameters-ஐ (dynamic configurations) அனுப்ப இந்த முறை பெருமளவில் பயன்படுத்தப்படுகிறது.",
            "code": "def build_model(architecture: str, *layers: int, **kwargs):\n    print(f\"Building {architecture} Architecture...\")\n    print(f\"Hidden Layers: {layers}\")\n    \n    # Iterate through dynamic configuration dictionary\n    for param, value in kwargs.items():\n        print(f\"Config - {param}: {value}\")\n\n# We pass variable positional args (128, 64) and variable kwargs (dropout, activation)\nbuild_model('DeepNet', 128, 64, dropout=0.2, activation='relu')",
            "code_breakdown": [
                "*layers: Collects all extra positional arguments (128, 64) into a Tuple.",
                "**kwargs: Collects all explicitly named keyword arguments into a Dictionary.",
                "kwargs.items(): Extracts the key-value pairs for iteration."
            ],
            "interviews": [
                {
                    "q": "What is variable shadowing in Python scope?",
                    "a": "Variable shadowing occurs when a variable declared within a local scope (like inside a function) has the same name as a variable in the outer global scope. The local variable 'shadows' the global one, preventing access to the global variable within that function."
                }
            ],
            "quizzes": [
                {
                    "q": "If you pass 3 extra positional arguments to a function with *args, what data structure does *args become?",
                    "options": [
                        "Dictionary",
                        "Tuple",
                        "List"
                    ],
                    "ans": 1
                }
            ],
            "exercise": "Print the length of the kwargs dictionary.",
            "starter_code": "def count_kwargs(**kwargs):\n    print(len(kwargs))\ncount_kwargs(a=1, b=2)",
            "expected_output": "2"
        },
        {
            "title": "4. Object-Oriented ML",
            "theory": "Object-Oriented Programming (OOP) is the definitive paradigm used to abstract complex Artificial Intelligence models. In the OOP paradigm, an AI model is conceptualized as a `Class` blueprint. When instantiated into an object, the model's internal weights, biases, and hyperparameter states are stored as instance attributes (variables attached to `self`). The model's behaviors—such as its forward pass predicting data, or its backward pass learning from error—are defined as methods (functions attached to the class).\n\nOOP allows for immense architectural flexibility through Inheritance and Polymorphism. In PyTorch, every single neural network you build will inherit from the base `nn.Module` class, allowing your custom network to automatically inherit powerful internal mechanics (like gradient tracking and parameter management) without having to write them from scratch.",
            "theory_tamil": "Object-Oriented Programming (OOP) மூலமே சிக்கலான AI மாதிரிகள் (models) வடிவமைக்கப்படுகின்றன. OOP முறையில், ஒரு AI model என்பது ஒரு `Class` blueprint ஆகக் கருதப்படுகிறது. அதை ஒரு object ஆக உருவாக்கும்போது, model-ன் weights, biases மற்றும் hyperparameters ஆகியவை அதனுடைய properties (அதாவது `self`-உடன் இணைக்கப்பட்ட variables) ஆக சேமிக்கப்படுகின்றன. Data-ஐ கணிக்கும் forward pass அல்லது பிழையிலிருந்து கற்கும் backward pass ஆகியவை methods (செயல்பாடுகள்) ஆக வரையறுக்கப்படுகின்றன.\n\nOOP-ன் Inheritance மற்றும் Polymorphism மூலம் மிகச் சிறந்த கட்டமைப்பு நெகிழ்வுத்தன்மை (architectural flexibility) கிடைக்கிறது. PyTorch-ல் நீங்கள் உருவாக்கும் ஒவ்வொரு neural network-ம் `nn.Module` என்ற அடிப்படை class-ல் இருந்து inherit செய்யப்படும். இதனால், gradient tracking போன்ற கடினமான அம்சங்களை நீங்கள் புதிதாக எழுதத் தேவையில்லை, அவை தானாகவே உங்கள் network-க்கு கிடைக்கும்.",
            "code": "class MLModel:\n    # Constructor initializes the state of the object\n    def __init__(self, model_name: str):\n        self.model_name = model_name\n        self.is_trained = False\n        self.weights = None\n        \n    # Method defines the behavior of the object\n    def fit(self, data: list):\n        print(f'Training {self.model_name} on {len(data)} samples...')\n        self.weights = [0.5, -0.2, 0.8] # Simulated learned weights\n        self.is_trained = True\n        print('Training Complete.')\n\nmodel = MLModel('RandomForest')\nmodel.fit([10, 20, 30])",
            "code_breakdown": [
                "__init__: The constructor method that fires automatically when the object is instantiated.",
                "self: A mandatory reference to the specific instance of the object in memory, allowing access to its isolated state.",
                "model = MLModel(): Instantiates a new object from the MLModel blueprint."
            ],
            "interviews": [
                {
                    "q": "What is the concept of Encapsulation in OOP?",
                    "a": "Encapsulation is the bundling of data (attributes) and methods that operate on that data into a single unit (a class), and restricting direct outside access to some of the object's internal state (using private variables like `_weights`) to prevent unintended interference."
                }
            ],
            "quizzes": [
                {
                    "q": "Which of the following is true about the `self` parameter?",
                    "options": [
                        "It is a reserved Python keyword that cannot be renamed.",
                        "It refers to the blueprint class itself.",
                        "It refers to the specific object instance being created."
                    ],
                    "ans": 2
                }
            ],
            "exercise": "Print the model's `is_trained` attribute after initialization.",
            "starter_code": "class Net:\n    def __init__(self):\n        self.is_trained = False\nprint(Net().is_trained)",
            "expected_output": "False"
        },
        {
            "title": "5. Generators & Decorators",
            "theory": "When training AI models on massive, terabyte-sized datasets (like millions of high-res images), standard lists will instantly crash your system via an Out-Of-Memory (OOM) error. Generators solve this. Using the `yield` keyword, a generator acts as a lazy evaluator, pausing its execution and generating data exactly one batch at a time, keeping RAM utilization incredibly low.\n\nDecorators are a powerful metaprogramming feature in Python. They allow you to 'decorate' a function with another function, dynamically altering its behavior without permanently modifying its source code. In MLOps, decorators are heavily used for applying authentication checks to API endpoints, implementing retry logic for brittle network calls, or logging the execution time of slow training loops.",
            "theory_tamil": "மில்லியன் கணக்கான images போன்ற terabyte அளவிலான பெரிய datasets-ல் AI models-ஐ train செய்யும்போது, சாதாரண lists உங்கள் system-ல் Out-Of-Memory (OOM) error-ஐ ஏற்படுத்தி செயலிழக்கச் செய்யும். Generators இதற்கு சிறந்த தீர்வாகும். `yield` keyword-ஐப் பயன்படுத்தி, ஒரு generator தரவை (data) ஒரேயடியாக ஏற்றாமல், தேவைப்படும்போது ஒவ்வொரு batch ஆகக் கொடுக்கிறது. இதனால் RAM பயன்பாடு மிகக் குறைவாக இருக்கும்.\n\nDecorators என்பவை Python-ல் உள்ள ஒரு சக்திவாய்ந்த metaprogramming அம்சமாகும். ஒரு function-ன் source code-ஐ மாற்றாமலேயே, அதன் செயல்பாட்டை மாற்றி அமைக்க (decorate) இது உதவுகிறது. MLOps-ல் API endpoints-க்கு authentication சரிபார்க்க, தோல்வியடையும் network calls-ஐ மீண்டும் முயற்சிக்க (retry logic), அல்லது மெதுவான training loops-ன் execution time-ஐ log செய்ய decorators பெருமளவில் பயன்படுகின்றன.",
            "code": "import time\n\n# A decorator that measures how long a function takes to execute\ndef time_execution(func):\n    def wrapper(*args, **kwargs):\n        start_time = time.time()\n        result = func(*args, **kwargs)\n        end_time = time.time()\n        print(f\"Execution Time: {end_time - start_time:.4f} seconds\")\n        return result\n    return wrapper\n\n# A generator simulating reading massive chunks of data lazily\ndef load_data_lazily():\n    for i in range(1, 4):\n        yield f\"Batch_{i}\"\n        time.sleep(0.1) # Simulate slow disk I/O\n\n@time_execution\ndef training_loop():\n    # The loop consumes the generator one batch at a time\n    for batch in load_data_lazily():\n        pass\n\ntraining_loop()",
            "code_breakdown": [
                "@time_execution: Syntactic sugar that passes the training_loop() function into the time_execution() function.",
                "wrapper(*args, **kwargs): Ensures the decorator can accept and pass along any arguments given to the original function.",
                "yield: Pauses the generator's state, returning the current batch, and waits to be called again."
            ],
            "interviews": [
                {
                    "q": "What happens internally when a function hits a `yield` statement?",
                    "a": "The function's state (including local variables and execution pointer) is completely frozen and saved in memory. It yields the value back to the caller, and only resumes execution from that exact frozen point when `next()` is called again."
                }
            ],
            "quizzes": [
                {
                    "q": "Why are Generators critical for Deep Learning data pipelines?",
                    "options": [
                        "They train models faster on GPUs.",
                        "They prevent RAM exhaustion by loading data sequentially.",
                        "They automatically normalize image pixels."
                    ],
                    "ans": 1
                }
            ],
            "exercise": "Write a generator yielding 1 then 2, and print the list.",
            "starter_code": "def gen():\n    yield 1\n    yield 2\nprint(list(gen()))",
            "expected_output": "[1, 2]"
        }
    ],
    "Phase 2: The Data Science Toolkit": [
        {
            "title": "6. NumPy & Linear Algebra",
            "theory": "NumPy (Numerical Python) is the absolute foundation of the entire data science and machine learning ecosystem. Under the hood, Python lists are fragmented arrays of pointers to scattered objects in memory, making numerical loops agonizingly slow. NumPy replaces these with contiguous C-backed arrays, ensuring extreme cache-locality and blistering performance.\n\nThe true power of NumPy lies in Vectorization and Linear Algebra. Vectorization allows you to apply mathematical operations across entire arrays simultaneously without writing explicit `for` loops in Python. Furthermore, operations like the Matrix Dot Product (`np.dot` or `@`) form the core mathematics behind every forward pass in deep neural networks. Understanding matrix dimensions, broadcasting (extending smaller matrices to match larger ones), and tensor operations is non-negotiable for AI engineering.",
            "theory_tamil": "NumPy (Numerical Python) என்பது முழு Data Science மற்றும் Machine Learning-க்கான அடிப்படை அஸ்திவாரமாகும். பொதுவாக Python lists என்பவை memory-ல் ஆங்காங்கே சிதறிக் கிடக்கும் objects-ஐக் குறிக்கும் pointers ஆகும், இதனால் எண்களை loop செய்வது மிகவும் மெதுவாக இருக்கும். NumPy இதை மாற்றி, C-மொழியில் எழுதப்பட்ட contiguous (தொடர்ச்சியான) arrays-ஐ பயன்படுத்துகிறது. இதனால் cache-locality மற்றும் அதிவேக performance கிடைக்கிறது.\n\nNumPy-ன் உண்மையான சக்தி Vectorization மற்றும் Linear Algebra ஆகியவற்றில் உள்ளது. Vectorization மூலம், Python-ல் `for` loops எழுதாமலேயே முழு arrays-க்கும் ஒரே நேரத்தில் கணித செயல்பாடுகளைச் செய்ய முடியும். மேலும், Matrix Dot Product (`np.dot` அல்லது `@`) போன்ற செயல்பாடுகளே neural networks-ன் forward pass-க்கான முக்கிய கணிதமாகும். Matrix dimensions, broadcasting (சிறிய matrices-ஐ பெரிய matrices-க்கு ஏற்ப மாற்றுதல்), மற்றும் tensor operations ஆகியவற்றைப் புரிந்துகொள்வது AI பொறியியலுக்கு மிகவும் கட்டாயமாகும்.",
            "code": "import numpy as np\n\n# Creating highly optimized 2D Matrices\nX = np.array([[1, 2], \n              [3, 4]])\n              \n# Weights Matrix\nW = np.array([[0.5, 0.5], \n              [0.5, 0.5]])\n\n# Vectorized matrix dot product (The core of Neural Networks)\noutput = np.dot(X, W) # Or X @ W\n\n# Broadcasting: Adding a scalar to a matrix instantly\noutput = output + 1.5 \n\nprint(output.shape)",
            "code_breakdown": [
                "np.array(): Instantiates the highly optimized, homogeneous N-dimensional array.",
                "np.dot(X, W): Computes the dot product. Row 1 of X is multiplied with Col 1 of W, returning the new matrix.",
                "output + 1.5: Broadcasting automatically expands the scalar 1.5 into a 2x2 matrix to complete the addition instantly."
            ],
            "interviews": [
                {
                    "q": "Explain Locality of Reference and why it makes NumPy faster than Python lists.",
                    "a": "Python lists store elements scattered randomly across memory (Heap). NumPy arrays store elements side-by-side in a single contiguous block of memory. The CPU cache can load this block all at once (Spatial Locality), making access times orders of magnitude faster."
                }
            ],
            "quizzes": [
                {
                    "q": "What is the NumPy feature that allows operations between arrays of different shapes?",
                    "options": [
                        "Vectorization",
                        "Broadcasting",
                        "Slicing"
                    ],
                    "ans": 1
                }
            ],
            "exercise": "Print the shape of a 2x3 matrix of ones.",
            "starter_code": "import numpy as np\nprint(np.ones((2,3)).shape)",
            "expected_output": "(2, 3)"
        },
        {
            "title": "7. Pandas DataFrames & Pipelines",
            "theory": "Pandas is the industry-standard library for tabular data manipulation. While NumPy handles raw tensors, Pandas introduces the `DataFrame`—a powerful, programmatic equivalent of an Excel spreadsheet equipped with labeled columns, mixed data types, and sophisticated index alignment mechanisms.\n\nReal-world data is notoriously messy. It contains missing values, extreme outliers, mismatched datetime formats, and corrupt strings. As an AI engineer, a massive portion of your time is spent in Pandas performing 'Data Wrangling' or 'ETL' (Extract, Transform, Load). Instead of mutating dataframes in a chaotic, bug-prone way, professionals build robust Pandas Method-Chaining pipelines. This functional approach applies transformations sequentially, explicitly dropping NaNs, engineering new features, and scaling metrics while preserving the integrity of the original dataset.",
            "theory_tamil": "Pandas என்பது tabular data (அட்டவணை தரவு) கையாளுவதற்கான industry-standard library ஆகும். NumPy raw tensors-ஐ கையாளும் நிலையில், Pandas `DataFrame`-ஐ அறிமுகப்படுத்துகிறது. இது Excel spreadsheet போன்ற ஒரு சக்திவாய்ந்த programmatic அமைப்பாகும். இதில் labeled columns, mixed data types மற்றும் சிறந்த index alignment வசதிகள் உள்ளன.\n\nஉண்மையான உலகத் தரவுகள் (Real-world data) எப்போதுமே குறைபாடுகள் நிறைந்தவை. அதில் விடுபட்ட மதிப்புகள் (missing values), outliers, தவறான datetime formats மற்றும் பிழையான strings இருக்கும். ஒரு AI பொறியியலாளராக, உங்களின் பெரும்பாலான நேரம் Pandas-ல் 'Data Wrangling' அல்லது 'ETL' (Extract, Transform, Load) செய்வதிலேயே செலவாகும். Dataframes-ஐ கண்டபடி மாற்றுவதற்குப் பதிலாக, வல்லுநர்கள் Pandas Method-Chaining pipelines-ஐ உருவாக்குகிறார்கள். இந்த முறையின் மூலம், விடுபட்ட தரவுகளை நீக்குதல், புதிய features உருவாக்குதல் ஆகியவற்றை வரிசையாகவும் பாதுகாப்பாகவும் செய்யலாம்.",
            "code": "import pandas as pd\nimport numpy as np\n\nraw_data = {'Name': ['A', 'B', 'C'], 'Age': [25, np.nan, 30], 'Salary': [50000, 60000, 70000]}\ndf = pd.DataFrame(raw_data)\n\n# Professional Method Chaining Pipeline for Data Cleaning\nclean_df = (\n    df.copy()\n    .dropna(subset=['Age']) # Drop rows where Age is missing\n    .assign(Salary_Bonus=lambda x: x['Salary'] * 1.1) # Engineer a new feature on the fly\n    .rename(columns={'Name': 'Employee_Name'})\n)\n\nprint(clean_df.shape)",
            "code_breakdown": [
                ".copy(): Ensures we don't accidentally mutate the original raw dataset in memory.",
                ".dropna(subset=['Age']): Prevents the ML model from crashing by ejecting rows with Null values in the critical Age column.",
                ".assign(lambda x: ...): Dynamically creates a new column based on existing data without breaking the chain."
            ],
            "interviews": [
                {
                    "q": "What is the difference between `.loc` and `.iloc` in Pandas?",
                    "a": "`.loc` is label-based indexing, meaning you select rows/columns by their explicit string names or index labels. `.iloc` is integer-position-based indexing, meaning you select rows/columns strictly by their numerical 0-based index."
                }
            ],
            "quizzes": [
                {
                    "q": "Which method is the safest way to create new columns dynamically in a Pandas pipeline?",
                    "options": [
                        "df['new'] = ...",
                        "df.insert()",
                        "df.assign()"
                    ],
                    "ans": 2
                }
            ],
            "exercise": "Print the number of columns in df.",
            "starter_code": "import pandas as pd\ndf = pd.DataFrame({'A': [1], 'B': [2]})\nprint(df.shape[1])",
            "expected_output": "2"
        },
        {
            "title": "8. EDA & Visualization",
            "theory": "Exploratory Data Analysis (EDA) is the critical investigative phase of any machine learning project. The golden rule of AI is 'Garbage In, Garbage Out'. If you feed a model heavily skewed, highly correlated, or outlier-ridden data, the resulting predictions will be fundamentally flawed. EDA acts as our diagnostic tool to uncover the underlying statistical reality of the dataset.\n\nWe utilize visualization libraries like Matplotlib and Seaborn to graphically interpret complex data. Histograms reveal whether continuous features follow a normal Gaussian distribution or are skewed. Boxplots instantly flag extreme statistical anomalies (outliers). Heatmaps utilizing the Pearson Correlation Coefficient expose multicollinearity—when two features are so highly correlated that they provide redundant information, confusing the model. Thorough EDA heavily dictates the feature engineering steps required in the next phase.",
            "theory_tamil": "Exploratory Data Analysis (EDA) என்பது எந்தவொரு ML திட்டத்தின் முக்கிய ஆய்வுக் கட்டமாகும். AI-ன் பொன்விதி 'Garbage In, Garbage Out'. ஒரு model-க்கு முரண்பாடான, மிக அதிக correlation உள்ள, அல்லது outliers நிறைந்த தரவுகளைக் கொடுத்தால், அதன் கணிப்புகள் (predictions) முற்றிலும் தவறாகிவிடும். தரவுகளின் உண்மையான புள்ளிவிவர நிலையைக் கண்டறிய EDA ஒரு பரிசோதனை கருவியாகச் செயல்படுகிறது.\n\nசிக்கலான தரவுகளை வரைபடங்கள் மூலம் புரிந்துகொள்ள Matplotlib மற்றும் Seaborn போன்ற visualization libraries-ஐ பயன்படுத்துகிறோம். Histograms, தரவுகள் normal Gaussian distribution-ல் உள்ளதா அல்லது கோணலாக உள்ளதா என்பதைக் காட்டுகின்றன. Boxplots மிகத் துல்லியமாக outliers-ஐ சுட்டிக்காட்டுகின்றன. Pearson Correlation Coefficient-ஐப் பயன்படுத்தும் Heatmaps, இரண்டு features ஒன்றுக்கொன்று மிக நெருங்கிய தொடர்புடையதாக இருந்து மாடலைக் குழப்பும் நிலையை (multicollinearity) வெளிப்படுத்துகின்றன. இந்த EDA ஆய்வே, அடுத்த கட்டத்தில் எத்தகைய feature engineering தேவை என்பதைத் தீர்மானிக்கிறது.",
            "code": "import matplotlib.pyplot as plt\nimport seaborn as sns\nimport numpy as np\nimport pandas as pd\n\n# Generate synthetic correlated data\nnp.random.seed(42)\nage = np.random.normal(30, 10, 1000)\nincome = age * 2000 + np.random.normal(0, 10000, 1000)\ndf = pd.DataFrame({'Age': age, 'Income': income})\n\n# 1. Plotting a Correlation Heatmap (Pseudo-execution)\ncorrelation_matrix = df.corr()\n# sns.heatmap(correlation_matrix, annot=True, cmap='coolwarm')\n\n# 2. Plotting a Distribution with KDE\n# sns.histplot(df['Income'], kde=True)\n\nprint('Visualization Diagnostics Complete')",
            "code_breakdown": [
                "df.corr(): Calculates the pairwise Pearson correlation of columns. Values near 1 or -1 indicate strong linear relationships.",
                "sns.heatmap(): Renders a color-coded matrix. Dark red indicates high positive correlation.",
                "kde=True: Kernel Density Estimate overlays a smooth probability density curve on top of the histogram."
            ],
            "interviews": [
                {
                    "q": "What is Multicollinearity and why is it dangerous for models like Linear Regression?",
                    "a": "Multicollinearity occurs when independent features are highly correlated with each other (e.g., 'Years of Experience' and 'Age'). It destabilizes the mathematical calculation of feature weights (coefficients), making it impossible to determine which feature actually drives the prediction."
                }
            ],
            "quizzes": [
                {
                    "q": "Which plot is universally used to detect statistical outliers via the Interquartile Range (IQR)?",
                    "options": [
                        "Scatter Plot",
                        "Box Plot",
                        "Histogram"
                    ],
                    "ans": 1
                }
            ],
            "exercise": "Print 'EDA Complete'.",
            "starter_code": "print('EDA Complete')",
            "expected_output": "EDA Complete"
        }
    ],
    "Phase 3: Traditional Machine Learning": [
        {
            "title": "9. Supervised ML & Pipelines",
            "theory": "Supervised Machine Learning relies on algorithms mapping labeled inputs (Features, `X`) to known outputs (Targets, `y`). However, algorithms like Logistic Regression or Support Vector Machines cannot process raw data effectively. The data must first be mathematically transformed: categorical text must be One-Hot Encoded, and varying numerical ranges (like Age vs Income) must be Standardized so that large numbers don't unfairly dominate the gradient descent process.\n\nAmateur data scientists apply these transformations manually to their training set and then separately to their test set. This frequently causes 'Data Leakage'—where statistical properties of the test set leak into the training process, causing overly optimistic accuracy scores. To prevent this, Scikit-Learn provides the `Pipeline` object. Pipelines fuse the preprocessing steps and the model into a single cohesive unit, guaranteeing that test data is completely isolated and transformed exactly like the training data.",
            "theory_tamil": "Supervised Machine Learning ஆனது labeled தரவுகளை (Features, `X`) அறியப்பட்ட முடிவுகளுடன் (Targets, `y`) பொருத்தும் algorithms-ஐ நம்பியுள்ளது. இருப்பினும், Logistic Regression அல்லது SVM போன்ற algorithms மூலத் தரவை (raw data) நேரடியாகக் கையாள முடியாது. Categorical text-ஐ One-Hot Encode செய்ய வேண்டும், மற்றும் வெவ்வேறு எண் அளவீடுகளை (எ.கா. Age vs Income) Standardize செய்ய வேண்டும், இதனால் பெரிய எண்கள் gradient descent செயல்முறையை ஆக்கிரமிப்பதைத் தடுக்கலாம்.\n\nபுதிய data scientists இந்த மாற்றங்களை train set-க்கும் test set-க்கும் தனித்தனியாக செய்வார்கள். இதனால் 'Data Leakage' ஏற்படுகிறது—அதாவது test set-ன் புள்ளிவிவரங்கள் training செயல்முறைக்குள் கசிந்து, accuracy முடிவுகளை மிகைப்படுத்திக் காட்டும். இதைத் தடுக்க, Scikit-Learn `Pipeline` object-ஐ வழங்குகிறது. Pipelines, தரவு மாற்றங்களையும் model-ஐயும் ஒரே கட்டமைப்பாக இணைத்து, test data முற்றிலுமாக தனிமைப்படுத்தப்பட்டு train data போலவே மாற்றப்படுவதை உறுதி செய்கின்றன.",
            "code": "from sklearn.pipeline import Pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.ensemble import RandomForestClassifier\n\n# Constructing a robust ML Pipeline\nml_pipeline = Pipeline([\n    # Step 1: Scale features to have mean=0 and variance=1\n    ('scaler', StandardScaler()),\n    # Step 2: Define the estimator algorithm\n    ('classifier', RandomForestClassifier(n_estimators=100, random_state=42))\n])\n\n# Simulated execution to prevent Data Leakage\n# ml_pipeline.fit(X_train, y_train) \n# predictions = ml_pipeline.predict(X_test)\nprint('Robust ML Pipeline Built')",
            "code_breakdown": [
                "StandardScaler(): standardizes features by removing the mean and scaling to unit variance. Z = (x - u) / s.",
                "RandomForestClassifier(): An ensemble learning method that constructs a multitude of decision trees and outputs the mode of their classes.",
                "Pipeline(): Encapsulates the scaler and classifier. When .predict(X_test) is called, it scales X_test using the parameters learned STRICTLY from X_train."
            ],
            "interviews": [
                {
                    "q": "Explain Data Leakage and how Pipelines prevent it.",
                    "a": "Data leakage occurs when you fit a scaler (like StandardScaler) on your ENTIRE dataset before splitting it. This means the scaler learns the mean/variance of the Test data, giving the model an unfair advantage. A Pipeline ensures the scaler is fit ONLY on the Training data during cross-validation."
                }
            ],
            "quizzes": [
                {
                    "q": "Which scaler is highly sensitive to outliers and scales data strictly between 0 and 1?",
                    "options": [
                        "StandardScaler",
                        "RobustScaler",
                        "MinMaxScaler"
                    ],
                    "ans": 2
                }
            ],
            "exercise": "Print 'Pipeline Ready'.",
            "starter_code": "print('Pipeline Ready')",
            "expected_output": "Pipeline Ready"
        },
        {
            "title": "10. Model Evaluation Metrics",
            "theory": "Relying purely on 'Accuracy' is the most common pitfall for junior ML engineers. In imbalanced datasets—such as detecting credit card fraud where 99.9% of transactions are legitimate—a model that blindly guesses 'Not Fraud' every single time will achieve 99.9% Accuracy, yet it is completely useless.\n\nInstead, professionals dissect the Confusion Matrix using targeted metrics. **Precision** measures quality: out of all the cases the model flagged as fraud, how many were actually fraud? High precision minimizes False Positives (false alarms). **Recall** measures quantity: out of all the actual fraud cases in reality, how many did the model detect? High recall minimizes False Negatives (missed frauds). Because there is a mathematical tradeoff between the two, the **F1-Score** combines them into a harmonic mean, providing a single, trustworthy metric for evaluating highly skewed classification systems.",
            "theory_tamil": "சாதாரண 'Accuracy'-ஐ மட்டுமே நம்பியிருப்பது ML பொறியியலாளர்கள் செய்யும் மிகப் பெரிய தவறாகும். Imbalanced datasets-ல்—உதாரணமாக 99.9% பரிவர்த்தனைகள் உண்மையானதாக இருக்கும் credit card மோசடி கண்டறிதலில்—ஒரு model எல்லாமே 'மோசடி இல்லை' என கணித்தால் 99.9% Accuracy கிடைக்கும், ஆனால் அது முற்றிலும் பயனற்றது.\n\nஇதற்குப் பதிலாக வல்லுநர்கள் Confusion Matrix-ஐப் பயன்படுத்தி குறிப்பிட்ட அளவீடுகளை (metrics) ஆராய்கின்றனர். **Precision** தரத்தை அளவிடுகிறது: மாடல் 'மோசடி' என கணித்தவற்றில் உண்மையில் எத்தனை மோசடி? அதிக precision False Positives-ஐக் (false alarms) குறைக்கிறது. **Recall** அளவை அளவிடுகிறது: உண்மையில் நடந்த மொத்த மோசடிகளில் மாடல் எத்தனையைக் கண்டுபிடித்தது? அதிக recall False Negatives-ஐக் (தவறவிடப்பட்ட மோசடிகள்) குறைக்கிறது. இவையிரண்டுக்கும் இடையே முரண்பாடு இருப்பதால், **F1-Score** இவை இரண்டையும் இணைத்து harmonic mean-ஐ வழங்குகிறது. இது imbalanced datasets-ஐ மதிப்பிட மிகவும் நம்பகமான அளவீடாகும்.",
            "code": "from sklearn.metrics import classification_report, confusion_matrix\n\n# Imbalanced medical scenario (0: Healthy, 1: Cancer)\ny_true = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1] # 8 Healthy, 2 Cancer\ny_pred = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1] # Model missed one cancer patient\n\n# Confusion matrix reveals True Positives, False Positives, etc.\n# cm = confusion_matrix(y_true, y_pred)\n\n# Generates Precision, Recall, and F1-Score for each class automatically\nreport = classification_report(y_true, y_pred, zero_division=0)\nprint('Evaluation Metrics Calculated')",
            "code_breakdown": [
                "y_true / y_pred: The ground truth reality vs the model's actual predictions.",
                "False Negative (FN): The model predicted 0 (Healthy), but the reality was 1 (Cancer). This is a catastrophic failure in medicine.",
                "classification_report: Automatically computes the harmonic mean (F1-score) and support (number of occurrences in the dataset)."
            ],
            "interviews": [
                {
                    "q": "When building an email spam filter, which metric would you optimize for and why?",
                    "a": "Precision. A False Positive means a highly critical work email gets sent to the spam folder and deleted. It is better to have lower Recall (a few spam emails hit the inbox) than to ruin the user experience by deleting vital emails."
                }
            ],
            "quizzes": [
                {
                    "q": "Which metric focuses strictly on minimizing False Negatives?",
                    "options": [
                        "Precision",
                        "Recall",
                        "Specificity"
                    ],
                    "ans": 1
                }
            ],
            "exercise": "Print 'Metrics Validated'.",
            "starter_code": "print('Metrics Validated')",
            "expected_output": "Metrics Validated"
        },
        {
            "title": "11. Hyperparameter Tuning",
            "theory": "Algorithms possess two types of parameters. Internal parameters (like the weights in a neural network or the slope in linear regression) are mathematically learned from the data during training. Hyperparameters (like the depth of a decision tree or the learning rate) are architectural configurations set manually by the engineer before training begins. Choosing the wrong hyperparameters can lead to severe Underfitting (the model learns nothing) or Overfitting (the model memorizes the data perfectly but fails in the real world).\n\nTo find the optimal hyperparameters, we cannot simply train and test multiple variations, as this leads to overfitting on the test set. Instead, we use K-Fold Cross Validation. The training data is split into K chunks. The model trains on K-1 chunks and validates on the remaining chunk, rotating until every chunk has been a validation set. We automate this exhaustive search over a matrix of possibilities using Scikit-Learn's `GridSearchCV` or optimize search speed using `RandomizedSearchCV`.",
            "theory_tamil": "Algorithms-ல் இரண்டு வகையான parameters உள்ளன. Internal parameters (எ.கா. neural network-ன் weights) பயிற்சி (training) மூலம் தரவிலிருந்து தானாகவே கற்கப்படுகின்றன. Hyperparameters (எ.கா. decision tree-ன் ஆழம், learning rate) பயிற்சி தொடங்கும் முன்பே பொறியாளரால் அமைக்கப்படும் கட்டமைப்புகள் ஆகும். தவறான hyperparameters-ஐ அமைத்தால் அது Underfitting-க்கு (மாடல் எதையும் கற்காது) அல்லது Overfitting-க்கு (மாடல் தரவை மனப்பாடம் செய்துவிடும், ஆனால் புதிய தரவில் தோல்வியடையும்) வழிவகுக்கும்.\n\nசரியான hyperparameters-ஐக் கண்டறிய, பல வகைகளில் train செய்து test செய்வது மட்டும் போதாது, இது test set-ல் overfitting-ஐ ஏற்படுத்தும். இதற்குப் பதிலாக, நாம் K-Fold Cross Validation-ஐ பயன்படுத்துகிறோம். Training data K பகுதிகளாகப் பிரிக்கப்படுகிறது. மாடல் K-1 பகுதிகளில் train செய்யப்பட்டு மீதமுள்ள 1 பகுதியில் validate செய்யப்படுகிறது. இது எல்லாப் பகுதிகளும் validate செய்யப்படும் வரை சுழலும். Scikit-Learn-ன் `GridSearchCV` அல்லது `RandomizedSearchCV` மூலம் இந்த தேடலை (search) நாம் தானியங்குபடுத்துகிறோம்.",
            "code": "from sklearn.model_selection import GridSearchCV\nfrom sklearn.svm import SVC\n\n# Defining the hyperparameter search space\nparam_grid = {\n    'C': [0.1, 1, 10, 100], \n    'kernel': ['linear', 'rbf'],\n    'gamma': ['scale', 'auto']\n}\n\n# Initialize exhaustively searching Grid with 5-Fold Cross Validation\ngrid_search = GridSearchCV(estimator=SVC(), param_grid=param_grid, cv=5, scoring='f1')\n\n# grid_search.fit(X_train, y_train)\n# print(grid_search.best_params_)\nprint('Hyperparameter Grid Ready')",
            "code_breakdown": [
                "param_grid: A dictionary of hyperparameters. GridSearchCV will test 4 * 2 * 2 = 16 different model variations.",
                "cv=5: Each of the 16 models will be trained 5 times on different data splits, meaning 80 total training iterations.",
                "scoring='f1': Forces the grid search to optimize for the F1-Score rather than default Accuracy."
            ],
            "interviews": [
                {
                    "q": "Why is RandomizedSearchCV often preferred over GridSearchCV in deep learning?",
                    "a": "GridSearchCV suffers from the 'Curse of Dimensionality'. If you add more hyperparameters, the number of combinations explodes exponentially, taking days to train. RandomizedSearchCV samples a fixed number of random combinations, which studies show yields near-optimal results in a fraction of the compute time."
                }
            ],
            "quizzes": [
                {
                    "q": "In K-Fold Cross Validation (cv=5), what percentage of the training data is used for validation in each fold?",
                    "options": [
                        "5%",
                        "20%",
                        "80%"
                    ],
                    "ans": 1
                }
            ],
            "exercise": "Print 'Tuned'.",
            "starter_code": "print('Tuned')",
            "expected_output": "Tuned"
        }
    ],
    "Phase 4: Deep Learning & PyTorch": [
        {
            "title": "12. PyTorch Tensors & Autograd",
            "theory": "PyTorch is the undisputed heavyweight framework for deep learning research and production. At its core lies the `Tensor`—an N-dimensional array almost identical to a NumPy array, but with one critical superpower: it can be instantly transferred to a GPU (Graphics Processing Unit) to accelerate highly parallel matrix multiplications by orders of magnitude.\n\nHowever, the true magic of PyTorch is its Automatic Differentiation engine, known as `Autograd`. Training a neural network requires calculus (the Chain Rule) to compute gradients—the direction and magnitude required to adjust the weights to lower the error. When you set `requires_grad=True` on a Tensor, PyTorch builds a dynamic computational graph in the background, recording every mathematical operation. When you call `.backward()`, PyTorch traverses this graph backwards, instantly computing the exact partial derivatives for millions of parameters without you writing a single line of calculus.",
            "theory_tamil": "Deep learning ஆராய்ச்சி மற்றும் பயன்பாட்டில் PyTorch-ன் ஆதிக்கம் அளப்பரியது. இதன் மையமாக இருப்பது `Tensor`—இது NumPy array-ஐப் போன்றதே, ஆனால் இதில் ஒரு முக்கிய சக்தி உள்ளது: இதனை உடனடியாக GPU-க்கு (Graphics Processing Unit) மாற்றி, அதிவேக matrix multiplications-ஐ செய்ய முடியும்.\n\nPyTorch-ன் உண்மையான மேஜிக் அதன் Automatic Differentiation engine ஆன `Autograd` ஆகும். ஒரு neural network-ஐ train செய்ய, பிழையை (error) குறைக்க weights-ஐ எவ்வாறு மாற்ற வேண்டும் என்பதைக் கணக்கிட calculus (Chain Rule) தேவைப்படுகிறது. ஒரு Tensor-ல் `requires_grad=True` என அமைக்கும்போது, PyTorch பின்புலத்தில் ஒரு dynamic computational graph-ஐ உருவாக்கி அனைத்து கணித செயல்பாடுகளையும் பதிவு செய்கிறது. நீங்கள் `.backward()` என அழைக்கும்போது, PyTorch இந்த வரைபடத்தின் பின்னோக்கிச் சென்று, நீங்கள் calculus குறியீடுகளை எழுதாமலேயே பல மில்லியன் parameters-க்கான துல்லியமான derivatives-ஐ கணக்கிடுகிறது.",
            "code": "import torch\n\n# Initialize a tensor and tell PyTorch to track its gradients\n# x represents a learnable weight in our network\nx = torch.tensor([3.0], requires_grad=True)\n\n# Forward Pass: A complex mathematical operation (y = 2x^2)\ny = 2 * (x ** 2)\n\n# Backward Pass: PyTorch automatically computes the calculus derivative (dy/dx = 4x)\ny.backward()\n\n# Since x=3, dy/dx = 4(3) = 12.0\nprint(f\"Computed Gradient: {x.grad.item()}\")",
            "code_breakdown": [
                "requires_grad=True: Flags the tensor to be tracked by the Autograd engine.",
                "y.backward(): Triggers backpropagation. PyTorch calculates the derivatives for all tensors leading up to y.",
                "x.grad: Stores the calculated gradient. The optimizer will later subtract a fraction of this gradient from x to minimize the error."
            ],
            "interviews": [
                {
                    "q": "What is the purpose of `torch.no_grad()`?",
                    "a": "During the model inference or evaluation phase, we do not need to update weights, meaning we don't need calculus. Wrapping the evaluation block in `with torch.no_grad():` disables the Autograd engine, drastically reducing memory consumption and speeding up predictions."
                }
            ],
            "quizzes": [
                {
                    "q": "What hardware component is a PyTorch Tensor optimized to run on for massive parallel computations?",
                    "options": [
                        "CPU",
                        "GPU",
                        "SSD"
                    ],
                    "ans": 1
                }
            ],
            "exercise": "Print 'Gradient: 12.0'.",
            "starter_code": "print('Gradient: 12.0')",
            "expected_output": "Gradient: 12.0"
        },
        {
            "title": "13. Building Neural Networks",
            "theory": "Deep Learning models are vast webs of interconnected mathematical equations. In PyTorch, we encapsulate this complexity using the Object-Oriented paradigm. Every custom neural network you build must inherit from the base `torch.nn.Module` class. \n\nThe architecture is split into two mandatory components. First, the `__init__` constructor, where you instantiate and define the learnable layers (like `nn.Linear`, which applies a matrix transformation `Wx + b`). Second, the `forward()` method, which defines the strict sequence in which the data flows through those layers. Crucially, we must inject non-linear Activation Functions (like ReLU) between the linear layers. Without non-linearity, a neural network of 1,000 layers mathematically collapses into a single linear equation, rendering it completely incapable of learning complex patterns like images or text.",
            "theory_tamil": "Deep Learning மாடல்கள் ஒன்றோடொன்று இணைக்கப்பட்ட கணித சமன்பாடுகளின் பெரிய வலைகளாகும். PyTorch-ல், இந்தச் சிக்கலை Object-Oriented முறை மூலம் சுருக்குகிறோம். நீங்கள் உருவாக்கும் ஒவ்வொரு custom neural network-ம் `torch.nn.Module` class-ல் இருந்து கட்டாயமாக inherit செய்யப்பட வேண்டும்.\n\nஇந்தக் கட்டமைப்பு இரண்டு முக்கிய பகுதிகளைக் கொண்டது. முதல் பகுதி `__init__` constructor, இங்கு layers-ஐ (எ.கா. `nn.Linear`, இது `Wx + b` என்ற matrix transformation-ஐ செய்யும்) வரையறுக்கிறோம். இரண்டாம் பகுதி `forward()` method, இது தரவு எந்த வரிசையில் layers வழியாகச் செல்ல வேண்டும் என்பதைத் தீர்மானிக்கிறது. மிக முக்கியமாக, linear layers-க்கு இடையே non-linear Activation Functions-ஐ (எ.கா. ReLU) நாம் புகுத்த வேண்டும். Non-linearity இல்லாவிட்டால், 1,000 layers கொண்ட network கூட ஒரே ஒரு நேரியல் சமன்பாடாக (linear equation) சுருங்கிவிடும், இதனால் படங்கள் அல்லது உரைகள் போன்ற சிக்கலான வடிவங்களைக் கற்க முடியாமல் போய்விடும்.",
            "code": "import torch\nimport torch.nn as nn\nimport torch.nn.functional as F\n\n# Inherit from nn.Module to unlock PyTorch superpowers\nclass MultiLayerPerceptron(nn.Module):\n    def __init__(self, input_dim: int, hidden_dim: int, output_dim: int):\n        super().__init__()\n        # Define the learnable weight matrices\n        self.layer_1 = nn.Linear(input_dim, hidden_dim)\n        self.layer_2 = nn.Linear(hidden_dim, output_dim)\n        \n    def forward(self, x: torch.Tensor) -> torch.Tensor:\n        # Data flows through Layer 1\n        x = self.layer_1(x)\n        # Inject Non-Linearity (Rectified Linear Unit)\n        x = F.relu(x)\n        # Data flows through output layer\n        return self.layer_2(x)\n\nprint('Network Architecture Built')",
            "code_breakdown": [
                "super().__init__(): A mandatory call to initialize the heavy lifting mechanisms of the parent nn.Module class.",
                "nn.Linear(input, output): Applies a linear transformation. It automatically creates and initializes the Weight and Bias tensors.",
                "F.relu(): The activation function. It converts all negative numbers to zero and keeps positive numbers as they are, introducing non-linearity."
            ],
            "interviews": [
                {
                    "q": "Explain the Exploding and Vanishing Gradient problem.",
                    "a": "During backpropagation in deep networks, gradients are repeatedly multiplied by the weights of each layer. If weights are > 1, the gradients explode to infinity, crashing the model. If weights are < 1, gradients vanish to zero, meaning the early layers of the network never receive updates and stop learning entirely."
                }
            ],
            "quizzes": [
                {
                    "q": "What prevents a deep neural network from behaving like a single linear regression model?",
                    "options": [
                        "Batch Normalization",
                        "Activation Functions (ReLU)",
                        "Gradient Descent"
                    ],
                    "ans": 1
                }
            ],
            "exercise": "Print 'Model Initialized'.",
            "starter_code": "print('Model Initialized')",
            "expected_output": "Model Initialized"
        },
        {
            "title": "14. CNNs & Computer Vision",
            "theory": "Standard Multilayer Perceptrons (MLPs) are terrible at processing images. If you flatten a 2D image into a 1D array of pixels, the network loses all spatial relationships—it no longer understands that an 'eye' pixel is structurally next to a 'nose' pixel. Furthermore, connecting every pixel to every neuron creates an explosive number of parameters, ensuring catastrophic overfitting.\n\nConvolutional Neural Networks (CNNs) solve this elegantly. Instead of processing the whole image at once, a CNN uses small matrices called Kernels (or Filters) that slide (convolve) across the image. These filters act as feature extractors. The early layers learn to detect simple edges and gradients. As the network deepens, pooling layers downsample the image, allowing later filters to detect complex, high-level features like eyes, wheels, or faces, all while using drastically fewer parameters through weight sharing.",
            "theory_tamil": "சாதாரண MLPs படங்களை (images) கையாளுவதற்கு மிகவும் மோசமானவை. ஒரு 2D படத்தை 1D array ஆக மாற்றினால், அதிலுள்ள இடஞ்சார்ந்த உறவுகள் (spatial relationships) அழிந்துவிடும்—அதாவது 'கண்' pixel-க்கு அருகில் 'மூக்கு' pixel உள்ளது என்பதை நெட்வொர்க் மறந்துவிடும். மேலும், ஒவ்வொரு pixel-ஐயும் ஒவ்வொரு neuron-உடனும் இணைப்பது parameters-ன் எண்ணிக்கையை கற்பனைக்கு எட்டாத அளவில் அதிகரித்து, overfitting-ஐ உருவாக்கும்.\n\nConvolutional Neural Networks (CNNs) இதற்கு நேர்த்தியான தீர்வை வழங்குகின்றன. முழுப் படத்தையும் ஒரே நேரத்தில் ஆராய்வதற்குப் பதிலாக, CNN சிறிய Kernels (அல்லது Filters) எனப்படும் matrices-ஐ படத்தின் மீது நகர்த்தி (convolve) ஆராய்கிறது. இந்த filters படத்தின் features-ஐ பிரித்தெடுக்கின்றன. ஆரம்ப layers எளிய விளிம்புகளைக் (edges) கண்டுபிடிக்கின்றன. Network ஆழமாகச் செல்லும்போது, pooling layers படத்தின் அளவைக் குறைக்கின்றன. இதனால் பிந்தைய filters கண்கள், சக்கரங்கள், முகங்கள் போன்ற சிக்கலான அமைப்புகளை மிகக் குறைந்த parameters-ஐப் பயன்படுத்திக் கண்டுபிடிக்க முடிகிறது.",
            "code": "import torch.nn as nn\n\nclass ImageClassifierCNN(nn.Module):\n    def __init__(self):\n        super().__init__()\n        # 1 input channel (Grayscale), 16 output filters, 3x3 sliding kernel\n        self.conv1 = nn.Conv2d(in_channels=1, out_channels=16, kernel_size=3, padding=1)\n        self.relu = nn.ReLU()\n        \n        # Downsamples the image by half, keeping only the most prominent features\n        self.pool = nn.MaxPool2d(kernel_size=2, stride=2)\n        \n    def forward(self, x):\n        x = self.conv1(x)\n        x = self.relu(x)\n        x = self.pool(x)\n        return x\n\nprint('CNN Architecture Built')",
            "code_breakdown": [
                "nn.Conv2d: Sweeps the 3x3 kernel over the 2D image. The network mathematically learns the values inside this kernel to detect features.",
                "padding=1: Adds a border of zeros around the image so the convolution doesn't shrink the output size.",
                "nn.MaxPool2d: Slides a 2x2 window and only keeps the maximum pixel value, throwing away 75% of the data to drastically compress spatial dimensions and prevent overfitting."
            ],
            "interviews": [
                {
                    "q": "What is Translation Invariance in CNNs?",
                    "a": "Because the exact same filter sweeps across the entire image (Weight Sharing), a CNN can detect a feature (like a cat's ear) regardless of whether it appears in the top-left or bottom-right corner of the image."
                }
            ],
            "quizzes": [
                {
                    "q": "Which CNN layer is specifically designed to compress image dimensions and reduce parameter counts?",
                    "options": [
                        "Convolutional Layer",
                        "Pooling Layer",
                        "Fully Connected Layer"
                    ],
                    "ans": 1
                }
            ],
            "exercise": "Print 'Vision Ready'.",
            "starter_code": "print('Vision Ready')",
            "expected_output": "Vision Ready"
        }
    ],
    "Phase 5: Generative AI & LLMs": [
        {
            "title": "15. Transformer Architecture",
            "theory": "Before 2017, NLP relied on Recurrent Neural Networks (RNNs) and LSTMs. These processed text sequentially, word by word, making them impossible to parallelize on GPUs and causing them to 'forget' early context in long paragraphs. Google's landmark paper, 'Attention Is All You Need', introduced the Transformer architecture, completely eradicating recurrence.\n\nThe core of the Transformer is the Self-Attention mechanism. Instead of reading sequentially, the network processes the entire sentence simultaneously. Every single word dynamically computes a mathematical 'Attention Score' with every other word in the sentence, allowing the model to perfectly capture long-range contextual dependencies (e.g., determining if 'bank' means a financial institution or a river edge based on surrounding words). This highly parallelizable architecture paved the way for massive Large Language Models (LLMs) like GPT-4 and Llama.",
            "theory_tamil": "2017-க்கு முன்பு, NLP-க்கு Recurrent Neural Networks (RNNs) மற்றும் LSTMs பயன்பட்டன. இவை உரையை (text) வார்த்தைக்கு வார்த்தை வரிசையாகப் படித்ததால், இவற்றை GPUs-ல் இணையாக (parallel) இயக்க முடியவில்லை, மேலும் நீண்ட பத்திகளில் முந்தைய வார்த்தைகளை மறந்துவிடும் குறைபாடும் இருந்தது. Google-ன் 'Attention Is All You Need' ஆய்வறிக்கை Transformer கட்டமைப்பை அறிமுகப்படுத்தி, இந்த recurrence முறையை முற்றிலுமாக ஒழித்தது.\n\nTransformer-ன் மையம் Self-Attention முறையாகும். வரிசையாகப் படிப்பதற்குப் பதிலாக, நெட்வொர்க் முழு வாக்கியத்தையும் ஒரே நேரத்தில் கையாளுகிறது. ஒவ்வொரு வார்த்தையும் வாக்கியத்தில் உள்ள மற்ற அனைத்து வார்த்தைகளுடனும் ஒப்பிட்டு ஒரு 'Attention Score'-ஐ கணக்கிடுகிறது. இதன் மூலம், வார்த்தைகளுக்கிடையேயான நீண்ட தூரத் தொடர்புகளை மாடல் கச்சிதமாகப் புரிந்துகொள்கிறது (எ.கா. சுற்றியுள்ள வார்த்தைகளை வைத்து 'bank' என்பது வங்கியையா அல்லது நதிக்கரையையா குறிக்கிறது என்பதை அறிதல்). இந்த அதிவேகக் கட்டமைப்பு GPT-4, Llama போன்ற மாபெரும் Large Language Models (LLMs) உருவாகக் காரணமானது.",
            "code": "import torch\nimport torch.nn.functional as F\n\n# Simulated Transformer Self-Attention Calculation\n# Batch of 1, Sequence length of 4 words, 64-dimensional embeddings\nquery = torch.rand(1, 4, 64) \nkey = torch.rand(1, 4, 64)\nvalue = torch.rand(1, 4, 64)\n\n# 1. Compute raw attention scores via Query-Key Matrix Multiplication\nraw_scores = torch.bmm(query, key.transpose(1, 2))\n\n# 2. Scale and apply Softmax to get percentages (Attention Weights)\nattention_weights = F.softmax(raw_scores / (64 ** 0.5), dim=-1)\n\n# 3. Multiply weights against the Value to get the final contextualized output\noutput = torch.bmm(attention_weights, value)\nprint('Contextualized Output Shape:', output.shape)",
            "code_breakdown": [
                "Query, Key, Value (QKV): Metaphorically, a word asks 'what context am I looking for' (Query), broadcasts 'what context I contain' (Key), and provides its 'actual meaning' (Value).",
                "torch.bmm: Batch Matrix Multiplication. The core mathematical engine that computes how much attention every word should pay to every other word.",
                "F.softmax: Normalizes the raw scores into probabilities that sum to 1.0."
            ],
            "interviews": [
                {
                    "q": "If Transformers process all words simultaneously, how do they know the order of words in a sentence?",
                    "a": "They use Positional Encoding. Before the text enters the attention mechanism, sine and cosine mathematical vectors are added to the word embeddings to artificially stamp them with a spatial position."
                }
            ],
            "quizzes": [
                {
                    "q": "Which operation in the Transformer allows a word to weigh its contextual relevance against all other words?",
                    "options": [
                        "Convolution",
                        "Self-Attention",
                        "Gradient Descent"
                    ],
                    "ans": 1
                }
            ],
            "exercise": "Print the output shape: torch.Size([1, 4, 64]).",
            "starter_code": "print('torch.Size([1, 4, 64])')",
            "expected_output": "torch.Size([1, 4, 64])"
        },
        {
            "title": "16. Hugging Face & Open Source LLMs",
            "theory": "Training a foundational Large Language Model from scratch requires tens of thousands of specialized GPUs, Petabytes of training data, and millions of dollars. For 99.9% of developers, this is impossible. Hugging Face revolutionized AI by creating an open-source hub—the 'GitHub of Machine Learning'.\n\nUsing the Hugging Face `transformers` library, engineers can instantly download and run pre-trained, world-class models (like Meta's Llama 3 or Mistral) locally on their own machines or cloud servers. The library abstracts away the agonizing complexity of model graphs, providing unified APIs. Crucially, it provides Tokenizers, which translate raw string text into the mathematical integer arrays that the neural networks require. You can then use techniques like LoRA (Low-Rank Adaptation) to cheaply fine-tune these massive models on your own specialized, private data.",
            "theory_tamil": "ஒரு Large Language Model-ஐ புதிதாக உருவாக்க பல்லாயிரக்கணக்கான GPUs, Petabytes அளவிலான தரவுகள் மற்றும் பல மில்லியன் டாலர்கள் தேவைப்படும். 99.9% டெவலப்பர்களுக்கு இது சாத்தியமற்றது. Hugging Face ஒரு open-source மையத்தை (Machine Learning-க்கான GitHub) உருவாக்கி AI-ல் பெரும் புரட்சியை ஏற்படுத்தியது.\n\nHugging Face `transformers` library-ஐப் பயன்படுத்தி, பொறியாளர்கள் உலகத்தரம் வாய்ந்த மாடல்களை (Meta's Llama 3 அல்லது Mistral) உடனடியாகப் பதிவிறக்கித் தங்கள் கணினிகளிலோ அல்லது cloud-லோ இயக்க முடியும். இந்த library, model-ன் சிக்கலான கணித வரைபடங்களை மறைத்து, எளிமையான API-களை வழங்குகிறது. முக்கியமாக, இது Tokenizers-ஐ வழங்குகிறது, இவை உரை வடிவ வார்த்தைகளை (raw text) neural networks-க்குப் புரியும் எண்களாக மாற்றுகின்றன. மேலும், LoRA (Low-Rank Adaptation) போன்ற முறைகளைப் பயன்படுத்தி, இந்த மாபெரும் மாடல்களை மிகக் குறைந்த செலவில் உங்களின் தனிப்பட்ட தரவுகளுக்கு ஏற்ப fine-tune செய்ய முடியும்.",
            "code": "from transformers import pipeline\n\n# The pipeline API abstracts away Tokenization, Model Inference, and Output Decoding\n# Using a lightweight, pre-trained model for text summarization\n# summarizer = pipeline(\"summarization\", model=\"sshleifer/distilbart-cnn-12-6\")\n\nlong_text = \"Hugging Face is a collaborative platform that allows ML engineers to host and collaborate on models, datasets, and applications. It drastically lowers the barrier to entry for AI.\"\n\n# result = summarizer(long_text, max_length=15, min_length=5, do_sample=False)\n# print(result[0]['summary_text'])\nprint('Hugging Face Pipeline Abstracted')",
            "code_breakdown": [
                "pipeline(): The highest-level abstraction in Hugging Face. You declare the task (e.g., 'summarization', 'text-generation') and it handles the complex tensor mathematics behind the scenes.",
                "model=\"...\": Specifies which pre-trained weights to download from the Hugging Face Hub."
            ],
            "interviews": [
                {
                    "q": "What is the difference between Fine-Tuning and Pre-Training an LLM?",
                    "a": "Pre-training is teaching the model the basic rules of human language by predicting the next word on massive, general internet data (expensive). Fine-tuning is taking that smart model and training it slightly on a small, specific dataset (like medical records) to make it an expert in a specific domain (cheap)."
                }
            ],
            "quizzes": [
                {
                    "q": "What component translates human readable text strings into the integer IDs required by an LLM?",
                    "options": [
                        "Optimizer",
                        "Tokenizer",
                        "Activation Function"
                    ],
                    "ans": 1
                }
            ],
            "exercise": "Print 'HF Ready'.",
            "starter_code": "print('HF Ready')",
            "expected_output": "HF Ready"
        },
        {
            "title": "17. RAG (Retrieval-Augmented Gen)",
            "theory": "Large Language Models have two fatal flaws: they confidently hallucinate incorrect information, and their knowledge cutoff is frozen in time, meaning they have zero access to your company's proprietary or real-time data. Retrieval-Augmented Generation (RAG) is the definitive enterprise solution to this problem, effectively granting the LLM an external memory brain.\n\nRAG operates in two phases. First, Ingestion: your private documents (PDFs, wikis) are passed through an embedding model, which translates the text into dense mathematical vectors (capturing semantic meaning) and stores them in a Vector Database (like Pinecone or ChromaDB). Second, Retrieval: when a user asks a question, the question is also vectorized. The Vector DB performs a lightning-fast mathematical similarity search (Cosine Similarity) to find the most relevant document chunks. These chunks are dynamically injected into the LLM's prompt as context, forcing the LLM to answer strictly using your private data, eliminating hallucinations.",
            "theory_tamil": "Large Language Models-ல் இரண்டு பெரும் குறைகள் உள்ளன: அவை தவறான தகவல்களை மிக நம்பிக்கையுடன் (hallucinate) கூறும், மேலும் அவற்றின் அறிவு ஒரு குறிப்பிட்ட காலகட்டத்தோடு உறைந்திருக்கும், அதாவது உங்களின் நிறுவனத் தரவுகளோ அல்லது சமீபத்திய தகவல்களோ அவற்றுக்குத் தெரியாது. இதற்குச் சரியான தீர்வாக Retrieval-Augmented Generation (RAG) அமைகிறது, இது LLM-க்கு ஒரு வெளிப்புற நினைவக மூளையை வழங்குகிறது.\n\nRAG இரண்டு கட்டங்களாகச் செயல்படுகிறது. முதல் கட்டம் (Ingestion): உங்கள் தனிப்பட்ட ஆவணங்கள் (PDFs, wikis) ஒரு embedding model வழியாகச் செலுத்தப்பட்டு, அடர்த்தியான கணித vectors ஆக மாற்றப்பட்டு Vector Database-ல் (Pinecone, ChromaDB) சேமிக்கப்படுகின்றன. இரண்டாம் கட்டம் (Retrieval): பயனர் ஒரு கேள்வியைக் கேட்கும்போது, அக்கேள்வியும் vector ஆக மாற்றப்படுகிறது. Vector DB துல்லியமான கணித ஒப்பீடு (Cosine Similarity) செய்து, தொடர்புடைய ஆவணப் பகுதிகளைக் கண்டுபிடிக்கிறது. இந்தப் பகுதிகள் LLM-ன் prompt-ல் context ஆகச் சேர்க்கப்படுகின்றன. இதனால் LLM தன் கற்பனையை விட்டுவிட்டு, உங்கள் தனிப்பட்ட தரவுகளை மட்டுமே பயன்படுத்தி துல்லியமாகப் பதிலளிக்கிறது.",
            "code": "# Enterprise RAG Pipeline (Pseudo-Architecture utilizing LangChain principles)\n\n# 1. User asks a private question\nuser_query = \"What is the Q3 revenue for Project X?\"\n\n# 2. Convert query to Semantic Vector Space\n# query_vector = embedding_model.embed(user_query)\n\n# 3. Vector Database performs Cosine Similarity search instantly over millions of docs\n# retrieved_context = vector_db.similarity_search(query_vector, top_k=3)\n\n# 4. Dynamic Prompt Injection\nprompt = f\"\"\"\nUse the following strictly verified context to answer the user.\nContext: {retrieved_context}\nQuestion: {user_query}\n\"\"\"\n\n# 5. LLM generates grounded, hallucination-free answer\n# final_answer = llm.generate(prompt)\nprint('Enterprise RAG Architecture Initialized')",
            "code_breakdown": [
                "Embedding: Converting text into high-dimensional float arrays (e.g., 1536 dimensions) where words with similar meanings are mathematically close together.",
                "Similarity Search: Comparing the angles between vectors. A small angle indicates high semantic similarity.",
                "Prompt Injection: The act of shoving the retrieved text directly into the hidden system prompt sent to the LLM API."
            ],
            "interviews": [
                {
                    "q": "Why is Chunking important in a RAG pipeline?",
                    "a": "LLMs have a strictly limited 'Context Window' (how much text they can process at once). You cannot inject a 500-page PDF into the prompt. Chunking breaks the PDF into small, overlapping paragraphs before embedding them, allowing you to retrieve and inject only the 3 most relevant paragraphs."
                }
            ],
            "quizzes": [
                {
                    "q": "What database architecture is optimized specifically for storing and searching high-dimensional semantic data?",
                    "options": [
                        "Relational Database (SQL)",
                        "Graph Database",
                        "Vector Database"
                    ],
                    "ans": 2
                }
            ],
            "exercise": "Print 'RAG Built'.",
            "starter_code": "print('RAG Built')",
            "expected_output": "RAG Built"
        }
    ],
    "Phase 6: MLOps & Production": [
        {
            "title": "18. FastAPI Model Serving",
            "theory": "Training a state-of-the-art AI model is only 50% of the battle. An ML model is ultimately just a Python object loaded in RAM; it is useless if external systems cannot interact with it. MLOps dictates that models must be deployed as scalable web services. We wrap our models in RESTful APIs so that mobile apps, frontend websites, or microservices can send data over HTTP and receive predictions in real-time.\n\nFastAPI has become the absolute industry standard for this task, obliterating older frameworks like Flask. FastAPI natively supports asynchronous asynchronous programming (async/await), allowing it to handle thousands of concurrent requests without blocking—crucial for slow LLM generations. Furthermore, it strictly enforces data validation using Pydantic, ensuring that if a client sends invalid JSON formats to your model, the API blocks the request before it can crash the Python engine.",
            "theory_tamil": "ஒரு சிறந்த AI மாடலை உருவாக்குவது சவாலின் 50% மட்டுமே. ML model என்பது RAM-ல் உள்ள ஒரு Python object மட்டுமே; வெளி அமைப்புகள் இதனுடன் தொடர்பு கொள்ள முடியாவிட்டால் இது பயனற்றது. MLOps விதிமுறைகளின்படி, மாடல்கள் scalable web services ஆக வெளியிடப்பட வேண்டும். Mobile apps மற்றும் websites HTTP வழியாகத் தரவை அனுப்பி real-time கணிப்புகளைப் பெற, மாடல்களை RESTful APIs ஆக உருவாக்குகிறோம்.\n\nஇந்த பணிக்காகப் பழைய Flask போன்றவற்றை முறியடித்து, FastAPI தற்போதைய industry standard ஆக உருவெடுத்துள்ளது. FastAPI natively asynchronous (async/await) programming-ஐ ஆதரிக்கிறது, இதனால் ஆயிரக்கணக்கான requests-ஐ எவ்வித தடையுமின்றி கையாள முடியும்—மெதுவான LLM generation-க்கு இது மிக அவசியம். மேலும், இது Pydantic மூலம் தரவுகளைக் கடுமையாகச் சரிபார்க்கிறது. ஒரு client தவறான JSON format-ஐ அனுப்பினால், மாடல் crash ஆவதற்கு முன்பே API அதைத் தடுத்து நிறுத்திவிடும்.",
            "code": "from fastapi import FastAPI\nfrom pydantic import BaseModel\n\n# Initialize the high-speed ASGI framework\napp = FastAPI(title='ML Prediction Server')\n\n# Pydantic explicitly validates incoming JSON structure and types\nclass PredictionRequest(BaseModel):\n    user_text: str\n    confidence_threshold: float = 0.5\n\n@app.post('/api/predict')\nasync def get_prediction(request: PredictionRequest):\n    # Simulated Model Inference\n    # result = my_ml_model.predict(request.user_text)\n    \n    return {\n        'status': 'success',\n        'input': request.user_text,\n        'prediction': 'Positive Sentiment'\n    }\nprint('FastAPI Server Ready')",
            "code_breakdown": [
                "BaseModel (Pydantic): If the user passes a string instead of a float for 'confidence_threshold', FastAPI automatically rejects the request with a clear 422 HTTP Error.",
                "async def: Allows the server to accept other incoming web requests while waiting for the heavy ML model prediction to compute.",
                "@app.post: Decorator that maps the Python function to a web URL endpoint."
            ],
            "interviews": [
                {
                    "q": "What is the benefit of FastAPI's automatic Swagger/OpenAPI integration?",
                    "a": "FastAPI automatically generates an interactive documentation page (at /docs) based on your Pydantic schemas. This allows frontend developers to instantly see what JSON format your ML API expects and test it directly in the browser without any extra work from you."
                }
            ],
            "quizzes": [
                {
                    "q": "Which library does FastAPI heavily rely on to perform strict data validation on incoming JSON payloads?",
                    "options": [
                        "SQLAlchemy",
                        "Requests",
                        "Pydantic"
                    ],
                    "ans": 2
                }
            ],
            "exercise": "Print 'API Active'.",
            "starter_code": "print('API Active')",
            "expected_output": "API Active"
        },
        {
            "title": "19. Docker Containerization",
            "theory": "The most dreaded phrase in software engineering is 'It works on my machine.' A Python ML model might run perfectly on your Mac, but crash spectacularly on the production Linux server due to mismatched dependency versions (e.g., PyTorch v2.0 vs v2.1) or missing OS-level C++ drivers. Docker eradicates this problem entirely.\n\nDocker packages your application code, your `requirements.txt` libraries, and an isolated micro-Operating System into a single, immutable artifact called a Docker Image. When you run this image, it becomes a Docker Container. Because the container brings its own OS and environment with it, it guarantees 100% identical execution whether it is running on your laptop, an AWS cloud cluster, or a Kubernetes pod. This containerization is the non-negotiable foundation of modern CI/CD deployment pipelines.",
            "theory_tamil": "மென்பொருள் பொறியியலில் மிகவும் அஞ்சப்படும் சொற்றொடர் 'என் கணினியில் வேலை செய்கிறது' (It works on my machine). உங்கள் Mac-ல் மிகச் சரியாக இயங்கும் Python ML model, production Linux server-ல் dependency version மாறுபாடுகளாலோ (எ.கா. PyTorch v2.0 vs v2.1) அல்லது C++ drivers இல்லாமலோ முற்றிலும் செயலிழக்கலாம். Docker இந்தப் பிரச்சனையை முற்றிலுமாக ஒழிக்கிறது.\n\nDocker உங்கள் application code, `requirements.txt` நூலகங்கள், மற்றும் ஒரு தனிமைப்படுத்தப்பட்ட micro-OS ஆகிய அனைத்தையும் ஒரே மாற்ற முடியாத (immutable) தொகுப்பாக மாற்றுகிறது, இதை Docker Image என்கிறோம். இந்த image-ஐ இயக்கும்போது அது Docker Container ஆக மாறுகிறது. Container தனக்கான OS மற்றும் environment-ஐ தன்னோடு கொண்டு செல்வதால், உங்கள் லேப்டாப், AWS cloud, அல்லது Kubernetes என எங்கு இயங்கினாலும் 100% ஒரே மாதிரியான செயல்பாட்டை உறுதி செய்கிறது. நவீன CI/CD deployment pipelines-க்கு இது மிகவும் அடிப்படையான கட்டாயத் தேவையாகும்.",
            "code": "# Standard MLOps Dockerfile for a FastAPI Server\n\"\"\"\n# 1. Base Image: Use a slimmed-down Linux environment with Python pre-installed\nFROM python:3.11-slim\n\n# 2. Set the working directory inside the container\nWORKDIR /app\n\n# 3. Copy only dependencies first (Takes advantage of Docker layer caching)\nCOPY requirements.txt .\nRUN pip install --no-cache-dir -r requirements.txt\n\n# 4. Copy the actual ML model and API code\nCOPY . .\n\n# 5. Expose the port FastAPI runs on\nEXPOSE 8000\n\n# 6. Command executed when the container starts\nCMD [\"uvicorn\", \"main:app\", \"--host\", \"0.0.0.0\", \"--port\", \"8000\"]\n\"\"\"\nprint('Dockerfile Configured')",
            "code_breakdown": [
                "FROM python:3.11-slim: We avoid pulling heavy OS images like full Ubuntu, using 'slim' to keep the container lightweight and fast to deploy.",
                "COPY requirements.txt . BEFORE COPY . .: A massive optimization trick. Docker caches layers. If you only change your code but not your dependencies, Docker skips the slow pip install step.",
                "CMD: Starts the Uvicorn ASGI server to serve the FastAPI app to the outside world."
            ],
            "interviews": [
                {
                    "q": "What is the difference between a Docker Image and a Docker Container?",
                    "a": "A Docker Image is the static, read-only blueprint (like a Class in OOP). A Docker Container is the live, running instance of that Image in RAM (like an Object in OOP). You can spin up thousands of containers from a single image."
                }
            ],
            "quizzes": [
                {
                    "q": "Which Dockerfile command determines the process that runs when the container starts up?",
                    "options": [
                        "RUN",
                        "CMD",
                        "COPY"
                    ],
                    "ans": 1
                }
            ],
            "exercise": "Print 'Container Deployed'.",
            "starter_code": "print('Container Deployed')",
            "expected_output": "Container Deployed"
        },
        {
            "title": "20. Streamlit UI Prototyping",
            "theory": "Historically, demonstrating a Machine Learning model to stakeholders required building a full-stack web application. Data Scientists, whose expertise lies in statistics and Python, were forced to grapple with React, HTML, CSS, and complex state management just to build a simple UI. Streamlit disrupted this entirely.\n\nStreamlit is an open-source framework that allows AI engineers to build highly interactive, beautiful Web UIs directly in pure Python in a matter of minutes. Under the hood, Streamlit uses a unique execution model: every time a user interacts with a widget (like clicking a button or uploading an image), Streamlit reruns the entire Python script from top to bottom, handling all frontend rendering automatically. It natively supports plotting libraries (Matplotlib, Plotly) and Pandas dataframes, making it the industry standard for rapid AI prototyping and internal dashboards.",
            "theory_tamil": "வரலாற்றுரீதியாக, ஒரு Machine Learning மாடலை பங்குதாரர்களிடம் (stakeholders) காட்ட ஒரு முழுமையான full-stack web application-ஐ உருவாக்க வேண்டியிருந்தது. புள்ளிவிவரங்கள் மற்றும் Python-ல் வல்லுநர்களான Data Scientists, ஒரு எளிய UI-ஐ உருவாக்க React, HTML, CSS மற்றும் state management ஆகியவற்றோடு போராட வேண்டியிருந்தது. Streamlit இதை முற்றிலுமாக மாற்றியது.\n\nStreamlit என்பது ஒரு open-source framework ஆகும், இதன் மூலம் AI பொறியாளர்கள் மிகச் சில நிமிடங்களில், முழுக்க முழுக்க Python-லேயே அழகான interactive Web UI-களை உருவாக்கலாம். இதன் பின்புலத்தில் ஒரு தனித்துவமான execution முறை உள்ளது: பயனர் ஒரு widget-ஐப் பயன்படுத்தும் போதெல்லாம் (button-ஐ click செய்தல் அல்லது image-ஐ upload செய்தல்), Streamlit மொத்த Python script-ஐயும் மேலிருந்து கீழாக மீண்டும் இயக்கி, frontend rendering-ஐ தானாகவே கையாளுகிறது. இது Matplotlib, Pandas போன்றவற்றை நேரடியாக ஆதரிப்பதால், AI prototyping மற்றும் internal dashboards உருவாக்க இதுவே industry standard ஆக விளங்குகிறது.",
            "code": "import streamlit as st\nimport pandas as pd\n\n# Automatically renders as a large H1 tag\nst.title('🤖 AI Sentiment Analysis Portal')\n\n# Renders an interactive React-based text input on the frontend\nuser_review = st.text_area('Paste customer review here:')\n\n# Renders a button. Evaluates to True only when clicked by the user.\nif st.button('Analyze Sentiment'):\n    with st.spinner('AI is processing...'):\n        # Simulated AI inference call\n        # sentiment = model.predict(user_review)\n        \n        st.success('Prediction: HIGHLY POSITIVE')\n        st.balloons() # Triggers frontend animation\n\nprint('Streamlit App Running')",
            "code_breakdown": [
                "st.title() / st.write(): Functions that translate Python strings directly into beautifully styled HTML elements.",
                "st.text_area(): Creates a two-way binding. The text typed by the user on the webpage is instantly captured in the Python variable 'user_review'.",
                "st.spinner(): Temporarily displays a loading UI to the user while the heavy ML model computes the answer in the background."
            ],
            "interviews": [
                {
                    "q": "If Streamlit reruns the entire script on every button click, won't it reload the massive 5GB ML model every time and crash?",
                    "a": "Yes, it would. To prevent this, Streamlit provides the `@st.cache_resource` decorator. You place it above your model loading function, ensuring the 5GB model is loaded into RAM only once and kept alive across all script reruns."
                }
            ],
            "quizzes": [
                {
                    "q": "What happens to the Python script when a user clicks a Streamlit button?",
                    "options": [
                        "Only the button's callback function runs",
                        "The entire script reruns from top to bottom",
                        "It sends a REST API request to the backend"
                    ],
                    "ans": 1
                }
            ],
            "exercise": "Print 'UI Deployed'.",
            "starter_code": "print('UI Deployed')",
            "expected_output": "UI Deployed"
        }
    ]
};
