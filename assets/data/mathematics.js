export const mathematics = {
  id: 'mathematics',
  title: 'Mathematics',
  emoji: '∑',
  color: 'var(--color-maths)',
  description: 'Pure mathematics: calculus, linear algebra, analysis, number theory, geometry',
  topicCount: 52,
  sections: [
    {
      id: 'calculus-foundations',
      title: 'Calculus Foundations',
      topics: [
        {
          id: 'limit-definition-of-the-derivative',
          title: 'Limit Definition of the Derivative',
          type: 'formula',
          formula: "f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}",
          prose: 'The derivative gives the rate of change of a function. $h$ is the time interval tending to zero.',
          tags: ['calculus', 'derivative', 'limits', 'differentiation'],
          related: []
        },
        {
          id: 'power-rule-and-core-differentiation',
          title: 'Power Rule and Core Differentiation',
          type: 'multiFormula',
          formulas: [
            { label: 'Core derivatives', tex: "\\frac{d}{dx} x^n = nx^{n-1}, \\quad \\frac{d}{dx} e^x = e^x, \\quad \\frac{d}{dx} \\ln x = \\frac{1}{x}" },
            { label: 'Product rule', tex: "\\frac{d}{dx}[f \\cdot g] = f'g + fg'" },
            { label: 'Quotient rule', tex: "\\frac{d}{dx}\\!\\left[\\frac{f}{g}\\right] = \\frac{f'g - fg'}{g^2}" },
            { label: 'Chain rule', tex: "\\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x)" }
          ],
          prose: 'The power rule, together with the derivatives of $e^x$ and $\\ln x$, forms the core of differentiation. The product, quotient, and chain rules allow differentiation of composite expressions.',
          tags: ['calculus', 'differentiation', 'power rule', 'chain rule'],
          related: []
        },
        {
          id: 'integration-riemann-vs-lebesgue',
          title: 'Integration — Riemann vs Lebesgue',
          type: 'multiFormula',
          formulas: [
            { label: 'Riemann integral', tex: "\\int_a^b f(x)\\,dx = \\lim_{n\\to\\infty}\\sum_{i=1}^n f(x_i^*)\\Delta x_i" },
            { label: 'Lebesgue integral', tex: "\\int f\\,d\\mu = \\sup \\sum \\mu(E_k) h_k" },
            { label: 'Fundamental theorem', tex: "\\frac{d}{dx}\\int_a^x f(t)\\,dt = f(x)" }
          ],
          prose: 'The Riemann integral partitions the domain into intervals and sums areas of thin rectangles. The Lebesgue integral instead integrates by measuring sets, summing over the range of the function. The fundamental theorem of calculus links differentiation and integration.',
          tags: ['calculus', 'integration', 'riemann', 'lebesgue', 'measure'],
          related: []
        },
        {
          id: 'integration-notation-types',
          title: 'Integration Notation Types',
          type: 'list',
          prose: 'Integration takes several notational forms depending on the dimension and geometry of the region being integrated over.',
          items: [
            'Line integral: $\\int_C f\\,ds$',
            'Double: $\\iint_D f(x,y)\\,dA$',
            'Triple: $\\iiint_V f\\,dV$',
            'Surface: $\\iint_S \\mathbf{F}\\cdot d\\mathbf{S}$',
            'Flux: $\\iint_S \\mathbf{F}\\cdot\\hat{n}\\,dS$'
          ],
          tags: ['calculus', 'integration', 'notation', 'vector calculus'],
          related: []
        },
        {
          id: 'fourier-transform',
          title: 'Fourier Transform',
          type: 'formula',
          formula: "F(\\omega) = \\int_{-\\infty}^{\\infty} f(t)\\,e^{-i\\omega t}\\,dt",
          prose: 'Decomposes any function into its constituent frequencies. Fundamental to signal processing, image processing, and solving PDEs.',
          tags: ['fourier', 'transform', 'signal processing', 'frequency'],
          related: ['physics/de-broglie-wavelength-matter-waves']
        },
        {
          id: 'fourier-coefficients',
          title: 'Fourier Coefficients',
          type: 'multiFormula',
          formulas: [
            { label: 'a_n', tex: "a_n = \\frac{1}{L}\\int_{-L}^{L} f(x)\\cos\\!\\left(\\frac{n\\pi x}{L}\\right)dx" },
            { label: 'b_n', tex: "b_n = \\frac{1}{L}\\int_{-L}^{L} f(x)\\sin\\!\\left(\\frac{n\\pi x}{L}\\right)dx" }
          ],
          prose: 'The Fourier coefficients $a_n$ and $b_n$ give the amplitudes of the cosine and sine components of a periodic function expanded as a Fourier series.',
          tags: ['fourier', 'coefficients', 'series', 'harmonics'],
          related: []
        },
        {
          id: 'laplace-transform',
          title: 'Laplace Transform',
          type: 'formula',
          formula: "\\mathcal{L}\\{f(t)\\} = F(s) = \\int_0^{\\infty} f(t)\\,e^{-st}\\,dt",
          prose: 'Converts a function in the time domain to the complex frequency domain. Used extensively in control systems, electrical engineering, and solving ODEs with initial conditions.',
          tags: ['laplace', 'transform', 'control systems', 'ode'],
          related: []
        },
        {
          id: 'mellin-transform',
          title: 'Mellin Transform',
          type: 'formula',
          formula: "\\{Mf\\}(s) = \\varphi(s) = \\int_0^{\\infty} x^{s-1} f(x)\\,dx",
          prose: 'Used in analytic number theory and asymptotic analysis. Related to the Fourier and Laplace transforms via substitution.',
          tags: ['mellin', 'transform', 'number theory', 'asymptotics'],
          related: []
        },
        {
          id: 'stirlings-approximation',
          title: "Stirling's Approximation",
          type: 'formula',
          formula: "n! \\approx \\sqrt{2\\pi n}\\left(\\frac{n}{e}\\right)^n",
          prose: 'Gives a simple formula for $n!$ when $n$ is large. Widely used in combinatorics, probability, and asymptotic analysis.',
          person: 'James Stirling',
          year: '1730',
          tags: ['factorial', 'approximation', 'combinatorics', 'asymptotics'],
          related: []
        }
      ]
    },
    {
      id: 'differential-equations',
      title: 'Differential Equations',
      topics: [
        {
          id: 'classification',
          title: 'Classification',
          type: 'list',
          prose: 'Differential equations are classified along several axes that determine the methods used to solve them.',
          items: [
            '\\textbf{Order}: highest derivative present',
            '\\textbf{Linearity}: linear if $y$ and derivatives appear to the first power only',
            '\\textbf{Homogeneity}: RHS is zero (homogeneous) or non-zero (non-homogeneous)'
          ],
          tags: ['differential equations', 'classification', 'order', 'linearity'],
          related: []
        },
        {
          id: 'first-equation-of-motion-derivation',
          title: 'First Equation of Motion Derivation',
          type: 'proof',
          prose: 'Given $a = \\text{const}$, the first equation of motion is derived by integrating acceleration with respect to time.',
          steps: [
            'Start from the definition of acceleration: $a = \\frac{dv}{dt}$.',
            'With $a$ constant, separate variables: $dv = a\\,dt$.',
            'Integrate both sides from the initial velocity $u$ to $v$ and from time $0$ to $t$.',
            'This gives $v - u = at$, hence $v = u + at$.'
          ],
          formulas: [
            { label: 'First equation of motion', tex: "v = u + at" },
            { label: 'Second equation', tex: "s = ut + \\tfrac{1}{2}at^2" },
            { label: 'Third equation', tex: "v^2 = u^2 + 2as" },
            { label: 'Fourth equation', tex: "s = \\tfrac{1}{2}(u+v)t" }
          ],
          tags: ['kinematics', 'suvat', 'motion', 'integration'],
          related: []
        },
        {
          id: 'integrating-factor-method',
          title: 'Integrating Factor Method',
          type: 'proof',
          prose: "A method to solve first-order linear ODEs of the form $y' + P(x)y = Q(x)$.",
          steps: [
            "Write the ODE in standard form $y' + P(x)y = Q(x)$.",
            'Compute the integrating factor $\\mu = e^{\\int P\\,dx}$.',
            'Multiply both sides of the equation by $\\mu$.',
            'The left-hand side becomes the derivative of a product; integrate both sides to solve for $y$.'
          ],
          tags: ['ode', 'integrating factor', 'first-order', 'linear'],
          related: []
        },
        {
          id: 'second-order-systems-control',
          title: 'Second-Order Systems — Control',
          type: 'formula',
          formula: "a_2y'' + a_1y' + a_0y = f(t)",
          prose: 'A general second-order linear system. The characteristic equation determines the response type (overdamped, critically damped, underdamped).',
          tags: ['control systems', 'second-order', 'damping', 'ode'],
          related: []
        }
      ]
    },
    {
      id: 'linear-algebra',
      title: 'Linear Algebra',
      topics: [
        {
          id: 'jordan-normal-form',
          title: 'Jordan Normal Form',
          type: 'formula',
          formula: "J_k(\\lambda) = \\begin{pmatrix} \\lambda & 1 & 0 \\\\ 0 & \\lambda & 1 \\\\ 0 & 0 & \\lambda \\end{pmatrix}",
          prose: 'Every square matrix $A$ over $\\mathbb{C}$ is similar to a Jordan matrix $J$ with Jordan blocks. Used in solving systems of ODEs and in quantum mechanics.',
          person: 'Camille Jordan',
          tags: ['linear algebra', 'matrix', 'jordan form', 'eigenvalues'],
          related: []
        },
        {
          id: 'rotational-matrix-2d-and-3d',
          title: 'Rotational Matrix 2D and 3D',
          type: 'formula',
          formula: "R(\\theta) = \\begin{pmatrix}\\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta\\end{pmatrix}",
          prose: 'Rotation matrices preserve vector length and orientation. For 3D: use Euler angles or rotation around a unit axis.',
          tags: ['linear algebra', 'rotation', 'matrix', 'geometry'],
          related: []
        },
        {
          id: 'hessian-matrix',
          title: 'Hessian Matrix',
          type: 'formula',
          formula: "H(f)_{ij} = \\frac{\\partial^2 f}{\\partial x_i \\partial x_j}",
          prose: 'For $f:\\mathbb{R}^n\\to\\mathbb{R}$, the Hessian is a matrix of second partial derivatives (a $2\\times2$ matrix in two variables). Used to classify critical points (max/min/saddle).',
          person: 'Otto Hesse',
          year: '1811–1874',
          tags: ['linear algebra', 'hessian', 'second derivatives', 'optimization'],
          related: []
        },
        {
          id: 'jacobian-matrix',
          title: 'Jacobian Matrix',
          type: 'formula',
          formula: "J_{ij} = \\frac{\\partial F_i}{\\partial x_j}",
          prose: 'For $\\mathbf{F}:\\mathbb{R}^n\\to\\mathbb{R}^m$, the Jacobian is a visual guide to how multivariable functions transform space locally.',
          tags: ['linear algebra', 'jacobian', 'partial derivatives', 'transformation'],
          related: []
        },
        {
          id: 'types-of-matrices',
          title: 'Types of Matrices',
          type: 'list',
          prose: 'Matrices are categorised by their shape, entries, and algebraic properties.',
          items: [
            'Square',
            'Rectangular',
            'Diagonal',
            'Identity',
            'Symmetric',
            'Skew-symmetric',
            'Orthogonal',
            'Upper triangular',
            'Lower triangular',
            'Idempotent',
            'Nilpotent',
            'Row/column matrices',
            'Inverse matrix',
            'Transpose'
          ],
          tags: ['linear algebra', 'matrix', 'classification', 'types'],
          related: []
        },
        {
          id: 'properties-of-transpose',
          title: 'Properties of Transpose',
          type: 'multiFormula',
          formulas: [
            { label: 'Transpose of a product', tex: "(AB)^T = B^T A^T" },
            { label: 'Double transpose', tex: "(A^T)^T = A" },
            { label: 'Scalar multiple', tex: "(kA)^T = kA^T" },
            { label: 'Transpose of a sum', tex: "(A+B)^T = A^T + B^T" }
          ],
          prose: 'The transpose operation obeys these four key algebraic properties.',
          tags: ['linear algebra', 'transpose', 'matrix', 'properties'],
          related: []
        },
        {
          id: 'rank-nullity-theorem',
          title: 'Rank-Nullity Theorem',
          type: 'formula',
          formula: "\\text{rank}(T) + \\text{nullity}(T) = \\dim(V)",
          prose: 'For a linear map $T: V \\to W$, the rank plus the nullity equals the dimension of the domain. Practical applications: least squares, null space analysis, Gaussian elimination.',
          tags: ['linear algebra', 'rank', 'nullity', 'dimension'],
          related: []
        },
        {
          id: 'pearson-correlation-coefficient',
          title: 'Pearson Correlation Coefficient',
          type: 'formula',
          formula: "r = \\frac{\\sum(x_i - \\bar{x})(y_i - \\bar{y})}{\\sqrt{\\sum(x_i-\\bar{x})^2 \\sum(y_i-\\bar{y})^2}}",
          prose: 'Measures linear correlation between two variables. $r \\in [-1, 1]$.',
          person: 'Karl Pearson',
          tags: ['statistics', 'correlation', 'pearson', 'covariance'],
          related: []
        }
      ]
    },
    {
      id: 'vector-calculus',
      title: 'Vector Calculus',
      topics: [
        {
          id: 'del-operator-nabla',
          title: 'Del Operator (Nabla)',
          type: 'list',
          formula: "\\nabla = \\hat{x}\\frac{\\partial}{\\partial x} + \\hat{y}\\frac{\\partial}{\\partial y} + \\hat{z}\\frac{\\partial}{\\partial z}",
          prose: 'The del operator (nabla) is a vector differential operator used to express the gradient, divergence, and curl.',
          items: [
            'Gradient: $\\nabla f$ (scalar $\\to$ vector)',
            'Divergence: $\\nabla \\cdot \\mathbf{F}$ (vector $\\to$ scalar)',
            'Curl: $\\nabla \\times \\mathbf{F}$ (vector $\\to$ vector)'
          ],
          tags: ['vector calculus', 'del operator', 'gradient', 'divergence', 'curl'],
          related: []
        },
        {
          id: 'divergence-theorem',
          title: 'Divergence Theorem',
          type: 'formula',
          formula: "\\oiint_S \\mathbf{F}\\cdot d\\mathbf{S} = \\iiint_V (\\nabla\\cdot\\mathbf{F})\\,dV",
          prose: 'The volume density of the outward flux equals the divergence: Source: $\\nabla\\cdot\\mathbf{F} > 0$; Sink: $\\nabla\\cdot\\mathbf{F} < 0$; Neither: $\\nabla\\cdot\\mathbf{F} = 0$.',
          tags: ['vector calculus', 'divergence', 'flux', 'gauss'],
          related: []
        },
        {
          id: 'greens-theorem',
          title: "Green's Theorem",
          type: 'formula',
          formula: "\\oint_C (P\\,dx + Q\\,dy) = \\iint_D \\left(\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y}\\right)dA",
          prose: 'Relates a line integral around a closed curve to a double integral over the enclosed region.',
          person: 'George Green',
          year: '1793–1841',
          tags: ['vector calculus', 'green', 'line integral', 'double integral'],
          related: []
        },
        {
          id: 'noether-current',
          title: 'Noether Current',
          type: 'formula',
          formula: "j^\\mu(x) = \\frac{\\partial\\mathcal{L}}{\\partial(\\partial_\\mu \\phi_a)} X_a[\\phi_a] - F^\\mu",
          prose: "Each continuous symmetry of the action corresponds to a conserved current (Noether's theorem).",
          tags: ['vector calculus', 'noether', 'symmetry', 'conservation'],
          related: []
        }
      ]
    },
    {
      id: 'analysis-and-number-theory',
      title: 'Analysis and Number Theory',
      topics: [
        {
          id: 'the-basel-problem-euler',
          title: 'The Basel Problem (Euler)',
          type: 'formula',
          formula: "\\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6}",
          prose: '"A solution that marked the arrival of the King of Mathematics." The sum of the reciprocals of all perfect squares equals $\\pi^2/6$.',
          person: 'Leonhard Euler',
          year: '1734',
          tags: ['number theory', 'series', 'basel', 'pi'],
          related: []
        },
        {
          id: 'the-riemann-hypothesis',
          title: 'The Riemann Hypothesis',
          type: 'formula',
          formula: "\\zeta(s) = \\sum_{n=1}^{\\infty} \\frac{1}{n^s}",
          prose: 'The zeta function $\\zeta(s) = \\sum_{n=1}^{\\infty} \\frac{1}{n^s}$ for $\\text{Re}(s) > 1$. All non-trivial zeros of $\\zeta(s)$ have real part $\\frac{1}{2}$ (unproven). Deeply connected to the distribution of prime numbers.',
          tags: ['number theory', 'zeta function', 'primes', 'riemann'],
          related: []
        },
        {
          id: 'eulers-identity',
          title: "Euler's Identity",
          type: 'formula',
          formula: "e^{i\\pi} + 1 = 0",
          prose: 'Considered the most beautiful equation in mathematics. Links $e$, $i$, $\\pi$, $1$, $0$.',
          person: 'Leonhard Euler',
          tags: ['analysis', 'euler', 'complex', 'pi'],
          related: []
        },
        {
          id: 'picks-theorem',
          title: "Pick's Theorem",
          type: 'formula',
          formula: "A = I + \\frac{B}{2} - 1",
          prose: 'For a lattice polygon with $I$ interior points and $B$ boundary points, the area $A$ is given by this formula.',
          person: 'Georg Alexander Pick',
          year: '1859–1942',
          tags: ['geometry', 'lattice', 'polygon', 'area'],
          related: []
        },
        {
          id: 'beauty-of-numbers',
          title: 'Beauty of Numbers',
          type: 'multiFormula',
          formulas: [
            { label: 'The 37 pattern', tex: "\\frac{111}{1+1+1} = 37, \\quad \\frac{222}{2+2+2} = 37, \\quad \\ldots \\quad \\frac{999}{9+9+9} = 37" },
            { label: 'Sum of squares', tex: "1^2 + 2^2 + \\ldots + n^2 = \\frac{n(n+1)(2n+1)}{6}" }
          ],
          prose: 'Numerical patterns reveal hidden structure: any three-digit repdigit divided by its digit sum equals 37, and the sum of the first $n$ squares has a closed form.',
          tags: ['number theory', 'patterns', 'sums', 'curiosities'],
          related: []
        },
        {
          id: 'summation-formulas-first-n-natural-numbers',
          title: 'Summation Formulas (First n Natural Numbers)',
          type: 'list',
          prose: 'Closed-form expressions for common sums over the first $n$ natural numbers.',
          items: [
            'Sum of first $n$ odd: $n^2$',
            'Sum of first $n$ natural: $\\frac{n(n+1)}{2}$',
            'Sum of squares: $\\frac{n(n+1)(2n+1)}{6}$',
            'Sum of cubes: $\\left[\\frac{n(n+1)}{2}\\right]^2$'
          ],
          tags: ['number theory', 'summation', 'series', 'formulas'],
          related: []
        },
        {
          id: 'binomial-theorem',
          title: 'Binomial Theorem',
          type: 'formula',
          formula: "(a+b)^n = \\sum_{k=0}^n \\binom{n}{k} a^{n-k} b^k",
          prose: "Pascal's Triangle gives the binomial coefficients. Secrets: Perfect squares, Fibonacci sequence, Powers of eleven.",
          tags: ['algebra', 'binomial', 'pascal', 'combinatorics'],
          related: []
        },
        {
          id: 'co-prime-numbers-relatively-prime',
          title: 'Co-prime Numbers (Relatively Prime)',
          type: 'concept',
          prose: 'Two integers are coprime if $\\gcd(a,b) = 1$ (no common factor other than 1). Used in RSA encryption and modular arithmetic.',
          tags: ['number theory', 'coprime', 'gcd', 'rsa'],
          related: []
        },
        {
          id: 'probability-basics',
          title: 'Probability Basics',
          type: 'multiFormula',
          formulas: [
            { label: 'Union', tex: "P(A \\cup B) = P(A) + P(B) - P(A \\cap B)" },
            { label: 'Conditional', tex: "P(A|B) = \\frac{P(A \\cap B)}{P(B)}" },
            { label: "Bayes' theorem", tex: "P(A|B) = \\frac{P(B|A)P(A)}{P(B)}" }
          ],
          prose: 'The basic laws of probability: the addition rule for unions, the definition of conditional probability, and Bayes’ theorem for inverting conditionals.',
          tags: ['probability', 'bayes', 'conditional', 'statistics'],
          related: []
        },
        {
          id: 'poisson-distribution-pmf',
          title: 'Poisson Distribution (PMF)',
          type: 'formula',
          formula: "P(X=k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}",
          prose: 'Models the number of events in a fixed interval. $\\lambda$ = average rate.',
          tags: ['probability', 'poisson', 'distribution', 'statistics'],
          related: []
        }
      ]
    },
    {
      id: 'complex-analysis-and-advanced-topics',
      title: 'Complex Analysis and Advanced Topics',
      topics: [
        {
          id: 'cauchy-residue-theorem',
          title: 'Cauchy Residue Theorem',
          type: 'formula',
          formula: "\\oint_C f(z)\\,dz = 2\\pi i \\sum_k \\text{Res}(f, z_k)",
          prose: 'The integral of a function around a closed contour equals $2\\pi i$ times the sum of residues inside.',
          person: 'Augustin-Louis Cauchy',
          year: '1789–1857',
          tags: ['complex analysis', 'residue', 'contour integral', 'cauchy'],
          related: []
        },
        {
          id: 'riemann-integral-definition',
          title: 'Riemann Integral (Definition)',
          type: 'formula',
          formula: "\\int_a^b f(x)\\,dx = \\lim_{\\max\\Delta x_i \\to 0} \\sum_i f(x_i^*)\\,\\Delta x_i",
          prose: 'The Riemann integral is defined as the limit of Riemann sums as the maximum subinterval width tends to zero.',
          person: 'Bernhard Riemann',
          year: '1826–1866',
          tags: ['analysis', 'riemann', 'integral', 'limit'],
          related: []
        },
        {
          id: 'arithmetic-progression',
          title: 'Arithmetic Progression',
          type: 'multiFormula',
          formulas: [
            { label: 'nth term', tex: "a_n = a_1 + (n-1)d" },
            { label: 'Sum', tex: "S_n = \\frac{n}{2}(a_1 + a_n) = \\frac{n}{2}[2a_1 + (n-1)d]" }
          ],
          prose: 'An arithmetic progression has a constant common difference $d$ between consecutive terms.',
          tags: ['sequences', 'arithmetic progression', 'series', 'sum'],
          related: []
        },
        {
          id: 'geometric-progression',
          title: 'Geometric Progression',
          type: 'multiFormula',
          formulas: [
            { label: 'Finite sum', tex: "S_n = a\\frac{1-r^n}{1-r}" },
            { label: 'Infinite sum', tex: "S_\\infty = \\frac{a}{1-r} \\quad \\text{for } |r| < 1" }
          ],
          prose: 'A geometric progression has a constant common ratio $r$ between consecutive terms; the infinite sum converges when $|r| < 1$.',
          tags: ['sequences', 'geometric progression', 'series', 'convergence'],
          related: []
        },
        {
          id: 'continuous-wavelet-transform-cwt',
          title: 'Continuous Wavelet Transform (CWT)',
          type: 'formula',
          formula: "W(a,b) = \\int_{-\\infty}^{\\infty} f(t)\\,\\frac{1}{\\sqrt{a}}\\,\\psi\\!\\left(\\frac{t-b}{a}\\right)dt",
          prose: '$a$ = scale, $b$ = translation. Allows time-frequency analysis; generalises the Fourier transform.',
          tags: ['wavelet', 'transform', 'time-frequency', 'signal processing'],
          related: []
        }
      ]
    },
    {
      id: 'trigonometry-and-geometry',
      title: 'Trigonometry and Geometry',
      topics: [
        {
          id: 'fundamental-identities',
          title: 'Fundamental Identities',
          type: 'multiFormula',
          formulas: [
            { label: 'Pythagorean', tex: "\\sin^2\\theta + \\cos^2\\theta = 1" },
            { label: 'Tangent', tex: "1+\\tan^2\\theta = \\sec^2\\theta" },
            { label: 'Cotangent', tex: "1+\\cot^2\\theta = \\csc^2\\theta" }
          ],
          prose: 'The three fundamental Pythagorean trigonometric identities.',
          tags: ['trigonometry', 'identities', 'pythagorean', 'angles'],
          related: []
        },
        {
          id: 'ratio-and-reciprocal-relations',
          title: 'Ratio and Reciprocal Relations',
          type: 'multiFormula',
          formulas: [
            { label: 'Tangent ratio', tex: "\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}" },
            { label: 'Cotangent ratio', tex: "\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}" },
            { label: 'Secant', tex: "\\sec\\theta = \\frac{1}{\\cos\\theta}" },
            { label: 'Cosecant', tex: "\\csc\\theta = \\frac{1}{\\sin\\theta}" }
          ],
          prose: 'The ratio and reciprocal relations express the tangent, cotangent, secant, and cosecant in terms of sine and cosine.',
          tags: ['trigonometry', 'ratios', 'reciprocal', 'functions'],
          related: []
        },
        {
          id: 'spherical-trigonometry',
          title: 'Spherical Trigonometry',
          type: 'multiFormula',
          formulas: [
            { label: 'Law of cosines', tex: "c^2 = a^2 + b^2 - 2ab\\cos C" },
            { label: 'Spherical law of cosines', tex: "\\cos\\left(\\frac{c}{R}\\right) = \\cos\\!\\left(\\frac{a}{R}\\right)\\cos\\!\\left(\\frac{b}{R}\\right) + \\sin\\!\\left(\\frac{a}{R}\\right)\\sin\\!\\left(\\frac{b}{R}\\right)\\cos C" }
          ],
          prose: 'Spherical trigonometry generalises the planar law of cosines to triangles on the surface of a sphere of radius $R$.',
          tags: ['trigonometry', 'spherical', 'geometry', 'law of cosines'],
          related: []
        },
        {
          id: 'geometric-formulas-areas-and-volumes',
          title: 'Geometric Formulas (Areas and Volumes)',
          type: 'table',
          prose: 'Standard formulas for the areas of 2D shapes and the volumes of 3D solids.',
          tableHeaders: ['Shape', 'Type', 'Formula'],
          tableRows: [
            ['Circle', '2D', '$\\pi r^2$'],
            ['Triangle', '2D', '$\\frac{1}{2}bh$'],
            ['Parallelogram', '2D', '$bh$'],
            ['Trapezoid', '2D', '$\\frac{1}{2}(a+b)h$'],
            ['Sphere', '3D', '$\\frac{4}{3}\\pi r^3$'],
            ['Cylinder', '3D', '$\\pi r^2 h$'],
            ['Cone', '3D', '$\\frac{1}{3}\\pi r^2 h$'],
            ['Cube', '3D', '$s^3$']
          ],
          tags: ['geometry', 'area', 'volume', 'formulas'],
          related: []
        },
        {
          id: 'vivianis-theorem',
          title: "Viviani's Theorem",
          type: 'concept',
          prose: 'The sum of distances from any interior point to the sides of an equilateral triangle equals the altitude.',
          person: 'Vincenzo Viviani',
          year: '1622–1703',
          tags: ['geometry', 'triangle', 'viviani', 'theorem'],
          related: []
        }
      ]
    },
    {
      id: 'special-functions-and-advanced-equations',
      title: 'Special Functions and Advanced Equations',
      topics: [
        {
          id: 'hyperbolic-functions',
          title: 'Hyperbolic Functions',
          type: 'multiFormula',
          formulas: [
            { label: 'sinh', tex: "\\sinh x = \\frac{e^x - e^{-x}}{2}" },
            { label: 'cosh', tex: "\\cosh x = \\frac{e^x + e^{-x}}{2}" },
            { label: 'tanh', tex: "\\tanh x = \\frac{\\sinh x}{\\cosh x}" },
            { label: 'Identity', tex: "\\cosh^2 x - \\sinh^2 x = 1" }
          ],
          prose: 'The hyperbolic functions are analogues of the trigonometric functions defined via the exponential function.',
          tags: ['hyperbolic', 'functions', 'exponential', 'identities'],
          related: []
        },
        {
          id: 'lagrange-multipliers',
          title: 'Lagrange Multipliers',
          type: 'formula',
          formula: "\\mathcal{L}(\\mathbf{x},\\boldsymbol{\\lambda}) = f - \\sum \\lambda_i g_i",
          prose: 'Optimise $f(\\mathbf{x})$ subject to $g_i(\\mathbf{x}) = 0$: build the Lagrangian $\\mathcal{L}(\\mathbf{x},\\boldsymbol{\\lambda}) = f - \\sum \\lambda_i g_i$ and solve $\\nabla\\mathcal{L} = 0$.',
          person: 'Joseph-Louis Lagrange',
          tags: ['optimization', 'lagrange', 'constraints', 'multivariable'],
          related: []
        },
        {
          id: 'wallis-product',
          title: "Walli's Product",
          type: 'formula',
          formula: "\\frac{\\pi}{2} = \\prod_{n=1}^{\\infty} \\frac{(2n)^2}{(2n-1)(2n+1)} = \\frac{2}{1}\\cdot\\frac{2}{3}\\cdot\\frac{4}{3}\\cdot\\frac{4}{5}\\cdots",
          prose: 'An infinite product representation of $\\pi/2$ discovered through interpolation of integrals.',
          tags: ['pi', 'infinite product', 'analysis', 'wallis'],
          related: []
        },
        {
          id: 'dirac-delta-function',
          title: 'Dirac Delta Function',
          type: 'multiFormula',
          formulas: [
            { label: 'Definition', tex: "\\delta(x) = \\begin{cases}\\infty & x=0 \\\\ 0 & x\\neq 0\\end{cases}" },
            { label: 'Sifting property', tex: "\\int_{-\\infty}^{\\infty} f(x)\\,\\delta(x-a)\\,dx = f(a)" }
          ],
          prose: 'The sifting property makes it fundamental in signal processing and quantum mechanics.',
          tags: ['dirac delta', 'distribution', 'sifting', 'signal processing'],
          related: []
        },
        {
          id: 'nicomachuss-theorem',
          title: "Nicomachus's Theorem",
          type: 'formula',
          formula: "1^3 + 2^3 + \\cdots + n^3 = \\left(\\sum_{k=1}^n k\\right)^2 = \\frac{n^2(n+1)^2}{4}",
          prose: 'The sum of the cubes of the first $n$ natural numbers equals the square of their sum.',
          tags: ['number theory', 'cubes', 'sums', 'identity'],
          related: []
        },
        {
          id: 'a-simple-proof-that-sqrt2-is-irrational',
          title: 'A Simple Proof that sqrt(2) is Irrational',
          type: 'proof',
          prose: 'A classic proof by contradiction, discovered by the Pythagoreans in the 5th century BC.',
          steps: [
            'Assume $\\sqrt{2} = p/q$ in lowest terms.',
            'Then $2q^2 = p^2$, so $p^2$ is even, which means $p$ is even.',
            'Write $p = 2k$, giving $q^2 = 2k^2$, so $q$ is also even.',
            'But $p$ and $q$ both even contradicts the assumption that $p/q$ was in lowest terms.'
          ],
          person: 'The Pythagoreans',
          year: '5th century BC',
          tags: ['number theory', 'proof', 'irrational', 'contradiction'],
          related: []
        },
        {
          id: 'pi-is-everywhere',
          title: 'Pi is Everywhere',
          type: 'multiFormula',
          formulas: [
            { label: 'Einstein field equations', tex: "G_{\\mu\\nu} + g_{\\mu\\nu}\\Lambda = \\frac{8\\pi G}{c^4} T_{\\mu\\nu}" },
            { label: 'Heisenberg uncertainty', tex: "\\Delta x\\,\\Delta p \\geq \\frac{h}{4\\pi}" },
            { label: "Coulomb's law", tex: "F = \\frac{1}{4\\pi\\epsilon_0}\\frac{q_1 q_2}{r^2}" },
            { label: 'Pendulum period', tex: "T_0 = 2\\pi\\sqrt{\\frac{\\ell}{g}}" }
          ],
          prose: '$\\pi$ appears in electrostatics, quantum mechanics, general relativity, and pendulum motion.',
          tags: ['pi', 'physics', 'constants', 'equations'],
          related: []
        }
      ]
    }
  ]
}
