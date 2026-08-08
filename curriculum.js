const curriculum = {
    "Phase 1: Python Programming Mastery": [
        {
            "title": "1. Core Python & Type Hinting",
            "theory": "Pro-level Python starts with strict type hinting and memory management. We avoid dynamic typing chaos by explicitly defining data types (PEP 484) to ensure robust, enterprise-grade code.",
            "theory_tamil": "Pro-level Python என்பது strict type hinting மற்றும் memory management-ஐ அடிப்படையாகக் கொண்டது. Dynamic typing குழப்பங்களை தவிர்க்க, தரவு வகைகளை (PEP 484) தெளிவாக வரையறுத்து, enterprise-grade code-ஐ உருவாக்குகிறோம்.",
            "code": "def calculate_loss(predictions: list[float], targets: list[float]) -> float:\n    if len(predictions) != len(targets):\n        raise ValueError('Dimension mismatch')\n    return sum((p - t)**2 for p, t in zip(predictions, targets)) / len(targets)",
            "code_breakdown": [
                "list[float]: Type hints ensure inputs are lists of decimals.",
                "zip(): Efficiently pairs items from two iterables.",
                "-> float: Explicitly declares the return type."
            ],
            "interviews": [
                {
                    "q": "Why use type hinting in Python?",
                    "a": "It prevents runtime type errors, improves IDE autocompletion, and makes code self-documenting for large teams."
                }
            ],
            "quizzes": [
                {
                    "q": "What PEP introduced type hints to Python?",
                    "options": [
                        "PEP 8",
                        "PEP 484",
                        "PEP 20"
                    ],
                    "ans": 1
                }
            ],
            "exercise": "Define a type-hinted function that takes a string and returns an integer.",
            "starter_code": "def process_text(text: str) -> int:\n    return len(text)\nprint(process_text('AI'))",
            "expected_output": "2"
        },
        {
            "title": "2. Advanced Data Structures",
            "theory": "Beyond standard lists, engineers use optimized structures. Sets are hash maps with O(1) lookup. Tuples are immutable and memory-efficient. Dictionaries are the backbone of JSON APIs.",
            "theory_tamil": "சாதாரண Lists-ஐ தாண்டி, optimize செய்யப்பட்ட structures-ஐ பொறியாளர்கள் பயன்படுத்துகின்றனர். Sets-ல் O(1) தேடுதல் சாத்தியம். Tuples memory-efficient. Dictionaries JSON APIs-ன் அடித்தளம்.",
            "code": "from typing import Dict, Set\n\n# O(1) Lookups\nactive_users: Set[str] = {'user1', 'user2'}\n\n# Nested JSON representation\nmodel_config: Dict[str, any] = {\n    'learning_rate': 1e-4,\n    'optimizer': 'AdamW'\n}",
            "code_breakdown": [
                "Set[str]: A set of strings. 'in' checks take O(1) time.",
                "Dict[str, any]: Standard pattern for flexible configuration dictionaries."
            ],
            "interviews": [
                {
                    "q": "When would you use a Tuple instead of a List?",
                    "a": "When the data is immutable (read-only), such as coordinates or fixed hyperparameters, to save memory and prevent accidental modification."
                }
            ],
            "quizzes": [
                {
                    "q": "What is the time complexity of a dictionary key lookup in Python?",
                    "options": [
                        "O(N)",
                        "O(log N)",
                        "O(1)"
                    ],
                    "ans": 2
                }
            ],
            "exercise": "Check if 'Adam' is in the set.",
            "starter_code": "opts = {'Adam', 'SGD'}\nprint('Adam' in opts)",
            "expected_output": "True"
        },
        {
            "title": "3. Functions & Scopes",
            "theory": "First-class functions allow passing functions as arguments. *args and **kwargs enable variadic arguments, crucial for wrapping APIs and creating flexible ML model constructors.",
            "theory_tamil": "First-class functions மூலம் functions-ஐ arguments ஆக அனுப்பலாம். *args மற்றும் **kwargs மூலம் நெகிழ்வான (flexible) ML model constructors-ஐ உருவாக்கலாம்.",
            "code": "def build_model(architecture: str, **kwargs):\n    print(f\"Building {architecture}...\")\n    for key, val in kwargs.items():\n        print(f\"{key} = {val}\")\n\nbuild_model('ResNet', layers=50, dropout=0.2)",
            "code_breakdown": [
                "**kwargs: Unpacks arbitrary keyword arguments into a dictionary.",
                "kwargs.items(): Iterates through the unpacked key-value pairs."
            ],
            "interviews": [
                {
                    "q": "What is a lambda function?",
                    "a": "An anonymous, inline function typically used for short, throwaway operations like sorting keys."
                }
            ],
            "quizzes": [
                {
                    "q": "What does **kwargs evaluate to inside the function?",
                    "options": [
                        "Tuple",
                        "Dictionary",
                        "List"
                    ],
                    "ans": 1
                }
            ],
            "exercise": "Print the length of the args tuple.",
            "starter_code": "def count_args(*args):\n    print(len(args))\ncount_args(1,2,3)",
            "expected_output": "3"
        },
        {
            "title": "4. Object-Oriented ML",
            "theory": "OOP is how we abstract AI models. A model is a Class. Its weights are properties (state), and its forward pass is a method (behavior).",
            "theory_tamil": "OOP மூலமே AI models வடிவமைக்கப்படுகின்றன. Model என்பது ஒரு Class. அதன் weights என்பவை properties, forward pass என்பது ஒரு method.",
            "code": "class NeuralNet:\n    def __init__(self, layers: int):\n        self.layers = layers\n        self.is_trained = False\n        \n    def fit(self, data: list):\n        print('Training...')\n        self.is_trained = True\n\nmodel = NeuralNet(3)\nmodel.fit([1,2,3])",
            "code_breakdown": [
                "__init__: The constructor initializing the model's hyperparameter state.",
                "self: References the instance of the object in memory."
            ],
            "interviews": [
                {
                    "q": "What is polymorphism?",
                    "a": "The ability for different classes to provide different implementations of the same method (e.g., calling .predict() on both a Tree and a Neural Net)."
                }
            ],
            "quizzes": [
                {
                    "q": "Which method is the constructor in Python?",
                    "options": [
                        "__main__",
                        "__init__",
                        "__build__"
                    ],
                    "ans": 1
                }
            ],
            "exercise": "Print the layers attribute of the model.",
            "starter_code": "class ML:\n    def __init__(self):\n        self.layers = 5\nprint(ML().layers)",
            "expected_output": "5"
        },
        {
            "title": "5. Generators & Decorators",
            "theory": "Generators lazily evaluate data, saving RAM when loading massive TB-sized ML datasets. Decorators modify function behavior, often used for caching or API authentication.",
            "theory_tamil": "Generators மிகப்பெரிய ML datasets-ஐ load செய்யும் போது RAM-ஐ சேமிக்க உதவுகின்றன. Decorators function-ன் செயல்பாட்டை மாற்றுகின்றன (எ.கா. caching, authentication).",
            "code": "import time\n\n# Decorator for measuring training time\ndef timer(func):\n    def wrapper(*args, **kwargs):\n        start = time.time()\n        result = func(*args, **kwargs)\n        print(f\"Time: {time.time()-start:.4f}s\")\n        return result\n    return wrapper\n\n@timer\ndef train():\n    time.sleep(0.1)\n\ntrain()",
            "code_breakdown": [
                "@timer: Syntactic sugar that wraps the train() function inside timer().",
                "wrapper(*args, **kwargs): Ensures the decorator can handle any function signature."
            ],
            "interviews": [
                {
                    "q": "Difference between yield and return?",
                    "a": "Return terminates the function and sends back a value. Yield suspends execution, returning a generator object that produces a stream of values lazily."
                }
            ],
            "quizzes": [
                {
                    "q": "What keyword is used to create a generator?",
                    "options": [
                        "return",
                        "yield",
                        "generate"
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
            "theory": "NumPy relies on contiguous C arrays. Vectorization allows applying operations to entire arrays concurrently, bypassing slow Python `for` loops. Essential for tensor math.",
            "theory_tamil": "NumPy C arrays-ஐ அடிப்படையாகக் கொண்டது. Vectorization மூலம் slow Python `for` loops-ஐ தவிர்த்து, முழூ arrays-க்கும் ஒரே நேரத்தில் செயல்பாடுகளைச் செய்யலாம்.",
            "code": "import numpy as np\n\n# Matrix multiplication (Dot product)\nX = np.array([[1, 2], [3, 4]])\nW = np.array([[0.5, 0.5], [0.5, 0.5]])\n\n# Equivalent to X @ W\noutput = np.dot(X, W)\nprint(output.shape)",
            "code_breakdown": [
                "np.array(): Creates a highly optimized ndarray.",
                "np.dot() / @: Computes the matrix dot product, the core operation in neural networks."
            ],
            "interviews": [
                {
                    "q": "What is Broadcasting in NumPy?",
                    "a": "The ability to perform arithmetic operations between arrays of different shapes by virtually expanding the smaller array."
                }
            ],
            "quizzes": [
                {
                    "q": "Which operation performs matrix multiplication?",
                    "options": [
                        "X * W",
                        "X @ W",
                        "X ** W"
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
            "theory": "Pandas is the industry standard for tabular data. A DataFrame is a 2D labeled data structure. We use it for cleaning, filtering, and engineering features before feeding data to ML models.",
            "theory_tamil": "Pandas tabular data-க்கான industry standard. DataFrame என்பது 2D labeled data. ML models-க்கு data-ஐ அனுப்பும் முன் அதை clean செய்ய இது பயன்படுகிறது.",
            "code": "import pandas as pd\n\ndf = pd.DataFrame({'Age': [25, np.nan, 30], 'Income': [50k, 60k, 70k]})\n\n# Pro-level data cleaning pipeline\nclean_df = (\n    df.dropna(subset=['Age'])\n      .assign(Income=lambda x: x['Income'] * 1.1)\n)\nprint(clean_df.shape)",
            "code_breakdown": [
                "dropna(): Removes missing values to prevent model crashes.",
                ".assign(): Method chaining approach to safely mutate data without altering the original dataframe."
            ],
            "interviews": [
                {
                    "q": "Loc vs Iloc?",
                    "a": ".loc is label-based indexing (using column names). .iloc is integer-position based indexing (using row/col numbers)."
                }
            ],
            "quizzes": [
                {
                    "q": "How do you drop missing values in Pandas?",
                    "options": [
                        "df.remove_nan()",
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
            "theory": "Exploratory Data Analysis (EDA) prevents 'garbage in, garbage out'. We use Matplotlib/Seaborn to spot outliers, assess distributions, and check feature correlations.",
            "theory_tamil": "EDA மூலம் 'garbage in, garbage out' தவிர்க்கப்படுகிறது. Outliers-ஐ கண்டறியவும், correlations-ஐ சரிபார்க்கவும் Matplotlib/Seaborn பயன்படுகிறது.",
            "code": "import matplotlib.pyplot as plt\nimport seaborn as sns\nimport numpy as np\n\ndata = np.random.randn(1000)\n\n# sns.histplot(data, kde=True)\n# plt.title('Data Distribution')\nprint('Visualization Ready')",
            "code_breakdown": [
                "sns.histplot: Plots a histogram with a Kernel Density Estimate (KDE) curve to view the shape of the data distribution."
            ],
            "interviews": [
                {
                    "q": "What is a correlation matrix?",
                    "a": "A table showing correlation coefficients between variables. If two features are highly correlated (>0.9), one is usually dropped to prevent multicollinearity."
                }
            ],
            "quizzes": [
                {
                    "q": "Which plot is best for identifying outliers?",
                    "options": [
                        "Pie Chart",
                        "Box Plot",
                        "Line Graph"
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
            "title": "9. Supervised Learning & Pipelines",
            "theory": "Supervised ML learns from labeled data. We build robust `Pipeline` objects in Scikit-Learn to sequentially apply data scaling, encoding, and finally the estimator, preventing data leakage.",
            "theory_tamil": "Supervised ML labeled data-ல் இருந்து கற்கிறது. Data leakage-ஐ தவிர்க்க, Scikit-Learn-ல் scaling, encoding மற்றும் estimator-ஐ உள்ளடக்கிய `Pipeline` objects-ஐ உருவாக்குகிறோம்.",
            "code": "from sklearn.pipeline import Pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.ensemble import RandomForestClassifier\n\npipe = Pipeline([\n    ('scaler', StandardScaler()),\n    ('rf', RandomForestClassifier(n_estimators=100))\n])\n\n# pipe.fit(X_train, y_train)\nprint('Pipeline Built')",
            "code_breakdown": [
                "StandardScaler: Centers data to mean 0 and standard deviation 1. Crucial for gradient descent.",
                "Pipeline: Ensures transformations applied to train data are identically applied to test data."
            ],
            "interviews": [
                {
                    "q": "What is Data Leakage?",
                    "a": "When information from outside the training dataset (like test set statistics) is used to create the model, leading to overly optimistic performance estimates."
                }
            ],
            "quizzes": [
                {
                    "q": "Which scaler transforms data to have zero mean and unit variance?",
                    "options": [
                        "MinMaxScaler",
                        "StandardScaler",
                        "RobustScaler"
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
            "theory": "Accuracy is a trap for imbalanced datasets. Professionals use Precision (preventing false positives), Recall (preventing false negatives), and the F1-Score (harmonic mean).",
            "theory_tamil": "Imbalanced datasets-க்கு Accuracy ஒரு பொறி. வல்லுநர்கள் Precision, Recall மற்றும் F1-Score ஆகியவற்றையே பயன்படுத்துகின்றனர்.",
            "code": "from sklearn.metrics import classification_report\n\ny_true = [0, 1, 1, 0, 1]\ny_pred = [0, 1, 0, 0, 1]\n\n# report = classification_report(y_true, y_pred)\nprint('Evaluated')",
            "code_breakdown": [
                "classification_report: Automatically calculates precision, recall, f1-score, and support for each class."
            ],
            "interviews": [
                {
                    "q": "In a medical cancer diagnosis model, which metric is most important?",
                    "a": "Recall. It is better to have a False Positive (false alarm) than a False Negative (missing actual cancer)."
                }
            ],
            "quizzes": [
                {
                    "q": "What metric is the harmonic mean of Precision and Recall?",
                    "options": [
                        "Accuracy",
                        "ROC-AUC",
                        "F1-Score"
                    ],
                    "ans": 2
                }
            ],
            "exercise": "Print 'Metrics Validated'.",
            "starter_code": "print('Metrics Validated')",
            "expected_output": "Metrics Validated"
        },
        {
            "title": "11. Hyperparameter Tuning",
            "theory": "Hyperparameters (like tree depth or learning rate) are not learned by the algorithm; the engineer sets them. We use Cross-Validation via GridSearchCV to systematically find the optimal settings.",
            "theory_tamil": "Hyperparameters (எ.கா. learning rate) தானாக கற்கப்படுவதில்லை; நாமே அமைக்க வேண்டும். சிறந்த அமைப்புகளைக் கண்டறிய GridSearchCV மூலம் Cross-Validation பயன்படுத்துகிறோம்.",
            "code": "from sklearn.model_selection import GridSearchCV\nfrom sklearn.svm import SVC\n\nparam_grid = {'C': [0.1, 1, 10], 'kernel': ['linear', 'rbf']}\n# grid = GridSearchCV(SVC(), param_grid, cv=5)\n# grid.fit(X, y)\nprint('Tuning Complete')",
            "code_breakdown": [
                "GridSearchCV: Exhaustively searches over specified parameter values.",
                "cv=5: 5-Fold Cross Validation. Splits data 5 ways to ensure robust validation."
            ],
            "interviews": [
                {
                    "q": "RandomSearch vs GridSearch?",
                    "a": "GridSearch tries every single combination (expensive). RandomSearch samples randomly, often finding a near-optimal solution much faster."
                }
            ],
            "quizzes": [
                {
                    "q": "What does CV stand for in GridSearchCV?",
                    "options": [
                        "Computer Vision",
                        "Cross-Validation",
                        "Cost Variance"
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
            "theory": "PyTorch is the undisputed king of deep learning research. A Tensor is an N-dimensional array that can run on a GPU. Autograd automatically computes gradients for backpropagation.",
            "theory_tamil": "PyTorch deep learning-ன் முடிசூடா மன்னன். Tensor என்பது GPU-ல் இயங்கக்கூடிய N-dimensional array. Autograd தானாகவே backpropagation-க்கான gradients-ஐ கணக்கிடும்.",
            "code": "import torch\n\n# Requires_grad tracks operations for backprop\nx = torch.tensor([2.0], requires_grad=True)\ny = x ** 3\n\ny.backward() # Computes dy/dx\nprint(x.grad) # 3 * 2^2 = 12.0",
            "code_breakdown": [
                "requires_grad=True: Tells PyTorch to build a computational graph tracking every operation applied to this tensor.",
                "y.backward(): Triggers the chain rule from calculus to compute gradients."
            ],
            "interviews": [
                {
                    "q": "Why do we zero gradients in PyTorch during training (`optimizer.zero_grad()`)?",
                    "a": "Because PyTorch accumulates gradients by default. If we don't zero them, the new gradients will be added to the old ones from the previous batch."
                }
            ],
            "quizzes": [
                {
                    "q": "What engine in PyTorch automatically calculates derivatives?",
                    "options": [
                        "TorchScript",
                        "Autograd",
                        "CUDA"
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
            "theory": "We construct networks by inheriting from `torch.nn.Module`. We define the layers in `__init__` and the data flow in `forward()`. This provides immense architectural flexibility.",
            "theory_tamil": "`torch.nn.Module`-ஐ inherit செய்து networks உருவாக்குகிறோம். `__init__`-ல் layers-ஐயும், `forward()`-ல் data flow-ஐயும் வரையறுக்கிறோம்.",
            "code": "import torch.nn as nn\nimport torch.nn.functional as F\n\nclass SimpleMLP(nn.Module):\n    def __init__(self):\n        super().__init__()\n        self.fc1 = nn.Linear(784, 128)\n        self.fc2 = nn.Linear(128, 10)\n        \n    def forward(self, x):\n        x = F.relu(self.fc1(x))\n        return self.fc2(x)\n\nprint('Architecture Built')",
            "code_breakdown": [
                "nn.Linear(784, 128): A fully connected hidden layer taking 784 inputs and outputting 128.",
                "F.relu(): Activation function that introduces non-linearity, allowing the network to learn complex patterns."
            ],
            "interviews": [
                {
                    "q": "What is the purpose of an activation function like ReLU?",
                    "a": "Without activation functions, a neural network is just a series of linear matrix multiplications, meaning it could only solve linear problems. ReLU introduces non-linearity."
                }
            ],
            "quizzes": [
                {
                    "q": "Which method defines how data passes through a PyTorch model?",
                    "options": [
                        "predict()",
                        "backward()",
                        "forward()"
                    ],
                    "ans": 2
                }
            ],
            "exercise": "Print 'Model Initialized'.",
            "starter_code": "print('Model Initialized')",
            "expected_output": "Model Initialized"
        },
        {
            "title": "14. CNNs & Computer Vision",
            "theory": "Convolutional Neural Networks (CNNs) use filters to scan images and extract spatial hierarchies of features (edges -> textures -> objects). Standard for Image Classification.",
            "theory_tamil": "CNNs படங்களை scan செய்து அதிலுள்ள features-ஐ (edges, textures) பிரித்தெடுக்க filters-ஐ பயன்படுத்துகின்றன. இது Image Classification-க்கு சிறந்தது.",
            "code": "import torch.nn as nn\n\nclass CNN(nn.Module):\n    def __init__(self):\n        super().__init__()\n        # 1 input channel (Grayscale), 16 filters, 3x3 kernel\n        self.conv1 = nn.Conv2d(1, 16, kernel_size=3, stride=1, padding=1)\n        self.pool = nn.MaxPool2d(kernel_size=2, stride=2)\n        \nprint('CNN Built')",
            "code_breakdown": [
                "nn.Conv2d: Sweeps a matrix (kernel) over the image to detect features.",
                "nn.MaxPool2d: Downsamples the spatial dimensions, reducing computational load and preventing overfitting."
            ],
            "interviews": [
                {
                    "q": "Why use CNNs over fully connected MLPs for images?",
                    "a": "CNNs preserve spatial relationships between pixels and have significantly fewer parameters due to weight sharing in the convolutional kernels."
                }
            ],
            "quizzes": [
                {
                    "q": "What layer reduces the height and width of feature maps in a CNN?",
                    "options": [
                        "Dense",
                        "Conv2d",
                        "MaxPool2d"
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
            "theory": "The Transformer (Attention Is All You Need, 2017) revolutionized AI. Instead of reading text sequentially like RNNs, the Self-Attention mechanism allows it to weigh the context of all words simultaneously.",
            "theory_tamil": "Transformer கட்டமைப்பு AI-ல் பெரும் புரட்சியை ஏற்படுத்தியது. RNN போல வரிசையாக படிக்காமல், Self-Attention மூலம் அனைத்து வார்த்தைகளின் பின்னணியையும் ஒரே நேரத்தில் கணக்கிடுகிறது.",
            "code": "import torch\nimport torch.nn as nn\n\n# A simplified Attention visualization\nquery = torch.rand(1, 10, 64) # Batch, Seq_len, Dim\nkey = torch.rand(1, 10, 64)\n\n# Q * K^T calculates attention scores\nattention_scores = torch.bmm(query, key.transpose(1, 2))\nprint(attention_scores.shape)",
            "code_breakdown": [
                "Query & Key: In Self-Attention, words ask 'what am I looking for' (Query) and broadcast 'what I contain' (Key).",
                "bmm: Batch matrix multiplication to calculate the attention weights."
            ],
            "interviews": [
                {
                    "q": "Why did Transformers replace LSTMs for NLP?",
                    "a": "Transformers process sequences in parallel (enabling massive GPU scaling) and do not suffer from the vanishing gradient problem on long texts like LSTMs do."
                }
            ],
            "quizzes": [
                {
                    "q": "What mechanism is the core of the Transformer architecture?",
                    "options": [
                        "Convolution",
                        "Self-Attention",
                        "Recurrence"
                    ],
                    "ans": 1
                }
            ],
            "exercise": "Print the shape output: torch.Size([1, 10, 10]).",
            "starter_code": "print('torch.Size([1, 10, 10])')",
            "expected_output": "torch.Size([1, 10, 10])"
        },
        {
            "title": "16. Hugging Face & Pre-trained Models",
            "theory": "Hugging Face is the GitHub of Machine Learning. It provides the `transformers` library, allowing you to download and run massive open-source models (Llama 3, Mistral) in 3 lines of code.",
            "theory_tamil": "Hugging Face என்பது ML-க்கான GitHub ஆகும். இதன் மூலம் Llama 3, Mistral போன்ற மாபெரும் open-source மாடல்களை வெறும் 3 வரி code-ல் இயக்கலாம்.",
            "code": "from transformers import pipeline\n\n# Download a lightweight sentiment model\n# nlp = pipeline('sentiment-analysis')\n# result = nlp('I love this new AI curriculum!')\n# print(result)\nprint('Downloaded Model')",
            "code_breakdown": [
                "pipeline(): The highest-level API in Hugging Face. It automatically handles tokenization, model inference, and post-processing decoding."
            ],
            "interviews": [
                {
                    "q": "What is the role of a Tokenizer?",
                    "a": "LLMs cannot read text. A tokenizer breaks raw strings into sub-word tokens and maps them to integer IDs that the neural network can process via embeddings."
                }
            ],
            "quizzes": [
                {
                    "q": "What library acts as the hub for open-source NLP models?",
                    "options": [
                        "TensorFlow",
                        "Hugging Face Transformers",
                        "OpenAI"
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
            "theory": "LLMs hallucinate and lack private data. RAG solves this by converting documents into vector embeddings (using ChromaDB/Pinecone), searching for relevant chunks, and feeding them to the LLM as context.",
            "theory_tamil": "LLMs-க்கு private data தெரியாது. இதை தீர்க்க, RAG முறையில் documents-ஐ vector embeddings ஆக மாற்றி, தேவையான தகவலை தேடி எடுத்து LLM-க்கு context ஆக கொடுக்கிறோம்.",
            "code": "# Pseudo-code for RAG Pipeline\n# 1. embed_doc() -> VectorDB\n# 2. query_vector = embed_query(user_text)\n# 3. context = VectorDB.similarity_search(query_vector)\n# 4. LLM.generate(prompt=f'Given {context}, answer {user_text}')\nprint('RAG Pipeline Conceived')",
            "code_breakdown": [
                "Vector Embeddings: Arrays of floats (e.g. 1536 dimensions) representing the semantic meaning of text.",
                "Similarity Search: Usually Cosine Similarity to find documents closest in meaning to the query vector."
            ],
            "interviews": [
                {
                    "q": "Why use RAG instead of fine-tuning a model on your private data?",
                    "a": "Fine-tuning is expensive, requires ML expertise, and models can't easily 'forget' data. RAG is cheap, deterministic, and you can instantly update the database."
                }
            ],
            "quizzes": [
                {
                    "q": "What kind of database is used to store and search embeddings?",
                    "options": [
                        "Relational DB",
                        "Vector DB",
                        "Graph DB"
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
            "theory": "An ML model is just a Python object in RAM. To let mobile apps or websites use it, we wrap it in a REST API. FastAPI is the modern standard due to its immense speed and automatic Swagger UI.",
            "theory_tamil": "ML model என்பது RAM-ல் உள்ள ஒரு Python object மட்டுமே. Mobile apps இதை பயன்படுத்த, இதை REST API ஆக மாற்றுகிறோம். இதற்கு FastAPI நவீன தரநிலையாக உள்ளது.",
            "code": "from fastapi import FastAPI\nfrom pydantic import BaseModel\n\napp = FastAPI()\nclass Payload(BaseModel):\n    text: str\n\n@app.post('/predict')\ndef predict_sentiment(data: Payload):\n    # result = model.predict(data.text)\n    return {'sentiment': 'positive'}\nprint('API Running')",
            "code_breakdown": [
                "BaseModel (Pydantic): Enforces strict data validation on incoming JSON requests.",
                "@app.post(): A decorator that exposes the function via a POST HTTP endpoint."
            ],
            "interviews": [
                {
                    "q": "Why FastAPI over Flask or Django for ML?",
                    "a": "FastAPI natively supports async/await (good for I/O bound LLM calls), automatic data validation via Pydantic, and automatic OpenAPI documentation generation."
                }
            ],
            "quizzes": [
                {
                    "q": "What library does FastAPI use for data validation?",
                    "options": [
                        "SQLAlchemy",
                        "Pydantic",
                        "Jinja2"
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
            "theory": "'It works on my machine' is a cardinal sin in engineering. Docker packages your Python code, dependencies (requirements.txt), and OS-level libraries into an immutable container image.",
            "theory_tamil": "'என் கணினியில் வேலை செய்கிறது' என்பது பொறியியலில் பெரும் தவறு. Docker உங்கள் Python code, dependencies அனைத்தையும் ஒரே immutable container-ஆக சுருக்குகிறது.",
            "code": "# Dockerfile Example\n# FROM python:3.10-slim\n# WORKDIR /app\n# COPY requirements.txt .\n# RUN pip install -r requirements.txt\n# COPY . .\n# CMD [\"uvicorn\", \"main:app\", \"--host\", \"0.0.0.0\"]\nprint('Docker Image Built')",
            "code_breakdown": [
                "FROM python:3.10-slim: Uses a lightweight official Python Linux image as the base.",
                "CMD: The command executed when the container spins up."
            ],
            "interviews": [
                {
                    "q": "Docker Image vs Docker Container?",
                    "a": "An Image is the read-only blueprint (the executable package). A Container is the live, running instance of that image in memory."
                }
            ],
            "quizzes": [
                {
                    "q": "What file defines how a Docker Image is built?",
                    "options": [
                        "docker.json",
                        "Dockerfile",
                        "docker.yaml"
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
            "theory": "Data Scientists don't want to write React or CSS. Streamlit allows you to build interactive Web UIs for your AI models entirely in pure Python.",
            "theory_tamil": "Data Scientists UI எழுத விரும்புவதில்லை. Streamlit மூலம் உங்கள் AI models-க்கான interactive Web UI-ஐ முழுமையாக Python-லேயே உருவாக்கலாம்.",
            "code": "import streamlit as st\n\nst.title('AI Chatbot')\nuser_input = st.text_input('Ask me anything:')\nif st.button('Generate'):\n    st.write(f'AI: Here is the answer to {user_input}')\nprint('Streamlit Running')",
            "code_breakdown": [
                "st.title(): Automatically renders an H1 tag.",
                "st.text_input(): Renders a React-based input field and binds the output to the Python variable."
            ],
            "interviews": [
                {
                    "q": "How does Streamlit's execution model work?",
                    "a": "Every time an interaction happens (like a button click or slider move), Streamlit reruns the entire Python script from top to bottom."
                }
            ],
            "quizzes": [
                {
                    "q": "Streamlit is used primarily for?",
                    "options": [
                        "Database queries",
                        "Rapid AI Web UI Prototyping",
                        "Training models"
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
