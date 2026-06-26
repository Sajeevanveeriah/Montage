export const engineering = {
  id: 'engineering',
  title: 'Engineering',
  emoji: '⚡',
  color: 'var(--color-eng)',
  description: 'Circuit theory, electronics, power systems, RF, control, mechanical & automation',
  topicCount: 51,
  sections: [
    {
      id: 'electronic-fundamentals',
      title: 'Electronic Fundamentals',
      topics: [
        {
          id: 'voltage-and-current',
          title: 'Voltage and Current',
          type: 'multiFormula',
          formulas: [
            { label: 'Current', tex: 'I = Q/t' },
            { label: "Ohm's Law", tex: 'V = IR' },
            { label: 'Power', tex: 'P = IV = I^2R = V^2/R' }
          ],
          prose: 'Voltage (V): Electrical pressure; difference in electric potential. Units: Volts (V). Current (I): Flow of electric charge. Units: Amperes (A), $I = Q/t$. Resistance (R): Opposition to current flow, Ohm\'s Law $V = IR$. Power: $P = IV = I^2R = V^2/R$. Units: Watts (W).',
          tags: ['voltage', 'current', 'ohms-law', 'power', 'resistance'],
          related: []
        },
        {
          id: 'mosfets-transistors-and-igbts',
          title: 'MOSFETs, Transistors and IGBTs',
          type: 'concept',
          prose: 'Transistor (NPN/PNP): Small control current at base controls large collector-emitter current. Amplification or switching. MOSFET: Voltage-controlled; gate voltage controls drain-source current. Very low input current; used in high-speed switching, IC design. IGBT: Combines high input impedance of MOSFET with low saturation voltage of BJT. Controls large voltages and high frequencies. Used in motor drives, inverters, power supplies.',
          tags: ['mosfet', 'transistor', 'igbt', 'bjt', 'switching'],
          related: []
        },
        {
          id: 'npn-vs-pnp-sparked-diagram',
          title: 'NPN vs PNP (SparkED Diagram)',
          type: 'concept',
          prose: 'NPN: Load connected to +24V; output switches 0V (low). Common in Asian PLCs. PNP: Load connected to 0V/GND; output switches +24V (high). Common in European PLCs.',
          tags: ['npn', 'pnp', 'plc', 'transistor'],
          related: []
        },
        {
          id: 'sinking-and-sourcing',
          title: 'Sinking and Sourcing',
          type: 'concept',
          prose: 'Sinking (NPN): Output provides a path to ground (current flows into output). Sourcing (PNP): Output provides +V to load (current flows out of output).',
          tags: ['sinking', 'sourcing', 'npn', 'pnp', 'io'],
          related: []
        },
        {
          id: 'diode-and-zener-diode',
          title: 'Diode and Zener Diode',
          type: 'concept',
          prose: 'Diode: allows current in one direction only ($V_f \\approx 0.7$V silicon). Zener: operates in reverse breakdown at a defined voltage; used for voltage regulation.',
          tags: ['diode', 'zener', 'voltage-regulation', 'semiconductor'],
          related: []
        },
        {
          id: 'sziklai-darlington-transistor',
          title: 'Sziklai Darlington Transistor',
          type: 'concept',
          prose: 'A complementary Darlington pair (NPN + PNP) providing very high current gain $h_{FE1} \\times h_{FE2}$ with only one $V_{BE}$ drop. Common in audio amplifiers and power drivers.',
          tags: ['sziklai', 'darlington', 'transistor', 'amplifier', 'gain'],
          related: []
        }
      ]
    },
    {
      id: 'circuit-analysis',
      title: 'Circuit Analysis',
      topics: [
        {
          id: 'rlc-series-circuit',
          title: 'RLC Series Circuit',
          type: 'multiFormula',
          formulas: [
            { label: 'Resonant frequency', tex: '\\omega_0 = \\frac{1}{\\sqrt{LC}}' },
            { label: 'Impedance', tex: 'Z = \\sqrt{R^2 + (X_L - X_C)^2}' },
            { label: 'Phase angle', tex: '\\phi = \\arctan\\!\\left(\\frac{X_L - X_C}{R}\\right)' }
          ],
          prose: 'Series resonance condition: $Z_R = R$, $X_L = X_C \\Rightarrow \\omega_0 = 1/\\sqrt{LC}$. Impedance $Z = \\sqrt{R^2 + (X_L - X_C)^2}$. Phase angle $\\phi = \\arctan\\!\\left(\\frac{X_L - X_C}{R}\\right)$.',
          tags: ['rlc', 'resonance', 'impedance', 'phase', 'ac-circuit'],
          related: ['physics/navier-stokes-equations']
        },
        {
          id: 'capacitive-reactance',
          title: 'Capacitive Reactance',
          type: 'formula',
          formula: 'X_C = \\frac{1}{\\omega C} = \\frac{1}{2\\pi f C}',
          prose: 'Opposes AC current; decreases with frequency.',
          tags: ['capacitor', 'reactance', 'impedance', 'ac'],
          related: []
        },
        {
          id: 'inductive-reactance',
          title: 'Inductive Reactance',
          type: 'formula',
          formula: 'X_L = \\omega L = 2\\pi f L',
          prose: 'Opposes change in current; increases with frequency.',
          tags: ['inductor', 'reactance', 'impedance', 'ac'],
          related: []
        },
        {
          id: 'oscillator-circuit',
          title: 'Oscillator Circuit',
          type: 'formula',
          formula: '\\omega_d = \\sqrt{\\omega_0^2 - (R/2L)^2}',
          prose: 'Governing equation: $q\'\' + (R/L)q\' + q/LC = 0$. Underdamped: $\\omega_d = \\sqrt{\\omega_0^2 - (R/2L)^2}$.',
          tags: ['oscillator', 'damping', 'resonance', 'rlc'],
          related: []
        },
        {
          id: 'rc-circuit-transient-response',
          title: 'RC Circuit (Transient Response)',
          type: 'formula',
          formula: 'v(t) = V - Ve^{-t/RC} = V(1 - e^{-t/\\tau}), \\quad \\tau = RC',
          prose: 'Charging response of an RC circuit with time constant $\\tau = RC$.',
          tags: ['rc-circuit', 'transient', 'time-constant', 'capacitor'],
          related: []
        },
        {
          id: 'opamp-basic-applications',
          title: 'OPAMP Basic Applications',
          type: 'table',
          prose: 'Common operational amplifier configurations and their transfer functions.',
          tableHeaders: ['Circuit', 'Formula', 'Use'],
          tableRows: [
            ['Inverting', '$V_{out}=-\\frac{R_f}{R_1}V_{in}$', 'Signal inversion & gain'],
            ['Non-inverting', '$V_{out}=\\left(1 + \\frac{R_f}{R_1}\\right)V_{in}$', 'Gain without inversion'],
            ['Voltage follower', '$V_{out}=V_{in}$', 'Buffer; high impedance in, low out'],
            ['Summing', '$V_{out}=-R_f\\!\\left(\\frac{V_1}{R_1}+\\frac{V_2}{R_2}+\\cdots\\right)$', 'Add multiple signals'],
            ['Difference', '$V_{out}=\\frac{R_2}{R_1}(V_2 - V_1)$', 'Subtract / differential amplification']
          ],
          tags: ['opamp', 'amplifier', 'analog', 'gain'],
          related: []
        },
        {
          id: '4th-order-butterworth-filter',
          title: '4th-Order Butterworth Filter',
          type: 'formula',
          formula: '|H(j\\omega)|^2 = \\frac{1}{1+(\\omega/\\omega_c)^{2n}}',
          prose: 'Maximally flat magnitude response in the passband. Rolloff: $-80$ dB/decade (4th order). Butterworth condition: $|H(j\\omega)|^2 = \\frac{1}{1+(\\omega/\\omega_c)^{2n}}$.',
          tags: ['butterworth', 'filter', 'frequency-response', 'passband'],
          related: []
        },
        {
          id: 'filter-types-and-frequency-response',
          title: 'Filter Types and Frequency Response',
          type: 'list',
          prose: 'The four fundamental filter responses classified by which frequencies they pass.',
          items: [
            'Low-pass: passes below cutoff',
            'High-pass: passes above cutoff',
            'Band-pass: passes a band',
            'Band-stop (notch): rejects a band'
          ],
          tags: ['filter', 'low-pass', 'high-pass', 'band-pass', 'notch'],
          related: []
        },
        {
          id: 'the-fastest-opamp-el5165',
          title: 'The Fastest OPAMP (EL5165)',
          type: 'concept',
          prose: 'Ultra-high speed: slew rate $\\sim 1500$ V/$\\mu$s, GBW $\\sim 1.2$ GHz. Used in high-speed DAC buffers, video, and communications.',
          tags: ['opamp', 'el5165', 'slew-rate', 'high-speed', 'bandwidth'],
          related: []
        }
      ]
    },
    {
      id: 'power-systems',
      title: 'Power Systems',
      topics: [
        {
          id: 'transformers-why-rated-in-kva-not-kw',
          title: 'Transformers: Why Rated in kVA, Not kW?',
          type: 'concept',
          prose: 'Transformer losses are resistive ($I^2R$) and core (eddy current/hysteresis) --- neither depends on load power factor. Apparent power $S = V \\times I$ (kVA) determines current (and thus heat and loss), regardless of whether the load is resistive, inductive, or capacitive. Therefore transformers are rated in kVA.',
          tags: ['transformer', 'kva', 'apparent-power', 'losses', 'power-factor'],
          related: []
        },
        {
          id: '3-phase-power-calculation',
          title: '3-Phase Power Calculation',
          type: 'multiFormula',
          formulas: [
            { label: 'Real power (kW)', tex: 'kW = \\sqrt{3} \\times kV \\times kA \\times \\text{PF}' },
            { label: 'Reactive power (kVAR)', tex: 'kVAR = \\sqrt{3} \\times kV \\times kA \\times \\sin\\phi' },
            { label: 'Apparent power (kVA)', tex: 'kVA = \\sqrt{3} \\times kV \\times kA' }
          ],
          prose: 'Three-phase power relationships for real, reactive, and apparent power.',
          tags: ['three-phase', 'power', 'kva', 'kvar', 'power-factor'],
          related: []
        },
        {
          id: 'main-parts-of-an-electrical-transformer',
          title: 'Main Parts of an Electrical Transformer',
          type: 'list',
          prose: 'The principal components of an oil-filled electrical transformer.',
          items: [
            'Conservator tank',
            'Breather',
            'Buchholz relay',
            'High-voltage bushing',
            'Low-voltage bushing',
            'Tap changer',
            'Iron core (silicon steel laminations)',
            'Primary winding',
            'Secondary winding',
            'Oil circulation pathway',
            'Radiator'
          ],
          tags: ['transformer', 'components', 'bushing', 'core', 'winding'],
          related: []
        },
        {
          id: 'breaker-sizing',
          title: 'Breaker Sizing',
          type: 'formula',
          formula: 'I_{breaker} \\geq 1.25 \\times I_{FLA}',
          prose: 'Rule of thumb: breaker rating $\\geq 125\\%$ of full-load current ($I_{FLA}$). For motors: use inverse-time circuit breaker.',
          tags: ['breaker', 'sizing', 'full-load-current', 'protection', 'motor'],
          related: []
        },
        {
          id: 'grounding-vs-earthing',
          title: 'Grounding vs Earthing',
          type: 'concept',
          prose: 'Grounding: connected to neutral conductor (current-carrying in normal operation). Protects equipment. Earthing: connected to earth (non-current-carrying). Protects humans. Earth connects exposed metal chassis to zero potential.',
          tags: ['grounding', 'earthing', 'neutral', 'safety', 'protection'],
          related: []
        },
        {
          id: 'ups-uninterruptible-power-supply',
          title: 'UPS (Uninterruptible Power Supply)',
          type: 'concept',
          prose: 'Components: Rectifier, Battery, Inverter, Static Transfer Switch, Bypass. Types: offline/standby, line-interactive, double-conversion (online). Provides uninterrupted power during outages.',
          tags: ['ups', 'battery', 'inverter', 'power-backup', 'rectifier'],
          related: []
        },
        {
          id: 'battery-backup-calculation',
          title: 'Battery Backup Calculation',
          type: 'formula',
          formula: '\\text{Backup time (h)} = \\frac{A_h \\times V}{\\text{Load (W)}}',
          prose: 'Backup time from battery capacity. Example: $225$ Ah, 12 V, 300 W total load: $225 \\times 12 / 300 = 9$ h.',
          tags: ['battery', 'backup', 'ups', 'capacity', 'calculation'],
          related: []
        }
      ]
    },
    {
      id: 'rf-and-communications',
      title: 'RF and Communications',
      topics: [
        {
          id: 'antenna-types',
          title: 'Antenna Types',
          type: 'table',
          prose: 'Common antenna types and their characteristics.',
          tableHeaders: ['Type', 'Frequency/Size', 'Pattern', 'Application'],
          tableRows: [
            ['Monopole', '$\\lambda/4$', 'Omnidirectional vertical', 'Mobile devices, AM radio'],
            ['Dipole', '$\\lambda/2$', 'Reference antenna (0 dBd)', 'TV, radio'],
            ['Yagi', 'Multi-element', 'Directional, high gain', 'TV reception, point-to-point'],
            ['Parabolic Reflector', 'Large dish', 'Very high gain', 'Satellite, radar'],
            ['Patch', 'PCB-integrated', 'Directional', 'GPS, Wi-Fi, mobile'],
            ['Horn', 'Waveguide-fed', 'Standard gain', 'Microwave']
          ],
          tags: ['antenna', 'rf', 'monopole', 'dipole', 'yagi'],
          related: []
        },
        {
          id: 'rf-connector-types',
          title: 'RF Connector Types',
          type: 'concept',
          prose: 'SMA (up to 18 GHz, screw, precision); BNC (0--4 GHz, bayonet lock, test equipment); N-type (rugged, up to 11 GHz, outdoor); TNC (threaded BNC); SMA: most common for microwave work. SMPM, SMPS for miniaturised applications.',
          tags: ['rf-connector', 'sma', 'bnc', 'n-type', 'tnc'],
          related: []
        },
        {
          id: 'digital-modulation-techniques',
          title: 'Digital Modulation Techniques',
          type: 'table',
          prose: 'Comparison of digital modulation schemes.',
          tableHeaders: ['Technique', 'How it works', 'Strength', 'Weakness'],
          tableRows: [
            ['FSK', 'Frequency-shift keying; frequency encodes data', 'Robust noise immunity', 'Lower spectral efficiency'],
            ['ASK', 'Amplitude-shift keying; amplitude varies', 'Simple implementation', 'Noise-prone'],
            ['PSK', 'Phase-shift keying (BPSK, QPSK, 8PSK)', 'Efficient bandwidth use', 'More complex receiver'],
            ['QAM', 'Combines amplitude and phase (64-QAM, 256-QAM)', 'High spectral efficiency', 'Sensitive to noise/distortion']
          ],
          tags: ['modulation', 'fsk', 'ask', 'psk', 'qam'],
          related: []
        }
      ]
    },
    {
      id: 'semiconductors-and-materials',
      title: 'Semiconductors and Materials',
      topics: [
        {
          id: 'from-sand-to-3nm-semiconductor-manufacturing',
          title: 'From Sand to 3nm (Semiconductor Manufacturing)',
          type: 'concept',
          prose: 'Silicon dioxide (sand) $\\to$ polysilicon purification $\\to$ Czochralski process (single-crystal boule) $\\to$ wafer slicing $\\to$ photolithography (UV/EUV) $\\to$ etching (wet/dry plasma) $\\to$ doping (ion implantation) $\\to$ deposition (CVD, PVD, ALD) $\\to$ CMP planarisation $\\to$ metallisation $\\to$ testing and dicing. 3nm node (TSMC/Samsung) = ~50 billion transistors per chip.',
          tags: ['semiconductor', 'fabrication', 'lithography', 'wafer', '3nm'],
          related: []
        },
        {
          id: 'key-chip-suppliers-for-apple-iphone-15',
          title: 'Key Chip Suppliers for Apple iPhone 15',
          type: 'concept',
          prose: 'Logic board: TSMC (A17 Pro), Qualcomm (5G modem), Skyworks/Qorvo (RF). Memory board: KIOXIA, SK Hynix. Radio frequency board: Qualcomm, Broadcom, QORVO, Skyworks.',
          tags: ['chip-suppliers', 'iphone', 'tsmc', 'qualcomm', 'supply-chain'],
          related: []
        },
        {
          id: 'rare-earth-elements-rees',
          title: 'Rare Earth Elements (REEs)',
          type: 'concept',
          prose: '17 elements (Sc, Y, 15 lanthanides). Used in: NdFeB magnets (motors, headphones), phosphors (LED, displays), catalysts. Critical for EV motors, wind turbines, and defence applications.',
          tags: ['rare-earth', 'magnets', 'lanthanides', 'materials', 'ev'],
          related: []
        }
      ]
    },
    {
      id: 'sensors-and-transducers',
      title: 'Sensors and Transducers',
      topics: [
        {
          id: 'hall-effect',
          title: 'Hall Effect',
          type: 'formula',
          formula: 'V_H = \\frac{I \\cdot B}{n \\cdot q \\cdot d}',
          prose: 'When a current-carrying conductor is placed in a magnetic field perpendicular to the current, charge carriers deflect, creating a voltage difference (Hall voltage). Used in current sensing, position detection, brushless DC motors.',
          tags: ['hall-effect', 'magnetic-field', 'sensor', 'voltage'],
          person: 'Edwin Hall',
          year: '1879',
          related: []
        },
        {
          id: 'piezoelectric-effect',
          title: 'Piezoelectric Effect',
          type: 'multiFormula',
          formulas: [
            { label: 'Polarisation', tex: 'P = d \\times T' },
            { label: 'Area-stress relation', tex: 'A_1 T_1 = A_2 T_2' },
            { label: 'Pressure relation', tex: 'P_1 < P_2' }
          ],
          prose: 'Certain materials (quartz, ceramics) produce electric charge when mechanically stressed, and deform when an electric field is applied. Used in microphones, sensors, actuators, ultrasound, gyroscopes.',
          tags: ['piezoelectric', 'quartz', 'transducer', 'actuator', 'sensor'],
          person: 'Pierre & Jacques Curie',
          related: []
        }
      ]
    },
    {
      id: 'mechanical-engineering',
      title: 'Mechanical Engineering',
      topics: [
        {
          id: 'types-of-valves',
          title: 'Types of Valves',
          type: 'table',
          prose: 'Valve selection depends on flow control (throttle vs isolate), pressure rating, fluid type, and actuation (manual/actuated).',
          tableHeaders: ['Type', 'Operation', 'Application'],
          tableRows: [
            ['Ball', 'Quarter-turn rotating bored ball', 'Fast on/off isolation'],
            ['Gate', 'Linear-rising gate wedge', 'Full open/close isolation'],
            ['Butterfly', 'Quarter-turn rotating disc', 'Large-diameter flow control'],
            ['Globe', 'Linear plug against seat', 'Throttling and regulation'],
            ['Check', 'One-way self-acting', 'Prevents backflow'],
            ['Plug', 'Quarter-turn tapered plug', 'Quick shut-off'],
            ['Needle', 'Fine-threaded tapered needle', 'Precise low-flow metering'],
            ['Diaphragm', 'Flexible membrane seals bore', 'Corrosive / hygienic fluids'],
            ['Pinch', 'Squeezes a flexible tube', 'Slurries and abrasives'],
            ['Piston', 'Linear piston against seat', 'Steam and isolation duty'],
            ['Safety/Relief', 'Spring-loaded pressure release', 'Overpressure protection']
          ],
          tags: ['valve', 'flow-control', 'fluid', 'piping', 'mechanical'],
          related: []
        },
        {
          id: 'spur-helical-and-bevel-gears',
          title: 'Spur, Helical and Bevel Gears',
          type: 'table',
          prose: 'Comparison of three common gear types by axis arrangement, noise, thrust, and use.',
          tableHeaders: ['Type', 'Axis', 'Noise', 'Thrust', 'Use'],
          tableRows: [
            ['Spur', 'Parallel', 'Loud at high speed', 'None (radial only)', 'Simple and cheap drives'],
            ['Helical', 'Parallel (angled teeth)', 'Smoother and quieter', 'Generates axial thrust', 'Higher-load transmission'],
            ['Bevel', 'Intersecting (usually 90°)', 'Moderate', 'Axial and radial', 'Change direction of drive shaft']
          ],
          tags: ['gears', 'spur', 'helical', 'bevel', 'mechanical'],
          related: []
        },
        {
          id: 'types-of-bearings',
          title: 'Types of Bearings',
          type: 'list',
          prose: 'Bearings reduce friction by substituting rolling contact for sliding.',
          items: [
            'Ball',
            'Roller',
            'Tapered roller',
            'Thrust',
            'Needle',
            'Self-aligning ball',
            'Cylindrical roller',
            'Angular contact'
          ],
          tags: ['bearing', 'friction', 'rolling', 'mechanical'],
          related: []
        },
        {
          id: 'pulleys-simple-machines',
          title: 'Pulleys (Simple Machines)',
          type: 'formula',
          formula: 'MA = \\frac{\\text{Load force}}{\\text{Effort force}}',
          prose: 'Fixed: Changes direction only; MA = 1. Movable: MA = 2; reduces effort required. Block and tackle: Multiple pulleys; MA = number of rope segments supporting load. Mechanical advantage $= \\frac{\\text{Load force}}{\\text{Effort force}}$.',
          tags: ['pulley', 'simple-machine', 'mechanical-advantage', 'block-and-tackle'],
          related: []
        },
        {
          id: 'types-of-failures-in-concrete-beams',
          title: 'Types of Failures in Concrete Beams',
          type: 'list',
          prose: 'Design to ensure ductile flexure failure rather than brittle shear failure.',
          items: [
            'Flexure failure (tension/compression)',
            'Shear failure',
            'Bond failure',
            'Bearing failure'
          ],
          tags: ['concrete', 'beam', 'failure', 'structural', 'civil'],
          related: []
        },
        {
          id: 'how-to-use-an-analogue-watch-as-a-compass',
          title: 'How to Use an Analogue Watch as a Compass',
          type: 'concept',
          prose: 'Northern hemisphere: point hour hand at sun; bisect angle between hour hand and 12 o\'clock marking --- that direction is south. Southern hemisphere: point 12 o\'clock at sun; bisect angle between 12 and hour hand --- that direction is north.',
          tags: ['navigation', 'compass', 'watch', 'survival'],
          related: []
        },
        {
          id: 'how-parachute-works',
          title: 'How Parachute Works',
          type: 'formula',
          formula: 'F_d = \\frac{1}{2}\\rho v^2 C_d A',
          prose: 'Air resistance (drag) $F_d = \\frac{1}{2}\\rho v^2 C_d A$. Large canopy area $A$ maximises drag. At terminal velocity, drag = weight.',
          tags: ['parachute', 'drag', 'terminal-velocity', 'aerodynamics'],
          related: []
        },
        {
          id: 'hydraulic-clutch-system',
          title: 'Hydraulic Clutch System',
          type: 'concept',
          prose: 'Master cylinder $\\to$ hydraulic line $\\to$ slave cylinder. Pedal pressure converts to hydraulic pressure; Pascal\'s law transmits force. Advantages: no mechanical stretch, self-adjusting.',
          tags: ['hydraulic', 'clutch', 'pascals-law', 'automotive'],
          related: []
        },
        {
          id: 'how-a-steam-engine-works',
          title: 'How a Steam Engine Works',
          type: 'list',
          prose: 'Combustion $\\to$ chemical $\\to$ heat $\\to$ mechanical energy. Powered the industrial revolution (18th--19th century).',
          items: [
            'Coal combustion heats water in boiler',
            'Steam created; steam pressure pushes piston',
            'Piston drives connecting rod and flywheel',
            'Combustion to chemical to heat to mechanical energy'
          ],
          tags: ['steam-engine', 'piston', 'boiler', 'thermodynamics', 'history'],
          related: []
        }
      ]
    },
    {
      id: 'industrial-and-automation',
      title: 'Industrial and Automation',
      topics: [
        {
          id: 'important-automation-tools',
          title: 'Important Automation Tools',
          type: 'list',
          prose: 'Core hardware and software tools used in industrial automation and control.',
          items: [
            'PLC: Programmable Logic Controller; executes ladder/FBD/ST programs for industrial control',
            'SCADA: Supervisory Control and Data Acquisition; monitors and controls distributed systems',
            'HMI: Human-Machine Interface; touchscreen visualisation of process',
            'DCS: Distributed Control System; large-scale continuous process control',
            'VFD: Variable Frequency Drive; controls motor speed',
            'Servo/Stepper controllers: precise motion control',
            'Industrial robots: 6-DOF arms, collaborative (cobot), SCARA, delta'
          ],
          tags: ['automation', 'plc', 'scada', 'hmi', 'dcs'],
          related: []
        },
        {
          id: 'the-mechanisms-that-move-robots',
          title: 'The Mechanisms That Move Robots',
          type: 'concept',
          prose: 'Linear actuators, ball screws, lead screws, rack and pinion, timing belts, harmonic drives, planetary gearboxes, servomotors, stepper motors, pneumatic cylinders, hydraulic cylinders. Joint types: revolute, prismatic, spherical.',
          tags: ['robotics', 'actuator', 'gearbox', 'servo', 'joints'],
          related: []
        },
        {
          id: 'the-modern-factory',
          title: 'The Modern Factory',
          type: 'concept',
          prose: 'Operational technology (OT): PLCs, SCADA, DCS, historians. Information technology (IT): ERP, MES, databases. IT/OT convergence enables Industry 4.0: IIoT sensors, cloud analytics, digital twins, AI-guided maintenance, robotics integration.',
          tags: ['industry-4.0', 'it-ot', 'iiot', 'digital-twin', 'manufacturing'],
          related: []
        },
        {
          id: 'robotic-process-automation-rpa-vs-intelligent-process-automation-ipa',
          title: 'Robotic Process Automation (RPA) vs Intelligent Process Automation (IPA)',
          type: 'concept',
          prose: 'RPA: Rule-based, repetitive, structured data; mimics human actions in software. IPA: RPA + AI (NLP, ML, computer vision); handles unstructured data and decisions.',
          tags: ['rpa', 'ipa', 'automation', 'ai', 'process'],
          related: []
        }
      ]
    },
    {
      id: 'power-electronics-and-drives',
      title: 'Power Electronics and Drives',
      topics: [
        {
          id: 'ac-vs-dc-current',
          title: 'AC vs DC Current',
          type: 'concept',
          prose: 'DC: Constant polarity; one-way current flow. Used in batteries, electronics, solar. AC: Alternating polarity; efficient long-distance transmission (transformable). Standard: 50 Hz (Australia/Europe), 60 Hz (USA).',
          tags: ['ac', 'dc', 'current', 'transmission', 'frequency'],
          related: []
        },
        {
          id: 'ohms-law',
          title: "Ohm's Law",
          type: 'formula',
          formula: 'V = IR',
          prose: '$V = IR$. For AC: replace $R$ with impedance $Z = R + jX$.',
          tags: ['ohms-law', 'voltage', 'current', 'resistance', 'impedance'],
          related: []
        },
        {
          id: 'wheatstone-bridge',
          title: 'Wheatstone Bridge',
          type: 'formula',
          formula: '\\frac{R_1}{R_2} = \\frac{R_3}{R_x} \\Rightarrow R_x = \\frac{R_3 R_2}{R_1}',
          prose: 'Used to measure unknown resistance with high accuracy. Balanced when galvanometer reads zero.',
          tags: ['wheatstone', 'bridge', 'resistance', 'measurement'],
          related: []
        },
        {
          id: 'lorentz-law-bernoullis-law-brewsters-law',
          title: "Lorentz Law, Bernoulli's Law, Brewster's Law",
          type: 'multiFormula',
          formulas: [
            { label: 'Lorentz force', tex: 'F = q(E + v\\times B)' },
            { label: 'Bernoulli (fluids)', tex: 'P + \\frac{1}{2}\\rho v^2 = \\text{const}' },
            { label: 'Brewster angle', tex: '\\tan\\theta_B = n_2/n_1' }
          ],
          prose: 'Lorentz: $F = q(E + v\\times B)$. Bernoulli (fluids): $P + \\frac{1}{2}\\rho v^2 = \\text{const}$. Brewster: $\\tan\\theta_B = n_2/n_1$; reflected light is fully polarised at Brewster\'s angle.',
          tags: ['lorentz', 'bernoulli', 'brewster', 'physics', 'laws'],
          related: []
        }
      ]
    },
    {
      id: 'networking-and-data-infrastructure',
      title: 'Networking and Data Infrastructure',
      topics: [
        {
          id: 'data-centre-rack-architecture',
          title: 'Data Centre Rack Architecture',
          type: 'concept',
          prose: 'Top of rack: Ethernet switches (10/25/100 GbE). Network: access, aggregation, core layers. Power: PDUs, UPS, CRAC cooling. Cable management: structured cabling, patch panels. Dense computing: $42 U$ racks, hot/cold aisle containment.',
          tags: ['data-centre', 'rack', 'networking', 'cooling', 'switches'],
          related: []
        },
        {
          id: 'vlan-configuration',
          title: 'VLAN Configuration',
          type: 'concept',
          prose: 'VLAN 10 (HR), VLAN 20 (Accounting), VLAN 30 (IT Dept). Each VLAN is an isolated broadcast domain. Trunk port carries multiple VLANs (802.1Q tagging). Advanced trunk port handles untagged native VLAN. Voice and Data Port Security: Port security limits MAC addresses per port; dynamic ARP inspection prevents spoofing.',
          tags: ['vlan', 'networking', 'trunk', 'port-security', '802.1q'],
          related: []
        },
        {
          id: 'nat-network-address-translation',
          title: 'NAT (Network Address Translation)',
          type: 'list',
          prose: 'Three modes of translating private addresses to public addresses.',
          items: [
            'Static NAT (1:1): One private IP maps to one public IP permanently',
            'Dynamic NAT (1:pool): One private IP maps to one of a pool of public IPs',
            'PAT (NAT Overload): Many private IPs share one public IP, differentiated by port'
          ],
          tags: ['nat', 'pat', 'networking', 'ip', 'translation'],
          related: []
        },
        {
          id: '7-core-layers-of-cloud-native-architecture',
          title: '7 Core Layers of Cloud-Native Architecture',
          type: 'list',
          prose: 'Kubernetes at orchestration layer; service mesh (Istio) at service layer; Prometheus/Grafana at observability.',
          items: [
            'Infrastructure',
            'Containerisation',
            'Orchestration',
            'Service',
            'Networking',
            'Observability',
            'CI/CD'
          ],
          tags: ['cloud-native', 'kubernetes', 'microservices', 'observability', 'ci-cd'],
          related: []
        }
      ]
    }
  ]
};
