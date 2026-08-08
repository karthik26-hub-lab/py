const curriculum = {
    "Phase 1: Python Programming Mastery": [
        {
            "title": "1. Core Python & Type Hinting",
            "theory": "Welcome to your first day as an AI Engineer! Imagine Python as a massive, magical warehouse. In this warehouse, you need to store things in boxes (variables). If you just throw items into boxes without labeling them, you'll eventually lose track of what's inside, leading to a huge mess. That's what we call 'dynamic typing'—it's fast at first, but chaotic later.\n\nTo become a pro, we use 'Type Hinting'. This is like slapping a bright, clear label on every box (e.g., 'This box ONLY holds numbers'). By explicitly declaring what data goes where (using PEP 484), we make our code incredibly easy to read and prevent our AI models from crashing because they expected a number but received a word. It's the first secret to writing code that doesn't just work, but works beautifully.",
            "theory_tamil": "AI பொறியியலாளராக உங்கள் முதல் நாளுக்கு நல்வரவு! Python-ஐ ஒரு பெரிய மேஜிக் குடோனாக கற்பனை செய்துகொள்ளுங்கள். இதில், நீங்கள் பொருட்களை பெட்டிகளில் (variables) சேமிக்க வேண்டும். பெட்டிகளில் என்ன இருக்கிறது என்று லேபிள் ஒட்டாமல் பொருட்களைப் போட்டால், பின்னாளில் பெரும் குழப்பம் ஏற்படும். இதையே நாம் 'dynamic typing' என்கிறோம்—ஆரம்பத்தில் இது வேகமாக இருந்தாலும், பிறகு பெரும் குழப்பத்தை விளைவிக்கும்.\n\nஒரு சிறந்த பொறியாளராக மாற, நாம் 'Type Hinting'-ஐப் பயன்படுத்துகிறோம். அதாவது ஒவ்வொரு பெட்டியிலும் தெளிவான லேபிள் ஒட்டுவது போன்றது (எ.கா: 'இந்தப் பெட்டியில் எண்கள் மட்டுமே இருக்கும்'). தரவுகள் எங்கே செல்ல வேண்டும் என்பதைத் தெளிவாகக் குறிப்பிடுவதன் மூலம் (PEP 484), குறியீட்டைப் படிப்பது மிகவும் எளிதாகிறது. ஒரு மாடல் எண்ணை எதிர்பார்க்கும் போது வார்த்தை வந்தால் ஏற்படும் பிழைகளையும் இது தடுக்கிறது. இதுவே அழகாகவும் சரியாகவும் இயங்கும் குறியீட்டை எழுதுவதற்கான முதல் ரகசியம்.",
            "code": "def calculate_loss(predictions: list[float], targets: list[float]) -> float:\n    # We check if both lists have the same number of items\n    if len(predictions) != len(targets):\n        raise ValueError('Oops! The lists are not the same length.')\n    \n    # We calculate the error between prediction and target\n    return sum((p - t)**2 for p, t in zip(predictions, targets)) / len(targets)",
            "code_breakdown": [
                "list[float]: This is our label! It tells everyone 'predictions' is a list of decimal numbers.",
                "-> float: This promises that when the function finishes, it will hand back a single decimal number.",
                "raise ValueError: A polite way of making the program stop and scream if something goes wrong."
            ],
            "interviews": [
                {
                    "q": "If Python doesn't enforce type hints, why do we use them?",
                    "a": "Think of type hints like a spell-checker. Python itself might not care, but tools like our code editors (IDEs) will read the hints and warn us of mistakes before we even run the program!"
                }
            ],
            "quizzes": [
                {
                    "q": "What is the main benefit of Type Hinting?",
                    "options": [
                        "It makes Python run faster",
                        "It makes code easier to read and catches bugs early",
                        "It automatically converts text to numbers"
                    ],
                    "ans": 1
                }
            ],
            "exercise": "Define a function `greet` that expects a string and returns a string.",
            "starter_code": "def greet(name: str) -> str:\n    return 'Hello ' + name\nprint(greet('AI'))",
            "expected_output": "Hello AI"
        },
        {
            "title": "2. Advanced Data Structures",
            "theory": "If you're building a house, you wouldn't use a hammer for every single job—you need a full toolkit. In Python, Data Structures are your toolkit for organizing information. Standard Lists are like a bookshelf; if you want to find a specific book, you have to scan every single shelf, which is slow (O(N) time).\n\nLet me introduce you to the pro tools. A 'Set' is like an exclusive VIP club—it instantly kicks out any duplicate items, and it can check if someone is on the guest list in a fraction of a second (O(1) time). A 'Tuple' is a sealed time capsule; once you put data inside, it can never be changed, which is great for protecting important settings. Finally, a 'Dictionary' works exactly like a real-life dictionary: you look up a specific 'Word' (Key) and instantly get its 'Meaning' (Value). Dictionaries are the beating heart of how computers talk to each other across the internet.",
            "theory_tamil": "நீங்கள் ஒரு வீடு கட்டினால், எல்லா வேலைகளுக்கும் சுத்தியலை மட்டுமே பயன்படுத்த மாட்டீர்கள்—உங்களுக்கு ஒரு முழுமையான கருவிப்பெட்டி தேவை. Python-ல், Data Structures என்பவை தகவல்களை ஒழுங்கமைப்பதற்கான உங்கள் கருவிப்பெட்டியாகும். சாதாரண Lists ஒரு புத்தக அலமாரி போன்றவை; ஒரு புத்தகத்தைத் தேட, நீங்கள் அலமாரி முழுவதையும் தேட வேண்டும், இது மிகவும் மெதுவானது (O(N) நேரம்).\n\nஇப்போது சில சிறப்பு கருவிகளைப் பார்ப்போம். 'Set' என்பது ஒரு VIP கிளப் போன்றது—இதில் ஒரே நபர் இருமுறை வரமுடியாது (duplicates இல்லை), மேலும் ஒருவர் விருந்தினர் பட்டியலில் உள்ளாரா என்பதை நொடிப்பொழுதில் சொல்லிவிடும் (O(1) நேரம்). 'Tuple' ஒரு மூடி சீல் வைக்கப்பட்ட பெட்டி போன்றது; உள்ளே வைத்த தரவை மாற்ற முடியாது, இது முக்கிய அமைப்புகளைப் பாதுகாக்கச் சிறந்தது. 'Dictionary' உண்மையான அகராதியைப் போலவே செயல்படுகிறது: ஒரு 'வார்த்தையை' (Key) தேடினால் அதன் 'அர்த்தம்' (Value) உடனே கிடைக்கும். இணையத்தில் கணினிகள் பேசிக்கொள்ள இந்த Dictionaries தான் உயிர்நாடி.",
            "code": "from typing import Dict, Set, Tuple\n\n# A Set acts like a VIP club. The second 'user_101' is instantly kicked out!\nactive_users: Set[str] = {'user_101', 'user_202', 'user_101'}\n\n# A Tuple is a sealed vault. We use it to lock in our settings.\nhyperparams: Tuple[float, int] = (0.001, 64) \n\n# A Dictionary connects Keys to Values instantly.\nmodel_config: Dict[str, any] = {\n    'learning_rate': hyperparams[0],\n    'batch_size': hyperparams[1],\n    'optimizer': 'AdamW'\n}",
            "code_breakdown": [
                "Set: Eliminates duplicates automatically. Fast searches.",
                "Tuple: A read-only list. You cannot accidentally overwrite hyperparams[0].",
                "Dict: A structured way to organize key-value pairs, heavily used in AI configurations."
            ],
            "interviews": [
                {
                    "q": "When would you use a Tuple instead of a List?",
                    "a": "Imagine you have GPS coordinates for a city. They shouldn't change while your program is running! Using a Tuple prevents you (or another programmer) from accidentally changing the data."
                }
            ],
            "quizzes": [
                {
                    "q": "Which data structure is best for instantly checking if a user ID exists in a massive database of millions of users?",
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
            "theory": "Think of a function like a magical recipe box. You put ingredients (arguments) in the top, the box does some cooking, and a finished meal (return value) comes out the bottom. But what if you don't know exactly how many ingredients someone wants to put in?\n\nEnter the magic of `*args` and `**kwargs`. By putting a little star (`*`) in front of a word, you tell Python: 'Take all the extra items they give me, and wrap them up into a neat little Tuple.' Two stars (`**`) mean: 'Take all the extra labeled items, and pack them into a Dictionary!' This gives you incredible flexibility. It's how giant AI frameworks allow you to pass dozens of different customization options to a model without the creators having to write a million different rules.",
            "theory_tamil": "Function-ஐ ஒரு மேஜிக் சமையல் பெட்டியாக நினைத்துக் கொள்ளுங்கள். நீங்கள் சில பொருட்களை (arguments) உள்ளே போட்டால், அது சமைத்து ஒரு உணவை (return value) வெளியே தரும். ஆனால், ஒருவர் எத்தனை பொருட்களை உள்ளே போடுவார் என்று உங்களுக்குத் தெரியாவிட்டால் என்ன செய்வது?\n\nஇங்குதான் `*args` மற்றும் `**kwargs`-ன் மேஜிக் தொடங்குகிறது. ஒரு வார்த்தைக்கு முன் ஒரு நட்சத்திரம் (`*`) போட்டால், 'கூடுதலாக வரும் அனைத்துப் பொருட்களையும் சேர்த்து ஒரு Tuple ஆக மாற்று' என்று அர்த்தம். இரண்டு நட்சத்திரங்கள் (`**`) போட்டால், 'லேபிள் செய்யப்பட்ட கூடுதல் பொருட்களை ஒரு Dictionary ஆக மாற்று!' என்று அர்த்தம். இது உங்களுக்கு அபாரமான நெகிழ்வுத்தன்மையைத் (flexibility) தருகிறது. பெரிய AI frameworks-ல் பயனர்கள் தங்களுக்குத் தேவையான பல அமைப்புகளை எளிதாக உள்ளிட இந்த முறையே பயன்படுகிறது.",
            "code": "def build_model(architecture: str, *layers: int, **kwargs):\n    print(f\"Building {architecture}...\")\n    print(f\"Layers provided: {layers}\")\n    \n    # We loop through our dictionary of extra labeled settings\n    for param, value in kwargs.items():\n        print(f\"Setting {param} to {value}\")\n\n# We give 1 string, 2 extra numbers (*args), and 2 labeled settings (**kwargs)!\nbuild_model('DeepNet', 128, 64, dropout=0.2, activation='relu')",
            "code_breakdown": [
                "*layers: Collects '128' and '64' into a Tuple: (128, 64).",
                "**kwargs: Collects 'dropout' and 'activation' into a Dictionary.",
                "kwargs.items(): A handy trick to get both the Key and Value from a dictionary at the same time."
            ],
            "interviews": [
                {
                    "q": "What is 'Scope' in Python?",
                    "a": "Think of Scope like a one-way mirror in an interrogation room. A function can look outside the room and see global variables, but the outside world cannot look inside the function to see its private, local variables."
                }
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
            "theory": "Let's say you want to build a robot factory. Instead of building every robot completely from scratch, step-by-step, wouldn't it be easier to just draw a 'Blueprint' once, and then use that blueprint to stamp out as many robots as you need?\n\nThat is Object-Oriented Programming (OOP) in a nutshell! A `Class` is just the blueprint. When you use the blueprint to actually build a robot, that robot is called an `Object`. The robot has things it *owns* (like its battery level or its name)—we call these 'Attributes' (variables). The robot also has things it can *do* (like walk or talk)—we call these 'Methods' (functions). In AI, every single Machine Learning model is just an Object built from a Class blueprint. It remembers its own training data, and it has a method to make predictions!",
            "theory_tamil": "நீங்கள் ஒரு ரோபோ தொழிற்சாலையை உருவாக்க வேண்டும் என வைத்துக்கொள்வோம். ஒவ்வொரு ரோபோவையும் புதிதாக, படிப்படியாக உருவாக்குவதற்குப் பதிலாக, ஒரே ஒரு 'வரைபடத்தை' (Blueprint) உருவாக்கி, அதை வைத்து எத்தனை ரோபோக்களை வேண்டுமானாலும் தயாரிப்பது எளிதல்லவா?\n\nஇதுவே Object-Oriented Programming (OOP)-ன் மையக்கருத்தாகும்! `Class` என்பது அந்த வரைபடம். வரைபடத்தைப் பயன்படுத்தி நீங்கள் உருவாக்கும் உண்மையான ரோபோவுக்குப் பெயர் `Object`. அந்த ரோபோவுக்குச் சொந்தமான சில விஷயங்கள் இருக்கும் (எ.கா: அதன் பேட்டரி அளவு, பெயர்)—இவற்றை 'Attributes' (மாறிகள்) என்கிறோம். ரோபோவால் சில செயல்களைச் செய்ய முடியும் (எ.கா: நடப்பது, பேசுவது)—இவற்றை 'Methods' (செயல்பாடுகள்) என்கிறோம். AI-ல், ஒவ்வொரு Machine Learning மாடலும் ஒரு Class-லிருந்து உருவாக்கப்பட்ட Object மட்டுமே. அது தன்னிடம் உள்ள தரவை நினைவில் வைத்துக்கொண்டு, கணிப்புகளைச் (predictions) செய்யக்கூடிய திறனைக் கொண்டுள்ளது!",
            "code": "class MLModel:\n    # The __init__ method is the 'constructor'. It runs the moment a new object is born!\n    def __init__(self, model_name: str):\n        self.model_name = model_name  # The object remembers its own name\n        self.is_trained = False       # The object remembers it hasn't learned anything yet\n        \n    # A method is just a function that lives inside the object\n    def train(self):\n        print(f'{self.model_name} is now learning...')\n        self.is_trained = True\n\n# We use the blueprint to create a real object!\nmy_robot = MLModel('RandomForest')\nmy_robot.train()",
            "code_breakdown": [
                "class MLModel:: We are drawing the blueprint here.",
                "def __init__(self): The birth ceremony of the object. 'self' means 'me'—the specific object being created.",
                "self.is_trained: We attach a sticky note to the object so it remembers its state."
            ],
            "interviews": [
                {
                    "q": "What does the keyword 'self' actually do?",
                    "a": "Imagine you have 10 identical robots. If you shout 'Turn off!', how do they know WHICH one should turn off? The word 'self' is how a robot refers to its own specific body. It ensures changing one object's battery doesn't change another's."
                }
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
            "theory": "Imagine you are at a pizza buffet. If the chef brings out 100 pizzas all at once, there's no room on the table, the pizzas get cold, and it's a disaster. Instead, the chef brings out one pizza, waits for you to eat it, and then brings the next. This is exactly how a `Generator` works in Python! When training AI on massive datasets (like a million photos), trying to load them all into memory at once crashes your computer. Using the magical `yield` keyword, a generator hands you one photo, hits the pause button, and waits until you're ready for the next. It saves your computer from a memory explosion.\n\nNow, imagine you want to add a cool shiny wrapper to a gift, but you don't want to open the box and ruin the present inside. That is a `Decorator`. It's a clever way to 'wrap' a function with extra features (like checking if a user is logged in, or measuring how fast the function runs) without ever modifying the original function's code!",
            "theory_tamil": "நீங்கள் ஒரு பீட்சா கடைக்குச் செல்கிறீர்கள் என கற்பனை செய்து கொள்ளுங்கள். சமையல்காரர் 100 பீட்சாக்களையும் ஒரே நேரத்தில் கொண்டு வந்து வைத்தால், மேஜையில் இடமிருக்காது, எல்லாம் வீணாகிவிடும். அதற்குப் பதிலாக, அவர் ஒரு பீட்சாவைக் கொண்டுவந்து, நீங்கள் சாப்பிட்ட பிறகு அடுத்ததைக் கொண்டு வருகிறார். Python-ல் உள்ள `Generator` இப்படித்தான் வேலை செய்கிறது! ஒரு மில்லியன் புகைப்படங்களை ஒரே நேரத்தில் memory-ல் ஏற்றினால் கணினி முடங்கிவிடும். மேஜிக்கலான `yield` keyword-ஐப் பயன்படுத்தும்போது, generator ஒரு புகைப்படத்தைக் கொடுத்துவிட்டு, 'பாஸ்' (pause) பட்டனை அழுத்தி, நீங்கள் அடுத்ததைக் கேட்கும் வரை காத்திருக்கும். இது கணினியை முடங்காமல் காக்கிறது.\n\nஇப்போது, ஒரு பரிசுப் பெட்டிக்குள் உள்ள பரிசைப் பிரிக்காமலேயே அதன் மேல் ஒரு அழகான காகிதத்தைச் சுற்ற வேண்டும் என நினைத்துக்கொள்ளுங்கள். இதுதான் `Decorator`. ஒரு function-ன் உண்மையான குறியீட்டை மாற்றாமலேயே, அதற்கு கூடுதல் அம்சங்களை (எ.கா: ஒரு பயனர் உள்நுழைந்துள்ளாரா என்பதைச் சரிபார்த்தல், அல்லது function எவ்வளவு வேகமாக இயங்குகிறது என்பதை அளவிடுதல்) 'சுற்றிவைக்க' (wrap) இது ஒரு புத்திசாலித்தனமான வழியாகும்!",
            "code": "import time\n\n# A Decorator: It wraps another function to add a timer to it!\ndef timer_wrapper(func):\n    def inner_box(*args, **kwargs):\n        start = time.time()\n        result = func(*args, **kwargs) # We run the original function here\n        print(f\"Finished in {time.time() - start:.4f} seconds\")\n        return result\n    return inner_box\n\n# A Generator: Notice we use 'yield' instead of 'return'\ndef slow_pizza_maker():\n    for i in range(1, 4):\n        yield f\"Pizza {i}\"\n        time.sleep(0.1) # Pretend it takes time to bake\n\n@timer_wrapper\ndef eat_buffet():\n    # The loop asks the generator for one pizza at a time\n    for pizza in slow_pizza_maker():\n        pass\n\neat_buffet()",
            "code_breakdown": [
                "@timer_wrapper: This is the 'gift wrap'. It magically attaches the timer to our eat_buffet function.",
                "yield: Unlike 'return' which kills the function forever, 'yield' just hits the pause button, saving its spot for next time."
            ],
            "interviews": [
                {
                    "q": "Why does a generator save memory?",
                    "a": "Because it only ever holds ONE item in your computer's RAM at any given time, no matter if there are 10 items or 10 billion items waiting in line."
                }
            ],
            "quizzes": [
                {
                    "q": "Which keyword acts like a 'pause button' in a function, turning it into a generator?",
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
            "theory": "Welcome to the real engine room of AI! While Python is easy to read, it's actually quite slow at doing heavy math. Imagine having to add together 10 million numbers using a standard `for` loop—it would take ages. \n\nEnter **NumPy** (Numerical Python). NumPy is basically a hyper-fast C-language engine wearing a friendly Python mask. Instead of normal lists, NumPy uses highly structured blocks of memory called Arrays. Because of how closely they are packed in the computer's memory, NumPy can use a superpower called **Vectorization**. Vectorization means NumPy can add, multiply, or divide millions of numbers all at the exact same time in a single swooping operation, rather than one-by-one. When AI models 'learn', they are essentially just multiplying massive grids of numbers together (Matrix Dot Products). NumPy is the library that makes this math happen at lightning speed.",
            "theory_tamil": "AI-ன் உண்மையான இயந்திர அறைக்கு நல்வரவு! Python படிக்க எளிதானது என்றாலும், பெரிய அளவிலான கணிதங்களைச் செய்வதில் அது மிகவும் மெதுவானது. ஒரு சாதாரண `for` loop-ஐப் பயன்படுத்தி 10 மில்லியன் எண்களைக் கூட்ட வேண்டும் என்றால், அதற்கு நீண்ட நேரம் எடுக்கும்.\n\nஇங்குதான் **NumPy** (Numerical Python) வருகிறது. NumPy என்பது, அன்பான Python முகமூடி அணிந்த ஒரு அதிவேக C-மொழி இயந்திரமாகும். சாதாரண Lists-க்குப் பதிலாக, NumPy மிக நேர்த்தியாக அடுக்கப்பட்ட Arrays எனப்படும் நினைவகத் தொகுதிகளைப் (memory blocks) பயன்படுத்துகிறது. அவை நெருக்கமாக அடுக்கப்பட்டிருப்பதால், NumPy-ஆல் **Vectorization** என்ற வல்லமையைப் பயன்படுத்த முடிகிறது. Vectorization என்றால், பல மில்லியன் எண்களை ஒவ்வொன்றாகக் கூட்டாமல், ஒரே நொடியில் மொத்தமாகக் கூட்டவோ பெருக்கவோ முடியும் என்பதாகும். AI மாடல்கள் 'கற்கும்' போது, அவை அடிப்படையில் பெரிய எண் கட்டங்களை (Matrix Dot Products) பெருக்குகின்றன. இந்தக் கணிதத்தை மின்னல் வேகத்தில் செய்ய உதவுவது NumPy நூலகமே.",
            "code": "import numpy as np\n\n# Creating a 2D Array (A Matrix) - think of it as a grid of numbers\nX = np.array([[1, 2], \n              [3, 4]])\n\n# Without a single 'for' loop, we instantly multiply every number by 10!\nscaled_X = X * 10\n\n# We can multiply two matrices together (The core math of AI)\nW = np.array([[0.5, 0.5], \n              [0.5, 0.5]])\n\noutput = np.dot(X, W) # Or simply X @ W\nprint(output.shape)",
            "code_breakdown": [
                "np.array(): Converts a slow Python list into a blazing-fast C-array.",
                "X * 10: Vectorization in action! It multiplies every cell instantly without needing a loop.",
                "np.dot(): Calculates the Matrix Dot Product. Row 1 multiplied by Column 1, etc."
            ],
            "interviews": [
                {
                    "q": "Why is NumPy faster than standard Python lists?",
                    "a": "Python lists are like a scavenger hunt; the data is scattered all over your computer's memory. NumPy arrays store all the data perfectly side-by-side in one continuous block, so the computer can process it in one giant gulp."
                }
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
            "theory": "If NumPy is the engine, **Pandas** is the steering wheel. Data in the real world is rarely just a grid of numbers. It's spreadsheets with column names like 'Age' or 'Income', filled with messy text, missing values, and weird formats. \n\nPandas introduces the `DataFrame`. Imagine a DataFrame as Excel on steroids, controlled entirely by code. It allows you to load massive datasets, filter out the bad data, and clean it up before feeding it to your AI model. In AI, there's a golden rule: 'Garbage In, Garbage Out'. If you train a model on corrupt data with blank spots, the model will be corrupt. Using Pandas, we build professional 'Data Cleaning Pipelines' to elegantly scrub our data, fill in the blanks, and engineer new insightful columns in just a few lines of code.",
            "theory_tamil": "NumPy ஒரு இயந்திரம் என்றால், **Pandas** தான் ஸ்டீயரிங் (Steering wheel). நிஜ உலகத் தரவுகள் எப்போதுமே எண்கள் அடங்கிய கட்டங்களாக இருக்காது. அவை 'வயது' அல்லது 'வருமானம்' போன்ற தலைப்புகளைக் கொண்ட அட்டவணைகளாக இருக்கும். அவற்றில் விடுபட்ட தகவல்கள், தவறான வார்த்தைகள் என பல குழப்பங்கள் இருக்கும்.\n\nPandas `DataFrame` என்ற அமைப்பை அறிமுகப்படுத்துகிறது. இதை குறியீட்டால் (code) கட்டுப்படுத்தப்படும் ஒரு அதிநவீன Excel அட்டவணையாக கற்பனை செய்து கொள்ளுங்கள். பெரிய தரவுகளை (datasets) பதிவிறக்கி, தவறானவற்றைக் களைந்து, AI மாடலுக்குக் கொடுக்கும் முன் சுத்தப்படுத்த இது உதவுகிறது. AI-ல் ஒரு பொன்விதி உள்ளது: 'Garbage In, Garbage Out' (குப்பையை உள்ளே போட்டால் குப்பைதான் வெளியே வரும்). பிழையான தரவுகளை வைத்து மாடலைப் பயிற்றுவித்தால், மாடலும் பிழையாகவே இருக்கும். Pandas மூலம் சில வரிக் குறியீடுகளிலேயே தரவுகளைச் சுத்தப்படுத்தி, குறைகளை நீக்கி, புதிய தரவுகளை உருவாக்கும் 'Data Cleaning Pipelines'-ஐ நாம் வடிவமைக்கலாம்.",
            "code": "import pandas as pd\nimport numpy as np\n\n# Creating a messy dataset with a missing value (np.nan)\nraw_data = {'Name': ['Alice', 'Bob', 'Charlie'], 'Age': [25, np.nan, 30], 'Salary': [50k, 60k, 70k]}\ndf = pd.DataFrame(raw_data)\n\n# A beautiful Pandas method chain (Pipeline) to clean the data\nclean_df = (\n    df.copy()\n    .dropna() # Instantly deletes any row with missing information\n    .assign(Bonus=lambda x: x['Salary'] * 1.1) # Calculates a 10% bonus column on the fly\n)\n\nprint(clean_df.shape)",
            "code_breakdown": [
                "pd.DataFrame(): Creates our super-powered spreadsheet.",
                ".dropna(): The easiest way to deal with missing data (NaNs) is to just drop those rows completely.",
                ".assign(): Creates a brand new column dynamically based on existing data."
            ],
            "interviews": [
                {
                    "q": "What is the difference between a Pandas Series and a DataFrame?",
                    "a": "A Series is a single 1-Dimensional column of data. A DataFrame is a 2-Dimensional table made up of multiple Series glued together side-by-side."
                }
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
            "theory": "Before a detective solves a crime, they must survey the scene and gather clues. In AI, this detective work is called **Exploratory Data Analysis (EDA)**. You should never blindly throw data into an algorithm. You need to 'look' at it first to understand its story.\n\nAre most of your customers in their 20s or 50s? Do people with higher incomes tend to buy more products? Is there one crazy outlier who spent a million dollars and is skewing your averages? We answer these questions by drawing pictures! Using libraries like Matplotlib and Seaborn, we create visual graphs. Histograms show us the shape of our data. Boxplots instantly flag extreme weirdos (outliers). Heatmaps show us 'Correlations'—like how 'Ice Cream Sales' closely track with 'Summer Temperatures'. Only after we understand the data visually can we decide how to train our model.",
            "theory_tamil": "ஒரு துப்பறியும் நிபுணர் குற்றத்தைக் கண்டுபிடிக்கும் முன், அந்த இடத்தைப் பார்வையிட்டு தடயங்களைச் சேகரிப்பார். AI-ல், இந்தத் துப்பறியும் வேலைக்கு **Exploratory Data Analysis (EDA)** என்று பெயர். எப்போதுமே தரவுகளை கண்மூடித்தனமாக ஒரு அல்காரிதமுக்குள் (algorithm) போடக்கூடாது. அதன் கதையைப் புரிந்துகொள்ள முதலில் அதை 'பார்க்க' வேண்டும்.\n\nஉங்கள் வாடிக்கையாளர்களில் பெரும்பாலானோர் 20 வயதிலா அல்லது 50 வயதிலா உள்ளனர்? அதிக வருமானம் உள்ளவர்கள் அதிக பொருட்களை வாங்குகிறார்களா? யாராவது ஒருவர் மட்டும் ஒரு மில்லியன் டாலர் செலவு செய்து உங்கள் சராசரியையே மாற்றிவிட்டாரா? (outlier). இதுபோன்ற கேள்விகளுக்கு வரைபடங்கள் மூலம் நாம் விடை காண்கிறோம்! Matplotlib மற்றும் Seaborn போன்ற நூலகங்களைப் பயன்படுத்தி வரைபடங்களை உருவாக்குகிறோம். Histograms தரவின் வடிவத்தைக் காட்டுகின்றன. Boxplots மிக வித்தியாசமான தரவுகளை (outliers) சுட்டிக்காட்டுகின்றன. Heatmaps 'Correlations'-ஐ காட்டுகின்றன—அதாவது 'ஐஸ்கிரீம் விற்பனை' எப்படி 'கோடை வெப்பத்தோடு' தொடர்புடையது என்பதைப் போல. தரவை வரைபடமாகப் புரிந்துகொண்ட பிறகே மாடலை எப்படிப் பயிற்றுவிப்பது என்பதை நாம் முடிவு செய்ய வேண்டும்.",
            "code": "import matplotlib.pyplot as plt\nimport seaborn as sns\nimport numpy as np\nimport pandas as pd\n\n# Creating some fake data: As Age goes up, Income tends to go up\nage = np.array([22, 25, 30, 35, 40])\nincome = age * 2000 + np.random.normal(0, 5000, 5)\ndf = pd.DataFrame({'Age': age, 'Income': income})\n\n# 1. We ask pandas how strongly Age is related to Income (Correlation)\ncorrelation_matrix = df.corr()\n\n# 2. We use Seaborn to draw a beautiful Heatmap (Commented out so the script runs)\n# sns.heatmap(correlation_matrix, annot=True, cmap='coolwarm')\n\nprint('EDA Clues Gathered!')",
            "code_breakdown": [
                "df.corr(): Calculates the correlation. A score of 1.0 means a perfect relationship. A score of 0 means absolutely no relationship.",
                "sns.heatmap(): Takes that correlation score and turns it into a color-coded grid for easy viewing."
            ],
            "interviews": [
                {
                    "q": "What is an Outlier and why is it dangerous?",
                    "a": "An outlier is a data point that is wildly different from the rest (like a 120-year-old person in a dataset of teenagers). It is dangerous because it can pull the 'average' wildly off-center, confusing the machine learning model."
                }
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
            "theory": "Machine Learning sounds intimidating, but **Supervised Learning** is actually quite simple: it's learning by example. You show a toddler 100 pictures of cats (the inputs, or `X`) and explicitly tell them 'This is a cat' (the label, or `y`). Eventually, the toddler learns the pattern and can recognize a new cat they've never seen before. That is exactly what algorithms like Random Forests or Logistic Regression do!\n\nHowever, a computer can't process raw text or vastly different number scales (like Age vs. House Price). The data needs to be pre-processed and 'scaled' down. But if we do this sloppily, we might accidentally let the model cheat by peeking at the final exam answers (Data Leakage). To keep things strict and professional, we use a Scikit-Learn **Pipeline**. Think of a Pipeline as an automated factory assembly line. The raw data goes in, gets scaled automatically, gets encoded, and then gets fed to the algorithm—all in one perfectly safe, leak-proof step.",
            "theory_tamil": "Machine Learning என்ற பெயரைக் கேட்டால் மிரட்சியாக இருக்கலாம், ஆனால் **Supervised Learning** என்பது மிகவும் எளிதானது: உதாரணங்களைப் பார்த்துப் படிப்பதே இது. ஒரு குழந்தையிடம் 100 பூனைகளின் படங்களைக் காட்டி (உள்ளீடுகள் அல்லது `X`), 'இது பூனை' (Label அல்லது `y`) என்று நீங்கள் சொல்கிறீர்கள். இறுதியில் குழந்தை அந்த அமைப்பைப் புரிந்துகொண்டு, முன்பு பார்த்திராத புதிய பூனையையும் அடையாளம் கண்டுகொள்கிறது. Random Forests அல்லது Logistic Regression போன்ற algorithms இதைத்தான் செய்கின்றன!\n\nஇருப்பினும், கணினியால் நேரடியாக உரையையோ (text) அல்லது முற்றிலும் மாறுபட்ட எண்களையோ (எ.கா: வயது மற்றும் வீட்டின் விலை) கையாள முடியாது. தரவு முதலில் மாற்றி அமைக்கப்பட்டு (pre-processed) 'scale' செய்யப்பட வேண்டும். இதை நாம் கவனக்குறைவாகச் செய்தால், இறுதித் தேர்வின் விடைகளை மாடல் முன்கூட்டியே பார்ப்பது போன்ற தவறு நடந்துவிடும் (Data Leakage). இதைத் தடுக்கவே, நாம் Scikit-Learn **Pipeline**-ஐப் பயன்படுத்துகிறோம். Pipeline-ஐ ஒரு தானியங்கி தொழிற்சாலை வரிசையாக (assembly line) நினைத்துக்கொள்ளுங்கள். மூலத் தரவு உள்ளே செல்கிறது, தானாகவே மாற்றி அமைக்கப்படுகிறது, அதன்பின் அல்காரிதமுக்குச் செல்கிறது—இவை அனைத்தும் எவ்விதத் தவறுக்கும் இடமளிக்காமல் பாதுகாப்பாக நடக்கிறது.",
            "code": "from sklearn.pipeline import Pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.ensemble import RandomForestClassifier\n\n# We build an automated assembly line (Pipeline)\nml_pipeline = Pipeline([\n    # Station 1: The Scaler shrinks all huge numbers down to a standard size\n    ('scaler', StandardScaler()),\n    # Station 2: The Classifier actually learns the patterns\n    ('classifier', RandomForestClassifier(n_estimators=100))\n])\n\n# We feed the training data into the start of the pipeline\n# ml_pipeline.fit(X_train, y_train) \nprint('Automated Pipeline Ready!')",
            "code_breakdown": [
                "StandardScaler(): Mathematical shrink-ray! It ensures big numbers (like Salary=80000) don't overpower small numbers (like Age=25) during training.",
                "RandomForestClassifier(): An algorithm that builds a 'forest' of decision-making trees, and takes a majority vote on the final answer.",
                "Pipeline(): Chains the scaler and the forest together so you only have to call `.fit()` once!"
            ],
            "interviews": [
                {
                    "q": "What is Data Leakage?",
                    "a": "It's when information from outside the training dataset (like the test set) accidentally leaks into the model creation process. It causes the model to look like a genius during testing, but fail miserably in the real world."
                }
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
            "theory": "Imagine you build an AI to detect a super rare disease that only affects 1 in 100 people. Your lazy AI decides to just guess 'Healthy' every single time. Out of 100 people, it gets 99 right. It boasts a '99% Accuracy'! But it missed the 1 sick person, meaning it's completely useless. This is why pros don't just rely on 'Accuracy'.\n\nInstead, we look at a **Confusion Matrix**, which breaks down the wins and losses into specific categories. **Precision** asks: 'When you cried wolf, was there actually a wolf?' (Minimizing False Alarms). **Recall** asks: 'Out of all the actual wolves out there, how many did you catch?' (Minimizing Missed Dangers). You usually have to balance these two. The **F1-Score** is a special math formula that averages Precision and Recall together, giving you one honest, reliable score for how good your AI really is.",
            "theory_tamil": "100 பேரில் ஒருவருக்கு மட்டுமே வரும் ஒரு அரிய நோயைக் கண்டறிய நீங்கள் ஒரு AI-ஐ உருவாக்குவதாக கற்பனை செய்துகொள்ளுங்கள். உங்கள் சோம்பேறி AI எல்லோரையும் 'ஆரோக்கியம்' என்றே கணிக்கிறது. 100 பேரில் 99 பேருக்கு அது சொன்னது சரி. எனவே இது '99% Accuracy' என்று பெருமைப்படும்! ஆனால் நோய்வாய்ப்பட்ட ஒருவரை அது தவறவிட்டுவிட்டது, எனவே இது முற்றிலும் பயனற்றது. இதனால்தான் வல்லுநர்கள் வெறும் 'Accuracy'-ஐ மட்டும் நம்புவதில்லை.\n\nஅதற்குப் பதிலாக, வெற்றிகளையும் தோல்விகளையும் பிரித்துக் காட்டும் **Confusion Matrix**-ஐப் பார்க்கிறோம். **Precision** என்பது: 'நீ ஓநாய் வருகிறது என்று கத்தியபோது, உண்மையிலேயே ஓநாய் வந்ததா?' (தவறான எச்சரிக்கைகளைக் குறைப்பது). **Recall** என்பது: 'உண்மையாக வந்த ஓநாய்களில், எத்தனையைக் கண்டுபிடித்தாய்?' (ஆபத்துகளைத் தவறவிடுவதைக் குறைப்பது). இவை இரண்டையும் நாம் சமன் செய்ய வேண்டும். **F1-Score** என்பது Precision மற்றும் Recall இரண்டையும் இணைத்து சராசரி காணும் ஒரு சிறப்பு சூத்திரமாகும். இது உங்கள் AI உண்மையில் எவ்வளவு சிறந்தது என்ற நேர்மையான மதிப்பீட்டை வழங்குகிறது.",
            "code": "from sklearn.metrics import classification_report\n\n# Ground Truth (Reality): 0 is Healthy, 1 is Sick\nreality   = [0, 0, 0, 0, 1, 1]\n# What our AI Predicted\npredicted = [0, 0, 0, 0, 0, 1] # It missed one sick person! (A False Negative)\n\n# This function automatically grades the AI on Precision, Recall, and F1-Score\nreport = classification_report(reality, predicted, zero_division=0)\nprint('Model Graded!')",
            "code_breakdown": [
                "reality / predicted: We compare the model's guesses against the real-world answer key.",
                "False Negative: The worst error in medicine. The AI said 'Negative' (Healthy), but it was False (they were sick).",
                "classification_report: A magical function that prints out a beautiful report card for your model."
            ],
            "interviews": [
                {
                    "q": "If you are building an AI to detect spam emails, do you care more about Precision or Recall?",
                    "a": "Precision! A False Positive means a highly important work email gets thrown into the spam folder, which is terrible. It's better to let a few spam emails slip through (lower recall) to protect the user's inbox."
                }
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
            "theory": "Think of a Machine Learning algorithm like a fancy new guitar. As you play it (train the model), it naturally figures out the chords on its own from the music sheet (data). But before you even start playing, you have to turn the tuning pegs at the top of the guitar to set the baseline pitch. These tuning pegs are called **Hyperparameters**.\n\nHyperparameters are settings you, the engineer, must choose before training begins (like 'how deep should my decision tree grow?' or 'how fast should the model learn?'). If you set them wrong, the model will sound terrible. To find the perfect tuning, we don't just guess. We use a method called **Grid Search**. We hand the computer a list of different tuning peg settings, and it exhaustively tests every single combination to find the absolute perfect setup! It's like having a robot automatically tune your guitar until it finds the sweetest sound.",
            "theory_tamil": "Machine Learning அல்காரிதமை ஒரு புதிய கிட்டார் போல நினைத்துக்கொள்ளுங்கள். நீங்கள் வாசிக்கத் தொடங்கும்போது (மாடலைப் பயிற்றுவிக்கும்போது), அது தரவுகளிலிருந்து (data) இசையைத் தானாகவே கற்றுக்கொள்கிறது. ஆனால் நீங்கள் வாசிக்கத் தொடங்கும் முன்பே, கிட்டாரின் மேலுள்ள திருகுகளை (tuning pegs) முறுக்கி சரியான சுருதியை அமைக்க வேண்டும். இந்தத் திருகுகளுக்கே **Hyperparameters** என்று பெயர்.\n\nHyperparameters என்பவை மாடலைப் பயிற்றுவிக்கத் தொடங்கும் முன் ஒரு பொறியாளராகிய நீங்கள் முடிவு செய்ய வேண்டிய அமைப்புகளாகும் (எ.கா: 'என் decision tree எவ்வளவு ஆழமாக வளர வேண்டும்?' அல்லது 'மாடல் எவ்வளவு வேகமாக கற்க வேண்டும்?'). இவற்றைத் தவறாக அமைத்தால், மாடல் மோசமாகச் செயல்படும். சரியான அமைப்பைக் கண்டறிய நாம் சும்மா யூகிப்பதில்லை. அதற்கு **Grid Search** என்ற முறையைப் பயன்படுத்துகிறோம். பல்வேறு அமைப்புகளின் பட்டியலை கணினியிடம் கொடுத்துவிடுவோம், அது அனைத்துக் கலவைகளையும் (combinations) சோதித்து, மிகச் சரியான அமைப்பைக் கண்டறியும்! இது ஒரு ரோபோ தானாகவே உங்கள் கிட்டாரை மிக இனிமையான சத்தத்திற்கு ட்யூன் செய்வது போன்றது.",
            "code": "from sklearn.model_selection import GridSearchCV\nfrom sklearn.svm import SVC\n\n# We provide a menu of different tuning peg options to test\ntuning_pegs = {\n    'C': [0.1, 1, 10], \n    'kernel': ['linear', 'rbf']\n}\n\n# GridSearch will test all 6 combinations (3 x 2) to find the best one!\ngrid_search = GridSearchCV(estimator=SVC(), param_grid=tuning_pegs, cv=3)\n\n# grid_search.fit(X_train, y_train)\nprint('Tuning Complete!')",
            "code_breakdown": [
                "tuning_pegs (param_grid): The dictionary holding the different options we want to test out.",
                "GridSearchCV: The automated robot that tests every single option for us.",
                "cv=3: Cross-Validation. It tests each combination 3 different times on different chunks of data to be absolutely sure it's good."
            ],
            "interviews": [
                {
                    "q": "What is the danger of overfitting during Hyperparameter Tuning?",
                    "a": "If you tune your model over and over again on the exact same test data, your model is essentially 'memorizing the answers to the test'. This is why we use Cross-Validation to constantly mix up the test data during tuning."
                }
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
            "theory": "Welcome to Deep Learning! The absolute king of this domain is a library built by Facebook called **PyTorch**. Everything in PyTorch revolves around a special object called a `Tensor`. If you remember NumPy arrays, a Tensor is exactly the same thing—a grid of numbers—but with an amazing superpower: it can run on a Graphics Card (GPU). GPUs can do thousands of math problems at the exact same time, making AI training incredibly fast.\n\nBut here is the real magic: Neural Networks learn through heavy Calculus (finding derivatives). For decades, scientists had to write this complex math by hand. PyTorch introduces **Autograd** (Automatic Differentiation). If you tell a Tensor `requires_grad=True`, PyTorch secretly records every single math operation you do to it. When you are done, you just yell `.backward()!`, and PyTorch instantly does all the calculus backwards in time for you, figuring out exactly how to adjust the network to make it smarter. It's like having a math genius living inside your computer.",
            "theory_tamil": "Deep Learning-க்கு நல்வரவு! இந்தத் துறையின் முடிசூடா மன்னன் Facebook உருவாக்கிய **PyTorch** நூலகமே. PyTorch-ல் எல்லாமே `Tensor` எனப்படும் ஒரு சிறப்புப் பொருளைச் சுற்றியே சுழல்கிறது. உங்களுக்கு NumPy arrays நினைவிருந்தால், Tensor-ம் கிட்டத்தட்ட அதே போன்ற ஒரு எண் கட்டம்தான்—ஆனால் இதில் ஒரு வியக்கத்தக்க சக்தி உள்ளது: இதை Graphics Card-ல் (GPU) இயக்க முடியும். GPUs பல்லாயிரக்கணக்கான கணிதப் புதிர்களை ஒரே நேரத்தில் தீர்க்கக்கூடியவை, இதனால் AI training மிக வேகமாக நடக்கும்.\n\nஆனால் உண்மையான மேஜிக் இங்குதான் உள்ளது: Neural Networks கடினமான Calculus (derivatives) மூலமே கற்கின்றன. பல தசாப்தங்களாக விஞ்ஞானிகள் இந்தக் கடினமான கணிதத்தை கையாலேயே எழுதினர். PyTorch **Autograd** (Automatic Differentiation) என்ற முறையை அறிமுகப்படுத்தியது. ஒரு Tensor-ல் `requires_grad=True` என நீங்கள் கூறினால், நீங்கள் செய்யும் ஒவ்வொரு கணிதச் செயல்பாட்டையும் PyTorch ரகசியமாகப் பதிவு செய்துகொள்ளும். இறுதியில் நீங்கள் `.backward()!` என அழைக்கும்போது, PyTorch உங்களுக்காக அனைத்து calculus கணக்குகளையும் பின்னோக்கிச் செய்து, நெட்வொர்க்கை எப்படி புத்திசாலியாக மாற்றுவது என்பதைத் துல்லியமாகக் கண்டறியும். இது உங்கள் கணினிக்குள் ஒரு கணித மேதை குடியிருப்பது போன்றது.",
            "code": "import torch\n\n# We create a Tensor (number) and ask PyTorch to watch it closely (requires_grad)\nx = torch.tensor([3.0], requires_grad=True)\n\n# We do some math. Equation: y = 2 * (x squared)\ny = 2 * (x ** 2)\n\n# MAGIC TIME! We ask PyTorch to do the Calculus derivative backwards!\ny.backward()\n\n# The derivative of 2x^2 is 4x. Since x is 3, the answer is 12!\nprint(f\"The gradient is: {x.grad.item()}\")",
            "code_breakdown": [
                "requires_grad=True: Turns on the secret camera to record the math operations.",
                "y.backward(): Triggers the Autograd engine to calculate the derivatives (slopes).",
                "x.grad: The secret pocket where PyTorch stores the final calculus answer."
            ],
            "interviews": [
                {
                    "q": "Why do GPUs make Deep Learning so much faster than CPUs?",
                    "a": "A CPU has a few very smart, very fast cores (like 8 professors). A GPU has thousands of slower, simpler cores (like 3,000 students). Since deep learning is just doing millions of very simple addition and multiplication problems, 3,000 students working at the same time finish the job much faster than 8 professors."
                }
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
            "theory": "Building a Neural Network is like building a multi-layer cake. The data goes in the bottom layer, passes through the middle (hidden) layers where the 'thinking' happens, and pops out the top layer as an answer (like 'Dog' or 'Cat'). In PyTorch, we build this cake using Object-Oriented Classes.\n\nEvery network you build must inherit from `torch.nn.Module`. Think of it as the ultimate cake pan—it handles all the heavy lifting behind the scenes. Inside the network, we connect layers using 'Linear' connections, which is just multiplying the inputs by weights. But if we only multiply, the network can only draw straight lines; it can't solve complex, twisty problems! So, we add **Activation Functions** (like ReLU) between the layers. ReLU acts as a gatekeeper: if a number is negative, it turns it to zero. If it's positive, it lets it pass. This simple 'bend' in the math gives the network the superpower of non-linearity, allowing it to learn virtually anything.",
            "theory_tamil": "ஒரு Neural Network-ஐ உருவாக்குவது பல அடுக்குகள் கொண்ட ஒரு கேக்கை (multi-layer cake) உருவாக்குவது போன்றது. தரவு கீழடுக்கில் உள்ளே செல்கிறது, நடுவில் உள்ள அடுக்குகளில் (hidden layers) 'சிந்தனை' நடக்கிறது, மேல் அடுக்கில் அது ஒரு பதிலை ('நாய்' அல்லது 'பூனை') வெளியிடுகிறது. PyTorch-ல், இந்த கேக்கை Object-Oriented Classes மூலம் உருவாக்குகிறோம்.\n\nநீங்கள் உருவாக்கும் ஒவ்வொரு நெட்வொர்க்கும் `torch.nn.Module`-ல் இருந்து கட்டாயமாக inherit செய்யப்பட வேண்டும். இதை ஒரு சிறந்த கேக் பாத்திரமாக நினைத்துக்கொள்ளுங்கள்—இது பின்னணியில் உள்ள அனைத்து கடினமான வேலைகளையும் பார்த்துக்கொள்ளும். நெட்வொர்க்கின் உள்ளே, நாம் 'Linear' தொடர்புகள் மூலம் அடுக்குகளை இணைக்கிறோம் (உள்ளீடுகளை weights-ஆல் பெருக்குவது). ஆனால் பெருக்கலை மட்டுமே செய்தால், நெட்வொர்க்கால் நேர்கோடுகளை மட்டுமே வரைய முடியும்; சிக்கலான வளைந்த பிரச்சனைகளைத் தீர்க்க முடியாது! எனவே, அடுக்குகளுக்கு இடையே **Activation Functions**-ஐ (எ.கா: ReLU) சேர்க்கிறோம். ReLU ஒரு காவலாளியைப் போலச் செயல்படுகிறது: ஒரு எண் negative ஆக இருந்தால் அதை பூஜ்ஜியமாக்குகிறது, positive ஆக இருந்தால் அனுமதிக்கிறது. கணிதத்தில் நடக்கும் இந்தச் சிறிய 'வளைவு', நெட்வொர்க்கிற்கு non-linearity என்ற அபார சக்தியைக் கொடுத்து, எதை வேண்டுமானாலும் கற்கும் திறனை அளிக்கிறது.",
            "code": "import torch\nimport torch.nn as nn\nimport torch.nn.functional as F\n\n# We build our network blueprint, inheriting the powers of nn.Module\nclass SimpleBrain(nn.Module):\n    def __init__(self):\n        super().__init__()\n        # We define the layers: Input (784) -> Hidden (128) -> Output (10)\n        self.layer1 = nn.Linear(784, 128)\n        self.layer2 = nn.Linear(128, 10)\n        \n    # The forward function acts as the map for how data flows through the layers\n    def forward(self, x):\n        x = self.layer1(x) # Data passes through layer 1\n        x = F.relu(x)      # The magic gatekeeper (Activation Function) bends the math\n        x = self.layer2(x) # Data passes through the output layer\n        return x\n\nprint('Brain Built!')",
            "code_breakdown": [
                "nn.Linear(): A layer of artificial neurons. It automatically holds the secret 'Weights and Biases' that the model will learn.",
                "forward(): The GPS path the data takes from the start to the end.",
                "F.relu(): The most popular activation function. It simply turns any negative number into a 0, preventing the math from becoming a boring straight line."
            ],
            "interviews": [
                {
                    "q": "What happens if you build a Neural Network with 100 layers, but you forget to use Activation Functions?",
                    "a": "Math is funny! Multiplying 100 linear layers together mathematically simplifies down to just ONE single linear layer. Without activation functions to add 'bends' (non-linearity), a 100-layer deep network is no smarter than a 1-layer basic regression model."
                }
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
            "theory": "Standard Neural Networks are awful at looking at pictures. If you feed a picture into a normal network, it breaks the image into a single, long, straight line of pixels. It completely forgets that a nose is supposed to be next to an eye! It loses all sense of space.\n\nTo solve this, scientists invented **Convolutional Neural Networks (CNNs)**. Instead of looking at the whole scrambled picture at once, a CNN acts like a magnifying glass. It takes a tiny square (a Filter) and slides it across the image, looking for patterns. The first layers look for simple things, like straight lines or curves. The middle layers combine those lines into shapes. The final layers combine those shapes to recognize a 'Face' or a 'Car'. By sliding this magnifying glass (Convolution) and periodically shrinking the image down to save memory (Pooling), CNNs became the undisputed champions of Computer Vision.",
            "theory_tamil": "சாதாரண Neural Networks-ஆல் படங்களைப் (pictures) பார்ப்பதில் சிறப்பாகச் செயல்பட முடியாது. ஒரு படத்தை சாதாரண நெட்வொர்க்கில் செலுத்தினால், அது படத்தை ஒரே நீளமான கோடாகப் பிரித்துவிடும். மூக்கு என்பது கண்ணுக்குப் பக்கத்தில் இருக்க வேண்டும் என்பதை அது முற்றிலுமாக மறந்துவிடும்! இடத்தைப் பற்றிய புரிதலே அதற்கு இருக்காது.\n\nஇதைத் தீர்க்கவே விஞ்ஞானிகள் **Convolutional Neural Networks (CNNs)**-ஐ உருவாக்கினர். முழுப் படத்தையும் ஒரே நேரத்தில் குழப்பமாகப் பார்ப்பதற்குப் பதிலாக, CNN ஒரு பூதக்கண்ணாடியைப் போலச் செயல்படுகிறது. அது ஒரு சிறிய கட்டத்தை (Filter) எடுத்து, படத்தின் மீது நகர்த்தி அமைப்புகளைத் (patterns) தேடுகிறது. முதல் அடுக்குகள் நேர்கோடுகள் அல்லது வளைவுகள் போன்ற எளிய வடிவங்களைத் தேடுகின்றன. நடு அடுக்குகள் அவற்றை இணைத்து பெரிய வடிவங்களை உருவாக்குகின்றன. இறுதி அடுக்குகள் அந்த வடிவங்களை இணைத்து 'முகம்' அல்லது 'கார்' என்பதைக் கண்டறிகின்றன. இந்தப் பூதக்கண்ணாடியை நகர்த்துவதன் (Convolution) மூலமும், நினைவகத்தைச் சேமிக்கப் படத்தை அவ்வப்போது சுருக்குவதன் (Pooling) மூலமும், CNN-கள் Computer Vision-ன் முடிசூடா மன்னர்களாக மாறின.",
            "code": "import torch.nn as nn\n\nclass ImageScanner(nn.Module):\n    def __init__(self):\n        super().__init__()\n        # The Magnifying Glass! It sweeps a 3x3 square across the image\n        self.conv1 = nn.Conv2d(in_channels=1, out_channels=16, kernel_size=3)\n        self.relu = nn.ReLU()\n        \n        # The Shrinker! It cuts the image size in half to save memory\n        self.pool = nn.MaxPool2d(kernel_size=2)\n        \n    def forward(self, x):\n        x = self.conv1(x)\n        x = self.relu(x)\n        x = self.pool(x)\n        return x\n\nprint('CNN Eye Created!')",
            "code_breakdown": [
                "nn.Conv2d: The 2D Convolutional layer. 'kernel_size=3' means the magnifying glass is a 3x3 pixel square.",
                "nn.MaxPool2d: Slides over the image and only keeps the 'loudest' (maximum) pixel value, shrinking the image while keeping the most important features."
            ],
            "interviews": [
                {
                    "q": "Why do CNNs have drastically fewer parameters (weights) than standard networks?",
                    "a": "Because of 'Weight Sharing'. In a normal network, every pixel gets its own dedicated weight. In a CNN, the exact same 3x3 Filter (with the exact same weights) slides across the entire image. This saves massive amounts of memory."
                }
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
            "theory": "Imagine trying to read a book, but you're only allowed to look at one word at a time, forgetting the word before it. That's how old AI read text. It was slow and constantly lost the plot. Then, in 2017, Google released a paper that changed the world: they invented the **Transformer**.\n\nThe Transformer introduced a superpower called **Self-Attention**. Instead of reading word-by-word, the Transformer reads the ENTIRE sentence at the exact same time. It then asks: 'Which words are looking at each other?' For example, in the sentence 'The bank of the river', the word 'bank' pays high 'Attention' to the word 'river', so the AI instantly knows it's about water, not money. Because it processes everything simultaneously, engineers could run it across thousands of GPUs at once, allowing them to feed it the entire internet. This birthed the massive Large Language Models (LLMs) like ChatGPT we know today.",
            "theory_tamil": "ஒரு புத்தகத்தைப் படிக்கும்போது, ஒரு நேரத்தில் ஒரு வார்த்தையை மட்டுமே பார்க்க முடியும், முந்தைய வார்த்தையை மறந்துவிட வேண்டும் என்று கற்பனை செய்துகொள்ளுங்கள். பழைய AI-கள் இப்படித்தான் உரையைப் படித்தன. அவை மெதுவாக இருந்தன, அடிக்கடி கதையை மறந்துவிட்டன. பின்னர் 2017-ல், Google வெளியிட்ட ஒரு ஆய்வறிக்கை உலகத்தையே மாற்றியது: அவர்கள் **Transformer**-ஐக் கண்டுபிடித்தனர்.\n\nTransformer **Self-Attention** என்ற அபார சக்தியை அறிமுகப்படுத்தியது. வார்த்தைக்கு வார்த்தை படிப்பதற்குப் பதிலாக, Transformer முழு வாக்கியத்தையும் ஒரே நேரத்தில் படிக்கிறது. பின்னர், 'எந்த வார்த்தைகள் ஒன்றையொன்று சார்ந்துள்ளன?' என்று கேட்கிறது. உதாரணமாக, 'The bank of the river' என்ற வாக்கியத்தில், 'bank' என்ற வார்த்தை 'river' மீது அதிக 'கவனம்' (Attention) செலுத்துகிறது, எனவே இது நீர் சம்பந்தப்பட்டது, பணம் சம்பந்தப்பட்டது அல்ல என்பதை AI உடனே புரிந்துகொள்கிறது. அனைத்தையும் ஒரே நேரத்தில் கையாளுவதால், பொறியாளர்களால் இதை ஆயிரக்கணக்கான GPUs-ல் இணையாக இயக்கி முழு இணையத்தையே இதற்குக் கற்பிக்க முடிந்தது. இதுவே இன்று நாம் காணும் ChatGPT போன்ற மாபெரும் Large Language Models (LLMs) உருவாகக் காரணமாக அமைந்தது.",
            "code": "import torch\nimport torch.nn.functional as F\n\n# Imagine 1 sentence, 4 words, each represented by 64 numbers (Embeddings)\nquery = torch.rand(1, 4, 64) \nkey = torch.rand(1, 4, 64)\nvalue = torch.rand(1, 4, 64)\n\n# 1. Words ask 'What context do I need?' (Query) and match with 'What context I have' (Key)\nraw_attention = torch.bmm(query, key.transpose(1, 2))\n\n# 2. Convert matches into percentages (Attention Weights)\nattention_weights = F.softmax(raw_attention, dim=-1)\n\n# 3. Apply the attention to the actual Value of the words\nfinal_thought = torch.bmm(attention_weights, value)\nprint('Contextualized Output Shape:', final_thought.shape)",
            "code_breakdown": [
                "Query, Key, Value: Think of it like a library. The Query is your search term. The Key is the book title on the shelf. The Value is the actual text inside the book.",
                "torch.bmm: Batch Matrix Multiplication. The heavy math that calculates the connection between every single word and every other word instantly.",
                "F.softmax: Turns the math scores into nice percentages that add up to 100%."
            ],
            "interviews": [
                {
                    "q": "If Transformers read everything at once, how do they know what order the words are in?",
                    "a": "They use a trick called 'Positional Encoding'. Before the words go into the Transformer, a mathematical timestamp (sine/cosine waves) is glued to each word, telling the AI exactly where that word was standing in the sentence."
                }
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
            "theory": "Training a massive AI like ChatGPT from scratch costs millions of dollars in electricity and requires thousands of specialized supercomputers. For normal developers, this is impossible. That is why **Hugging Face** is the hero of modern AI. \n\nHugging Face is like the 'App Store' or 'GitHub' for Machine Learning. Through their amazing open-source library called `transformers`, anybody can download pre-trained, world-class models (like Meta's Llama or Mistral) for absolutely free. With just three lines of Python code, you can load a super-smart AI onto your own laptop and ask it to summarize text, translate languages, or write code. It hides all the horrifyingly complex math behind a beautifully simple command called `pipeline`.",
            "theory_tamil": "ChatGPT போன்ற ஒரு பிரம்மாண்டமான AI-ஐ புதிதாகப் பயிற்றுவிக்க பல மில்லியன் டாலர் மின்சாரம் மற்றும் ஆயிரக்கணக்கான சிறப்பு சூப்பர்கம்ப்யூட்டர்கள் தேவை. சாதாரண டெவலப்பர்களுக்கு இது சாத்தியமற்றது. இதனால்தான் **Hugging Face** நவீன AI-ன் ஹீரோவாகத் திகழ்கிறது.\n\nHugging Face என்பது Machine Learning-க்கான 'App Store' அல்லது 'GitHub' போன்றது. இவர்களின் `transformers` என்ற அருமையான திறந்தமூல (open-source) நூலகத்தின் மூலம், எவரும் உலகத்தரம் வாய்ந்த மாடல்களை (Meta-வின் Llama அல்லது Mistral போல) முற்றிலும் இலவசமாகப் பதிவிறக்கலாம். வெறும் மூன்று வரி Python குறியீட்டின் மூலம், அதிபுத்திசாலி AI-ஐ உங்கள் லேப்டாப்பிலேயே ஏற்றி, உரையைச் சுருக்கவோ, மொழிகளை மொழிபெயர்க்கவோ, அல்லது குறியீடு எழுதவோ செய்ய முடியும். இது மிகவும் கடினமான கணிதங்கள் அனைத்தையும் `pipeline` என்ற ஒரு எளிய கட்டளைக்குப் பின்னால் மறைத்துவிடுகிறது.",
            "code": "from transformers import pipeline\n\n# The 'pipeline' is the ultimate magic wand. It handles downloading the model and all the math.\n# Here, we ask it for a Sentiment Analysis AI.\n# ai_helper = pipeline(\"sentiment-analysis\")\n\nmy_text = \"I am absolutely thrilled about learning Generative AI!\"\n\n# We simply pass the text in, and it gives us the answer!\n# result = ai_helper(my_text)\n# print(result)\n\nprint('Hugging Face Magic Initialized!')",
            "code_breakdown": [
                "pipeline(): The easiest way to use AI. You just tell it what task you want (like 'text-generation' or 'translation'), and it does the rest.",
                "Tokenization (Behind the scenes): AI can't read English letters. The pipeline secretly cuts the text into pieces and turns them into numbers (Tokens) before feeding it to the AI."
            ],
            "interviews": [
                {
                    "q": "What is the difference between Pre-training and Fine-tuning?",
                    "a": "Pre-training is teaching the AI the rules of language by reading the whole internet (Super expensive!). Fine-tuning is taking that already-smart AI and giving it a small, specialized textbook (like medical records) to make it an expert in one specific subject (Very cheap!)."
                }
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
            "theory": "Imagine asking a super-smart professor a question, but they aren't allowed to look at any books, and they confidently make up an answer that sounds correct but is actually completely wrong. That is what LLMs do (called 'Hallucination'). Also, the professor has no idea about your company's private, secret documents.\n\nTo fix this, we use **RAG (Retrieval-Augmented Generation)**. We give the AI an open-book test! First, we chop all your private PDF documents into pieces and turn them into numbers (Embeddings), storing them in a special **Vector Database**. When you ask a question, the database instantly searches for the 3 most relevant paragraphs. We then secretly grab those paragraphs and staple them to your question, telling the AI: 'Use THIS exact text to answer the question.' Now, the AI has your private facts and is banned from making things up!",
            "theory_tamil": "ஒரு அதிபுத்திசாலி பேராசிரியரிடம் ஒரு கேள்வியைக் கேட்கிறீர்கள், ஆனால் அவர் எந்தப் புத்தகத்தையும் பார்க்கக் கூடாது, மேலும் அவர் மிகவும் நம்பிக்கையுடன் ஒரு தவறான பதிலைச் சொல்கிறார் என்று கற்பனை செய்துகொள்ளுங்கள். LLM-கள் இப்படித்தான் செய்கின்றன (இதை 'Hallucination' என்பார்கள்). மேலும், உங்கள் நிறுவனத்தின் தனிப்பட்ட, ரகசிய ஆவணங்களைப் பற்றி அந்தப் பேராசிரியருக்கு எதுவும் தெரியாது.\n\nஇதைத் தீர்க்கவே **RAG (Retrieval-Augmented Generation)** முறையைப் பயன்படுத்துகிறோம். நாம் AI-க்கு ஒரு open-book தேர்வு வைக்கிறோம்! முதலில், உங்கள் தனிப்பட்ட PDF ஆவணங்கள் அனைத்தையும் சிறு பகுதிகளாக வெட்டி, அவற்றை எண்களாக (Embeddings) மாற்றி, ஒரு சிறப்பு **Vector Database**-ல் சேமிக்கிறோம். நீங்கள் ஒரு கேள்வியைக் கேட்கும்போது, டேட்டாபேஸ் உடனடியாகத் தொடர்புடைய 3 பத்திகளைத் தேடி எடுக்கிறது. அந்தப் பத்திகளை எடுத்து உங்கள் கேள்வியோடு சேர்த்து AI-யிடம்: 'கேள்விக்குப் பதிலளிக்க இந்தத் தகவலை மட்டுமே பயன்படுத்து' என்று கூறுகிறோம். இப்போது AI-யிடம் உங்கள் தனிப்பட்ட உண்மைகள் உள்ளன, மேலும் அது தானாக எதையும் கற்பனை செய்ய முடியாது!",
            "code": "# Pseudo-code to understand the RAG Workflow\n\nuser_question = \"What is the Wi-Fi password for the guest room?\"\n\n# Step 1: The Vector Database searches through thousands of company documents instantly\n# found_facts = vector_db.search(user_question)\n# found_facts -> \"The guest Wi-Fi password is 'Welcome2024'.\"\n\n# Step 2: We inject the facts into a strict instruction template\nprompt = f\"\"\"\nListen closely AI. Only use the Facts below to answer the user.\nFacts: {found_facts}\nQuestion: {user_question}\n\"\"\"\n\n# Step 3: The AI reads the facts and answers perfectly!\n# answer = ai.chat(prompt)\nprint('RAG System Configured!')",
            "code_breakdown": [
                "Embeddings: Turning words into lists of numbers. Words with similar meanings have numbers that are close to each other.",
                "Vector Database: A special database designed to search for matching lists of numbers (Embeddings) incredibly fast.",
                "Prompt Injection: The trick where we intercept the user's question, glue the retrieved facts to it, and hand it to the LLM."
            ],
            "interviews": [
                {
                    "q": "Why do we chop documents into chunks before putting them in the database?",
                    "a": "Because AI models have a 'Context Window'—a strict limit on how many words they can read at once. You can't feed a 10,000-page manual into an AI. Chunking lets us retrieve only the exact 2 paragraphs that actually contain the answer."
                }
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
            "theory": "You've trained an incredible AI model, and it lives on your laptop. But how do you let an iPhone app in another country actually talk to it? An AI model is useless if it's trapped on your computer. You need to build a bridge. In the tech world, this bridge is called a REST API.\n\nWe wrap our AI model inside **FastAPI**. FastAPI acts like a high-speed receptionist. When the iPhone app sends a message across the internet (an HTTP request), FastAPI catches it, hands the message to your AI model, waits for the model's prediction, and then sends the answer back to the phone. FastAPI is incredibly popular because it is blazingly fast and has a strict bouncer (called Pydantic) that checks the incoming data. If the phone app accidentally sends a picture instead of text, Pydantic blocks it instantly before it can crash your AI model.",
            "theory_tamil": "நீங்கள் ஒரு அற்புதமான AI மாடலைப் பயிற்றுவித்துவிட்டீர்கள், அது உங்கள் லேப்டாப்பில் உள்ளது. ஆனால் வேறொரு நாட்டில் உள்ள iPhone app அதனுடன் எப்படித் தொடர்புகொள்ளும்? உங்கள் கணினிக்குள் சிக்கியிருக்கும் AI மாடலால் எந்தப் பயனும் இல்லை. நீங்கள் ஒரு பாலத்தை உருவாக்க வேண்டும். தொழில்நுட்ப உலகில், இந்தப் பாலத்திற்கு REST API என்று பெயர்.\n\nநமது AI மாடலை **FastAPI**-க்குள் பொதிய வைக்கிறோம். FastAPI ஒரு அதிவேக வரவேற்பாளரைப் போலச் செயல்படுகிறது. iPhone app இணையம் வழியாக ஒரு செய்தியை அனுப்பும்போது (HTTP request), FastAPI அதைப் பிடித்து உங்கள் AI மாடலிடம் கொடுக்கிறது, மாடலின் கணிப்புக்காகக் காத்திருக்கிறது, பின்னர் பதிலை மீண்டும் ஃபோனுக்கே அனுப்புகிறது. FastAPI மிகவும் பிரபலமாக இருப்பதற்கு முக்கிய காரணம் அதன் அதீத வேகம் மற்றும் அதிலுள்ள கடுமையான காவலாளி (Pydantic). ஃபோன் app தவறுதலாக உரைக்குப் (text) பதிலாகப் படத்தை அனுப்பினால், அது உங்கள் AI மாடலை செயலிழக்கச் செய்வதற்கு முன்பாகவே Pydantic அதைத் தடுத்து நிறுத்திவிடும்.",
            "code": "from fastapi import FastAPI\nfrom pydantic import BaseModel\n\n# We hire our receptionist (FastAPI)\napp = FastAPI()\n\n# We tell the bouncer (Pydantic) exactly what the incoming message must look like\nclass MessageFromPhone(BaseModel):\n    text_to_analyze: str\n\n# We set up the endpoint URL where the phone will send the message\n@app.post('/api/predict')\ndef get_prediction(msg: MessageFromPhone):\n    # We would pass msg.text_to_analyze to our AI model here\n    return {\n        'status': 'success',\n        'ai_answer': 'I think this text is very happy!'\n    }\nprint('API Web Server Online!')",
            "code_breakdown": [
                "FastAPI(): Starts the web server engine.",
                "BaseModel (Pydantic): The data validator. It ensures 'text_to_analyze' is strictly a String. If the user sends a number, it rejects the request safely.",
                "@app.post(): Opens a secure channel at the URL '/api/predict' waiting to receive data."
            ],
            "interviews": [
                {
                    "q": "Why is FastAPI preferred over older frameworks like Flask for AI?",
                    "a": "Because AI models can be slow to generate answers (like ChatGPT typing out a response). FastAPI natively supports 'async' (asynchronous) code. This means while the AI is busy thinking for User 1, FastAPI can still answer the phone and accept requests from User 2 and User 3 at the same time without freezing!"
                }
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
            "theory": "Have you ever downloaded a game or software, and it crashed giving you a 'Missing DLL' error? As an engineer, the worst thing you can say is, 'Well, it works on my machine!' If you send your Python code to a production server, it might crash because the server has a different operating system or the wrong version of Python installed. \n\n**Docker** solves this forever. Docker acts like a magical shipping container. You put your AI code, the exact version of Python you used, and all the required libraries inside this container, and lock the doors. When you send this container to a server in the cloud, it doesn't care what operating system the server uses. The container opens up and runs its own mini-world inside. Because everything is sealed in the box, if it works on your laptop, it is 100% guaranteed to work perfectly on any server in the world.",
            "theory_tamil": "நீங்கள் எப்போதாவது ஒரு கேம் அல்லது சாஃப்ட்வேரை டவுன்லோட் செய்து, அது 'Missing DLL' என்ற பிழையைக் காட்டி முடங்கியது உண்டா? ஒரு பொறியாளராக, நீங்கள் சொல்லக்கூடிய மிக மோசமான வார்த்தை, 'என் கணினியில் இது வேலை செய்கிறதே!' என்பதுதான். நீங்கள் உங்கள் Python குறியீட்டை ஒரு production server-க்கு அனுப்பும்போது, அந்த சர்வரில் வேறொரு OS அல்லது தவறான Python வெர்ஷன் இருந்தால் அது முடங்கிவிடும்.\n\n**Docker** இந்தப் பிரச்சனைக்கு நிரந்தரத் தீர்வு காண்கிறது. Docker ஒரு மேஜிக் சரக்குப் பெட்டகத்தைப் (shipping container) போலச் செயல்படுகிறது. உங்கள் AI குறியீடு, நீங்கள் பயன்படுத்திய சரியான Python வெர்ஷன், மற்றும் தேவையான அனைத்து நூலகங்களையும் இந்தப் பெட்டகத்திற்குள் வைத்துப் பூட்டிவிடுகிறீர்கள். இதை நீங்கள் cloud-ல் உள்ள ஒரு சர்வருக்கு அனுப்பும்போது, அந்த சர்வரில் என்ன OS உள்ளது என்பதைப் பற்றி அது கவலைப்படுவதில்லை. பெட்டகம் திறக்கப்பட்டு தனக்குள் ஒரு சிறிய உலகத்தை இயக்கிக் கொள்கிறது. எல்லாம் பெட்டிக்குள் முத்திரையிடப்பட்டிருப்பதால், உங்கள் லேப்டாப்பில் வேலை செய்தால், அது உலகின் எந்தச் சர்வரிலும் 100% துல்லியமாக வேலை செய்யும்.",
            "code": "# This is a 'Dockerfile' - The recipe instruction manual for building our container\n\"\"\"\n# 1. Start with a mini-computer that already has Python installed\nFROM python:3.11-slim\n\n# 2. Make a folder inside the mini-computer called /app\nWORKDIR /app\n\n# 3. Copy our list of required libraries and install them\nCOPY requirements.txt .\nRUN pip install -r requirements.txt\n\n# 4. Copy our actual AI code into the mini-computer\nCOPY . .\n\n# 5. Tell the mini-computer what command to run when it turns on\nCMD [\"python\", \"my_api_server.py\"]\n\"\"\"\nprint('Docker Shipping Container Built!')",
            "code_breakdown": [
                "FROM: The foundation. We don't want a heavy Windows/Mac OS, so we use a 'slim' Linux that only has Python.",
                "COPY: Takes files from your actual laptop and pastes them inside the container's isolated hard drive.",
                "CMD: The final instruction. It's the command the container runs the second it finishes booting up."
            ],
            "interviews": [
                {
                    "q": "What is the difference between a Docker Image and a Docker Container?",
                    "a": "Think of an Image as the recipe card (the instructions). Think of a Container as the actual baked cake (the running program). You can use one Image (recipe) to bake hundreds of Containers (cakes) running at the same time!"
                }
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
            "theory": "Data Scientists are brilliant at math and Python, but ask them to build a beautiful website using HTML, CSS, and React JavaScript, and they will probably run away in terror. But if you can't build a webpage, how do you show off your cool new AI model to your boss or customers?\n\nEnter **Streamlit**. Streamlit is a magical open-source library that turns pure Python scripts into beautiful, interactive web apps in minutes. You don't need to know a single drop of HTML. You just type `st.title('My App')` in Python, and Streamlit instantly draws a big, beautiful header on a webpage. When a user clicks a button or types in a text box on the website, Streamlit automatically sends that info back to your Python script, runs your AI model, and prints the result on the screen. It is the ultimate tool for rapidly turning AI ideas into clickable prototypes.",
            "theory_tamil": "Data Scientists கணிதம் மற்றும் Python-ல் வல்லவர்கள், ஆனால் HTML, CSS மற்றும் React JavaScript-ஐப் பயன்படுத்தி ஒரு அழகான வலைத்தளத்தை (website) உருவாக்கச் சொன்னால், அவர்கள் பயந்து ஓடிவிடுவார்கள். ஆனால் உங்களால் ஒரு வலைத்தளத்தை உருவாக்க முடியாவிட்டால், உங்களின் புதிய AI மாடலை உங்கள் பாஸிடமோ அல்லது வாடிக்கையாளர்களிடமோ எப்படிக் காட்டுவீர்கள்?\n\nஇங்குதான் **Streamlit** வருகிறது. Streamlit என்பது ஒரு மேஜிக்கலான open-source நூலகமாகும். இது சாதாரண Python script-ஐயே சில நிமிடங்களில் அழகான, interactive web apps ஆக மாற்றுகிறது. உங்களுக்கு HTML சிறிதளவும் தெரிந்திருக்க வேண்டியதில்லை. Python-ல் `st.title('My App')` என்று எழுதினால் போதும், Streamlit உடனடியாக வலைத்தளத்தில் ஒரு பெரிய, அழகான தலைப்பை வரைந்துவிடும். வலைத்தளத்தில் ஒரு பயனர் ஒரு பட்டனை கிளிக் செய்தாலோ அல்லது ஒரு text box-ல் தட்டச்சு செய்தாலோ, Streamlit தானாகவே அந்தத் தகவலை உங்கள் Python script-க்கு அனுப்பி, உங்கள் AI மாடலை இயக்கி, முடிவை திரையில் காட்டும். AI ஐடியாக்களை கிளிக் செய்யக்கூடிய prototypes ஆக மாற்றுவதற்கான மிகச்சிறந்த கருவி இதுவே.",
            "code": "import streamlit as st\n\n# Streamlit turns this Python code into a beautiful Web UI instantly!\nst.title('🤖 My First AI Web App')\n\n# This creates a text box on the website and saves what the user types\nuser_text = st.text_area('Write a sentence here:')\n\n# This creates a clickable button on the website\nif st.button('Predict Sentiment'):\n    \n    # This creates a cool loading spinner while the AI thinks\n    with st.spinner('The AI is thinking...'):\n        # ai_answer = model.predict(user_text)\n        \n        # This prints a beautiful green success box on the website\n        st.success('Prediction: POSITIVE!')\n        \n        # Drops celebration balloons on the screen!\n        st.balloons()\n\nprint('Streamlit App Code Ready!')",
            "code_breakdown": [
                "st.title(): Draws a large, bold HTML Header.",
                "st.text_area(): Creates an interactive input box. Whatever the user types is instantly passed into the 'user_text' Python variable.",
                "st.spinner(): Essential for AI apps! Since AI takes a few seconds to think, the spinner tells the user the app isn't frozen."
            ],
            "interviews": [
                {
                    "q": "How does Streamlit handle interactivity without using Javascript?",
                    "a": "Streamlit uses a unique trick: Every time a user interacts with a widget (like clicking a button or moving a slider), Streamlit simply reruns the ENTIRE Python script from top to bottom, updating the screen with the new variables."
                }
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
