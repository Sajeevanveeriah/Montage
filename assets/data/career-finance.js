export const careerfinance = {
  id: 'career-finance',
  title: 'Career & Finance',
  emoji: '📈',
  color: 'var(--color-career)',
  description: 'Investing, communication, leadership, negotiation, social skills & life strategy',
  topicCount: 32,
  sections: [
    {
      id: 'personal-finance',
      title: 'Personal Finance',
      topics: [
        {
          id: 'my-ideal-budget-framework',
          title: 'My Ideal Budget Framework',
          type: 'table',
          prose: 'A 50/20/30 budget framework assuming an income of $3,000/month: 50% to Needs ($1,500), 20% to Wants ($500, adjustable), and 30% to Savings ($900). The power of consistency: if you invest $120/month at a 7% return, $120/mo grows to $63K (20 yr), $197K (30 yr), and $580K (40 yr).',
          tableHeaders: ['Category', 'Item', 'Amount ($/mo)', '%'],
          tableRows: [
            ['Needs', 'Rent', '800', '50%'],
            ['Needs', 'Groceries', '300', ''],
            ['Needs', 'Transport', '200', ''],
            ['Needs', 'Utilities', '100', ''],
            ['Needs', 'Insurance', '100', ''],
            ['Wants', 'Dining out', '150', '20%'],
            ['Wants', 'Entertainment', '100', ''],
            ['Wants', 'Clothing', '100', ''],
            ['Wants', 'Personal care', '50', ''],
            ['Wants', 'Subscriptions', '50', ''],
            ['Savings', 'Emergency fund', '200', '30%'],
            ['Savings', 'Retirement (super)', '300', ''],
            ['Savings', 'Investments', '300', ''],
            ['Savings', 'Goals', '100', '']
          ],
          tags: ['finance', 'budgeting', 'saving', 'investing'],
          related: []
        },
        {
          id: 'warren-buffetts-6-rules-for-money',
          title: "Warren Buffett's 6 Rules for Money",
          type: 'table',
          prose: "Warren Buffett's six guiding principles for managing and growing money.",
          tableHeaders: ['Rule', 'Description'],
          tableRows: [
            ["Don't Lose Capital", 'Never risk more than you can afford to lose.'],
            ['Invest in What You Understand', "“Never invest in a business you can't understand.”"],
            ['The Power of Compounding', 'Start early; even small amounts compound dramatically.'],
            ['Earn While You Sleep', 'Create passive income streams; assets that work for you.'],
            ['Be Greedy When Others Are Fearful', 'Buy during downturns; sell during euphoria.'],
            ['Learn Every Day', 'Read 500 pages a day; knowledge compounds like money.']
          ],
          person: 'Warren Buffett',
          tags: ['finance', 'investing', 'wealth', 'compounding'],
          related: []
        },
        {
          id: 'deep-clean-your-finances-in-a-month',
          title: 'Deep Clean Your Finances in a Month',
          type: 'list',
          prose: 'A four-week plan to overhaul your finances. The overriding rule: always pay yourself first (10–20% of income before any spending).',
          items: [
            'Week 1: Track every dollar spent; categorise all expenses.',
            'Week 2: Cancel unused subscriptions; renegotiate bills.',
            'Week 3: Set up automatic savings (pay yourself first).',
            'Week 4: Review and optimise investment allocations.'
          ],
          tags: ['finance', 'budgeting', 'saving', 'habits'],
          related: []
        }
      ]
    },
    {
      id: 'career-strategy',
      title: 'Career Strategy',
      topics: [
        {
          id: 'worst-career-mistakes-and-how-to-fix-them',
          title: 'Worst Career Mistakes (and How to Fix Them)',
          type: 'list',
          prose: 'The most damaging career mistakes and the corrective action for each.',
          items: [
            'Blind loyalty: Value skills over employer loyalty; skills travel with you.',
            'Self-doubt: Track wins; evidence fights imposter syndrome.',
            'Outdated skills: Dedicate 5 h/week to learning in your field.',
            'Risk aversion: Small bets with asymmetric upside; avoid staying still.',
            'Failure to negotiate: Always negotiate; even a 5% raise compounded over a career is massive.',
            'Burned bridges: Treat every exit well; industries are small.',
            'Weak branding: Your personal brand on LinkedIn/GitHub matters.',
            'Lack of goals: Write 1-year, 3-year, 5-year career goals; review quarterly.',
            'Health sacrifice: Performance collapses without physical/mental health.',
            'No backup: Emergency fund buys negotiating power; keeps you from desperation.'
          ],
          tags: ['career', 'mistakes', 'skills', 'strategy'],
          related: []
        },
        {
          id: 'send-a-follow-up-that-wins-the-job',
          title: 'Send a Follow-Up That Wins the Job',
          type: 'list',
          prose: 'A staged follow-up sequence after an interview. What to avoid: generic thank-you; following up too aggressively; mass-copy emails.',
          items: [
            'Same-day (thank you): “I appreciated our conversation. [Specific reference]. Looking forward to next steps.”',
            '48-hour (second touch): Reference a detail from the interview; add a value point.',
            '1-week (gentle nudge): Express continued interest; offer availability.'
          ],
          tags: ['career', 'interview', 'job search', 'communication'],
          related: []
        },
        {
          id: 'interview-winners-talk-like-this',
          title: 'Interview Winners Talk Like This',
          type: 'table',
          prose: 'Strong, concise answers to common interview questions.',
          tableHeaders: ['Question', 'How winners answer'],
          tableRows: [
            ['“Tell me about yourself”', '“I’m someone who enjoys learning, improving, and taking on challenges that help the group.”'],
            ['“What do you do when you know something?”', '“I do my research, find the answer, and then share instead of guessing.”'],
            ['“How do you stay productive?”', '“I focus on priorities, avoid unnecessary distractions, and stay consistent.”'],
            ['“What makes you a valuable team member?”', '“I communicate well, support others, and always do my part.”'],
            ['“How do you react when plans change?”', '“I adjust quickly; I think about what needs to be done next.”'],
            ['“What does success mean to you?”', '“Making progress, delivering results, and continuously improving.”'],
            ['“How do you handle responsibility?”', '“I take ownership of my work and make sure tasks are completed properly.”']
          ],
          tags: ['career', 'interview', 'communication', 'job search'],
          related: []
        },
        {
          id: 'questions-to-get-value-from-1-1s',
          title: 'Questions to Get Value from 1:1s',
          type: 'list',
          prose: 'Questions that turn a one-on-one into a source of real value.',
          items: [
            "What decision are you waiting on me that I haven't made yet?",
            'What would make me most valuable to the team?',
            'What do you worry about that I could help with?',
            'What feedback do you have that might be hard to share?',
            'What is one thing you wish I were doing differently?'
          ],
          tags: ['career', 'one-on-ones', 'feedback', 'management'],
          related: []
        },
        {
          id: '10-questions-to-get-value-from-your-1-1s',
          title: '10 Questions to Get Value From Your 1:1s',
          type: 'list',
          prose: 'Stop running status updates; start unlocking the work.',
          items: [
            'Are you working on what matters most?',
            'What decisions are you waiting on?',
            "What's working that we should do more of?",
            'What obstacles are slowing you down?',
            'How do you feel about your progress?',
            'What would help you most right now?',
            'Are there skills you want to develop?',
            "How's your energy/workload?",
            'What should I be doing differently?',
            'Anything else you want to discuss?'
          ],
          tags: ['career', 'one-on-ones', 'feedback', 'management'],
          related: []
        }
      ]
    },
    {
      id: 'leadership-and-influence',
      title: 'Leadership and Influence',
      topics: [
        {
          id: 'dale-carnegies-7-rules-for-charisma',
          title: "Dale Carnegie's 7 Rules for Charisma",
          type: 'list',
          prose: "Dale Carnegie's seven rules for becoming more charismatic and likeable.",
          items: [
            'Smile: genuine warmth, not performative.',
            'Be a good listener: listen intently with curiosity.',
            "Talk about what they're interested in.",
            'Make them feel important — and do it sincerely.',
            'Remember names: use them.',
            'Pause before speaking: thoughtful responses over reactive ones.',
            'Use humour appropriately: self-deprecating wit, not mockery.'
          ],
          person: 'Dale Carnegie',
          tags: ['leadership', 'charisma', 'communication', 'influence'],
          related: []
        },
        {
          id: 'elon-musks-6-rules-for-productivity',
          title: "Elon Musk's 6 Rules for Productivity",
          type: 'list',
          prose: "Elon Musk's six rules for staying productive and cutting through organisational drag.",
          items: [
            'Avoid large meetings: they waste time and dilute decision-making.',
            'Kill meetings that have no purpose.',
            "Leave if you're not contributing.",
            'Skip the chain of command: communicate directly.',
            'Clarity over cleverness: clear, concise communication wins.',
            'Common sense/Common rules: question rules that make no sense.'
          ],
          person: 'Elon Musk',
          tags: ['leadership', 'productivity', 'meetings', 'communication'],
          related: []
        },
        {
          id: 'the-48-laws-of-power-robert-greene-key-laws',
          title: 'The 48 Laws of Power (Robert Greene — Key Laws)',
          type: 'list',
          prose: "A selection of key laws from Robert Greene's The 48 Laws of Power.",
          items: [
            'Law 1: Never outshine the master.',
            'Law 3: Conceal your intentions.',
            'Law 6: Court attention at all costs.',
            'Law 9: Win through actions, never through argument.',
            'Law 15: Crush your enemy totally.',
            'Law 28: Enter action with boldness.',
            "Law 33: Discover each man's thumbscrew (exploit weakness).",
            'Law 34: Be royal in your own fashion.',
            'Law 38: Think as you like but behave like others.',
            "Law 48: Assume formlessness (be adaptable; don't commit to a fixed form)."
          ],
          person: 'Robert Greene',
          tags: ['leadership', 'power', 'influence', 'strategy'],
          related: []
        },
        {
          id: '12-phrases-great-leaders-say-often',
          title: '12 Phrases Great Leaders Say Often',
          type: 'list',
          prose: 'Twelve phrases that great leaders use to build trust, empower, and connect with their teams.',
          items: [
            '“I trust you.”',
            '“I believe in you.”',
            '“How can I support you?”',
            '“What do you think?”',
            '“I made a mistake.”',
            '“I’m proud of you.”',
            '“Thank you for your honesty.”',
            '“You are making a difference.”',
            '“Tell me more.”',
            '“What would you do?”',
            '“How can we improve this?”',
            '“I am proud of what we have accomplished.”'
          ],
          tags: ['leadership', 'communication', 'influence', 'management'],
          related: []
        }
      ]
    },
    {
      id: 'communication-and-social-skills',
      title: 'Communication and Social Skills',
      topics: [
        {
          id: 'public-speaking-secrets-from-steve-jobs',
          title: 'Public Speaking Secrets from Steve Jobs',
          type: 'list',
          prose: "Public speaking lessons drawn from Steve Jobs' legendary presentations.",
          items: [
            'Tell a story first: hook the audience with a narrative.',
            'Create the “Holy Sh*t” moment: one memorable big reveal.',
            "Show Passion: if you're not excited, why would they be?",
            'Use the Rule of Three: group ideas in threes.',
            'Power Pause: silence is a tool; it commands attention.',
            'Bring the Hero: make the audience (or customer) the protagonist.',
            'Keep it Visually Simple: one idea per slide maximum.',
            "Use a One-Sentence Summary: if you can't summarise it simply, you don't understand it well enough.",
            'Rehearse: Steve Jobs rehearsed for days; it looked effortless.',
            'Describe your product with one adjective: “1,000 songs in your pocket.”'
          ],
          person: 'Steve Jobs',
          tags: ['communication', 'public speaking', 'presentation', 'storytelling'],
          related: []
        },
        {
          id: 'social-rules-that-instantly-make-people-respect-you',
          title: 'Social Rules That Instantly Make People Respect You',
          type: 'list',
          prose: 'Social rules that command respect through presence, integrity, and genuine engagement.',
          items: [
            "Silence and Presence: Let silences breathe; don't fill every gap.",
            'Respect and Integrity: Keep your word, always.',
            'Engagement and Kindness: Remember what people tell you; follow up.',
            'Control your reactions; never lose composure publicly.',
            'Speak with purpose, not to fill space.',
            'Make others feel heard, not talked at.'
          ],
          tags: ['communication', 'social skills', 'respect', 'presence'],
          related: []
        },
        {
          id: 'how-to-become-well-spoken',
          title: 'How to Become Well-Spoken',
          type: 'list',
          prose: "Principles for speaking with clarity and impact. Practice them out loud daily — reference it like it's real!",
          items: [
            'Slow down: pace, clarity, emphasis.',
            'Head (reason): present facts and evidence.',
            'Heart (emotion): connect emotionally to your point.',
            'Audience: adapt language to the listener, not yourself.',
            'Storytelling: evidence without story is forgettable.',
            'Voice: tone, volume, warmth.',
            'Stress management: breathe; pause; reset.'
          ],
          tags: ['communication', 'speaking', 'storytelling', 'voice'],
          related: []
        },
        {
          id: '14-negotiation-phrases-every-ceo-should-know',
          title: '14 Negotiation Phrases Every CEO Should Know',
          type: 'list',
          prose: 'Negotiation phrases that help you understand the other side, create trade-offs, and hold your ground.',
          items: [
            '“Help me understand your constraints.”',
            '“What would it take to make this work for you?”',
            '“I’m willing to move on X if you can help me with Y.”',
            '“Is that the best you can do?” (and stay silent).',
            "“Let's find a solution that works for both of us.”",
            '“I have a competing offer/alternative at hand.”',
            '“What if we structured it differently?”',
            '“Can you do better than that?”',
            "“I need to think about it” (don't decide under pressure).",
            "“That's not going to work for us.”"
          ],
          tags: ['communication', 'negotiation', 'business', 'influence'],
          related: []
        },
        {
          id: 'master-small-talk-40-simple-ways',
          title: 'Master Small Talk (40 Simple Ways)',
          type: 'list',
          prose: 'Simple, practical techniques for confident small talk.',
          items: [
            'Ask follow-up questions; show genuine interest.',
            'Comment on shared surroundings.',
            'Compliment something specific.',
            'Share a brief story; invite theirs.',
            'Find common ground early.',
            'Use FORD (Family, Occupation, Recreation, Dreams) as topic anchors.',
            'Remember their name; use it naturally.',
            'Mirror their energy level.'
          ],
          tags: ['communication', 'small talk', 'social skills', 'conversation'],
          related: []
        },
        {
          id: 'professional-words-that-elevate-your-image',
          title: 'Professional Words That Elevate Your Image',
          type: 'list',
          prose: 'Powerful descriptors that elevate how you present yourself professionally.',
          items: [
            'Visionary',
            'Resourceful',
            'Dependable',
            'Influential',
            'Impactful',
            'Methodical',
            'Self-Starter',
            'Forward-Thinking',
            'Observant',
            'Composed',
            'Consistent',
            'Principled',
            'Productive',
            'Dynamic',
            'Driven',
            'Polished'
          ],
          tags: ['communication', 'vocabulary', 'branding', 'image'],
          related: []
        },
        {
          id: 'harsh-vs-polite-english',
          title: 'Harsh vs Polite English',
          type: 'table',
          prose: 'Reframing harsh statements into polite, constructive alternatives.',
          tableHeaders: ['Harsh', 'Polite'],
          tableRows: [
            ["You're wrong", 'I see it differently'],
            ['You forgot', 'It may have slipped'],
            ["Don't do that", 'Please avoid this'],
            ["That's a bad idea", 'What if we tried...?'],
            ["You're confusing", 'Let me clarify'],
            ["I don't care", "That's not my priority"],
            ['This is terrible', "There's room to improve"],
            ["You're too slow", 'Could we speed up?'],
            ['You failed', "Let's revisit the approach"],
            ["That's your fault", 'How can we resolve this?']
          ],
          tags: ['communication', 'language', 'diplomacy', 'social skills'],
          related: []
        }
      ]
    },
    {
      id: 'life-philosophy-and-strategy',
      title: 'Life Philosophy and Strategy',
      topics: [
        {
          id: 'personal-swot-analysis',
          title: 'Personal SWOT Analysis',
          type: 'list',
          prose: 'Apply the SWOT framework to yourself. Revisit quarterly. Honest self-assessment > flattering self-image.',
          items: [
            'Strengths: What do you do well? What unique resources do you have?',
            "Weaknesses: What could you improve? What do you avoid because you're not confident?",
            "Opportunities: What trends could you exploit? Where are the gaps others aren't filling?",
            'Threats: What obstacles do you face? Is your job/field being disrupted?'
          ],
          tags: ['life strategy', 'self-assessment', 'planning', 'growth'],
          related: []
        },
        {
          id: 'kaizen-in-action-continuous-improvement',
          title: 'Kaizen in Action (Continuous Improvement)',
          type: 'list',
          prose: 'Kaizen, the philosophy of continuous improvement, applied to both organisations and individuals. For yourself: build daily improvement habits; track 1% gains; never stop learning.',
          items: [
            'For your company: Improve safety.',
            'Eliminate waste (muda).',
            'Standardise processes.',
            'Empower workers.',
            'Fix 25: 25% improvement goals.'
          ],
          tags: ['life strategy', 'kaizen', 'improvement', 'habits'],
          related: []
        },
        {
          id: '10-things-high-class-people-never-do',
          title: '10 Things High-Class People Never Do',
          type: 'list',
          prose: 'Behaviours that high-class people consistently avoid.',
          items: [
            "They don't correct others publicly.",
            "They don't explain standards to those who won't meet them.",
            "They don't talk badly about the past.",
            "They don't boast about luxury.",
            "They aren't always available (scarcity creates respect).",
            "They don't take disrespect.",
            "They don't always agree (yes-men have no spine).",
            "They don't force business with those who don't value them.",
            "They don't brag without purpose.",
            "They don't stay somewhere that doesn't serve their growth."
          ],
          tags: ['life strategy', 'self-respect', 'class', 'boundaries'],
          related: []
        },
        {
          id: 'focus-on-what-you-can-control',
          title: 'Focus on What You Can Control',
          type: 'list',
          prose: "A stoic distinction between what lies outside your control and what lies within it. Out of your control: other people's thoughts, beliefs, feelings, actions, the weather, the economy.",
          items: [
            'In your control: your attention.',
            'Your response.',
            'Your actions.',
            'Your boundaries.',
            'Your habits.',
            'Your time.',
            'How long you stay.'
          ],
          tags: ['life strategy', 'stoicism', 'control', 'mindset'],
          related: []
        },
        {
          id: 'life-isnt-fair-chapter-9-insight',
          title: "Life Isn't Fair (Chapter 9 insight)",
          type: 'concept',
          prose: 'Every single person struggles. Comparing yourself stops growth. The only thing you can control is your effort and your response. Blaming others for your position keeps you stuck. Let go of the victimhood narrative; it drains your agency.',
          tags: ['life strategy', 'mindset', 'resilience', 'agency'],
          related: []
        },
        {
          id: '20-sentences-for-when-you-feel-behind',
          title: '20 Sentences for When You Feel Behind',
          type: 'list',
          prose: 'Reassuring sentences for the moments when you feel like you are falling behind.',
          items: [
            '“Slow and steady wins.”',
            '“Finding success requires you to look within.”',
            '“Someone packages ages ages ago in a lab.”',
            '“Read part of the week; roll a break from it.”',
            "“You don't have to follow a set of rules on being behind.”",
            '“Having a clear mind means not looking at the whole and work.”',
            '“The quiet ones are often trying the most work.”',
            "“You can be proud of how far you've come and still want more.”",
            "If you want to get where you're going, the first step is to do what you're doing now.",
            '“Some moments are for growing; some are for gathering.”'
          ],
          tags: ['life strategy', 'motivation', 'mindset', 'patience'],
          related: []
        },
        {
          id: 'there-are-two-big-mistakes-in-life',
          title: 'There are two big mistakes in life',
          type: 'quote',
          quote: 'There are two big mistakes in life: (1) Worrying about what other people think of you; (2) Believing others think of you in the first place. Nobody is thinking about you. They’re too busy thinking about themselves. Go do the damn thing.',
          attribution: '',
          prose: 'A reminder that self-consciousness is largely wasted energy — others are preoccupied with themselves, so act freely.',
          tags: ['life strategy', 'mindset', 'confidence', 'action'],
          related: []
        },
        {
          id: 'navy-seal-mantras-for-everyday-life',
          title: 'Navy SEAL Mantras for Everyday Life',
          type: 'list',
          prose: 'Mantras drawn from Navy SEAL training for staying disciplined and composed under pressure. “If you enjoyed this post, Follow Me, Kevin Box.”',
          items: [
            'Embrace the suck.',
            'Calm is contagious; control your state.',
            "Don't ring the bell (don't quit).",
            'Default to discipline.',
            'Slow is smooth; smooth is fast.',
            'Be your best self at your worst moment.'
          ],
          tags: ['life strategy', 'discipline', 'resilience', 'mindset'],
          related: []
        }
      ]
    },
    {
      id: 'self-discipline-and-willpower',
      title: 'Self-Discipline and Willpower',
      topics: [
        {
          id: 'self-discipline',
          title: 'Self-Discipline',
          type: 'quote',
          quote: 'We must all suffer from one of two pains: the pain of discipline or the pain of regret.',
          attribution: 'Jim Rohn',
          prose: "Going to the gym is hard, but sitting on the couch is easy. It's hard to start a business, but it's easy to procrastinate.",
          person: 'Jim Rohn',
          tags: ['discipline', 'willpower', 'motivation', 'habits'],
          related: []
        },
        {
          id: 'train-your-mind-to-do-hard-things',
          title: 'Train Your Mind to Do Hard Things',
          type: 'list',
          prose: 'Mental strategies for building the capacity to tackle difficult tasks.',
          items: [
            'Focus on the Process, Not the Result: identity anchors consistency.',
            'Build Habits, Not Just Goals: habits survive motivation loss.',
            "Motivation Won't Last: build systems that work regardless of mood.",
            'Celebrate Small Progress.',
            'Use the 5-Minute Rule: commit to just 5 minutes; momentum follows.'
          ],
          tags: ['discipline', 'willpower', 'habits', 'mindset'],
          related: []
        },
        {
          id: 'you-will-never-change-your-life-until-you-change-the-habits-you-do-daily-the-secret-of-your-success-is-found-in-your-daily-routine',
          title: 'You will never change your life until you change the habits you do daily. The secret of your success is found in your daily routine.',
          type: 'quote',
          quote: 'You will never change your life until you change the habits you do daily. The secret of your success is found in your daily routine.',
          attribution: '',
          tags: ['discipline', 'habits', 'routine', 'success'],
          related: []
        },
        {
          id: 'the-80-20-principle-applied',
          title: 'The 80/20 Principle Applied',
          type: 'list',
          prose: 'The Pareto principle (80/20) applied across different areas of life. Prioritise the 80% and the rest will fall into place.',
          items: [
            'Health: 80% eating, 20% exercising.',
            'Wealth: 80% habits, 20% math.',
            'Talking: 80% listening, 20% speaking.',
            'Learning: 80% understanding, 20% reading.',
            'Achieving: 80% doing, 20% dreaming.',
            'Happiness: 80% purpose, 20% fun.',
            'Relationships: 80% giving, 20% receiving.',
            'Improving: 80% persistence, 20% ideas.'
          ],
          tags: ['discipline', 'pareto', 'productivity', 'priorities'],
          related: []
        },
        {
          id: 'kaizen-the-philosophy',
          title: 'Kaizen (The Philosophy)',
          type: 'list',
          prose: 'The core principles of Kaizen, the Japanese philosophy of continuous improvement.',
          items: [
            "Don't stop (never stop improving).",
            'Accept challenges.',
            'When you see a problem, fix it immediately.',
            'Reject conventional fixed ideas; think positively.',
            "Don't think of an excuse; think of how to do it.",
            "Don't spend money; use your brain first.",
            'Wisdom is born when things are difficult.',
            'Ask “Why?” five times.',
            'Seek the wisdom of ten people rather than relying on yourself.',
            'There is no end to improvement.'
          ],
          tags: ['discipline', 'kaizen', 'improvement', 'philosophy'],
          related: []
        }
      ]
    }
  ]
};
