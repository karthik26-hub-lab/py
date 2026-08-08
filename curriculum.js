const curriculum = {
    "Phase 1: Python Programming Mastery": [
        {
            "title": "1. Core Python & Type Hinting",
            "theory": "Welcome to your first day as an AI Engineer, Karthik! When you sit down for that high-stakes coding round during campus placements, recruiters aren't just looking to see if your code works. They want to see if you write *production-ready* code.\n\nImagine Python as a massive warehouse. If you throw items into boxes (variables) without labeling them, it's fast at first, but chaotic later. This is 'dynamic typing'. To stand out to top-tier recruiters, we use 'Type Hinting'. By explicitly declaring what data goes where (e.g., `list[float]`), your code becomes incredibly easy to read and prevents massive crashes. When an interviewer sees you using Type Hints, they immediately know you're not just a student; you're ready to deploy real software.",
            "code": "def calculate_loss(predictions: list[float], targets: list[float]) -> float:\n    # We check if both lists have the same number of items\n    if len(predictions) != len(targets):\n        raise ValueError('Oops! The lists are not the same length.')\n    \n    # We calculate the error between prediction and target\n    return sum((p - t)**2 for p, t in zip(predictions, targets)) / len(targets)",
            "code_breakdown": [
                "list[float]: This is our label! It tells the recruiter 'predictions' is strictly a list of decimal numbers.",
                "-> float: This promises the interviewer that when the function finishes, it will hand back a single decimal number.",
                "raise ValueError: A polite way of preventing crashes. Interviewers love edge-case handling!"
            ],
            "quizzes": [
                {
                    "q": "What is the main benefit of Type Hinting in a placement interview?",
                    "options": [
                        "It makes Python run faster",
                        "It proves you write safe, readable, production-level code",
                        "It automatically converts text to numbers"
                    ],
                    "ans": 1
                }
            ],
            "exercise": "Define a function `greet` that expects a string and returns a string.",
            "starter_code": "def greet(name: str) -> str:\n    return 'Hello ' + name\nprint(greet('Karthik'))",
            "expected_output": "Hello Karthik"
        },
        {
            "title": "2. Advanced Data Structures",
            "theory": "Karthik, during a technical HR interview, they *will* test you on Data Structures. Standard Lists are like a bookshelf; finding a specific book takes O(N) time because you have to scan every shelf. \n\nLet me introduce you to the tools that clear coding rounds. A 'Set' instantly kicks out duplicates and can check if someone exists in a fraction of a second (O(1) time). A 'Tuple' is read-only, which prevents accidental changes to important variables. Finally, a 'Dictionary' maps Keys to Values instantly. When an interviewer asks you to optimize a slow algorithm, 99% of the time, the secret is replacing a List with a Set or a Dictionary!",
            "code": "from typing import Dict, Set, Tuple\n\n# A Set acts like a VIP club. The second 'user_101' is instantly kicked out!\nactive_users: Set[str] = {'user_101', 'user_202', 'user_101'}\n\n# A Tuple is a sealed vault. We use it to lock in our settings.\nhyperparams: Tuple[float, int] = (0.001, 64) \n\n# A Dictionary connects Keys to Values instantly.\nmodel_config: Dict[str, any] = {\n    'learning_rate': hyperparams[0],\n    'batch_size': hyperparams[1],\n    'optimizer': 'AdamW'\n}",
            "code_breakdown": [
                "Set: Eliminates duplicates automatically. Fast O(1) lookups.",
                "Tuple: A read-only list. Great for storing fixed configurations.",
                "Dict: A structured way to organize key-value pairs, heavily used in AI configurations."
            ],
            "quizzes": [
                {
                    "q": "Which data structure is best for instantly checking if a user ID exists in a massive database, reducing O(N) to O(1)?",
                    "options": [
                        "List",
                        "Set",
                        "Tuple"
                    ],
                    "ans": 1
                }
            ],
            "exercise": "Remove duplicates from the list by converting it to a set.",
            "starter_code": "opts = ['Adam', 'SGD', 'Adam']\nprint(set(opts))",
            "expected_output": "{'Adam', 'SGD'}"
        },
        {
            "title": "3. Functions & Scopes",
            "theory": "Karthik, you'll often face scenarios in technical rounds where you don't know exactly how many arguments a function will receive. Enter the magic of `*args` and `**kwargs`.\n\nBy putting a star (`*`) in front of a word, you tell Python: 'Take all the extra items they give me, and wrap them up into a neat little Tuple.' Two stars (`**`) mean: 'Take all the extra labeled items, and pack them into a Dictionary!' This gives you incredible flexibility. When you build your final year project, this is how you'll allow users to pass dozens of different customization options to your AI models without hardcoding every single one.",
            "code": "def build_model(architecture: str, *layers: int, **kwargs):\n    print(f\"Building {architecture}...\")\n    print(f\"Layers provided: {layers}\")\n    \n    # We loop through our dictionary of extra labeled settings\n    for param, value in kwargs.items():\n        print(f\"Setting {param} to {value}\")\n\n# We give 1 string, 2 extra numbers (*args), and 2 labeled settings (**kwargs)!\nbuild_model('DeepNet', 128, 64, dropout=0.2, activation='relu')",
            "code_breakdown": [
                "*layers: Collects '128' and '64' into a Tuple: (128, 64).",
                "**kwargs: Collects 'dropout' and 'activation' into a Dictionary.",
                "kwargs.items(): A handy trick to get both the Key and Value from a dictionary at the same time."
            ],
            "quizzes": [
                {
                    "q": "If you use **kwargs in a function, how does Python store the data internally?",
                    "options": [
                        "As a List",
                        "As a Tuple",
                        "As a Dictionary"
                    ],
                    "ans": 2
                }
            ],
            "exercise": "Print the length of the kwargs dictionary.",
            "starter_code": "def count_kwargs(**kwargs):\n    print(len(kwargs))\ncount_kwargs(a=1, b=2)",
            "expected_output": "2"
        },
        {
            "title": "4. Object-Oriented ML",
            "theory": "Karthik, Object-Oriented Programming (OOP) is a guaranteed topic in any technical HR interview. Instead of building every system from scratch, wouldn't it be easier to just draw a 'Blueprint' once?\n\nThat is OOP. A `Class` is just the blueprint. When you use it to build a real object, that object has things it *owns* ('Attributes' like variables) and things it can *do* ('Methods' like functions). In AI, every single Machine Learning model you build is just an Object built from a Class blueprint. Understanding this proves to recruiters you can architect large-scale systems.",
            "code": "class MLModel:\n    # The __init__ method is the 'constructor'. It runs the moment a new object is born!\n    def __init__(self, model_name: str):\n        self.model_name = model_name  # The object remembers its own name\n        self.is_trained = False       # The object remembers it hasn't learned anything yet\n        \n    # A method is just a function that lives inside the object\n    def train(self):\n        print(f'{self.model_name} is now learning...')\n        self.is_trained = True\n\n# We use the blueprint to create a real object!\nmy_robot = MLModel('RandomForest')\nmy_robot.train()",
            "code_breakdown": [
                "class MLModel:: We are drawing the blueprint here.",
                "def __init__(self): The birth ceremony of the object. 'self' means 'me'—the specific object being created.",
                "self.is_trained: We attach a sticky note to the object so it remembers its state."
            ],
            "quizzes": [
                {
                    "q": "What do we call the special function `__init__` in a class?",
                    "options": [
                        "The Destructor",
                        "The Constructor",
                        "The Blueprint"
                    ],
                    "ans": 1
                }
            ],
            "exercise": "Print the model's `is_trained` attribute after initialization.",
            "starter_code": "class Net:\n    def __init__(self):\n        self.is_trained = False\nprint(Net().is_trained)",
            "expected_output": "False"
        },
        {
            "title": "5. Generators & Decorators",
            "theory": "Karthik, this is where you separate yourself from the average candidate. If you try to load a million photos into a standard Python list, your computer crashes. \n\nA `Generator` uses the magic `yield` keyword to hand you one photo, hit the pause button, and wait until you're ready for the next, saving your RAM entirely. A `Decorator` is a clever way to 'wrap' a function with extra features (like a timer) without ever modifying the original function's code. If you use decorators and generators in your campus placement coding rounds, the interviewers will be blown away.",
            "code": "import time\n\n# A Decorator: It wraps another function to add a timer to it!\ndef timer_wrapper(func):\n    def inner_box(*args, **kwargs):\n        start = time.time()\n        result = func(*args, **kwargs) # We run the original function here\n        print(f\"Finished in {time.time() - start:.4f} seconds\")\n        return result\n    return inner_box\n\n# A Generator: Notice we use 'yield' instead of 'return'\ndef slow_pizza_maker():\n    for i in range(1, 4):\n        yield f\"Pizza {i}\"\n        time.sleep(0.1) # Pretend it takes time to bake\n\n@timer_wrapper\ndef eat_buffet():\n    # The loop asks the generator for one pizza at a time\n    for pizza in slow_pizza_maker():\n        pass\n\neat_buffet()",
            "code_breakdown": [
                "@timer_wrapper: This is the 'gift wrap'. It magically attaches the timer to our eat_buffet function.",
                "yield: Unlike 'return' which kills the function forever, 'yield' just hits the pause button, saving its spot for next time."
            ],
            "quizzes": [
                {
                    "q": "Which keyword acts like a 'pause button' in a function, saving memory and turning it into a generator?",
                    "options": [
                        "return",
                        "yield",
                        "stop"
                    ],
                    "ans": 1
                }
            ],
            "exercise": "Write a generator yielding 1 then 2.",
            "starter_code": "def gen():\n    yield 1\n    yield 2\nprint(list(gen()))",
            "expected_output": "[1, 2]"
        }
    ],
    "Phase 2: The Data Science Toolkit": [
        {
            "title": "6. NumPy & Linear Algebra",
            "theory": "Welcome to the real engine room of AI, Karthik! Python is actually quite slow at doing heavy math. Imagine adding 10 million numbers using a `for` loop during an interview—it's highly inefficient.\n\nEnter **NumPy**. NumPy uses highly structured blocks of memory and a superpower called **Vectorization**. This allows NumPy to add, multiply, or divide millions of numbers all at the exact same time in a single swooping operation. When an interviewer asks how AI models multiply massive grids of numbers instantly, your answer is 'Vectorized NumPy Arrays'.",
            "code": "import numpy as np\n\n# Creating a 2D Array (A Matrix) - think of it as a grid of numbers\nX = np.array([[1, 2], \n              [3, 4]])\n\n# Without a single 'for' loop, we instantly multiply every number by 10!\nscaled_X = X * 10\n\n# We can multiply two matrices together (The core math of AI)\nW = np.array([[0.5, 0.5], \n              [0.5, 0.5]])\n\noutput = np.dot(X, W) # Or simply X @ W\nprint(output.shape)",
            "code_breakdown": [
                "np.array(): Converts a slow Python list into a blazing-fast C-array.",
                "X * 10: Vectorization in action! It multiplies every cell instantly without needing a loop.",
                "np.dot(): Calculates the Matrix Dot Product. Row 1 multiplied by Column 1, etc."
            ],
            "quizzes": [
                {
                    "q": "What is it called when NumPy performs math on an entire array instantly without a 'for' loop?",
                    "options": [
                        "Iteration",
                        "Vectorization",
                        "Broadcasting"
                    ],
                    "ans": 1
                }
            ],
            "exercise": "Print the shape of a 2x3 matrix of ones.",
            "starter_code": "import numpy as np\nprint(np.ones((2,3)).shape)",
            "expected_output": "(2, 3)"
        },
        {
            "title": "7. Pandas DataFrames",
            "theory": "Karthik, data in the real world is rarely perfect. It's filled with missing values and weird formats. If you train a model on corrupt data, the model will fail, and recruiters know this.\n\nPandas introduces the `DataFrame`. Imagine it as Excel on steroids, controlled entirely by your code. Using Pandas, we build professional 'Data Cleaning Pipelines' to elegantly scrub our data, fill in the blanks, and engineer new columns. When showcasing your projects, having a robust Pandas cleaning pipeline proves you know how to handle real-world chaos.",
            "code": "import pandas as pd\nimport numpy as np\n\n# Creating a messy dataset with a missing value (np.nan)\nraw_data = {'Name': ['Alice', 'Bob', 'Charlie'], 'Age': [25, np.nan, 30], 'Salary': [50k, 60k, 70k]}\ndf = pd.DataFrame(raw_data)\n\n# A beautiful Pandas method chain (Pipeline) to clean the data\nclean_df = (\n    df.copy()\n    .dropna() # Instantly deletes any row with missing information\n    .assign(Bonus=lambda x: x['Salary'] * 1.1) # Calculates a 10% bonus column on the fly\n)\n\nprint(clean_df.shape)",
            "code_breakdown": [
                "pd.DataFrame(): Creates our super-powered spreadsheet.",
                ".dropna(): The easiest way to deal with missing data (NaNs) is to just drop those rows completely.",
                ".assign(): Creates a brand new column dynamically based on existing data."
            ],
            "quizzes": [
                {
                    "q": "Which method removes missing values (NaN) from a DataFrame?",
                    "options": [
                        "df.delete_blank()",
                        "df.dropna()",
                        "df.clean()"
                    ],
                    "ans": 1
                }
            ],
            "exercise": "Print the number of columns in df.",
            "starter_code": "import pandas as pd\ndf = pd.DataFrame({'A': [1], 'B': [2]})\nprint(df.shape[1])",
            "expected_output": "2"
        },
        {
            "title": "8. EDA & Visualization",
            "theory": "Karthik, before you throw data into an algorithm, you must do detective work. In AI, this is **Exploratory Data Analysis (EDA)**. If a recruiter asks how you chose your algorithm, your answer should start with your EDA findings.\n\nUsing Matplotlib and Seaborn, we draw pictures! Histograms show the shape of our data. Boxplots instantly flag extreme weirdos (outliers). Heatmaps show us 'Correlations' (like how Ice Cream Sales track with Summer Temps). Only after we understand the data visually can we decide how to train our model.",
            "code": "import matplotlib.pyplot as plt\nimport seaborn as sns\nimport numpy as np\nimport pandas as pd\n\n# Creating some fake data: As Age goes up, Income tends to go up\nage = np.array([22, 25, 30, 35, 40])\nincome = age * 2000 + np.random.normal(0, 5000, 5)\ndf = pd.DataFrame({'Age': age, 'Income': income})\n\n# 1. We ask pandas how strongly Age is related to Income (Correlation)\ncorrelation_matrix = df.corr()\n\n# 2. We use Seaborn to draw a beautiful Heatmap (Commented out so the script runs)\n# sns.heatmap(correlation_matrix, annot=True, cmap='coolwarm')\n\nprint('EDA Clues Gathered!')",
            "code_breakdown": [
                "df.corr(): Calculates the correlation. A score of 1.0 means a perfect relationship. A score of 0 means absolutely no relationship.",
                "sns.heatmap(): Takes that correlation score and turns it into a color-coded grid for easy viewing."
            ],
            "quizzes": [
                {
                    "q": "Which plot is used to see the correlation between two different variables?",
                    "options": [
                        "Pie Chart",
                        "Scatter Plot",
                        "Bar Chart"
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
            "theory": "Karthik, Supervised Learning is simply learning by example. You show the computer 100 pictures of cats (the inputs, or `X`) and explicitly tell them 'This is a cat' (the label, or `y`).\n\nBut to stop Data Leakage (accidentally letting the model cheat on the final exam), pros use a Scikit-Learn **Pipeline**. Think of a Pipeline as an automated factory assembly line. The raw data goes in, gets scaled automatically, and then gets fed to the algorithm—all in one perfectly safe, leak-proof step. Showing a recruiter you use Pipelines proves you are a mature engineer.",
            "code": "from sklearn.pipeline import Pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.ensemble import RandomForestClassifier\n\n# We build an automated assembly line (Pipeline)\nml_pipeline = Pipeline([\n    # Station 1: The Scaler shrinks all huge numbers down to a standard size\n    ('scaler', StandardScaler()),\n    # Station 2: The Classifier actually learns the patterns\n    ('classifier', RandomForestClassifier(n_estimators=100))\n])\n\n# We feed the training data into the start of the pipeline\n# ml_pipeline.fit(X_train, y_train) \nprint('Automated Pipeline Ready!')",
            "code_breakdown": [
                "StandardScaler(): Mathematical shrink-ray! It ensures big numbers don't overpower small numbers during training.",
                "RandomForestClassifier(): An algorithm that builds a 'forest' of decision trees, and takes a majority vote on the final answer.",
                "Pipeline(): Chains the scaler and the forest together so you only have to call `.fit()` once!"
            ],
            "quizzes": [
                {
                    "q": "What does a StandardScaler do?",
                    "options": [
                        "Deletes missing values",
                        "Standardizes features to have a mean of 0",
                        "Converts text into numbers"
                    ],
                    "ans": 1
                }
            ],
            "exercise": "Print 'Pipeline Ready'.",
            "starter_code": "print('Pipeline Ready')",
            "expected_output": "Pipeline Ready"
        },
        {
            "title": "10. Model Evaluation Metrics",
            "theory": "Karthik, if a recruiter asks how you evaluated your model, DO NOT just say 'Accuracy'. If your AI guesses 'Healthy' for every patient, and 99/100 are healthy, it has 99% accuracy but missed the 1 sick person!\n\nInstead, use a **Confusion Matrix**. **Precision** minimizes False Alarms (crying wolf when there is no wolf). **Recall** minimizes Missed Dangers (missing the actual wolf). The **F1-Score** is a special formula that averages Precision and Recall together, giving you one honest, reliable score. This is how you answer evaluation questions in a placement interview.",
            "code": "from sklearn.metrics import classification_report\n\n# Ground Truth (Reality): 0 is Healthy, 1 is Sick\nreality   = [0, 0, 0, 0, 1, 1]\n# What our AI Predicted\npredicted = [0, 0, 0, 0, 0, 1] # It missed one sick person! (A False Negative)\n\n# This function automatically grades the AI on Precision, Recall, and F1-Score\nreport = classification_report(reality, predicted, zero_division=0)\nprint('Model Graded!')",
            "code_breakdown": [
                "reality / predicted: We compare the model's guesses against the real-world answer key.",
                "False Negative: The worst error in medicine. The AI said 'Negative' (Healthy), but it was False (they were sick).",
                "classification_report: A magical function that prints out a beautiful report card for your model."
            ],
            "quizzes": [
                {
                    "q": "Which metric combines both Precision and Recall into a single score?",
                    "options": [
                        "Accuracy",
                        "F1-Score",
                        "R-Squared"
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
            "theory": "Karthik, an AI algorithm is like a guitar. Before you start playing, you have to turn the tuning pegs to set the baseline pitch. These tuning pegs are called **Hyperparameters**.\n\nTo find the perfect tuning, we don't just guess. We use **Grid Search**. We hand the computer a list of different tuning peg settings, and it exhaustively tests every single combination to find the absolute perfect setup! Mentioning Grid Search in your interview shows you don't just build models, you optimize them.",
            "code": "from sklearn.model_selection import GridSearchCV\nfrom sklearn.svm import SVC\n\n# We provide a menu of different tuning peg options to test\ntuning_pegs = {\n    'C': [0.1, 1, 10], \n    'kernel': ['linear', 'rbf']\n}\n\n# GridSearch will test all 6 combinations (3 x 2) to find the best one!\ngrid_search = GridSearchCV(estimator=SVC(), param_grid=tuning_pegs, cv=3)\n\n# grid_search.fit(X_train, y_train)\nprint('Tuning Complete!')",
            "code_breakdown": [
                "tuning_pegs (param_grid): The dictionary holding the different options we want to test out.",
                "GridSearchCV: The automated robot that tests every single option for us.",
                "cv=3: Cross-Validation. It tests each combination 3 different times on different chunks of data to be absolutely sure it's good."
            ],
            "quizzes": [
                {
                    "q": "What do we call the parameters that the engineer sets manually BEFORE training begins?",
                    "options": [
                        "Internal Weights",
                        "Hyperparameters",
                        "Features"
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
            "theory": "Karthik, welcome to Deep Learning! The absolute king here is **PyTorch**. Everything revolves around a `Tensor`—a grid of numbers that can run on a Graphics Card (GPU). GPUs do thousands of math problems simultaneously, making training incredibly fast.\n\nThe real magic is **Autograd**. Neural Networks learn through heavy Calculus. If you tell a Tensor `requires_grad=True`, PyTorch records every math operation. When you yell `.backward()!`, PyTorch instantly does all the calculus backwards in time, figuring out how to adjust the network to make it smarter. Explaining Autograd perfectly in an interview is a guaranteed pass.",
            "code": "import torch\n\n# We create a Tensor (number) and ask PyTorch to watch it closely (requires_grad)\nx = torch.tensor([3.0], requires_grad=True)\n\n# We do some math. Equation: y = 2 * (x squared)\ny = 2 * (x ** 2)\n\n# MAGIC TIME! We ask PyTorch to do the Calculus derivative backwards!\ny.backward()\n\n# The derivative of 2x^2 is 4x. Since x is 3, the answer is 12!\nprint(f\"The gradient is: {x.grad.item()}\")",
            "code_breakdown": [
                "requires_grad=True: Turns on the secret camera to record the math operations.",
                "y.backward(): Triggers the Autograd engine to calculate the derivatives (slopes).",
                "x.grad: The secret pocket where PyTorch stores the final calculus answer."
            ],
            "quizzes": [
                {
                    "q": "What engine inside PyTorch automatically performs the calculus for you?",
                    "options": [
                        "TensorFlow",
                        "Autograd",
                        "NumPy"
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
            "theory": "Karthik, building a Neural Network is like building a multi-layer cake. The data goes in the bottom layer, passes through the middle (hidden) layers where the 'thinking' happens, and pops out the top layer as an answer. In PyTorch, we build this using Object-Oriented Classes.\n\nWe connect layers using 'Linear' connections. But to solve complex, twisty problems, we add **Activation Functions** (like ReLU) between the layers. ReLU acts as a gatekeeper: if a number is negative, it turns it to zero. This simple 'bend' in the math gives the network the superpower of non-linearity. This is exactly how you explain it to a hiring manager.",
            "code": "import torch\nimport torch.nn as nn\nimport torch.nn.functional as F\n\n# We build our network blueprint, inheriting the powers of nn.Module\nclass SimpleBrain(nn.Module):\n    def __init__(self):\n        super().__init__()\n        # We define the layers: Input (784) -> Hidden (128) -> Output (10)\n        self.layer1 = nn.Linear(784, 128)\n        self.layer2 = nn.Linear(128, 10)\n        \n    # The forward function acts as the map for how data flows through the layers\n    def forward(self, x):\n        x = self.layer1(x) # Data passes through layer 1\n        x = F.relu(x)      # The magic gatekeeper (Activation Function) bends the math\n        x = self.layer2(x) # Data passes through the output layer\n        return x\n\nprint('Brain Built!')",
            "code_breakdown": [
                "nn.Linear(): A layer of artificial neurons. It automatically holds the secret 'Weights and Biases' that the model will learn.",
                "forward(): The GPS path the data takes from the start to the end.",
                "F.relu(): The most popular activation function. It turns any negative number into a 0, preventing the math from becoming a boring straight line."
            ],
            "quizzes": [
                {
                    "q": "Which function introduces non-linearity to a Neural Network?",
                    "options": [
                        "Linear",
                        "ReLU",
                        "Autograd"
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
            "theory": "Karthik, standard Neural Networks are awful at looking at pictures. They break the image into a single, long line of pixels, losing all sense of space.\n\nTo solve this, we use **Convolutional Neural Networks (CNNs)**. Instead of looking at the whole scrambled picture at once, a CNN acts like a magnifying glass. It takes a tiny square (a Filter) and slides it across the image, looking for patterns like straight lines or curves. By sliding this magnifying glass (Convolution) and periodically shrinking the image down to save memory (Pooling), CNNs became the undisputed champions of Computer Vision.",
            "code": "import torch.nn as nn\n\nclass ImageScanner(nn.Module):\n    def __init__(self):\n        super().__init__()\n        # The Magnifying Glass! It sweeps a 3x3 square across the image\n        self.conv1 = nn.Conv2d(in_channels=1, out_channels=16, kernel_size=3)\n        self.relu = nn.ReLU()\n        \n        # The Shrinker! It cuts the image size in half to save memory\n        self.pool = nn.MaxPool2d(kernel_size=2)\n        \n    def forward(self, x):\n        x = self.conv1(x)\n        x = self.relu(x)\n        x = self.pool(x)\n        return x\n\nprint('CNN Eye Created!')",
            "code_breakdown": [
                "nn.Conv2d: The 2D Convolutional layer. 'kernel_size=3' means the magnifying glass is a 3x3 pixel square.",
                "nn.MaxPool2d: Slides over the image and only keeps the 'loudest' (maximum) pixel value, shrinking the image while keeping the most important features."
            ],
            "quizzes": [
                {
                    "q": "Which layer is responsible for sliding a small filter over an image to extract features?",
                    "options": [
                        "Linear Layer",
                        "Pooling Layer",
                        "Convolutional Layer"
                    ],
                    "ans": 2
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
            "theory": "Karthik, if a recruiter asks how ChatGPT works, this is your answer. Old AI read text word-by-word, constantly losing the plot. Then, Google invented the **Transformer**.\n\nThe Transformer introduced **Self-Attention**. It reads the ENTIRE sentence at the exact same time. It then asks: 'Which words are looking at each other?' In 'The bank of the river', the word 'bank' pays high 'Attention' to 'river', so the AI instantly knows it's water, not money. Because it processes everything simultaneously, we can feed it the entire internet across thousands of GPUs.",
            "code": "import torch\nimport torch.nn.functional as F\n\n# Imagine 1 sentence, 4 words, each represented by 64 numbers (Embeddings)\nquery = torch.rand(1, 4, 64) \nkey = torch.rand(1, 4, 64)\nvalue = torch.rand(1, 4, 64)\n\n# 1. Words ask 'What context do I need?' (Query) and match with 'What context I have' (Key)\nraw_attention = torch.bmm(query, key.transpose(1, 2))\n\n# 2. Convert matches into percentages (Attention Weights)\nattention_weights = F.softmax(raw_attention, dim=-1)\n\n# 3. Apply the attention to the actual Value of the words\nfinal_thought = torch.bmm(attention_weights, value)\nprint('Contextualized Output Shape:', final_thought.shape)",
            "code_breakdown": [
                "Query, Key, Value: Think of it like a library. The Query is your search term. The Key is the book title on the shelf. The Value is the actual text inside the book.",
                "torch.bmm: Batch Matrix Multiplication. The heavy math that calculates the connection between every single word and every other word instantly.",
                "F.softmax: Turns the math scores into nice percentages that add up to 100%."
            ],
            "quizzes": [
                {
                    "q": "What mechanism allows the Transformer to understand the context of a word based on the surrounding words?",
                    "options": [
                        "Convolution",
                        "Self-Attention",
                        "Recurrence"
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
            "theory": "Karthik, training an AI like ChatGPT from scratch costs millions of dollars. For normal developers building placement projects, this is impossible. That is why **Hugging Face** is your best friend.\n\nHugging Face is like the 'GitHub' for Machine Learning. Through their `transformers` library, you can download pre-trained, world-class models (like Meta's Llama) for free. With just three lines of Python code using the `pipeline` command, you can load a super-smart AI onto your laptop. Showcasing a Hugging Face integration in your portfolio proves you are up-to-date with modern AI workflows.",
            "code": "from transformers import pipeline\n\n# The 'pipeline' is the ultimate magic wand. It handles downloading the model and all the math.\n# Here, we ask it for a Sentiment Analysis AI.\n# ai_helper = pipeline(\"sentiment-analysis\")\n\nmy_text = \"I am absolutely thrilled about learning Generative AI!\"\n\n# We simply pass the text in, and it gives us the answer!\n# result = ai_helper(my_text)\n# print(result)\n\nprint('Hugging Face Magic Initialized!')",
            "code_breakdown": [
                "pipeline(): The easiest way to use AI. You just tell it what task you want (like 'text-generation' or 'translation'), and it does the rest.",
                "Tokenization (Behind the scenes): AI can't read English letters. The pipeline secretly cuts the text into pieces and turns them into numbers (Tokens) before feeding it to the AI."
            ],
            "quizzes": [
                {
                    "q": "What is the popular open-source hub where developers share AI models?",
                    "options": [
                        "Hugging Face",
                        "Kaggle",
                        "TensorFlow"
                    ],
                    "ans": 0
                }
            ],
            "exercise": "Print 'HF Ready'.",
            "starter_code": "print('HF Ready')",
            "expected_output": "HF Ready"
        },
        {
            "title": "17. RAG (Retrieval-Augmented Gen)",
            "theory": "Karthik, LLMs tend to confidently make up answers (Hallucinate), and they have no idea about your private company data. In a placement interview, if you mention building a RAG application, you are instantly in the top 1%.\n\n**RAG (Retrieval-Augmented Generation)** gives the AI an open-book test. First, we chop your private documents into pieces and store them in a **Vector Database**. When a user asks a question, the database instantly searches for the 3 most relevant paragraphs. We then staple those paragraphs to your question, telling the AI: 'Use THIS exact text to answer the question.' Now, the AI has your private facts and is banned from making things up!",
            "code": "# Pseudo-code to understand the RAG Workflow\n\nuser_question = \"What is the Wi-Fi password for the guest room?\"\n\n# Step 1: The Vector Database searches through thousands of company documents instantly\n# found_facts = vector_db.search(user_question)\n# found_facts -> \"The guest Wi-Fi password is 'Welcome2024'.\"\n\n# Step 2: We inject the facts into a strict instruction template\nprompt = f\"\"\"\nListen closely AI. Only use the Facts below to answer the user.\nFacts: {found_facts}\nQuestion: {user_question}\n\"\"\"\n\n# Step 3: The AI reads the facts and answers perfectly!\n# answer = ai.chat(prompt)\nprint('RAG System Configured!')",
            "code_breakdown": [
                "Embeddings: Turning words into lists of numbers. Words with similar meanings have numbers that are close to each other.",
                "Vector Database: A special database designed to search for matching lists of numbers (Embeddings) incredibly fast.",
                "Prompt Injection: The trick where we intercept the user's question, glue the retrieved facts to it, and hand it to the LLM."
            ],
            "quizzes": [
                {
                    "q": "What is the primary problem that RAG solves?",
                    "options": [
                        "Slow training times",
                        "AI Hallucinations and lack of private data",
                        "High electricity costs"
                    ],
                    "ans": 1
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
            "theory": "Karthik, an AI model is useless if it's trapped on your laptop. You need to let an iPhone app in another country talk to it. In the tech world, this bridge is a REST API.\n\nWe wrap our AI model inside **FastAPI**. FastAPI acts like a high-speed receptionist. When the iPhone app sends an HTTP request, FastAPI catches it, hands it to your AI model, waits for the prediction, and sends the answer back. It also uses Pydantic to strictly check incoming data, blocking bad data before it crashes your model. Recruiters love seeing FastAPI in your portfolio.",
            "code": "from fastapi import FastAPI\nfrom pydantic import BaseModel\n\n# We hire our receptionist (FastAPI)\napp = FastAPI()\n\n# We tell the bouncer (Pydantic) exactly what the incoming message must look like\nclass MessageFromPhone(BaseModel):\n    text_to_analyze: str\n\n# We set up the endpoint URL where the phone will send the message\n@app.post('/api/predict')\ndef get_prediction(msg: MessageFromPhone):\n    # We would pass msg.text_to_analyze to our AI model here\n    return {\n        'status': 'success',\n        'ai_answer': 'I think this text is very happy!'\n    }\nprint('API Web Server Online!')",
            "code_breakdown": [
                "FastAPI(): Starts the web server engine.",
                "BaseModel (Pydantic): The data validator. It ensures 'text_to_analyze' is strictly a String. If the user sends a number, it rejects the request safely.",
                "@app.post(): Opens a secure channel at the URL '/api/predict' waiting to receive data."
            ],
            "quizzes": [
                {
                    "q": "What tool does FastAPI use to strictly validate incoming data and prevent crashes?",
                    "options": [
                        "NumPy",
                        "Pydantic",
                        "PyTorch"
                    ],
                    "ans": 1
                }
            ],
            "exercise": "Print 'API Active'.",
            "starter_code": "print('API Active')",
            "expected_output": "API Active"
        },
        {
            "title": "19. Docker Containerization",
            "theory": "Karthik, the worst thing you can say in a tech interview is, 'Well, it works on my machine!' If you send your Python code to a production server, it might crash because the server has the wrong version of Python installed. \n\n**Docker** acts like a magical shipping container. You put your AI code and all the required libraries inside this container, and lock the doors. When you send this container to a server in the cloud, it runs its own mini-world inside. If it works on your laptop, Docker guarantees it works perfectly on any server in the world. Knowing Docker is a massive advantage for placements.",
            "code": "# This is a 'Dockerfile' - The recipe instruction manual for building our container\n\"\"\"\n# 1. Start with a mini-computer that already has Python installed\nFROM python:3.11-slim\n\n# 2. Make a folder inside the mini-computer called /app\nWORKDIR /app\n\n# 3. Copy our list of required libraries and install them\nCOPY requirements.txt .\nRUN pip install -r requirements.txt\n\n# 4. Copy our actual AI code into the mini-computer\nCOPY . .\n\n# 5. Tell the mini-computer what command to run when it turns on\nCMD [\"python\", \"my_api_server.py\"]\n\"\"\"\nprint('Docker Shipping Container Built!')",
            "code_breakdown": [
                "FROM: The foundation. We don't want a heavy Windows/Mac OS, so we use a 'slim' Linux that only has Python.",
                "COPY: Takes files from your actual laptop and pastes them inside the container's isolated hard drive.",
                "CMD: The final instruction. It's the command the container runs the second it finishes booting up."
            ],
            "quizzes": [
                {
                    "q": "What is the main purpose of Docker?",
                    "options": [
                        "To make Python code run faster",
                        "To package apps so they run identically on any machine",
                        "To train Machine Learning models"
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
            "theory": "Karthik, how do you show off your cool new AI project to a recruiter if you don't know HTML, CSS, or React?\n\nEnter **Streamlit**. Streamlit is an open-source library that turns pure Python scripts into beautiful, interactive web apps in minutes. You just type `st.title('My App')` in Python, and Streamlit instantly draws a big, beautiful header on a webpage. It is the ultimate tool for rapidly turning your AI placement projects into clickable, impressive prototypes.",
            "code": "import streamlit as st\n\n# Streamlit turns this Python code into a beautiful Web UI instantly!\nst.title('🤖 My First AI Web App')\n\n# This creates a text box on the website and saves what the user types\nuser_text = st.text_area('Write a sentence here:')\n\n# This creates a clickable button on the website\nif st.button('Predict Sentiment'):\n    \n    # This creates a cool loading spinner while the AI thinks\n    with st.spinner('The AI is thinking...'):\n        # ai_answer = model.predict(user_text)\n        \n        # This prints a beautiful green success box on the website\n        st.success('Prediction: POSITIVE!')\n        \n        # Drops celebration balloons on the screen!\n        st.balloons()\n\nprint('Streamlit App Code Ready!')",
            "code_breakdown": [
                "st.title(): Draws a large, bold HTML Header.",
                "st.text_area(): Creates an interactive input box. Whatever the user types is instantly passed into the 'user_text' Python variable.",
                "st.spinner(): Essential for AI apps! Since AI takes a few seconds to think, the spinner tells the user the app isn't frozen."
            ],
            "quizzes": [
                {
                    "q": "What is the primary use case for Streamlit?",
                    "options": [
                        "Training Deep Learning Models",
                        "Rapidly building Web UIs for AI using only Python",
                        "Database management"
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
