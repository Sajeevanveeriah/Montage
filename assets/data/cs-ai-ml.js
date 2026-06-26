export const csaiml = {
  id: 'cs-ai-ml',
  title: 'CS / AI / ML',
  emoji: '💻',
  color: 'var(--color-cs)',
  description: 'Algorithms, Python, systems & DevOps, machine learning, deep learning, RL, LLMs',
  topicCount: 52,
  sections: [
    {
      id: 'data-structures-and-algorithms',
      title: 'Data Structures and Algorithms',
      topics: [
        {
          id: 'dsa-roadmap-step-by-step',
          title: 'DSA Roadmap (Step-by-Step)',
          type: 'list',
          prose: 'A progressive path through data structures and algorithms, from foundational primitives to advanced and specialised topics. Each stage builds on the previous one.',
          items: [
            'Learn arrays, strings, recursion',
            'Linked lists, stacks, queues',
            'Hash maps, sets',
            'Trees (binary, BST, AVL, heaps)',
            'Graphs (BFS, DFS, Dijkstra, Bellman-Ford)',
            'Dynamic programming',
            'Advanced: segment trees, tries, disjoint sets',
            'Greedy algorithms, backtracking',
            'Sorting and searching mastery',
            'Graph theory: Prim, Kruskal, topological sort',
            'Computational geometry, bit manipulation'
          ],
          tags: ['dsa', 'algorithms', 'roadmap', 'data-structures'],
          related: []
        },
        {
          id: 'algorithm-categories-30-ai-algorithms',
          title: 'Algorithm Categories (30 AI Algorithms)',
          type: 'list',
          prose: 'A categorised survey of the major AI/ML algorithms, grouped by learning paradigm: supervised, unsupervised, reinforcement, and statistical.',
          items: [
            'Supervised: Linear Regression, Logistic Regression, Decision Tree, Random Forest, SVM, KNN, Naive Bayes, Gradient Boosting, XGBoost, Neural Networks.',
            'Unsupervised: K-Means, DBSCAN, Hierarchical Clustering, PCA, ICA, Autoencoders, GANs, VAEs.',
            'Reinforcement: Q-Learning, SARSA, DQN, Policy Gradient, A3C, PPO.',
            'Statistical: Bayesian Networks, HMM, Gaussian Processes.'
          ],
          tags: ['algorithms', 'ai', 'machine-learning', 'taxonomy'],
          related: []
        },
        {
          id: 'practical-rank-nullity-applications',
          title: 'Practical Rank-Nullity (Applications)',
          type: 'concept',
          prose: 'Finding null space: systems of linear equations with infinitely many solutions. Image/kernel analysis. Dimensionality reduction. Checking overdetermined/underdetermined systems.',
          tags: ['linear-algebra', 'rank-nullity', 'applications'],
          related: []
        }
      ]
    },
    {
      id: 'python',
      title: 'Python',
      topics: [
        {
          id: 'python-data-types',
          title: 'Python Data Types',
          type: 'list',
          prose: 'The built-in data types in Python, grouped by category.',
          items: [
            'Numeric: int, float, complex.',
            'Sequence: list, tuple, range, str.',
            'Set: set, frozenset.',
            'Mapping: dict.',
            'Boolean: bool.',
            'Binary: bytes, bytearray, memoryview.'
          ],
          tags: ['python', 'data-types', 'fundamentals'],
          related: []
        },
        {
          id: 'python-list-operations',
          title: 'Python List Operations',
          type: 'code',
          language: 'python',
          prose: 'Core list methods plus a list comprehension. Lists are mutable, ordered sequences.',
          code: `nums = [3, 1, 2]
nums.append(4)            # add one item to the end -> [3, 1, 2, 4]
nums.extend([5, 6])      # add all items from an iterable -> [3, 1, 2, 4, 5, 6]
nums.insert(0, 9)        # insert 9 at index 0 -> [9, 3, 1, 2, 4, 5, 6]
nums.remove(9)           # remove first matching value 9
last = nums.pop()        # remove and return last item (or pop(i) for index i)
nums.sort()              # sort in place ascending
nums.reverse()           # reverse in place
i = nums.index(2)        # index of first occurrence of 2
c = nums.count(2)        # number of times 2 appears
squares = [x * x for x in nums if x > 1]  # list comprehension with filter`,
          tags: ['python', 'list', 'methods', 'comprehension'],
          related: []
        },
        {
          id: 'python-string-methods',
          title: 'Python String Methods',
          type: 'code',
          language: 'python',
          prose: 'Common string methods for transformation, searching, splitting, joining, and formatting. Strings are immutable.',
          code: `s = "  Hello World  "
s.upper()                # "  HELLO WORLD  " - uppercase
s.lower()                # "  hello world  " - lowercase
s.strip()                # "Hello World" - trim whitespace
s.split(" ")             # split on a separator into a list
"-".join(["a", "b"])     # "a-b" - join an iterable with separator
s.replace("World", "Py") # replace old substring with new
s.find("World")          # index of substring, or -1 if absent
"{} = {}".format("x", 1) # "x = 1" - format placeholders
s.startswith("  H")      # True - prefix test
s.endswith("  ")         # True - suffix test
s.strip().encode()       # b'Hello World' - bytes via encode()`,
          tags: ['python', 'string', 'methods'],
          related: []
        },
        {
          id: 'python-tuple',
          title: 'Python Tuple',
          type: 'concept',
          prose: 'Immutable sequence. count(x), index(x). Packing: t = 1,2,3. Unpacking: a,b,c = t. Use tuples for fixed data (coordinates, RGB values, database records).',
          tags: ['python', 'tuple', 'immutable'],
          related: []
        },
        {
          id: 'numpy-key-functions',
          title: 'NumPy Key Functions',
          type: 'code',
          language: 'python',
          prose: 'Essential NumPy functions for array creation, shape manipulation, linear algebra, and statistics.',
          code: `import numpy as np
a = np.array([1, 2, 3])          # create array from a list
z = np.zeros((2, 2))             # 2x2 array of zeros (np.ones for ones)
I = np.eye(3)                    # 3x3 identity matrix
r = np.arange(0, 10, 2)          # evenly spaced by step -> [0 2 4 6 8]
l = np.linspace(0, 1, 5)         # 5 evenly spaced points from 0 to 1
m = a.reshape((3, 1))            # reshape to new dimensions
d = np.dot(a, a)                 # dot product -> 14
inv = np.linalg.inv(I)           # matrix inverse
mu, sd = np.mean(a), np.std(a)   # mean and standard deviation
w = np.where(a > 1, a, 0)        # element-wise conditional select
k = np.argmax(a)                 # index of the maximum value`,
          tags: ['python', 'numpy', 'arrays', 'data-science'],
          related: []
        },
        {
          id: 'pandas-functions-data-science',
          title: 'Pandas Functions (Data Science)',
          type: 'code',
          language: 'python',
          prose: 'Common pandas operations for reading, selecting, cleaning, grouping, and joining tabular data.',
          code: `import pandas as pd
df = pd.read_csv("data.csv")           # load a CSV into a DataFrame
col = df["price"]                       # select a single column as a Series
row = df.loc[0]                         # label-based row selection
cell = df.iloc[0, 1]                    # integer-position selection (row 0, col 1)
df = df.dropna()                        # drop rows containing NaN
df = df.fillna(0)                       # fill missing values with 0
agg = df.groupby("city").agg({"price": "mean"})  # group and aggregate
m = pd.merge(df, other, on="id")        # SQL-style join on a key
c = pd.concat([df, other])              # stack DataFrames vertically`,
          tags: ['python', 'pandas', 'data-science', 'dataframe'],
          related: []
        },
        {
          id: 'python-advanced-decorators-generators-context-managers',
          title: 'Python Advanced: Decorators, Generators, Context Managers',
          type: 'code',
          language: 'python',
          prose: 'A decorator wraps a function to add pre/post behaviour. A generator uses yield to produce items lazily. A context manager (via @contextmanager) guarantees setup and cleanup. Related advanced features: metaclasses (control class creation) and async (async def / await for concurrent I/O).',
          code: `from contextlib import contextmanager

def timer(func):                 # a minimal decorator
    def wrapper(*args, **kwargs):
        # add behaviour before/after the call
        result = func(*args, **kwargs)
        return result
    return wrapper

@timer
def greet(name):
    return f"Hi {name}"

def counter(n):                  # a generator with yield
    i = 0
    while i < n:
        yield i                  # produce items lazily, one at a time
        i += 1

@contextmanager
def managed():                   # a context manager via @contextmanager
    print("enter")               # setup
    try:
        yield "resource"         # value bound by 'as'
    finally:
        print("exit")            # guaranteed cleanup

with managed() as r:
    print(r)`,
          tags: ['python', 'decorators', 'generators', 'context-managers', 'advanced'],
          related: []
        },
        {
          id: 'python-vs-cplusplus-comparison',
          title: 'Python vs C++ Comparison',
          type: 'table',
          prose: 'A high-level comparison of Python and C++ across the dimensions that most affect language choice.',
          tableHeaders: ['Aspect', 'Python', 'C++'],
          tableRows: [
            ['Learning curve', 'Easy to learn', 'Complex'],
            ['Performance', 'Slow', 'Fast and memory-efficient'],
            ['Paradigm', 'Multi-paradigm', 'OOP + procedural'],
            ['Typical use', 'Data science / AI / web', 'Game dev / systems / embedded'],
            ['Ecosystem', 'Large community', 'Extensive libraries'],
            ['Portability', 'Cross-platform', 'Platform-dependent compilation']
          ],
          tags: ['python', 'cpp', 'comparison', 'languages'],
          related: []
        },
        {
          id: 'day-5-functions-in-python-reddit-series',
          title: 'Day 5 Functions in Python (Reddit Series)',
          type: 'list',
          prose: 'Functional and higher-order programming concepts in Python, from the Reddit learning series.',
          items: [
            'Higher-order functions',
            'lambda',
            'map()',
            'filter()',
            'reduce()',
            'closures',
            'recursion',
            'memoisation with functools.lru_cache'
          ],
          tags: ['python', 'functions', 'functional', 'higher-order'],
          related: []
        }
      ]
    },
    {
      id: 'systems-linux-and-devops',
      title: 'Systems, Linux and DevOps',
      topics: [
        {
          id: 'linux-file-system',
          title: 'Linux File System',
          type: 'code',
          language: 'bash',
          prose: 'The standard top-level directories of the Linux filesystem hierarchy and what each contains.',
          code: `/        # root - top of the entire filesystem hierarchy
/bin     # essential user binaries (ls, cp, cat)
/etc     # system-wide configuration files
/home    # user home directories
/var     # variable data - logs, spool, caches
/tmp     # temporary files, cleared on reboot
/usr     # user programs and read-only data
/lib     # shared libraries needed by /bin and /sbin
/dev     # device files (disks, terminals)
/proc    # virtual filesystem exposing process/kernel info
/sys     # virtual filesystem exposing hardware/device info
/mnt     # mount point for temporarily mounted filesystems`,
          tags: ['linux', 'filesystem', 'systems', 'devops'],
          related: []
        },
        {
          id: '12-essential-git-commands',
          title: '12 Essential Git Commands',
          type: 'code',
          language: 'bash',
          prose: 'The twelve commands that cover most day-to-day Git work. Key patterns: feature branch workflow, squash before merge, rebase to keep linear history.',
          code: `git init                 # create a new empty repository
git clone <url>          # copy a remote repository locally
git add <file>           # stage changes for the next commit
git commit -m "message"  # record staged changes with a message
git push                 # upload local commits to the remote
git pull                 # fetch + merge remote changes into current branch
git fetch                # download remote changes without merging
git branch <name>        # create a new branch
git checkout <name>      # switch to a branch (or restore files)
git merge <name>         # merge another branch into the current one
git rebase <name>        # replay commits on top of another branch
git log                  # show commit history`,
          tags: ['git', 'version-control', 'devops', 'commands'],
          related: []
        },
        {
          id: 'how-git-works',
          title: 'How Git Works',
          type: 'code',
          language: 'bash',
          prose: 'Git moves changes through four areas: working tree, staging area (index), local repo, and remote repo. The inverse flow brings remote changes back down. git pull = fetch + merge; git fetch only updates remote-tracking branches.',
          code: `# Working tree -> Staging area (index)
git add file.txt         # stage a modified file

# Staging area -> Local repo
git commit -m "change"   # record the snapshot in the local repo

# Local repo -> Remote repo
git push                 # send local commits to the remote

# Remote repo -> Local (inverse)
git fetch                # update remote-tracking branches only
git pull                 # = git fetch + git merge (bring changes into working tree)`,
          tags: ['git', 'version-control', 'workflow', 'devops'],
          related: []
        },
        {
          id: 'docker-architecture',
          title: 'Docker Architecture',
          type: 'concept',
          prose: 'Daemon (dockerd), Client (docker CLI), Registry (Docker Hub, ECR). Images = read-only templates. Containers = running instances. Volumes for persistent storage. Networks: bridge, host, overlay (Swarm). Docker Compose for multi-container apps.',
          tags: ['docker', 'containers', 'devops', 'infrastructure'],
          related: []
        },
        {
          id: 'kubernetes-integrations',
          title: 'Kubernetes Integrations',
          type: 'concept',
          prose: 'Cluster: API server, etcd, controller manager, scheduler (control plane); kubelet, kube-proxy (worker nodes). Integrations: Prometheus (monitoring), Fluentd (logging), Istio (service mesh), Cert-Manager (TLS), ArgoCD (GitOps), Velero (backup), KEDA (event-driven scaling).',
          tags: ['kubernetes', 'devops', 'orchestration', 'cloud-native'],
          related: []
        },
        {
          id: 'azure-files-managed-file-shares',
          title: 'Azure Files — Managed File Shares',
          type: 'concept',
          prose: 'SMB and NFS file shares in Azure. Lift-and-shift for on-prem file servers. Access via storage account key or AAD DS. Mountable on Windows, Linux, macOS. Supports snapshots and soft delete.',
          tags: ['azure', 'cloud', 'storage', 'devops'],
          related: []
        },
        {
          id: 'sql-data-quality-checks',
          title: 'SQL Data Quality Checks',
          type: 'list',
          prose: 'Common categories of data quality validation in SQL, plus tooling to automate them. Tools: Great Expectations, dbt tests, custom SQL assertions.',
          items: [
            'Null validation',
            'Duplicate detection',
            'Referential integrity',
            'Data type conformance',
            'Range validation',
            'Pattern matching (regex)',
            'Statistical outliers',
            'Record count checks',
            'Cross-table consistency'
          ],
          tags: ['sql', 'data-quality', 'data-engineering', 'validation'],
          related: []
        },
        {
          id: 'mysql-join-types',
          title: 'MySQL Join Types',
          type: 'table',
          prose: 'The join types available in MySQL, what each returns, and when to reach for them.',
          tableHeaders: ['Join', 'Description', 'When to use'],
          tableRows: [
            ['INNER JOIN', 'Matching rows only', 'You need rows that exist in both tables'],
            ['LEFT JOIN', 'All left rows + matching right', 'Keep every left row, attach right where present'],
            ['RIGHT JOIN', 'All right rows + matching left', 'Keep every right row, attach left where present'],
            ['FULL OUTER JOIN', 'All rows from both tables', 'Keep unmatched rows from either side'],
            ['CROSS JOIN', 'Cartesian product', 'Generate every combination of rows'],
            ['SELF JOIN', 'Table joined to itself', 'Relate rows within the same table (e.g. hierarchies)']
          ],
          tags: ['sql', 'mysql', 'joins', 'database'],
          related: []
        }
      ]
    },
    {
      id: 'machine-learning',
      title: 'Machine Learning',
      topics: [
        {
          id: 'machine-learning-algorithms-summary',
          title: 'Machine Learning Algorithms Summary',
          type: 'list',
          prose: 'A one-line summary of the most widely used ML algorithms and what distinguishes each.',
          items: [
            'Linear Regression: Continuous output; minimises MSE.',
            'Logistic Regression: Binary classification; sigmoid output.',
            'Decision Tree: Interpretable; greedy splits (Gini/entropy).',
            'Random Forest: Ensemble of trees; reduces variance.',
            'SVM: Maximises margin hyperplane; kernel trick for non-linear.',
            'KNN: Instance-based; nearest k neighbours vote.',
            'Naive Bayes: Probabilistic; assumes feature independence.',
            'XGBoost/GBM: Gradient boosting; wins Kaggle competitions.',
            'K-Means: Unsupervised clustering; minimises within-cluster variance.',
            'PCA: Dimensionality reduction via eigenvectors.',
            'Autoencoder: Learns compressed representations.'
          ],
          tags: ['machine-learning', 'algorithms', 'summary'],
          related: []
        },
        {
          id: 'ml-vs-deep-learning',
          title: 'ML vs Deep Learning',
          type: 'table',
          prose: 'Machine learning typically requires feature engineering and suits tabular/structured data, while deep learning learns features automatically from unstructured data at the cost of more data and compute.',
          tableHeaders: ['Aspect', 'Machine Learning', 'Deep Learning'],
          tableRows: [
            ['Feature engineering', 'Manual, requires domain expertise', 'Learned automatically from data'],
            ['Data type', 'Tabular / structured', 'Unstructured (images, audio, text)'],
            ['Data/compute needs', 'Works with smaller datasets', 'Requires large data and compute'],
            ['Interpretability', 'More interpretable', 'Often a black box'],
            ['Example models', 'Linear regression, decision trees, SVMs', 'CNNs, RNNs, Transformers'],
            ['Best for', 'Structured, low-data problems', 'Perception and language tasks at scale']
          ],
          tags: ['machine-learning', 'deep-learning', 'comparison'],
          related: ['mathematics/rank-nullity-theorem']
        },
        {
          id: 'classification-algorithms-overview',
          title: 'Classification Algorithms Overview',
          type: 'concept',
          prose: 'Decision boundaries: linear (logistic, SVM-linear), non-linear (SVM-RBF, neural net, random forest). Evaluation: accuracy, precision, recall, F1, ROC-AUC, confusion matrix.',
          tags: ['machine-learning', 'classification', 'metrics'],
          related: []
        },
        {
          id: 'metrics-for-regression-in-ml',
          title: 'Metrics for Regression in ML',
          type: 'list',
          prose: 'The standard error metrics used to evaluate regression models.',
          items: [
            'MAE (mean absolute error)',
            'MSE (mean squared error)',
            'RMSE (square root of MSE)',
            'R-squared (coefficient of determination)',
            'MAPE (mean absolute percentage error)',
            'Adjusted R-squared'
          ],
          tags: ['machine-learning', 'regression', 'metrics', 'evaluation'],
          related: []
        },
        {
          id: 'markov-chain',
          title: 'Markov Chain',
          type: 'formula',
          formula: 'P_{ij} = P(\\text{next state}=j \\mid \\text{current}=i)',
          prose: 'A stochastic process where the next state depends only on the current state (Markov property). Defined by a transition matrix P whose entry P_ij gives the probability of moving from state i to state j. Used in NLP, finance, Google PageRank, and MCMC.',
          tags: ['probability', 'stochastic-process', 'markov', 'statistics'],
          person: 'Andrey Markov',
          year: '1856–1922',
          related: []
        },
        {
          id: 'shannon-entropy',
          title: 'Shannon Entropy',
          type: 'formula',
          formula: 'H(X) = -\\sum_x P(x)\\log P(x)',
          prose: 'Measures the average uncertainty in a random variable. Maximum entropy: uniform distribution. Minimum: deterministic. Foundation of information theory.',
          tags: ['information-theory', 'entropy', 'probability'],
          person: 'Claude Elwood Shannon',
          year: '1916–2001',
          related: []
        },
        {
          id: 'rag-vs-agentic-rag',
          title: 'RAG vs Agentic RAG',
          type: 'concept',
          prose: 'RAG (Retrieval-Augmented Generation): Query -> retrieve relevant documents -> augment LLM context -> generate response. Improves factual accuracy; reduces hallucination. Agentic RAG: Multi-step reasoning; the agent decides whether and what to retrieve; may call tools, decompose queries, iterate. Better for complex, multi-hop questions.',
          tags: ['rag', 'llm', 'retrieval', 'agents'],
          related: []
        },
        {
          id: 'rag-evaluation-metrics',
          title: 'RAG Evaluation Metrics',
          type: 'list',
          prose: 'Metrics for evaluating retrieval-augmented generation systems.',
          items: [
            'Context precision',
            'Context recall',
            'Faithfulness (answer grounded in context)',
            'Answer relevance',
            'Entity recall',
            'Noise robustness'
          ],
          tags: ['rag', 'evaluation', 'metrics', 'llm'],
          related: []
        }
      ]
    },
    {
      id: 'deep-learning',
      title: 'Deep Learning',
      topics: [
        {
          id: 'how-to-train-a-neural-net-key-steps',
          title: 'How to Train a Neural Net (Key Steps)',
          type: 'list',
          prose: 'The key conceptual steps and tools involved in training a neural network, from the learning objective through backpropagation and policy gradients.',
          items: [
            'Supervised learning objective: minimise loss $\\mathcal{L} = \\frac{1}{N}\\sum \\ell(y_i, \\hat{y}_i)$.',
            'Gradient descent and SGD: $\\theta \\leftarrow \\theta - \\eta\\nabla_\\theta\\mathcal{L}$.',
            'Optimisation failure modes: saddle points, poor initialisations, bad learning rates, exploding/vanishing gradients.',
            'Momentum and gradient clipping: momentum $v_{t+1} = \\beta v_t + \\nabla\\mathcal{L}$; clip if $\\|\\nabla\\| > c$.',
            'Objective useful: convex functions, Lipschitz continuity.',
            'Computation graph: forward pass builds graph; backward pass (autograd) computes gradients.',
            'Backprop and chain rule: $\\frac{\\partial\\mathcal{L}}{\\partial w} = \\frac{\\partial\\mathcal{L}}{\\partial a}\\cdot\\frac{\\partial a}{\\partial w}$ applied recursively.',
            'Policy gradient: $\\nabla J(\\theta) = \\mathbb{E}[G_t \\nabla\\ln\\pi_\\theta(a_t|s_t)]$.'
          ],
          tags: ['deep-learning', 'training', 'backpropagation', 'optimisation'],
          related: []
        },
        {
          id: 'generic-layer-backward-rule',
          title: 'Generic Layer: Backward Rule',
          type: 'multiFormula',
          formulas: [
            { label: 'Weight gradient', tex: '\\nabla_W \\mathcal{L} = \\frac{\\partial\\mathcal{L}}{\\partial y}\\cdot x^T' },
            { label: 'Bias gradient', tex: '\\nabla_b\\mathcal{L} = \\frac{\\partial\\mathcal{L}}{\\partial y}' }
          ],
          prose: 'The backward rule for a generic linear layer. Why average over batch? Reduces gradient noise; more stable convergence.',
          tags: ['deep-learning', 'backpropagation', 'gradients', 'layers'],
          related: []
        },
        {
          id: 'activation-functions',
          title: 'Activation Functions',
          type: 'multiFormula',
          formulas: [
            { label: 'Sigmoid', tex: '\\sigma(x) = \\frac{1}{1+e^{-x}}' },
            { label: 'ReLU', tex: '\\max(0, x)' },
            { label: 'Leaky ReLU', tex: '\\max(\\alpha x, x), \\quad \\alpha \\approx 0.01' },
            { label: 'Tanh', tex: '\\tanh(x) \\in (-1, 1)' },
            { label: 'Softmax', tex: '\\sigma(\\mathbf{z})_i = \\frac{e^{z_i}}{\\sum_j e^{z_j}}' }
          ],
          prose: 'Sigmoid: output 0–1; vanishing gradient issue. ReLU: most common hidden layer; dying neuron problem. Leaky ReLU: small slope for negatives, alpha around 0.01. Tanh: output (-1,1); zero-centred. Softmax: multi-class output. GELU: used in Transformers. Swish: self-gated; smooth.',
          tags: ['deep-learning', 'activation-functions', 'neural-networks'],
          related: []
        },
        {
          id: 'mathematics-behind-ai-how-a-single-artificial-neuron-works',
          title: 'Mathematics Behind AI (How a Single Artificial Neuron Works)',
          type: 'formula',
          formula: 'y = \\sigma\\!\\left(\\sum_i w_i x_i + b\\right) = \\sigma(\\mathbf{w}\\cdot\\mathbf{x} + b)',
          prose: 'Inputs x_i are multiplied by weights w_i, summed, bias b added, then passed through an activation function sigma.',
          tags: ['deep-learning', 'neuron', 'mathematics', 'neural-networks'],
          related: []
        }
      ]
    },
    {
      id: 'reinforcement-learning',
      title: 'Reinforcement Learning',
      topics: [
        {
          id: 'rl-loop-and-mdp',
          title: 'RL Loop and MDP',
          type: 'formula',
          formula: 'G_t = \\sum_{k=0}^\\infty \\gamma^k r_{t+k}',
          prose: 'The agent observes state s_t, takes action a_t, receives reward r_t, and transitions to s_{t+1}. The goal is to maximise the discounted return G_t. Formalised as a Markov Decision Process (MDP) defined by the tuple (S, A, P, R, gamma).',
          tags: ['reinforcement-learning', 'mdp', 'return', 'rl-loop'],
          related: []
        },
        {
          id: 'values-and-bellman-equations',
          title: 'Values and Bellman Equations',
          type: 'multiFormula',
          formulas: [
            { label: 'State value', tex: 'V^\\pi(s) = \\mathbb{E}_\\pi\\!\\left[G_t \\mid s_t=s\\right]' },
            { label: 'Action value', tex: 'Q^\\pi(s,a) = \\mathbb{E}_\\pi\\!\\left[G_t \\mid s_t=s, a_t=a\\right]' },
            { label: 'Bellman optimality', tex: 'V^*(s) = \\max_a \\left[R(s,a) + \\gamma\\sum_{s\'} P(s\'|s,a)V^*(s\')\\right]' }
          ],
          prose: 'The state-value function V gives expected return from a state under policy pi; the action-value function Q conditions additionally on the action taken. The Bellman optimality equation defines the best achievable value recursively.',
          tags: ['reinforcement-learning', 'bellman', 'value-function', 'q-function'],
          related: []
        },
        {
          id: 'stability-tools',
          title: 'Stability Tools',
          type: 'formula',
          formula: '\\delta_t = r_t + \\gamma V(s_{t+1}) - V(s_t)',
          prose: 'The temporal difference (TD) error measures the gap between the predicted value of a state and the bootstrapped estimate from the next state plus reward; it drives value-function updates.',
          tags: ['reinforcement-learning', 'td-error', 'stability', 'value-function'],
          related: []
        },
        {
          id: 'dqn-family',
          title: 'DQN Family',
          type: 'list',
          prose: 'The family of value-based deep RL methods built on the Deep Q-Network.',
          items: [
            'DQN: Deep Q-Network; experience replay; target network.',
            'Double DQN: separate networks for selection and evaluation.',
            'Dueling DQN: Q(s,a) = V(s) + A(s,a).',
            'Prioritised replay: samples high-TD-error transitions more often.'
          ],
          tags: ['reinforcement-learning', 'dqn', 'value-based', 'deep-rl'],
          related: []
        },
        {
          id: 'policy-gradients',
          title: 'Policy Gradients',
          type: 'list',
          prose: 'Policy-gradient methods directly optimise the policy. Key algorithms range from REINFORCE through actor-critic methods to PPO and SAC.',
          items: [
            'REINFORCE: gradient of objective is the expectation of return times the score function, grad J(theta) = E[G_t grad ln pi_theta(a_t|s_t)].',
            'Actor-Critic: actor updates policy; critic estimates value function.',
            'A3C: asynchronous parallel actors; reduces correlation.',
            'PPO (Proximal Policy Optimisation): clips policy ratio to prevent large updates; widely used.',
            'SAC (Soft Actor-Critic): maximum entropy RL; adds entropy bonus.'
          ],
          tags: ['reinforcement-learning', 'policy-gradient', 'ppo', 'actor-critic'],
          related: []
        },
        {
          id: 'model-based-rl-world-models',
          title: 'Model-Based RL / World Models',
          type: 'concept',
          prose: 'The agent learns a model P-hat(s\'|s,a) of the environment and plans with it. This reduces sample complexity. Approaches: Dyna, MuZero, Dreamer.',
          tags: ['reinforcement-learning', 'model-based', 'world-models', 'planning'],
          related: []
        },
        {
          id: 'offline-rl-grpo-dapo',
          title: 'Offline RL, GRPO, DAPO',
          type: 'concept',
          prose: 'Offline RL: Learns from a fixed dataset without interaction. GRPO (Group Relative Policy Optimisation): RL fine-tuning of LLMs; compares outcomes within a group. DAPO: Decoupled clip, dynamic sampling, token-level loss; improves LLM RLHF training stability.',
          tags: ['reinforcement-learning', 'offline-rl', 'grpo', 'dapo', 'llm'],
          related: []
        },
        {
          id: 'rlvr-and-luft-for-llms',
          title: 'RLVR and LUFT for LLMs',
          type: 'concept',
          prose: 'RLVR: RL with Verifiable Rewards; verifies correctness (math, code) rather than using a reward model. LUFT: Large-scale Unified Fine-Tuning; combines SFT and RL stages.',
          tags: ['reinforcement-learning', 'rlvr', 'luft', 'llm', 'fine-tuning'],
          related: []
        }
      ]
    },
    {
      id: 'large-language-models-and-ai-infrastructure',
      title: 'Large Language Models and AI Infrastructure',
      topics: [
        {
          id: 'mcp-vs-a2a',
          title: 'MCP vs A2A',
          type: 'concept',
          prose: 'MCP (Model Context Protocol): Connects an LLM to external tools, data sources, and APIs through a standardised interface. Single protocol, one scanner. A2A (Agent-to-Agent): Multiple agents with different roles collaborate. Two protocols (MCP + A2A), multiple scanners, specialised agents. MCP: model as orchestrator of tools. A2A: models as peers in a network.',
          tags: ['llm', 'mcp', 'a2a', 'agents', 'protocols'],
          related: []
        },
        {
          id: 'llm-vs-agent-vs-agentic-workflow-vs-multi-agent',
          title: 'LLM vs Agent vs Agentic Workflow vs Multi-Agent',
          type: 'concept',
          prose: 'LLM: single forward pass; stateless. Agent: LLM + tool use + memory; can act iteratively. Agentic workflow: multi-step, structured pipeline with tools. Multi-agent: multiple specialised agents coordinating; parallelism; role separation.',
          tags: ['llm', 'agents', 'agentic', 'multi-agent'],
          related: []
        },
        {
          id: '5-techniques-to-fine-tune-llms',
          title: '5 Techniques to Fine-Tune LLMs',
          type: 'table',
          prose: 'Five parameter-efficient fine-tuning (PEFT) techniques for LLMs, all variants on Low-Rank Adaptation. Almost-LoRA (LoRA+): with rank r much smaller than min(d1, d2), fine-tunes W + BA instead of W alone.',
          tableHeaders: ['Technique', 'What it trains', 'Memory', 'Note'],
          tableRows: [
            ['LoRA', 'Low-rank matrices A and B', 'Low (minimal parameters)', 'Low-Rank Adaptation baseline'],
            ['LoRA-FA', 'Only matrix B (A frozen)', 'Lower than LoRA', 'Frozen A reduces memory further'],
            ['VeRA', 'Only scalar vectors', 'Very low', 'Shared random matrices across layers'],
            ['Delta-LoRA', 'Low-rank update + base weights', 'Moderate', 'Updates pre-trained weights incrementally'],
            ['LoRA+', 'A and B at different learning rates', 'Like LoRA', 'Different learning rates for A and B matrices']
          ],
          tags: ['llm', 'fine-tuning', 'lora', 'peft'],
          related: []
        },
        {
          id: 'ai-system-architecture',
          title: 'AI System Architecture',
          type: 'concept',
          prose: 'Data ingestion (sensors, APIs, databases) -> preprocessing (cleaning, normalisation) -> model training layer (algorithms, hyperparameter selection, cross-validation) -> model evaluation (performance metrics, error analysis) -> deployment layer (API endpoints, monitoring).',
          tags: ['ai', 'architecture', 'mlops', 'systems'],
          related: []
        },
        {
          id: 'comparing-major-ai-disciplines',
          title: 'Comparing Major AI Disciplines',
          type: 'concept',
          prose: 'ML: statistical learning; DL: representation learning; NLP: language understanding; Computer Vision: image/video understanding; Robotics: embodied AI; RL: decision-making.',
          tags: ['ai', 'disciplines', 'overview'],
          related: []
        },
        {
          id: 'agentic-ai-system-design-blueprint',
          title: 'Agentic AI System Design Blueprint',
          type: 'concept',
          prose: 'Planning module -> reasoning engine -> memory (short/long term) -> tool use -> feedback loop. Key principles: grounding, self-reflection, goal decomposition, safety constraints.',
          tags: ['ai', 'agents', 'system-design', 'agentic'],
          related: []
        },
        {
          id: 'ai-benchmark-comparison-gpt-5-5-vs-claude-mythos-preview',
          title: 'AI Benchmark Comparison (GPT-5.5 vs Claude Mythos Preview)',
          type: 'table',
          prose: 'Benchmark results comparing GPT-5.5 and Claude Mythos Preview across coding, reasoning, agentic, and security evaluations. (Source: OpenAI, Anthropic.)',
          tableHeaders: ['Benchmark', 'GPT-5.5', 'Claude Mythos Preview'],
          tableRows: [
            ['Terminal-Bench 2.0', '82.7%', '82%'],
            ['SWE-Bench Pro', '58.6%', '77.8%'],
            ['GPQA Diamond', '93.6%', '94.5%'],
            ['Humanity\'s Last Exam (no tools)', '41.4%', '56.8%'],
            ['Humanity\'s Last Exam (with tools)', '52.9%', '64.7%'],
            ['OSWorld', '78.7%', '79.6%'],
            ['BrowseComp', '84.4%', '86.9%'],
            ['CyberGym', '81.9%', '83%']
          ],
          tags: ['ai', 'benchmarks', 'llm', 'comparison'],
          related: []
        },
        {
          id: 'claude-ecosystem',
          title: 'Claude Ecosystem',
          type: 'concept',
          prose: 'Claude Chat, Claude API, Claude Projects, Claude Code (terminal agentic coding). Claude Code has 150+ commands. Claude Mythos Preview: frontier model in restricted access (Project Glasswing).',
          tags: ['claude', 'anthropic', 'llm', 'ecosystem'],
          related: []
        },
        {
          id: 'chinas-open-source-ai-company-list',
          title: 'China\'s Open-Source AI Company List',
          type: 'concept',
          prose: 'Proprietary: ByteDance (Doubao), Moonshot (Kimi), Zhipu AI, Baidu (ERNIE), Alibaba (Qwen). Open-source: DeepSeek, MiniMax, Mistral-CN, InternLM, ChatGLM. Big Tech open: Meta (LLaMA), Alibaba (Qwen).',
          tags: ['ai', 'china', 'open-source', 'llm', 'companies'],
          related: []
        },
        {
          id: 'data-science-roadmap-2026',
          title: 'Data Science Roadmap 2026',
          type: 'list',
          prose: 'A staged learning path for becoming a data scientist in 2026, from Python foundations through specialisation.',
          items: [
            'Python foundations',
            'Statistics and probability',
            'Data wrangling (pandas, SQL)',
            'EDA and visualisation',
            'ML algorithms',
            'Deep learning (PyTorch/TensorFlow)',
            'MLOps (pipelines, deployment, monitoring)',
            'Specialisation (NLP, CV, time series, RL)'
          ],
          tags: ['data-science', 'roadmap', 'career', 'learning'],
          related: []
        }
      ]
    },
    {
      id: 'research-and-learning-methods',
      title: 'Research and Learning Methods',
      topics: [
        {
          id: 'how-to-read-a-paper-three-pass-approach',
          title: 'How to Read a Paper (Three-Pass Approach)',
          type: 'list',
          prose: 'A structured three-pass method for reading research papers efficiently, escalating depth with each pass.',
          items: [
            '1st pass (5–10 min): Title, abstract, intro, section headings, conclusions. Answer: category, context, correctness, contributions, clarity.',
            '2nd pass (1 h): Read carefully; examine figures; note unread references.',
            '3rd pass (4–5 h): Re-implement; challenge assumptions; identify implicit assumptions and limitations.'
          ],
          tags: ['research', 'reading', 'papers', 'method'],
          related: []
        },
        {
          id: 'the-feynman-technique',
          title: 'The Feynman Technique',
          type: 'list',
          prose: 'A learning method for deep understanding: if you can explain something simply, you truly understand it. Simplicity reveals depth of understanding.',
          items: [
            'Pick and study a topic.',
            'Explain it as if to a child.',
            'Identify gaps in your understanding.',
            'Return to the literature to fill gaps.'
          ],
          tags: ['learning', 'feynman', 'study', 'method'],
          person: 'Richard Feynman',
          related: ['personal-dev/study-smarter-not-harder']
        }
      ]
    }
  ]
};
