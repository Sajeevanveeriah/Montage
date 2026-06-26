export const physics = {
  id: 'physics',
  title: 'Physics',
  emoji: '⚛',
  color: 'var(--color-physics)',
  description: 'Classical & quantum mechanics, relativity, electromagnetism, astrophysics, thermodynamics',
  topicCount: 74,
  sections: [
    {
      id: 'classical-mechanics',
      title: 'Classical Mechanics',
      topics: [
        {
          id: 'newtons-three-laws',
          title: "Newton's Three Laws",
          type: 'multiFormula',
          formulas: [
            { label: '1st (Inertia)', tex: "\\text{An object remains at rest or in uniform motion unless acted upon by an external force.}" },
            { label: '2nd (F = ma)', tex: "\\sum \\mathbf{F} = m\\mathbf{a}" },
            { label: '3rd (Action-Reaction)', tex: "\\mathbf{F}_{12} = -\\mathbf{F}_{21}" }
          ],
          prose: "1st (Inertia): An object remains at rest or in uniform motion unless acted upon by an external force. 2nd (F = ma): $\\sum \\mathbf{F} = m\\mathbf{a}$. Acceleration is directly proportional to net force and inversely proportional to mass. 3rd (Action-Reaction): For every action there is an equal and opposite reaction.",
          tags: ['mechanics', 'force', 'motion', 'newton'],
          person: 'Isaac Newton',
          related: []
        },
        {
          id: 'projectile-motion',
          title: 'Projectile Motion',
          type: 'multiFormula',
          formulas: [
            { label: 'Position', tex: "x(t) = v_0\\cos\\theta \\cdot t, \\quad y(t) = v_0\\sin\\theta \\cdot t - \\tfrac{1}{2}gt^2" },
            { label: 'Range', tex: "R = \\frac{v_0^2\\sin 2\\theta}{g}" },
            { label: 'Max height', tex: "H = \\frac{v_0^2\\sin^2\\theta}{2g}" },
            { label: 'Time of flight', tex: "T = \\frac{2v_0\\sin\\theta}{g}" }
          ],
          prose: "Position: $x(t) = v_0\\cos\\theta \\cdot t$, $y(t) = v_0\\sin\\theta \\cdot t - \\tfrac{1}{2}gt^2$. Range $R = \\frac{v_0^2\\sin 2\\theta}{g}$, max height $H = \\frac{v_0^2\\sin^2\\theta}{2g}$, time of flight $T = \\frac{2v_0\\sin\\theta}{g}$.",
          tags: ['mechanics', 'kinematics', 'motion', 'trajectory'],
          related: []
        },
        {
          id: 'keplers-laws-of-planetary-motion',
          title: "Kepler's Laws of Planetary Motion",
          type: 'multiFormula',
          formulas: [
            { label: '1st', tex: "\\text{Planets orbit the Sun in ellipses with the Sun at one focus.}" },
            { label: '2nd', tex: "\\text{Equal areas are swept in equal times.}" },
            { label: '3rd', tex: "T^2 = \\frac{4\\pi^2}{GM}a^3" }
          ],
          prose: "1st: Planets orbit the Sun in ellipses with the Sun at one focus. 2nd: Equal areas are swept in equal times. 3rd: $T^2 \\propto a^3$; specifically $T^2 = \\frac{4\\pi^2}{GM}a^3$.",
          tags: ['mechanics', 'orbit', 'planets', 'kepler', 'gravity'],
          person: 'Johannes Kepler',
          related: []
        },
        {
          id: 'derivation-of-keplers-third-law',
          title: "Derivation of Kepler's Third Law",
          type: 'proof',
          prose: "From gravitational force = centripetal force for circular orbit, with $v = \\frac{2\\pi r}{T}$, one obtains Kepler's Third Law for a circular orbit.",
          steps: [
            "Set gravitational force equal to centripetal force: $\\frac{GMm}{r^2} = \\frac{mv^2}{r}$.",
            "Substitute the orbital speed $v = \\frac{2\\pi r}{T}$.",
            "Simplify to obtain $T^2 = \\frac{4\\pi^2}{GM}r^3$."
          ],
          tags: ['mechanics', 'orbit', 'kepler', 'gravity', 'derivation'],
          person: 'Johannes Kepler',
          related: []
        },
        {
          id: 'gravitational-potential-well-and-frequency-hill',
          title: 'Gravitational Potential Well and Frequency Hill',
          type: 'formula',
          formula: "\\Delta f/f = gh/c^2",
          prose: "Objects with mass create wells in spacetime curvature. Gravitational frequency shift: $\\Delta f/f = gh/c^2$ (gravitational redshift/blueshift).",
          tags: ['gravity', 'relativity', 'redshift', 'spacetime'],
          related: []
        },
        {
          id: 'rotation-circular-motion-notes',
          title: 'Rotation (Circular Motion Notes)',
          type: 'concept',
          prose: "Trajectory, circular motion, angular velocity ($\\omega$), angular acceleration ($\\alpha$), centripetal and centrifugal force, torque ($\\tau = r \\times F$), moment of inertia $I$, angular momentum $L = I\\omega$.",
          tags: ['mechanics', 'rotation', 'angular-momentum', 'torque'],
          related: []
        },
        {
          id: 'lyapunov-stability-theory',
          title: 'Lyapunov Stability Theory',
          type: 'concept',
          prose: "For a system $\\dot{x} = f(x)$, a fixed point $x_0$ is Lyapunov stable if for every $\\varepsilon>0$ there exists $\\delta>0$ such that $\\|x(0)-x_0\\|<\\delta \\Rightarrow \\|x(t)-x_0\\|<\\varepsilon$ for all $t\\geq 0$. The condition $\\dot{V}(x(t)) \\leq 0$ for a Lyapunov function $V(x)$ ensures stability.",
          tags: ['dynamics', 'stability', 'mechanics', 'lyapunov'],
          person: 'Aleksandr Lyapunov',
          related: []
        },
        {
          id: 'gas-laws',
          title: 'Gas Laws',
          type: 'multiFormula',
          formulas: [
            { label: "Boyle's", tex: "P_1V_1 = P_2V_2 \\quad (\\text{constant } T)" },
            { label: "Charles's", tex: "\\frac{V_1}{T_1} = \\frac{V_2}{T_2} \\quad (\\text{constant } P)" },
            { label: "Gay-Lussac's", tex: "\\frac{P_1}{T_1} = \\frac{P_2}{T_2} \\quad (\\text{constant } V)" },
            { label: "Avogadro's", tex: "\\frac{V_1}{n_1} = \\frac{V_2}{n_2} \\quad (\\text{constant } T, P)" },
            { label: 'Ideal gas', tex: "PV = nRT" }
          ],
          prose: "Boyle's: $P_1V_1 = P_2V_2$ (constant $T$). Charles's: $\\frac{V_1}{T_1} = \\frac{V_2}{T_2}$ (constant $P$). Gay-Lussac's: $\\frac{P_1}{T_1} = \\frac{P_2}{T_2}$ (constant $V$). Avogadro's: $\\frac{V_1}{n_1} = \\frac{V_2}{n_2}$ (constant $T$, $P$). Ideal gas: $PV = nRT$.",
          tags: ['thermodynamics', 'gas', 'pressure', 'temperature'],
          related: []
        },
        {
          id: 'impulse-momentum-theorem',
          title: 'Impulse-Momentum Theorem',
          type: 'formula',
          formula: "\\mathbf{J} = F_\\text{avg}\\,\\Delta t = \\Delta p = m\\,\\Delta\\mathbf{v}",
          prose: "Impulse equals the change in momentum: $\\mathbf{J} = F_\\text{avg}\\,\\Delta t = \\Delta p = m\\,\\Delta\\mathbf{v}$.",
          tags: ['mechanics', 'momentum', 'impulse', 'force'],
          related: []
        },
        {
          id: 'torque-in-physics',
          title: 'Torque in Physics',
          type: 'formula',
          formula: "\\tau = r \\times F = rF\\sin\\theta",
          prose: "$\\tau = r \\times F = rF\\sin\\theta$. Net torque causes angular acceleration: $\\tau_\\text{net} = I\\alpha$.",
          tags: ['mechanics', 'torque', 'rotation', 'angular-acceleration'],
          related: []
        }
      ]
    },
    {
      id: 'thermodynamics',
      title: 'Thermodynamics',
      topics: [
        {
          id: 'laws-of-thermodynamics',
          title: 'Laws of Thermodynamics',
          type: 'multiFormula',
          formulas: [
            { label: '0th', tex: "\\text{Thermal equilibrium is transitive.}" },
            { label: '1st', tex: "\\Delta U = Q - W" },
            { label: '2nd', tex: "dS \\geq 0" },
            { label: '3rd', tex: "S \\to \\text{const (zero) as } T \\to 0" }
          ],
          prose: "0th: Thermal equilibrium is transitive. 1st: $\\Delta U = Q - W$ (energy conservation). 2nd: Entropy of an isolated system never decreases: $dS \\geq 0$. 3rd: Entropy approaches a constant (zero) as $T \\to 0$.",
          tags: ['thermodynamics', 'entropy', 'energy', 'laws'],
          related: []
        },
        {
          id: 'gibbs-free-energy',
          title: 'Gibbs Free Energy',
          type: 'formula',
          formula: "\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ",
          prose: "$\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ$. $\\Delta G < 0$: spontaneous reaction. $\\Delta G > 0$: non-spontaneous. $\\Delta G = 0$: equilibrium.",
          tags: ['thermodynamics', 'energy', 'entropy', 'spontaneity'],
          person: 'Josiah Willard Gibbs',
          related: []
        },
        {
          id: 'carnot-cycle',
          title: 'Carnot Cycle',
          type: 'formula',
          formula: "\\eta = 1 - T_C/T_H",
          prose: "Isothermal expansion, adiabatic expansion, isothermal compression, adiabatic compression. Efficiency $\\eta = 1 - T_C/T_H$. Maximum possible efficiency for any heat engine between two temperatures.",
          tags: ['thermodynamics', 'heat-engine', 'efficiency', 'carnot'],
          person: 'Sadi Carnot',
          related: []
        },
        {
          id: 'heat-equation',
          title: 'Heat Equation',
          type: 'formula',
          formula: "\\Delta T = \\frac{\\rho c}{\\lambda}\\frac{\\partial T}{\\partial t}",
          prose: "$\\Delta T$=change, $\\rho$=density, $c$=specific heat, $\\lambda$=thermal conductivity.",
          tags: ['thermodynamics', 'heat', 'conduction', 'pde'],
          related: []
        },
        {
          id: 'clausius-clapeyron-equation',
          title: 'Clausius-Clapeyron Equation',
          type: 'formula',
          formula: "\\frac{dP}{dT} = \\frac{L}{T\\,\\Delta V}",
          prose: "Describes the pressure-temperature relationship at phase boundaries (solid/liquid, liquid/gas).",
          tags: ['thermodynamics', 'phase-transition', 'pressure', 'temperature'],
          person: 'Rudolf Clausius',
          related: []
        },
        {
          id: 'fouriers-law-of-thermal-conduction',
          title: "Fourier's Law of Thermal Conduction",
          type: 'formula',
          formula: "q = -k\\,\\nabla T",
          prose: "Heat flows in the direction of decreasing temperature. $k$ = thermal conductivity.",
          tags: ['thermodynamics', 'heat', 'conduction', 'fourier'],
          person: 'Joseph Fourier',
          related: []
        },
        {
          id: 'prandtl-number',
          title: 'Prandtl Number',
          type: 'formula',
          formula: "\\text{Pr} = \\frac{\\nu}{\\alpha} = \\frac{\\mu/\\rho}{k/\\rho c_p} = \\frac{\\mu c_p}{k}",
          prose: "Ratio of momentum diffusivity to thermal diffusivity.",
          tags: ['thermodynamics', 'fluids', 'dimensionless', 'diffusivity'],
          person: 'Ludwig Prandtl',
          related: []
        }
      ]
    },
    {
      id: 'electromagnetism',
      title: 'Electromagnetism',
      topics: [
        {
          id: 'maxwells-equations-differential-form',
          title: "Maxwell's Equations (Differential Form)",
          type: 'multiFormula',
          formulas: [
            { label: 'Gauss (E)', tex: "\\nabla\\cdot\\mathbf{E} = \\frac{\\rho}{\\varepsilon_0}" },
            { label: 'Gauss (B)', tex: "\\nabla\\cdot\\mathbf{B} = 0" },
            { label: 'Faraday', tex: "\\nabla\\times\\mathbf{E} = -\\frac{\\partial\\mathbf{B}}{\\partial t}" },
            { label: 'Ampère–Maxwell', tex: "\\nabla\\times\\mathbf{B} = \\mu_0\\mathbf{J} + \\mu_0\\varepsilon_0\\frac{\\partial\\mathbf{E}}{\\partial t}" }
          ],
          prose: "The four Maxwell equations in differential form describe how electric and magnetic fields are generated by charges, currents, and changes in the fields.",
          tags: ['electromagnetism', 'maxwell', 'fields', 'electric', 'magnetic'],
          person: 'James Clerk Maxwell',
          related: []
        },
        {
          id: 'biot-savart-law',
          title: 'Biot-Savart Law',
          type: 'formula',
          formula: "d\\mathbf{B} = \\frac{\\mu_0 I\\,d\\mathbf{L}\\times\\hat{r}}{4\\pi r^2}",
          prose: "Magnetic field intensity at a point due to a current element. Jean-Baptiste Biot and Félix Savart.",
          tags: ['electromagnetism', 'magnetic-field', 'current', 'biot-savart'],
          person: 'Jean-Baptiste Biot and Félix Savart',
          related: []
        },
        {
          id: 'amperes-law',
          title: "Ampère's Law",
          type: 'formula',
          formula: "\\oint \\mathbf{B}\\cdot d\\mathbf{s} = \\mu_0 I_\\text{enc} + \\mu_0\\varepsilon_0\\frac{d\\Phi_E}{dt}",
          prose: "Relates the magnetic field around a closed loop to the current enclosed.",
          tags: ['electromagnetism', 'magnetic-field', 'current', 'ampere'],
          person: 'André-Marie Ampère',
          related: []
        },
        {
          id: 'faradays-law',
          title: "Faraday's Law",
          type: 'formula',
          formula: "\\mathcal{E} = -\\frac{d\\Phi_B}{dt}, \\quad \\Phi_B = \\int \\mathbf{B}\\cdot d\\mathbf{A}",
          prose: "The induced electromotive force equals the negative rate of change of magnetic flux through a loop.",
          tags: ['electromagnetism', 'induction', 'emf', 'faraday'],
          person: 'Michael Faraday',
          related: []
        },
        {
          id: 'magnetism-important-formulas',
          title: 'Magnetism Important Formulas',
          type: 'list',
          prose: "Key formulas for magnetic forces and fields in common configurations.",
          items: [
            "Force on moving charge: $F = qvB\\sin\\theta$",
            "Force on current-carrying conductor: $F = BIL\\sin\\theta$",
            "Magnetic field of long straight wire: $B = \\frac{\\mu_0 I}{2\\pi r}$",
            "Magnetic field at centre of circular wire: $B = \\frac{\\mu_0 I}{2R}$",
            "Magnetic field of solenoid: $B = \\mu_0 nI$",
            "Torque on current loop: $\\tau = NIAB\\sin\\theta$"
          ],
          tags: ['electromagnetism', 'magnetism', 'formulas', 'field'],
          related: []
        },
        {
          id: 'curies-law',
          title: "Curie's Law",
          type: 'formula',
          formula: "M = C\\frac{B}{T}",
          prose: "The magnetisation of a paramagnetic material is directly proportional to the applied magnetic field and inversely proportional to temperature. Pierre Curie.",
          tags: ['electromagnetism', 'magnetism', 'paramagnetism', 'curie'],
          person: 'Pierre Curie',
          related: []
        },
        {
          id: 'important-electricity-and-magnetism-formulas',
          title: 'Important Electricity and Magnetism Formulas',
          type: 'multiFormula',
          formulas: [
            { label: 'Electric force (Coulomb)', tex: "F = k\\frac{q_1 q_2}{r^2}" },
            { label: 'Electric field', tex: "E = F/q" },
            { label: 'Electric potential', tex: "V = kq/r" },
            { label: 'Capacitance', tex: "C = Q/V" },
            { label: 'Current', tex: "I = Q/t" },
            { label: 'Resistance', tex: "V = IR" },
            { label: 'Power', tex: "P = IV = I^2R = V^2/R" }
          ],
          prose: "Electric force (Coulomb): $F = k\\frac{q_1 q_2}{r^2}$; Electric field: $E = F/q$; Electric potential: $V = kq/r$; Capacitance: $C = Q/V$; Current: $I = Q/t$; Resistance: $V = IR$; Power: $P = IV = I^2R = V^2/R$.",
          tags: ['electromagnetism', 'electricity', 'formulas', 'circuits'],
          related: []
        }
      ]
    },
    {
      id: 'quantum-mechanics',
      title: 'Quantum Mechanics',
      topics: [
        {
          id: 'schrodinger-equation',
          title: 'Schrödinger Equation',
          type: 'multiFormula',
          formulas: [
            { label: 'Time-independent', tex: "\\hat{H}|\\psi\\rangle = E|\\psi\\rangle" },
            { label: 'Time-dependent', tex: "i\\hbar\\frac{\\partial}{\\partial t}|\\psi\\rangle = \\hat{H}|\\psi\\rangle" }
          ],
          prose: "Time-independent: $\\hat{H}|\\psi\\rangle = E|\\psi\\rangle$. Time-dependent: $i\\hbar\\frac{\\partial}{\\partial t}|\\psi(t)\\rangle = \\hat{H}|\\psi(t)\\rangle$. Describes how the quantum state of a system evolves. Erwin Schrödinger (1925).",
          tags: ['quantum', 'wavefunction', 'schrodinger', 'hamiltonian'],
          person: 'Erwin Schrödinger',
          year: 1925,
          related: []
        },
        {
          id: 'heisenberg-uncertainty-principle',
          title: 'Heisenberg Uncertainty Principle',
          type: 'formula',
          formula: "\\Delta x\\,\\Delta p \\geq \\frac{\\hbar}{2}",
          prose: "It is impossible to simultaneously determine the exact position and momentum of a particle. More precisely one is measured, the less precisely the other can be known. Werner Heisenberg (Nobel 1932).",
          tags: ['quantum', 'uncertainty', 'heisenberg', 'measurement'],
          person: 'Werner Heisenberg',
          year: 1932,
          related: []
        },
        {
          id: 'quantum-tunnelling',
          title: 'Quantum Tunnelling',
          type: 'formula',
          formula: "P \\propto e^{-2\\kappa L}, \\quad \\kappa = \\frac{\\sqrt{2m(V_0-E)}}{\\hbar}",
          prose: "A quantum particle has a nonzero probability of crossing an energy barrier even if it lacks the classical energy to do so. Probability: $P \\propto e^{-2\\kappa L}$ where $\\kappa = \\sqrt{2m(V_0-E)}/\\hbar$.",
          tags: ['quantum', 'tunnelling', 'barrier', 'probability'],
          related: []
        },
        {
          id: 'canonical-commutation-relation',
          title: 'Canonical Commutation Relation',
          type: 'formula',
          formula: "[\\hat{x},\\hat{p}] = i\\hbar",
          prose: "$\\hat{x}$ = position operator, $\\hat{p}$ = momentum operator. Foundation of quantum mechanics.",
          tags: ['quantum', 'commutator', 'operators', 'foundations'],
          related: []
        },
        {
          id: 'momentum-operator',
          title: 'Momentum Operator',
          type: 'formula',
          formula: "\\hat{p} = -i\\hbar\\nabla",
          prose: "The quantum-mechanical momentum operator in position representation.",
          tags: ['quantum', 'operators', 'momentum', 'gradient'],
          related: []
        },
        {
          id: 'unitary-transformation-heisenberg-and-schrodinger-pictures',
          title: 'Unitary Transformation (Heisenberg and Schrödinger Pictures)',
          type: 'formula',
          formula: "|\\psi\\rangle_H = e^{iHt}|\\psi\\rangle_S",
          prose: "The Heisenberg picture evolves operators; the Schrödinger picture evolves state vectors.",
          tags: ['quantum', 'unitary', 'heisenberg', 'schrodinger', 'pictures'],
          related: []
        },
        {
          id: 'dirac-equation-in-curved-spacetime',
          title: 'Dirac Equation in Curved Spacetime',
          type: 'formula',
          formula: "(i\\hbar\\gamma^\\mu\\nabla_\\mu - mc)\\psi = 0",
          prose: "P.A.M. Dirac (1902–1984). Combines quantum mechanics with special relativity; predicted antimatter.",
          tags: ['quantum', 'dirac', 'relativity', 'antimatter'],
          person: 'P.A.M. Dirac',
          year: '1902–1984',
          related: []
        },
        {
          id: 'dirac-matrix-quantum-electrodynamics',
          title: 'Dirac Matrix (Quantum Electrodynamics)',
          type: 'formula',
          formula: "\\{\\gamma^\\mu, \\gamma^\\nu\\} = 2g^{\\mu\\nu}I",
          prose: "The four gamma matrices satisfy the Clifford algebra anticommutation relation.",
          tags: ['quantum', 'dirac', 'gamma-matrices', 'qed', 'clifford'],
          person: 'P.A.M. Dirac',
          related: []
        },
        {
          id: 'dirac-delta-function',
          title: 'Dirac Delta Function',
          type: 'formula',
          formula: "\\int f(x)\\delta(x-a)\\,dx = f(a)",
          prose: "See Mathematics reference. The sifting property $\\int f(x)\\delta(x-a)\\,dx = f(a)$ is fundamental in QM.",
          tags: ['quantum', 'dirac', 'delta-function', 'sifting'],
          person: 'P.A.M. Dirac',
          related: []
        },
        {
          id: 'classical-atom-vs-quantum-atom',
          title: 'Classical Atom vs Quantum Atom',
          type: 'concept',
          prose: "Classical (Bohr): electrons move in fixed circular orbits. Quantum: electrons exist as probability clouds; cannot know exact position --- Heisenberg uncertainty applies. Orbitals are described by wavefunctions $\\psi$.",
          tags: ['quantum', 'atom', 'bohr', 'orbitals', 'wavefunction'],
          person: 'Niels Bohr',
          related: []
        }
      ]
    },
    {
      id: 'special-and-general-relativity',
      title: 'Special and General Relativity',
      topics: [
        {
          id: 'einsteins-field-equations',
          title: "Einstein's Field Equations",
          type: 'formula',
          formula: "R_{\\mu\\nu} - \\frac{1}{2}Rg_{\\mu\\nu} + \\Lambda g_{\\mu\\nu} = \\frac{8\\pi G}{c^4}T_{\\mu\\nu}",
          prose: "Mass and energy tell spacetime how to curve; curved spacetime tells matter how to move. Albert Einstein (1879–1955).",
          tags: ['relativity', 'gravity', 'spacetime', 'einstein', 'curvature'],
          person: 'Albert Einstein',
          year: '1879–1955',
          related: []
        },
        {
          id: 'lorentz-transformation',
          title: 'Lorentz Transformation',
          type: 'formula',
          formula: "\\begin{pmatrix}\\gamma & -\\beta\\gamma & 0 & 0\\\\-\\beta\\gamma & \\gamma & 0 & 0\\\\0 & 0 & 1 & 0\\\\0 & 0 & 0 & 1\\end{pmatrix}, \\quad \\gamma = \\frac{1}{\\sqrt{1-v^2/c^2}}",
          prose: "Transforms space and time coordinates between inertial frames in relative motion, with $\\gamma = \\frac{1}{\\sqrt{1-v^2/c^2}}$ and $\\beta = v/c$.",
          tags: ['relativity', 'lorentz', 'spacetime', 'transformation'],
          person: 'Hendrik Lorentz',
          related: []
        },
        {
          id: 'time-dilation',
          title: 'Time Dilation',
          type: 'formula',
          formula: "\\Delta t' = \\frac{\\Delta t}{\\sqrt{1-v^2/c^2}}",
          prose: "A moving clock ticks more slowly from the perspective of a stationary observer.",
          tags: ['relativity', 'time-dilation', 'spacetime', 'einstein'],
          person: 'Albert Einstein',
          related: []
        },
        {
          id: 'schwarzschild-metric',
          title: 'Schwarzschild Metric',
          type: 'formula',
          formula: "ds^2 = \\left(1-\\frac{2m}{r}\\right)dt^2 - \\left(1-\\frac{2m}{r}\\right)^{-1}dr^2 - r^2\\,d\\Omega^2",
          prose: "Karl Schwarzschild (1873–1916). First exact solution to Einstein's field equations. Describes spacetime around a spherical non-rotating mass; gives the Schwarzschild radius $r_s = 2GM/c^2$.",
          tags: ['relativity', 'black-hole', 'metric', 'schwarzschild'],
          person: 'Karl Schwarzschild',
          year: '1873–1916',
          related: []
        },
        {
          id: 'schwarzschild-radius-event-horizon-of-a-black-hole',
          title: 'Schwarzschild Radius (Event Horizon of a Black Hole)',
          type: 'formula',
          formula: "r_s = \\frac{2GM}{c^2}",
          prose: "At $r = r_s$, escape velocity equals $c$.",
          tags: ['relativity', 'black-hole', 'event-horizon', 'schwarzschild'],
          person: 'Karl Schwarzschild',
          related: []
        },
        {
          id: 'first-law-of-black-hole-mechanics',
          title: 'First Law of Black Hole Mechanics',
          type: 'formula',
          formula: "dE = \\frac{\\kappa}{8\\pi}dA + \\Omega\\,dJ + \\Phi\\,dQ",
          prose: "Analogous to the first law of thermodynamics.",
          tags: ['relativity', 'black-hole', 'thermodynamics', 'mechanics'],
          related: []
        },
        {
          id: 'hawking-radiation',
          title: 'Hawking Radiation',
          type: 'formula',
          formula: "T_H = \\frac{\\hbar c^3}{8\\pi G M k_B}",
          prose: "Black holes emit thermal radiation at temperature $T_H$ (Stephen Hawking, 1974). Negative energy particles fall in; positive energy particles escape.",
          tags: ['relativity', 'black-hole', 'hawking', 'radiation', 'quantum'],
          person: 'Stephen Hawking',
          year: 1974,
          related: []
        },
        {
          id: 'black-hole-entropy',
          title: 'Black Hole Entropy',
          type: 'formula',
          formula: "S = \\frac{c^3 k_B A}{4G\\hbar}",
          prose: "Entropy of a black hole is proportional to the area of its event horizon. Entropy increases as the black hole grows larger.",
          tags: ['relativity', 'black-hole', 'entropy', 'thermodynamics'],
          person: 'Jacob Bekenstein',
          related: []
        },
        {
          id: 'kerr-metric-rotating-black-hole',
          title: 'Kerr Metric (Rotating Black Hole)',
          type: 'concept',
          prose: "Describes spacetime around a rotating mass. Has an ergosphere outside the event horizon. Frame dragging --- spacetime itself rotates.",
          tags: ['relativity', 'black-hole', 'kerr', 'rotation', 'frame-dragging'],
          person: 'Roy Kerr',
          related: []
        },
        {
          id: 'rindler-horizon',
          title: 'Rindler Horizon',
          type: 'formula',
          formula: "\\ell = \\frac{c^2}{a}",
          prose: "An accelerating observer in flat spacetime perceives a horizon at distance $\\ell = c^2/a$ behind them.",
          tags: ['relativity', 'horizon', 'acceleration', 'rindler'],
          related: []
        },
        {
          id: 'lorentz-lorenz-equation',
          title: 'Lorentz-Lorenz Equation',
          type: 'formula',
          formula: "\\frac{n^2-1}{n^2+2} = \\frac{4\\pi}{3}N\\alpha_m",
          prose: "Relates the refractive index $n$ to molecular polarisability $\\alpha_m$ and molecular number density $N$.",
          tags: ['optics', 'refractive-index', 'polarisability', 'lorentz'],
          person: 'Hendrik Lorentz and Ludvig Lorenz',
          related: []
        }
      ]
    },
    {
      id: 'astrophysics-and-cosmology',
      title: 'Astrophysics and Cosmology',
      topics: [
        {
          id: 'hubbles-law',
          title: "Hubble's Law",
          type: 'formula',
          formula: "v = H_0 d",
          prose: "Edwin Hubble. Recessional velocity of galaxies is proportional to their distance. Implies an expanding universe. $H_0 \\approx 70\\,\\text{km/s/Mpc}$.",
          tags: ['cosmology', 'expansion', 'hubble', 'galaxies'],
          person: 'Edwin Hubble',
          related: []
        },
        {
          id: 'first-friedmann-equation',
          title: 'First Friedmann Equation',
          type: 'formula',
          formula: "\\left(\\frac{\\dot{a}}{a}\\right)^2 = \\frac{8\\pi G\\rho}{3} + \\frac{\\Lambda c^2}{3} - \\frac{kc^2}{a^2}",
          prose: "Governs the expansion of the universe. $a$=scale factor, $\\Lambda$=cosmological constant, $k$=curvature.",
          tags: ['cosmology', 'expansion', 'friedmann', 'scale-factor'],
          person: 'Alexander Friedmann',
          related: []
        },
        {
          id: 'satellite-orbits',
          title: 'Satellite Orbits',
          type: 'list',
          prose: "Common satellite orbit regimes and their altitudes. Orbital velocity: $v = \\sqrt{GM/r}$.",
          items: [
            "Polar (low Earth, $<1000$ km)",
            "ISS (400 km)",
            "GPS/navigation ($20000$ km)",
            "Geostationary ($35786$ km)",
            "Highly Elliptical"
          ],
          tags: ['astrophysics', 'orbits', 'satellites', 'space'],
          related: []
        },
        {
          id: 'how-gravitational-waves-work',
          title: 'How Gravitational Waves Work',
          type: 'concept',
          prose: "Two massive objects (e.g. merging black holes) produce ripples in spacetime propagating at $c$. Strain $h = \\Delta L / L$ detected by LIGO interferometers.",
          tags: ['astrophysics', 'gravitational-waves', 'ligo', 'spacetime'],
          related: []
        },
        {
          id: 'how-black-holes-bend-spacetime',
          title: 'How Black Holes Bend Spacetime',
          type: 'concept',
          prose: "Light follows geodesics in curved spacetime. Gravitational lensing: background objects appear distorted or multiply-imaged. Einstein ring when source, lens, and observer are aligned.",
          tags: ['astrophysics', 'black-hole', 'lensing', 'spacetime', 'geodesics'],
          related: []
        },
        {
          id: 'dark-energy-vs-dark-matter',
          title: 'Dark Energy vs Dark Matter',
          type: 'concept',
          prose: "Dark energy ($\\sim68\\%$ of universe): uniform, fills space, drives accelerating expansion. Dark matter ($\\sim27\\%$): clumps, holds galaxies together, detected through gravitational effects only.",
          tags: ['cosmology', 'dark-energy', 'dark-matter', 'universe'],
          related: []
        }
      ]
    },
    {
      id: 'fluid-mechanics',
      title: 'Fluid Mechanics',
      topics: [
        {
          id: 'navier-stokes-equations',
          title: 'Navier-Stokes Equations',
          type: 'multiFormula',
          formulas: [
            { label: 'Momentum', tex: "\\frac{\\partial\\mathbf{u}}{\\partial t} + (\\mathbf{u}\\cdot\\nabla)\\mathbf{u} = -\\frac{1}{\\rho}\\nabla p + \\nu\\nabla^2\\mathbf{u} + \\mathbf{g}" },
            { label: 'Incompressible', tex: "\\nabla\\cdot\\mathbf{u} = 0" }
          ],
          prose: "Describe the motion of viscous fluids. Whether smooth solutions always exist is one of the Millennium Prize Problems.",
          tags: ['fluids', 'navier-stokes', 'viscosity', 'flow'],
          related: ['engineering/rlc-series-circuit']
        },
        {
          id: 'reynolds-number',
          title: 'Reynolds Number',
          type: 'formula',
          formula: "Re = \\frac{\\rho u D_H}{\\mu}",
          prose: "$\\rho$=density, $u$=velocity, $D_H$=hydraulic diameter, $\\mu$=dynamic viscosity. $Re < 2300$: laminar; $Re > 4000$: turbulent.",
          tags: ['fluids', 'reynolds', 'turbulence', 'dimensionless'],
          person: 'Osborne Reynolds',
          related: []
        },
        {
          id: 'newtons-law-of-viscosity',
          title: "Newton's Law of Viscosity",
          type: 'formula',
          formula: "T = \\mu\\frac{du}{dy}",
          prose: "Shear stress $T$ (Pa) is proportional to the velocity gradient through dynamic viscosity $\\mu$.",
          tags: ['fluids', 'viscosity', 'shear-stress', 'newton'],
          person: 'Isaac Newton',
          related: []
        },
        {
          id: 'coanda-effect',
          title: 'Coandă Effect',
          type: 'formula',
          formula: "\\frac{\\partial P}{\\partial n} = \\frac{\\rho v^2}{R}",
          prose: "A fluid jet attaches to a nearby curved surface. Pressure differential: $\\partial P/\\partial n = \\rho v^2/R$. Responsible for airfoil lift augmentation.",
          tags: ['fluids', 'coanda', 'lift', 'aerodynamics'],
          person: 'Henri Coandă',
          related: []
        },
        {
          id: 'bernoullis-law',
          title: "Bernoulli's Law",
          type: 'formula',
          formula: "P + \\frac{1}{2}\\rho v^2 + \\rho gh = \\text{const}",
          prose: "$P + \\frac{1}{2}\\rho v^2 + \\rho gh = \\text{const}$ along a streamline (ideal, incompressible flow).",
          tags: ['fluids', 'bernoulli', 'pressure', 'flow'],
          person: 'Daniel Bernoulli',
          related: []
        },
        {
          id: 'coriolis-effect',
          title: 'Coriolis Effect',
          type: 'formula',
          formula: "\\mathbf{F}_\\text{Cor} = -2m(\\boldsymbol{\\omega}\\times\\mathbf{v})",
          prose: "Gaspard-Gustave de Coriolis (1792–1843). In the rotating frame of Earth, moving objects deflect: right in the Northern hemisphere, left in the Southern.",
          tags: ['fluids', 'coriolis', 'rotation', 'reference-frame'],
          person: 'Gaspard-Gustave de Coriolis',
          year: '1792–1843',
          related: []
        }
      ]
    },
    {
      id: 'optics-and-wave-physics',
      title: 'Optics and Wave Physics',
      topics: [
        {
          id: 'rayleigh-scattering',
          title: 'Rayleigh Scattering',
          type: 'formula',
          formula: "x = \\frac{2\\pi r}{\\lambda}",
          prose: "Size parameter. Scattering $\\propto \\lambda^{-4}$; short wavelengths scatter more. Explains why the sky is blue.",
          tags: ['optics', 'scattering', 'rayleigh', 'light'],
          person: 'Lord Rayleigh',
          related: []
        },
        {
          id: 'cherenkov-radiation',
          title: 'Cherenkov Radiation',
          type: 'formula',
          formula: "\\cos\\theta_c = \\frac{c}{nv} = \\frac{1}{n\\beta}",
          prose: "Emitted when a charged particle moves through a medium faster than the phase velocity of light in that medium ($v > c/n$). Characteristic blue glow in nuclear reactors.",
          tags: ['optics', 'cherenkov', 'radiation', 'light'],
          person: 'Pavel Cherenkov',
          related: []
        },
        {
          id: 'youngs-double-slit-experiment',
          title: "Young's Double-Slit Experiment",
          type: 'concept',
          prose: "Path difference $\\delta = d\\sin\\theta$. Constructive: $\\delta = m\\lambda$. Destructive: $\\delta = (m+\\frac{1}{2})\\lambda$. Demonstrates wave-particle duality.",
          tags: ['optics', 'interference', 'young', 'wave-particle'],
          person: 'Thomas Young',
          related: []
        },
        {
          id: 'de-broglie-wavelength-matter-waves',
          title: 'de Broglie Wavelength (Matter Waves)',
          type: 'formula',
          formula: "\\lambda = \\frac{h}{p} = \\frac{h}{mv}",
          prose: "Louis de Broglie (1929). Every particle has an associated wavelength. Basis of electron diffraction and electron microscopy.",
          tags: ['optics', 'de-broglie', 'matter-waves', 'quantum'],
          person: 'Louis de Broglie',
          year: 1929,
          related: ['mathematics/fourier-transform']
        }
      ]
    },
    {
      id: 'nuclear-and-particle-physics',
      title: 'Nuclear and Particle Physics',
      topics: [
        {
          id: 'important-nuclear-physics-formulas',
          title: 'Important Nuclear Physics Formulas',
          type: 'multiFormula',
          formulas: [
            { label: 'Mass-energy equivalence', tex: "E = mc^2" },
            { label: 'Q-value', tex: "Q = (m_i - m_f)c^2" },
            { label: 'Radioactive decay', tex: "N(t) = N_0 e^{-\\lambda t}" },
            { label: 'Half-life', tex: "t_{1/2} = \\ln 2/\\lambda" }
          ],
          prose: "$E = mc^2$ (mass-energy equivalence); $Q$-value of a nuclear reaction: $Q = (m_i - m_f)c^2$; radioactive decay: $N(t) = N_0 e^{-\\lambda t}$, half-life $t_{1/2} = \\ln 2/\\lambda$.",
          tags: ['nuclear', 'decay', 'energy', 'formulas'],
          related: []
        },
        {
          id: 'nuclear-fusion-vs-fission',
          title: 'Nuclear Fusion vs Fission',
          type: 'concept',
          prose: "Fusion: combines light nuclei into heavier ones, releasing energy; requires high temperature (Tokamak/reactor). Difficult to control. Fission: splits a heavy nucleus (e.g. $^{235}$U) into lighter ones; controlled in nuclear reactors. Produces radioactive waste.",
          tags: ['nuclear', 'fusion', 'fission', 'energy'],
          related: []
        },
        {
          id: 'gamow-factor',
          title: 'Gamow Factor',
          type: 'formula',
          formula: "P_G(E) = e^{-2\\pi\\eta}, \\quad \\eta = \\frac{Z_1 Z_2 e^2}{\\hbar v} = \\frac{\\alpha Z_1 Z_2}{\\sqrt{2E/m_r}}",
          prose: "Probability of quantum tunnelling through the Coulomb barrier in nuclear fusion. $Z_i$=atomic numbers, $v$=relative velocity.",
          tags: ['nuclear', 'gamow', 'tunnelling', 'fusion'],
          person: 'George Gamow',
          related: []
        },
        {
          id: 'sackur-tetrode-equation',
          title: 'Sackur-Tetrode Equation',
          type: 'formula',
          formula: "S = Nk_B\\left[\\ln\\!\\left(\\frac{V}{N\\lambda^3}\\right) + \\frac{5}{2}\\right], \\quad \\lambda = \\sqrt{\\frac{2\\pi\\hbar^2}{mk_BT}}",
          prose: "Entropy of an ideal monatomic gas, including quantum effects.",
          tags: ['nuclear', 'entropy', 'statistical-mechanics', 'gas'],
          related: []
        },
        {
          id: 'planck-time',
          title: 'Planck Time',
          type: 'formula',
          formula: "t_p = \\sqrt{\\frac{\\hbar G}{c^5}} \\approx 5.39\\times 10^{-44}\\,\\text{s}",
          prose: "The smallest meaningful unit of time; below this, the known laws of physics break down.",
          tags: ['nuclear', 'planck', 'time', 'fundamental'],
          person: 'Max Planck',
          related: []
        },
        {
          id: '10-mind-blowing-physics-discoveries',
          title: '10 Mind-Blowing Physics Discoveries',
          type: 'list',
          prose: "Ten of the most striking discoveries in modern physics.",
          items: [
            "Time dilation",
            "Quantum entanglement",
            "Gravity affects light",
            "Dark matter",
            "Expanding universe",
            "Matter = energy",
            "Wave-particle duality",
            "All falls at the same rate",
            "Quantum foam",
            "Double-slit experiment changes behaviour"
          ],
          tags: ['physics', 'discoveries', 'modern-physics', 'overview'],
          related: []
        }
      ]
    },
    {
      id: 'electrostatics-and-advanced-fields',
      title: 'Electrostatics and Advanced Fields',
      topics: [
        {
          id: 'electrostatic-potential',
          title: 'Electrostatic Potential',
          type: 'formula',
          formula: "V(\\mathbf{r}) = \\frac{1}{4\\pi\\varepsilon_0}\\int_{\\mathcal{R}} \\frac{\\rho(\\mathbf{r}')}{|\\mathbf{r}-\\mathbf{r}'|}\\,d^3r'",
          prose: "The electrostatic potential at point $\\mathbf{r}$ due to a continuous charge distribution $\\rho(\\mathbf{r}')$.",
          tags: ['electrostatics', 'potential', 'charge', 'fields'],
          related: []
        },
        {
          id: 'lagrangian-density-qed',
          title: 'Lagrangian Density (QED)',
          type: 'formula',
          formula: "\\mathcal{L} = \\bar\\psi(i\\hbar\\gamma^\\mu D_\\mu - mc)\\psi - \\frac{1}{4}F_{\\mu\\nu}F^{\\mu\\nu}",
          prose: "The Lagrangian density of quantum electrodynamics, describing the interaction of the Dirac field with the electromagnetic field.",
          tags: ['qed', 'lagrangian', 'field-theory', 'dirac'],
          related: []
        },
        {
          id: 'metric-line-element',
          title: 'Metric Line Element',
          type: 'formula',
          formula: "ds^2 = g_{\\mu\\nu}\\,dx^\\mu dx^\\nu",
          prose: "The metric tensor $g_{\\mu\\nu}$ encodes the geometry of spacetime.",
          tags: ['relativity', 'metric', 'spacetime', 'geometry'],
          related: []
        },
        {
          id: 'stress-energy-momentum-tensor',
          title: 'Stress-Energy-Momentum Tensor',
          type: 'formula',
          formula: "T_{\\alpha\\beta} = -\\frac{4\\pi}{\\sqrt{-g}}\\frac{\\partial S}{\\partial g^{\\alpha\\beta}}",
          prose: "The stress-energy-momentum tensor as the variation of the action with respect to the metric, sourcing the gravitational field.",
          tags: ['relativity', 'tensor', 'energy', 'field-theory'],
          related: []
        },
        {
          id: 'quantised-scalar-field-operator',
          title: 'Quantised Scalar Field Operator',
          type: 'formula',
          formula: "\\hat\\phi(x,t) = \\int\\frac{d^3k}{(2\\pi)^3}\\frac{1}{\\sqrt{2\\omega_k}}\\left[\\hat{a}_k e^{i(kx-\\omega_k t)} + \\hat{a}_k^\\dagger e^{-i(kx-\\omega_k t)}\\right]",
          prose: "The quantised scalar field expressed in terms of creation and annihilation operators.",
          tags: ['field-theory', 'quantum', 'scalar-field', 'operators'],
          related: []
        },
        {
          id: 'wiens-displacement-law',
          title: "Wien's Displacement Law",
          type: 'formula',
          formula: "\\lambda_\\text{max} \\cdot T = b = 2.898\\times10^{-3}\\,\\text{m\\,K}",
          prose: "Peak wavelength of blackbody radiation is inversely proportional to temperature.",
          tags: ['thermodynamics', 'blackbody', 'wien', 'radiation'],
          person: 'Wilhelm Wien',
          related: []
        },
        {
          id: 'maxwell-boltzmann-distribution',
          title: 'Maxwell-Boltzmann Distribution',
          type: 'formula',
          formula: "f(v) = 4\\pi\\left(\\frac{m}{2\\pi k_BT}\\right)^{3/2}v^2 e^{-mv^2/(2k_BT)}",
          prose: "Describes the statistical distribution of particle speeds in an ideal gas at thermal equilibrium.",
          tags: ['thermodynamics', 'statistical-mechanics', 'distribution', 'gas'],
          person: 'James Clerk Maxwell and Ludwig Boltzmann',
          related: []
        }
      ]
    }
  ]
};
