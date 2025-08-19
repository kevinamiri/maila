
You will be provided with given contexts. Your task is to follow the given styles, procedures, and guidelines to provide assistance.

## Styles:

### Writing Style Guide:
1.  Language: (Clarity, Precision, and Simplicity)
    - Write as if you're showing the reader something in the world, and the goal is to help the reader see something clearly.
    - Use descriptive but concise language. Favor clarity over elaborate descriptions.
    - Use an objective and understated tone when it aids the task; otherwise, maintain a balanced tone appropriate to the context.
    - Maintain a detached, stoic tone while balancing it with a human touch.
    - Stay focused and maintain balance. Be concise and clear.
    - Use specific, concrete words.
    - Avoid technical jargon. Use simple, accessible language.
    - Avoid clichés; use fresh expressions.
    - Eliminate unnecessary words.
    - Use clear, straightforward language.
    - Avoid unnecessary complexity.
    - Prioritize readability and accessibility.
    - Use active voice for directness.
    - Show rather than tell. When a concept can be clearly stated in a few words, choose brevity over elaboration.
    - Present complex ideas using simple vocabulary while balancing simplicity and precision.
    - Use a mix of simple and complex sentences to maintain a natural rhythm.
    - Write in straightforward language.
    - Choose strong verbs over noun forms.

2.  Structure:
    - Organize ideas logically; for example, present information in a familiar-to-new sequence.
    - Use bullet points, lists, and hierarchical structures when they improve text comprehension.
    - Condense and organize information from a general/abstract/broad level into a more specific/concrete/detailed structure.
        - Follow the hierarchy to its deepest levels as long as it remains accessible.
        - Create details by intensively organizing information rather than by removing or summarizing it.
        - Aim for a minimalist yet dense structure.
        - Use lists and markers to present the structure in a clear, nested format (up to eight levels).

### Code Writing Style Guide:
1.  Readability and Minimalism:
    - Use clear, short semantic names (prefer one word, maximum two).
    - Keep comments minimal and visual:
        - Include usage examples in comments.
        - Specify types.
        - Use simple words for immediate comprehension.
    - Use emojis as visual aids only when they enhance clarity.
    - Keep code as simple as possible.
    - Write self-documenting code; use minimal, specific comments when necessary.
    - In React components, comment to represent the component. For example, use `{/* 🔍 Search */}` above the JSX code of the search component.
    - Organize and separate concerns by actions, functions, and data structures when beneficial.
    - Avoid JSDoc comments for simple functions.
    - Use separation markers to separate code blocks for each block/function/etc in a more self-explanatory manner. Use them wisely.
        - Use markers to separate different sections of the code. e.g. `// --------------------------- 🎯 Business Logics -----------------------------`

2.  Asynchronous Programming:
    - Prefer `async`, `await`, `try`, and `catch`.
    - Prefer using functional programming. Use map, filter, reduce, conditional operators, short-circuit evaluation, and the ternary operator.

3.  Logging:
    - Log short information, such as the number of items or the length of text, at each step for easier debugging.
    - Log the request and response of the API calls in readable format without creating spam.
    - Handle errors gracefully and log them with clear context that shows where the error occurred and what operation failed.

4.  Examples and Features:
    - Provide examples of usage for common functions.
    - Provide an explanation for each line of code in a one-line minimalist comment.
    - Convert commented-out code into features when it helps.
    - If there were dev notes, keep them in the codebase, never remove them.

5.  Semantic Naming:
    - Use meta-linguistic abstractions that capture key actions, functions, concepts, and operations.
        - Identify core concepts, operations, and actions given the domain context.
        - Choose semantic names that make code self-documenting and easier to understand.
        - Names should not be more than two words.
        - Make sure names align with industry standards and conventions in software development.
        - Never change the names of functions or variables that are imported from external libraries or files.
        - Use kebab-case for file names unless otherwise specified.

6.  File Path Specification:
    - Specify the path along with the file name in a markdown code block. Include the full path after the language identifier, using this format:
        ```language:path/to/file-name.extension
        code goes here
        ```
    - Use kebab-case for file names unless otherwise specified.
    - When specifying a file path, always use the actual path and file name. Do not use `path/to/` as a placeholder; it is only an example template. This is real-world application development.

7.  Code Organization:
    - Organize commented-out or unused code in a separate section.
    - Annotate to indicate when it will be useful.
    - Do not remove any code or features.
    - Use a minimal, linear, and visual structure.
        - Key considerations for transforming code into a minimalist, linear form:
            - Minimal nesting: eliminate unnecessary indentation layers.
            - Linear flow: reorganize code so logic flows naturally from top to bottom.
            - Meaningful grouping: logically cluster closely related operations for visual clarity.
            - Concise labeling: use direct, purposeful naming conventions.
            - Visual markers: strategically use whitespace and line breaks to facilitate scanning in one glance.

            ```ts
            // GOOD EXAMPLE of SCANNABLE CODE
            import { fetchUserData, saveConversation, updateUserItem, updateItem } from "src/utils/db";
            // ---------------------------  Interfaces -----------------------------
            export interface ClientOptions { apiKey: string; baseUrl?: string; timeout?: number; 
            const available = ['c_voice_id', 'h_voice_id', 'e_voice_id', 'o_voice_id'].filter(k => voice[k]).map(k => `${k}="${voice[k]}"`);
            ```

            ```ts
            // BAD: The following code is not SCANNABLE, creates spaces in the code, and also creates problems for people with overstimulation issues.

            import {
               fetchUserData,
               saveConversation,
               updateUserItem,
               updateItem
            } from "src/utils/db";
            export interface ClientOptions {
            apiKey: string;
            baseUrl?: string;
            timeout?: number;
            }
            // BAD EXAMPLE: Never EVER format like this.
            const available = ['c_voice_id', 'h_voice_id', 'e_voice_id', 'o_voice_id']
            .filter(k => voice[k])
            .map(k => `${k}="${voice[k]}"`);
            ```

## Procedures (Strict Order of Operations):

1.  Observations: Identify and articulate the background of the problem, the user's query, the user's intention or goal, what the code does, and note observations. There is no specific format for this; only describe what you observed and decipher the user's intention.
2.  Problem: Clarify and articulate the problem. Format it as "Problem: <problem description>".
3.  Goal: Define the goal. What needs to be done to solve the problem? Format it as "Goal: <goal description>".
4.  Given the background, think about the problem inside `<thinking type="strategic thinker">` tags. What needs to be done? Consider strategies, how to do it, hints, insights, etc.
    - Write out your insights before beginning to solve the problem.
    - Use the `<inner_monologue type="scratchpad">` tag to write out your thought process before starting to make assumptions.
5.  Actions: After thinking, list out the actions that need to be done to solve the problem.
6.  Provide a solution based on the background and problem. Include all the files when editing code for the sake of accessibility.
7.  Reflect on the thought process and changes made. This should include the reasoning behind decisions and modifications.
    - Use `<reflections>` tags to enclose these thoughts.
    - If you changed variable names, list them in the format: (old name) -> (new name).
8.  Critique your work. Put the critiques in `<critical_thinking>` tags. Remember that the aim is to improve the quality of the work given the defined goal. Each critique should be deep and have a prefix of "Critical: " or "Suggestion: ".
    - Rate and score each critique point from 1 to 10 based on validity, relevance, and value. Format: `Critical: [critique point] Impact: (1-10)`.
9.  List specific, actionable next steps using `<next_steps>` tags. Each step must be concrete and specific. Rate each step from 1-10 based on priority.
10. List all files that have been changed in the codebase.
11. If any additional packages need to be installed, list them in `<additional_packages>` tags; otherwise, do not mention it.
12. If your change is important, add documentation in `<append_documentation>`.

IMPORTANT:
- Always format your work using the Writing Style Guide.
- Remember all instructions are mandatory to follow and always be specific.
- Always PROVIDE the FULL CODE, WITHOUT skipping or summaries, unless specified otherwise by the user.

Remember:
- All instructions are mandatory to follow and always be specific.
- By now you should understand what art is. So yes—Art is balance. Between structure and meaning, chaos and order. It shows us where to look, why it matters.

## Function/tools calling:

- When you run and complete different functions, remember to first write out your strategy for the call. Use the tag `<func_inner_monologue type="planning">` to enclose your strategy.

## MUI Tips:

<mui_style_guide>

- Convert the existing destructured MUI import into individual, direct imports for each component.
- Use markers to separate different sections of the code.
- Convert all types into clear interfaces. Convert PropTypes into TypeScript interfaces at the top of the component file.
- When you refactor a MUI component, or even a React component, NEVER change the CSS attributes unless specifically requested by the user.
- During MUI component refactoring, do NOT modify any exported values, variable names, function names, or props that other files might depend on. Only change internal implementation details that has not been used elsewhere in the codebase.
- The purpose of refactoring is to improve the appearance of the code, not its functionality.
- Use markers and comments to clearly separate different sections of the code. Ensure comments are as minimal as possible.
- Renaming variables or functions that are not exported or imported elsewhere in the codebase is considered a best practice of refactoring and is allowed.
- Use a small size for all components as default. (Every component size must be small and specified).
- For each component, write a short comment above the component to describe what the component will represent. (A higher level of abstraction).
- All components, sections, layouts, etc., must be responsive by default.
- Prefer using Lucide icons over MUI icons.
- Prefer using shadcn/ui components or Headless UI, but style them with MUI styled-components. This is our philosophy. We use both/any but with care.
- Always follow a responsive design for all components. Use the `sx` prop to style the components in different sizes.
- Always follow ATOMIC DESIGN principles as follows:

```
src/
├── components/          # Global reusable UI and logic primitives
│   ├── index.ts
│   ├── <component>/
│   │   ├── <component>.tsx
│   │   └── index.ts
│   └── hooks/
│       ├── <hook>.ts
│       └── index.ts
├── layouts/             # Page layouts (Dashboard, Auth layout, etc.)
├── sections/            # Feature-oriented modules
│   └── <feature>/
│       ├── <feature>-view.tsx
│       ├── <feature>-filters.tsx
│       ├── <feature>-table.tsx
│       ├── components/
│       │   ├── <feature>-item.tsx
│       │   └── index.ts
│       └── hooks/
│           └── use-<feature>.ts
├── utils/               # Pure utility functions and helpers
├── hooks/               # Global custom hooks
├── types/               # Shared TypeScript types
└── config-global.ts     # Build-time constants
```

If you need to refactor or restructure the codebase, follow these steps:

---

1.  Analyze the codebase:
    - Identify reusable components, hooks, and utilities.

2.  Classify each file:
    - Global: used across multiple features (e.g., buttons, modals, global hooks)
    - Local: used only within a specific feature (e.g., `useTodos`, `TodoItem`)
    - Feature: files that implement a specific domain or business logic (e.g., `todos`, `auth`, `chat`)

3.  Map files to the new structure:
    - Move global components to `src/components/`.
    - Move global hooks to `src/hooks/`.
    - Move utilities to `src/utils/`.
    - Move feature-specific files to `src/sections/<feature>/`.
    - Group local components and hooks under `src/components/` and `src/hooks/` inside each feature folder.

4.  Decompose a feature into one folder.
    - Follow the pattern like `<feature>-view.tsx`, `<feature>-table.tsx`, and `<feature>-item.tsx` for smaller components. `index.tsx` will be the main file for the feature that combines all the components. (Use barrel exports where appropriate).

5.  Explain your decisions:
    - For each major folder or file move, explain why it was moved and how it fits the new structure inside `<inner_articulation>` tags.

```
src/
├── components/
│   └── Button/              # Global button component used across features
│       ├── Button.tsx
│       └── index.ts
├── sections/
│   └── todos/               # Feature module for todo logic
│       ├── todos-view.tsx   # Main screen for todos
│       ├── todos-table.tsx  # Table view for todos
│       ├── components/
│       │   └── todo-item.tsx  # Local component for rendering a single todo
│       └── hooks/
│           └── use-todos.ts   # Local hook for todo logic
```

</mui_style_guide>

---

## Hints:

Here are the list of hints that will be helpful when solving a problem or adding/editing a feature.

<hints>
   - The codebase is your best friend; learn from it by observing it, mapping out relationships, finding patterns, and making connections when you are not sure what to do next.
   - The objective is to follow the instructions while being faithful. This is the best policy.
</hints>





# File Contents


```javascript:texting.js
const fetch = require('node-fetch');
// async function


const Pointss = [
  {
    p: { x: 53.55903, y: 103.74277 },
    a: [53.55903, 103.74277],
    c: 'What are your products or services?'
  },
  {
    p: { x: 57.319145, y: 112.10878 },
    a: [57.319145, 112.10878],
    c: 'Why is your product or service unique or needed?'
  },
  {
    p: { x: 45.771553, y: 91.066795 },
    a: [45.771553, 91.066795],
    c: 'How does your product or service solve the problem?'
  },
  {
    p: { x: -7.9406934, y: 67.01128 },
    a: [-7.9406934, 67.01128],
    c: 'What is your business?'
  },
  {
    p: { x: 38.50291, y: 86.21665 },
    a: [38.50291, 86.21665],
    c: "How will your product or service solve your customer's problem?"
  },
  {
    p: { x: -13.609276, y: 71.53021 },
    a: [-13.609276, 71.53021],
    c: 'What is your business and what does it do?'
  },
  {
    p: { x: 8.023912, y: 28.005163 },
    a: [8.023912, 28.005163],
    c: 'Who are your customers and who is your target market?'
  },
  {
    p: { x: -22.050316, y: -43.844353 },
    a: [-22.050316, -43.844353],
    c: 'What are your key marketing plans?'
  },
  {
    p: { x: 43.364727, y: -8.495335 },
    a: [43.364727, -8.495335],
    c: "What is your startup's business model?"
  },
  {
    p: { x: 47.345737, y: 0.44594556 },
    a: [47.345737, 0.44594556],
    c: 'What is your business model?'
  },
  {
    p: { x: 33.55904, y: 73.17918 },
    a: [33.55904, 73.17918],
    c: 'Why do your target customers need your solution?'
  },
  {
    p: { x: 20.614914, y: 80.53535 },
    a: [20.614914, 80.53535],
    c: 'Why will customers buy from you?'
  },
  {
    p: { x: -16.387508, y: -37.27822 },
    a: [-16.387508, -37.27822],
    c: 'What are your key marketing and sales strategies?'
  },
  {
    p: { x: 4.094114, y: 19.475288 },
    a: [4.094114, 19.475288],
    c: 'Who is your target market?'
  },
  {
    p: { x: 19.746296, y: 44.113266 },
    a: [19.746296, 44.113266],
    c: 'Do you have any existing traction, such as users, paying customers, or partnerships?'
  },
  {
    p: { x: 93.01094, y: 17.208616 },
    a: [93.01094, 17.208616],
    c: 'What are your key milestones and objectives for your business?'
  },
  {
    p: { x: -11.869589, y: -25.77251 },
    a: [-11.869589, -25.77251],
    c: 'What is your go-to-market strategy?'
  },
  {
    p: { x: -102.545975, y: -67.06987 },
    a: [-102.545975, -67.06987],
    c: 'What are your costs?'
  },
  {
    p: { x: 86.47686, y: 27.307432 },
    a: [86.47686, 27.307432],
    c: 'What are your key goals for your business?'
  },
  {
    p: { x: -93.95409, y: -70.05509 },
    a: [-93.95409, -70.05509],
    c: 'What are your costs of goods sold and customer acquisition costs?'
  },
  {
    p: { x: -57.010174, y: 1.2699447 },
    a: [-57.010174, 1.2699447],
    c: 'How will you generate revenue?'
  },
  {
    p: { x: 56.86996, y: 3.3810604 },
    a: [56.86996, 3.3810604],
    c: 'What are the key elements of your business model?'
  },
  {
    p: { x: -59.674145, y: 8.803825 },
    a: [-59.674145, 8.803825],
    c: 'How do you plan to generate revenue?'
  },
  {
    p: { x: 109.05481, y: 5.8969674 },
    a: [109.05481, 5.8969674],
    c: 'What are the key milestones your startup has achieved so far?'
  },
  {
    p: { x: 1.0332764, y: 2.40216 },
    a: [1.0332764, 2.40216],
    c: 'How will you reach your target market?'
  },
  {
    p: { x: 105.377106, y: -42.262424 },
    a: [105.377106, -42.262424],
    c: 'What is the problem your startup is solving?'
  },
  {
    p: { x: -157.48007, y: -2.0208962 },
    a: [-157.48007, -2.0208962],
    c: 'What are your key competitive advantages?'
  },
  {
    p: { x: 89.15603, y: 35.903774 },
    a: [89.15603, 35.903774],
    c: 'What are your long-term goals for the business?'
  },
  {
    p: { x: -2.6846876, y: -4.7632165 },
    a: [-2.6846876, -4.7632165],
    c: 'How will you reach and engage your target market?'
  },
  {
    p: { x: -46.22875, y: 11.519539 },
    a: [-46.22875, 11.519539],
    c: 'How will you generate revenue with your business model?'
  },
  {
    p: { x: 37.16744, y: -69.437706 },
    a: [37.16744, -69.437706],
    c: 'What are the risks and challenges associated with your business?'
  },
  {
    p: { x: -114.97277, y: 88.35114 },
    a: [-114.97277, 88.35114],
    c: 'What are your expansion plans?'
  },
  {
    p: { x: 73.57562, y: 10.768791 },
    a: [73.57562, 10.768791],
    c: 'What are the key areas you will focus on in your business?'
  },
  {
    p: { x: 100.992004, y: -36.438892 },
    a: [100.992004, -36.438892],
    c: 'How does your startup solve the problem better than other existing solutions?'
  },
  {
    p: { x: -166.40001, y: -2.8954608 },
    a: [-166.40001, -2.8954608],
    c: 'What is your competitive landscape?'
  },
  {
    p: { x: 45.625847, y: -75.96174 },
    a: [45.625847, -75.96174],
    c: 'What are the key risks and challenges facing your business?'
  },
  {
    p: { x: -94.7716, y: -49.920826 },
    a: [-94.7716, -49.920826],
    c: 'How much will it cost to start and operate your business?'
  },
  {
    p: { x: -41.903522, y: -107.86035 },
    a: [-41.903522, -107.86035],
    c: 'Why is now the right time to start this business?'
  },
  {
    p: { x: -113.170364, y: -68.56816 },
    a: [-113.170364, -68.56816],
    c: 'What are your key expenses and how will they be covered?'
  },
  {
    p: { x: 48.445854, y: -67.52311 },
    a: [48.445854, -67.52311],
    c: 'What are the key risks and challenges you face in your business?'
  },
  {
    p: { x: 128.32259, y: -63.851677 },
    a: [128.32259, -63.851677],
    c: 'What problem are you solving?'
  },
  {
    p: { x: -95.19956, y: 1.0390553 },
    a: [-95.19956, 1.0390553],
    c: 'How long will it take to become profitable?'
  },
  {
    p: { x: -93.792404, y: 10.715869 },
    a: [-93.792404, 10.715869],
    c: 'When do you expect to become profitable?'
  },
  {
    p: { x: -84.91379, y: 5.1121964 },
    a: [-84.91379, 5.1121964],
    c: 'How soon do you expect to generate profits?'
  },
  {
    p: { x: 37.763306, y: -148.35744 },
    a: [37.763306, -148.35744],
    c: 'What are your key financial metrics?'
  },
  {
    p: { x: 49.52504, y: -148.91037 },
    a: [49.52504, -148.91037],
    c: 'What are your key performance indicators (KPIs)?'
  },
  {
    p: { x: -91.490654, y: 78.2895 },
    a: [-91.490654, 78.2895],
    c: 'How much money do you need to get started or scale up? for what purpose?'
  },
  {
    p: { x: 118.278725, y: 12.530243 },
    a: [118.278725, 12.530243],
    c: 'What are your key milestones/traction to date?'
  },
  {
    p: { x: -170.98708, y: 6.2690744 },
    a: [-170.98708, 6.2690744],
    c: 'What is the competition like and how will you differentiate yourself?'
  },
  {
    p: { x: -103.4321, y: 85.1796 },
    a: [-103.4321, 85.1796],
    c: 'What are your plans for using the capital?'
  },
  {
    p: { x: 132.9472, y: -85.02592 },
    a: [132.9472, -85.02592],
    c: 'How will you reach them?'
  },
  {
    p: { x: 71.636215, y: 31.780804 },
    a: [71.636215, 31.780804],
    c: 'What are your key value propositions?'
  },
  {
    p: { x: 134.72058, y: -69.43259 },
    a: [134.72058, -69.43259],
    c: 'What is the problem that you are solving?'
  },
  {
    p: { x: -45.027103, y: -116.52308 },
    a: [-45.027103, -116.52308],
    c: 'Why is now the right time to enter this market?'
  },
  {
    p: { x: -78.18653, y: 52.877174 },
    a: [-78.18653, 52.877174],
    c: 'How do you plan to use the investment funds to grow your business?'
  },
  {
    p: { x: 104.06626, y: 42.281933 },
    a: [104.06626, 42.281933],
    c: 'What are your key strategies for achieving your goals?'
  },
  {
    p: { x: 145.60976, y: -63.752296 },
    a: [145.60976, -63.752296],
    c: 'What is your solution?'
  },
  {
    p: { x: 16.782646, y: -146.20396 },
    a: [16.782646, -146.20396],
    c: 'What are your financial projections?'
  },
  {
    p: { x: -175.1996, y: 17.288923 },
    a: [-175.1996, 17.288923],
    c: 'Who is on your team and what relevant experience do they bring?'
  },
  {
    p: { x: -92.94262, y: 31.830072 },
    a: [-92.94262, 31.830072],
    c: 'What are the potential rewards for investing in your company?'
  },
  {
    p: { x: 63.805767, y: -76.146965 },
    a: [63.805767, -76.146965],
    c: 'What are your key strategies for mitigating these risks and challenges?'
  },
  {
    p: { x: 24.196049, y: -147.11852 },
    a: [24.196049, -147.11852],
    c: 'What are your key financial projections?'
  },
  {
    p: { x: 153.29965, y: -56.499928 },
    a: [153.29965, -56.499928],
    c: 'How does your solution work?'
  },
  {
    p: { x: -69.80166, y: 111.92236 },
    a: [-69.80166, 111.92236],
    c: 'How much money have you raised so far and from which investors?'
  },
  {
    p: { x: 117.148865, y: 23.269657 },
    a: [117.148865, 23.269657],
    c: 'What are the key milestones you plan to achieve in the next 12 months?'
  },
  {
    p: { x: -75.47471, y: 79.17846 },
    a: [-75.47471, 79.17846],
    c: 'How will you use the funding?'
  },
  {
    p: { x: -77.81687, y: 71.01826 },
    a: [-77.81687, 71.01826],
    c: 'How will you use the funds raised?'
  },
  {
    p: { x: -69.8426, y: 130.2267 },
    a: [-69.8426, 130.2267],
    c: 'How much capital do you need to raise?'
  },
  {
    p: { x: -70.02895, y: 120.93709 },
    a: [-70.02895, 120.93709],
    c: 'How much money do you need to raise from investors?'
  }
]

const points = Pointss.map(x => x.p)


//Pythagorean theorem to find the distance between any two points.
const distance = (a, b) => {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
};


// takes an array of points, and a point, and returns new array of points and distance sorted by distance from the point
const sortByDistance = (points, point) => {
  return points.map(p => {
    return {
      p: p,
      d: distance(p, point)
    };
  }).sort((a, b) => {
    return a.d - b.d;
  });
};



const cal = sortByDistance(points, points[0]);

// the first point is the point itself, so we remove it
cal.shift();


// max distance between two points
const maxDistance = cal[cal.length - 1].d;
console.log(maxDistance);

// min distance between two points
const minDistance = cal[0].d;
console.log(minDistance);

// the distance between the first and last point
const dBetweenFirstAndLast = maxDistance - minDistance;

// the distance between the first and last point divided by the number of points
const dBetweenFirstAndLastDividedByPoints = dBetweenFirstAndLast / points.length;

// find the point that is the furthest away from the first point
const furthestPoint = cal[cal.length - 1].d;


/* function that get the url from user and return the valid url if the url do not have http or https */

const getUrl = (url) => {
  // lowercased url
  const lowerCasedUrl = url.toLowerCase();
  if (lowerCasedUrl.indexOf('http://') === -1 && lowerCasedUrl.indexOf('https://') === -1) {
    return `http://${lowerCasedUrl}`;
  }
  return url;
};

(async function () {

  console.log(getUrl("maila.ai"))
  // const tasks = async () => {
  //   const data = await fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json());
  //   console.log(data, new Date())
  //   const data2 = await fetch('https://jsonplaceholder.typicode.com/todos/2').then(response => response.json());
  //   console.log(data2, new Date())
  //   const data3 = await fetch('https://jsonplaceholder.typicode.com/todos/3').then(response => response.json());
  //   console.log(data3, new Date())
  //   return { data, data2, data3 }
  // }

  // for (let i = 0; i < 30; i++) {
  //   console.log(i);
  //   tasks();

  // }




  // console.log('end');

  return "done";









}
)();

/**

Blog title: How to start a personal blog 

Blog sections:

1. Pick a personal blog template
2. Develop your brand
3. Choose a hosting plan and domain name
4. Create a content calendar 
5. Optimize your content for SEO
6. Build an email list
7. Get the word out
---
Blog title: A real-world example on Improving JavaScript performance

Blog sections:

1. Why I needed to Improve my JavaScript performance
2. Three common ways to find performance issues in Javascript
3. How I found the JavaScript performance issue using console.time
4. How does lodash cloneDeep work?
5. What is the alternative to lodash cloneDeep?
6. Conclusion

---

Blog title: Is a Happy Life Different from a Meaningful One?

Blog sections:
1. Five differences between a happy life and a meaningful one
2. What is happiness, anyway?
3. Is the happiness without pleasure?
4. Can you have it all?

---
Blog title: 5 Strategies to overcome writer's block

Blog Sections:

1. Understand the root of your writer's block
2. Get organized
3. Set realistic writing goals
4. Take a break
5. Reward yourself

 */



const data = {
  text: "something has gone away ther",
  numResults: 3,
  tone: "formal",

}


```
```plaintext:scripts/utils.mjs
import fs from 'fs/promises'
import { Lexer } from 'marked'

export async function read(path) {
  return fs.readFile(path, 'utf8')
}

export async function write(path, data) {
  await fs.writeFile(path, data, 'utf8')
}

export async function append(path, data) {
  await fs.appendFile(path, data, 'utf8')
}


export function getNthContent(xml, tag, n = 1) {
  let count = 0
  let openPos = []

  for (let i = 0; i < xml.length; i++) {
    if (xml.slice(i, i + tag.length + 1) === `<${tag}`) {
      openPos.push(i)
      i += tag.length + 1
    } else if (xml.slice(i, i + tag.length + 3) === `</${tag}>`) {
      if (openPos.length > 0) {
        count++
        if (count === n) {
          const lastOpen = openPos[openPos.length - 1]
          return xml.slice(lastOpen + tag.length + 2, i)
        }
      }
      openPos = []
      i += tag.length + 2
    }
  }
  return null
}

export function optimalMdChunking(md, maxLen = 300) {
  const tokens = Lexer.lex(md)
  const lines = md.split(/\r?\n/).map(l => l + '\n')

  const elements = []
  let offset = 0
  for (const token of tokens) {
    let raw = ''
    while (offset < lines.length) {
      raw += lines[offset++]
      if (raw.trim() === '' || raw.endsWith('\n\n') || raw.split('\n').length > 2) break
    }
    elements.push({ type: token.type, raw, len: raw.length })
  }

  const n = elements.length
  const dp = Array(n + 1).fill(Infinity)
  const parent = Array(n + 1).fill(0)
  dp[0] = 0

  for (let i = 1; i <= n; i++) {
    let currLen = 0
    for (let j = i - 1; j >= 0; j--) {
      const { type, raw, len } = elements[j]
      if (type === 'yaml') {
        if (currLen === 0 && dp[j] + 1 < dp[i]) {
          dp[i] = dp[j] + 1
          parent[i] = j
        }
        break
      }
      if (type === 'code' && currLen > 0) break
      currLen += len
      if (currLen <= maxLen && dp[j] + 1 < dp[i]) {
        dp[i] = dp[j] + 1
        parent[i] = j
      }
    }
  }

  const chunks = []
  let i = n
  while (i > 0) {
    const j = parent[i]
    const chunk = elements.slice(j, i).flatMap(({ type, raw }) =>
      type === 'code' && raw.length > maxLen ? splitCodeBlock(raw, maxLen) : [raw]
    )
    chunks.push(chunk.join(''))
    i = j
  }

  return chunks.reverse()
}

function splitCodeBlock(block, maxLen) {
  const lines = block.split('\n')
  const fence = lines[0]
  const close = lines[lines.length - 1]
  const content = lines.slice(1, -1)

  const result = []
  let curr = [fence]
  let len = fence.length + 1

  for (const line of content) {
    const lineLen = line.length + 1
    if (len + lineLen + close.length > maxLen) {
      curr.push(close)
      result.push(curr.join('\n'))
      curr = [fence]
      len = fence.length + 1
    }
    curr.push(line)
    len += lineLen
  }

  curr.push(close)
  result.push(curr.join('\n'))
  return result
}

```
```plaintext:scripts/translate-prompt.mjs


export const sysPrompt = `You will be given context as text fragments inside within <text> XML tags. As a highly capable translator, Your task is to translate these fragments into the specified target language.

Steps to follow:

1. Thinking
    Observe and identify the translation challenges & considerations before moving to translation, if any all inside a <thinking> xml tag. 
2. Translation
   Provide the translated text inside translation xml tags for clarity.
   • Aim to deliver adaptive translation work that sound natural to native speakers
   • Match the source's register style and language carefully.
   • Keep the formating as close as possible to the source.
   • Translate thoughtfully, and make sure to keep intent of the text. e.g You may translate 'path: /en/legal/terms-of-use' to 'path: /fr/legal/terms-of-use' if intention is to translate the frontmatter or a program's path. Think before translating is for this purpose.
Your goal is to produce a translation that feels like it was originally written in the target language.`



```
```plaintext:scripts/post.mjs
import { join, parse } from 'path'
import { config } from 'dotenv'
import OpenAI from 'openai'
import { optimalMdChunking, getNthContent, read, write, append } from './utils.mjs'
import { sysPrompt } from './translate-prompt.mjs'

config()


const eu = ['bg', 'hr', 'cs', 'da', 'nl', 'en', 'et', 'fi', 'fr', 'de', 'el', 'hu', 'ga', 'it', 'lv', 'lt', 'mt', 'pl', 'pt', 'ro', 'sk', 'sl', 'es', 'sv', 'no']

const nordic = ['da', 'sv', 'no', 'fi', 'is']
const majorLanguages = [
  'en', // English
  'zh', // Chinese
  'es', // Spanish
  'de', // German
  'ja', // Japanese
  'fr', // French
  'pt', // Portuguese
  'ko', // Korean
  'ar', // Arabic
  'it', // Italian
  'hi', // Hindi
  'id', // Indonesian
  'vi', // Vietnamese
  'tr', // Turkish
  'th', // Thai
  'pl', // Polish
  'sv', // Swedish
  'no', // Norwegian
  'da', // Danish
  'fi', // Finnish
  'nl', // Dutch
  'ru', // Russian
  'cs', // Czech
  'ha'  // Hausa
]

const MODELS = ['o4-mini', 'gpt-4.5-preview-2025-02-27']

const CHAT_MODEL = MODELS[0]


const TEMPERATURE = CHAT_MODEL === 'o4-mini' ? 1: 0.88

const ai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
 

async function translateChunk(text, lang = 'en') {
  const messages = [
    { role: 'system', content: sysPrompt },
    { role: 'user', content: `Translate to ${lang}:\n\n<text>${text}</text>\n\nplease place your work inside a <translation> xml tag for clarity.` },
  ]

  const res = await ai.chat.completions.create({
    model: CHAT_MODEL,
    messages,
    temperature: TEMPERATURE,
    store: true,
  })

  const content = res.choices?.[0].message?.content ?? text
  return getNthContent(content, 'translation', 1) || content.trim()
}

export async function translateFile(filePath, lang = 'en', outDir, outName) {
  console.log(`Translating ${filePath} → ${lang}`)
  const md = await read(filePath)
  const sections = optimalMdChunking(md, 4000)
  const { dir, name, ext } = parse(filePath)

  const outputDir = outDir || dir
  const outputName = outName || `${name}.${lang}`
  const outPath = join(outputDir, `${outputName}${ext}`)

  await write(outPath, '')

  for (const section of sections) {
    const result = await translateChunk(section, lang)
    await append(outPath, result + '')
  }

  console.log(`Saved → ${outPath}`)
}

async function translateToMultipleLanguages(config) {
  const { inputFile, outputPath, languages, nameTemplate } = config
  const { name, ext } = parse(inputFile)
  
  // Strip any existing language code from the name (e.g., "follow-up-email.en" -> "follow-up-email")
  const baseName = name.replace(/\.[a-z]{2}$/, '')
  
  console.log(`Starting translation of ${inputFile} to ${languages.length} languages`)
  
  // --- Parallel translation using Promise.all ---
  await Promise.all(
    languages.map(lang => {
      const outputName = nameTemplate 
        ? nameTemplate.replace('{lang}', lang).replace('{name}', baseName)
        : `${baseName}.${lang}`
      return translateFile(inputFile, lang, outputPath, outputName)
    })
  )
  
  console.log(`Completed translations to: ${languages.join(', ')}`)
}

;(async () => {
  await translateToMultipleLanguages({
    inputFile: '/home/kevin/maila/src/pages/legal/privacy-policy.en.md',
    outputPath: '/home/kevin/maila/src/pages/legal',
    languages: majorLanguages,
    nameTemplate: '{name}.{lang}'
  })

  // after done we need to format it using prettier prettier --write "src/pages/**/*.md"
  await exec(`prettier --write "/home/kevin/maila/src/pages/legal/*.md"`)
})()

```
```typescript:gatsby-ssr.tsx
import React from "react";
import useSettings from "./src/hooks/useSettings";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "./src/theme";
import { SnackbarProvider } from "notistack";
import { Provider as ReduxProvider } from "react-redux";
import store from "./src/store";
import { SettingsProvider } from "contexts/settings-context";

function TopLayout(props) {
    const { settings } = useSettings();
    const theme = createTheme({
        direction: settings.direction,
        responsiveFontSizes: settings.responsiveFontSizes,
        theme: settings.theme,
        lang: settings.lang,
    });
    return (
        <>
            <SettingsProvider>
                <ReduxProvider store={store}>
                    <ThemeProvider theme={theme}>
                        <SnackbarProvider maxSnack={3}>
                            {/* <GlobalStyles /> */}
                            <CssBaseline />
                            {props.children}
                        </SnackbarProvider>
                    </ThemeProvider>
                </ReduxProvider>
            </SettingsProvider>
        </>
    );
}

export const wrapRootElement = ({ element }) => {
    return <TopLayout>{element}</TopLayout>;
};


```
```typescript:gatsby-browser.tsx
/* eslint-disable import/prefer-default-export, react/prop-types */
import React from "react";
import { SettingsProvider } from "./src/contexts/settings-context";
import useSettings from "./src/hooks/useSettings";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "./src/theme";
import { SnackbarProvider } from "notistack";
import { Provider as ReduxProvider } from "react-redux";
import store from "./src/store";

function TopLayout(props) {
  const { settings } = useSettings();

  const theme = createTheme({
    direction: settings.direction,
    responsiveFontSizes: settings.responsiveFontSizes,
    theme: settings.theme,
    lang: settings.lang,
  });

  return (
    <SettingsProvider>
      <ReduxProvider store={store}>
        <ThemeProvider theme={theme}>
          <SnackbarProvider maxSnack={3}>
            <CssBaseline />
            {props.children}
          </SnackbarProvider>
        </ThemeProvider>
      </ReduxProvider>
    </SettingsProvider>
  );
}

export const wrapRootElement = ({ element }) => {
  return <TopLayout>{element}</TopLayout>;
};


```
```javascript:src/theme/oldtheme.js
import merge from 'lodash/merge';
import { deepmerge } from '@mui/utils';
import { createTheme as createThemes, responsiveFontSizes } from '@mui/material/styles';
import { THEMES } from '../constants';
import { lightShadows, darkShadows } from './shadows';
import "@fontsource/inter";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './styles.css'

const neutral = {
  100: '#F3F4F6',
  200: '#E5E7EB',
  300: '#D1D5DB',
  400: '#9CA3AF',
  500: '#6B7280',
  600: '#4B5563',
  700: '#374151',
  800: '#1F2937',
  900: '#111827',
};

const baseOptions = {
  direction: 'ltr',
  components: {
    MuiAvatar: {
      styleOverrides: {
        fallback: {
          height: '75%',
          width: '75%'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      }
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: {
          variant: 'h6'
        }
      },
      styleOverrides: {
        avatar: {
          marginRight: '0.1px',
        },
      },
    },

    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 3,
          overflow: 'hidden'
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: 12,
          fontWeight: 500,
          lineHeight: 1.71,
          minWidth: 'auto',
          paddingLeft: 0,
          paddingRight: 0,
          textTransform: 'none',
          '& + &': {
            marginLeft: 24,
          },
        },
      },
    },
  },
  typography: {
    button: {
      fontWeight: 700
    },
    fontFamily:
      '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Tahoma, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
      fontFamily: 'BlinkMacSystemFont,"Helvetica Neue","Roboto",Roboto,Tahoma,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    },
    h2: {
      fontWeight: 700,
      fontSize: '1.7rem',
      fontFamily: 'BlinkMacSystemFont,"Helvetica Neue","Roboto",Roboto,Tahoma,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    },
    h3: {
      fontWeight: 500,
      fontSize: '1.6rem',
      fontFamily: 'BlinkMacSystemFont,"Helvetica Neue","Roboto",Roboto,Tahoma,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    },
    h4: {
      fontWeight: 500,
      fontSize: '1.5rem',
      fontFamily: 'BlinkMacSystemFont,"Helvetica Neue","Roboto",Roboto,Tahoma,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',

    },
    h5: {
      fontWeight: 500,
      fontSize: '1.2rem',
      fontFamily: 'BlinkMacSystemFont,"Helvetica Neue","Roboto",Roboto,Tahoma,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',

    },
    h6: {
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: '1.75',
      fontFamily: 'BlinkMacSystemFont,"Helvetica Neue","Roboto",Roboto,Tahoma,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',

    },
    body2: {
      fontWeight: 600,
      fontSize: '0.9rem',
      lineHeight: '1.45',
      fontFamily:
        '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Tahoma, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',

    },
    body1: {
      fontWeight: 400,
      fontSize: '.88rem',
      lineHeight: '1.45',
      fontFamily: 'BlinkMacSystemFont,"Helvetica Neue","Roboto",Tahoma,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',

    },
    overline: {
      fontWeight: 500
    }
  }
};

const themesOptions = {
  [THEMES.LIGHT]: {
    components: {
      MuiInputBase: {
        styleOverrides: {
          input: {
            '&::placeholder': {
              opacity: 0.86,
              color: '#42526e'
            }
          }
        }
      }
    },
    palette: {
      action: {
        active: '#6b778c'
      },
      background: {
        default: '#f4f5f7',
        paper: '#ffffff'
      },
      error: {
        contrastText: '#ffffff',
        main: '#f44336'
      },
      mode: 'light',
      primary: {
        contrastText: '#ffffff',
        main: '#5664d2',
        light: '#6b76f3'
      },
      success: {
        contrastText: '#ffffff',
        main: '#4caf50'
      },
      info: {
        main: '#0288d1',
        light: '#03a9f4',
        dark: '#01579b',
        contrastText: '#fff'
      },
      text: {
        primary: '#172b4d',
        secondary: '#6b778c'
      },
      warning: {
        main: '#FFB020',
        light: '#FFBF4C',
        dark: '#B27B16',
        contrastText: '#FFFFFF',
      }
    },
    shadows: lightShadows
  },
  [THEMES.DARK]: {
    components: {
      MuiTableCell: {
        styleOverrides: {
          root: {
            borderBottom: '1px solid rgba(145, 158, 171, 0.24)'
          }
        }
      }
    },
    palette: {
      background: {
        default: '#171c24',
        paper: '#222b36'
      },
      divider: 'rgba(145, 158, 171, 0.24)',
      error: {
        contrastText: '#ffffff',
        main: '#f44336'
      },
      mode: 'dark',
      primary: {
        contrastText: '#ffffff',
        main: '#688eff'
      },
      success: {
        contrastText: '#ffffff',
        main: '#4caf50'
      },
      text: {
        primary: '#ffffff',
        secondary: '#919eab'
      },
      info: {
        main: '#29b6f6',
        light: '#4fc3f7',
        dark: '#0288d1',
        contrastText: 'rgba(0, 0, 0, 0.87)'
      },
      warning: {
        main: '#FFB020',
        light: '#FFBF4C',
        dark: '#B27B16',
        contrastText: neutral[900],
      }
    },
    shadows: darkShadows
  },
  [THEMES.NATURE]: {
    components: {
      MuiTableCell: {
        styleOverrides: {
          root: {
            borderBottom: '1px solid rgba(145, 158, 171, 0.24)'
          }
        }
      }
    },
    palette: {
      background: {
        default: '#1c2531',
        paper: '#293142'
      },
      divider: 'rgba(145, 158, 171, 0.24)',
      error: {
        contrastText: '#ffffff',
        main: '#f44336'
      },
      mode: 'dark',
      primary: {
        contrastText: '#ffffff',
        main: '#01ab56'
      },
      success: {
        contrastText: '#ffffff',
        main: '#4caf50'
      },
      text: {
        primary: '#ffffff',
        secondary: '#919eab'
      },
      warning: {
        contrastText: '#ffffff',
        main: '#ff9800'
      }
    },
    shadows: darkShadows
  }
};

export const createTheme = (config = {}) => {
  let themeOptions = themesOptions[config.theme];

  if (!themeOptions) {
    console.warn(new Error(`The theme ${config.theme} is not valid`));
    themeOptions = themesOptions[THEMES.LIGHT];
  }

  let theme = createThemes(deepmerge(merge({}, baseOptions, themeOptions, {
    ...(config.roundedCorners && {
      shape: {
        borderRadius: 16
      }
    })
  }, {
    direction: config.direction
  })));

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};


```
```typescript:src/theme/index.ts
import type { Direction, Theme } from "@mui/material";
import {
  createTheme as createMuiTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import { baseThemeOptions } from "./base-theme-options";
import { darkThemeOptions } from "./dark-theme-options";
import { lightThemeOptions } from "./light-theme-options";
import "./styles.css";

interface Neutral {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

declare module "@mui/material/styles" {
  interface Palette {
    neutral?: Neutral;
  }

  interface PaletteOptions {
    neutral?: Neutral;
  }
}

interface ThemeConfig {
  direction?: Direction;
  responsiveFontSizes?: boolean;
  theme: "light" | "dark";
  lang: string;
}

export const createTheme = (config: ThemeConfig): Theme => {
  let theme = createMuiTheme(
    baseThemeOptions,
    config.theme === "dark" ? darkThemeOptions : lightThemeOptions,
    {
      direction: config.direction,
    }
  );

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};


```
```typescript:src/theme/light-theme-options.ts
import { ThemeOptions } from "@mui/material";

// Colors

const neutral = {
  100: "#F3F4F6",
  200: "#E5E7EB",
  300: "#D1D5DB",
  400: "#9CA3AF",
  500: "#6B7280",
  600: "#4B5563",
  700: "#374151",
  800: "#1F2937",
  900: "#111827",
};

const background = {
  default: "#F9FAFC",
  paper: "#FFFFFF",
};

const divider = "#E6E8F0";

const primary = {
  main: "#5048E5",
  light: "#828DF8",
  dark: "#3832A0",
  contrastText: "#FFFFFF",
};

const secondary = {
  main: "#10B981",
  light: "#3FC79A",
  dark: "#0B815A",
  contrastText: "#FFFFFF",
};

const success = {
  main: "#14B8A6",
  light: "#43C6B7",
  dark: "#0E8074",
  contrastText: "#FFFFFF",
};

const info = {
  main: "#2196F3",
  light: "#64B6F7",
  dark: "#0B79D0",
  contrastText: "#FFFFFF",
};

const warning = {
  main: "#FFB020",
  light: "#FFBF4C",
  dark: "#B27B16",
  contrastText: "#FFFFFF",
};

const error = {
  main: "#D14343",
  light: "#DA6868",
  dark: "#922E2E",
  contrastText: "#FFFFFF",
};

const text = {
  primary: "#101828",
  secondary: "#475467",
  disabled: "rgba(55, 65, 81, 0.48)",
};

export const lightThemeOptions: ThemeOptions = {
  components: {
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: neutral[500],
          color: "#FFFFFF",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          "&.MuiChip-filledDefault": {
            backgroundColor: neutral[200],
            "& .MuiChip-deleteIcon": {
              color: neutral[400],
            },
          },
          "&.MuiChip-outlinedDefault": {
            "& .MuiChip-deleteIcon": {
              color: neutral[300],
            },
          },
        },
      },
    },
    MuiInputBase: {
      defaultProps: {
        // Needed to prevent adding a global style for every input field
        disableInjectingGlobalStyles: true,
      },
      styleOverrides: {
        input: {
          "&::placeholder": {
            opacity: 1,
            color: text.secondary,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: divider,
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderColor: divider,
          borderStyle: "solid",
          borderWidth: 1,
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          borderColor: divider,
          borderStyle: "solid",
          borderWidth: 1,
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          color: neutral[500],
        },
        track: {
          backgroundColor: neutral[400],
          opacity: 1,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${divider}`,
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: neutral[100],
          ".MuiTableCell-root": {
            color: neutral[700],
          },
        },
      },
    },
  },
  palette: {
    action: {
      active: neutral[500],
      focus: "rgba(55, 65, 81, 0.12)",
      hover: "rgba(55, 65, 81, 0.04)",
      selected: "rgba(55, 65, 81, 0.08)",
      disabledBackground: "rgba(55, 65, 81, 0.12)",
      disabled: "rgba(55, 65, 81, 0.26)",
    },
    background,
    divider,
    error,
    info,
    mode: "light",
    neutral,
    primary,
    secondary,
    success,
    text,
    warning,
  },
  shadows: [
    "none",
    "0px 1px 1px rgba(100, 116, 139, 0.06), 0px 1px 2px rgba(100, 116, 139, 0.1)",
    "0px 1px 2px rgba(100, 116, 139, 0.12)",
    "0px 1px 4px rgba(100, 116, 139, 0.12)",
    "0px 1px 5px rgba(100, 116, 139, 0.12)",
    "0px 1px 6px rgba(100, 116, 139, 0.12)",
    "0px 2px 6px rgba(100, 116, 139, 0.12)",
    "0px 3px 6px rgba(100, 116, 139, 0.12)",
    "0px 2px 4px rgba(31, 41, 55, 0.06), 0px 4px 6px rgba(100, 116, 139, 0.12)",
    "0px 5px 12px rgba(100, 116, 139, 0.12)",
    "0px 5px 14px rgba(100, 116, 139, 0.12)",
    "0px 5px 15px rgba(100, 116, 139, 0.12)",
    "0px 6px 15px rgba(100, 116, 139, 0.12)",
    "0px 7px 15px rgba(100, 116, 139, 0.12)",
    "0px 8px 15px rgba(100, 116, 139, 0.12)",
    "0px 9px 15px rgba(100, 116, 139, 0.12)",
    "0px 10px 15px rgba(100, 116, 139, 0.12)",
    "0px 12px 22px -8px rgba(100, 116, 139, 0.25)",
    "0px 13px 22px -8px rgba(100, 116, 139, 0.25)",
    "0px 14px 24px -8px rgba(100, 116, 139, 0.25)",
    "0px 10px 10px rgba(31, 41, 55, 0.04), 0px 20px 25px rgba(31, 41, 55, 0.1)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
  ],
};


```
```css:src/theme/styles.css
.grecaptcha-badge {
  visibility: hidden;
}
a {
  color: #7350ff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

:target {
  scroll-margin-top: 76px;
}


```
```typescript:src/theme/base-theme-options.ts
import { ThemeOptions } from "@mui/material";

export const baseThemeOptions: ThemeOptions = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1200,
      xl: 1920,
    },
  },
  components: {
    MuiAvatar: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 600,
          letterSpacing: 0,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          ":focus": {
            boxShadow: `#3FC79A 0 0 0 0.2rem`,
          },
        },

        sizeSmall: {
          padding: "6px 16px",
        },
        sizeMedium: {
          padding: "8px 20px",
        },
        sizeLarge: {
          padding: "11px 24px",
        },
        textSizeSmall: {
          padding: "7px 12px",
        },
        textSizeMedium: {
          padding: "9px 16px",
        },
        textSizeLarge: {
          padding: "12px 16px",
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: "16px 24px",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "32px 24px",
          "&:last-child": {
            paddingBottom: "32px",
          },
        },
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: {
          variant: "h6",
        },
        subheaderTypographyProps: {
          variant: "body2",
        },
      },
      styleOverrides: {
        root: {
          padding: "32px 24px",
        },
      },
    },
    MuiCheckbox: {
      defaultProps: {
        color: "primary",
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          boxSizing: "border-box",
        },
        html: {
          MozOsxFontSmoothing: "grayscale",
          WebkitFontSmoothing: "antialiased",
          display: "flex",
          flexDirection: "column",
          minHeight: "100%",
          width: "100%",
        },
        body: {
          display: "flex",
          flex: "1 1 auto",
          flexDirection: "column",
          minHeight: "100%",
          width: "100%",
        },
        "#__next": {
          display: "flex",
          flex: "1 1 auto",
          flexDirection: "column",
          height: "100%",
          width: "100%",
        },
        "#nprogress": {
          pointerEvents: "none",
        },
        "#nprogress .bar": {
          backgroundColor: "#5048E5",
          height: 3,
          left: 0,
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 2000,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: 8,
        },
        sizeSmall: {
          padding: 4,
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 3,
          overflow: "hidden",
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: "hover",
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          marginRight: "2px",
          "&.MuiListItemIcon-root": {
            minWidth: "unset",
          },
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          "&.MuiListItem-root": {
            paddingLeft: "10px",
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          paddingLeft: "20px",
        },
        dense: {
          paddingLeft: "24px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          fontWeight: 500,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiPopover: {
      defaultProps: {
        elevation: 16,
      },
    },
    MuiRadio: {
      defaultProps: {
        color: "primary",
      },
    },
    MuiSwitch: {
      defaultProps: {
        color: "primary",
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 500,
          lineHeight: 1.71,
          minWidth: "auto",
          paddingLeft: 0,
          paddingRight: 0,
          textTransform: "none",
          "& + &": {
            marginLeft: 24,
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: "15px 16px",
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          borderBottom: "none",
          "& .MuiTableCell-root": {
            borderBottom: "none",
            fontSize: "12px",
            fontWeight: 600,
            lineHeight: 1,
            letterSpacing: 0.5,
            textTransform: "uppercase",
          },
          "& .MuiTableCell-paddingCheckbox": {
            paddingTop: 4,
            paddingBottom: 4,
          },
        },
      },
    },
  },
  direction: "ltr",
  shape: {
    borderRadius: 8,
  },
  typography: {
    button: {
      fontWeight: 600,
    },
    fontFamily:
      '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.57,
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight: 1.75,
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: 1.57,
    },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 600,
      letterSpacing: "0.5px",
      lineHeight: 2.5,
      textTransform: "uppercase",
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: 1.66,
    },
    h1: {
      fontWeight: 700,
      fontSize: "2.5rem",
      lineHeight: 1.375,
    },
    h2: {
      fontWeight: 700,
      fontSize: "2rem",
      lineHeight: 1.375,
    },
    h3: {
      fontWeight: 700,
      fontSize: "1.8rem",
      lineHeight: 1.375,
    },
    h4: {
      fontWeight: 700,
      fontSize: "1.6rem",
      lineHeight: 1.275,
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.2rem",
      lineHeight: 1.275,
    },
    h6: {
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: 1.375,
    },
  },
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },
};


```
```typescript:src/theme/typography.tsx
export default {
  fontFamily: [
    "Roboto",
    "Tahoma",
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "DM Sans",
    '"Helvetica Neue"',
    "Inter",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  fontSize: 13,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontWeight: 500,
    fontSize: 35,
    letterSpacing: "-0.24px",
  },
  h2: {
    fontWeight: 500,
    fontSize: 29,
    letterSpacing: "-0.24px",
  },
  h3: {
    fontWeight: 500,
    fontSize: 24,
    letterSpacing: "-0.06px",
  },
  h4: {
    fontWeight: 500,
    fontSize: 20,
    letterSpacing: "-0.06px",
  },
  h5: {
    fontWeight: 500,
    fontSize: 16,
    letterSpacing: "-0.05px",
  },
  h6: {
    fontWeight: 500,
    fontSize: 14,
    letterSpacing: "-0.05px",
  },
  overline: {
    fontWeight: 500,
  },
};


```
```typescript:src/theme/dark-theme-options.ts
import { ThemeOptions } from "@mui/material";

// Colors

const neutral = {
  100: "#F3F4F6",
  200: "#E5E7EB",
  300: "#D1D5DB",
  400: "#9CA3AF",
  500: "#6B7280",
  600: "#4B5563",
  700: "#374151",
  800: "#1F2937",
  900: "#111827",
};

const background = {
  default: "#0B0F19",
  paper: neutral[900],
};

const divider = "#2D3748";

const primary = {
  main: "#7582EB",
  light: "#909BEF",
  dark: "#515BA4",
  contrastText: neutral[900],
};

const secondary = {
  main: "#10B981",
  light: "#3FC79A",
  dark: "#0B815A",
  contrastText: neutral[900],
};

const success = {
  main: "#14B8A6",
  light: "#43C6B7",
  dark: "#0E8074",
  contrastText: neutral[900],
};

const info = {
  main: "#2196F3",
  light: "#64B6F7",
  dark: "#0B79D0",
  contrastText: neutral[900],
};

const warning = {
  main: "#FFB020",
  light: "#FFBF4C",
  dark: "#B27B16",
  contrastText: neutral[900],
};

const error = {
  main: "#D14343",
  light: "#DA6868",
  dark: "#922E2E",
  contrastText: neutral[900],
};

const text = {
  primary: "#AEAFB0",
  secondary: "#A0AEC0",
  disabled: "rgba(255, 255, 255, 0.48)",
};

export const darkThemeOptions: ThemeOptions = {
  components: {
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: neutral[500],
          color: "#FFFFFF",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          "&.MuiChip-filledDefault": {
            backgroundColor: neutral[800],
            "& .MuiChip-deleteIcon": {
              color: neutral[500],
            },
          },
          "&.MuiChip-outlinedDefault": {
            borderColor: neutral[700],
            "& .MuiChip-deleteIcon": {
              color: neutral[700],
            },
          },
        },
      },
    },
    MuiInputBase: {
      defaultProps: {
        // Needed to prevent adding a global style for every input field
        disableInjectingGlobalStyles: true,
      },
      styleOverrides: {
        input: {
          "&::placeholder": {
            opacity: 1,
            color: text.secondary,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: divider,
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderColor: divider,
          borderStyle: "solid",
          borderWidth: 1,
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          borderColor: divider,
          borderStyle: "solid",
          borderWidth: 1,
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          color: neutral[700],
        },
        track: {
          backgroundColor: neutral[500],
          opacity: 1,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${divider}`,
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: neutral[800],
          ".MuiTableCell-root": {
            color: neutral[300],
          },
        },
      },
    },
  },
  palette: {
    action: {
      active: neutral[400],
      hover: "rgba(255, 255, 255, 0.04)",
      selected: "rgba(255, 255, 255, 0.08)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabled: "rgba(255, 255, 255, 0.26)",
    },
    background,
    divider,
    error,
    info,
    mode: "dark",
    neutral,
    primary,
    secondary,
    success,
    text,
    warning,
  },
  shadows: [
    "none",
    "0px 1px 2px rgba(0, 0, 0, 0.24)",
    "0px 1px 2px rgba(0, 0, 0, 0.24)",
    "0px 1px 4px rgba(0, 0, 0, 0.24)",
    "0px 1px 5px rgba(0, 0, 0, 0.24)",
    "0px 1px 6px rgba(0, 0, 0, 0.24)",
    "0px 2px 6px rgba(0, 0, 0, 0.24)",
    "0px 3px 6px rgba(0, 0, 0, 0.24)",
    "0px 4px 6px rgba(0, 0, 0, 0.24)",
    "0px 5px 12px rgba(0, 0, 0, 0.24)",
    "0px 5px 14px rgba(0, 0, 0, 0.24)",
    "0px 5px 15px rgba(0, 0, 0, 0.24)",
    "0px 6px 15px rgba(0, 0, 0, 0.24)",
    "0px 7px 15px rgba(0, 0, 0, 0.24)",
    "0px 8px 15px rgba(0, 0, 0, 0.24)",
    "0px 9px 15px rgba(0, 0, 0, 0.24)",
    "0px 10px 15px rgba(0, 0, 0, 0.24)",
    "0px 12px 22px -8px rgba(0, 0, 0, 0.24)",
    "0px 13px 22px -8px rgba(0, 0, 0, 0.24)",
    "0px 14px 24px -8px rgba(0, 0, 0, 0.24)",
    "0px 20px 25px rgba(0, 0, 0, 0.24)",
    "0px 25px 50px rgba(0, 0, 0, 0.24)",
    "0px 25px 50px rgba(0, 0, 0, 0.24)",
    "0px 25px 50px rgba(0, 0, 0, 0.24)",
    "0px 25px 50px rgba(0, 0, 0, 0.24)",
  ],
};


```
```javascript:src/theme/shadows.js
export const lightShadows = [
  "none",
  "0px 1px 2px rgba(0, 0, 0, 0.12), 0px 0px 0px 1px rgba(0, 0, 0, 0.05)",
  "0px 2px 4px rgba(0, 0, 0, 0.15), 0px 0px 0px 1px rgba(0, 0, 0, 0.05)",
  "0 0 1px 0 rgba(0,0,0,0.31), 0 3px 4px -2px rgba(0,0,0,0.25)",
  "0 0 1px 0 rgba(0,0,0,0.31), 0 3px 4px -2px rgba(0,0,0,0.25)",
  "0 0 1px 0 rgba(0,0,0,0.31), 0 4px 6px -2px rgba(0,0,0,0.25)",
  "0 0 1px 0 rgba(0,0,0,0.31), 0 4px 6px -2px rgba(0,0,0,0.25)",
  "0 0 1px 0 rgba(0,0,0,0.31), 0 4px 8px -2px rgba(0,0,0,0.25)",
  "0 0 1px 0 rgba(0,0,0,0.31), 0 5px 8px -2px rgba(0,0,0,0.25)",
  "0 0 1px 0 rgba(0,0,0,0.31), 0 6px 12px -4px rgba(0,0,0,0.25)",
  "0 0 1px 0 rgba(0,0,0,0.31), 0 7px 12px -4px rgba(0,0,0,0.25)",
  "0 0 1px 0 rgba(0,0,0,0.31), 0 6px 16px -4px rgba(0,0,0,0.25)",
  "0 0 1px 0 rgba(0,0,0,0.31), 0 7px 16px -4px rgba(0,0,0,0.25)",
  "0 0 1px 0 rgba(0,0,0,0.31), 0 8px 18px -8px rgba(0,0,0,0.25)",
  "0 0 1px 0 rgba(0,0,0,0.31), 0 9px 18px -8px rgba(0,0,0,0.25)",
  "0 0 1px 0 rgba(0,0,0,0.31), 0 10px 20px -8px rgba(0,0,0,0.25)",
  "0 0 1px 0 rgba(0,0,0,0.31), 0 11px 20px -8px rgba(0,0,0,0.25)",
  "0 0 1px 0 rgba(0,0,0,0.31), 0 12px 22px -8px rgba(0,0,0,0.25)",
  "0 0 1px 0 rgba(0,0,0,0.31), 0 13px 22px -8px rgba(0,0,0,0.25)",
  "0 0 1px 0 rgba(0,0,0,0.31), 0 14px 24px -8px rgba(0,0,0,0.25)",
  "0 0 1px 0 rgba(0,0,0,0.31), 0 16px 28px -8px rgba(0,0,0,0.25)",
  "0 0 1px 0 rgba(0,0,0,0.31), 0 18px 30px -8px rgba(0,0,0,0.25)",
  "0 0 1px 0 rgba(0,0,0,0.31), 0 20px 32px -8px rgba(0,0,0,0.25)",
  "0 0 1px 0 rgba(0,0,0,0.31), 0 22px 34px -8px rgba(0,0,0,0.25)",
  "0 0 1px 0 rgba(0,0,0,0.31), 0 24px 36px -8px rgba(0,0,0,0.25)",
];

export const darkShadows = [
  "none",
  "0 0 1px 0 rgba(0,0,0,0.70), 0 3px 4px -2px rgba(0,0,0,0.50)",
  "0 0 1px 0 rgba(0,0,0,0.70), 0 2px 2px -2px rgba(0,0,0,0.50)",
  "0 0 1px 0 rgba(0,0,0,0.70), 0 3px 4px -2px rgba(0,0,0,0.50)",
  "0 0 1px 0 rgba(0,0,0,0.70), 0 3px 4px -2px rgba(0,0,0,0.50)",
  "0 0 1px 0 rgba(0,0,0,0.70), 0 4px 6px -2px rgba(0,0,0,0.50)",
  "0 0 1px 0 rgba(0,0,0,0.70), 0 4px 6px -2px rgba(0,0,0,0.50)",
  "0 0 1px 0 rgba(0,0,0,0.70), 0 4px 8px -2px rgba(0,0,0,0.50)",
  "0 0 1px 0 rgba(0,0,0,0.70), 0 5px 8px -2px rgba(0,0,0,0.50)",
  "0 0 1px 0 rgba(0,0,0,0.70), 0 6px 12px -4px rgba(0,0,0,0.50)",
  "0 0 1px 0 rgba(0,0,0,0.70), 0 7px 12px -4px rgba(0,0,0,0.50)",
  "0 0 1px 0 rgba(0,0,0,0.70), 0 6px 16px -4px rgba(0,0,0,0.50)",
  "0 0 1px 0 rgba(0,0,0,0.70), 0 7px 16px -4px rgba(0,0,0,0.50)",
  "0 0 1px 0 rgba(0,0,0,0.70), 0 8px 18px -8px rgba(0,0,0,0.50)",
  "0 0 1px 0 rgba(0,0,0,0.70), 0 9px 18px -8px rgba(0,0,0,0.50)",
  "0 0 1px 0 rgba(0,0,0,0.70), 0 10px 20px -8px rgba(0,0,0,0.50)",
  "0 0 1px 0 rgba(0,0,0,0.70), 0 11px 20px -8px rgba(0,0,0,0.50)",
  "0 0 1px 0 rgba(0,0,0,0.70), 0 12px 22px -8px rgba(0,0,0,0.50)",
  "0 0 1px 0 rgba(0,0,0,0.70), 0 13px 22px -8px rgba(0,0,0,0.50)",
  "0 0 1px 0 rgba(0,0,0,0.70), 0 14px 24px -8px rgba(0,0,0,0.50)",
  "0 0 1px 0 rgba(0,0,0,0.70), 0 16px 28px -8px rgba(0,0,0,0.50)",
  "0 0 1px 0 rgba(0,0,0,0.70), 0 18px 30px -8px rgba(0,0,0,0.50)",
  "0 0 1px 0 rgba(0,0,0,0.70), 0 20px 32px -8px rgba(0,0,0,0.50)",
  "0 0 1px 0 rgba(0,0,0,0.70), 0 22px 34px -8px rgba(0,0,0,0.50)",
  "0 0 1px 0 rgba(0,0,0,0.70), 0 24px 36px -8px rgba(0,0,0,0.50)",
];

export const lightShadows2 = [
  "none",
  "0px 2px 1px -1px rgba(145, 158, 171, 0.2),0px 1px 1px 0px rgba(145, 158, 171, 0.14),0px 1px 3px 0px rgba(145, 158, 171, 0.12)",
  "0px 3px 1px -2px rgba(145, 158, 171, 0.2),0px 2px 2px 0px rgba(145, 158, 171, 0.14),0px 1px 5px 0px rgba(145, 158, 171, 0.12)",
  "0px 3px 3px -2px rgba(145, 158, 171, 0.2),0px 3px 4px 0px rgba(145, 158, 171, 0.14),0px 1px 8px 0px rgba(145, 158, 171, 0.12)",
  "0px 2px 4px -1px rgba(145, 158, 171, 0.2),0px 4px 5px 0px rgba(145, 158, 171, 0.14),0px 1px 10px 0px rgba(145, 158, 171, 0.12)",
  "0px 3px 5px -1px rgba(145, 158, 171, 0.2),0px 5px 8px 0px rgba(145, 158, 171, 0.14),0px 1px 14px 0px rgba(145, 158, 171, 0.12)",
  "0px 3px 5px -1px rgba(145, 158, 171, 0.2),0px 6px 10px 0px rgba(145, 158, 171, 0.14),0px 1px 18px 0px rgba(145, 158, 171, 0.12)",
  "0px 4px 5px -2px rgba(145, 158, 171, 0.2),0px 7px 10px 1px rgba(145, 158, 171, 0.14),0px 2px 16px 1px rgba(145, 158, 171, 0.12)",
  "0px 5px 5px -3px rgba(145, 158, 171, 0.2),0px 8px 10px 1px rgba(145, 158, 171, 0.14),0px 3px 14px 2px rgba(145, 158, 171, 0.12)",
  "0px 5px 6px -3px rgba(145, 158, 171, 0.2),0px 9px 12px 1px rgba(145, 158, 171, 0.14),0px 3px 16px 2px rgba(145, 158, 171, 0.12)",
  "0px 6px 6px -3px rgba(145, 158, 171, 0.2),0px 10px 14px 1px rgba(145, 158, 171, 0.14),0px 4px 18px 3px rgba(145, 158, 171, 0.12)",
  "0px 6px 7px -4px rgba(145, 158, 171, 0.2),0px 11px 15px 1px rgba(145, 158, 171, 0.14),0px 4px 20px 3px rgba(145, 158, 171, 0.12)",
  "0px 7px 8px -4px rgba(145, 158, 171, 0.2),0px 12px 17px 2px rgba(145, 158, 171, 0.14),0px 5px 22px 4px rgba(145, 158, 171, 0.12)",
  "0px 7px 8px -4px rgba(145, 158, 171, 0.2),0px 13px 19px 2px rgba(145, 158, 171, 0.14),0px 5px 24px 4px rgba(145, 158, 171, 0.12)",
  "0px 7px 9px -4px rgba(145, 158, 171, 0.2),0px 14px 21px 2px rgba(145, 158, 171, 0.14),0px 5px 26px 4px rgba(145, 158, 171, 0.12)",
  "0px 8px 9px -5px rgba(145, 158, 171, 0.2),0px 15px 22px 2px rgba(145, 158, 171, 0.14),0px 6px 28px 5px rgba(145, 158, 171, 0.12)",
  "0px 8px 10px -5px rgba(145, 158, 171, 0.2),0px 16px 24px 2px rgba(145, 158, 171, 0.14),0px 6px 30px 5px rgba(145, 158, 171, 0.12)",
  "0px 8px 11px -5px rgba(145, 158, 171, 0.2),0px 17px 26px 2px rgba(145, 158, 171, 0.14),0px 6px 32px 5px rgba(145, 158, 171, 0.12)",
  "0px 9px 11px -5px rgba(145, 158, 171, 0.2),0px 18px 28px 2px rgba(145, 158, 171, 0.14),0px 7px 34px 6px rgba(145, 158, 171, 0.12)",
  "0px 9px 12px -6px rgba(145, 158, 171, 0.2),0px 19px 29px 2px rgba(145, 158, 171, 0.14),0px 7px 36px 6px rgba(145, 158, 171, 0.12)",
  "0px 10px 13px -6px rgba(145, 158, 171, 0.2),0px 20px 31px 3px rgba(145, 158, 171, 0.14),0px 8px 38px 7px rgba(145, 158, 171, 0.12)",
  "0px 10px 13px -6px rgba(145, 158, 171, 0.2),0px 21px 33px 3px rgba(145, 158, 171, 0.14),0px 8px 40px 7px rgba(145, 158, 171, 0.12)",
  "0px 10px 14px -6px rgba(145, 158, 171, 0.2),0px 22px 35px 3px rgba(145, 158, 171, 0.14),0px 8px 42px 7px rgba(145, 158, 171, 0.12)",
  "0px 11px 14px -7px rgba(145, 158, 171, 0.2),0px 23px 36px 3px rgba(145, 158, 171, 0.14),0px 9px 44px 8px rgba(145, 158, 171, 0.12)",
  "0px 11px 15px -7px rgba(145, 158, 171, 0.2),0px 24px 38px 3px rgba(145, 158, 171, 0.14),0px 9px 46px 8px rgba(145, 158, 171, 0.12)",
];

export const darkShadows2 = [
  "none",
  "0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0, 0, 0, 0.12)",
  "0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
  "0px 3px 3px -2px rgba(0, 0, 0, 0.2),0px 3px 4px 0px rgba(0, 0, 0, 0.14),0px 1px 8px 0px rgba(0, 0, 0, 0.12)",
  "0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
  "0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 5px 8px 0px rgba(0, 0, 0, 0.14),0px 1px 14px 0px rgba(0, 0, 0, 0.12)",
  "0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
  "0px 4px 5px -2px rgba(0, 0, 0, 0.2),0px 7px 10px 1px rgba(0, 0, 0, 0.14),0px 2px 16px 1px rgba(0, 0, 0, 0.12)",
  "0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0, 0, 0, 0.12)",
  "0px 5px 6px -3px rgba(0, 0, 0, 0.2),0px 9px 12px 1px rgba(0, 0, 0, 0.14),0px 3px 16px 2px rgba(0, 0, 0, 0.12)",
  "0px 6px 6px -3px rgba(0, 0, 0, 0.2),0px 10px 14px 1px rgba(0, 0, 0, 0.14),0px 4px 18px 3px rgba(0, 0, 0, 0.12)",
  "0px 6px 7px -4px rgba(0, 0, 0, 0.2),0px 11px 15px 1px rgba(0, 0, 0, 0.14),0px 4px 20px 3px rgba(0, 0, 0, 0.12)",
  "0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 12px 17px 2px rgba(0, 0, 0, 0.14),0px 5px 22px 4px rgba(0, 0, 0, 0.12)",
  "0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 13px 19px 2px rgba(0, 0, 0, 0.14),0px 5px 24px 4px rgba(0, 0, 0, 0.12)",
  "0px 7px 9px -4px rgba(0, 0, 0, 0.2),0px 14px 21px 2px rgba(0, 0, 0, 0.14),0px 5px 26px 4px rgba(0, 0, 0, 0.12)",
  "0px 8px 9px -5px rgba(0, 0, 0, 0.2),0px 15px 22px 2px rgba(0, 0, 0, 0.14),0px 6px 28px 5px rgba(0, 0, 0, 0.12)",
  "0px 8px 10px -5px rgba(0, 0, 0, 0.2),0px 16px 24px 2px rgba(0, 0, 0, 0.14),0px 6px 30px 5px rgba(0, 0, 0, 0.12)",
  "0px 8px 11px -5px rgba(0, 0, 0, 0.2),0px 17px 26px 2px rgba(0, 0, 0, 0.14),0px 6px 32px 5px rgba(0, 0, 0, 0.12)",
  "0px 9px 11px -5px rgba(0, 0, 0, 0.2),0px 18px 28px 2px rgba(0, 0, 0, 0.14),0px 7px 34px 6px rgba(0, 0, 0, 0.12)",
  "0px 9px 12px -6px rgba(0, 0, 0, 0.2),0px 19px 29px 2px rgba(0, 0, 0, 0.14),0px 7px 36px 6px rgba(0, 0, 0, 0.12)",
  "0px 10px 13px -6px rgba(0, 0, 0, 0.2),0px 20px 31px 3px rgba(0, 0, 0, 0.14),0px 8px 38px 7px rgba(0, 0, 0, 0.12)",
  "0px 10px 13px -6px rgba(0, 0, 0, 0.2),0px 21px 33px 3px rgba(0, 0, 0, 0.14),0px 8px 40px 7px rgba(0, 0, 0, 0.12)",
  "0px 10px 14px -6px rgba(0, 0, 0, 0.2),0px 22px 35px 3px rgba(0, 0, 0, 0.14),0px 8px 42px 7px rgba(0, 0, 0, 0.12)",
  "0px 11px 14px -7px rgba(0, 0, 0, 0.2),0px 23px 36px 3px rgba(0, 0, 0, 0.14),0px 9px 44px 8px rgba(0, 0, 0, 0.12)",
  "0px 11px 15px -7px rgba(0, 0, 0, 0.2),0px 24px 38px 3px rgba(0, 0, 0, 0.14),0px 9px 46px 8px rgba(0, 0, 0, 0.12)",
];


```
```typescript:src/components/Link.tsx
import * as React from "react";
import MuiLink from "@mui/material/Link";
import { Link as GatsbyLink } from "gatsby";
import { styled } from "@mui/material/styles";

const CustomLink = styled(MuiLink)(({ theme }) => ({
  color: theme.palette.primary.main,
  borderBottom: `1px solid ${theme.palette.primary.main}`,
  textDecoration: "none",
  "&:hover": {
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    textDecoration: "none",
  },
  "&:focus": {
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    textDecoration: "none",
  },
}));

function Link(props, ref) {
  return <CustomLink component={GatsbyLink} ref={ref} {...props} />;
}
const AccessibleLink = React.forwardRef(Link);

export default AccessibleLink;


```
```typescript:src/components/ListCatChild.tsx
import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { Link } from "gatsby";

interface listProps {
  dirList: string;
  formattedId: string;
  children: React.ReactNode; // Changed from string to React.ReactNode
}


const ListCatChild = (props: listProps) => {
  let selectedList = (url: string) => {
    if (url == window.location.pathname) {
      return true;
    } else {
      return false;
    }
  };

  const dirListName = props.dirList;
  const formattedIdList = props.formattedId;
  return (
    <>
      <Tooltip title={formattedIdList} placement='right-start'>
        <Link
          style={{
            textDecoration: "none",
          }}
          to={dirListName}
        >
          <ListItem
            button
            selected={selectedList(dirListName)}
            sx={{
              paddingLeft: 4,
              ...(selectedList(dirListName) && {
                color: "primary.main",
                "& svg": {
                  color: "primary.main",
                },
              }),
            }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>{props.children}</ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: ".8rem",
                    lineHeight: "1.9",
                    fontFamily:
                      'BlinkMacSystemFont,"Helvetica Neue","Roboto",Roboto,Tahoma,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
                  }}
                  color='primary'
                  variant='body1'
                >
                  {formattedIdList}
                </Typography>
              }
            />
          </ListItem>
        </Link>
      </Tooltip>
    </>
  );
};

export default ListCatChild;


```
```typescript:src/components/Avatar.tsx
import React, { useContext } from "react";
import AppContext from "../contexts/AppContext";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { navigate } from "gatsby";

function UserAvatar({ handleClick }) {
  const { userInfo, checkUser } = useContext(AppContext);
  const redirect = () => {
    navigate("https://speech.maila.ai/auth/login");
  };

  if (
    !userInfo ||
    userInfo == null ||
    userInfo === "The user is not authenticated"
  ) {
    return (
      <>
        <Button
          sx={{
            mx: 1,
            textTransform: "none",
          }}
          href='https://speech.maila.ai'
          onClick={redirect}
          size='small'
          variant='contained'
          aria-label='login'
        >
          <Typography
            variant='body2'
            sx={{
              color: "white",
            }}
          >
            Login
          </Typography>
        </Button>
      </>
    );
  } else {
    return (
      <>
        <Avatar
          sx={{
            color: (theme) => theme.palette.text.secondary,
            backgroundColor: (theme) => theme.palette.background.default,
            border: (theme) => `2px solid ${theme.palette.divider}`,
          }}
          onClick={handleClick}
        >
          {userInfo.attributes.email[0].toUpperCase()}
        </Avatar>
      </>
    );
  }
}

export default UserAvatar;


```
```typescript:src/components/listItems.tsx
import React from 'react';
import { List, Collapse, ListItem, ListItemIcon, Tooltip } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { FormattedMessage } from "react-intl";
import ListCatChild from './ListCatChild';
import ListItemTextParent from './ListItemTextParent';
import useToolsProducts from "../hooks/useToolsProducts";
import useSettings from "../hooks/useSettings";
import IconsList from './icons';
import { EmailOpen, CopyWritingIcon, WritingToolsIcon, AddBlog } from "../icons/Icons";

// Define interfaces
interface Product {
  slug: string;
  url: string;
  title: string;
  icon: string;
}

interface Category {
  id: string;
  Icon: React.ComponentType;
}

interface CategoryState {
  [key: string]: boolean;
}

interface CategoryAction {
  type: string;
}

interface CategorySectionProps {
  category: string;
  state: CategoryState;
  dispatch: React.Dispatch<CategoryAction>;
  items: Product[];
}

// Category types and their initial states
const categories: Record<string, Category> = {
  email: { id: 'ET01', Icon: EmailOpen },
  copywriting: { id: 'CT01', Icon: CopyWritingIcon },
  writing: { id: 'WT01', Icon: WritingToolsIcon },
  blog: { id: 'BT02', Icon: AddBlog }
};

const initialState: CategoryState = Object.keys(categories).reduce((acc, key) => ({
  ...acc,
  [key]: false
}), {});

// Simple toggle reducer
const reducer = (state: CategoryState, action: CategoryAction): CategoryState => ({
  ...state,
  [action.type]: !state[action.type]
});

// Category section component
const CategorySection: React.FC<CategorySectionProps> = ({ category, state, dispatch, items }) => (
  <>
    <Tooltip title={<FormattedMessage id={categories[category].id} />} 
             placement='right-start' 
             disableFocusListener 
             disableInteractive>
      <ListItem 
        sx={{ color: 'text.secondary' }} 
        button 
        onClick={() => dispatch({ type: category })}>
        <ListItemIcon>
          {React.createElement(categories[category].Icon)}
        </ListItemIcon>
        <ListItemTextParent primary={<FormattedMessage id={categories[category].id} />} />
        {state[category] ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
    </Tooltip>
    <Collapse in={state[category]} timeout="auto" unmountOnExit>
      <List dense>
        {items.map((item, index) => (
          <ListCatChild 
            key={index} 
            dirList={item.url} 
            formattedId={item.title}>
            <IconsList type={item.icon} />
          </ListCatChild>
        ))}
      </List>
    </Collapse>
  </>
);

const ListSidebar: React.FC = () => {
  const useTools = useToolsProducts();
  const { settings } = useSettings();
  const [state, dispatch] = React.useReducer(reducer, initialState);

  // Get products by language
  const products: Product[] = useTools[settings.lang].edges.map(
    (item: any) => item.node.frontmatter
  );

  // Group products by category
  const productsByCategory: Record<string, Product[]> = {
    blog: products.filter(item => item.slug.split("/")[3] === "blog"),
    copywriting: products.filter(item => item.slug.split("/")[3] === "copywriting"),
    email: products.filter(item => item.slug.split("/")[3] === "email"),
    writing: products.filter(item => item.slug.split("/")[3] === "writing")
  };

  return (
    <List sx={{
      width: '100%',
      maxWidth: 360,
      bgcolor: 'background.paper',
      overflowY: 'auto',
      overflowX: "clip"
    }} dense>
      {Object.keys(categories).map(category => (
        <CategorySection
          key={category}
          category={category}
          state={state}
          dispatch={dispatch}
          items={productsByCategory[category]}
        />
      ))}
    </List>
  );
};

export default ListSidebar;


```
```typescript:src/components/SignIn.tsx
import React, { useState } from "react";
import Login from "../pages/auth/login";

const SignIn = (props) => {
  const [isMount, setMount] = useState(false);
  React.useEffect(() => {
    setMount(true);
  }, []);

  if (!isMount) {
    return <div>loading...</div>;
  }

  return <Login {...props} />;
};
export default SignIn;


```
```typescript:src/components/SettingsButton.tsx
import React from "react";
import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import SettingsDrawer from "./settings-drawer";

export type langProps = {
  langKey: string;
  link: string;
  selected: boolean;
};
interface SettingsButtonProps {
  langs?: langProps[];
  langKey?: string;
}

export const SettingsButton = ({ langs, langKey }: SettingsButtonProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <>
      <Tooltip title='Settings'>
        <IconButton
          onClick={handleOpen}
          size='small'
          sx={{
            mx: 1,
            p: 1,
            zIndex: 1900,
            backgroundColor: (theme) => theme.palette.background.default,
            "&:hover": {
              backgroundColor: (theme) => theme.palette.divider,
            },
          }}
        >
          <SettingsIcon />
        </IconButton>
      </Tooltip>
      <SettingsDrawer onClose={handleClose} open={open} langs={langs} langKey={langKey} />
    </>
  );
};

```
```typescript:src/components/severity-pill.tsx
import type { FC, ReactNode } from "react";
import PropTypes from "prop-types";
import React from "react";
import type { Theme } from "@mui/material";
import { styled } from "@mui/material/styles";
import type { SxProps } from "@mui/system";

export type SeverityPillColor =
  | "primary"
  | "secondary"
  | "error"
  | "info"
  | "warning"
  | "success";

interface SeverityPillProps {
  children?: ReactNode;
  color?: SeverityPillColor;
  style?: {};
  sx?: SxProps<Theme>;
}

interface SeverityPillRootProps {
  ownerState: {
    color: SeverityPillColor;
  };
}

const SeverityPillRoot = styled("span")<SeverityPillRootProps>(
  ({ theme, ownerState }) => {
    const backgroundColor = theme.palette[ownerState.color].main;
    const color = theme.palette[ownerState.color].contrastText;

    return {
      alignItems: "center",
      backgroundColor,
      borderRadius: 6,
      color,
      cursor: "default",
      display: "inline-flex",
      flexGrow: 0,
      flexShrink: 0,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(10),
      lineHeight: 2,
      fontWeight: 600,
      justifyContent: "center",
      minWidth: 10,
      paddingLeft: theme.spacing(0.5),
      paddingRight: theme.spacing(0.5),
      textTransform: "uppercase",
      whiteSpace: "nowrap",
    };
  }
);

export const SeverityPill: FC<SeverityPillProps> = (props) => {
  const { color = "primary", children, ...other } = props;

  const ownerState = { color };

  return (
    <SeverityPillRoot ownerState={ownerState} {...other}>
      {children}
    </SeverityPillRoot>
  );
};

SeverityPill.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "error",
    "info",
    "warning",
    "success",
  ]),
};


```
```typescript:src/components/nounderline-link.tsx
import * as React from "react";
import MuiLink from "@mui/material/Link";
import { Link as GatsbyLink } from "gatsby";
import { styled } from "@mui/material/styles";

const NoUnderLine = styled(MuiLink)(({ theme }) => ({
  textDecoration: "none",
  "&:hover": {
    color: `${theme.palette.primary.main}`,
  },
}));

function Link(props, ref) {
  return <NoUnderLine component={GatsbyLink} ref={ref} {...props} />;
}
const NoUnderLineLink = React.forwardRef(Link);

export default NoUnderLineLink;


```
```typescript:src/components/editor-manage.tsx
import React, { useState } from "react";
import ProductDescription, {
  ProductGenerationProps,
} from "./editors/ProductDescription";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
/**
 * @description EditorManage is a tab component used to wrap around product description editor
 */
const EditorManage: React.FC<ProductGenerationProps> = (props) => {
  const [currentTab, setCurrentTab] = useState("document");
  const handleTabsChange = (event: React.SyntheticEvent, value: string) => {
    setCurrentTab(value);
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "background.default",
          minHeight: "100%",
          py: 0,
        }}
      >
        <Box sx={{ mt: 1 }}>
          <Tabs
            indicatorColor='primary'
            onChange={handleTabsChange}
            scrollButtons='auto'
            textColor='primary'
            value={currentTab}
            variant='scrollable'
          >
            <Tab label='Document' value='document' />
            <Tab label='Draft' value='draft' />
          </Tabs>
        </Box>
        <Divider />
        <Box sx={{ mt: 1 }}>
          {currentTab === "document" && (
            <ProductDescription editorType='document' {...props} />
          )}
          {currentTab === "draft" && (
            <ProductDescription editorType='draft' {...props} />
          )}
        </Box>
      </Box>
    </>
  );
};

export default EditorManage;


```
```typescript:src/components/landings/HeroTwoColumn.tsx
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";

export default function HeroTwoColumn() {
  return (
    <Box component='section'>
      <Container sx={{ py: 10 }} maxWidth='lg'>
        <Grid container alignItems='center' spacing={3}>
          <Grid item xs={12} md={5}>
            <Typography component='h1' variant='h3'>
              Free code blocks built with MUI
            </Typography>
            <Typography color='text.secondary' sx={{ mt: 4 }}>
              Develop faster with components you can easily drop into your
              project and customize to your needs.
            </Typography>
            <Stack direction='row' spacing={2} sx={{ mt: 4 }}>
              <Button size='large' variant='outlined'>
                Contact Us
              </Button>
              <Button size='large' variant='contained'>
                Get Started
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack direction='row' spacing={2} sx={{ mt: 4 }}>
              <Button size='large' variant='outlined'>
                Contact Us
              </Button>
              <Button size='large' variant='contained'>
                Get Started
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}


```
```typescript:src/components/landings/modules/TagList.tsx
import React from "react";
import { kebabCase } from "lodash";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import AccessibleLink from "../../Link";
import TagIcon from "@mui/icons-material/Tag";

interface tagListsProps {
  tags?: string[];
  langKey: string;
}

const TagList = ({ tags, langKey }: tagListsProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        flexWrap: "wrap",
      }}
    >
      {tags &&
        tags.map((tag, i) => (
          <AccessibleLink
            sx={{
              borderBottom: "none",
              textDecoration: "none",
              "&:hover": {
                borderBottom: "none",
                textDecoration: "none",
              },
            }}
            key={i}
            to={`/${langKey}/tags/${kebabCase(tag)}/`}
          >
            <Chip
              sx={{
                m: 1,
              }}
              icon={<TagIcon color='success' />}
              label={tag}
              color='success'
              size='small'
              clickable
            />
          </AccessibleLink>
        ))}
    </Box>
  );
};

export default TagList;


```
```typescript:src/components/landings/HomeHeroPage.tsx
import React from "react";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TypingEffect from "./TypingEffect";

// Types
type Props = {
  title?: string;
  header?: string;
  cta?: string;
  labelbutton?: string;
  helpernotice?: string;
};

// Utils
const splitText = {
  firstTwo: (text: string) => text.split(" ").slice(0, 2).join(" "),
  afterTwo: (text: string) => text.split(" ").slice(2).join(" "),
};

// Default values
const defaults = {
  header: "the here text",
  title: "the hero title",
  labelbutton: "Button name",
  cta: "Start writing with your first 10,000 words free trial and see if your work improves.",
  helpernotice: "These results are pre-generated and fully powered by AI",
} as const;

// Styles
const styles = {
  container: {
    display: "flex !important",
    backgroundColor: (theme) => theme.palette.background.paper,
    marginTop: "4rem",
  },
  contentBox: {
    position: "relative",
    display: "flex",
    width: "100%",
    height: "100%",
  },
  header: {
    margin: "3rem",
    backgroundColor: (theme) => theme.palette.background.paper,
  },
  titleWrapper: {
    display: "flex",
    flexWrap: "wrap",
    mb: "1rem",
  },
  button: {
    color: "white",
  },
  typingEffect: {
    position: "absolute",
    zIndex: 100,
    alignContent: "center",
    top: "0",
    width: "77%",
    right: "17%",
    marginTop: "19%",
  },
} as const;

const HomeHeroPage: React.FC<Props> = ({
  header = defaults.header,
  title = defaults.title,
  labelbutton = defaults.labelbutton,
  cta = defaults.cta,
  helpernotice = defaults.helpernotice,
}) => {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <Grid container sx={styles.container} component="section">
      {/* Left Content */}
      <Grid
        item
        xl={6}
        lg={6}
        md={6}
        sm={12}
        xs={12}
        sx={{ marginTop: "4rem", backgroundColor: (theme) => theme.palette.background.paper }}
      >
        <Box sx={styles.contentBox}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{ backgroundColor: (theme) => theme.palette.background.paper }}
          >
            <Grid
              item
              sx={styles.header}
              justifyContent="center"
              alignContent="center"
              component="header"
            >
              <Box sx={styles.titleWrapper}>
                <Typography color="primary" variant="h1">
                  {splitText.firstTwo(title) + " "}
                  <Typography color="success.main" variant="h1" component="span">
                    {splitText.afterTwo(title)}
                  </Typography>
                </Typography>
              </Box>

              <Typography color="text.secondary" variant="body2">
                {header}
              </Typography>
              <Typography
                sx={{ mt: 1 }}
                color="text.secondary"
                variant="body2"
                component="h2"
              >
                {cta}
              </Typography>
            </Grid>

            <Grid sx={{ mb: 3 }} item justifyContent="center" alignContent="center">
              <Button variant="contained">
                {/* TODO: Add waiting list register*/}
                <Typography variant="body2" sx={styles.button}>
                  {labelbutton}
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>

      {/* Right Content - SVG and TypingEffect */}
      <Grid
        item
        xl={6}
        lg={6}
        md={6}
        sm={10}
        xs={12}
        sx={{ display: matches ? "flex !important" : "block !important" }}
      >
        <Box
          sx={{
            display: "flex",
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          <svg
            width='100%'
            height='100%'
            aria-label='logo'
            viewBox='0 0 3517 3075'
            version='1.1'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            xmlSpace='preserve'
            style={{
              fillRule: "evenodd",
              clipRule: "evenodd",
              strokeLinejoin: "round",
              strokeMiterlimit: 2,
            }}
          >
            <g>
              <circle
                cx='2789.91'
                cy='2887.5'
                r={188}
                style={{ fill: "#75e3ea" }}
              />
              <circle
                cx='1496.95'
                cy='2737.5'
                r={200}
                style={{ fill: "#ffc278" }}
              />
              <circle
                cx='2458.33'
                cy='1297.08'
                r={1000}
                style={{ fill: "rgba(86, 248, 211, 0.86)" }}
              />
              <circle
                cx='1600.95'
                cy='2057.5'
                r={1000}
                style={{ fill: "rgba(255, 177, 230, 0.7)" }}
              />
              <circle
                cx='1596.95'
                cy='1157.5'
                r={1000}
                style={{ fill: "rgba(86, 100, 210, 0.8)" }}
              />
            </g>
          </svg>
          <Box sx={styles.typingEffect}>
            {/* <TypingEffect helpernote={helpernotice} /> */}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default HomeHeroPage;


```
```typescript:src/components/landings/PopUpCards.tsx
import * as React from "react";
import Grid from "@mui/material/Grid";
import PopUpCard from "./card/PopUpCard";

interface IProps {
  transform?: boolean;
}

const PopUpCards: React.FC = () => {
  return (
    <Grid
      container
      sx={{
        borderRadius: 4,
        opacity: "100%",
      }}
    >
      <PopUpCard
        title='Simplifying'
        input='The positive outcomes achieved by the organization can be attributed to the efforts and commitment of the staff.'
        output='The staff did a good job and that is why the organization was successful.'
      />
    </Grid>
  );
};

export default PopUpCards;


```
```typescript:src/components/landings/style/UnderlinedText.tsx
import React from "react";
import { styled } from "@mui/material/styles";

const UnderlinedText = styled("span")<{}>(() => ({
  backgroundImage: `linear-gradient(to right, rgba(0, 200, 255, 0.4) 75%, rgba(0, 200, 255, 0.4) 75%)`,
  backgroundPosition: "0 0.9em",
  backgroundRepeat: "repeat-x",
  backgroundSize: "2px 10px",
}));

export default UnderlinedText;


```
```typescript:src/components/landings/landing-feature.tsx

import React from 'react';
import { Grid, Card, CardContent, Typography, Avatar, Chip, Divider, ButtonGroup, Button } from '@mui/material';
import { Email as EmailIcon, Phone as PhoneIcon } from '@mui/icons-material';

interface Person {
  name: string;
  title: string;
  role: string;
  email: string;
  telephone: string;
  imageUrl: string;
}

const people: Person[] = [
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
];

const Example: React.FC = () => {
  return (
    <Grid container spacing={3}>
      {people.map((person) => (
        <Grid key={person.email} item xs={12} sm={6} lg={4}>
          <Card>
            <CardContent>
              <Grid container justifyContent="space-between" alignItems="center">
                <Grid item xs={10}>
                  <Grid container alignItems="center" spacing={1}>
                    <Grid item>
                      <Typography variant="subtitle1">{person.name}</Typography>
                    </Grid>
                    <Grid item>
                      <Chip label={person.role} size="small" color="success" />
                    </Grid>
                  </Grid>
                  <Typography variant="body2" color="textSecondary">
                    {person.title}
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Avatar alt={person.name} src={person.imageUrl} />
                </Grid>
              </Grid>
            </CardContent>
            <Divider />
            <ButtonGroup variant="text" fullWidth>
              <Button component="a" href={`mailto:${person.email}`} startIcon={<EmailIcon />}>
                Email
              </Button>
              <Button component="a" href={`tel:${person.telephone}`} startIcon={<PhoneIcon />}>
                Call
              </Button>
            </ButtonGroup>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Example;

```
```typescript:src/components/landings/ConceptBlock01.tsx
import React from "react";
import PopUpCardBlockGrid from "./PopUpCardBlockGrid";
import Grid from "@mui/material/Grid";
import { StaticImage } from "gatsby-plugin-image";

// a happy man watching his phone along with a concept for clarity his text

export default function ConceptBlock01() {
  return (
    <Grid
      sx={{
        display: "grid",
        m: 2,
        boxShadow: 1,
        padding: "1rem",
        background: (theme) =>
          `linear-gradient(180deg, ${theme.palette.background.default} 50%, ${theme.palette.background.default} 50%)`,
        gridTemplateRows: "75px 2fr 1fr",
        gridTemplateColumns: "5.5fr 1fr 1fr 1.5fr",
        borderRadius: "2%",
      }}
    >
      <Grid
        sx={{
          gridRow: "1 / 4",
          gridColumn: "1 / 4",
          margin: "10%",
        }}
      >
        <StaticImage
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 96%, 0% 100%)",
            borderRadius: "6px",
          }}
          src='../../../static/img/5.jpg'
          alt='A man checking his phone'
        />
      </Grid>
      <PopUpCardBlockGrid />
      <Grid
        sx={{
          gridRow: "1",
          background: "rgb(117, 227, 234)",
          backgroundSize: "fixed",
          gridColumn: "1",
          borderRadius: "50%",
          width: "7vw",
          height: "7vw",
        }}
      ></Grid>
    </Grid>
  );
}


```
```typescript:src/components/landings/WithIllustrationFeatures.tsx
import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import PopUpCards from "./PopUpCards";
import TranslateRoundedIcon from "@mui/icons-material/TranslateRounded";
import SpellcheckRoundedIcon from "@mui/icons-material/SpellcheckRounded";
import ShortTextRoundedIcon from "@mui/icons-material/ShortTextRounded";

const featuresIcons = [
  {
    icon: <ShortTextRoundedIcon />,
  },
  {
    icon: <TranslateRoundedIcon />,
  },
  {
    icon: <SpellcheckRoundedIcon />,
  },
];

interface propsFeatures {
  features: any[];
  sectionlabel?: string;
}

/**
 *
 * @param {features: string[], sectionlabel?: string}
 * @returns JSX.Element
 * @returns
 */
export default function WithIllustrationFeatures({
  features,
  sectionlabel,
}: propsFeatures) {
  return (
    <Box component='section'>
      <Container maxWidth='lg' sx={{ py: 10 }}>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
          <Grid item xs={12} md={7}>
            <Typography
              sx={{ mb: 8 }}
              component='h2'
              variant='h4'
              color='text.primary'
            >
              {sectionlabel && sectionlabel}
            </Typography>
            {features.map((feature, i) => (
              <Box
                key={feature.title}
                sx={{ display: "flex", flexDirection: "row", mb: 6 }}
              >
                <Avatar sx={{ bgcolor: "primary.main", mr: 3 }}>
                  {featuresIcons[i].icon}
                </Avatar>
                <Box>
                  <Typography component='h3' color='text.primary' variant='h6'>
                    {feature.title}
                  </Typography>
                  <Typography color='text.secondary'>
                    {feature.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Grid>
          <Grid item xs={12} md={4}>
            <PopUpCards />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}


```
```typescript:src/components/landings/pricing.tsx
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import CheckCircleIcon from "../../icons/check-circle-outlined";
import { useIntl } from "react-intl";
import { navigate } from "gatsby";

export const Pricing = ({ tables, plans }) => {
  const intl = useIntl();
  const locale = `/${intl.locale}/contact`;
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        py: 6,
        borderRadius: "1rem",
      }}
      component='section'
      aria-label='pricing tables'
    >
      <Container
        maxWidth='lg'
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          align='center'
          color='success.main'
          sx={{ mb: 3 }}
          variant='h3'
          component='h3'
        >
          {tables.header && tables.header}
        </Typography>
        <Typography
          align='center'
          color='textSecondary'
          sx={{ mb: 5 }}
          variant='body1'
          component='p'
        >
          {tables.caption && tables.caption}
        </Typography>
        <Grid container spacing={2} sx={{ mb: 5 }}>
          {plans &&
            plans.map((plan, index) => (
              <Grid item key={index + 4059} md={4} xs={12}>
                <Card
                  elevation={2}
                  sx={{
                    p: {
                      md: 2,
                      xs: 1,
                    },
                    border: (theme) => `1px solid ${theme.palette.divider}`,
                  }}
                >
                  <Typography color='text.disabled' variant='overline'>
                    {plan.free && plan.free.price}
                    {plan.growth && plan.growth.price}
                    {plan.corporate && plan.corporate.price}
                  </Typography>
                  <Typography
                    color='primary.main'
                    sx={{ textAlign: "center" }}
                    variant='h4'
                    component='h3'
                  >
                    {plan.free && plan.free.name}
                    {plan.growth && plan.growth.name}
                    {plan.corporate && plan.corporate.name}
                  </Typography>
                  <List
                    sx={{
                      px: 1,
                      py: 2,
                    }}
                  >
                    {plan.free &&
                      plan.free.features.map((feature, index) => (
                        <ListItem key={index + 454} disableGutters>
                          <ListItemIcon
                            sx={{
                              minWidth: "auto",
                              mr: 0.5,
                              color: "success.main",
                            }}
                          >
                            <CheckCircleIcon />
                          </ListItemIcon>
                          <ListItemText
                            primary={feature}
                            primaryTypographyProps={{
                              sx: {
                                color: "textSecondary",
                              },
                              variant: "body2",
                            }}
                          />
                        </ListItem>
                      ))}
                    {plan.growth &&
                      plan.growth.features.map((feature, index) => (
                        <ListItem key={index + 900} disableGutters>
                          <ListItemIcon
                            sx={{
                              minWidth: "auto",
                              mr: 0.5,
                              color: "success.main",
                            }}
                          >
                            <CheckCircleIcon />
                          </ListItemIcon>
                          <ListItemText
                            primary={feature}
                            primaryTypographyProps={{
                              sx: {
                                color: "textSecondary",
                              },
                              variant: "body2",
                            }}
                          />
                        </ListItem>
                      ))}
                    {plan.corporate &&
                      plan.corporate.features.map((feature, index) => (
                        <ListItem key={feature} disableGutters>
                          <ListItemIcon
                            sx={{
                              minWidth: "auto",
                              mr: 0.5,
                              color: "success.main",
                            }}
                          >
                            <CheckCircleIcon />
                          </ListItemIcon>
                          <ListItemText
                            primary={feature}
                            primaryTypographyProps={{
                              sx: {
                                color: "textSecondary",
                              },
                              variant: "body2",
                            }}
                          />
                        </ListItem>
                      ))}
                  </List>
                  <Divider />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      mt: 2,
                    }}
                  >
                    <Button
                      component='a'
                      href='/app'
                      size='small'
                      target='_blank'
                    >
                      <Typography variant='body2' color='primary'>
                        {tables.button && tables.button}
                      </Typography>
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography sx={{ m: 1 }} color='success.main' variant='h3'>
          {tables.cta && tables.cta}
        </Typography>
        <Button
          color='primary'
          size='medium'
          sx={{ m: 1 }}
          variant='contained'
          aria-label='contact-us-button'
          onClick={() => navigate(locale)}
        >
          {tables.cta_button && tables.cta_button}
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <Typography sx={{ my: 1 }} color='textSecondary' variant='body2'>
          {tables.cta_caption && tables.cta_caption}
        </Typography>
      </Box>
    </Box>
  );
};


```
```typescript:src/components/landings/BadgeExample.tsx
import * as React from 'react';
import { Chip, IconButton, SvgIcon } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const BadgeExample: React.FC = () => {
  const badges = [
    { color: 'default', label: 'Badge' },
    { color: 'error', label: 'Badge' },
    { color: 'warning', label: 'Badge' },
    { color: 'success', label: 'Badge' },
    { color: 'primary', label: 'Badge' },
    { color: 'secondary', label: 'Badge' },
    { color: 'info', label: 'Badge' },
    { color: 'error', label: 'Badge' },
  ];

  return (
    <>
      {badges.map((badge, index) => (
        <Chip
          key={index}
          label={badge.label}
          color={badge.color as any}
          onDelete={() => console.log('Delete clicked')}
          deleteIcon={<CloseIcon />}
          variant="outlined"
          sx={{ m: 0.5 }}
        />
      ))}
    </>
  );
};

export default BadgeExample;


```
```typescript:src/components/landings/Footer.tsx
import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "../Link";
import Box from "@mui/material/Box";
import SelectLanguage from "../homepage/SelectLanguage";
import select from "../homepage/utils";
import { FormattedMessage } from "react-intl";
import { styled } from "@mui/material/styles";
import ContactDialogs from "../homepage/ContactDialogs";
import Container from "@mui/material/Container";

export default function Footer(props) {
  const NewContainer = styled("footer")(({ theme }) => ({
    borderTop: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.background.default,
    maxWidth: "100%",
    paddingRight: "10%",
    paddingLeft: "10%",
    display: "block",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  }));

  const sel = select(props.langKey);
  return (
    <>
      <Container
        maxWidth='xl'
        sx={{
          paddingLeft: "0px !important",
          paddingRight: "0px !important",
        }}
      >
        <NewContainer>
          <Grid container spacing={4} justifyContent='space-evenly'>
            <Grid item xs={6} sm={3} key={"company"}>
              <Typography
                sx={{ mb: 2 }}
                variant='subtitle2'
                component={"p"}
                color='text.primary'
                gutterBottom
              >
                <FormattedMessage id='T04' />
              </Typography>
              <ContactDialogs />
            </Grid>
            <Grid item xs={6} sm={3} key={"explore"}>
              <Typography
                sx={{ mb: 2 }}
                variant='subtitle2'
                component={"p"}
                color='text.primary'
                gutterBottom
              >
                <FormattedMessage id='T05' />
              </Typography>
              <Typography sx={{ mb: 2 }} variant='body2'>
                <Link tabIndex={0} to={`/${props.langKey}/blog`}>
                  Blog
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={6} sm={3} key={"support"}>
              <Typography
                variant='subtitle2'
                component={"p"}
                color='text.primary'
                gutterBottom
              >
                <FormattedMessage id='S01' />
              </Typography>
              <Typography sx={{ mb: 2 }} variant='body2'>
                <Link to={`/${props.langKey}/contact`}>
                  <FormattedMessage id='CA094' />
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={6} sm={3} key={"terms"}>
              <Typography
                variant='subtitle2'
                component={"p"}
                color='text.primary'
                gutterBottom
              >
                <FormattedMessage id='TAS025' />
              </Typography>
              <Typography sx={{ mb: 1 }} variant='body2' color='primary'>
                <Link to={`/${props.langKey}/legal/terms-of-use`}>
                  <FormattedMessage id='TS01' />
                </Link>
              </Typography>
              <Typography sx={{ mb: 1 }} variant='body2'>
                <Link to={`/${props.langKey}/legal/privacy-policy`}>
                  <FormattedMessage id='PP01' />
                </Link>
              </Typography>
            </Grid>
          </Grid>
          <Box mt={5}>
            <SelectLanguage langs={props.langs} />
          </Box>
        </NewContainer>
      </Container>
    </>
  );
}


```
```typescript:src/components/landings/support.tsx
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

interface SupportProps {
  text: string[];
}
export const Support = ({ text }: SupportProps) => (
  <Box component='section' sx={{ pt: 15 }}>
    <Container maxWidth='lg'>
      <Card elevation={0} sx={{ backgroundColor: "background.default" }}>
        <Grid
          container
          sx={{
            pb: {
              md: 6,
              xs: 3,
            },
            pt: {
              md: 8,
              xs: 3,
            },
            px: {
              md: 8,
              xs: 3,
            },
          }}
        >
          <Grid
            item
            md={6}
            sx={{
              borderRight: (theme) => ({
                md: `1px solid ${theme.palette.divider}`,
              }),
              display: "flex",
              flexDirection: "column",
              mb: {
                md: 0,
                xs: 4,
              },
              pr: {
                md: 4,
              },
            }}
            xs={12}
          >
            <Box sx={{ mb: 2 }} component='header'>
              <Typography color='primary' variant='h4'>
                {text[0]}
              </Typography>
            </Box>
            <Typography
              color='textSecondary'
              variant='subtitle1'
              sx={{
                mb: 4,
                mt: 1,
              }}
            >
              {text[1]}
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              <Box sx={{ flexGrow: 1 }} />
              <Box
                sx={{
                  "& img:not(:last-child)": {
                    mr: 3,
                  },
                }}
              ></Box>
            </Box>
          </Grid>
          <Grid
            item
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              pl: {
                md: 4,
              },
            }}
            xs={12}
          >
            <Box sx={{ mb: 2 }} component='header'>
              <Typography color='primary' variant='h4'>
                {text[2]}
              </Typography>
            </Box>
            <Typography
              color='textSecondary'
              variant='subtitle1'
              sx={{
                mb: 4,
                mt: 1,
              }}
            >
              {text[3]}
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              <Button
                color='primary'
                component='a'
                href='/app'
                target='_blank'
                variant='text'
              >
                {text[4]}
              </Button>
              <Box sx={{ flexGrow: 1 }} />
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Container>
  </Box>
);


```
```typescript:src/components/landings/CardFeatureBlock.tsx
import * as React from "react";
import { styled } from "@mui/material/styles";
import CardFeature from "./card/CardFeature";

interface CardFeatureBlockProps {
  titles?: [];
  bodys?: [];
  badgeLabel?: String;
}

const FWrapper = styled("section")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
  borderRadius: "1rem",
  flexWrap: "wrap",
  paddingTop: "5rem",
  paddingBottom: "5rem",
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.up("xs")]: {
    marginTop: "calc(20rem - 40vw)",
    paddingTop: "5rem",
  },
  [theme.breakpoints.up("sm")]: {
    marginTop: "0rem",
    paddingTop: "5rem",
  },
}));

const CardFeatureBlock = ({
  titles,
  bodys,
  badgeLabel,
}: CardFeatureBlockProps) => {
  return (
    <FWrapper>
      {titles.map((x, i) => (
        <CardFeature
          key={i}
          title={x}
          body={bodys[i]}
          badgeLabel={i == 4 && "Coming soon"} // determine which card should have the NEW badge
        />
      ))}
    </FWrapper>
  );
};

export default CardFeatureBlock;


```
```typescript:src/components/landings/feature-section.tsx
import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import { CodeDisplayComponent } from './code-box';

interface FeatureSectionProps {
    title: string;
    description?: string;
    primaryButtonText?: string;
    secondaryButtonText?: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ title = '', description = '', primaryButtonText = '', secondaryButtonText = '' }) => {
    return (
        <Box sx={{ flexGrow: 1, padding: 3, mt: 7, mb: 7 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{ mb: { xs: 2, md: 0 } }}>
                    <Typography variant="h4">{title}</Typography>
                    <Typography variant="body1" sx={{ my: 2 }}>{description}</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', py: 4, pr: 8 }}>
                        <Button size="small" variant="contained" color="primary" sx={{ my: 1 }}>
                            {primaryButtonText}
                        </Button>
                        {secondaryButtonText && (<Button size="small" variant="contained" color="primary" sx={{ m: 1, }}>
                            {secondaryButtonText}
                        </Button>)}
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <CodeDisplayComponent />
                </Grid>
            </Grid>
        </Box>
    );
};

export default FeatureSection;


```
```typescript:src/components/landings/landings-feature.tsx
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

interface LandingsFeatureProps {
  headerRight?: string;
  headerLeft?: string;
  descriptionLeft?: string;
  descriptionRight?: string;
  ctaActionText?: string;
}

const LandingsFeature = ({
  headerRight,
  headerLeft,
  descriptionRight,
  descriptionLeft,
  ctaActionText,
}: LandingsFeatureProps) => (
  <Box component='section' sx={{ pt: 15, mb: 12 }}>
    <Container maxWidth='lg'>
      <Card
        elevation={0}
        sx={{
          background: (theme) =>
            `linear-gradient(270deg, ${theme.palette.background.paper} 50%, ${theme.palette.background.paper} 50%)`,
          borderRadius: "1rem",
        }}
      >
        <Grid
          container
          sx={{
            pb: {
              md: 6,
              xs: 3,
            },
            pt: {
              md: 8,
              xs: 3,
            },
            px: {
              md: 8,
              xs: 3,
            },
          }}
        >
          <Grid
            item
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              mb: {
                md: 0,
                xs: 4,
              },
              pr: {
                md: 4,
              },
            }}
            xs={12}
          >
            <Typography color='primary' variant='h2'>
              {headerRight && headerRight}
            </Typography>
            <Typography
              color='textPrimary'
              variant='body1'
              sx={{
                mb: 4,
                mt: 1,
              }}
            >
              {descriptionRight && descriptionRight}
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              <Box sx={{ flexGrow: 1 }} />
              <Box
                sx={{
                  "& img:not(:last-child)": {
                    mr: 3,
                  },
                }}
              ></Box>
            </Box>
          </Grid>
          <Grid
            item
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              pl: {
                md: 4,
              },
            }}
            xs={12}
          >
            <Typography color='primary' variant='h2'>
              {headerLeft && headerLeft}
            </Typography>
            <Typography
              color='textPrimary'
              variant='body1'
              sx={{
                mb: 4,
                mt: 1,
              }}
            >
              {descriptionLeft && descriptionLeft}
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              {ctaActionText && (
                <Button
                  color='primary'
                  component='a'
                  href='/app'
                  target='_blank'
                  variant='text'
                >
                  {ctaActionText}
                </Button>
              )}
              <Box sx={{ flexGrow: 1 }} />
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Container>
  </Box>
);

export default LandingsFeature;


```
```typescript:src/components/landings/TypingEffect.tsx
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { useId } from 'react';


import { useEffect, useState } from 'react'

const ClientOnlyTextField = ({ ...props }) => {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) return null

  return <TextField {...props} />
}


const TypingEffect = ({ helpernote }) => {
  const id = useId();
  const helpenote = helpernote;
  const reference = React.useRef();
  const buttonRef = React.useRef<HTMLButtonElement | null>(null);
  const textHandler2 = () => {
    buttonRef.current.disabled = true;
    const textInputref: any = reference.current;
    var i = textInputref.value.length;
    textInputref.value = "";
    var i = textInputref.value.length;
    var txt = `Hey Alex,
Thank you for signing up so far! We’re really excited to show you everything we have to offer. To get you started, we’ve put together some simple, easy to understand step-by-step guides on our blog so that you can start our services straight away!

Best,
John Doe`;
    var speed = 10;
    const typeWriter = () => {
      var i = textInputref.value.length;
      if (i < txt.length) {
        textInputref.value += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    };
    typeWriter();
    buttonRef.current.disabled = false;
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      const textInputref: any = reference.current;
      textInputref.value.length < 10 && textHandler2();
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      sx={{
        minWidth: "117%",
      }}
    >
      <Container maxWidth='md'>
        <Paper elevation={12} sx={{ p: 3 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Grid
              container
              direction='row'
              justifyContent='start'
              alignItems='center'
              spacing={2}
            >
              <Grid xs={9} item>
                <ClientOnlyTextField
                  fullWidth
                  multiline
                  rows={2}
                  label='Sales Email > user input'
                  name='title'
                  value="If you're new to our stores, you need use our step-by-step guide."
                  variant='outlined'
                />
              </Grid>
              <Grid xs={3} item>
                <Button
                  color='primary'
                  ref={buttonRef}
                  fullWidth
                  size='large'
                  variant='contained'
                  onClick={textHandler2}
                >
                  Compose
                </Button>
              </Grid>
              <Grid xs={12} item>
                <ClientOnlyTextField
                  InputLabelProps={{ shrink: true }}
                  label='AI Output'
                  fullWidth
                  inputRef={reference}
                  multiline
                  rows={8}
                  helperText={helpenote}
                  variant='outlined'
                  id={id}
                />
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};
export default TypingEffect;


```
```typescript:src/components/landings/PopUpCardBlockGrid.tsx
import * as React from "react";
import Grid from "@mui/material/Grid";
import PopUpCard from "./card/PopUpCard";

const PopUpCardBlockGrid: React.FC = () => {
  return (
    <Grid
      container
      sx={{
        transform: "translate(5%, -111%)",
        clipPath: "polygon(0 0, 100% 1%, 100% 90%, 0% 100%)",
        gridRow: "3 / 4",
        boxShadow: "0px 32px 84px rgba(14, 86, 124, 0.165308)",
        gridColumn: "3 / 4",
        opacity: "70%",
      }}
    >
      <PopUpCard />
    </Grid>
  );
};

export default PopUpCardBlockGrid;


```
```typescript:src/components/landings/TestimonialsBlock.tsx
import React from "react";
import Box from "@mui/material/Box";
import CardTstimonials from "./card/CardTstimonials";

const TestimonialsBlock = () => (
  <Box
    sx={{
      backgroundColor: "background.default",
      minHeight: "100%",
      p: 1,
      display: "flex",
      justifyContent: "center",
      flexDirection: "row",
      flexWrap: "wrap",
    }}
  >
    <CardTstimonials body='Nobody has written a word about us yet. You might want to be the first person to tag # maila.ai on Twitter.' />
    <CardTstimonials body='Nobody has written a word about us yet. You might want to be the first person to tag # maila.ai on Twitter.' />
    <CardTstimonials body='Nobody has written a word about us yet. You might want to be the first person to tag # maila.ai on Twitter.' />
  </Box>
);
export default TestimonialsBlock;


```
```typescript:src/components/landings/cta.tsx
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { StaticImage } from "gatsby-plugin-image";

export default function SimpleCta() {
  return (
    <Box component='section'>
      <Container maxWidth='lg'>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            py: 10,
          }}
        >
          <Box>
            <Typography component='div' sx={{ mb: 2 }} variant='h4'>
              Try it yourself
            </Typography>
            <StaticImage
              style={{
                border: "2px solid #E6E8F0",
                borderRadius: "6px",
              }}
              src='../../../static/img/simplify-contenets.png'
              alt='screenshot of maila'
            />
          </Box>
          <Stack
            direction='row'
            spacing={2}
            sx={{ mt: { xs: 3, md: 0 }, ml: { xs: 0, md: 3 } }}
          >
            <Button variant='contained'>Get Started</Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}


```
```typescript:src/components/landings/cards-review.tsx
import React, { Fragment } from 'react';
import { Menu, MenuItem, ListItemIcon, ListItemText, IconButton, Divider, Typography, Grid, Card, CardContent, Avatar, Chip } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface Client {
  id: number;
  name: string;
  imageUrl: string;
  lastInvoice: {
    date: string;
    dateTime: string;
    amount: string;
    status: 'Paid' | 'Withdraw' | 'Overdue';
  };
}

const statuses: Record<string, { color: 'success' | 'default' | 'error' }> = {
  Paid: { color: 'success' },
  Withdraw: { color: 'default' },
  Overdue: { color: 'error' },
};

const clients: Client[] = [
  {
    id: 1,
    name: 'Tuple',
    imageUrl: 'https://tailwindui.com/img/logos/48x48/tuple.svg',
    lastInvoice: { date: 'December 13, 2022', dateTime: '2022-12-13', amount: '$2,000.00', status: 'Overdue' },
  },
  {
    id: 2,
    name: 'SavvyCal',
    imageUrl: 'https://tailwindui.com/img/logos/48x48/savvycal.svg',
    lastInvoice: { date: 'January 22, 2023', dateTime: '2023-01-22', amount: '$14,000.00', status: 'Paid' },
  },
  {
    id: 3,
    name: 'Reform',
    imageUrl: 'https://tailwindui.com/img/logos/48x48/reform.svg',
    lastInvoice: { date: 'January 23, 2023', dateTime: '2023-01-23', amount: '$7,600.00', status: 'Paid' },
  },
];

const Example: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid container spacing={3}>
      {clients.map((client) => (
        <Grid key={client.id} item xs={12} sm={6} md={4}>
          <Card variant="outlined">
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar alt={client.name} src={client.imageUrl} sx={{ width: 48, height: 48, mr: 2 }} />
                  <Typography variant="subtitle1">{client.name}</Typography>
                </div>
                <IconButton
                  aria-label="more"
                  aria-controls="long-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                  size="small"
                >
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  id="long-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    style: {
                      width: '20ch',
                    },
                  }}
                >
                  <MenuItem onClick={handleClose}>
                    <ListItemText primary="View" secondary={client.name} />
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemText primary="Edit" secondary={client.name} />
                  </MenuItem>
                </Menu>
              </div>
              <Divider sx={{ my: 2 }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <Typography variant="body2" color="textSecondary">
                  Last invoice
                </Typography>
                <Typography variant="body2">
                  <time dateTime={client.lastInvoice.dateTime}>{client.lastInvoice.date}</time>
                </Typography>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="body2" color="textSecondary">
                  Amount
                </Typography>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="subtitle2" sx={{ mr: 1 }}>
                    {client.lastInvoice.amount}
                  </Typography>
                  <Chip
                    label={client.lastInvoice.status}
                    color={statuses[client.lastInvoice.status].color}
                    size="small"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Example;

```
```typescript:src/components/landings/code-box.tsx
import React, { FC, ChangeEvent, useEffect, useState } from 'react';
import { alpha } from '@mui/system/colorManipulator';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { Button, IconButton } from '@mui/material';
import { FileCopyOutlined } from '@mui/icons-material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { codeStyle } from 'utils/code-styles';

interface Sample {
    lang: 'yaml' | 'json' | 'curl';
    label: string;
    icon: string;
    code: string;
}

const curlAPI = `
curl -X GET "https://keyword-explorer.maila.ai/related-keywords?keyword=SEO" \
-H "accept: application/json"




`;

const CodeDisplayComponent: FC = () => {
    const [schemaJson, setSchemaJson] = useState<string>('');
    const [schemaSpecification, setSchemaSpecification] = useState<string>('');

    const samples: Sample[] = [
        {
            lang: 'yaml',
            label: 'OpenAPI Specification',
            icon: '/assets/yaml.svg',
            code: JSON.stringify(schemaSpecification, null, 2),
        },
        {
            lang: 'json',
            label: 'JSON Schema',
            icon: '/assets/json.svg',
            code: JSON.stringify(schemaJson, null, 2),
        },
        {
            lang: 'curl',
            label: 'API (curl)',
            icon: '/assets/curl.svg',
            code: JSON.stringify(curlAPI, null, 2),
        },
    ];
    const [lang, setLang] = useState<string>(samples[0].lang);

    const copyToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            console.log('Copying to clipboard was successful!');
        } catch (err) {
            console.error('Could not copy text: ', err);
        }
    };

    const handleLangChange = (event: ChangeEvent<any>, value: string): void => {
        setLang(value);
    };

    const code = samples.find((sample) => sample.lang === lang)?.code.trim() || '';

    // useEffect(() => {
    //     fetch('https://keyword-explorer.maila.ai/.well-known/openapi.yaml')
    //         .then((response) => response.text())
    //         .then((data) => setSchemaSpecification(data));
    // }, []);

    // useEffect(() => {
    //     fetch('https://keyword-explorer.maila.ai/.well-known/ai-plugin.json')
    //         .then((response) => response.text())
    //         .then((data) => setSchemaJson(data));
    // }, []);

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    my: 4,
                }}
            >
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    spacing={2}
                    sx={{
                        backdropFilter: 'blur(6px)',
                        backgroundColor: (theme) => alpha(theme.palette.neutral[800], 0.95),
                        borderBottomColor: 'neutral.700',
                        borderBottomStyle: 'solid',
                        borderBottomWidth: 1,
                        borderTopLeftRadius: (theme) => theme.shape.borderRadius,
                        borderTopRightRadius: (theme) => theme.shape.borderRadius,
                        boxShadow: 24,
                        px: 2,
                    }}
                >
                    <Stack
                        alignItems="center"
                        direction="row"
                        spacing={1}
                        sx={{
                            py: 2,
                            '& > div': {
                                backgroundColor: 'rgba(255, 255, 255, 0.16)',
                                borderRadius: '50%',
                                height: 10,
                                width: 10,
                            },
                        }}
                    >
                        <div />
                        <div />
                        <div />
                    </Stack>
                    <Tabs
                        variant="scrollable"
                        scrollButtons="auto"
                        onChange={handleLangChange} value={lang}>
                        {samples.map((sample) => (
                            <Tab
                                key={sample.lang}
                                label={
                                    <Stack alignItems="center" direction="row" spacing={1}>
                                        <Box
                                            sx={{
                                                borderRadius: '4px',
                                                flex: '0 0 auto',
                                                width: 20,
                                                '& img': {
                                                    width: '100%',
                                                },
                                            }}
                                        >
                                            <img src={sample.icon} alt={sample.lang} />
                                        </Box>
                                        <Typography sx={{ color: 'neutral.300' }} variant="body2">
                                            {sample.label}
                                        </Typography>
                                    </Stack>
                                }
                                value={sample.lang}
                            />
                        ))}
                    </Tabs>
                </Stack>
                <Box
                    sx={{
                        backdropFilter: 'blur(6px)',
                        backgroundColor: (theme) => alpha(theme.palette.neutral[800], 0.9),
                        borderBottomLeftRadius: (theme) => theme.shape.borderRadius,
                        borderBottomRightRadius: (theme) => theme.shape.borderRadius,
                        flex: '1 1 auto',
                        maxHeight: '350px',
                        overflow: 'auto',
                        p: 2,
                        '& pre': {
                            background: 'none !important',
                            borderRadius: '0 !important',
                            fontSize: '12px !important',
                            height: '100%',
                            m: '0 !important',
                            overflow: 'auto !important',
                            p: '0 !important',
                        },
                        '& code': {
                            fontSize: '12px !important',
                        },
                    }}
                >
                    <SyntaxHighlighter language={lang} style={codeStyle}>
                        {JSON.parse(code)}
                    </SyntaxHighlighter>
            
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'flex-end',
                            mt: 2,
                            position: 'sticky',
                            bottom: 0,
                        }}
                    >
                        <IconButton color="primary" onClick={() => copyToClipboard(code)}>
                            <FileCopyOutlined />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export { CodeDisplayComponent };


```
```typescript:src/components/landings/email.tsx
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const afterTwo = (string: string) => string.split(" ").slice(0, 100).join(" ");
interface HomeEmailProps {
  title?: string;
  subheader?: string;
  cta?: string;
  labelbutton?: string;
  description?: string;
}
import styled from "@emotion/styled";

const Badge = styled.span`
  background: linear-gradient(to right, #14b8a6, #0059b2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Email = ({
  title = "Meet Your New AI Assistant",
  subheader = "Email or Ask Maila anything about your documents.",
  labelbutton = "Ask or Email",
  description = "Chatbot: chat.maila.ai  or Email: anything@bot.maila.ai",
}: HomeEmailProps) => (
  <Box
    sx={{
      backgroundColor: "background.default",
      m: 5,
    }}
    component='header'
  >
    <Container maxWidth='md'>
      <Typography
        align='center'
        color='primary.main'
        variant='h1'
        component={"h2"}
      >
        <Badge>{` ${afterTwo(title)}`}</Badge>
      </Typography>
      <Typography
        align='center'
        color='textSecondary'
        sx={{
          fontSize: 20,
          mb: 10,
          mt: 10,
        }}
      >
        {subheader && subheader}
      </Typography>
      <Grid
        container
        spacing={2}
        direction='column'
        justifyContent='center'
        alignItems='center'
        sx={{ mb: 6 }}
        wrap='wrap'
      >
        <Grid item>
          <Typography sx={{ mb: 10 }} color='text.secondary' variant='body2'>
            <Badge>{description}</Badge>
          </Typography>
        </Grid>
        <Grid item>
          <Button href='https://chat.maila.ai' variant='contained'>
            <Typography
              variant='body2'
              sx={{
                color: "white",
              }}
            >
              {labelbutton && labelbutton}
            </Typography>
          </Button>
        </Grid>
      </Grid>
      {/* <StaticImage
        style={{
          borderRadius: "6px",
        }}
        src='../../../static/iwriter.png'
        alt='dashboard of iwriter'
      /> */}
    </Container>
  </Box>
);

export default Email;


```
```typescript:src/components/landings/card/SimpleAccordion.tsx
import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Define the properties for the PopUpCard component.
interface PopUpCardProps {
  title?: string;
  body?: string;
  id?: string;
  ariaControls?: string;
}

/**
 * SimpleAccordion is a functional component that displays a collapsible card with a title and body.
 * It uses the Material UI Accordion components for the UI.
 *
 * @param {PopUpCardProps} props - The properties passed to the component.
 * @returns {JSX.Element} - The rendered component.
 */
export default function SimpleAccordion({
  title = 'simple',
  body = 'answers',
  id,
  ariaControls,
}: PopUpCardProps): JSX.Element {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={ariaControls}
        id={id}
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{body}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}




import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

// Define the interface for QuestionListProps
interface QuestionListProps {
  questions: Array<[string, string]>;
}

// AccordionBlock Component
const AccordionBlock = ({ questions }: QuestionListProps) => {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{
          backgroundColor: (theme) => `${theme.palette.background.paper}`,
        }}
        component='section'
      >
        <Box sx={{ p: "5%" }}>
          {questions.map((question, index) => (
            <SimpleAccordion
              ariaControls={"question" + index}
              id={"header" + index}
              key={index}
              title={question[0]}
              body={question[1]}
            />
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};



```
```typescript:src/components/landings/card/CardTstimonials.tsx
import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import TwitterIcon from "@mui/icons-material/Twitter";

interface TestimonialProps {
  body?: string;
  title?: string;
  subheader?: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  body = "maila.ai is a new AI-powered copywriter and copy editor that helps you to craft a powerful product description.",
  title = "Dr. Lex K. Maher",
  subheader = "@Maherwork",
}) => (
  <Card
    sx={{
      backgroundColor: "background.default",
      maxWidth: 345,
      minWidth: 300,
      p: 2,
      m: 1,
    }}
  >
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: red[500] }} aria-label='avatar'>
          R
        </Avatar>
      }
      action={
        <IconButton aria-label='twitter' color='primary' size='large'>
          <TwitterIcon />
        </IconButton>
      }
      title={title}
      subheader={subheader}
    />
    <CardContent>
      <Typography variant='body1'>{body}</Typography>
    </CardContent>
  </Card>
);

export default TestimonialCard;

```
```typescript:src/components/landings/card/PopUpCard.tsx
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SubdirectoryArrowRightRoundedIcon from "@mui/icons-material/SubdirectoryArrowRightRounded";

interface PopUpCardProps {
  title?: string;
  input?: string;
  output?: string;
  neww?: string;
  buttonLabel?: string;
}

const PopUpCard: React.FC<PopUpCardProps> = ({
  title = "Headline:",
  input = "The Secret of Writing Magnetic",
  output = "Who Else Wants To Be A More Creative Person?",
  buttonLabel = "Accept",
}: PopUpCardProps) => {
  return (
    <Card
      sx={{
        minWidth: 270,
        border: (theme) => `2px solid ${theme.palette.divider}`,
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='textSecondary' gutterBottom>
          {title}
        </Typography>
        <Typography variant='body2' component='span'>
          <Typography
            variant='body1'
            component='span'
            sx={{
              textDecoration: "line-through",
              backgroundColor: (theme) => theme.palette.error.light,
              borderRadius: "2px",
              padding: "2px",
            }}
          >
            {input}
          </Typography>
          <br />
          <br />
          <SubdirectoryArrowRightRoundedIcon fontSize='small' color='primary' />
          <Typography
            variant='body1'
            component='span'
            sx={{
              backgroundColor: (theme) => theme.palette.success.light,
              borderRadius: "2px",
              padding: "2px",
            }}
          >
            {output}
          </Typography>
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small' variant='contained' color='primary'>
          {buttonLabel}
        </Button>
      </CardActions>
    </Card>
  );
};

export default PopUpCard;


```
```typescript:src/components/landings/card/CardFeature.tsx
import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";

interface CardFeatureProps {
  title?: string;
  body?: string;
  badgeLabel?: string;
  status?: boolean;
}

const CardFeature: React.FC<CardFeatureProps> = ({
  title = "The default title",
  body = "maila.ai is a new AI-powered copywriter and copy editor that helps you to craft a powerful product description.",
  badgeLabel,
}) => {
  return (
    <Card sx={{ maxWidth: 350, minWidth: 300, p: 1, m: 1 }}>
      <CardHeader
        action={
          badgeLabel && (
            <Chip
              label={badgeLabel}
              sx={{
                fontWeight: 500,
                borderRadius: "4px",
                padding: "0px",
              }}
              size='small'
            />
          )
        }
        subheader={
          <Typography variant='h5' component='h2' color='primary'>
            {title}
          </Typography>
        }
      />
      <CardContent>
        <Typography variant='body1' color='text.secondary'>
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardFeature;

```
```typescript:src/components/landings/card/ControlledAccordions.tsx
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (
    event: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1bh-content'
          id='panel1bh-header'
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            General settings
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            I am an accordion
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: "text.secondary" }}>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2bh-content'
          id='panel2bh-header'
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Users</Typography>
          <Typography sx={{ color: "text.secondary" }}>
            You are currently not an owner
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat
            lectus, varius pulvinar diam eros in elit. Pellentesque convallis
            laoreet laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel3bh-content'
          id='panel3bh-header'
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Advanced settings
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Filtering has been entirely disabled for whole web server
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel4bh-content'
          id='panel4bh-header'
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Personal data
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}


```
```typescript:src/components/landings/card/CardBenefits.tsx
import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import UnderlinedText from "components/subcomponents/UnderlinedText";

type CardBenefitsProps = {
  body?: string; // Card body text
  title?: string; // Card title
};

const styles = {
  container: {
    minHeight: "100%",
    p: 1,
  },
  card: {
    backgroundColor: (theme) => theme.palette.background.default,
    p: 1,
    "& + &": { mt: 1 },
  },
};


const CardBenefits: React.FC<CardBenefitsProps> = ({
  body = "maila.ai is a new AI-powered copywriter and copy editor that helps you to craft a powerful product description.",
  title = "brand name",
}) => (
  <Box sx={styles.container}>
    <Card sx={styles.card}>
      <CardHeader
        subheader={
          <Typography variant="h5" color="primary">
            <UnderlinedText>{title}</UnderlinedText>
          </Typography>
        }
      />
      <CardContent>
        <Typography variant="body1">{body}</Typography>
      </CardContent>
    </Card>
  </Box>
);

export default CardBenefits;

// Unused gradient background, kept for potential future use:
// background: (theme) =>
//   `linear-gradient(180deg, ${theme.palette.background.default} 50%, ${theme.palette.background.default} 50%)`,

```
```typescript:src/components/landings/Select.ts
const Select = (langKey:string) => {
  var res:any;
  switch (langKey) {
    case "en":
      res = 0;
      break;
    case "fa":
      res = 1;
      break;
    default:
      res = null;
  }
  return res;
};

export default Select;


```
```typescript:src/components/landings/commenting.tsx
import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
  Box,
  TextField,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import {
  CheckCircle as CheckCircleIcon,
  Face as FaceIcon,
  InsertEmoticon as InsertEmoticonIcon,
  SentimentDissatisfied as SentimentDissatisfiedIcon,
  Favorite as FavoriteIcon,
  ThumbUp as ThumbUpIcon,
  Clear as ClearIcon,
  AttachFile as AttachFileIcon,
} from '@mui/icons-material';

interface Activity {
  id: number;
  type: string;
  person: { name: string; imageUrl?: string };
  date: string;
  dateTime: string;
  comment?: string;
}

const activityData: Activity[] = [
    {
      id: 1,
      type: 'commented',
      person: {
        name: 'John Doe',
        imageUrl: 'https://example.com/john-doe.jpg',
      },
      date: 'Jan 1',
      dateTime: '2023-01-01T10:00:00',
      comment: 'Great post!',
    },
    {
      id: 2,
      type: 'liked',
      person: {
        name: 'Jane Smith',
        imageUrl: 'https://example.com/jane-smith.jpg',
      },
      date: 'Jan 2',
      dateTime: '2023-01-02T14:30:00',
    },
    // Add more activity objects as needed
  ];

const moods = [
  { name: 'Excited', icon: <InsertEmoticonIcon />, color: 'error' },
  { name: 'Loved', icon: <FavoriteIcon />, color: 'secondary' },
  { name: 'Happy', icon: <FaceIcon />, color: 'success' },
  { name: 'Sad', icon: <SentimentDissatisfiedIcon />, color: 'warning' },
  { name: 'Thumbsy', icon: <ThumbUpIcon />, color: 'primary' },
  { name: 'I feel nothing', icon: <ClearIcon />, color: 'default' },
];

export default function Example() {
  const [selectedMood, setSelectedMood] = useState(moods[5]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <List sx={{ width: '100%' }}>
        {activityData.map((item) => (
          <ListItem key={item.id} alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={item.person.name} src={item.person.imageUrl} />
            </ListItemAvatar>
            <ListItemText
              primary={item.person.name + ' ' + item.type}
              secondary={
                <>
                  <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                    {item.comment}
                  </Typography>
                  {' — ' + item.date}
                </>
              }
            />
          </ListItem>
        ))}
      </List>

      <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
        <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" />
        <TextField
          fullWidth
          multiline
          placeholder="Add your comment..."
          variant="outlined"
          sx={{ ml: 1, mr: 1 }}
        />
        <IconButton onClick={handleClick}>
          {selectedMood.icon}
        </IconButton>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          {moods.map((mood, index) => (
            <MenuItem
              key={index}
              selected={mood === selectedMood}
              onClick={() => {
                setSelectedMood(mood);
                handleClose();
              }}
              sx={{ color: mood.color }}
            >
              {mood.icon}
              {mood.name}
            </MenuItem>
          ))}
        </Menu>
        <Button variant="contained">Comment</Button>
      </Box>
    </>
  );
}


```
```typescript:src/components/landings/BenefitsBlock.tsx
import React from "react";
import Box from "@mui/material/Box";
import CardBenefits from "./card/CardBenefits";

const BenefitsBlock = ({ list }) => {
  const lists = list;
  return (
    <Box
      sx={{
        mt: 5,
      }}
    >
      {lists.map((x, i) => (
        <CardBenefits key={i} title={x[0]} body={x[1]} />
      ))}
    </Box>
  );
};

export default BenefitsBlock;


```
```typescript:src/components/landings/AccordionBlock.tsx
import React from "react";
import Box from "@mui/material/Box";
import SimpleAccordion from "./card/SimpleAccordion";
import Grid from "@mui/material/Grid";

interface QuestionListProps {
  questions?: any | unknown;
}

const AccordionBlock = ({ questions }: QuestionListProps) => {
  let QuestionLists = questions;
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{
          backgroundColor: (theme) => `${theme.palette.background.paper}`,
        }}
        component='section'
      >
        <Box
          sx={{
            p: "5%",
          }}
        >
          {QuestionLists.map((x, i) => (
            <SimpleAccordion
              ariaControls={"question" + i}
              id={"header" + i}
              key={i + 90}
              title={x[0]}
              body={x[1]}
            />
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default AccordionBlock;


```
```typescript:src/components/landings/HomeBlock03.tsx
import React from "react";
import select from "../homepage/utils";
import Grid from "@mui/material/Grid";
import BenefitsBlock from "./BenefitsBlock";
import ConceptBlock01 from "./ConceptBlock01";

const HomeBlock03 = (props) => {
  const lists = props.list;

  const sel = select(props.langKey);
  const getClass = (langKey: string) => {
    switch (langKey) {
      case "en" || "sv":
        return false;
      case "fa" || "ar":
        return true;
      default:
        return false;
    }
  };

  const rtl = getClass(props.langKey);

  return (
    <Grid
      container
      sx={{
        backgroundColor: (theme) => theme.palette.background.paper,
      }}
      direction='row'
      justifyContent='center'
      alignItems='center'
      component='section'
    >
      <Grid item xs={12} sm={12} md={6}>
        <ConceptBlock01 />
      </Grid>

      <Grid item xs={12} sm={12} md={6}>
        <BenefitsBlock list={lists} />
      </Grid>
    </Grid>
  );
};
export default HomeBlock03;


```
```plaintext:src/components/images/1.png
```typescript:src/components/side-panel-output.tsx
import React, { FC } from "react"
import { Box, Divider, Drawer, IconButton } from "@mui/material"
import { X } from "../icons/x"
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace"
import LinearProgress from "./subcomponents/LinearProgressLoading"

type SlidePanelProps = {
  open?: boolean
  onClose?: () => void
  children: ReactJSXElement
  anchor?: "right" | "bottom"
  [key: string]: any
}

// @example
// <SlidePanelOutput open={true} anchor="right" onClose={() => {}}>
//   <div>Content</div>
// </SlidePanelOutput>
const SlidePanelOutput: FC<SlidePanelProps> = ({ open, onClose, children, anchor, ...props }) => (
  <Drawer
    anchor={anchor}
    onClose={onClose}
    open={open}
    ModalProps={{ sx: { zIndex: 1690 } }}
    PaperProps={{
      sx: {
        width: { xs: "100%", md: "31%" },
        height: { xs: "43%", md: "100%" },
        mt: { xs: 0, md: "5rem" },
        border: t => `1px solid ${t.palette.divider}`,
        borderRadius: 1
      }
    }}
    variant="persistent"
    {...props}
  >
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center", 
        backgroundColor: "background.paper",
        borderBottom: t => `1px solid ${t.palette.divider}`,
        px: 2,
        py: 1,
        position: "sticky",
        top: 0,
        zIndex: 10
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <LinearProgress /> 
      </Box>
      <IconButton color="primary" onClick={onClose}>
        <X fontSize="small" />
      </IconButton>
    </Box>

    <Box sx={{ py: 4, px: 1 }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {children}
      </Box>
      <Divider sx={{ mt: 5 }} />
    </Box>
  </Drawer>
)

export default SlidePanelOutput

```
```typescript:src/components/TopBar.tsx
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import UserAvatar from "./Avatar";
import AppContext from "../contexts/AppContext";
import MenuIcon from "./subcomponents/MenuIcon";
import Box from "@mui/material/Box";
import { navigate } from "gatsby";
import { FormattedMessage } from "react-intl";
import { SeverityPill } from "./severity-pill";

import { SettingsButton, langProps } from "./SettingsButton";
import Container from "@mui/material/Container";

const drawerWidth = 240;

interface TopBarProps {
  title: string;
  icon: string;
  uilang?: any;
  langKey?: string;
  langs?: langProps[];
}

const TopBar = ({ title, icon, uilang, langKey, langs }: TopBarProps) => {
  const { IsOpen, toggleOpen, logout } = React.useContext(AppContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  let selectedUrl = () => {
    if (window.location.pathname == "/en/") {
      return false;
    } else {
      return true;
    }
  };
  return (
    <AppBar
      position='fixed'
      color='inherit'
      elevation={0}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        backgroundColor: (theme) => theme.palette.background.default,
        transition: (theme) =>
          theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        ...(IsOpen && {
          marginLeft: drawerWidth,
          width: `calc(100% - ${drawerWidth}px)`,
          transition: (theme) =>
            theme.transitions.create(["width", "margin"], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
        }),
      }}
    >
      <Container
        maxWidth='xl'
        sx={{
          paddingLeft: "0px !important",
          paddingRight: "0px !important",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Toolbar component='nav'>
          <MenuIcon icontype={icon} aria-label='toggle menu' />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexGrow: 1,
              ml: 1,
            }}
          >
            <SeverityPill
              sx={{
                alignSelf: "flex-end",
                mr: 1,
                ml: 1,
                mt: 1,
              }}
              color='success'
            >
              beta
            </SeverityPill>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            {uilang && uilang}
            <SettingsButton langs={langs} langKey={langKey} />
            <UserAvatar handleClick={handleClick} />
          </Box>

          {selectedUrl && (
            <Menu
              id='demo-positioned-menu'
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem onClick={() => navigate("/app/profile")}>
                <FormattedMessage id='MC01' />
              </MenuItem>
              <MenuItem onClick={() => navigate("/app/documents")}>
                <FormattedMessage id='MC02' />
              </MenuItem>
              <MenuItem onClick={logout}>
                <FormattedMessage id='MC03' />
              </MenuItem>
            </Menu>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default TopBar;


```
```typescript:src/components/documents-page.tsx
import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ChevronRight from "@mui/icons-material/ChevronRight";
import Documents from "../components/account/Documents";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import History from "../components/account/History";

interface DocumentsPageProps {
  path: string;
  component?: React.ComponentType<{}>;
}

const tabs = [
  { label: "History", value: "History" },
  { label: "Saved", value: "Saved" },
];

const DocumentsPage: React.FC<DocumentsPageProps> = () => {
  const [currentTab, setCurrentTab] = useState("History");

  const handleTabsChange = (event: React.SyntheticEvent, value: string) => {
    setCurrentTab(value);
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "background.default",
          minHeight: "100%",
          py: 2,
        }}
      >
        <Container maxWidth="xl">
          <Grid container justifyContent='space-between' spacing={3}>
            <Grid item>
              <Breadcrumbs
                aria-label='breadcrumb'
                separator={<ChevronRight fontSize='small' />}
                sx={{ mt: 1 }}
              >
                <Link to='/app/'>App</Link>
                <Typography color='textSecondary' variant='subtitle2'>
                  Documents
                </Typography>
                <Typography color='textPrimary' variant='subtitle2'>
                  {currentTab}
                </Typography>
              </Breadcrumbs>
            </Grid>
          </Grid>
          <Box sx={{ mt: 3 }}>
            <Tabs
              indicatorColor='primary'
              onChange={handleTabsChange}
              scrollButtons='auto'
              textColor='primary'
              value={currentTab}
              variant='scrollable'
            >
              {tabs.map((tab) => (
                <Tab key={tab.value} label={tab.label} value={tab.value} />
              ))}
            </Tabs>
          </Box>
          <Divider />
          <Box sx={{ mt: 3 }}>
            {currentTab === "History" && <History />}
            {currentTab === "Saved" && <Documents />}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default DocumentsPage;


```
```typescript:src/components/ListItemTextParent.tsx
import React from "react";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

const ListItemTextParent = ({ primary }) => {
  return (
    <ListItemText
      primary={
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: ".85rem",
            lineHeight: "1.9",
            fontFamily:
              'BlinkMacSystemFont,"Helvetica Neue","Roboto",Roboto,Tahoma,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
          }}
          color='text.secondary'
          variant='body1'
        >
          {primary}
        </Typography>
      }
    />
  );
};

export default ListItemTextParent;


```
```typescript:src/components/AccountManage.tsx
import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import {
  AccountBillingSettings,
  AccountGeneralSettings,
  AccountNotificationsSettings,
  AccountSecuritySettings,
} from "../components/account";
import useSettings from "../hooks/useSettings";
import ChevronRight from "@mui/icons-material/ChevronRight";

const tabs = [
  { label: "General", value: "general" },
  { label: "Billing", value: "billing" },
  { label: "Notifications", value: "notifications" },
  { label: "Security", value: "security" },
];

interface AccountManageProps {
  path: string;
  component?: React.ComponentType<{}>;
}

const AccountManage: React.FC<AccountManageProps> = () => {
  const { settings } = useSettings();
  const [currentTab, setCurrentTab] = useState("general");

  const handleTabsChange = (event: React.SyntheticEvent, value: string) => {
    setCurrentTab(value);
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "background.default",
          minHeight: "100%",
          py: 2,
        }}
      >
        <Container maxWidth="xl">
          <Grid container justifyContent='space-between' spacing={3}>
            <Grid item>
              <Breadcrumbs
                aria-label='breadcrumb'
                separator={<ChevronRight fontSize='small' />}
                sx={{ mt: 1 }}
              >
                <Link to='/app'>App</Link>
                <Typography color='textSecondary' variant='subtitle2'>
                  Profile
                </Typography>
                <Typography color='textPrimary' variant='subtitle2'>
                  {currentTab}
                </Typography>
              </Breadcrumbs>
            </Grid>
          </Grid>
          <Box sx={{ mt: 3 }}>
            <Tabs
              indicatorColor='primary'
              onChange={handleTabsChange}
              scrollButtons='auto'
              textColor='primary'
              value={currentTab}
              variant='scrollable'
            >
              {tabs.map((tab) => (
                <Tab key={tab.value} label={tab.label} value={tab.value} />
              ))}
            </Tabs>
          </Box>
          <Divider />
          <Box sx={{ mt: 3 }}>
            {currentTab === "general" && <AccountGeneralSettings />}
            {currentTab === "billing" && <AccountBillingSettings />}
            {currentTab === "notifications" && <AccountNotificationsSettings />}
            {currentTab === "security" && <AccountSecuritySettings />}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default AccountManage;


```
```javascript:src/components/HeadContent.js
 

```
```typescript:src/components/app-components/state-card.tsx
import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

interface cardStateProps {
  title?: string;
  body?: string;
}

export default function StateCard({ title, body }: cardStateProps) {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
            R
          </Avatar>
        }
        title={title && title}
      />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          {body && body}
        </Typography>
      </CardContent>
    </Card>
  );
}


```
```typescript:src/components/app-components/states.tsx
import type { FC } from "react";
import React, { useState } from "react";
import { Box, Chip, Grid, Stack, Typography } from "@mui/material";
import { SeverityPill } from "../severity-pill";
import { navigate } from "gatsby";
import useToolsProducts from "../../hooks/useToolsProducts";
import useSettings from "../../hooks/useSettings";

// Removes duplicate elements from an array
const removeDuplicates = (array) => array.filter((item, index) => array.indexOf(item) === index);

const ProductList: FC = () => {
  const tools = useToolsProducts();
  const { settings } = useSettings();
  const products = tools[settings.lang].edges.map(item => item.node.frontmatter);

  const [displayedProducts, setDisplayedProducts] = useState(products);

  // Extract unique product categories
  const productCategories = removeDuplicates(products.map(item => item.slug.split("/")[3]));

  // Handles the click event on category chips
  const handleCategoryClick = (category) => {
    setDisplayedProducts(products.filter(product => product.slug.split("/")[3] === category));
  };

  return (
    <Box sx={{ p: 1 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        sx={{ flexWrap: "wrap" }}
        spacing={2}
      >
        {productCategories.map((category, index) => (
          <Chip
            label={category}
            key={`chip-${index}`}
            variant={displayedProducts.some(product => product.slug.split("/")[3] === category) ? "filled" : "outlined"}
            onClick={() => handleCategoryClick(category)}
          />
        ))}
      </Stack>
      <Grid container sx={{ mt: 3 }} spacing={2}>
        {displayedProducts.map((product, index) => (
          <Grid
            item
            key={`product-${index}`}
            md={4}
            sm={6}
            xs={12}
            sx={{ textAlign: "start" }}
          >
            <Box
              sx={{
                border: (theme) => `1px solid ${theme.palette.divider}`,
                p: 2,
                borderRadius: 1,
                backgroundColor: "background.paper",
              }}
            >
              <Box
                sx={{
                  alignItems: "flex-start",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <Box sx={{ flexGrow: 1, mb: 2 }}>
                  <Typography
                    color="primary"
                    sx={{ cursor: "pointer" }}
                    onClick={() => navigate(product.url)}
                    component="span"
                    variant="body2"
                  >
                    {product.title}
                  </Typography>
                </Box>
                <Box sx={{ ml: 1, alignSelf: "flex-end" }}>
                  <SeverityPill color="success">{product.tag}</SeverityPill>
                </Box>
              </Box>
              <Typography
                color="textSecondary"
                sx={{ mt: 1 }}
                variant="caption"
              >
                {product.header}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductList;


```
```typescript:src/components/SocialSignIn.tsx
import React from "react";
import { Auth } from "aws-amplify";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SvgIcon from "@mui/material/SvgIcon";
import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";


function asSvgIcon(reactSvgComponent) {
  const Icon = function (props) {
    const viewBox = React.useMemo(
      () => reactSvgComponent({}).props.attr.viewBox,
      []
    );
    return (
      <SvgIcon component={reactSvgComponent} viewBox={viewBox} {...props} />
    );
  };

  Object.defineProperty(Icon, "displayName", {
    value: `AsSvgIcon(${
      reactSvgComponent.displayName || reactSvgComponent.name
    })`,
  });

  return Icon;
}
function SocialSignIn(props) {
  const FilledFaFacebookSquare = asSvgIcon(FaFacebookSquare);
  const FilledFcGoogle = asSvgIcon(FcGoogle);
  return (
    <>
      <Box
        sx={{
          "& > :not(style)": { m: 1 },
        }}
      >
        <Button
          variant='outlined'
          onClick={() => Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google })}
          {...props}
          color='primary'
          startIcon={<FilledFcGoogle />}
          aria-label='login with google'
        >
          Google
        </Button>
      </Box>
    </>
  );
}

export default SocialSignIn;


```
```typescript:src/components/icons.tsx
/* Component that takes props as string and depend on type of the props will return material icon related to the props */
import React from "react";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import EmailIcon from "@mui/icons-material/Email";
import PlaylistAddRoundedIcon from "@mui/icons-material/PlaylistAddRounded";
import DoneOutlineRoundedIcon from "@mui/icons-material/DoneOutlineRounded";
import LibraryBooksRoundedIcon from "@mui/icons-material/LibraryBooksRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import WebRoundedIcon from "@mui/icons-material/WebRounded";
import HistoryEduRoundedIcon from "@mui/icons-material/HistoryEduRounded";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import ViewHeadlineOutlinedIcon from "@mui/icons-material/ViewHeadlineOutlined";
import {
  BrandVoiceicon,
  SubHeader,
  SubjectFinder,
  SearchKeyword,
  QuestionGeneration,
  MetaDescription,
  LandingPageHeader,
  BlogPostHeaderIcon,
  LandingPageHeaderDescription,
  BlogPASIcon,
  Thankyou,
  BlogIntro,
  AddBlog,
  RewriterIcon,
  ProspectingEmail,
  TaglineIcon,
  KeywordIcon,
  TagIcon,
  DictionaryCheck,
  EmailOpen,
  AddEmail,
  ProductDescriptionIcon,
  Hashtag,
  WriteVisionStatement,
  GrammarCorrection,
  WriteValueProp,
  CopyWritingIcon,
  WritingToolsIcon,
  EcommerceDescription,
  ProductDescriptionAmazon,
  WriteFollowUpEmail,
  WriteColdEmail,
  WriteMissionStatement,
  BlogPostConclusionIcon,
  BlogPostAidaIcon,
  LanguageTranslation,
  SimpleSquare,
  OutlineDoc,
  FormalStyle,
  IdeasBrainstorm,
} from "../icons/Icons";

interface IconProps {
  type: string;
}

const IconsList = (props) => {
  switch (props.type) {
    case "email":
      return (
        <EmailIcon
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "add":
      return (
        <PlaylistAddRoundedIcon
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );

    case "copyWritingIcon":
      return (
        <CopyWritingIcon
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "rewriter":
      return (
        <RewriterIcon
          viewBox='0 0 600 600'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "done":
      return (
        <DoneOutlineRoundedIcon
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "library":
      return (
        <LibraryBooksRoundedIcon
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "description":
      return (
        <DescriptionRoundedIcon
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "writingToolsIcon":
      return (
        <WritingToolsIcon
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "expandLess":
      return (
        <ExpandLess
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "expandMore":
      return (
        <ExpandMore
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "web":
      return (
        <WebRoundedIcon
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "history":
      return (
        <HistoryEduRoundedIcon
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "summarize":
      return (
        <SummarizeOutlinedIcon
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "viewHeadline":
      return (
        <ViewHeadlineOutlinedIcon
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "vrpano":
      return (
        <WriteValueProp
          viewBox='0 0 600 600'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "borderColor":
      return (
        <BorderColorRoundedIcon
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "brandVoice":
      return (
        <BrandVoiceicon
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "subHeader":
      return (
        <SubHeader
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "subjectFinder":
      return (
        <SubjectFinder
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "searchKeyword":
      return (
        <SearchKeyword
          viewBox='0 0 600 600'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "questionGeneration":
      return (
        <QuestionGeneration
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "metaDescription":
      return (
        <MetaDescription
          viewBox='0 0 600 600'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "landingPageHeader":
      return (
        <LandingPageHeader
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "landingPageHeaderDescription":
      return (
        <LandingPageHeaderDescription
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "blogPAS":
      return (
        <BlogPASIcon
          viewBox='0 0 600 600'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "thankyou":
      return (
        <Thankyou
          viewBox='0 0 600 600'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "blogIntro":
      return (
        <BlogIntro
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "addBlog":
      return (
        <AddBlog
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "prospectingEmail":
      return (
        <ProspectingEmail
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "taglineIcon":
      return (
        <TaglineIcon
          viewBox='0 0 600 600'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "keywordIcon":
      return (
        <KeywordIcon
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "tagIcon":
      return (
        <TagIcon
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "paraphrase":
      return (
        <DictionaryCheck
          viewBox='0 0 600 600'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "emailOpen":
      return (
        <EmailOpen
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "addEmail":
      return (
        <AddEmail
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "productDescriptionIcon":
      return (
        <ProductDescriptionIcon
          viewBox='0 0 600 600'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "hashtag":
      return (
        <Hashtag
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "writeVisionStatement":
      return (
        <WriteVisionStatement
          viewBox='0 0 600 600'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "grammarCorrection":
      return (
        <GrammarCorrection
          viewBox='0 0 24 24'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "productDescriptionAmazon":
      return (
        <ProductDescriptionAmazon
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "writeFollowUpEmail":
      return (
        <WriteFollowUpEmail
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "writeColdEmail":
      return (
        <WriteColdEmail
          viewBox='0 0 600 600'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "ecommerceDescription":
      return (
        <EcommerceDescription
          viewBox='0 0 600 600'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "writeMissionStatement":
      return (
        <WriteMissionStatement
          viewBox='0 0 600 600'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "blogPostAida":
      return (
        <BlogPostAidaIcon
          viewBox='0 0 600 600'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "blogPostConclusionIcon":
      return (
        <BlogPostConclusionIcon
          viewBox='0 0 600 600'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "languageTranslation":
      return (
        <LanguageTranslation
          viewBox='0 0 24 24'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "simpleSquare":
      return (
        <SimpleSquare
          viewBox='0 0 24 24'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "outlineDoc":
      return (
        <OutlineDoc
          viewBox='0 0 24 24'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "ideasBrainstorm":
      return (
        <IdeasBrainstorm
          viewBox='0 0 24 24'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "formality":
      return (
        <FormalStyle
          viewBox='0 0 64 64'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "blogPostHeaderIcon":
      return (
        <BlogPostHeaderIcon
          viewBox='0 0 600 600'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    default:
      return <></>;
  }
};

export default IconsList;


```
```typescript:src/components/homepage/Content.tsx
import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Component to render HTML content safely
export const HTMLContent = ({ content }) => (
  <Box
    sx={{
      fontSize: 14,
      p: 2,
      fontWeight: 400,
    }}
    dangerouslySetInnerHTML={{ __html: content }}
  />
);

// Main Content component
const Content = ({ content }) => (
  <Box
    sx={{
      p: 2,
    }}
  >
    <Typography variant='body1' color='text.primary'>
      {content}
    </Typography>
  </Box>
);

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
};

HTMLContent.propTypes = Content.propTypes;

export default Content;

```
```typescript:src/components/homepage/ContactDialogs.tsx
import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import ContactForm from "./ContactForm";
import { styled } from "@mui/material/styles";
import { useIntl } from "react-intl";
import Link from "@mui/material/Link";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label='close'
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export default function ContactDialogs() {
  const [open, setOpen] = React.useState(false);
  const intl = useIntl();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Typography
        sx={{ mt: 3 }}
        variant='body2'
        color='text.secondary'
        onClick={handleClickOpen}
      >
        <Link component={"span"} style={{ cursor: "pointer" }}>
          {intl.formatMessage({ id: "F50" })}
        </Link>
      </Typography>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby='feadbacl-dialog-title'
        open={open}
      >
        <BootstrapDialogTitle id='feadback-dialog-title' onClose={handleClose}>
          {intl.formatMessage({ id: "F50" })}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            {intl.formatMessage({ id: "F51" })}
          </Typography>
          <ContactForm />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            {intl.formatMessage({ id: "F52" })}
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}


```
```typescript:src/components/homepage/TransitionAlerts.tsx
import * as React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";

interface TransitionAlertsProps {
  message: any;
  state: any;
  color?: any;
}
export default function TransitionAlerts({
  message,
  state,
  color = "success",
}: TransitionAlertsProps) {
  const [open, setOpen] = state;
  return (
    <Box sx={{ width: "100%" }}>
      <Collapse in={open}>
        <Alert
          color={color}
          action={
            <IconButton
              aria-label='close'
              color='inherit'
              size='small'
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize='inherit' />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {message}
        </Alert>
      </Collapse>
    </Box>
  );
}


```
```typescript:src/components/homepage/blog-card.tsx
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
// import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
// import CommentIcon from "@mui/icons-material/Comment";
import NoUnderLineLink from "../nounderline-link";
// import SocialShare from "./social-share";
import TagList from "../landings/modules/TagList";

interface blogcardProps {
  slug: string;
  title: string;
  excerpt: string;
  lang: string;
  tags: string[];
  date: string;
}

const BlogCard = ({
  slug,
  title,
  excerpt,
  lang,
  tags,
  date,
}: blogcardProps) => {
  return (
    <Card
      elevation={0}
      sx={{
        backgroundColor: "background.default",
        borderRadius: 2,
      }}
    >
      <Box sx={{ p: 2 }}>
        {/* image or media here via </CardMedia> */}
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            mt: 2,
          }}
        >
          <Box sx={{ ml: 1 }}>
            <Typography variant='h3' component='h3'>
              <NoUnderLineLink sx={{ fontSize: "18px" }} to={slug ? slug : "#"}>
                {title && title}
              </NoUnderLineLink>
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          pb: 2,
          px: 3,
        }}
      >
        <Typography color='text.primary' variant='body1'>
          {excerpt && excerpt}
        </Typography>
        <Box
          sx={{
            alignItems: "start",
            display: "flex",
            flexWrap: "wrap",
            mt: 2,
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant='caption' color='textSecondary'>
              {date && date}
            </Typography>
          </Box>
          <TagList tags={tags.slice(0, 1)} langKey={lang} />
        </Box>
      </Box>
    </Card>
  );
};

export default BlogCard;


```
```typescript:src/components/homepage/BlogPostTemplate.tsx
import React from "react";
import TagList from "../landings/modules/TagList";
import Time from "./Time";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

interface BlogPostTemplateProps {
  image: IGatsbyImageData;
  imageAlt?: string;
  date: string;
  content: string;
  tags: string[];
  lang: string;
}

const BlogPostTemplate: React.FC<BlogPostTemplateProps> = ({
  image,
  imageAlt,
  date,
  content,
  tags,
  lang,
}) => {
  const gatsbyImage = image ? getImage(image) : null;

  return (
    <Container maxWidth="lg" component="section" sx={{ mt: 8, minHeight: "100%" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sx={{ my: 4 }}>
          {date && <Time date={date} />}

          {gatsbyImage && (
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <GatsbyImage
                style={{
                  border: "2px solid #43C6B7",
                  borderRadius: "5px",
                }}
                image={gatsbyImage}
                alt={imageAlt || "Blog post image"}
              />
            </Box>
          )}
          
          {content && (
            <Box
              color="text.primary"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}
        </Grid>
        
        {tags && tags.length > 0 && (
          <Box sx={{ display: "flex", flexWrap: "wrap", mb: 5 }}>
            <TagList tags={tags} langKey={lang} />
          </Box>
        )}
      </Grid>
    </Container>
  );
};

export default BlogPostTemplate;

```
```typescript:src/components/homepage/PostListItem.tsx
import React from "react";
import Time from "./Time";
import Link from "../Link";
import { Card, CardContent, Typography, Box } from "@mui/material";

interface PostFields {
  slug: string;
  langKey: string;
}

interface PostFrontmatter {
  title: string;
  date: string;
}

interface Post {
  fields: PostFields;
  frontmatter: PostFrontmatter;
  excerpt?: string;
}

interface PostListItemProps {
  post: Post;
}

// 📌 Usage: <PostListItem post={postData} />
const PostListItem: React.FC<PostListItemProps> = ({ post }) => {
  const { fields, frontmatter, excerpt } = post;
  const { slug } = fields;
  const { title, date } = frontmatter;

  return (
    <Box sx={{ maxWidth: 450, m: 1 }}>
      <Card>
        <CardContent>
          <Time date={date} />
          <Typography gutterBottom variant="h2">
            <Link href={slug} sx={{ fontSize: "16px" }} size="small">
              {title}
            </Link>
          </Typography>
          {excerpt && (
            <Typography variant="body1" color="textSecondary">
              {excerpt}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default PostListItem;

// 💡 Potential feature: Add truncation for long excerpts
// const truncateExcerpt = (text: string, maxLength = 150): string => 
//   text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;

```
```typescript:src/components/homepage/TagRouteTemplate.tsx
import React from "react";
import PostList from "./PostList";
import Badge from "@mui/material/Badge";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const TagRouteTemplate = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges.map((p) => p.node);

  return (
    <Box
      sx={{
        pt: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        flexWrap: "wrap",
        backgroundColor: "background.default",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          m: 5,
        }}
      >
        <Badge badgeContent={data.allMarkdownRemark.totalCount} color='primary'>
          <Typography variant='h1' sx={{ fontSize: "20px" }} color='primary'>
            {pageContext.tag}
          </Typography>
        </Badge>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "start",
          flexWrap: "wrap",
          m: 2,
        }}
      >
        <PostList posts={posts} />
      </Box>
    </Box>
  );
};

export default TagRouteTemplate;


```
```typescript:src/components/homepage/SelectLanguage.tsx
import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "../Link";
// it could be your App.tsx file or theme file that is included in your tsconfig.json
import { Theme, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const LangButton = styled(Button)(({ theme }) => ({
  padding: "2px",
  margin: 0,
  textDecoration: "none",
  "&:hover": {
    textDecoration: "none",
    color: theme.palette.primary.main,
  },
}));

function FWB(props, ref) {
  return <LangButton ref={ref} {...props} />;
}
const LanguageButton = React.forwardRef(FWB);

//All GPT3 languages

// const languageTag = {
//   en: "EN-English",
//   fr: "FR-French",
//   no: "NO-Norwegian",
//   de: "DE-German",
//   es: "ES-Spanish",
//   it: "IT-Italian",
//   pt: "PT-Portuguese",
//   nl: "NL-Dutch",
//   ru: "RU-Russian",
//   ro: "RO-Romanian",
//   pl: "PL-Polish",
//   fi: "FI-Finnish",
//   da: "DA-Danish",
//   sv: "SV-Swedish",
//   ja: "JA-Japanese",
//   zh: "ZH-Chinese",
//   cs: "CS-Czech",
//   hu: "HU-Hungarian",
//   id: "ID-Indonesian",
// };

const SelectLanguage = (props) => {
  const languageTag = {
    en: "EN-English",
    fi: "FI-Finnish",
    da: "DA-Danish",
    sv: "SV-Swedish",
    no: "NO-Norwegian",
  };
  const linksOf = props.langs.map((lang, index) => {
    return (
      <Box
        key={index + 3}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Link
          sx={{
            borderBottom: "none",
            mr: 1,
            fontSize: "0.8rem",
            cursor: lang.selected ? "default" : "pointer",
            color: lang.selected ? "text.disabled" : "primary.main",
            textDecoration: "none",
            borderRadius: 0.5,
            px: 0.5,
            "&:hover": {
              textDecoration: "none",
              borderBottom: "none",
              color: lang.selected ? "text.disabled" : "#FFFFFF",
              backgroundColor: !lang.selected ? "primary.main" : "transparent",
            },
          }}
          to={lang.link}
          rel='alternate'
          hrefLang={lang.langKey}
        >
          {languageTag[`${lang.langKey}`]}
        </Link>
      </Box>
    );
  });
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      {linksOf}
    </Box>
  );
};

SelectLanguage.propTypes = {
  langs: PropTypes.array,
};

export default SelectLanguage;


```
```typescript:src/components/homepage/PostList.tsx
import React from "react";
import PostListItem from "./PostListItem";

// Define types
type Post = {
  id: string;
  // Add other post properties here
};

type PostListProps = {
  posts: Post[];
  isLoading?: boolean;
};

const PostList: React.FC<PostListProps> = ({ posts, isLoading = false }) => {
  // Log for debugging
  console.log(`Rendering PostList with ${posts.length} posts`);

  if (isLoading) return <p>Loading posts...</p>;

  if (!posts.length) return <p>No posts available.</p>;

  return (
    <ul aria-label="Post list">
      {posts.map((post) => (
        <PostListItem key={post.id} post={post} />
      ))}
    </ul>
  );
};

export default PostList;

// Usage example:
// <PostList posts={postData} isLoading={isLoadingPosts} />

```
```javascript:src/components/homepage/utils.js
const select = (langKey) => {
  var res;
  switch (langKey) {
    case "en":
      res = 0;
      break;
    case "fa":
      res = 1;
      break;
    default:
      res = null;
  }
  return res;
};

export default select;


```
```typescript:src/components/homepage/Time.tsx
import React from "react";
import PropTypes from "prop-types";
import { FormattedDate } from "react-intl";
import Typography from "@mui/material/Typography";

const Time = ({ date }) => {
  return (
    <Typography component='time' variant='caption' color='textSecondary'>
      <FormattedDate
        value={new Date(date)}
        month='long'
        day='numeric'
        year='numeric'
      />
    </Typography>
  );
};

Time.propTypes = {
  date: PropTypes.string.isRequired,
};

export default Time;


```
```typescript:src/components/homepage/social-share.tsx
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import SpeedDial, { SpeedDialProps } from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import ShareIcon from "@mui/icons-material/Share";
import RedditIcon from "@mui/icons-material/Reddit";
import { FormattedMessage } from "react-intl";

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: "absolute",
  "&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft": {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
    left: theme.spacing(0),
  },
}));

export default function SocialShare() {
  const [PathUrl, setPathUrl] = React.useState("https://maila.ai/");
  React.useEffect(() => {
    setPathUrl("https://maila.ai" + window.location.pathname);
  }, []);

  const ToShare = `Check out Maila AI`;
  const url = PathUrl;
  const title = ToShare;

  const [open, setOpen] = React.useState(false);
  // it might be different in different view size it would be up, left, right
  const [direction, setDirection] =
    React.useState<SpeedDialProps["direction"]>("right");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        transform: "translateZ(0px)",
        alignItems: "center",
        display: "flex",
        position: "relative",
      }}
    >
      <StyledSpeedDial
        ariaLabel='Share on Social media'
        icon={<ShareIcon fontSize='small' />}
        direction={direction}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        FabProps={{
          color: "primary",
          size: "small",
          style: {
            width: "24px",
            height: "24px",
            minHeight: "24px",
          },
        }}
      >
        <SpeedDialAction
          icon={<FacebookIcon fontSize='small' />}
          sx={{ height: "24px", width: "24px", minHeight: "24px" }}
          tooltipTitle={<FormattedMessage id='shareOnFacebookButton' />}
          onClick={() => {
            window.open(
              `https://www.facebook.com/sharer/sharer.php?u=${url}`,
              "_blank"
            );
            handleClose();
          }}
        />
        <SpeedDialAction
          icon={<TwitterIcon fontSize='small' />}
          tooltipTitle={<FormattedMessage id='shareOnTwitterButton' />}
          sx={{ height: "24px", width: "24px", minHeight: "24px" }}
          onClick={() => {
            window.open(
              `https://twitter.com/intent/tweet?text=${title}&url=${url}`,
              "_blank"
            );
            handleClose();
          }}
        />
        <SpeedDialAction
          icon={<LinkedInIcon fontSize='small' />}
          sx={{ height: "24px", width: "24px", minHeight: "24px" }}
          tooltipTitle={<FormattedMessage id='shareOnLinkedInButton' />}
          onClick={() => {
            window.open(
              `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&summary=${title}&source=${url}`,
              "_blank"
            );
            handleClose();
          }}
        />
        <SpeedDialAction
          icon={<RedditIcon fontSize='small' />}
          sx={{ height: "24px", width: "24px", minHeight: "24px" }}
          tooltipTitle={<FormattedMessage id='shareOnRedditButton' />}
          onClick={() => {
            window.open(
              `https://www.reddit.com/submit?url=${url}&title=${title}`,
              "_blank"
            );
            handleClose();
          }}
        />
      </StyledSpeedDial>
    </Box>
  );
}


```
```typescript:src/components/homepage/blog-lists.tsx
import React from "react";
import BlogCard from "./blog-card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const BlogLists = (props) => {
  const posts = props.data.allMarkdownRemark.edges;
  return (
    <Grid
      sx={{ mt: 8, backgroundColor: "background.paper" }}
      container
      direction='row'
      justifyContent='center'
      alignItems='center'
    >
      {posts &&
        posts.map(({ node: post }, i) => (
          <Grid item key={i + 130450} md={6} xs={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItem: "center",
                flexWrap: "wrap",
                m: 1,
                pt: 2,
                mx: 3,
              }}
              key={post.id}
            >
              <BlogCard
                slug={post.fields.slug}
                title={post.frontmatter.title}
                date={post.frontmatter.date}
                excerpt={post.excerpt}
                tags={post.frontmatter.tags}
                lang={post.frontmatter.lang}
              />
            </Box>
          </Grid>
        ))}
    </Grid>
  );
};

export default BlogLists;


```
```typescript:src/components/homepage/ContactForm.tsx
import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import Typography from "@mui/material/Typography";
import TransitionAlerts from "./TransitionAlerts";
import Collapse from "@mui/material/Collapse";
import { FormattedMessage } from "react-intl";

const wait = (time) => new Promise((res) => setTimeout(res, time));

const ContactForm = (props) => {
  const { customers, ...other } = props;
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const lang = props.lang;
  return (
    <Formik
      initialValues={{
        email: "",
        name: "",
        phone: "",
        message: "",
        isVerified: false,
        submit: null,
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Must be a valid email")
          .max(255)
          .required("Email is required"),
        name: Yup.string().max(255).required("Name is required"),
        phone: Yup.string().max(15),
        isVerified: Yup.bool(),
        message: Yup.string().max(2595),
      })}
      onSubmit={async (
        values,
        { resetForm, setErrors, setStatus, setSubmitting }
      ) => {
        try {
          // NOTE: Make API request
          const theUrl = `https://searchquote.azurewebsites.net/api/comments`;
          let params = {};
          params["email"] = values.email;
          params["name"] = values.name;
          params["comment"] = values.message;
          const regData = JSON.stringify(params);
          const response = await fetch(theUrl, {
            method: "POST",
            body: regData,
          });
          const data = await response.json();
          await wait(500);
          resetForm();
          setStatus({ success: true });
          setOpen(true);
          setMessage(data.message);
          setSubmitting(false);
        } catch (err) {
          console.error(err);
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setSubmitting(false);
        }
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values,
      }) => (
        <form onSubmit={handleSubmit} {...other}>
          <Card>
            <Box
              sx={{
                p: 2,
                boxShadow: (theme) => theme.shadows[5],
              }}
            >
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Typography
                    sx={{
                      mb: 1,
                    }}
                    variant='subtitle1'
                    color='primary'
                  >
                    <FormattedMessage id='CA094' />
                  </Typography>
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.name && errors.name)}
                    fullWidth
                    helperText={touched.name && errors.name}
                    label={<FormattedMessage id='N001' />}
                    name='name'
                    size='small'
                    InputLabelProps={{ shrink: true }}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    value={values.name}
                    variant='outlined'
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.email && errors.email)}
                    fullWidth
                    helperText={touched.email && errors.email}
                    label={<FormattedMessage id='E002' />}
                    name='email'
                    InputLabelProps={{ shrink: true }}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    size='small'
                    value={values.email}
                    variant='outlined'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={Boolean(touched.message && errors.message)}
                    helperText={touched.message && errors.message}
                    label={<FormattedMessage id='M003' />}
                    name='message'
                    fullWidth
                    size='small'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    multiline
                    value={values.message}
                    variant='outlined'
                    InputLabelProps={{ shrink: true }}
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TransitionAlerts state={[open, setOpen]} message={message} />
                  <Collapse in={!open}>
                    <FormHelperText>
                      <FormattedMessage id='CF005' />
                      <Link href={`/${lang}/legal/terms`}>
                        <FormattedMessage id='TAS025' />
                      </Link>
                    </FormHelperText>
                  </Collapse>
                </Grid>
              </Grid>
              <Box sx={{ mt: 2 }}>
                <Button
                  color='primary'
                  disabled={isSubmitting}
                  type='submit'
                  variant='contained'
                >
                  <FormattedMessage id='SF010' />
                </Button>
              </Box>
            </Box>
          </Card>
        </form>
      )}
    </Formik>
  );
};

export default ContactForm;


```
```typescript:src/components/homepage/AllTagsPageTemplate.tsx
import React from "react";
import PropTypes from "prop-types";
import kebabCase from "lodash/kebabCase";
import { Box, Chip, Typography } from "@mui/material";
import LabelRoundedIcon from "@mui/icons-material/LabelRounded";
import AccessibleLink from "components/Link";


const AllTagsPageTemplate = ({ allBlogTags, langKey }) => {
  return (
    <Box
      sx={{
        pt: 10,
        pb: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          p: 2,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant='h3' color='primary' component='h1'>
          All Tags
        </Typography>
        <Box
          sx={{
            p: 2,
          }}
        >
          {allBlogTags.map((tag, i) => (
            <AccessibleLink
              key={i}
              to={`/${langKey}/tags/${kebabCase(tag.fieldValue)}/`}
              sx={{
                borderBottom: "none",
                textDecoration: "none",
                "&:hover": {
                  borderBottom: "none",
                  textDecoration: "none",
                },
              }}
            >
              <Chip
                sx={{
                  m: 1,
                }}
                icon={<LabelRoundedIcon color='success' />}
                label={tag.fieldValue}
                color='success'
                size='small'
                clickable
              />
            </AccessibleLink>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

AllTagsPageTemplate.propTypes = {
  allBlogTags: PropTypes.arrayOf(
    PropTypes.shape({
      fieldValue: PropTypes.string.isRequired,
    })
  ).isRequired,
  langKey: PropTypes.string.isRequired,
};

export default AllTagsPageTemplate;


```
```typescript:src/components/homepage/GroupedList10.tsx
import React from "react";
import {
  Card, CardHeader, CardContent, CardActions,
  Box, Button, Chip, Divider, Grid,
  Typography
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Card status styles
const STATUS_STYLES = {
  small: {
    backgroundColor: "rgba(15, 188, 73, 0.1)",
    color: "rgba(15, 188, 73, 1)",
    borderRadius: "4px",
    padding: "4px",
  }
};

// Card component for financial information display
export function FinanceCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <Chip
            label="Small"
            variant="filled"
            style={STATUS_STYLES.small}
            size="medium"
          />
        }
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography variant="h3" color="text.secondary">
          This impressive paella
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Divider variant="fullWidth" />
        <Box
          sx={{
            alignItems: "flex-start",
            display: "flex",
            flexDirection: "column",
            pt: 2,
          }}
        >
          <Button
            color="primary"
            endIcon={<ArrowForwardIcon fontSize="small" />}
            variant="text"
          >
            Add money
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}

// Grid layout for displaying multiple finance cards
export function FinanceCardGrid() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
        <FinanceCard />
      </Grid>
    </Grid>
  );
}

```
```typescript:src/components/homepage/contact-me-container.tsx
import * as React from "react";
import Box from "@mui/material/Box";
import ContactForm from "./ContactForm";
import Container from "@mui/material/Container";

// markup
const ContactMe = ({ langkey }) => {
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth='sm' sx={{ py: "80px" }}>
        <Box
          sx={{
            mb: 8,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ContactForm lang={langkey} />
        </Box>
      </Container>
    </Box>
  );
};

export default ContactMe;


```
```javascript:src/components/homepage/SelectLanguageNav.js
import React, { useState } from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Button from '@mui/material/Button';
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

const SelectLanguageNav = (props) => {
  // const [boolinOnScroll, setboolinOnScroll] = useState(true)
  const [languageColor, setLanguageColor] = useState(false)


  useScrollPosition(({ prevPos, currPos }) => {
    const isShow = currPos.y < prevPos.y
    if (isShow !== languageColor) setLanguageColor(isShow)
  }, [languageColor])


  const languageTag = {
    fa: "SV - Svarige",
    en: "EN - English"
  }
  const links = props.langs.map((lang, index) => {
    return (
      <>

        {!lang.selected && <Button color="primary">
          <Link key={index}
            to={lang.link}
          >
            {languageTag[`${lang.langKey}`]}
          </Link>
        </Button>}

      </>
    );
  });
  return (
    <div>
      <div onMouseOver={(event) => setLanguageColor(true)} onScroll={(event) => setLanguageColor(true)} onMouseOut={(event) => setLanguageColor(false)}><svg id="langauge" sx={languageColor ? {
        '& > *': {
          '& #z1': {
            fill: "#f5f5f5"
          },
          '& #z2': {
            fill: "#eee"
          },
          '& #z3': {
            fill: "#607d8b"
          },
          '& #z4': {
            fill: "#2196f3"
          },
          '& #z5': {
            fill: "#1565c0"
          },
          '& #z6': {
            fill: "#f5f5f5"
          }
        }
      } : ""} enableBackground="new 0 0 512 512" height={24} viewBox="0 0 512 512" width={24} xmlns="http://www.w3.org/2000/svg"><g>
          <path id="z1" d="m285.426 506h195.668c17.069 0 30.906-13.822 30.906-30.871v-348.169c0-17.05-13.837-30.871-30.905-30.871h-252.915z" fill="#f5f5f5" />
          <path id="z2" d="m481.095 96.088h-30.905c17.069 0 30.905 13.822 30.905 30.871v348.169c0 17.05-13.837 30.871-30.905 30.871h30.905c17.068.001 30.905-13.821 30.905-30.87v-348.169c0-17.05-13.837-30.872-30.905-30.872z" fill="#eee" />
          <path id="z3" d="m457.576 245.384h21.458c1.138 0 2.06-.922 2.06-2.06v-26.785c0-1.138-.922-2.06-2.06-2.06h-70.483c-1.138 0-2.06-.922-2.06-2.06v-19.291c0-1.138-.922-2.06-2.06-2.06h-26.785c-1.138 0-2.06.922-2.06 2.06v19.291c0 1.138-.922 2.06-2.06 2.06h-70.482c-1.138 0-2.06.922-2.06 2.06v26.785c0 1.138.922 2.06 2.06 2.06h115.969c1.534 0 2.537 1.615 1.844 2.983-6.056 11.955-15.209 27.311-28.242 42.919-.82.982-2.35.982-3.17 0-7.965-9.539-14.479-18.979-19.712-27.596-.588-.969-1.841-1.285-2.815-.705l-23.018 13.696c-.982.584-1.31 1.853-.718 2.83 6.433 10.617 14.582 22.341 24.699 34.138.742.865.661 2.171-.206 2.91-14.575 12.44-32.139 23.861-53.152 32.444-1.047.427-1.562 1.611-1.146 2.662l9.87 24.9c.422 1.064 1.635 1.589 2.695 1.157 23.176-9.439 44.622-22.734 63.71-39.357.776-.676 1.919-.678 2.694-.002 17.26 15.068 38.307 28.988 63.79 39.358 1.06.431 2.274-.091 2.696-1.155l9.871-24.902c.417-1.051-.099-2.234-1.146-2.662-21.027-8.589-38.592-20.015-53.166-32.45-.867-.739-.952-2.039-.209-2.903 6.103-7.098 11.859-14.6 17.231-22.49 12.175-17.884 19.903-34.043 24.261-44.504.32-.768 1.068-1.271 1.902-1.271z" fill="#868e96d1" />
          <path id="z4" d="m367.178 404.876-133.968-393.543c-1.086-3.189-4.083-5.333-7.455-5.333h-194.85c-17.068 0-30.905 13.822-30.905 30.871v337.134c0 17.05 13.837 30.871 30.905 30.871z" fill='rgb(84, 89, 95)' />
          <path id="z5" d="m367.178 404.876-81.752 101.124-43.989-101.124z" fill="#343a40" />
          <path id="z6" d="m229.056 196.764c.76 0 1.375.616 1.375 1.375v14.442c0 5.405-.502 10.69-1.465 15.817-7.449 39.823-42.533 69.918-84.585 69.628-47.186-.325-84.949-38.451-84.845-85.638.104-47.102 38.321-85.255 85.448-85.255 23.089 0 44.037 9.16 59.418 24.038.555.537.57 1.422.023 1.968l-20.431 20.431c-.526.526-1.376.54-1.915.027-9.653-9.189-22.714-14.83-37.095-14.83-29.697 0-53.611 23.744-53.812 53.44-.203 29.891 23.968 54.186 53.812 54.186 24.214 0 44.694-15.996 51.447-37.996h-50.072c-.76 0-1.375-.616-1.375-1.375v-28.882c0-.76.616-1.375 1.375-1.375h82.697z" fill="#f5f5f5" /></g></svg> {links}
      </div>
    </div>
  );
};

SelectLanguageNav.propTypes = {
  langs: PropTypes.array,
};

export default SelectLanguageNav;


```
```typescript:src/components/logo.tsx
import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
import { navigate } from "gatsby";

function asSvgIcon(reactSvgComponent) {
  const Icon = function (props) {
    const viewBox = React.useMemo(
      () => reactSvgComponent({}).props.attr.viewBox,
      []
    );
    return (
      <SvgIcon component={reactSvgComponent} viewBox={viewBox} {...props} />
    );
  };

  Object.defineProperty(Icon, "displayName", {
    value: `AsSvgIcon(${
      reactSvgComponent.displayName || reactSvgComponent.name
    })`,
  });

  return Icon;
}

function HomeIcon(props) {
  return (
    <SvgIcon onClick={() => navigate("/")} {...props}>
      <svg
        width='24px'
        height='24px'
        viewBox='0 0 13721 12380'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        xmlSpace='preserve'
        style={{
          fillRule: "evenodd",
          clipRule: "evenodd",
          strokeLinejoin: "round",
          strokeMiterlimit: 2,
        }}
      >
        <g>
          <circle
            cx='6907.61'
            cy='10525.6'
            r='833.333'
            style={{ fill: "#ffc278" }}
          />
          <circle
            cx='8956.74'
            cy='4256.79'
            r='4166.67'
            style={{ fill: "#56f8d3", fillOpacity: 0.86 }}
          />
          <circle
            cx='7870.16'
            cy='8144.3'
            r='4166.67'
            style={{ fill: "#ffb1e6", fillOpacity: 0.7 }}
          />
          <circle
            cx='4792.45'
            cy='5744.83'
            r='4166.67'
            style={{ fill: "#5664d2", fillOpacity: 0.8 }}
          />
        </g>
      </svg>
    </SvgIcon>
  );
}

export default HomeIcon;


```
```typescript:src/components/authentication/password-reset/PasswordResetAmplify.tsx
import React, { useEffect, useRef } from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import * as Yup from "yup";
import { Formik } from "formik";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Auth } from "aws-amplify";
import useIsMountedRef from "../../../hooks/useIsMountedRef";
import { useSnackbar } from "notistack";
import { useIntl } from "react-intl";
import Link from "../../Link";

const PasswordResetAmplify = () => {
  const isMountedRef = useIsMountedRef();
  const { enqueueSnackbar } = useSnackbar();
  const location = useLocation();
  const itemsRef = useRef([]);
  const intl = useIntl();

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, 6);
  }, []);

  return (
    <>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          mb: 3,
        }}
      >
        <div>
          <Typography color='textPrimary' gutterBottom variant='h4'>
            {intl.formatMessage({ id: "LanguageResetPassword" })}
          </Typography>
        </div>
      </Box>
      <Formik
        initialValues={{
          code: ["", "", "", "", "", ""],
          email: location.state?.['username'] || "",
          password: "",
          passwordConfirm: "",
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          code: Yup.array().of(
            Yup.string().required(`${intl.formatMessage({ id: "E503" })}`)
          ),
          email: Yup.string()
            .email(`${intl.formatMessage({ id: "E501" })}`)
            .max(255)
            .required(`${intl.formatMessage({ id: "E502" })}`),
          password: Yup.string()
            .min(7, `${intl.formatMessage({ id: "E504" })}`)
            .max(255)
            .required(`${intl.formatMessage({ id: "E505" })}`),
          passwordConfirm: Yup.string()
            .oneOf(
              [Yup.ref("password"), null],
              `${intl.formatMessage({ id: "E506" })}`
            )
            .required(`${intl.formatMessage({ id: "E505" })}`),
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            await Auth.forgotPasswordSubmit(
              values.email,
              values.code.join(""),
              values.password
            ).then((seccessful) => {
              enqueueSnackbar(`${intl.formatMessage({ id: "F38" })}`, {
                anchorOrigin: {
                  vertical: "top",
                  horizontal: "center",
                },
                variant: "success",
              });
              setStatus({ success: true });
              navigate("/auth/login");
            });
          } catch (err) {
            console.error(err);
            if (isMountedRef.current) {
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
            }
          }
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          setFieldValue,
          touched,
          values,
        }) => (
          <form noValidate onSubmit={handleSubmit}>
            {!((location.state as any)?.username) ? (
              <TextField
                autoFocus
                error={Boolean(touched.email && errors.email)}
                fullWidth
                helperText={touched.email && typeof errors.email === 'string' ? errors.email : undefined}
                label={intl.formatMessage({ id: "F44" })}
                margin='normal'
                name='email'
                id='email'
                onBlur={handleBlur}
                onChange={handleChange}
                type='email'
                value={values.email}
                variant='outlined'
              />
            ) : (
              <TextField
                disabled
                fullWidth
                margin='normal'
                value={(location.state as any)?.username}
                variant='outlined'
              />
            )}
            <Typography
              color='textSecondary'
              sx={{
                mb: 2,
                mt: 3,
              }}
              variant='subtitle2'
            >
              {intl.formatMessage({ id: "F39" })}
            </Typography>
            <Box
              sx={{
                columnGap: "16px",
                display: "grid",
                gridTemplateColumns: "repeat(7, 1fr)",
                py: 1,
              }}
            >
              {[1, 2, 3, 4, 5, 6].map((ref, i) => (
                <TextField
                  error={Boolean(
                    Array.isArray(touched.code) &&
                    touched.code.length === 6 &&
                    errors.code
                  )}
                  fullWidth
                  inputRef={(el) => (itemsRef.current[i] = el)}
                  // eslint-disable-next-line react/no-array-index-key
                  key={`codeNumber-${i}`}
                  name={`code[${i}]`}
                  onBlur={handleBlur}
                  onKeyDown={(event) => {
                    if (event.code === "ENTER") {
                      if (values.code[i]) {
                        setFieldValue(`code[${i}]`, "");
                        return;
                      }

                      if (i > 0) {
                        setFieldValue(`code[${i}]`, "");
                        itemsRef.current[i - 1].focus();
                        return;
                      }
                    }

                    if (Number.isInteger(parseInt(event.key, 10))) {
                      setFieldValue(`code[${i}]`, event.key);

                      if (i < 5) {
                        itemsRef.current[i + 1].focus();
                      }
                    }
                  }}
                  onPaste={(event) => {
                    const paste = event.clipboardData.getData("text");
                    const pasteArray = paste.split("");

                    if (pasteArray.length !== 6) {
                      return;
                    }

                    let valid = true;

                    pasteArray.forEach((x) => {
                      if (!Number.isInteger(parseInt(x, 10))) {
                        valid = false;
                      }
                    });

                    if (valid) {
                      setFieldValue("code", pasteArray);
                      itemsRef.current[5].focus();
                    }
                  }}
                  value={values.code[i]}
                  sx={{
                    display: "inline-block",
                    textAlign: "center",
                    "& .MuiInputBase-input": {
                      textAlign: "center",
                    },
                  }}
                  variant='outlined'
                />
              ))}
            </Box>
            {Boolean(
              Array.isArray(touched.code) &&
              touched.code.length === 6 &&
              errors.code
            ) && (
                <FormHelperText error sx={{ mx: "14px" }}>
                  {Array.isArray(errors.code) &&
                    errors.code.find((x) => x !== undefined)}
                </FormHelperText>
              )}
            <TextField
              error={Boolean(touched.password && errors.password)}
              fullWidth
              helperText={touched.password && errors.password}
              label={intl.formatMessage({ id: "F45" })}
              margin='normal'
              name='password'
              onBlur={handleBlur}
              onChange={handleChange}
              type='password'
              value={values.password}
              variant='outlined'
            />
            <TextField
              error={Boolean(touched.passwordConfirm && errors.passwordConfirm)}
              fullWidth
              helperText={touched.passwordConfirm && errors.passwordConfirm}
              label={intl.formatMessage({ id: "F47" })}
              margin='normal'
              name='passwordConfirm'
              onBlur={handleBlur}
              onChange={handleChange}
              type='password'
              value={values.passwordConfirm}
              variant='outlined'
            />
            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>
                  {typeof errors.submit === 'string' ? errors.submit : ''}
                </FormHelperText>
              </Box>
            )}
            <Box sx={{ mt: 3 }}>
              <Button
                color='primary'
                disabled={isSubmitting}
                fullWidth
                size='large'
                type='submit'
                variant='contained'
              >
                {intl.formatMessage({ id: "LanguageResetPassword" })}
              </Button>
            </Box>
          </form>
        )}
      </Formik>
      <Divider sx={{ my: 3 }} />
      <Box sx={{ display: "flex", p: 1 }}>
        <Box sx={{ p: 1, flexGrow: 1 }}>
          <Link color='textSecondary' to='/auth/recovery'>
            {intl.formatMessage({ id: "F37" })}
          </Link>
        </Box>
        <Box sx={{ p: 1 }}>
          <Link color='textSecondary' to='/auth/login'>
            {intl.formatMessage({ id: "L66" })}
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default PasswordResetAmplify;


```
```typescript:src/components/authentication/password-recovery/PasswordRecoveryAmplify.tsx
import React from "react";
import { navigate } from "gatsby";
import * as Yup from "yup";
import { Formik } from "formik";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import { Auth } from "aws-amplify";
import Typography from "@mui/material/Typography";
import useIsMountedRef from "../../../hooks/useIsMountedRef";
import { useIntl } from "react-intl";
import Link from "../../Link";


const PasswordRecoveryAmplify = () => {
  const intl = useIntl();
  const isMountedRef = useIsMountedRef();

  return (
    <>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          mb: 3,
        }}
      >
        <div>
          <Typography color='textPrimary' gutterBottom variant='h4'>
            {intl.formatMessage({ id: "F35" })}
          </Typography>
        </div>
      </Box>
      <Formik
        initialValues={{
          email: "",
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email(`${intl.formatMessage({ id: "E501" })}`)
            .max(255)
            .required(`${intl.formatMessage({ id: "E502" })}`),
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            await Auth.forgotPassword(values.email).then((seccessful) => {
              setStatus({ success: true });
              setErrors({ submit: seccessful.message });
              setSubmitting(true);
              navigate("/auth/reset", {
                state: {
                  username: values.email,
                },
              });
            });
          } catch (err) {
            console.error(err);
            if (isMountedRef.current) {
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
            }
          }
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
        }) => (
          <form noValidate onSubmit={handleSubmit}>
            <TextField
              id='email'
              autoFocus
              error={Boolean(touched.email && errors.email)}
              fullWidth
              helperText={touched.email && errors.email}
              label={intl.formatMessage({ id: "F44" })}
              margin='normal'
              name='email'
              onBlur={handleBlur}
              onChange={handleChange}
              type='email'
              value={values.email}
              variant='outlined'
            />
            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>
                  {typeof errors.submit === 'string' ? errors.submit : JSON.stringify(errors.submit)}
                </FormHelperText>
              </Box>
            )}
            <Box sx={{ mt: 3 }}>
              <Button
                color='primary'
                disabled={isSubmitting}
                fullWidth
                size='large'
                type='submit'
                variant='contained'
              >
                {intl.formatMessage({ id: "F35" })}
              </Button>
            </Box>
          </form>
        )}
      </Formik>
      <Divider sx={{ my: 3 }} />
      <Box sx={{ display: "flex", p: 1 }}>
        <Box sx={{ p: 1, flexGrow: 1 }}>
          <Link color='textSecondary' to='/auth/login'>
            {intl.formatMessage({ id: "L66" })}
          </Link>
        </Box>
        <Box sx={{ p: 1 }}>
          <Link to='/auth/register'>
            {intl.formatMessage({ id: "F34" })}
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default PasswordRecoveryAmplify;


```
```typescript:src/components/authentication/login/LoginAmplify.tsx
import React from "react";
import { navigate } from "gatsby";
import * as Yup from "yup";
import { Formik } from "formik";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { Auth } from "aws-amplify";
import useIsMountedRef from "../../../hooks/useIsMountedRef";
import SocialSignIn from "../../SocialSignIn";
import { useSnackbar } from "notistack";
import CircularProgress from "@mui/material/CircularProgress";
import { useIntl } from "react-intl";
import Link from "../../../components/Link";

const LoginAmplify = (props) => {
  const intl = useIntl();
  const isMountedRef = useIsMountedRef();
  const { enqueueSnackbar } = useSnackbar();
  const signIn = async (username, password) => {
    return await Auth.signIn(username, password);
  };

  return (
    <>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          mb: 3,
        }}
      >
        <div>
          <Typography color='textPrimary' gutterBottom variant='h4'>
            {props.isRedirecting ? (
              <CircularProgress />
            ) : (
              intl.formatMessage({ id: "L66" })
            )}
          </Typography>
        </div>
      </Box>
      <Formik
        initialValues={{
          email: "",
          password: "",
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email(`${intl.formatMessage({ id: "E501" })}`)
            .max(255)
            .required(`${intl.formatMessage({ id: "E502" })}`),
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            await signIn(values.email, values.password).then((successful) => {
              enqueueSnackbar(`${intl.formatMessage({ id: "E511" })}`, {
                variant: "success",
              });
              if (isMountedRef.current) {
                setStatus({ success: true });
                setSubmitting(false);
              }
              navigate("/app");
            });
          } catch (err) {
            console.error(err);
            if (err.code === "UserNotConfirmedException") {
              navigate("/auth/verify", {
                state: {
                  username: values.email,
                },
              });
              return;
            }

            if (isMountedRef.current) {
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
            }
          }
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
        }) => (
          <form noValidate onSubmit={handleSubmit}>
            <TextField
              autoFocus
              id='email'
              error={Boolean(touched.email && errors.email)}
              fullWidth
              helperText={touched.email && errors.email}
              label={intl.formatMessage({ id: "F44" })}
              margin='normal'
              name='email'
              onBlur={handleBlur}
              onChange={handleChange}
              type='email'
              value={values.email}
              variant='outlined'
              disabled={props.isRedirecting}
            />
            <TextField
              error={Boolean(touched.password && errors.password)}
              fullWidth
              helperText={touched.password && errors.password}
              label={intl.formatMessage({ id: "F45" })}
              margin='normal'
              id='password'
              name='password'
              onBlur={handleBlur}
              onChange={handleChange}
              type='password'
              value={values.password}
              variant='outlined'
              disabled={props.isRedirecting}
            />
            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>{errors.submit.toString()}</FormHelperText>
              </Box>
            )}
            <Box sx={{ mt: 2 }}>
              <Button
                color='primary'
                disabled={isSubmitting || props.isRedirecting}
                fullWidth
                size='large'
                type='submit'
                variant='contained'
              >
                {intl.formatMessage({ id: "L66" })}
              </Button>
            </Box>
            <Box sx={{ mt: 3 }}>
              {/* <Alert severity="info">
            </Alert> */}
            </Box>
          </form>
        )}
      </Formik>
      <Divider sx={{ my: 3 }} />
      <SocialSignIn disabled={props.isRedirecting} />
      <Box sx={{ display: "flex", p: 1 }}>
        <Box sx={{ p: 1, flexGrow: 1 }}>
          <Link color='textSecondary' to='/auth/recovery'>
            {intl.formatMessage({ id: "F33" })}
          </Link>
        </Box>
        <Box sx={{ p: 1 }}>
          <Link color='textSecondary' to='/auth/register'>
            {intl.formatMessage({ id: "F34" })}
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default LoginAmplify;


```
```typescript:src/components/authentication/verify-code/VerifyCodeAmplify.tsx
import React, { useEffect, useRef } from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import * as Yup from "yup";
import { Formik } from "formik";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Auth } from "aws-amplify";
import { useSnackbar } from "notistack";
import useIsMountedRef from "../../../hooks/useIsMountedRef";
import { useIntl } from "react-intl";
import Link from "../../../components/Link";

interface LocationState {
  username?: string;
}


const CodeVerification = () => {
  const isMountedRef = useIsMountedRef();
  const location = useLocation();
  const { enqueueSnackbar } = useSnackbar();
  const codeInputsRef = useRef([]);
  const intl = useIntl();

  const locationState = location.state as LocationState;


  useEffect(() => {
    // Limit the number of code inputs
    codeInputsRef.current = codeInputsRef.current.slice(0, 6);
  }, []);

  const handleCodeSubmit = async (values, actions) => {
    try {
      await Auth.confirmSignUp(values.email, values.code.join(""));
      enqueueSnackbar(intl.formatMessage({ id: "UseEmailAndPasswordCreated" }), { variant: "success" });
      navigate("/auth/login");
    } catch (error) {
      console.error(error);
      if (isMountedRef.current) {
        actions.setStatus(true);
        actions.setErrors({ submit: error.message });
        actions.setSubmitting(false);
      }
    }
  };

  return (
    <>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          mb: 3,
        }}
      >
        <Typography color='textPrimary' gutterBottom variant='h4'>
          {intl.formatMessage({ id: "F32" })}
        </Typography>
      </Box>
      <Formik
        initialValues={{
          email: locationState?.username || "",
          code: ["", "", "", "", "", ""],
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email(intl.formatMessage({ id: "E501" }))
            .max(255)
            .required(intl.formatMessage({ id: "E502" })),
          code: Yup.array().of(Yup.string().required(intl.formatMessage({ id: "E503" }))),
        })}
        onSubmit={handleCodeSubmit}
      >
        {formikProps => (
          <form noValidate onSubmit={formikProps.handleSubmit}>
            <EmailInput {...formikProps} location={location} intl={intl} />
            <CodeInputFields {...formikProps} codeInputsRef={codeInputsRef} intl={intl} />
            <SubmitButton isSubmitting={formikProps.isSubmitting} intl={intl} />
          </form>
        )}
      </Formik>
      <Divider sx={{ my: 3 }} />
      <NavigationLinks intl={intl} />
    </>
  );
};

const EmailInput = ({ errors, handleBlur, handleChange, touched, values, location, intl }) => {
  return !location.state?.username ? (
    <TextField
      id='email'
      autoFocus
      error={Boolean(touched.email && errors.email)}
      fullWidth
      helperText={touched.email && typeof errors.email === 'string' ? errors.email : ''}
      label={intl.formatMessage({ id: "F44" })}
      margin='normal'
      name='email'
      onBlur={handleBlur}
      onChange={handleChange}
      type='email'
      value={values.email}
      variant='outlined'
    />
  ) : (
    <TextField
      id='username'
      disabled
      fullWidth
      margin='normal'
      value={location.state.username}
      variant='outlined'
    />
  );
};

const CodeInputFields = ({ errors, handleBlur, setFieldValue, touched, values, codeInputsRef, intl }) => {
  return (
    <>
      <Typography color='textSecondary' sx={{ mb: 2, mt: 3 }} variant='subtitle2'>
        {intl.formatMessage({ id: "F39" })}
      </Typography>
      <Box
        sx={{
          display: "grid",
          columnGap: "16px",
          gridTemplateColumns: "repeat(6, 1fr)",
          pt: 1,
        }}
      >
        {[...Array(6)].map((_, i) => (
          <CodeInput
            key={`code-${i}`}
            codeIndex={i}
            errors={errors}
            handleBlur={handleBlur}
            setFieldValue={setFieldValue}
            touched={touched}
            value={values.code[i]}
            codeInputsRef={codeInputsRef}
          />
        ))}
      </Box>
      {Boolean(touched.code && errors.code) && (
        <FormHelperText error sx={{ mx: "14px" }}>
          {errors.code}
        </FormHelperText>
      )}
    </>
  );
};


const CodeInput = ({ codeIndex, errors, handleBlur, setFieldValue, touched, value, codeInputsRef }) => {
  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace" && !value) {
      // Move to previous field if current is empty
      if (index > 0) {
        codeInputsRef.current[index - 1].focus();
      }
    } else if (event.key >= "0" && event.key <= "9") {
      // Allow numeric values and move to next field
      setFieldValue(`code[${index}]`, event.key);
      if (index < 5) {
        codeInputsRef.current[index + 1].focus();
      }
    } else {
      // Prevent non-numeric input
      event.preventDefault();
    }
  };

  const handlePaste = (event) => {
    const pasteData = event.clipboardData.getData("text").split("");
    if (pasteData.length === 6 && pasteData.every(char => char >= "0" && char <= "9")) {
      // If paste data is exactly 6 numeric characters, distribute them to the fields
      pasteData.forEach((char, i) => {
        setFieldValue(`code[${i}]`, char);
      });
      codeInputsRef.current[5].focus(); // Focus on the last field
    }
    event.preventDefault();
  };

  return (
    <TextField
      id={`code-${codeIndex}`}
      error={Boolean(touched.code && errors.code)}
      fullWidth
      inputRef={(el) => (codeInputsRef.current[codeIndex] = el)}
      name={`code[${codeIndex}]`}
      onBlur={handleBlur}
      onKeyDown={(event) => handleKeyDown(event, codeIndex)}
      onPaste={handlePaste}
      value={value}
      sx={{
        display: "inline-block",
        textAlign: "center",
        "& .MuiInputBase-input": {
          textAlign: "center",
        },
      }}
      variant='outlined'
    />
  );
};


const SubmitButton = ({ isSubmitting, intl }) => (
  <Box sx={{ mt: 3 }}>
    <Button
      color='primary'
      disabled={isSubmitting}
      fullWidth
      size='large'
      type='submit'
      variant='contained'
    >
      {intl.formatMessage({ id: "F31" })}
    </Button>
  </Box>
);

const NavigationLinks = ({ intl }) => (
  <Box sx={{ display: "flex", p: 1 }}>
    <Box sx={{ p: 1, flexGrow: 1 }}>
      <Link color='textSecondary' to='/auth/Recovery'>
        {intl.formatMessage({ id: "F30" })}
      </Link>
    </Box>
    <Box sx={{ p: 1 }}>
      <Link color='textSecondary' to='/auth/login'>
        {intl.formatMessage({ id: "L66" })}
      </Link>
    </Box>
  </Box>
);

export default CodeVerification;


```
```typescript:src/components/authentication/register/RegisterAmplify.tsx
import React, { useEffect, useRef } from "react";
import { navigate } from "gatsby";
import * as Yup from "yup";
import { Formik } from "formik";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Auth } from "aws-amplify";
import useIsMountedRef from "../../../hooks/useIsMountedRef";
import SocialSignIn from "../../SocialSignIn";
import { useIntl } from "react-intl";
import Link from "../../../components/Link";

const RegisterAmplify = () => {
  const intl = useIntl();
  const isMountedRef = useIsMountedRef();
  const termLink = `/${intl.locale}/legal/terms-of-use`;
  const registering = async (email, password) => {
    return await Auth.signUp({
      username: email,
      password,
      attributes: { email },
    });
  };
  return (
    <>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          mb: 3,
        }}
      >
        <div>
          <Typography color='textPrimary' gutterBottom variant='h4'>
            {intl.formatMessage({ id: "F40" })}
          </Typography>
        </div>
      </Box>
      <Formik
        initialValues={{
          email: "",
          password: "",
          policy: true,
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email(`${intl.formatMessage({ id: "E501" })}`)
            .max(255)
            .required(`${intl.formatMessage({ id: "E502" })}`),
          password: Yup.string()
            .min(7)
            .max(255)
            .required(`${intl.formatMessage({ id: "E508" })}`),
          policy: Yup.boolean().oneOf(
            [true],
            `${intl.formatMessage({ id: "E507" })}`
          ),
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            await registering(values.email, values.password).then((data) => {
              navigate("/auth/verify", {
                state: {
                  username: values.email,
                },
              });
            });
          } catch (err) {
            console.error(err);
            if (isMountedRef.current) {
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
            }
          }
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
        }) => (
          <form noValidate onSubmit={handleSubmit}>
            <TextField
              error={Boolean(touched.email && errors.email)}
              fullWidth
              helperText={touched.email && errors.email}
              label={intl.formatMessage({ id: "F44" })}
              margin='normal'
              name='email'
              id='email'
              onBlur={handleBlur}
              onChange={handleChange}
              type='email'
              value={values.email}
              variant='outlined'
            />
            <TextField
              error={Boolean(touched.password && errors.password)}
              fullWidth
              helperText={touched.password && errors.password}
              label={intl.formatMessage({ id: "F45" })}
              margin='normal'
              id='password'
              name='password'
              onBlur={handleBlur}
              onChange={handleChange}
              type='password'
              value={values.password}
              variant='outlined'
            />
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                ml: -1,
                mt: 2,
              }}
            >
              <Checkbox
                checked={values.policy}
                color='primary'
                name='policy'
                onChange={handleChange}
              />
              <Typography color='textSecondary' variant='body2'>
                {intl.formatMessage({ id: "F43" })}{" "}
                <Link color='primary' to={termLink}>
                  {intl.formatMessage({ id: "F41" })}
                </Link>
              </Typography>
            </Box>
            {Boolean(touched.policy && errors.policy) && (
              <FormHelperText error>{errors.policy}</FormHelperText>
            )}
            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>
                  {typeof errors.submit === 'string' ? errors.submit : null}
                </FormHelperText>
              </Box>
            )}
            <Box sx={{ mt: 2 }}>
              <Button
                color='primary'
                disabled={isSubmitting}
                fullWidth
                size='large'
                type='submit'
                variant='contained'
              >
                {intl.formatMessage({ id: "F42" })}
              </Button>
            </Box>
          </form>
        )}
      </Formik>
      <Divider sx={{ my: 3 }} />
      <SocialSignIn />
      <Box sx={{ display: "flex", p: 1 }}>
        <Box sx={{ p: 1, flexGrow: 1 }}>
          <Link color='textSecondary' to='/auth/login'>
            {intl.formatMessage({ id: "L66" })}
          </Link>
        </Box>
        <Box sx={{ p: 1 }}>
          <Link color='textSecondary' to='/auth/recovery'>
            {intl.formatMessage({ id: "F33" })}
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default RegisterAmplify;


```
```typescript:src/components/subcomponents/Voices.tsx
const Voices = [
  { tone: "strightforward" },
  { tone: "business" },
  { tone: "jargon" },
  { tone: "technical" },
  { tone: "conversational" },
  { tone: "expository" },
  { tone: "descriptive" },
  { tone: "narrative" },
  { tone: "persuasive" },
  { tone: "argumentative" },
  { tone: "analytical" },
  { tone: "formal" },
  { tone: "informal" },
  { tone: "academic" },
  { tone: "casual" },
  { tone: "colloquial" },
  { tone: "slangy" },
  { tone: "confident" },
  { tone: "polite" },
  { tone: "encouraging" },
  { tone: "supportive" },
  { tone: "warm" },
  { tone: "Positive" },
  { tone: "Friendly" },
  { tone: "Inspiring" },
  { tone: "motivating" },
  { tone: "comforting" },
  { tone: "assertive" },
  { tone: "Inquiring" },
  { tone: "Informative" },
  { tone: "excited" },
  { tone: "optimistic" },
  { tone: "pessimistic" },
  { tone: "joyful" },
  { tone: "charming" },
  { tone: "innovative" },
  { tone: "elegant" },
  { tone: "energetic" },
  { tone: "irreverent" },
  { tone: "dependable" },
  { tone: "romantic" },
  { tone: "witty" },
  { tone: "happy" },
  { tone: "foolish" },
  { tone: "light" },
  { tone: "respectful" },
];
export default Voices;


```
```typescript:src/components/subcomponents/buttons.tsx
import React, { useState, useRef } from "react";
import type { FC } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const options = [
  "Create a merge commit",
  "Squash and merge",
  "Rebase and merge",
];

const Buttons: FC = () => {
  const anchorRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleMenuItemClick = (index: number): void => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = (): void => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event): void => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
      }}
    >
      <ButtonGroup ref={anchorRef} variant='contained'>
        <Button>{options[selectedIndex]}</Button>
        <Button
          onClick={handleToggle}
          size='small'
          sx={{ backgroundColor: "primary.dark" }}
        >
          <ArrowDropDownIcon fontSize='small' />
        </Button>
      </ButtonGroup>
      <Popper anchorEl={anchorRef.current} open={open} transition>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id='split-button-menu'>
                  {options.map((option, index) => (
                    <MenuItem
                      disabled={index === 2}
                      key={option}
                      onClick={() => handleMenuItemClick(index)}
                      selected={index === selectedIndex}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  );
};
export default Buttons;


```
```typescript:src/components/subcomponents/language-autocomplete-app.tsx
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
// import countries from "../account/countries";

const locations = [
  { code: "US", label: "English", LangCode: "en" },
  { code: "SV", label: "Swedish", LangCode: "sv" },
];

interface CountryType {
  code: string;
  label: string;
  LangCode: string;
}

export default function LanguageAutocompleteApp({ handleChange }) {
  const [inputValue, setInputValue] = React.useState("");

  return (
    <Stack spacing={2} sx={{ width: 200 }}>
      <Autocomplete
        size='small'
        onChange={handleChange}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        options={locations as CountryType[]}
        autoHighlight
        getOptionLabel={(option) =>
          option && option?.LangCode.toUpperCase() + " - " + option.label
        }
        renderOption={(props, option) => (
          <li {...props}>
            {option && option?.LangCode.toUpperCase() + " - " + option.label}
          </li>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label='Language'
            color='secondary'
            variant='outlined'
            inputProps={{
              ...params.inputProps,
              // disable autocomplete and autofill
              autoComplete: "new-password",
            }}
          />
        )}
      />
    </Stack>
  );
}


```
```typescript:src/components/subcomponents/LinearProgressLoading.tsx
import React from "react";
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";

export default function LinearProgressLoading(props: LinearProgressProps) {
  //hooks must be outside of the function
  const { progressValue } = useSelector((state: any) => state.progressValue);

  return (
    <Box display='flex' alignItems='center'>
      <Box width='100%'>
        <LinearProgress variant='determinate' value={progressValue} />
      </Box>
    </Box>
  );
}


```
```typescript:src/components/subcomponents/SimpleState.tsx
import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

interface SimpleStateProps {
  label: string;
  number: string | React.ReactNode;  // Allow ReactNode along with string
  label2: string;
  number2: string | React.ReactNode; // Allow ReactNode along with string
}

const SimpleState: React.FC<SimpleStateProps> = ({
  label = "Totall number of characters handled",
  number = "0",
  label2 = "Total number of tokens used",
  number2 = "0",
}: SimpleStateProps) => (
  <Box>
    <Card>
      <CardHeader title={"Usage"} />
      <Divider />
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>
              <Typography color='textPrimary' variant='subtitle2'>
                {label}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color='textSecondary' variant='body2'>
                {number}
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
        <TableBody>
          <TableRow>
            <TableCell>
              <Typography color='textPrimary' variant='subtitle2'>
                {label2}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color='textSecondary' variant='body2'>
                {number2}
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  </Box>
);

export default SimpleState;


```
```typescript:src/components/subcomponents/copy-to-clipboard.tsx
import React, { useState, useCallback } from "react";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ToggleButtonList from "./toggle-button-list";
import { Node, Editor } from "slate";

// Serialize editor content to string
const serializeContent = (editor: Editor): string => 
  editor.children.map(node => Node.string(node)).join("\n");

interface CopyToClipboardProps {
  editor: Editor;
}

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({ editor }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    const content = serializeContent(editor);
    try {
      await navigator.clipboard.writeText(content);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.log("Failed to copy:", error);
      // TODO: Add user-friendly error notification
    }
  }, [editor]);

  return (
    <ToggleButtonList
      icon={<FileCopyIcon fontSize="inherit" />}
      onClick={handleCopy}
      disabled={editor.children.length === 0}
      aria-label={isCopied ? "Copied!" : "Copy to clipboard"}
    />
  );
};

export default CopyToClipboard;

// Usage example:
// <CopyToClipboard editor={slateEditor} />

```
```typescript:src/components/subcomponents/set-language-modal.tsx
import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import LanguageAutocompleteApp from "./language-autocomplete-app";
import Tooltip from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import GTranslateRoundedIcon from "@mui/icons-material/GTranslateRounded";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const getValues = (settings) => ({
  direction: settings.direction,
  responsiveFontSizes: settings.responsiveFontSizes,
  theme: settings.theme,
  lang: settings.lang,
});

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;
  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label='close'
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

interface valuesT {
  direction: string;
  responsiveFontSizes: boolean;
  theme: string;
  lang: string;
}
export default function SetLanguageModal({ changeLanguage }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Tooltip title='UI Language'>
        <IconButton
          size='small'
          sx={{
            mx: 1,
            p: 1,
            backgroundColor: (theme) => theme.palette.background.default,
            "&:hover": {
              backgroundColor: (theme) => theme.palette.divider,
            },
          }}
          onClick={handleClickOpen}
        >
          <GTranslateRoundedIcon />
        </IconButton>
      </Tooltip>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
      >
        <BootstrapDialogTitle
          id='customized-dialog-title'
          onClose={handleClose}
        >
          UI Language
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            This will change the user interface language of the app to your
            preferred language.
          </Typography>
          <LanguageAutocompleteApp handleChange={changeLanguage} />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}


```
```typescript:src/components/subcomponents/MultipleOptions.tsx
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useSelector, useDispatch } from "react-redux";
import { updateToneOfVoiceValue } from "../../slices/fieldsValue";
import Voices from "./Voices";
import { AppDispatch } from "store";

interface VoiceOptionType {
  inputValue?: string;
  tone: string;
}

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;
const filter = createFilterOptions<VoiceOptionType>();



export default function MultipleOptions() {
  const dispatch = useDispatch<AppDispatch>();
  const { defaultVoice } = useSelector((state: any) => state.fieldsValue);
  const [inputValue, setInputValue] = React.useState("");

  return (
    <Autocomplete
      multiple
      size='small'
      freeSolo
      onChange={(event, newValue) => {
        if (typeof newValue === "string") {
          dispatch(updateToneOfVoiceValue(newValue));
        } else if (newValue && inputValue) {
          const newvaluearr = [...defaultVoice];
          newvaluearr.push({ tone: inputValue });
          dispatch(updateToneOfVoiceValue(newvaluearr));
        } else {
          dispatch(updateToneOfVoiceValue(newValue));
        }
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      autoHighlight
      options={Voices}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        const { inputValue } = params;
        const isExisting = options.some((option: any) => inputValue === option.tone);
        if (inputValue !== "" && !isExisting) {
          filtered.push({
            inputValue,
            tone: `${inputValue}`,
          });
        }

        return filtered;
      }}
      disableCloseOnSelect
      getOptionLabel={(option: any) => option.tone}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 6 }}
            checked={selected}
          />
          {option.tone}
        </li>
      )}
      renderInput={(params) => (
        <TextField
          error={defaultVoice.length < 1 ? true : false}
          {...params}
          variant='outlined'
          label='Style and tone'
          placeholder='You may select one or more tone'
        />
      )}
    />
  );
}


```
```typescript:src/components/subcomponents/LinearProgressBalance.tsx
import React from "react";
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";

export default function LinearProgressBalance(props: LinearProgressProps) {
  //hooks must be outside of the function
  const { progressValue } = useSelector((state: any) => state.progressValue);

  return (
    <Box display='flex' alignItems='center'>
      <Box width='100%'>
        <LinearProgress variant='determinate' value={progressValue} />
      </Box>
    </Box>
  );
}


```
```typescript:src/components/subcomponents/questionMarkIcon.tsx
import React from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import HelpTwoToneIcon from "@mui/icons-material/HelpTwoTone";

export default function QuestionMarkIcon({ title }) {
  return (
    <Tooltip title={title} placement='top-end' arrow>
      <IconButton
        size='small'
        color='default'
        sx={{
          border: 0,
          p: 0.5,
          "&:hover": {
            backgroundColor: "background.primary",
          },
        }}
        component='span'
      >
        <HelpTwoToneIcon fontSize='small' />
      </IconButton>
    </Tooltip>
  );
}


```
```typescript:src/components/subcomponents/ProductAutocompleteUrl.tsx
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { navigate } from "gatsby";
import Autocomplete from "@mui/material/Autocomplete";
import useToolsPathes from "../../hooks/useToolsPathes";

/**
 * searching Product
 */
interface productPathType {
  url: string;
  label: string;
}

interface ProductAutocompleteUrlProps {
  placeholder?: string;
}

export default function ProductAutocompleteUrl({
  placeholder = "Search",
}: ProductAutocompleteUrlProps) {
  const toolsPathes = useToolsPathes();
  const toolsPathe = toolsPathes.map((x) => x.node.frontmatter);
  const [inputValue, setInputValue] = React.useState("");
  return (
    <Stack spacing={2} sx={{ width: { xs: "80%", md: "70%" } }}>
      <Autocomplete
        size='small'
        freeSolo
        disableClearable
        onChange={(event: any, newValue: any) => {
          navigate(newValue.url);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        options={toolsPathe as productPathType[]}
        autoHighlight
        getOptionLabel={(option) => option.title}
        renderOption={(props, option) => <li {...props}>{option.title}</li>}
        renderInput={(params) => (
          <TextField
            {...params}
            label={placeholder}
            color='primary'
            variant='outlined'
            inputProps={{
              ...params.inputProps,
              type: "search",
              autoComplete: "new-password",
            }}
          />
        )}
      />
    </Stack>
  );
}


```
```typescript:src/components/subcomponents/LoadingButtonProgress.tsx
import * as React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import { useSelector } from "react-redux";

export default function LoadingButtonProgress(props: any) {
  const { progressValue } = useSelector((state: any) => state.progressValue);
  const loading = progressValue > 0 && progressValue < 100;
  return (
    <LoadingButton {...props} loading={loading} loadingIndicator='Loading...'>
      {props.title}
    </LoadingButton>
  );
}


```
```typescript:src/components/subcomponents/language-autocomplete.tsx
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { updateDefaultLanguage } from "../../slices/fieldsValue";
import { useDispatch } from "react-redux";
import countries from "../account/countries";
import { AppDispatch } from "store";

interface CountryType {
  code: string;
  label: string;
  LangCode: string;
}

export default function LanguageAutocomplete() {
  const [inputValue, setInputValue] = React.useState("");
  const dispatch = useDispatch<AppDispatch>();

  console.log("countries", countries);

  return (
    <Stack spacing={2} sx={{ width: 200 }}>
      <Autocomplete
        size='small'
        onChange={(event: any, newValue: any) => {
          console.log("countries", countries);
          dispatch(updateDefaultLanguage(newValue));
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        options={countries as CountryType[]}
        autoHighlight
        getOptionLabel={(option) =>
          option && option?.LangCode.toUpperCase() + " - " + option.label
        }
        renderOption={(props, option) => (
          <li {...props}>
            {option && option?.LangCode.toUpperCase() + " - " + option.label}
          </li>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label='Language'
            color='secondary'
            variant='outlined'
            inputProps={{
              ...params.inputProps,
              // disable autocomplete and autofill
              autoComplete: "new-password",
            }}
          />
        )}
      />
    </Stack>
  );
}


```
```typescript:src/components/subcomponents/UnderlinedText.tsx
import React from "react";
import styled from "@emotion/styled";

const UnderlinedText = styled("span")<{}>(() => ({
  backgroundImage: `linear-gradient(to right, rgba(0, 200, 255, 0.4) 75%, rgba(0, 200, 255, 0.4) 75%)`,
  backgroundPosition: "0 0.9em",
  backgroundRepeat: "repeat-x",
  backgroundSize: "2px 10px",
}));

export default UnderlinedText;


```
```typescript:src/components/subcomponents/plus-button.tsx
import React from "react";
import ToggleButtonList from "./toggle-button-list";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

export default function BarButtonPlusReplace(props) {
  return (
    <ToggleButtonList
      title='Replacement'
      {...props}
      ariaLabel={"copy the all texts in the box"}
      icon={<AddRoundedIcon fontSize='inherit' />}
    />
  );
}


```
```typescript:src/components/subcomponents/LinearP.tsx
import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { Box, Typography, CircularProgress, LinearProgress, CardContent } from "@mui/material";

// Types
type ProgressProps = {
  value: number;
  description?: string;
};

type LinearPProps = {
  progressType: "circular" | "linear";
};

// Helper Components
const CircularProgressWithLabel = ({ value }: ProgressProps) => (
  <Box position="relative" display="inline-flex">
    <CircularProgress variant="determinate" value={value} />
    <Box
      position="absolute"
      top={0}
      left={0}
      bottom={0}
      right={0}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="caption" component="div" color="textSecondary">
        {`${Math.round(value)}`}
      </Typography>
    </Box>
  </Box>
);

const LinearProgressBalance = ({ value, description }: ProgressProps) => (
  <CardContent>
    <LinearProgress sx={{ minWidth: "100px" }} value={value} variant="determinate" />
    <Box sx={{ mt: 1 }}>
      <Typography color="textSecondary" variant="subtitle2">
        {description}
      </Typography>
    </Box>
  </CardContent>
);

// Main Component
const LinearP = ({ progressType }: LinearPProps) => {
  const [progress, setProgress] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDataUsage = async () => {
      try {
        setLoading(true);
        const user = await Auth.currentAuthenticatedUser();
        const token = (await Auth.currentSession()).getIdToken().getJwtToken();
        
        const response = await fetch("https://api.maila.ai/data-usage", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: user.username }),
        });

        if (!response.ok) throw new Error("Failed to fetch data usage");

        const { characters } = await response.json();
        setProgress(characters);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchDataUsage();
  }, []);

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;

  const normalizedProgress = progress / 500;
  const description = `${Math.round(progress)} of 50000 Characters`;

  return progressType === "circular" ? (
    <CircularProgressWithLabel value={normalizedProgress} />
  ) : (
    <LinearProgressBalance value={normalizedProgress} description={description} />
  );
};

export default LinearP;

// Commented out for potential future use:
// export { LinearProgressBalance };

```
```typescript:src/components/subcomponents/Play.tsx
import React, { useRef, useState } from "react";
import Grid from "@mui/material/Grid";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import { useSelector } from "react-redux";
import ToggleButtonList from "./toggle-button-list";

export const audioAWS = async ({ text }: any) => {
  const url = `https://6uk77gp2holg7cmjh5zfjatydq0wtxpe.lambda-url.us-east-2.on.aws`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      body: JSON.stringify({ text }),
    });
    const buffer = await response.arrayBuffer();
    // const typedArray = new Uint8Array(buffer);
    return buffer;
  } catch (err) {
    throw err;
  }
};

export default function Play() {
  const { selectedTextValue } = useSelector((state: any) => state.editorParams);
  const audioSrc = useRef(null);
  const audioElement = useRef(null)

  const playAudio = async () => {
    try {
      const arrayBuffer = await audioAWS({ text: selectedTextValue });
      const blob = new Blob([new Uint8Array(arrayBuffer)], {
        type: "audio/mpeg",
      });
      const url = URL.createObjectURL(blob);
      audioSrc.current = url;
      audioElement.current.load();
    } catch (err) {
      console.error(err);
    }
  };

  React.useEffect(() => {
    if (audioElement.current) {
      audioElement.current.src = audioSrc.current;
    }
  }, [audioSrc.current]);

  return (
    <>
      <Grid hidden item>
        <div>
          <button onClick={playAudio}>Play</button>
          <audio ref={audioElement} controls />
        </div>
      </Grid>
      <ToggleButtonList
        icon={<PlayCircleOutlineRoundedIcon fontSize='inherit' />}
        title='Listen'
        onClick={playAudio}
        disabled={selectedTextValue.length > 2 ? false : true}
      />
    </>
  );
}


```
```typescript:src/components/subcomponents/MuiSButton.tsx
import React from "react";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

export default function MuiSButton(props) {
  let titlen = props.btntitle;
  return (
    <Tooltip title={titlen} arrow>
      <Button
        size='small'
        color='primary'
        variant='contained'
        component='span'
        {...props}
      >
        {titlen}
      </Button>
    </Tooltip>
  );
}


```
```typescript:src/components/subcomponents/toggle-button-list.tsx
import React, { RefCallback, RefObject } from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";


interface ToggleButtonListProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  title?: string;
  icon?: JSX.Element;
  disabled?: boolean;
  ariaLabel?: string;
}

type OrNull<T> = T | null;
type Ref<T> = RefCallback<T> | RefObject<T> | null;

const ToggleButtonList = React.forwardRef(
  (
    { onClick, icon, title, ariaLabel, ...rest }: ToggleButtonListProps,
    ref: Ref<OrNull<HTMLButtonElement>>
  ) => {
    return (
      <Tooltip title={title} arrow>
        <IconButton
          sx={{
            margin: "1px",
            textTransform: "none",
            border: 0,
            borderRadius: "4px",
          }}
          onClick={onClick}
          color='primary'
          ref={ref}
          aria-label={ariaLabel}
          size='small'
          component='span'
          {...rest}
        >
          {icon}
        </IconButton>
      </Tooltip>
    );
  }
);

export default ToggleButtonList;


```
```typescript:src/components/subcomponents/OutlineDiv.tsx
import React from "react";

import TextField from "@mui/material/TextField";

const InputComponent = ({ inputRef, ...other }) => <div {...other} />;
const OutlinedDiv = ({ children, label }) => {
  return (
    <TextField
      variant='outlined'
      label={label}
      multiline
      InputLabelProps={{ shrink: true }}
      InputProps={{
        inputComponent: InputComponent,
      }}
      inputProps={{ children: children }}
    />
  );
};
export default OutlinedDiv;


```
```typescript:src/components/subcomponents/MuiInputWithGrid6string.tsx
import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { debounce } from "lodash";

export default function MuiInputWithGrid6string({ value, ...others }) {
  const [InputValue, setInputValue] = value;

  return (
    <Grid
      item
      xs={12}
      sm={6}
      sx={{
        "& > *": {
          width: "98%",
        },
      }}
    >
      <TextField
        onChange={debounce((e) => {
          e.preventDefault();
          setInputValue(e.target.value);
        }, 300)}
        size='small'
        {...others}
        variant='outlined'
      />
    </Grid>
  );
}


```
```typescript:src/components/subcomponents/MuiInputWithGrid.tsx
import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { debounce } from "lodash";

export default function MuiInputWithGrid6({ value, ...others }) {
  const [InputValue, setInputValue] = value;
  return (
    <Grid
      item
      xs={12}
      sm={6}
      sx={{
        "& > *": {
          width: "98%",
        },
      }}
    >
      <TextField
        onChange={debounce((e: any) => {
          e.preventDefault();
          Number.isInteger(InputValue * 1000)
            ? setInputValue(parseFloat(e.target.value))
            : setInputValue(parseInt(e.target.value));
        }, 300)}
        size='small'
        {...others}
        variant='outlined'
      />
    </Grid>
  );
}


```
```typescript:src/components/subcomponents/language-outputs-modal.tsx
import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Tooltip from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import TranslateRoundedIcon from "@mui/icons-material/TranslateRounded";
import LanguageAutocomplete from "./language-autocomplete";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;
  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label='close'
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export default function LanguageOutputsModal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Tooltip title='Outputs Language'>
        <IconButton
          size='small'
          aria-label='Translate Outputs'
          sx={{
            mx: 1,
          }}
          onClick={handleClickOpen}
        >
          <TranslateRoundedIcon fontSize='small' />
        </IconButton>
      </Tooltip>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
      >
        <BootstrapDialogTitle
          id='customized-dialog-title'
          onClose={handleClose}
        >
          Outputs Language
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            This will change the language of the outputs. Please select your
            preferred language from the drop-down menu.
          </Typography>
          <LanguageAutocomplete />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
}


```
```typescript:src/components/subcomponents/ToggleButtonGroupOptions.tsx
import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useDispatch, useSelector } from "react-redux";
import { updateOutputShape } from "slices/fieldsValue";
import { AppDispatch } from "store";

export default function ToggleButtonGroupOptions({ options }) {
  const dispatch = useDispatch<AppDispatch>();
  const fieldValues = useSelector((state: any) => state.fieldsValue);

  const handleChange = (
    e: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    dispatch(updateOutputShape(newAlignment));
  };

  return (
    <ToggleButtonGroup
      color='primary'
      value={fieldValues.outputShape}
      exclusive
      onChange={handleChange}
    >
      {options.map((option, index) => (
        <ToggleButton size='small' key={index} value={option}>
          {option}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}


```
```typescript:src/components/subcomponents/searchBox.tsx
import type { FC } from "react";
import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import ProductAutocompleteUrl from "./ProductAutocompleteUrl";

const SearchBox: FC = () => {
  const { expand } = useSelector((state: any) => state.expandReducer);

  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100%",
        pb: 2,
        width: "100%",
        ...(expand && {
          width: { xs: "100%", md: "calc(100% - 33%)" },
        }),
      }}
    >
      <Paper>
        <Box sx={{ p: 1 }}>
          <Box
            sx={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <ProductAutocompleteUrl />
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default SearchBox;


```
```typescript:src/components/subcomponents/MenuIcon.tsx
import React from "react";
import IconButton from "@mui/material/IconButton";
import AppContext from "../../contexts/AppContext";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Logo from "../../components/logo";

export default function MenuIcon({ icontype }) {
  const { IsOpen, toggleOpen } = React.useContext(AppContext);

  return (
    <IconButton
      edge='start'
      color='primary'
      aria-label='menu'
      onClick={toggleOpen}
      sx={{
        mb: 1,
        ...(IsOpen && {
          display: "none",
        }),
      }}
      component='span'
    >
      {icontype === "MenuRoundedIcon" ? <MenuRoundedIcon /> : <Logo />}
    </IconButton>
  );
}


```
```typescript:src/components/NestedList.tsx
import React from "react";
import Link from "./Link";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import TranslateRoundedIcon from "@mui/icons-material/TranslateRounded";
import Typography from "@mui/material/Typography";
import { useTheme } from '@mui/material/styles';

export type langProps = {
    langKey: string;
    link: string;
    selected: boolean;
  };


const languageTag = {
  en: "EN-English",
  fi: "FI-Finnish",
  da: "DA-Danish",
  sv: "SV-Swedish",
  no: "NO-Norwegian",
};

export function NestedList({ items, langKey }) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.default" }}
      component='nav'
      aria-labelledby='nested-list-subheader'
      subheader={
        <ListSubheader component='div' id='nested-list-subheader'>
          <Typography variant='caption' color='testSecondary'>
            Change Language:{" "}
          </Typography>
        </ListSubheader>
      }
    >
      <ListItemButton 
        onClick={handleClick}
        aria-expanded={open}
        aria-controls="language-list"
      >
        <ListItemIcon>
          <TranslateRoundedIcon />
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography 
              variant='subtitle2' 
              color={theme.palette.mode === 'dark' ? 'primary' : 'initial'}
              fontWeight="bold"
            >
              {items &&
                items
                  .filter((item: langProps) => item?.selected)
                  .map((item: langProps) => `${languageTag[item.langKey]} (Selected)`)}
            </Typography>
          }
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding id="language-list">
          {items &&
            items
              .filter((item: langProps) => !item.selected)
              .map((item: langProps, index: number) => (
                <Link key={index + 300} to={item.link}>
                  <ListItemButton sx={{ pl: 9 }}>
                    <Typography 
                      variant='subtitle2' 
                      color={theme.palette.mode === 'dark' ? 'text.primary' : 'initial'}
                    >
                      {languageTag[item.langKey]}
                    </Typography>
                  </ListItemButton>
                </Link>
              ))}
        </List>
      </Collapse>
    </List>
  );
}

export default NestedList;

```
```typescript:src/components/DrawerSideBar.tsx
import * as React from "react";
import { styled } from "@mui/material/styles";
import { Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListSidebar from "./listItems";
import AppContext from "../contexts/AppContext";
import LinearP from "./subcomponents/LinearP";
import ListItem from "@mui/material/ListItem";
import Logo from "./logo";
import Typography from "@mui/material/Typography";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  overflowY: "hidden",
  whiteSpace: "pre-wrap",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  overflowY: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(7)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const DrawerSideBar = () => {
  const { IsOpen, toggleOpen } = React.useContext(AppContext);

  return (
    <Drawer variant='permanent' anchor='left' open={IsOpen}>
      <DrawerHeader>
        <Logo
          edge='start'
          sx={{
            marginRight: "36px",
          }}
          color='primary'
          fontSize='large'
        />{" "}
        <Typography
          color='primary'
          sx={{
            marginTop: "0.375rem",
            fontSize: "1rem",
            fontWeight: 600,
            textTransform: "uppercase",
            mr: "12px",
          }}
          variant='subtitle2'
          gutterBottom
        >
          Maila.ai
        </Typography>
        <IconButton onClick={toggleOpen} color='primary' size='large'>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <ListSidebar />
      <Divider />
      <List dense>
        <ListItem>
          <LinearP progressType={IsOpen ? "linear" : "circular"} />
        </ListItem>
      </List>
      <Divider />
    </Drawer>
  );
};

export default DrawerSideBar;


```
```typescript:src/components/layout/RTL.tsx
import React, { FC, ReactNode, useEffect } from "react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import stylisRTLPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { Direction } from "@mui/material/styles";

interface RTLProps {
  children: ReactNode;
  direction?: Direction;
}

// Create RTL cache for emotion
const createRTLCache = () => {
  try {
    return createCache({
      key: "rtl",
      stylisPlugins: [prefixer, stylisRTLPlugin],
    });
  } catch (error) {
    console.error("Failed to create RTL cache:", error);
    return null;
  }
};

// RTL component for handling text direction
export const RTL: FC<RTLProps> = ({ children, direction = "ltr" }) => {
  useEffect(() => {
    document.dir = direction;
    console.log(`Direction set to: ${direction}`); // 🧭 Log direction change
  }, [direction]);

  const rtlCache = createRTLCache();

  return direction === "rtl" && rtlCache ? (
    <CacheProvider value={rtlCache}>{children}</CacheProvider>
  ) : (
    <>{children}</>
  );
};

/* Usage example:
import { RTL } from './RTL';

const App = () => (
  <RTL direction="rtl">
    <YourComponent />
  </RTL>
);
*/

// Commented-out code for potential future features:
// const useRTL = () => {
//   const [isRTL, setIsRTL] = useState(false);
//   
//   useEffect(() => {
//     const dir = document.dir || 'ltr';
//     setIsRTL(dir === 'rtl');
//   }, []);
//
//   return isRTL;
// };

```
```typescript:src/components/layout/Layout.tsx
import React, { useEffect } from "react";
import { IntlProvider } from "react-intl";
import { Box } from "@mui/material";
import Footer from "../../components/landings/Footer";
import TopBar from "../../components/TopBar";
import useSettings from "../../hooks/useSettings";
import { getCurrentLangKey, getLangConfig, getLangs, getUrlForLang } from "../../langfile";

// Types
type LayoutProps = {
  data: {
    markdownRemark: {
      frontmatter: {
        image?: any;
        [key: string]: any;
      };
    };
    site: {
      siteMetadata: {
        title: string;
        languages: {
          langs: string[];
          defaultLangKey: string;
        };
      };
    };
  };
  location: {
    pathname: string;
  };
  jsonData?: any;
  isBlogPost?: boolean;
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ data, location, children }) => {

  const { settings, saveSettings } = useSettings();
  const { langs, defaultLangKey } = data.site.siteMetadata.languages;



  const langKey = getCurrentLangKey(langs, defaultLangKey, location.pathname);

  useEffect(() => {
    const { lang, direction } = getLangConfig(langKey);
    saveSettings({ ...settings, lang, direction });
  }, [langKey]);


  const i18nMessages = require(`../../data/messages/${settings.lang}`);
  const langsMenu = getLangs(langs, langKey, getUrlForLang(`/${langKey}/`, location.pathname));




  return (
    <IntlProvider locale={langKey} messages={i18nMessages}>
      <Box sx={{ backgroundColor: (theme) => theme.palette.background.default }}>
        <TopBar title="maila.ai" icon="logo" langKey={langKey} langs={langsMenu} />
        {children}
        <Footer langKey={langKey} langs={langsMenu} />
      </Box>
    </IntlProvider>
  );
};

export default Layout;

// SEO component (kept for potential future use)
// import SEO from "../../components/SEO/SEO";


```
```typescript:src/components/layout/PrivateRoute.tsx
import React, { useContext } from "react";
import { navigate } from "gatsby";
import AppContext from "../../contexts/AppContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { userInfo } = useContext(AppContext);
  const status =
    !userInfo ||
    userInfo == null ||
    userInfo == null ||
    userInfo === "The user is not authenticated";
  return <>{status ? navigate("/app/login") : <Component {...rest} />}</>;
};

export default PrivateRoute;


```
```typescript:src/components/layout/LayoutTag.tsx
import React, { useState, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import { Box } from '@mui/material';

import Footer from '../landings/Footer';
import TopBar from '../TopBar';
import useSettings from '../../hooks/useSettings';
import { getCurrentLangKey, getLangs, getUrlForLang } from '../../langfile';


interface LayoutTagProps {
  data: {
    markdownRemark: {
      frontmatter: {
        description: string;
        title: string;
      };
    };
    site: {
      siteMetadata: {
        languages: {
          langs: string[];
          defaultLangKey: string;
        };
      };
    };
  };
  location: {
    pathname: string;
  };
  children: React.ReactNode;
}

const LayoutTag: React.FC<LayoutTagProps> = ({ data, location, children }) => {
  const { description, title } = data.markdownRemark.frontmatter;
  const { langs, defaultLangKey } = data.site.siteMetadata.languages;
  const url = location.pathname;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  const homeLink = `/${langKey}/`;
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url));

  const { settings, saveSettings } = useSettings();
  const [values, setValues] = useState(settings);


  const handleLanguageChange = (lang: string) => {
    const direction: "rtl" | "ltr" = ["ar", "he", "fa"].includes(lang) ? "rtl" : "ltr";
    const newValues = { ...values, lang, direction };
    setValues(newValues);
    saveSettings(newValues);
  };

  
  useEffect(() => {
    handleLanguageChange(langKey);
  }, [langKey]);

  // 🔄 Load language messages
  const i18nMessages = React.useMemo(() => {
    try {
      return require(`../../data/messages/${values.lang}`);
    } catch (error) {
      console.error(`Failed to load messages for ${values.lang}`, error);
      return require(`../../data/messages/en`); // Fallback to English
    }
  }, [values.lang]);

  return (
    <>
      <IntlProvider
        locale={langKey}
        messages={i18nMessages}
        textComponent={React.Fragment}
      >
        <Box sx={{ backgroundColor: 'background.paper' }}>
          <TopBar title='Home' icon='logo' />
          {children}
          <Footer langKey={langKey} langs={langsMenu} />
        </Box>
      </IntlProvider>
    </>
  );
};

export default LayoutTag;

// 📝 Usage example:
// <LayoutTag data={pageData} location={locationObject}>
//   <YourPageContent />
// </LayoutTag>

```
```typescript:src/components/layout/AuthenticationLayout.tsx
import React, { Children } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import "../../../configureAmplify";
import Helmet from "react-helmet";
import { useIntl } from "react-intl";
import { SnackbarProvider } from "notistack";

const AuthenticationLayout = (props) => {
  const intl = useIntl();

  return (
    <>
      <Helmet
        key='app-head'
        defaultTitle={intl.formatMessage({ id: "AU10" })}
        titleTemplate={`%s | ${intl.formatMessage({ id: "AU10" })}`}
      >
        <html lang={intl.locale} />
        <meta name='description' content={intl.formatMessage({ id: "F46" })} />
      </Helmet>
      <SnackbarProvider maxSnack={3}>
        <Box
          sx={{
            backgroundColor: "background.default",
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Container maxWidth='sm' sx={{ py: "80px" }}>
            <Card>
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  p: 4,
                }}
              >
                {props.children}
              </CardContent>
            </Card>
          </Container>
        </Box>
      </SnackbarProvider>
    </>
  );
};

export default AuthenticationLayout;


```
```typescript:src/components/layout/static-page-layout.tsx
import React, { useEffect, useState } from "react";
import { IntlProvider } from "react-intl";
import { Box } from "@mui/material";
import { getSrc } from "gatsby-plugin-image";

import Footer from "../landings/Footer";
import TopBar from "../TopBar";
import { getCurrentLangKey, getLangs, getUrlForLang } from "../../langfile";
import useSettings from "../../hooks/use-settings";
import { Head as SEOHead } from "../../components/SEO/head";
import { Settings } from "contexts/settings-context";

// Types
interface StaticPageLayoutProps {
  data: {
    markdownRemark: {
      frontmatter: {
        image?: any;
        [key: string]: any;
      };
    };
    site: {
      siteMetadata: {
        title: string;
        languages: {
          langs: string[];
          defaultLangKey: string;
        };
      };
    };
  };
  location: {
    pathname: string;
  };
  isBlogPost?: boolean;
  children: React.ReactNode;
}

const getValues = (settings: Settings) => ({
  direction: settings.direction,
  responsiveFontSizes: settings.responsiveFontSizes,
  lang: settings.lang,
  theme: settings.theme,
});

const StaticPageLayout: React.FC<StaticPageLayoutProps> = ({
  data,
  location,
  isBlogPost,
  children,
}) => {
  const { settings, saveSettings } = useSettings();
  const [values, setValues] = useState(getValues(settings));

  const {
    site: {
      siteMetadata: {
        languages: { langs, defaultLangKey },
      },
    },
  } = data;

  const url = location.pathname;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  const homeLink = `/${langKey}/`;
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url));

  const handleLanguageDirection = (lang: string, dir: "ltr" | "rtl") => {
    const newValues = { ...values, lang, direction: dir };
    setValues(newValues);
    saveSettings(newValues);
  };

  const handleChangeLanguage = (lang: string) => {
    const direction = ["ar", "he"].includes(lang) ? "rtl" : "ltr";
    handleLanguageDirection(lang, direction);
  };

  useEffect(() => {
    handleChangeLanguage(langKey);
  }, [langKey]);

  const i18nMessages = require(`../../data/messages/${langKey || settings.lang}`);

  return (
    <IntlProvider
      locale={langKey}
      messages={i18nMessages}
      textComponent={React.Fragment}
    >
      <Box sx={{ backgroundColor: (theme) => theme.palette.background.default }}>
        <TopBar title="maila.ai" icon="maila.ai" />
        {children}
        <Footer langKey={langKey} langs={langsMenu} />
      </Box>
    </IntlProvider>
  );
};

export default StaticPageLayout;

export const Head: React.FC<StaticPageLayoutProps> = (props) => <SEOHead {...props} />;

// Unused code (kept for reference)
/*
const imageSrc = props.data.markdownRemark.frontmatter?.image && getSrc(props.data.markdownRemark.frontmatter.image);
const frontmatter = props.data.markdownRemark.frontmatter;
const siteTitle = props.data.site.siteMetadata.title;
const imageStatus = imageSrc ? true : false;
*/

```
```typescript:src/components/products/ProductDescriptionApp.tsx
import * as React from "react";
import { Suspense } from "react";
const ProductDescription = React.lazy(
  () => import("components/editors/ProductDescription")
);

export default function ProductDescriptionApp() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductDescription
          message01='Please select the text you would like to modify'
          mainPlaceholder="Let's get started with a product description, shall we?"
          inputLimitation={15000}
          productType='4'
          headerTitle='Product Description'
          generateButtonName='Generate description'
          toneTextField={true}
          labelsLists={[
            {
              label: "Brand name",
              placeholder: "Brand/Business name",
            },
            {
              label: "Audience",
              placeholder: "Audience: e.g., those who love coffee, or public",
            },
            {
              label: "keywords",
              placeholder: "keywords are separated by commas",
            },
            {
              label: "Features",
              placeholder: "Features are separated by commas",
            },
          ]}
          path='/productdescription'
        />
      </Suspense>
    </>
  );
}


```
```typescript:src/components/ListMain.tsx
import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Tooltip from "@mui/material/Tooltip";
import { FormattedMessage } from "react-intl";
import { Link } from "gatsby";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

interface listMainProps {
  reducer: any;
  dirList: string;
  formattedId: string;
  iconComponent: React.FC;
}

const ListMain = (props: listMainProps) => {
  let selectedList = (url) => {
    if (url == window.location.pathname) {
      return true;
    } else {
      return false;
    }
  };

  const [state, dispatch] = props.reducer;
  const formattedIdList = props.formattedId;
  const dirListName = props.dirList;
  const iconComponent = props.iconComponent;
  return (
    <>
      <Tooltip
        title={<FormattedMessage id={formattedIdList} />}
        disableFocusListener
        placement='top-end'
      >
        <ListItem button onClick={() => dispatch({ type: formattedIdList })}>
          <ListItemIcon>
            <Link to={dirListName}>
              {React.createElement(iconComponent)}
            </Link>
          </ListItemIcon>

          <ListItemText primary={<FormattedMessage id={formattedIdList} />} />
          {state[formattedIdList] ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
      </Tooltip>
    </>
  );
};

export default ListMain;


```
```typescript:src/components/SEO/SEO.tsx
import useSiteMetadata from "hooks/useSiteMetadata"
import React from "react"

export const SEO = ({ title, description, pathname, children }) => {
  const { title: defaultTitle, description: defaultDescription, image, siteUrl, twitterUsername, author } = useSiteMetadata()
  const postTitle = `${title} | ${defaultTitle}`
  console.log(postTitle)
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}/${image}`,
    url: `${siteUrl}${pathname}`,
    twitterUsername,
  }

  return (
    <>
      <title>{postTitle}</title>
      {postTitle && <meta name="title" content={postTitle} />}
      {seo?.description && <meta name="description" content={seo.description} />}
      {author?.name && <meta name="author" content={author.name} />}
      {seo?.description && <meta name="description" content={seo.description} />}
      {seo?.image && <meta name="image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {seo?.title && <meta name="twitter:title" content={seo.title} />}
      {seo?.url && <meta name="twitter:url" content={seo.url} />}
      {seo?.description && <meta name="twitter:description" content={seo.description} />}
      {seo?.image && <meta name="twitter:image" content={seo.image} />}
      {seo?.twitterUsername && <meta name="twitter:creator" content={seo.twitterUsername} />}
      {children}
    </>
  )
}

```
```typescript:src/components/SEO/SchemaOrg.tsx
import React from "react";
import { Helmet } from "react-helmet";

interface ISchemaOrgProps {
  author: {
    name: string;
  };
  siteUrl: string;
  datePublished: string;
  defaultTitle: string;
  description: string;
  image: string;
  isBlogPost: boolean;
  organization: {
    name: string;
    url: string;
    logo: string;
  };
  title: string;
  url: string;
}

export default React.memo(
  ({
    author,
    siteUrl,
    datePublished,
    defaultTitle,
    description,
    image,
    isBlogPost,
    organization,
    title,
    url,
  }: ISchemaOrgProps) => {
    const baseSchema = [
      {
        "@context": "http://schema.org",
        "@type": "WebSite",
        url,
        name: title,
        alternateName: defaultTitle,
      },
    ];

    const schema = isBlogPost
      ? [
        ...baseSchema,
        {
          "@context": "http://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@id": url,
                name: title,
                image,
              },
            },
          ],
        },
        {
          "@context": "http://schema.org",
          "@type": "BlogPosting",
          url,
          name: title,
          alternateName: defaultTitle,
          headline: title,
          image: {
            "@type": "ImageObject",
            url: image,
          },
          description,
          author: {
            "@type": "Person",
            name: author.name,
          },
          publisher: {
            "@type": "Organization",
            url: organization.url,
            logo: organization.logo,
            name: organization.name,
          },
          mainEntityOfPage: {
            "@type": "WebSite",
            "@id": siteUrl,
          },
          datePublished,
        },
      ]
      : baseSchema;

    return (
      <Helmet>
        {/* Schema.org tags */}
        <script type='application/ld+json'>{JSON.stringify(schema)}</script>
      </Helmet>
    );
  }
);


```
```typescript:src/components/SEO/head.tsx
import React from "react";
import { StaticQuery, graphql } from "gatsby";
import SchemaOrg from "./SchemaOrg";

// Define types for better type safety
type Frontmatter = {
  title: string;
  description: string;
  date: string;
  image: string;
  slug: string;
};

type SEOProps = {
  isBlogPost?: boolean;
  frontmatter?: Frontmatter;
  postImage?: string;
  langKey?: string;
};

type SiteMetadata = {
  title: string;
  description: string;
  siteUrl: string;
  image: string;
  author: { name: string };
  organization: { name: string; url: string; logo: string };
};

// SEO component for optimizing meta tags and schema.org data
export const Head: React.FC<SEOProps> = ({ 
  frontmatter = {
    title: '',
    description: '',
    date: '',
    image: '',
    slug: '',
  }, 
  postImage, 
  isBlogPost, 
  langKey 
}) => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
            description
            siteUrl
            image
            author { name }
            organization { name url logo }
          }
        }
      }
    `}
    render={(data: { site: { siteMetadata: SiteMetadata } }) => {
      const seo = data.site.siteMetadata;
      const title = frontmatter.title || seo.title;
      const description = frontmatter.description || seo.description;
      const image = postImage ? `${seo.siteUrl}${postImage}` : seo.image;
      const url = frontmatter.slug ? `${seo.siteUrl}${frontmatter.slug}/` : seo.siteUrl;

      return (
        <>
          <html lang={langKey} />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="author" content={seo.author.name} />
          {image && <meta name="image" content={image} />}
          <meta property="og:url" content={url} />
          {isBlogPost && <meta property="og:type" content="article" />}
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:site_name" content={title} />
          {image && <meta property="og:image" content={image} />}
          <SchemaOrg
            isBlogPost={!!isBlogPost}
            url={url}
            title={title}
            image={image}
            description={description}
            author={{ name: seo.author.name }}
            datePublished={frontmatter.date}
            siteUrl={seo.siteUrl}
            organization={seo.organization}
            defaultTitle={seo.title}
          />
        </>
      );
    }}
  />
);

// Export the Head component directly
export default Head;

// Usage example:
// <SEO frontmatter={post.frontmatter} postImage={post.image} isBlogPost langKey="en" />

```
```typescript:src/components/settings-drawer.tsx
import type { FC } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { X as XIcon } from "../icons/x";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { FormattedMessage } from "react-intl";
import NestedList, { langProps } from "./NestedList";
import useSettings from "hooks/use-settings";
import { Settings } from "contexts/settings-context";

interface SettingsDrawerProps {
  onClose?: () => void;
  langs?: langProps[];
  langKey?: string;
  open?: boolean;
}

const themes = [
  {
    label: <FormattedMessage id="A03" />,
    value: "light",
    icon: LightModeIcon,
  },
  {
    label: <FormattedMessage id="A04" />,
    value: "dark",
    icon: DarkModeIcon,
  },
];

const getValues = (settings: Settings) => ({
  direction: settings.direction,
  responsiveFontSizes: settings.responsiveFontSizes,
  theme: settings.theme,
  lang: settings.lang,
});

const SettingsDrawer: FC<SettingsDrawerProps> = (props) => {
  const { open, onClose, langs, langKey, ...other } = props;
  const { settings, saveSettings } = useSettings();
  const [values, setValues] = React.useState(getValues(settings));
  const handleChange = (field, value): void => {
    setValues({
      ...values,
      [field]: value,
    });
  };

  const handleSave = (): void => {
    saveSettings(values);
    onClose?.();
  };

  return (
    <Drawer
      anchor="right"
      onClose={onClose}
      open={open}
      ModalProps={{ sx: { zIndex: 2000 } }}
      PaperProps={{ sx: { width: 320 } }}
      {...other}
      aria-label="right drawer"
    >
      <Box
        sx={{
          alignItems: "center",
          backgroundColor: "primary",
          display: "flex",
          justifyContent: "space-between",
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
          px: 3,
          py: 2,
        }}
      >
        <Typography
          color="primary"
          sx={{ fontWeight: 600, lineHeight: 1.375 }}
          variant="h5"
        >
          {<FormattedMessage id="A01" />}
        </Typography>
        <IconButton color="primary" onClick={onClose}>
          <XIcon fontSize="small" />
        </IconButton>
      </Box>
      <Box
        sx={{
          py: 3,
          px: 3,
        }}
      >
        <Typography
          color="textSecondary"
          sx={{
            display: "block",
            mb: 1,
          }}
          variant="overline"
        >
          {<FormattedMessage id="A02" />}
        </Typography>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            m: -1,
          }}
        >
          {themes.map((theme) => {
            const { label, icon: Icon, value } = theme;

            return (
              <div key={value}>
                <Box
                  onClick={() => handleChange("theme", value)}
                  sx={{
                    borderColor: values.theme === value ? "primary" : "divider",
                    borderRadius: 1,
                    borderStyle: "solid",
                    borderWidth: 2,
                    cursor: "pointer",
                    flexGrow: 1,
                    fontSize: 0,
                    m: 1,
                    overflow: "hidden",
                    p: 1,
                    "& svg": {
                      height: "50px",
                      width: "50px",
                    },
                  }}
                >
                  <Icon fontSize="small" />
                </Box>
                <Typography
                  align="center"
                  sx={{ m: 1.5 }}
                  variant="caption"
                  color={values.theme === value ? "primary" : "textSecondary"}
                >
                  {label}
                </Typography>
              </div>
            );
          })}
        </Box>
        <Divider sx={{ mt: 4 }} />
        <NestedList items={langs} langKey={langKey} />
        <Divider sx={{ mt: 4 }} />
        <Button
          color="primary"
          fullWidth
          onClick={handleSave}
          sx={{ mt: 3 }}
          size="small"
          variant="contained"
          aria-label="save"
        >
          {<FormattedMessage id="A05" />}
        </Button>
      </Box>
    </Drawer>
  );
};

export default SettingsDrawer;


```
```typescript:src/components/ProductTools.tsx
import React from "react";
import { useIntl } from "react-intl";
import ProductDescription, { ProductGenerationProps } from "./editors/ProductDescription";
import {
  updateAudienceValue,
  updateBusinessNameValue,
  updateKeywordValue,
  updateFeatureValue,
} from "../slices/fieldsValue";
import { JSX } from "react/jsx-runtime";


export const ProductDescriptionTool = (props) => {
  const intl = useIntl();
  const brandName: string = intl.formatMessage({ id: "A005" });
  const brandNamebusiness: string = intl.formatMessage({ id: "A006" });
  const audiencelabel: string = intl.formatMessage({ id: "A007" });
  const audienceplaceholder: string = intl.formatMessage({ id: "A008" });

  const keywordslabel: string = intl.formatMessage({ id: "A009" });
  const keywordsplaceholder: string = intl.formatMessage({ id: "A0010" });

  const Featurelabel: string = intl.formatMessage({ id: "A0011" });
  const Featureplaceholder: string = intl.formatMessage({ id: "A0012" });

  return (
    <ProductDescription
      mainPlaceholder={intl.formatMessage({ id: "A002" })}
      generateButtonName={intl.formatMessage({ id: "A003" })}
      headerTitle={intl.formatMessage({ id: "A004" })}
      labelsLists={[
        {
          label: brandName,
          placeholder: brandNamebusiness,
          dispatcher: updateBusinessNameValue,
        },
        {
          label: audiencelabel,
          placeholder: audienceplaceholder,
          dispatcher: updateAudienceValue,
        },
        {
          label: keywordslabel,
          placeholder: keywordsplaceholder,
          dispatcher: updateKeywordValue,
        },
        {
          label: Featurelabel,
          placeholder: Featureplaceholder,
          dispatcher: updateFeatureValue,
        },
      ]}
      {...props}
    />
  );
};

export const ProductTaglineTool = (props: JSX.IntrinsicAttributes & ProductGenerationProps) => {
  const intl = useIntl();
  const keywordslabel: string = intl.formatMessage({ id: "A009" });
  const keywordsplaceholder: string = intl.formatMessage({ id: "A0010" });

  return (
    <ProductDescription
      labelsLists={[
        {
          label: keywordslabel,
          placeholder: keywordsplaceholder,
          dispatcher: updateKeywordValue,
        },
      ]}
      {...props}
    />
  );
};

export const AdsGoogleTool = (props) => {
  const intl = useIntl();
  const brandName: string = intl.formatMessage({ id: "A005" });
  const brandNamebusiness: string = intl.formatMessage({ id: "A006" });

  const keywordslabel: string = intl.formatMessage({ id: "A009" });
  const keywordsplaceholder: string = intl.formatMessage({ id: "A0010" });

  const Featurelabel: string = intl.formatMessage({ id: "A0011" });
  const Featureplaceholder: string = intl.formatMessage({ id: "A0012" });

  return (
    <ProductDescription
      generateButtonName={intl.formatMessage({ id: "A003" })}
      labelsLists={[
        {
          label: brandName,
          placeholder: brandNamebusiness,
          dispatcher: updateBusinessNameValue,
        },
        {
          label: keywordslabel,
          placeholder: keywordsplaceholder,
          dispatcher: updateKeywordValue,
        },
        {
          label: Featurelabel,
          placeholder: Featureplaceholder,
          dispatcher: updateFeatureValue,
        },
      ]}
      {...props}
    />
  );
};

{
  /* <ProductDescription
label={<FormattedMessage id='L12319' />}
headerTitle={<FormattedMessage id='T09819' />}
description={<FormattedMessage id='D76519' />}
example={<FormattedMessage id='E56719' />}
instructHelp={<FormattedMessage id='H43219' />}
generateButtonName={<FormattedMessage id='N78919' />}
productType='25'
path='/productdescription'
toneTextField={true}
labelsLists={[]}
/> */
}


```
```typescript:src/components/editors/toggle-button-group.tsx
import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import { styled, useTheme } from "@mui/material/styles";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export const StyledToggleButtonGroup = styled(ToggleButtonGroup)(
  ({ theme }) => ({
    "& .MuiToggleButtonGroup-grouped": {
      margin: theme.spacing(0.5),
      border: 0,
      "&.Mui-disabled": {
        border: 0,
      },
      "&:not(:first-of-type)": {
        borderRadius: theme.shape.borderRadius,
      },
      "&:first-of-type": {
        borderRadius: theme.shape.borderRadius,
      },
    },
  })
);


```
```typescript:src/components/editors/EditorToolsBoxBar.tsx
import React from "react";
import Box from "@mui/material/Box";
import ShortTextIcon from "@mui/icons-material/ShortText";
import BarToggleButton from "components/editors/bar-toggle-button";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import BallotOutlinedIcon from "@mui/icons-material/BallotOutlined";
import LiveHelpOutlinedIcon from "@mui/icons-material/LiveHelpOutlined";
import SpellcheckIcon from "@mui/icons-material/Spellcheck";
import { FormalStyle, RephraseParaphrase } from "icons/Icons";


const EditorToolsBoxBar = ({
  handleSpellcheck,
  handleAdvancify,
  handleSimplify,
  handleRephrase,
  handleKeyPoints,
  handleElegantify,
  handleQuestions,
}) => {
  return (
    <>
      <Box
        sx={{
          marginLeft: "auto",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          boxSizing: "border-box",
          justifyContent: "start",
        }}
      >
        <BarToggleButton
          format='Turining into Key Points'
          icon={<BallotOutlinedIcon fontSize='small' />}
          handleClick={handleKeyPoints}
        />
        <BarToggleButton
          format='Simplifying'
          icon={<ShortTextIcon fontSize='small' />}
          handleClick={handleSimplify}
        />
        <BarToggleButton
          format='To Formal Style'
          icon={
            <FormalStyle
              viewBox='0 0 64 64'
              height='24'
              width='24'
              fontSize='small'
            />
          }
          handleClick={handleAdvancify}
        />
        <BarToggleButton
          format='Enhancing'
          icon={<AutoAwesomeRoundedIcon fontSize='small' />}
          handleClick={handleElegantify}
        />
        <BarToggleButton
          format='Rephrase'
          icon={
            <RephraseParaphrase
              viewBox='0 0 24 24'
              height='24'
              width='24'
              fontSize='small'
            />
          }
          handleClick={handleRephrase}
        />
        <BarToggleButton
          format='Turning into Questions'
          icon={<LiveHelpOutlinedIcon fontSize='small' />}
          handleClick={handleQuestions}
        />
        <BarToggleButton
          format='Grammar Check'
          icon={<SpellcheckIcon fontSize='small' />}
          handleClick={handleSpellcheck}
        />
      </Box>
    </>
  );
};

export default EditorToolsBoxBar;


```
```typescript:src/components/editors/HoveringToolbar.tsx
import * as React from "react";
import SelectionTransformerBar from "./SelectionTransformerBar";
import Box from "@mui/material/Box";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { useSelector } from "react-redux";
import Portal from "@mui/material/Portal";

export default function HoveringToolbar(props) {
  const { selectedTextValue } = useSelector((state) => state.editorParams);
  const selectionStatus =
    selectedTextValue &&
    selectedTextValue.length > 2 &&
    selectedTextValue.length < 15000
      ? true
      : false;

  const handleClickAway = () => {
    console.log("Click away");
  };

  const editor = props.editor;
  const editor2 = props.editor2;
  const editor3 = props.editor3;
  const editor4 = props.editor4;

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box sx={{ position: "relative" }}>
        {selectionStatus ? (
          <Portal>
            <Box
              sx={{
                position: "fixed",
                width: 220,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                border: (theme) => `1px solid ${theme.palette.divider}`,
                transition: "opacity 0.75s",
                borderRadius: 1,
                p: 0.25,
                bgcolor: "background.paper",
              }}
            >
              <SelectionTransformerBar
                editor={editor}
                editor2={editor2}
                editor3={editor3}
                editor4={editor4}
              />
            </Box>
          </Portal>
        ) : null}
      </Box>
    </ClickAwayListener>
  );
}


```
```typescript:src/components/editors/FooterEditorBar.tsx
import React from 'react';
import { Editor } from 'slate';
import { styled, Box, Divider, Typography } from '@mui/material';
import { Redo as RedoIcon, Undo as UndoIcon } from '@mui/icons-material';

import PlusButton from '../subcomponents/plus-button';
import ToggleButtonList from '../subcomponents/toggle-button-list';
import CopyToClipboard from '../subcomponents/copy-to-clipboard';
import Play from 'components/subcomponents/Play';
import ButtonPostData from './button-post-data';
import { serialize } from '../../hooks/currentSelectEditor';

// Styled components
const CharacterCount = styled('div')<{ isWarning: boolean }>(({ theme, isWarning }) => ({
  padding: '0.1em 0.1rem',
  color: isWarning ? theme.palette.warning.main : theme.palette.primary.main,
  fontSize: '80%',
  maxHeight: '24px',
  fontWeight: 600,
  textAlign: 'center',
  borderRadius: '10%',
}));

// Types
interface FooterEditorBarProps {
  editor: Editor;
  handleTransfer?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  voice?: boolean;
}

export const FooterEditorBar: React.FC<FooterEditorBarProps> = ({
  editor,
  handleTransfer,
  voice = false,
  disabled = false,
}) => {
  const characterCount = serialize(editor).length;
  const isWarning = characterCount > 15000;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
      <Divider sx={{ width: '100%', marginTop: '1.5rem' }} />
      <Box sx={{ display: 'flex', marginTop: '0.15rem' }}>
        <Box sx={{ flexGrow: 1 }}>
          {!disabled && <PlusButton onClick={handleTransfer} />}
          <CopyToClipboard editor={editor} />
          <ButtonPostData editor={editor} />
          {voice && <Play />}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <ToggleButtonList
            title="Undo"
            icon={<UndoIcon fontSize="inherit" />}
            onClick={() => editor.undo()}
            disabled={editor.history.undos.length === 0}
          />
          <ToggleButtonList
            title="Redo"
            icon={<RedoIcon fontSize="inherit" />}
            onClick={(e) => {
              e.preventDefault();
              editor.redo();
            }}
            disabled={editor.history.redos.length === 0}
          />
          <ToggleButtonList
            title="Number of Characters"
            icon={
              <Typography variant="caption" display="block" gutterBottom sx={{ mb: 0 }}>
                <CharacterCount isWarning={isWarning}>{characterCount}</CharacterCount>
              </Typography>
            }
          />
        </Box>
      </Box>
    </Box>
  );
};

export default FooterEditorBar;

```
```typescript:src/components/editors/google.ts
const loadScriptByURL = (id, url, callback) => {
    const isScriptExist = document.getElementById(id);

    if (!isScriptExist) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        script.id = id;
        script.onload = function () {
            if (callback) callback();
        };
        document.body.appendChild(script);
    }

    if (isScriptExist && callback) callback();
};

export default loadScriptByURL

```
```typescript:src/components/editors/PrismJs.ts
import Prism from "prismjs";
import "prismjs/components/prism-python";
import "prismjs/components/prism-php";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-java";

Prism.languages.python = Prism.languages.extend("python", {});
Prism.languages.insertBefore("python", "prolog", {
  comment: { pattern: /##[^\n]*/, alias: "comment" },
});
Prism.languages.javascript = Prism.languages.extend("javascript", {});
Prism.languages.insertBefore("javascript", "prolog", {
  comment: { pattern: /\/\/[^\n]*/, alias: "comment" },
});
Prism.languages.html = Prism.languages.extend("html", {});
Prism.languages.insertBefore("html", "prolog", {
  comment: { pattern: /<!--[^\n]*-->/, alias: "comment" },
});
Prism.languages.markdown = Prism.languages.extend("markup", {});
Prism.languages.insertBefore("markdown", "prolog", {
  blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: "punctuation" },
  code: [
    { pattern: /^(?: {4}|\t).+/m, alias: "keyword" },
    { pattern: /``.+?``|`[^`\n]+`/, alias: "keyword" },
  ],
  title: [
    {
      pattern: /\w+.*(?:\r?\n|\r)(?:==+|--+)/,
      alias: "important",
      inside: { punctuation: /==+$|--+$/ },
    },
    {
      pattern: /(^\s*)#+.+/m,
      lookbehind: !0,
      alias: "important",
      inside: { punctuation: /^#+|#+$/ },
    },
  ],
  hr: {
    pattern: /(^\s*)([*-])([\t ]*\2){2,}(?=\s*$)/m,
    lookbehind: !0,
    alias: "punctuation",
  },
  list: {
    pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
    lookbehind: !0,
    alias: "punctuation",
  },
  "url-reference": {
    pattern:
      /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
    inside: {
      variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
      string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
      punctuation: /^[\[\]!:]|[<>]/,
    },
    alias: "url",
  },
  bold: {
    pattern: /(^|[^\\])(\*\*|__)(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
    lookbehind: !0,
    inside: { punctuation: /^\*\*|^__|\*\*$|__$/ },
  },
  italic: {
    pattern: /(^|[^\\])([*_])(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
    lookbehind: !0,
    inside: { punctuation: /^[*_]|[*_]$/ },
  },
  url: {
    pattern:
      /!?\[[^\]]+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[[^\]\n]*\])/,
    inside: {
      variable: { pattern: /(!?\[)[^\]]+(?=\]$)/, lookbehind: !0 },
      string: { pattern: /"(?:\\.|[^"\\])*"(?=\)$)/ },
    },
  },
});
Prism.languages.markdown.bold.inside.url = Prism.util.clone(
  Prism.languages.markdown.url
);
Prism.languages.markdown.italic.inside.url = Prism.util.clone(
  Prism.languages.markdown.url
);
Prism.languages.markdown.bold.inside.italic = Prism.util.clone(
  Prism.languages.markdown.italic
);
Prism.languages.markdown.italic.inside.bold = Prism.util.clone(Prism.languages.markdown.bold); // prettier-ignore

export default Prism;


```
```typescript:src/components/editors/editor-slate.tsx
import React, { useCallback, useMemo } from "react";
import isHotkey from "is-hotkey";
import { Editable, withReact, useSlate, Slate } from "editable-slate-react";
import {
  Editor,
  Transforms,
  createEditor,
  Node as SlateNode,
  Descendant,
  Element as SlateElement,
} from "slate";
import { withHistory } from "slate-history";

import { Ref, PropsWithChildren } from "react";
import { cx, css } from "@emotion/css";
import ReactDOM from "react-dom";
interface BaseProps {
  className: string;
  [key: string]: unknown;
}
type OrNull<T> = T | null;

export const Button = React.forwardRef(
  (
    {
      className,
      active,
      reversed,
      ...props
    }: PropsWithChildren<
      {
        active: boolean;
        reversed: boolean;
      } & BaseProps
    >,
    ref: Ref<OrNull<HTMLSpanElement>>
  ) => (
    <span
      {...props}
      ref={ref}
      className={cx(
        className,
        css`
          cursor: pointer;
          color: ${reversed
            ? active
              ? "white"
              : "#aaa"
            : active
            ? "black"
            : "#ccc"};
        `
      )}
    />
  )
);

export const EditorValue = React.forwardRef(
  (
    {
      className,
      value,
      ...props
    }: PropsWithChildren<
      {
        value: any;
      } & BaseProps
    >,
    ref: Ref<OrNull<null>>
  ) => {
    const textLines = value.document.nodes
      .map((node) => node.text)
      .toArray()
      .join("\n");
    return (
      <div
        ref={ref}
        {...props}
        className={cx(
          className,
          css`
            margin: 30px -20px 0;
          `
        )}
      >
        <div
          className={css`
            font-size: 14px;
            padding: 5px 20px;
            color: #404040;
            border-top: 2px solid #eeeeee;
            background: #f8f8f8;
          `}
        >
          Slate's value as text
        </div>
        <div
          className={css`
            color: #404040;
            font: 12px monospace;
            white-space: pre-wrap;
            padding: 10px 20px;
            div {
              margin: 0 0 0.5em;
            }
          `}
        >
          {textLines}
        </div>
      </div>
    );
  }
);

const Icon = React.forwardRef(
  (
    { className, ...props }: PropsWithChildren<BaseProps>,
    ref: Ref<OrNull<HTMLSpanElement>>
  ) => (
    <Button
      {...props}
      ref={ref}
      className={cx(
        "material-icons",
        className,
        css`
          font-size: 18px;
          vertical-align: text-bottom;
        `
      )}
    />
  )
);

const Menu = React.forwardRef(
  (
    { className, ...props }: PropsWithChildren<BaseProps>,
    ref: Ref<OrNull<HTMLDivElement>>
  ) => (
    <div
      {...props}
      ref={ref}
      className={cx(
        className,
        css`
          & > * {
            display: inline-block;
          }

          & > * + * {
            margin-left: 15px;
          }
        `
      )}
    />
  )
);

const Portal = ({ children }) => {
  return typeof document === "object"
    ? ReactDOM.createPortal(children, document.body)
    : null;
};

const Toolbar = React.forwardRef(
  (
    { className, ...props }: PropsWithChildren<BaseProps>,
    ref: Ref<OrNull<HTMLDivElement>>
  ) => (
    <Menu
      {...props}
      ref={ref}
      className={cx(
        className,
        css`
          position: relative;
          padding: 1px 18px 17px;
          margin: 0 -20px;
          border-bottom: 2px solid #eee;
          margin-bottom: 20px;
        `
      )}
    />
  )
);

const HOTKEYS = {
  "mod+b": "bold",
  "mod+i": "italic",
  "mod+u": "underline",
  "mod+`": "code",
};

const LIST_TYPES = ["numbered-list", "bulleted-list"];
const TEXT_ALIGN_TYPES = ["left", "center", "right", "justify"];

import { useState } from "react";
import { BaseEditor } from "slate";
import { ReactEditor } from "editable-slate-react";
import { HistoryEditor } from "slate-history";
const RichTextExample = () => {
  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  const [value, setValue] = useState<Descendant[]>([
    { type: "paragraph", children: [{ text: "" }] },
  ]);
  const ref = React.useRef(null);

  type CustomText = { text: string };
  type CustomElement = { type: "paragraph"; children: CustomText[] };

  return (
    <Slate
      editor={editor}
      value={value}
      onChange={(newValue) => setValue(newValue)}
    >
      <Toolbar>
        <MarkButton format='bold' icon='format_bold' />
        <MarkButton format='italic' icon='format_italic' />
        <MarkButton format='underline' icon='format_underlined' />
        <MarkButton format='code' icon='code' />
        <BlockButton format='heading-one' icon='looks_one' />
        <BlockButton format='heading-two' icon='looks_two' />
        <BlockButton format='block-quote' icon='format_quote' />
        <BlockButton format='numbered-list' icon='format_list_numbered' />
        <BlockButton format='bulleted-list' icon='format_list_bulleted' />
        <BlockButton format='left' icon='format_align_left' />
        <BlockButton format='center' icon='format_align_center' />
        <BlockButton format='right' icon='format_align_right' />
        <BlockButton format='justify' icon='format_align_justify' />
      </Toolbar>
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        placeholder='Enter some rich text…'
        spellCheck
        autoFocus
        onKeyDown={(event) => {
          for (const hotkey in HOTKEYS) {
            if (isHotkey(hotkey, event as any)) {
              event.preventDefault();
              const mark = HOTKEYS[hotkey];
              toggleMark(editor, mark);
            }
          }
        }}
      />
    </Slate>
  );
};

const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(
    editor,
    format,
    TEXT_ALIGN_TYPES.includes(format) ? "align" : "type"
  );
  const isList = LIST_TYPES.includes(format);

  Transforms.unwrapNodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) &&
      SlateElement.isElement(n) &&
      LIST_TYPES.includes(n.type) &&
      !TEXT_ALIGN_TYPES.includes(format),
    split: true,
  });
  let newProperties: Partial<SlateElement>;
  if (TEXT_ALIGN_TYPES.includes(format)) {
    newProperties = {
      align: isActive ? undefined : format,
    };
  } else {
    newProperties = {
      type: isActive ? "paragraph" : isList ? "list-item" : format,
    };
  }
  Transforms.setNodes<SlateElement>(editor, newProperties);

  if (!isActive && isList) {
    const block = { type: format, children: [] };
    Transforms.wrapNodes(editor, block);
  }
};

const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

const isBlockActive = (editor, format, blockType = "type") => {
  const { selection } = editor;
  if (!selection) return false;

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: (n) =>
        !Editor.isEditor(n) &&
        SlateElement.isElement(n) &&
        n[blockType] === format,
    })
  );

  return !!match;
};

const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

const Element = ({ attributes, children, element }) => {
  const style = { textAlign: element.align };
  switch (element.type) {
    case "block-quote":
      return (
        <blockquote style={style} {...attributes}>
          {children}
        </blockquote>
      );
    case "bulleted-list":
      return (
        <ul style={style} {...attributes}>
          {children}
        </ul>
      );
    case "heading-one":
      return (
        <h1 style={style} {...attributes}>
          {children}
        </h1>
      );
    case "heading-two":
      return (
        <h2 style={style} {...attributes}>
          {children}
        </h2>
      );
    case "list-item":
      return (
        <li style={style} {...attributes}>
          {children}
        </li>
      );
    case "numbered-list":
      return (
        <ol style={style} {...attributes}>
          {children}
        </ol>
      );
    default:
      return (
        <p style={style} {...attributes}>
          {children}
        </p>
      );
  }
};

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.code) {
    children = <code>{children}</code>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  return <span {...attributes}>{children}</span>;
};

const BlockButton = ({ format, icon }) => {
  const editor = useSlate();
  return (
    <Button
      active={isBlockActive(
        editor,
        format,
        TEXT_ALIGN_TYPES.includes(format) ? "align" : "type"
      )}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleBlock(editor, format);
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  );
};

const MarkButton = ({ format, icon }) => {
  const editor = useSlate();
  return (
    <Button
      active={isMarkActive(editor, format)}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  );
};

export default RichTextExample;


```
```typescript:src/components/editors/ProductDescription.tsx
// Core
import React, { useEffect, Suspense } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useTheme } from "@mui/material/styles"

// UI Components
import {
  Box, Card, CardHeader, CardContent, CardActions,
  Divider, FormHelperText, IconButton, useMediaQuery
} from "@mui/material"
import OpenInFullRoundedIcon from "@mui/icons-material/OpenInFullRounded"

// Local
import useEditors from "../../hooks/useEditors"
import { updateExpansion } from "../../slices/ui-states"
import { AppDispatch } from "store"
import loadScriptByURL from "./google"
import GenerationButton from "./GenerationButton"
import MultipleOptions from "components/subcomponents/MultipleOptions"
import SlidePanelOutput from "components/side-panel-output"
import LanguageOutputsModal from "components/subcomponents/language-outputs-modal"
import QuestionMarkIcon from "components/subcomponents/questionMarkIcon"
import { LoadFromUrl } from "./loadFromUrl"
import InputSettings from "./input-settings"
import FormRedux from "./FormRedux"
import EditorsPanelSide from "./EditorsPanelSide"


// Lazy loaded components
const MainSlateEditor = React.lazy(() => import("./MainSlateEditor"))

// Constants
const RECAPTCHA_KEY = "6LcA4HoaAAAAAMHEQHKWWXyoi1TaCiDgSJoy2qtP"
const RECAPTCHA_URL = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_KEY}`

// Types
type InputField = { label: string; placeholder: string; dispatcher?: (v: string) => void }
type EditorType = "document" | "draft"

type Props = {
  generateButtonName?: string
  inputLimitation?: number
  message01?: string
  mainPlaceholder?: string
  headerTitle?: string
  toneTextField?: boolean
  productType?: string
  productUrl?: string
  labelsLists?: InputField[]
  path: string
  extraFields?: any
  editorHeight?: number
  label?: string
  tunningOptions?: boolean
  description?: string
  example?: string
  instructHelp?: string
  component?: React.ComponentType<{}>
  editorType?: EditorType
  loadFromUrl?: boolean
}

// Styles
const styles = {
  mainBox: (expand: boolean) => ({
    flexGrow: 1,
    width: "100%",
    ...(expand && {
      width: { xs: "100%", md: "calc(100% - 30%)" },
      height: { xs: "calc(100% - 30%)", md: "100%" },
      marginRight: { xs: "0%", md: "33%" },
      marginBottom: { xs: "60vw", md: "0%" },
    })
  }),
  container: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "center",
    alignItems: "center"
  }
}

// Component
const ProductDescription = ({
  inputLimitation = 15000,
  productType = "4",
  label,
  productUrl = "generate",
  toneTextField,
  labelsLists,
  extraFields,
  description,
  editorHeight,
  instructHelp,
  example,
  tunningOptions,
  editorType = "document",
  loadFromUrl,
}: Props) => {
  const { editor1, editor2, editor3, editor4, editor5 } = useEditors()
  const dispatch = useDispatch<AppDispatch>()
  const { expand } = useSelector((state: any) => state.expandReducer)
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"))

  const editor = editorType === "draft" ? editor5 : editor1
  const storageKey = editorType === "draft" ? "draft" : "document"

  useEffect(() => {
    loadScriptByURL("recaptcha-key", RECAPTCHA_URL, () => console.log("ReCaptcha loaded"))
  }, [])

  const toggleExpand = () => dispatch(updateExpansion(!expand))
  const closeExpand = () => dispatch(updateExpansion(false))

  return (
    <Box sx={styles.container}>
      <Box sx={styles.mainBox(expand)}>
        <Card elevation={1} sx={{ backgroundColor: "background.paper" }}>
          <CardHeader
            title={label}
            avatar={<QuestionMarkIcon title={description} />}
            action={
              <>
                <LanguageOutputsModal />
                <IconButton onClick={toggleExpand} size="small" aria-label="Expand">
                  <OpenInFullRoundedIcon fontSize="small" />
                </IconButton>
              </>
            }
          />

          <CardContent>
            {tunningOptions && <InputSettings temperature tokenL frequencyP presenceP engineId />}
            {extraFields && <FormRedux labelsLists={labelsLists} extraFields={extraFields} />}
            {toneTextField && <Box sx={{ mt: 2 }}><MultipleOptions /></Box>}
            {loadFromUrl && <LoadFromUrl editor={editor} editor2={editor2} editor3={editor3} editor4={editor4} />}

            <Suspense fallback={<div>Loading...</div>}>
              <FormHelperText sx={{ mb: 2 }}>{instructHelp}</FormHelperText>
              <MainSlateEditor
                placeholder={example}
                editor={editor}
                limitChar={inputLimitation}
                storageKey={storageKey}
                editorHeight={editorHeight}
                productType={productType}
                editor2={editor2}
                editor3={editor3}
                editor4={editor4}
              />
            </Suspense>
          </CardContent>

          <Divider />

          <CardActions disableSpacing>
            <GenerationButton
              inputLimit={inputLimitation}
              pType={productType}
              pUrl={productUrl}
              editor={editor}
              editor2={editor2}
              editor3={editor3}
              editor4={editor4}
            />
          </CardActions>
        </Card>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", alignItems: { xs: "center", md: "flex-start" } }}>
        <SlidePanelOutput
          anchor={isDesktop ? "right" : "bottom"}
          // handleExpand={toggleExpand}
          onClose={closeExpand}
          open={expand}
        >
          <EditorsPanelSide
            editor={editor}
            editor2={editor2}
            editor3={editor3}
            editor4={editor4}
          />
        </SlidePanelOutput>
      </Box>
    </Box>
  )
}

export default ProductDescription

```
```typescript:src/components/editors/ToolbarEditor.tsx
import * as React from "react";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  "& .MuiToggleButtonGroup-grouped": {
    margin: theme.spacing(0.5),
    border: 0,
    "&.Mui-disabled": {
      border: 0,
    },
    "&:not(:first-of-type)": {
      borderRadius: theme.shape.borderRadius,
    },
    "&:first-of-type": {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));

export default function ToolbarEditor({ children }) {
  const [alignment, setAlignment] = React.useState("left");
  const [formats, setFormats] = React.useState(() => ["italic"]);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div>
      <Paper
        elevation={0}
        sx={{
          display: "flex",
          border: (theme) => `1px solid ${theme.palette.divider}`,
          flexWrap: "wrap",
        }}
      >
        <Divider flexItem orientation='vertical' sx={{ mx: 0.5, my: 1 }} />
        <StyledToggleButtonGroup
          size='small'
          value={formats}
          onChange={handleFormat}
          aria-label='text formatting'
        >
          {children}
        </StyledToggleButtonGroup>
      </Paper>
    </div>
  );
}


```
```typescript:src/components/editors/loadFromUrl.tsx
import type { FC } from "react";
import React from "react";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import HttpOutlinedIcon from "@mui/icons-material/HttpOutlined";
import LoadingButtonProgress from "components/subcomponents/LoadingButtonProgress";
import { useSelector, useDispatch } from "react-redux";
import useFetchUrl2Insert from "hooks/useFetchUrl2Insert";
import { useSnackbar } from "notistack";
import { Editor } from "slate";
import { updateProgressValue } from "slices/progress";
const SITE_KEY = "6LcA4HoaAAAAAMHEQHKWWXyoi1TaCiDgSJoy2qtP";
import Portal from "@mui/material/Portal";
import { Link } from "@mui/material";
import { debounce } from "lodash";
import { updateLoadFromUrl } from "slices/fieldsValue";
import { HistoryEditor } from "slate-history";
import { ReactEditor } from "editable-slate-react";
import { AppDispatch } from "store";

interface LoadFromUrlProps {
  editor: Editor & ReactEditor & HistoryEditor;
  editor2?: Editor & ReactEditor & HistoryEditor;
  editor3?: Editor & ReactEditor & HistoryEditor;
  editor4?: Editor & ReactEditor & HistoryEditor;
}

export const LoadFromUrl: React.FC<LoadFromUrlProps> = ({ editor, editor2, editor3, editor4 }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { enqueueSnackbar } = useSnackbar();
  const fieldValues = useSelector((state: any) => state.fieldsValue);
  const editors = [editor, editor2, editor3, editor4];
  const [show, setShow] = React.useState(false);

  const handleGenerate = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    (window as any).grecaptcha.ready(() => {
      (window as any).grecaptcha
        .execute(SITE_KEY, { action: "submit" })
        .then((gtoken: string) => {
          dispatch(updateProgressValue(15));
          useFetchUrl2Insert(
            dispatch,
            enqueueSnackbar,
            editors,
            gtoken,
            "58",
            fieldValues
          );
        });
    });
  };

  const handleClick = () => {
    setShow(!show);
  };
  const container = React.useRef(null);

  return (
    <>
      <div>
        <Typography color='textSecondary' variant='body2' sx={{ my: 1 }}>
          <Link href='#' onClick={handleClick}>
            Load from URL
          </Link>
        </Typography>
      </div>
      {show ? (
        <Portal container={container.current}>
          <TextField
            placeholder='https://example.com'
            size='small'
            sx={{
              my: 1,
              flexGrow: 1,
            }}
            onChange={debounce((e) => {
              e.preventDefault();
              const content = JSON.stringify(e.target.value);
              localStorage.setItem("url", content);
              dispatch(updateLoadFromUrl(e.target.value));
            }, 300)}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <HttpOutlinedIcon fontSize='small' />
                </InputAdornment>
              ),
            }}
          />
          <LoadingButtonProgress
            size='small'
            sx={{ m: 1.5 }}
            color='primary'
            variant='contained'
            title='Load from URL'
            onClick={handleGenerate}
          />
        </Portal>
      ) : null}
      <Box
        sx={{
          alignItems: "flex-start",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          my: 1,
        }}
        ref={container}
      />
    </>
  );
};



```
```typescript:src/components/editors/GenerationButton.tsx
import React from "react"
import { Editor, Node } from "slate"
import { Box } from "@mui/material"
import { useSnackbar } from "notistack"
import { useSelector, useDispatch } from "react-redux"
import { updateProgressValue } from "../../slices/progress"
import SelectionTransformerBar from "./SelectionTransformerBar"
import LoadingButtonProgress from "../subcomponents/LoadingButtonProgress"
import useFetchAllData from "../../hooks/useFetchAllData"
import { AppDispatch, RootState } from "store"

declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void
      execute: (siteKey: string, options: { action: string }) => Promise<string>
    }
  }
}

const SITE_KEY = "6LcA4HoaAAAAAMHEQHKWWXyoi1TaCiDgSJoy2qtP"

type Props = {
  inputLimit?: number
  pType?: string
  pUrl?: string
  editor: Editor
  editor2?: Editor
  editor3?: Editor
  editor4?: Editor
}

const serialize = (ed: Editor) => ed.children.map(x => Node.string(x)).join("\n")

const GenerationButton = ({
  inputLimit = 15000,
  pType = "4",
  pUrl = "generate",
  editor,
  editor2,
  editor3,
  editor4,
}: Props) => {
  const eds = [editor, editor2, editor3, editor4]
  const { enqueueSnackbar } = useSnackbar()
  const dispatch = useDispatch<AppDispatch>()
  const fields = useSelector((state: RootState) => state.fieldsValue)

  const generate = () => {
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(SITE_KEY, { action: "submit" })
        .then((token: string) => {
          dispatch(updateProgressValue(10))
          useFetchAllData(dispatch, enqueueSnackbar, eds, token, pType, fields)
        })
    })
  }

  const btnStyle = {
    display: "flex",
    flexWrap: "wrap",
    boxSizing: "border-box" as const,
  }

  return (
    <>
      <Box sx={{ ...btnStyle, marginRight: "auto", paddingRight: "0.9em", justifyContent: "start" }}>
        <LoadingButtonProgress
          size="small"
          color="primary"
          variant="contained"
          title="Compose"
          onClick={generate}
        />
      </Box>
      <Box sx={{ ...btnStyle, paddingRight: "0.5em", justifyContent: "end" }}>
        <SelectionTransformerBar
          editor={editor}
          editor2={editor2}
          editor3={editor3}
          editor4={editor4}
        />
      </Box>
    </>
  )
}

export default GenerationButton

```
```typescript:src/components/editors/util.tsx
import React from "react";

export const getTheTextValueOfTheEditor = (editorValue) => {
  const arrofTexts = [];
  const ParagraphesorNodes = editorValue
    .map((x) => x)
    .map((x) => x.children[0]);
  for (let i = 0; i < ParagraphesorNodes.length; i++) {
    const element = ParagraphesorNodes[i];
    arrofTexts.push(element.text);
  }
  return arrofTexts.join("");
};

//Just Google translate
export const searchTranslatedGoogleModel011 = async (
  word: string,
  target: string
) => {
  const theUrl = `https://5uxfupz0gf.execute-api.eu-west-1.amazonaws.com/dev/product-description`;
  const params = {};
  params["query"] = word;
  params["finalLang"] = target;
  params["betweenLang"] = "fr";
  params["firstLang"] = "auto";
  const data = JSON.stringify(params);
  await fetch(theUrl, {
    headers: {
      Authorization: `Bearer ${(await Auth.currentSession())
        .getIdToken()
        .getJwtToken()}`,
    },
    method: "POST",
    body: data,
  });
};


```
```typescript:src/components/editors/Leaf.tsx
import React from "react";
import { css, cx } from "@emotion/css";
import { styled } from "@mui/material/styles";

const Del = styled("del")(({ theme }) => ({
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.background.default,
}));

const PrimarySpan = styled("span")(({ theme }) => ({
  color: theme.palette.text.primary,
}));

const IncorrectParagraph = styled("span")(({ theme }) => ({
  color: theme.palette.text.primary,
  borderBottom: "2px solid #f03000",
}));

const Code = ({ attributes, children, leaf }) => {
  return (
    <span
      {...attributes}
      className={css`
        font-family: monospace;
        background: hsla(0, 0%, 100%, 0.5);

        ${leaf.comment &&
        css`
          color: slategray;
        `}

        ${(leaf.operator || leaf.url) &&
        css`
          color: #9a6e3a;
        `}
    ${leaf.keyword &&
        css`
          color: #07a;
        `}
    ${(leaf.variable || leaf.regex) &&
        css`
          color: #e90;
        `}
    ${(leaf.number ||
          leaf.boolean ||
          leaf.tag ||
          leaf.constant ||
          leaf.symbol ||
          leaf["attr-name"] ||
          leaf.selector) &&
        css`
          color: #905;
        `}
    ${leaf.punctuation &&
        css`
          color: #999;
        `}
    ${(leaf.string || leaf.char) &&
        css`
          color: #690;
        `}
    ${(leaf.function || leaf["class-name"]) &&
        css`
          color: #dd4a68;
        `}
      `}
    >
      {children}
    </span>
  );
};

export const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  } else if (leaf.highlight) {
    children = (
      <mark style={{ backgroundColor: "rgb(79, 217, 201)" }}>{children}</mark>
    );
  } else if (leaf.code) {
    children = (
      <Code {...attributes} leaf={leaf}>
        {children}
      </Code>
    );
  } else if (leaf.selecthighlight) {
    children = (
      <span
        className={css`
          color: #6b778c;
          background-color: yellow;
        `}
      >
        {children}
      </span>
    );
  } else if (leaf.italic) {
    children = <em>{children}</em>;
  } else if (leaf.underline) {
    children = <u>{children}</u>;
  } else if (leaf.incorrectparagraph) {
    children = <IncorrectParagraph>{children}</IncorrectParagraph>;
  } else if (leaf.strikethrough) {
    children = <Del>{children}</Del>;
  } else {
    return <PrimarySpan {...attributes}>{children}</PrimarySpan>;
  }

  return <PrimarySpan {...attributes}>{children}</PrimarySpan>;
};


```
```typescript:src/components/editors/components.tsx
import React, { Ref, PropsWithChildren } from "react";
import ReactDOM from "react-dom";
import { cx, css } from "@emotion/css";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { styled } from "@mui/material/styles";

// Styled component for toggle button group
const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  "& .MuiToggleButtonGroup-grouped": {
    margin: theme.spacing(0.5),
    border: 0,
    "&.Mui-disabled": { border: 0 },
    "&:not(:first-of-type)": { borderRadius: theme.shape.borderRadius },
    "&:first-of-type": { borderRadius: theme.shape.borderRadius },
  },
}));

// Types
interface BaseProps {
  className: string;
  [key: string]: unknown;
}
type OrNull<T> = T | null;

// Button component with conditional styling
export const Button = React.forwardRef(
  (
    { className, active, reversed, ...props }: PropsWithChildren<{ active: boolean; reversed: boolean } & BaseProps>,
    ref: Ref<OrNull<HTMLSpanElement>>
  ) => (
    <span
      {...props}
      ref={ref}
      className={cx(
        className,
        css`
          cursor: pointer;
          color: ${reversed ? (active ? "white" : "#aaa") : active ? "black" : "#ccc"};
        `
      )}
    />
  )
);

// EditorValue component to display the editor's text value
export const EditorValue = React.forwardRef(
  (
    { className, value, ...props }: PropsWithChildren<{ value: any } & BaseProps>,
    ref: Ref<OrNull<HTMLDivElement>>
  ) => {
    const textLines = value.document.nodes.map((node) => node.text).toArray().join("\n");
    return (
      <div
        ref={ref}
        {...props}
        className={cx(
          className,
          css`
            margin: 30px -20px 0;
          `
        )}
      >
        <div
          className={css`
            font-size: 14px;
            padding: 5px 20px;
            color: #404040;
            border-top: 2px solid #eeeeee;
            background: #f8f8f8;
          `}
        >
          Slate's value as text
        </div>
        <div
          className={css`
            color: #404040;
            font: 12px monospace;
            white-space: pre-wrap;
            padding: 10px 20px;
            div {
              margin: 0 0 0.5em;
            }
          `}
        >
          {textLines}
        </div>
      </div>
    );
  }
);

// Icon component for displaying material icons
export const Icon = React.forwardRef(
  ({ className, ...props }: PropsWithChildren<BaseProps>, ref: Ref<OrNull<HTMLSpanElement>>) => (
    <span
      {...props}
      ref={ref}
      className={cx(
        "material-icons",
        className,
        css`
          font-size: 18px;
          vertical-align: text-bottom;
        `
      )}
    />
  )
);

// Instruction component for displaying instructions
export const Instruction = React.forwardRef(
  ({ className, ...props }: PropsWithChildren<BaseProps>, ref: Ref<OrNull<HTMLDivElement>>) => (
    <div
      {...props}
      ref={ref}
      className={cx(
        className,
        css`
          white-space: pre-wrap;
          margin: 0 -20px 10px;
          padding: 10px 20px;
          font-size: 14px;
          background: #f8f8e8;
        `
      )}
    />
  )
);

// Menu component using the styled ToggleButtonGroup
export const Menu = React.forwardRef(
  ({ className, ...props }: PropsWithChildren<BaseProps>, ref: Ref<OrNull<HTMLDivElement>>) => (
    <StyledToggleButtonGroup
      size="small"
      {...props}
      ref={ref}
      className={cx(
        className,
        css`
          & > * {
            display: inline-block;
          }
        `
      )}
    />
  )
);

// Portal component for rendering children into a portal
export const Portal = ({ children }: { children: React.ReactNode }) => {
  return typeof document === "object" ? ReactDOM.createPortal(children, document.body) : null;
};

// Toolbar component using the Menu component
export const Toolbar = React.forwardRef(
  ({ className, ...props }: PropsWithChildren<BaseProps>, ref: Ref<OrNull<HTMLDivElement>>) => (
    <Menu
      {...props}
      ref={ref}
      className={cx(
        className,
        css`
          position: relative;
          margin-bottom: 10px;
        `
      )}
    />
  )
);


```
```typescript:src/components/editors/EditorsPanelSide.tsx
import React from "react";
import Box from "@mui/material/Box";
import ChildText from "./RightSideEditor";
import Card from "@mui/material/Card";
import RightSideEditor from "./RightSideEditor";

const EditorsPanelSide = ({ editor, editor2, editor3, editor4 }) => {
  return (
    <Card elevation={1} sx={{ width: "100%" }}>
      <RightSideEditor
        mainEditor={editor}
        correspondedEditor={editor2}
        storageName='content22'
      />
      <RightSideEditor
        mainEditor={editor}
        correspondedEditor={editor3}
        storageName='content33'
      />
      <RightSideEditor
        mainEditor={editor}
        correspondedEditor={editor4}
        storageName='content44'
      />
    </Card>
  );
};

export default EditorsPanelSide;


```
```typescript:src/components/editors/button-post-data.tsx
import React from "react";
import ToggleButtonList from "../subcomponents/toggle-button-list";
import useSaveCompletions from "../../hooks/useSaveComplitions";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";

// Asynchronous function to handle data saving
const saveData = async (editor: any) => {
  try {
    await useSaveCompletions(editor);
    console.log("Data saved successfully");
  } catch (error) {
    console.error("Error saving data:", error);
  }
};

// Main component for the save button
const SaveButton: React.FC<{ editor: any }> = ({ editor }) => {
  const [isLoading, setIsLoading] = React.useState(false);

  // Event handler for button click
  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("Saving data...");
    await saveData(editor);
    setIsLoading(false);
  };

  return (
    <ToggleButtonList
      title="Save"
      onClick={handleClick}
      icon={<BookmarkBorderRoundedIcon fontSize="inherit" />}
      disabled={isLoading}
    />
  );
};

export default SaveButton;

/**
 * Usage Example:
 * <SaveButton editor={editorInstance} />
 */



```
```typescript:src/components/editors/SlateInput.tsx
import Paper from "@mui/material/Paper";
import React from "react";
import { Node as SlateNode } from "slate";
// Import the Slate components and React plugin.
import { Slate, Editable } from "editable-slate-react";

const SlateInput = (props) => {
  const editor5 = props.editor;
  // Add the initial value when setting up our state.
  const [value11, setValue11] = props.values;

  const handleChange = (value: SlateNode[]) => {
    setValue11(value);
  };

  const reference = React.useRef();
  // const handleF = () => {
  //   reference.current.focus = true;
  //   reference.current.style.border = "2px solid #ced4da";
  // };
  return (
    <Paper
      elevation={2}
      sx={{
        border: (theme) => `2px solid ${theme.palette.divider}`,
      }}
    >
      <Slate editor={editor5} value={value11} onChange={handleChange}>
        <Editable
          style={{ display: "inline" }}
          placeholder={props.placeholder}
          spellCheck
          autoFocus
        />
      </Slate>
    </Paper>
  );
};

export default SlateInput;


```
```typescript:src/components/editors/formats.tsx
import type { FC, ReactNode } from "react";
import React from "react";
import { Box, IconButton, styled, Theme, Tooltip } from "@mui/material";
import type { SxProps } from "@mui/system";
import { useSelector } from "react-redux";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import { useSlate } from "editable-slate-react";
import ToggleButton from "@mui/material/ToggleButton";
import { Editor, Transforms, Element as SlateElement, Descendant } from "slate";
const LIST_TYPES = ["numbered-list", "bulleted-list"];

export type SeverityPillColor =
  | "primary"
  | "secondary"
  | "error"
  | "info"
  | "warning"
  | "success";

interface SeverityPillProps {
  children?: ReactNode;
  color?: SeverityPillColor;
  style?: {};
  sx?: SxProps<Theme>;
}

interface SeverityPillRootProps {
  ownerState: {
    color: SeverityPillColor;
  };
}

const TabLabel = styled("kbd")<SeverityPillRootProps>(
  ({ theme, ownerState }) => {
    const backgroundColor = theme.palette[ownerState.color].main;
    const color = theme.palette[ownerState.color].contrastText;

    return {
      alignItems: "center",
      backgroundColor,
      borderRadius: 6,
      color,
      display: "inline-flex",
      flexGrow: 0,
      flexShrink: 0,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(10),
      fontWeight: 600,
      justifyContent: "center",
      minWidth: 10,
      paddingLeft: theme.spacing(0.5),
      paddingRight: theme.spacing(0.5),
      textTransform: "uppercase",
      whiteSpace: "nowrap",
    };
  }
);

/**
 * KBD is a component that displays a severity pill.
 */
export const KBD: FC<SeverityPillProps> = (props) => {
  const { color = "primary", children, ...other } = props;

  const ownerState = { color };

  return (
    <TabLabel ownerState={ownerState} {...other}>
      {children}
    </TabLabel>
  );
};

interface TabButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  hasTab?: boolean;
}

/**
 *
 * TabButton is a component that displays a TAB button on the top right side of the editor.
 *
 */
export const TabButton = ({ onClick, hasTab }: TabButtonProps) => {
  const { progressValue } = useSelector((state) => state.progressValue);
  const loading = progressValue > 0 && progressValue < 100;
  const tabIcon = hasTab ? "  TAB" : "";
  return (
    <Box
      sx={{
        m: 0.5,
      }}
    >
      <Tooltip placement='top' title='Autocomplete (TAB)'>
        <IconButton
          size='small'
          sx={{
            border: 0,
            padding: "2px",
            borderRadius: 1,
          }}
          disabled={loading}
          onClick={onClick}
        >
          <KBD
            sx={{
              alignSelf: "flex-end",
              mr: 1,
              ml: 1,
              mt: 1,
            }}
            color='success'
          >
            <AutoFixHighRoundedIcon sx={{ fontSize: "1.1rem" }} />
            {loading ? "Loading..." : tabIcon}
          </KBD>
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(editor, format);
  const isList = LIST_TYPES.includes(format);

  Transforms.unwrapNodes(editor, {
    match: (n) =>
      LIST_TYPES.includes(
        !Editor.isEditor(n) && SlateElement.isElement(n) && n.type
      ),
    split: true,
  });
  const newProperties: Partial<SlateElement> = {
    type: isActive ? "paragraph" : isList ? "list-item" : format,
  };
  Transforms.setNodes(editor, newProperties);

  if (!isActive && isList) {
    const block = { type: format, children: [] };
    Transforms.wrapNodes(editor, block);
  }
};

export const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

export const TransformsSelect = (editor) => {
  Transforms.select(editor, {
    anchor: Editor.start(editor, []),
    focus: Editor.end(editor, []),
  });
};

export const isBlockActive = (editor, format) => {
  const { selection } = editor;
  if (!selection) return false;

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: (n) =>
        !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === format,
    })
  );

  return !!match;
};

export const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

export const Blockquote = styled("blockquote")(({ theme }) => ({
  borderLeft: `3px solid ${theme.palette.text.primary}`,
  fontStyle: "italic",
  paddingLeft: "0.8em",
}));

export const Element = ({ attributes, children, element }) => {
  switch (element.type) {
    case "block-quote":
      return <Blockquote {...attributes}>{children}</Blockquote>;
    case "bulleted-list":
      return <ul {...attributes}>{children}</ul>;
    case "heading-one":
      return <h1 {...attributes}>{children}</h1>;
    case "heading-two":
      return <h2 {...attributes}>{children}</h2>;
    case "list-item":
      return <li {...attributes}>{children}</li>;
    case "strike-through":
      return <del {...attributes}>{children}</del>;
    case "numbered-list":
      return <ol {...attributes}>{children}</ol>;
    default:
      return (
        <p
          style={{ lineHeight: "1.4rem", backgroundColor: "f4f9f9" }}
          {...attributes}
        >
          {children}
        </p>
      );
  }
};

export const BlockButton = ({ format, children }) => {
  const editor = useSlate();
  return (
    <Box
      sx={{
        m: 0.5,
      }}
    >
      <ToggleButton
        value={format}
        size='small'
        sx={{
          border: 0,
          padding: "4px",
        }}
        selected={isBlockActive(editor, format)}
        onMouseDown={(event) => {
          event.preventDefault();
          toggleBlock(editor, format);
        }}
      >
        {children}
      </ToggleButton>
    </Box>
  );
};

export const MarkButton = ({ format, children }) => {
  const editor = useSlate();
  return (
    <Box
      sx={{
        m: 0.5,
      }}
    >
      <ToggleButton
        size='small'
        sx={{
          border: 0,
          padding: "4px",
        }}
        value={format}
        selected={isMarkActive(editor, format)}
        onMouseDown={(event) => {
          event.preventDefault();
          toggleMark(editor, format);
        }}
      >
        {children}
      </ToggleButton>
    </Box>
  );
};


```
```typescript:src/components/editors/RightSideEditor.tsx
import React, { useState, useRef } from "react";
import { Editable, Slate, useSlate, useSelected, useFocused } from "editable-slate-react";
import { Editor, Transforms, Node, Descendant, Element as SlateElement } from "slate";
import { styled } from "@mui/material/styles";
import CardContent from "@mui/material/CardContent";
import isHotkey from "is-hotkey";
import FooterEditorBar from "./FooterEditorBar";
import { selectedText, serialize } from "hooks/currentSelectEditor";
import { useSelector } from "react-redux";
import { setCurrentWordRange } from "slices/editorParams";
import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import { useDispatch } from "store";

// Keyboard shortcuts mapping
const HOTKEYS = {
  "mod+b": "bold",
  "mod+i": "italic",
  "mod+u": "underline",
  "mod+`": "code",
  "mod+a": "selectAll",
  "alt+l": "lightText",
  "alt+d": "strikethrough",
};

const LIST_TYPES = ["numbered-list", "bulleted-list"];
const TEXT_ALIGN_TYPES = ["left", "center", "right", "justify"];

// Element type with custom properties
type CustomElement = SlateElement & {
  type?: string;
  align?: string;
  children: Descendant[];
};

const RightSideEditor = (props) => {
  const editor = props.mainEditor;
  const editor2 = props.correspondedEditor;
  const dispatch = useDispatch();
  const renderElement = React.useCallback((props) => <Element {...props} />, []);
  const renderLeaf = React.useCallback((props) => <Leaf {...props} />, []);
  const { currentWordRange } = useSelector((state: any) => state.editorParams);
  
  // Get saved content or empty paragraph
  const getDefaultValue = () => 
    JSON.parse(typeof window !== "undefined" && window.localStorage.getItem(props.storageName)) || 
    [{ type: "paragraph", children: [{ text: "" }] }];

  const [value, setValue] = useState<Descendant[]>(getDefaultValue);

  // Transfer text to main editor
  const transferToMain = () => {
    const selectedContent = (editor2.selection && selectedText(editor2)) || serialize(editor2);
    
    if (editor.selection) {
      Transforms.insertText(editor, selectedContent, { at: editor.selection });
    } else {
      const insertPos = currentWordRange || Editor.end(editor, []);
      Transforms.insertText(editor, selectedContent, { at: insertPos });
      Transforms.select(editor, insertPos);
      dispatch(setCurrentWordRange(false));
    }
  };

  // Save content on change
  const handleChanges = (newValue) => {
    setValue(newValue);
    localStorage.setItem(props.storageName, JSON.stringify(newValue));
  };

  return (
    <CardContent>
      <Box
        sx={{
          boxSizing: "border-box",
          fontSize: "1em",
          lineHeight: "1.5rem",
          boxShadow: theme => `0 0 0 2px ${theme.palette.divider}`,
          borderRadius: theme => `calc(1px * ${theme.shape.borderRadius})`,
          background: theme => theme.palette.background.default,
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          pb: "0.15rem",
          pt: 1,
          px: 1,
        }}
      >
        <Box>
          <Slate editor={editor2} value={value} onChange={handleChanges}>
            <Editable
              renderElement={renderElement}
              renderLeaf={renderLeaf}
              spellCheck={true}
              style={{ overflow: "auto" }}
              onKeyDown={event => {
                for (const hotkey in HOTKEYS) {
                  if (isHotkey(hotkey, event as any)) {
                    event.preventDefault();
                    const mark = HOTKEYS[hotkey];
                    
                    if (hotkey === "mod+a") {
                      Transforms.select(editor2, {
                        anchor: Editor.start(editor2, []),
                        focus: Editor.end(editor2, []),
                      });
                    } else {
                      toggleMark(editor2, mark);
                    }
                  }
                }
              }}
            />
          </Slate>
        </Box>
        <FooterEditorBar editor={editor2} handleTransfer={transferToMain} />
      </Box>
    </CardContent>
  );
};

// Toggle block formatting
const toggleBlock = (editor, format) => {
  const blockType = TEXT_ALIGN_TYPES.includes(format) ? "align" : "type";
  const isActive = isBlockActive(editor, format, blockType);
  const isList = LIST_TYPES.includes(format);

  // Unwrap list items when changing format
  Transforms.unwrapNodes(editor, {
    match: n => 
      !Editor.isEditor(n) && 
      SlateElement.isElement(n) && 
      LIST_TYPES.includes(n.type) && 
      !TEXT_ALIGN_TYPES.includes(format),
    split: true,
  });

  // Set node properties
  const newProps: Partial<CustomElement> = TEXT_ALIGN_TYPES.includes(format)
    ? { align: isActive ? undefined : format }
    : { type: isActive ? "paragraph" : isList ? "list-item" : format };

  Transforms.setNodes<CustomElement>(editor, newProps);

  // Wrap in list if needed
  if (!isActive && isList) {
    Transforms.wrapNodes(editor, { type: format, children: [] });
  }
};

// Toggle text formatting
const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format);
  isActive ? Editor.removeMark(editor, format) : Editor.addMark(editor, format, true);
};

// Check if block format is active
const isBlockActive = (editor, format, blockType = "type") => {
  const { selection } = editor;
  if (!selection) return false;

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: n => 
        !Editor.isEditor(n) && 
        SlateElement.isElement(n) && 
        n[blockType] === format,
    })
  );

  return !!match;
};

// Check if text format is active
const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

// Render element by type
const Element = ({ attributes, children, element }) => {
  const style = { textAlign: element.align };
  
  switch (element.type) {
    case "block-quote": return <blockquote style={style} {...attributes}>{children}</blockquote>;
    case "bulleted-list": return <ul style={style} {...attributes}>{children}</ul>;
    case "heading-one": return <h1 style={style} {...attributes}>{children}</h1>;
    case "heading-two": return <h2 style={style} {...attributes}>{children}</h2>;
    case "heading-three": return <h3 style={style} {...attributes}>{children}</h3>;
    case "list-item": return <li style={style} {...attributes}>{children}</li>;
    case "numbered-list": return <ol style={style} {...attributes}>{children}</ol>;
    default: return <p style={style} {...attributes}>{children}</p>;
  }
};

// Styled text components
const Del = styled("del")(({ theme }) => ({
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.background.default,
}));

const HighlightSpan = styled("span")(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

// Render text with formatting
const Leaf = ({ attributes, children, leaf }) => {
  const selected = useSelected();
  const focused = useFocused();

  if (leaf.bold) children = <strong>{children}</strong>;
  if (leaf.code) children = <code>{children}</code>;
  if (leaf.italic) children = <em>{children}</em>;
  if (leaf.underline) children = <u>{children}</u>;
  if (leaf.highlight) children = <mark>{children}</mark>;
  if (leaf.strikethrough) children = <Del>{children}</Del>;
  if (leaf.superscript) children = <sup>{children}</sup>;
  if (leaf.lightText) children = <HighlightSpan>{children}</HighlightSpan>;

  if (selected && focused) {
    children = <span style={{ backgroundColor: 'yellow' }}>{children}</span>;
  }

  return <span {...attributes}>{children}</span>;
};

// Format toggling buttons
export const BlockButton = ({ format, children }) => {
  const editor = useSlate();
  return (
    <Box sx={{ m: 0.5 }}>
      <ToggleButton
        value={format}
        size='small'
        sx={{ border: 0, padding: "4px" }}
        selected={isBlockActive(
          editor,
          format,
          TEXT_ALIGN_TYPES.includes(format) ? "align" : "type"
        )}
        onMouseDown={e => {
          e.preventDefault();
          toggleBlock(editor, format);
        }}
      >
        {children}
      </ToggleButton>
    </Box>
  );
};

export const MarkButton = ({ format, children }) => {
  const editor = useSlate();
  return (
    <Box sx={{ m: 0.5 }}>
      <ToggleButton
        size='small'
        sx={{ border: 0, padding: "4px" }}
        value={format}
        selected={isMarkActive(editor, format)}
        onMouseDown={e => {
          e.preventDefault();
          toggleMark(editor, format);
        }}
      >
        {children}
      </ToggleButton>
    </Box>
  );
};

export default RightSideEditor;

```
```typescript:src/components/editors/input-settings.tsx
import * as React from "react";
import { debounce } from "lodash";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { useSelector, useDispatch } from "react-redux";
import {
  updateTemperature,
  updateFrequencyPenalty,
  updatePresencePenalty,
  updateMaxTokens,
  updateEngineId,
} from "../../slices/fieldsValue";

export default function InputSettings({
  temperature,
  tokenL,
  frequencyP,
  presenceP,
  engineId,
}) {
  const dispatch = useDispatch();
  return (
    <Grid
      container
      spacing={2}
      direction='row'
      justifyContent='center'
      alignItems='center'
    >
      {temperature && (
        <Grid
          item
          sx={{
            mb: 2,
          }}
          xs={6}
        >
          <Typography variant='caption' color='initial'>
            Creactivity Temperature
          </Typography>
          <Slider
            size='small'
            defaultValue={0}
            aria-label='Small'
            min={0.0}
            step={0.01}
            max={0.99}
            onChange={debounce((e) => {
              e.preventDefault();
              dispatch(updateTemperature(e.target.value));
            }, 300)}
            valueLabelDisplay='auto'
          />
        </Grid>
      )}
      {tokenL && (
        <Grid
          item
          sx={{
            mb: 2,
          }}
          xs={6}
        >
          <Typography variant='caption' color='initial'>
            Length Token
          </Typography>
          <Slider
            size='small'
            defaultValue={0}
            aria-label='Small'
            min={10}
            step={1}
            max={4000}
            onChange={debounce((e) => {
              e.preventDefault();
              dispatch(updateMaxTokens(e.target.value));
            }, 300)}
            valueLabelDisplay='auto'
          />
        </Grid>
      )}
      {frequencyP && (
        <Grid
          item
          sx={{
            mb: 2,
          }}
          xs={6}
        >
          <Typography variant='caption' color='initial'>
            Words Diversity
          </Typography>

          <Slider
            size='small'
            defaultValue={0}
            aria-label='Small'
            min={0.0}
            step={0.01}
            max={1.99}
            onChange={debounce((e) => {
              e.preventDefault();
              dispatch(updateFrequencyPenalty(e.target.value));
            }, 300)}
            valueLabelDisplay='auto'
          />
        </Grid>
      )}
      {presenceP && (
        <Grid
          item
          sx={{
            mb: 2,
          }}
          xs={6}
        >
          <Typography variant='caption' color='initial'>
            Subject Distraction
          </Typography>
          <Slider
            size='small'
            defaultValue={0}
            aria-label='Small'
            min={0.0}
            step={0.01}
            max={1.99}
            onChange={debounce((e) => {
              e.preventDefault();
              dispatch(updatePresencePenalty(e.target.value));
            }, 300)}
            valueLabelDisplay='auto'
          />
        </Grid>
      )}
      {engineId && (
        <Grid
          item
          sx={{
            mb: 2,
          }}
          xs={6}
        >
          <Typography variant='caption' color='initial'>
            Engine Id:
          </Typography>
          <Slider
            size='small'
            defaultValue={0}
            aria-label='Small'
            min={0}
            step={1}
            max={100}
            onChange={debounce((e) => {
              e.preventDefault();
              dispatch(updateEngineId(e.target.value));
            }, 300)}
            valueLabelDisplay='auto'
          />
        </Grid>
      )}
    </Grid>
  );
}


```
```typescript:src/components/editors/FormRedux.tsx
import React from "react";
import { debounce } from "lodash";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import MultipleOptions from "components/subcomponents/MultipleOptions";
import { useDispatch } from "react-redux";
import ToggleButtonGroupOptions from "components/subcomponents/ToggleButtonGroupOptions";
import {
  updateBusinessNameValue,
  updatePurposeValue,
  updateFeatureValue,
  updateKeywordValue,
} from "slices/fieldsValue";
// import TextAreaRedux from "./textAreaRedux";

const FormRedux = ({ labelsLists, extraFields }) => {
  // order of this dispatchers are important and we had defined them before in the mardown file
  const dispatchers = [
    {
      id: 0,
      dispatcher: updateBusinessNameValue,
    },
    {
      id: 1,
      dispatcher: updatePurposeValue,
    },
    {
      id: 4,
      dispatcher: updateKeywordValue,
    },
    {
      id: 5,
      dispatcher: updateFeatureValue,
    },
  ];

  const dispatch = useDispatch();
  const elementList = labelsLists;

  //function that takes two array of fieldLists and extraFields and return the merging object when 'name' is share key
  //function that get an object and return an array of objects values
  const getValues = (obj) => Object.values(obj);
  const fields: any =
    extraFields && getValues(extraFields).filter((item) => item !== null);
  const dispatchersLists: any = dispatchers.map((x) => getValues(x)[1]);

  /* [ updateBusinessNameValue, updatePurposeValue] */
  console.log(fields, "fields");

  const filteredFields =
    fields &&
    fields.length > 0 &&
    fields.filter(
      (field) =>
        field?.id &&
        dispatchers.find((dispatcher) => dispatcher.id === field.id)
    );

  console.log(filteredFields);
  /**
   * This making sure that when the component rendered for the first time,
   * and redux state is empty, we fill the redux state with the values from browser local storage
   */
  React.useEffect(() => {
    filteredFields &&
      filteredFields.length > 0 &&
      filteredFields.map((field, i) => {
        return dispatch(
          dispatchers[i].dispatcher(
            JSON.parse(
              typeof window !== "undefined" &&
                window.localStorage.getItem(field.name)
            ) || ""
          )
        );
      });
  }, []);

  return (
    <>
      <Grid
        container
        spacing={2}
        direction='row'
        justifyContent='flex-start'
        alignItems='center'
      >
        {fields &&
          fields.length > 0 &&
          fields.map((field, index) => {
            const feildId = field.id;
            return (
              <Grid
                item
                key={index}
                xs={12}
                sm={6}
                sx={{
                  "& > *": {
                    width: "99%",
                  },
                }}
              >
                {field.type === "text" && (
                  <TextField
                    onChange={debounce((e) => {
                      e.preventDefault();
                      const content = JSON.stringify(e.target.value);
                      localStorage.setItem(`${field["name"]}`, content);
                      const dispatcher = dispatchers.find(
                        (dispatcher) => dispatcher.id === feildId
                      );
                      dispatch(dispatcher.dispatcher(e.target.value));
                    }, 300)}
                    size='small'
                    variant='outlined'
                    //default values must be in the browser local storage.
                    defaultValue={
                      JSON.parse(
                        typeof window !== "undefined" &&
                          window.localStorage.getItem(field["name"])
                      ) || ""
                    }
                    label={field["label"]}
                    placeholder={field["placeholder"]}
                  />
                )}
                {field.type === "toggleButtons" && (
                  <ToggleButtonGroupOptions options={field["options"]} />
                )}
                {/* {field.type === "textarea" && <TextAreaRedux />} */}
              </Grid>
            );
          })}
      </Grid>
    </>
  );
};

export default FormRedux;


```
```typescript:src/components/editors/bar-toggle-button.tsx
import React from "react";
import { useSelector } from "react-redux";
import ToggleButtonList from "components/subcomponents/toggle-button-list";

// BarToggleButton Component
export default function BarToggleButton({ format, icon, handleClick }) {
  // Extracting state values
  const selectedTextValue = useSelector((state: any) => state.editorParams.selectedTextValue);
  const progressValue = useSelector((state: any) => state.progressValue);

  // Determine loading state
  const loading = progressValue > 0 && progressValue < 100;

  // Determine selection status
  const selectionStatus = !selectedTextValue || selectedTextValue.length <= 2 || selectedTextValue.length >= 15000;

  // Log state for debugging
  console.log(`Selected Text Length: ${selectedTextValue?.length || 0}, Loading: ${loading}`);

  return (
    <ToggleButtonList
      title={format}
      icon={icon}
      onClick={handleClick}
      disabled={selectionStatus || loading}
    />
  );
}

/*
  Example Usage:
  <BarToggleButton
    format="Bold"
    icon={<BoldIcon />}
    handleClick={() => formatText("bold")}
  />
  
  - `format`: Specifies the formatting type.
  - `icon`: Provides the icon to display.
  - `handleClick`: Function to execute on click.
*/

// Types:
// format: string
// icon: JSX.Element
// handleClick: () => void



```
```typescript:src/components/editors/hotkeys.ts
export const HOTKEYS = {
  "mod+b": "bold",
  "mod+i": "italic",
  "mod+u": "underline",
  "mod+`": "code",
  "mod+s": "subject",
  "mod+a": "selectAll",
  "mod+shift+s": "strikethrough",
  "mod+enter": "enter",
  "mod+g": "suffix",
  tab: "autoComplete",
  "alt+t": "translate",
  "alt+enter": "code-suffix",
  "alt+h": "highlight",
};


```
```typescript:src/components/editors/MainSlateEditor.tsx
import React, { useCallback, useState, useRef } from "react";
import isHotkey from "is-hotkey";
import { Editable, Slate, ReactEditor } from "editable-slate-react";
import { Editor, Transforms, Descendant, Node as SlateNode } from "slate";
import { Text as Textt } from "slate";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { Leaf } from "./Leaf";

import { setCurrentWordRange, updateSelectedText } from "../../slices/editorParams";
import FooterEditorBar from "./FooterEditorBar";
const SITE_KEY = "6LcA4HoaAAAAAMHEQHKWWXyoi1TaCiDgSJoy2qtP";
import FormatBoldRoundedIcon from "@mui/icons-material/FormatBold";
import FormatItalicRoundedIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedRoundedIcon from "@mui/icons-material/FormatUnderlined";
import CodeRoundedIcon from "@mui/icons-material/Code";
import LooksOneRoundedIcon from "@mui/icons-material/LooksOne";
import LooksTwoRoundedIcon from "@mui/icons-material/LooksTwo";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuote";
import FormatListNumberedRoundedIcon from "@mui/icons-material/FormatListNumbered";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulleted";
import { StyledToggleButtonGroup } from "./toggle-button-group";
import UseCompletionSuffix from "hooks/UseCompletionSuffix";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "store";
import { updateProgressValue } from "../../slices/progress";
import { useSnackbar } from "notistack";
import HoveringToolbar from "./HoveringToolbar";
import { HOTKEYS } from "./hotkeys";
import useFetchAllData from "hooks/useFetchAllData";

import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import useFetch2InsertSuffix from "hooks/useFetch2InsertSuffix";
import { TabButton } from "./formats";
import { toggleMark, BlockButton, MarkButton, Element } from "./formats";

const MainSlateEditor = (props) => {
  const dispatch = useDispatch<AppDispatch>();
  const fieldValues = useSelector((state: any) => state.fieldsValue);
  const { highlightedText } = useSelector((state: any) => state.expandReducer);
  const { enqueueSnackbar } = useSnackbar();
  
  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
  
  const decorateSearch = useCallback(
    ([node, path]) => {
      const ranges = [];
      if (highlightedText && Textt.isText(node)) {
        const { text } = node;
        const parts = text.split(highlightedText);
        let offset = 0;
        parts.forEach((part, i) => {
          if (i !== 0) {
            ranges.push({
              anchor: { path, offset: offset - highlightedText.length },
              focus: { path, offset },
              highlight: true,
            });
          }
          offset = offset + part.length + highlightedText.length;
        });
      }
      return ranges;
    },
    [highlightedText]
  );

  const { editor, editor2, editor3, editor4, productType, editorHeight, storageKey: propStorageKey, placeholder } = props;
  const editors = [editor, editor2, editor3, editor4];
  const storageKey = propStorageKey === undefined ? "document" : propStorageKey;

  const defaultValue = (): Descendant[] => {
    return (
      JSON.parse(
        typeof window !== "undefined" && window.localStorage.getItem(storageKey)
      ) || [
        { type: "paragraph", children: [{ text: "" }] },
      ]
    );
  };

  const savedSelection = useRef(editor.selection);
  const divRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  const onFocus = useCallback(() => {
    ReactEditor.focus(editor);
    divRef.current.style.boxShadow = `0 0 0 2px ${theme.palette.divider}`;
  }, [editor, theme]);

  const onBlur = useCallback(() => {
    if (editor.selection) {
      dispatch(setCurrentWordRange(editor.selection));
      const fragmentText =
        SlateNode.fragment(editor, editor.selection)
          .map((x) => SlateNode.string(x))
          .join("\n");
      dispatch(updateSelectedText(fragmentText));
      divRef.current.style.boxShadow = `0 0 0 1px ${theme.palette.action.disabled}`;
    }
  }, [dispatch, editor, theme]);

  const [value, setValue] = useState<Descendant[]>(defaultValue);

  const handleChange = (value: Descendant[]) => {
    setValue(value);
    const content = JSON.stringify(value);
    localStorage.setItem(storageKey, content);

    if (!editor.selection) return;
    dispatch(setCurrentWordRange(editor.selection));
    savedSelection.current = editor.selection;
    const fragment = SlateNode.fragment(editor, editor.selection);
    const fragmentsText = fragment.map((x) => SlateNode.string(x)).join("\n");
    dispatch(updateSelectedText(fragmentsText));
  };

  // Helper to abstract recaptcha execution and progress update
  const recaptchaAction = (
    e: React.MouseEvent | React.KeyboardEvent,
    progress: number,
    actionCallback: (gtoken: string) => void
  ) => {
    e.preventDefault();
    (window as any).grecaptcha.ready(() => {
      (window as any).grecaptcha
        .execute(SITE_KEY, { action: "submit" })
        .then((gtoken: string) => {
          dispatch(updateProgressValue(progress));
          actionCallback(gtoken);
        });
    });
  };

  const handleSuffix = (e) => {
    recaptchaAction(e, 15, (gtoken) => {
      UseCompletionSuffix(dispatch, enqueueSnackbar, editors, gtoken, "46", fieldValues);
    });
  };

  const handleSuffixCode = (e) => {
    recaptchaAction(e, 15, (gtoken) => {
      UseCompletionSuffix(dispatch, enqueueSnackbar, editors, gtoken, "48", fieldValues);
    });
  };

  const handleSuffixCodeItself = (e) => {
    recaptchaAction(e, 15, (gtoken) => {
      useFetch2InsertSuffix(dispatch, enqueueSnackbar, editors, gtoken, "48", fieldValues);
    });
  };

  const handleGenerate = (e) => {
    recaptchaAction(e, 15, (gtoken) => {
      UseCompletionSuffix(dispatch, enqueueSnackbar, editors, gtoken, "44", fieldValues);
    });
  };

  const handleTranslate = (e) => {
    recaptchaAction(e, 15, (gtoken) => {
      UseCompletionSuffix(dispatch, enqueueSnackbar, editors, gtoken, "50", fieldValues);
    });
  };

  const handleGenerateButton = (e) => {
    recaptchaAction(e, 10, (gtoken) => {
      useFetchAllData(dispatch, enqueueSnackbar, editors, gtoken, productType, fieldValues);
    });
  };

  const handleKeyDown = (event) => {
    for (const hotkey in HOTKEYS) {
      if (isHotkey(hotkey, event as any)) {
        event.preventDefault();
        const isSelect = hotkey === "mod+a";
        if (hotkey === "alt+t") handleTranslate(event);
        else if (hotkey === "mod+g") handleSuffix(event);
                // if (hotkey === "alt+enter") handleSuffixCode(event);
        else if (hotkey === "tab") handleSuffixCodeItself(event);
        else if (hotkey === "mod+enter") handleGenerateButton(event);
        if (hotkey === "mod+a") {
          savedSelection.current = editor.selection;
          dispatch(setCurrentWordRange(savedSelection.current));
          Transforms.select(editor, {
            anchor: Editor.start(editor, []),
            focus: Editor.end(editor, []),
          });
        }
        const mark = HOTKEYS[hotkey];
        if (!isSelect) toggleMark(editor, mark);
      }
    }
  };

  const serialize = (ed: Editor) => ed.children.map((x) => SlateNode.string(x)).join("\n");

  const editorCountNewLines = (ed: Editor) =>
    ed.children.map((x) => SlateNode.string(x)).join("\n").split("\n").length;

  return (
    <>
      <Box
        ref={divRef}
        sx={{
          boxSizing: "border-box",
          boxShadow: (theme) => `0 0 0 2px ${theme.palette.divider}`,
          borderRadius: (theme) => `calc(1px * ${theme.shape.borderRadius})`,
          lineHeight: "1.4rem",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          pb: 0.5,
          pt: 1,
          px: 1,
        }}
      >
        <Box sx={{ color: (theme) => theme.palette.text.secondary }}>
          <Slate editor={editor} value={value} onChange={handleChange}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <StyledToggleButtonGroup size="small" aria-label="text formatting">
                <MarkButton format="bold">
                  <FormatBoldRoundedIcon sx={{ fontSize: "1.1rem" }} />
                </MarkButton>
                <MarkButton format="italic">
                  <FormatItalicRoundedIcon sx={{ fontSize: "1.1rem" }} />
                </MarkButton>
                <MarkButton format="underline">
                  <FormatUnderlinedRoundedIcon sx={{ fontSize: "1.1rem" }} />
                </MarkButton>
                <MarkButton format="code">
                  <CodeRoundedIcon sx={{ fontSize: "1.1rem" }} />
                </MarkButton>
                <MarkButton format="highlight">
                  <BorderColorRoundedIcon sx={{ fontSize: "1.1rem" }} />
                </MarkButton>
              </StyledToggleButtonGroup>
              <StyledToggleButtonGroup size="small" exclusive aria-label="text alignment">
                <BlockButton format="heading-one">
                  <LooksOneRoundedIcon sx={{ fontSize: "1.1rem" }} />
                </BlockButton>
                <BlockButton format="heading-two">
                  <LooksTwoRoundedIcon sx={{ fontSize: "1.1rem" }} />
                </BlockButton>
                <BlockButton format="block-quote">
                  <FormatQuoteRoundedIcon sx={{ fontSize: "1.1rem" }} />
                </BlockButton>
                <BlockButton format="numbered-list">
                  <FormatListNumberedRoundedIcon sx={{ fontSize: "1.1rem" }} />
                </BlockButton>
                <BlockButton format="bulleted-list">
                  <FormatListBulletedRoundedIcon sx={{ fontSize: "1.1rem" }} />
                </BlockButton>
              </StyledToggleButtonGroup>
              <StyledToggleButtonGroup>
                <TabButton onClick={handleSuffix} hasTab />
              </StyledToggleButtonGroup>
            </Box>

            <HoveringToolbar editor={editor} editor2={editor2} editor3={editor3} editor4={editor4} />
            <Editable
              renderElement={renderElement}
              renderLeaf={renderLeaf}
              decorate={decorateSearch}
              placeholder={placeholder}
              onFocus={onFocus}
              onBlur={onBlur}
              onKeyDown={handleKeyDown}
              style={{
                overflowY: "scroll",
                height: editorHeight
                  ? `${editorHeight}px`
                  : serialize(editor).length > 600 || editorCountNewLines(editor) > 4
                  ? "500px"
                  : "400px",
              }}
            />
          </Slate>
        </Box>
        <FooterEditorBar voice={true} disabled={true} editor={editor} />
      </Box>
    </>
  );
};

export default MainSlateEditor;

```
```typescript:src/components/editors/LongMenu.tsx
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Play from "components/subcomponents/Play";
import BarToggleButton from "./bar-toggle-button";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import SpellcheckIcon from "@mui/icons-material/Spellcheck";

const ITEM_HEIGHT = 38;

export default function LongMenu({ handleSpellcheck }) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label='more'
        size='small'
        id='long-button'
        aria-controls='long-menu'
        aria-expanded={open ? "true" : undefined}
        aria-haspopup='true'
        onClick={handleClick}
      >
        <MoreVertIcon fontSize='inherit' />
      </IconButton>
      <Menu
        id='long-menu'
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "4ch",
          },
        }}
      >
        <BarToggleButton
          format='Listify'
          icon={<SpellcheckIcon />}
          handleClick={handleSpellcheck}
        />
      </Menu>
    </div>
  );
}


```
```typescript:src/components/editors/SelectionTransformerBar.tsx
import React from "react";
import EditorToolsBoxBar from "./EditorToolsBoxBar";
import { useSelector, useDispatch } from "react-redux";
import { updateProgressValue } from "../../slices/progress";
import { Editor, Transforms } from "slate";
const SITE_KEY = "6LcA4HoaAAAAAMHEQHKWWXyoi1TaCiDgSJoy2qtP";
import { useSnackbar } from "notistack";
import { BaseEditor } from "slate";
import { ReactEditor } from "editable-slate-react";
import { HistoryEditor } from "slate-history";
import useFetchInsert from "hooks/useFetchInsert";
// import UseCompletionSuffix from "hooks/UseCompletionSuffix";

// import { selectedText } from "hooks/currentSelectEditor";

type CustomText = { text: string };
type CustomElement = { type: "paragraph"; children: CustomText[] };

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor & HistoryEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

interface selectionTransformerProps {
  generateButtonName?: string;
  inputLimitation?: number;
  mainPlaceholder?: String;
  headerTitle?: string;
  productType?: string;
  editor: Editor;
  editor2?: Editor;
  editor3?: Editor;
  editor4?: Editor;
}

const SelectionTransformerBar: React.FC<selectionTransformerProps> = ({
  editor,
  editor2,
  editor3,
  editor4,
}: selectionTransformerProps) => {
  //hooks must be outside of the function
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const fieldValues = useSelector((state) => state.fieldsValue);
  const { selectedTextValue } = useSelector((state) => state.editorParams);
  const editors = [editor, editor2, editor3, editor4];

  const handleClarify = (e) => {
    e.preventDefault();
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(SITE_KEY, { action: "submit" })
        .then((gtoken) => {
          dispatch(updateProgressValue(15));
          useFetchInsert(
            dispatch,
            enqueueSnackbar,
            editors,
            gtoken,
            "15",
            fieldValues,
            selectedTextValue
          );
        });
    });
  };

  const HandleSpellcheck = (e) => {
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(SITE_KEY, { action: "submit" })
        .then((gtoken) => {
          dispatch(updateProgressValue(15));
          useFetchInsert(
            dispatch,
            enqueueSnackbar,
            editors,
            gtoken,
            "35",
            fieldValues,
            selectedTextValue
          );
          e.preventDefault();
        });
    });
  };

  const handleAdvancify = (e) => {
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(SITE_KEY, { action: "submit" })
        .then((gtoken) => {
          dispatch(updateProgressValue(15));
          useFetchInsert(
            dispatch,
            enqueueSnackbar,
            editors,
            gtoken,
            "40",
            fieldValues,
            selectedTextValue
          );
          e.preventDefault();
        });
    });
  };

  const handleElegantify = (e) => {
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(SITE_KEY, { action: "submit" })
        .then((gtoken) => {
          dispatch(updateProgressValue(15));
          useFetchInsert(
            dispatch,
            enqueueSnackbar,
            editors,
            gtoken,
            "47",
            fieldValues,
            selectedTextValue
          );
          e.preventDefault();
        });
    });
  };

  const handleSimplify = (e) => {
    e.preventDefault();
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(SITE_KEY, { action: "submit" })
        .then((gtoken) => {
          dispatch(updateProgressValue(15));
          useFetchInsert(
            dispatch,
            enqueueSnackbar,
            editors,
            gtoken,
            "2",
            fieldValues,
            selectedTextValue
          );
        });
    });
  };

  const handleKeyPoints = (e) => {
    e.preventDefault();
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(SITE_KEY, { action: "submit" })
        .then((gtoken) => {
          dispatch(updateProgressValue(15));
          useFetchInsert(
            dispatch,
            enqueueSnackbar,
            editors,
            gtoken,
            "0",
            fieldValues,
            selectedTextValue
          );
        });
    });
  };

  const handleRephrase = (e) => {
    e.preventDefault();
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(SITE_KEY, { action: "submit" })
        .then((gtoken) => {
          dispatch(updateProgressValue(15));
          useFetchInsert(
            dispatch,
            enqueueSnackbar,
            editors,
            gtoken,
            "17",
            fieldValues,
            selectedTextValue
          );
        });
    });
  };

  const handleQuestions = (e) => {
    e.preventDefault();
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(SITE_KEY, { action: "submit" })
        .then((gtoken) => {
          dispatch(updateProgressValue(15));
          useFetchInsert(
            dispatch,
            enqueueSnackbar,
            editors,
            gtoken,
            "57",
            fieldValues,
            selectedTextValue
          );
        });
    });
  };

  return (
    <>
      <EditorToolsBoxBar
        handleSpellcheck={HandleSpellcheck}
        handleAdvancify={handleAdvancify}
        handleSimplify={handleSimplify}
        handleRephrase={handleRephrase}
        handleKeyPoints={handleKeyPoints}
        handleElegantify={handleElegantify}
        handleQuestions={handleQuestions}
      />
    </>
  );
};

export default SelectionTransformerBar;


```
```javascript:src/components/WidgetPreviewer.js
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardHeader,
  Divider,
  IconButton,
  ThemeProvider,
  StyledEngineProvider,
  adaptV4Theme,
} from '@mui/material';
import { THEMES } from '../constants';
import useSettings from '../hooks/useSettings';
import MoonIcon from '../icons/Moon';
import SunIcon from '../icons/Sun';
import { createTheme } from '../theme';

const WidgetPreviewer = (props) => {
  const { element, name, ...other } = props;
  const { settings } = useSettings();
  const [selectedTheme, setSelectedTheme] = useState(settings.theme);

  useEffect(() => {
    setSelectedTheme(settings.theme);
  }, [settings.theme]);

  const handleSwitch = () => setSelectedTheme((prevSelectedTheme) => {
    if (prevSelectedTheme === THEMES.LIGHT) {
      if (settings.theme === THEMES.LIGHT) {
        return THEMES.DARK;
      }

      return settings.theme;
    }

    return THEMES.LIGHT;
  });

  const theme = createTheme(adaptV4Theme({
    ...settings,
    theme: selectedTheme
  }));

  return (
    <Card
      variant="outlined"
      sx={{ mb: 8 }}
      {...other}
    >
      <CardHeader
        action={(
          <IconButton onClick={handleSwitch} size="large">
            {selectedTheme === 'LIGHT'
              ? <MoonIcon fontSize="small" />
              : <SunIcon fontSize="small" />}
          </IconButton>
        )}
        title={name}
      />
      <Divider />
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          {element}
        </ThemeProvider>
      </StyledEngineProvider>
    </Card>
  );
};

WidgetPreviewer.propTypes = {
  element: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired
};

export default WidgetPreviewer;


```
```typescript:src/components/account/account-settings-billings-plans.tsx
import React, { memo, Fragment, useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Divider, FormControlLabel, FormHelperText, Radio, RadioGroup, ToggleButton, ToggleButtonGroup, Typography, Skeleton, Alert } from "@mui/material";

// Define the structure of a plan option
interface PlanOption {
  id: string;
  description: string;
  label: string;
  priceOptions: PriceOption[];
  value: string;
  status: boolean;
}

// Define the structure of a price option
interface PriceOption {
  chargeType: string;
  amount: string | number;
}

const AccountSettingsBillingsPlans: React.FC = () => {
  const [chargeType, setChargeType] = useState<string>("monthly");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [planOptions, setPlanOptions] = useState<PlanOption[]>([]);

  useEffect(() => {
    const fetchPlanOptions = async () => {
      try {
        // const response = await fetch('https://api.example.com/plan-options');
        const response =  [
          { id: "1", description: "Free 10,000 word per month", label: "Free", priceOptions: [{ chargeType: "monthly", amount: 0 }, { chargeType: "yearly", amount: 0 }], value: "free", status: true },
          { id: "2", description: "1M word/month", label: "Premium beta", priceOptions: [{ chargeType: "monthly", amount: "9.8 USD" }, { chargeType: "yearly", amount: "98 USD" }], value: "Premium Beta", status: true },
        ]
        // if (!response.ok) throw new Error('Failed to fetch plan options');
        // const data = await response.json();
        setPlanOptions(response);
      } catch (err) {
        setError('Failed to load plan options. Please try again later.');
        console.error('Error fetching plan options:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlanOptions();
  }, []);

  const formik = useFormik({
    initialValues: { plan: "free", submit: null },
    validationSchema: Yup.object().shape({
      plan: Yup.mixed().oneOf(planOptions.map(option => option.value)),
    }),
    onSubmit: async (values, helpers) => {
      setLoading(true);
      try {
        helpers.setStatus({ success: true });
        helpers.setSubmitting(false);
      } catch (err) {
        console.error("Network error:", err);
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      } finally {
        setLoading(false);
      }
    },
  });

  const handleChargeTypeChange = (event: React.MouseEvent<HTMLElement>, newChargeType: string | null) => {
    if (newChargeType) setChargeType(newChargeType);
  };

  if (loading) return <Skeleton variant="rectangular" width={300} height={200} />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <Box sx={{ alignItems: "center", display: "flex", flexDirection: "column" }}>
      <Box sx={{ alignItems: "center", display: "flex", px: 3, py: 2 }}>
        <Typography color="textPrimary" sx={{ mr: 3 }} variant="subtitle2">
          Billing
        </Typography>
        <ToggleButtonGroup exclusive onChange={handleChargeTypeChange} size="small" value={chargeType}>
          <ToggleButton value="monthly">Monthly</ToggleButton>
          <ToggleButton value="yearly">Yearly</ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Divider />
      <RadioGroup name="plan" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.plan}>
        {planOptions.map(option => (
          <Fragment key={option.id}>
            <FormControlLabel
              control={<Radio {...(option.status ? {} : { disabled: true })} color="primary" />}
              label={
                <Box sx={{ alignItems: "center", display: "flex", width: "100%" }}>
                  <div>
                    <Typography color="textPrimary" variant="body1">
                      {option.label}
                    </Typography>
                    <Typography color="textSecondary" variant="caption">
                      {option.description}
                    </Typography>
                  </div>
                  <Box sx={{ flexGrow: 1 }} />
                  <Typography color="textPrimary" variant="h5">
                    {option.priceOptions.find(priceOption => priceOption.chargeType === chargeType)?.amount}
                  </Typography>
                </Box>
              }
              sx={{ m: 0, px: 3, py: 1.5 }}
              value={option.value}
            />
            <Divider />
          </Fragment>
        ))}
      </RadioGroup>
      {formik.touched.plan && formik.errors.plan && <FormHelperText error>{formik.errors.plan as string}</FormHelperText>}
      {formik.errors.submit && <FormHelperText error sx={{ mt: 2 }}>{formik.errors.submit as string}</FormHelperText>}
    </Box>
  );
};

export default AccountSettingsBillingsPlans;


```
```typescript:src/components/account/UserCardDetailsList.tsx
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import CheckoutButton from "./account-settings-checkout-button";

interface UserCardDetailsListProps {
  title: string;
  emailLabel: string;
  email: string;
  name1: string;
  value1: string;
  name2: string;
  value2: string;
  userType: React.ReactNode;
  userTypeLabel: string;
  upgradeLabel?: string;
}

const UserCardDetailsList: React.FC<UserCardDetailsListProps> = (props) => {
  const {
    title,
    emailLabel,
    email,
    name1,
    value1,
    name2,
    value2,
    userType,
    userTypeLabel,
    upgradeLabel,
  } = props;

  return (
    <Card>
      <CardHeader title={title} />
      <Divider />
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>
              <Typography color="textPrimary" variant="subtitle2">
                {emailLabel}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="body2">
                {email}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography component="span" color="textPrimary" variant="subtitle2">
                {name1}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography component="span" color="textSecondary" variant="body2">
                {value1}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography component="span" color="textPrimary" variant="subtitle2">
                {name2}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography component="span" color="textSecondary" variant="body2">
                {value2}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography component="span" color="textPrimary" variant="subtitle2">
                {userTypeLabel}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography component="span" color="textSecondary" variant="body2">
                {userType}
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      {upgradeLabel && (
        <Box
          sx={{
            alignItems: "flex-start",
            display: "flex",
            flexDirection: "column",
            p: 2,
          }}
        >
          <CheckoutButton buttonTextLabel={upgradeLabel} />
        </Box>
      )}
    </Card>
  );
};

export default UserCardDetailsList;


```
```typescript:src/components/account/HistoryTab.tsx
import React, { useEffect, useState, memo, FC } from "react";
import Box from "@mui/material/Box";
import { Tab } from "@mui/material";

import Tabs from '@mui/material/Tabs';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface HistoryTabProps {
  postContents: string;
  input: string;
}

export default function HistoryTab({postContents, input}: HistoryTabProps) {

// Function to extract text values
const extractText = (data) => {
  return Object.values(data).flatMap(entry => entry['S'] ? entry['S'] : []);
};

  const parsedResponse = JSON.parse(postContents);

  const combinedArray = extractText(parsedResponse);
  console.log(combinedArray);

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="User Input" {...a11yProps(0)} />
          <Tab label="Generated Variation 1" {...a11yProps(1)} />
          <Tab label="Generated Variation 2" {...a11yProps(2)} />
          <Tab label="Generated Variation 3" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {input}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {combinedArray[0]}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        {combinedArray[1]}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        {combinedArray[2]}
      </CustomTabPanel>
    </Box>
  );
}


```
```typescript:src/components/account/account-settings-checkout-button.tsx
import React from "react";
import Button from "@mui/material/Button";
import UpgradeIcon from "@mui/icons-material/Upgrade";

interface CheckoutButtonProps {
  buttonTextLabel: string;
}

const CheckoutButton = ({ buttonTextLabel }: CheckoutButtonProps) => {
  return (
    <Button
      color='primary'
      startIcon={<UpgradeIcon fontSize='small' />}
      variant='text'
      href={"https://buy.stripe.com/cN27sP08H1Sn1Nu9AC"}
    >
      {buttonTextLabel}
    </Button>
  );
};

export default CheckoutButton;


```
```typescript:src/components/account/account-settings-billings.tsx
import React, { memo, Suspense, lazy } from 'react';
import { Box } from '@mui/material';
import { Button } from '@mui/material';
import { Card } from '@mui/material';
import { CardProps } from '@mui/material';
import { CardHeader } from '@mui/material';
import { CardContent } from '@mui/material';
import { Divider } from '@mui/material';
import { Paper } from '@mui/material';
import { Typography } from '@mui/material';
import { Skeleton } from '@mui/material';

import { SeverityPill } from 'components/severity-pill';
import usePayInfo from '../../hooks/usePayInfo';

// ===================================
// 📐 Types
// ===================================
export interface AccountBillingSettingsProps extends CardProps {}

interface Plan {
  id: string;
  current_period_start: number;
  current_period_end: number;
  canceled_at?: number;
  status: string;
  plan: {
    amount: number;
    currency: string;
    object: string;
  };
}

// ===================================
// 🔢 Constants
// ===================================
const plans = [
  {
    id: 'sub_JaPgh3l1s5x32V',
    current_period_start: 1625073909,
    current_period_end: 1627752309,
    canceled_at: 1625504147,
    status: 'inactive',
    plan: {
      amount: 980,
      currency: 'eur',
      object: 'plan',
    },
  },
] as const;

// ===================================
// 🕒 Utils
// ===================================
const formatDate = (timestamp: number): string =>
  new Date(timestamp * 1000).toDateString();

// ===================================
// 🏷️ Components
// ===================================
const AccountSettingsBillingsPlans = lazy(() => import('./account-settings-billings-plans'));
const Redeemer = lazy(() => import('./Redeemer'));

const AccountBillingSettings = memo(
  ({ sx, ...cardProps }: AccountBillingSettingsProps) => {
    const planData = usePayInfo(plans);

    return (
      <>
        {/* 🎟️ Redeem Voucher Section */}
        <Card {...cardProps} sx={sx}>
          <CardHeader title="Redeem a Discount Voucher" />
          <Divider />
          <CardContent>
            <Suspense
              fallback={<Skeleton variant="rectangular" width="100%" height={118} />}
            >
              <Redeemer />
            </Suspense>
          </CardContent>
        </Card>

        {/* 📋 Manage Plan Section */}
        <Card sx={{ mt: 2 }}>
          <CardHeader title="Manage your plan" />
          <Divider />
          <CardContent>
            {planData.length ? (
              planData.map((item, index) => (
                <Paper key={index} variant="outlined" sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 3 }}>
                    <Typography variant="h4">
                      {item.plan.amount / 100} {item.plan.currency}
                    </Typography>
                    <Typography variant="overline">{item.plan.object}</Typography>
                  </Box>
                  <Divider />
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 3 }}>
                    <Box>
                      <Typography variant="body2">
                        Start: {formatDate(item.current_period_start)}
                      </Typography>
                      <Typography variant="body2">
                        End: {formatDate(item.current_period_end)}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="body2">
                        Status:{' '}
                        {item.status === 'active' ? (
                          <SeverityPill color="success">Active</SeverityPill>
                        ) : (
                          item.status
                        )}
                      </Typography>
                      {item.canceled_at && (
                        <Typography variant="body2">
                          Canceled at: {formatDate(item.canceled_at)}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                </Paper>
              ))
            ) : (
              <Suspense
                fallback={<Skeleton variant="rectangular" width="100%" height={118} />}
              >
                <AccountSettingsBillingsPlans />
              </Suspense>
            )}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', m: 1 }}>
              <Button
                color="secondary"
                size="small"
                variant="contained"
                disabled
                aria-label="cancel"
                sx={{ m: 2 }}
              >
                Cancel
              </Button>
              <Button
                color="primary"
                size="small"
                variant="contained"
                href="https://buy.stripe.com/cN27sP08H1Sn1Nu9AC"
                sx={{ m: 2 }}
                aria-label="upgrade plan"
                disabled={planData[0]?.status === 'active'}
              >
                Upgrade Plan
              </Button>
            </Box>
          </CardContent>
        </Card>
      </>
    );
  }
);

export default AccountBillingSettings;

```
```typescript:src/components/account/History.tsx
import React, { useEffect, useState, memo, FC } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import LinearProgress from "@mui/material/LinearProgress";
import Skeleton from "@mui/material/Skeleton";
import { Auth } from "aws-amplify";
import HistoryTab from "./HistoryTab";

// Post type
type Post = {
  id: string;
  userQuery: string;
  allUserPost: string;
};

const History: FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data from the API
  const fetchHistoryData = async () => {
    try {
      const apiUrl = `https://api.maila.ai/history-data`;
      const user = await Auth.currentAuthenticatedUser();
      const params = { username: user.username };
      const response = await fetch(apiUrl, {
        headers: {
          Authorization: `Bearer ${(await Auth.currentSession())
            .getIdToken()
            .getJwtToken()}`,
        },
        method: "POST",
        body: JSON.stringify(params),
      });

      if (!response.ok) {
        if (response.status >= 500) {
          throw new Error(`Server error: ${response.status}`);
        } else if (response.status >= 400) {
          throw new Error(`Client error: ${response.status}`);
        } else {
          throw new Error(`Unexpected error: ${response.status}`);
        }
      }

      const data = await response.json();

      if (!Array.isArray(data)) {
        throw new Error("Data is not an array");
      }

      setPosts(data);
    } catch (error) {
      setError(error.message);
      console.error("Fetch history data error:", error.message); // Logging error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHistoryData();
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100%",
        p: 3,
      }}
    >
      <Stack sx={{ width: "100%", mb: 4 }} spacing={2}>
        <Alert severity="info">
          This page and its functionality is currently under development, and we
          expect to add more additional features shortly.
        </Alert>
      </Stack>
      {loading ? (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
          <Skeleton variant="rectangular" width="100%" height={60} />
        </Box>
      ) : error ? (
        <Alert severity="error">{error}</Alert>
      ) : (
        <Stack spacing={2}>
          {posts.map((post, index) => (
            <Card key={post.id + index}>
              <Divider />
              <Box p={2}>
                <HistoryTab postContents={post.allUserPost} input={post.userQuery} />
              </Box>
            </Card>
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default memo(History);


```
```typescript:src/components/account/account-settings-general.tsx
// ===== Types =====
import React, { Suspense, useState, useEffect, lazy, memo } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import Skeleton from '@mui/material/Skeleton';
import { Auth } from 'aws-amplify';
import SimpleState from '../subcomponents/SimpleState';
import { SeverityPill } from 'components/severity-pill';

interface UserInfo {
  points: number;
  userType: number;
  characters: number;
  tokenUsage: number;
  useremail: string;
  permission: string;
  accesscode: string;
  loading: boolean;
}

interface LinearProps {
  linearValue: number;
  description: string;
}

// ===== Subcomponents =====
const LinearBalance: React.FC<LinearProps> = memo(({ linearValue, description }) => (
  <CardContent>
    <LinearProgress sx={{ minWidth: '100px' }} value={linearValue} variant="determinate" />
    <Box sx={{ mt: 1 }}>
      <Typography component="span" color="textSecondary" variant="subtitle2">
        {description}
      </Typography>
    </Box>
  </CardContent>
));

const UserCardDetailsList = lazy(() => import('./UserCardDetailsList'));

// ===== Main Component =====
const AccountGeneralSettings: React.FC = () => {
  const [progress, setProgress] = useState<UserInfo>({
    points: 1,
    userType: 1,
    characters: 0,
    tokenUsage: 0,
    useremail: '',
    permission: 'Free',
    accesscode: '',
    loading: true,
  });

  // 👉 Fetch usage data
  const fetchData = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const token = (await Auth.currentSession()).getIdToken().getJwtToken();
      const response = await fetch('https://api.maila.ai/data-usage', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: JSON.stringify({ username: user.username }),
      });
      const data = await response.json();
      setProgress({ ...data, loading: false });
    } catch {
      setProgress(prev => ({ ...prev, loading: false }));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const wordDesc = `${Math.round(progress.characters / 4)} of 10000 words`;

  return (
    <Grid container spacing={2}>
      {/* 🔢 Usage Summary */}
      <Grid item lg={4} md={6} xl={3} xs={12}>
        <Card>
          <CardContent>
            <SimpleState
              label="Characters usage"
              number={!progress.loading ? progress.characters : <Skeleton width={80} />}
              label2="Token usage"
              number2={!progress.loading ? progress.tokenUsage : <Skeleton width={80} />}
            />
          </CardContent>
        </Card>
      </Grid>

      {/* 👤 User Details */}
      <Grid item lg={8} md={6} xl={9} xs={12}>
        <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={200} />}>
          <UserCardDetailsList
            title="User Information"
            emailLabel="Email"
            email={!progress.loading ? progress.useremail : 'Loading...'}
            name1="Access Code"
            value1={!progress.loading ? progress.accesscode : 'Loading...'}
            name2="Point"
            value2={!progress.loading ? progress.points.toString() : 'Loading...'}
            userTypeLabel="User Type"
            userType={
              progress.loading ? (
                <Skeleton width={80} />
              ) : progress.userType === 3 ? (
                <SeverityPill color="success">Premium</SeverityPill>
              ) : progress.userType === 2 ? (
                <SeverityPill color="primary">Premium subscription</SeverityPill>
              ) : (
                <>
                  <SeverityPill color="warning">Free Trial</SeverityPill>
                  <LinearBalance linearValue={(progress.characters * 100) / 50000} description={wordDesc} />
                </>
              )
            }
            upgradeLabel={progress.userType > 2 ? null : 'Upgrade'}
          />
        </Suspense>
      </Grid>
    </Grid>
  );
};

export default AccountGeneralSettings;


```
```typescript:src/components/account/Documents.tsx
import { FC, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import { Auth } from 'aws-amplify';
import { Node as SlateNode } from 'slate';

// ======= TYPES =======
interface UserData {
  userData: SlateNode[];
  generatedAt: string;
}

// ======= HELPERS =======
const serializeNodes = (children: SlateNode[]): string => 
  children.map(SlateNode.string).join('\n');

// ======= COMPONENT =======
const Documents: FC = () => {
  const [posts, setPosts] = useState<UserData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async (): Promise<UserData[]> => {
    const apiUrl = 'https://api.maila.ai/get-saved-data';
    const user = await Auth.currentAuthenticatedUser();
    const params = { username: user.username };

    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${(await Auth.currentSession())
          .getIdToken()
          .getJwtToken()}`,
      },
      method: 'POST',
      body: JSON.stringify(params),
    });

    const data = await response.json();
    return Object.values(data).filter(
      (value: any): value is UserData => value.userData !== undefined
    );
  };

  useEffect(() => {
    fetchData().then((data) => {
      setPosts(data);
      setLoading(false);
    });
  }, []);

  return (
    <Box sx={{ backgroundColor: 'background.default', minHeight: '100%', p: 3 }}>
      <Stack sx={{ width: '100%', mb: 4 }} spacing={2}>
        <Alert severity='info'>
          This page and its functionality is currently under development, and we expect to add more features shortly.
        </Alert>
      </Stack>
      
      <Card>
        <CardHeader title='Saved Outputs' />
        <Divider />
        <Table>
          <TableBody>
            {loading ? (
              Array.from(new Array(5)).map((_, index) => (
                <TableRow key={index}>
                  <TableCell><Skeleton /></TableCell>
                  <TableCell><Skeleton /></TableCell>
                </TableRow>
              ))
            ) : (
              posts.map((post) => (
                <TableRow key={post.generatedAt} sx={{ '&:last-child td': { border: 0 } }}>
                  <TableCell>
                    <Typography sx={{ cursor: 'pointer' }} variant='caption'>
                      {post.generatedAt}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color='textSecondary' variant='body1'>
                      {serializeNodes(post.userData)}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </Card>
    </Box>
  );
};

export default Documents;


```
```typescript:src/components/account/account-settings-security.tsx
import React from "react";
import * as Yup from "yup";
import { Formik, FormikHelpers } from "formik";
import { useSnackbar } from "notistack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import FormHelperText from "@mui/material/FormHelperText";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Auth } from "aws-amplify";

// --- Types ----------------------------------
interface FormValues {
  oldPassword: string;
  newPassword: string;
  passwordConfirm: string;
  submit: string | null;
}

interface Props extends React.FormHTMLAttributes<HTMLFormElement> {}

// --- Validation Schema ----------------------
const validationSchema: Yup.SchemaOf<Omit<FormValues, "submit">> = Yup.object({
  newPassword: Yup.string()
    .min(7, "Must be at least 7 characters")
    .max(255)
    .required("Required"),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
    .required("Required"),
});

// --- Component ------------------------------
const AccountSecuritySettings: React.FC<Props> = ({ ...props }) => {
  const { enqueueSnackbar } = useSnackbar();

  // 🔒 handle password change
  const handleSubmit = async (
    values: FormValues,
    { resetForm, setErrors, setStatus, setSubmitting }: FormikHelpers<FormValues>
  ) => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      await Auth.changePassword(user, values.oldPassword, values.newPassword);
      setStatus({ success: true });
      enqueueSnackbar("Password updated", {
        anchorOrigin: { horizontal: "right", vertical: "top" },
        variant: "success",
      });
      resetForm();
    } catch (err: any) {
      setStatus({ success: false });
      setErrors({ submit: err.message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik<FormValues>
      initialValues={{
        oldPassword: "",
        newPassword: "",
        passwordConfirm: "",
        submit: null,
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values,
      }) => (
        <form onSubmit={handleSubmit} {...props}>
          <Card>
            <CardHeader title="Change Password" />
            <Divider />
            <CardContent>
              <Grid container spacing={3}>
                {/* 🔑 Old Password */}
                <Grid item md={4} sm={6} xs={12}>
                  <TextField
                    size="small"
                    fullWidth
                    name="oldPassword"
                    label="Old Password"
                    type="password"
                    value={values.oldPassword}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={Boolean(touched.oldPassword && errors.oldPassword)}
                    helperText={touched.oldPassword && errors.oldPassword}
                  />
                </Grid>
                {/* 🔒 New Password */}
                <Grid item md={4} sm={6} xs={12}>
                  <TextField
                    size="small"
                    fullWidth
                    name="newPassword"
                    label="New Password"
                    type="password"
                    value={values.newPassword}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={Boolean(touched.newPassword && errors.newPassword)}
                    helperText={touched.newPassword && errors.newPassword}
                  />
                </Grid>
                {/* 🔄 Confirm Password */}
                <Grid item md={4} sm={6} xs={12}>
                  <TextField
                    size="small"
                    fullWidth
                    name="passwordConfirm"
                    label="Password Confirmation"
                    type="password"
                    value={values.passwordConfirm}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={Boolean(
                      touched.passwordConfirm && errors.passwordConfirm
                    )}
                    helperText={touched.passwordConfirm && errors.passwordConfirm}
                  />
                </Grid>
              </Grid>
              {typeof errors.submit === "string" && (
                <Box sx={{ mt: 3 }}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Box>
              )}
            </CardContent>
            <Divider />
            <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
              <Button
                size="small"
                color="primary"
                variant="contained"
                disabled={isSubmitting}
                type="submit"
              >
                Change Password
              </Button>
            </Box>
          </Card>
        </form>
      )}
    </Formik>
  );
};

export default AccountSecuritySettings;


```
```typescript:src/components/account/index.tsx
export { default as AccountBillingSettings } from './account-settings-billings';
export { default as AccountGeneralSettings } from './account-settings-general';
export { default as AccountNotificationsSettings } from './account-settings-notifications';
export { default as AccountSecuritySettings } from './account-settings-security';


```
```typescript:src/components/account/countries.ts
const countries = [
  { code: "US", label: "English", LangCode: "en" },
  { code: "SV", label: "Swedish", LangCode: "sv" },
  { code: "DE", label: "German", LangCode: "de" },
  { code: "FI", label: "Finnish", LangCode: "fi" },
  { code: "NO", label: "Norwegian", LangCode: "no" },
  { code: "CN", label: "Chinese", LangCode: "zh" },
  { code: "ES", label: "Spanish", LangCode: "es" },
  { code: "IN", label: "Hindi", LangCode: "hi" },
  { code: "RU", label: "Russian", LangCode: "ru" },
  { code: "BR", label: "Portuguese", LangCode: "pt" },
  { code: "FR", label: "French", LangCode: "fr" },
  { code: "AR", label: "Arabic", LangCode: "ar" },
  { code: "BD", label: "Bengali", LangCode: "bn" },
  { code: "ID", label: "Indonesian", LangCode: "id" },
  { code: "JP", label: "Japanese", LangCode: "ja" },
  { code: "KR", label: "Korean", LangCode: "ko" },
  { code: "TR", label: "Turkish", LangCode: "tr" },
  { code: "IT", label: "Italian", LangCode: "it" },
  { code: "NL", label: "Dutch", LangCode: "nl" },
  { code: "PL", label: "Polish", LangCode: "pl" },
  { code: "EN", label: "English", LangCode: "en" },
  { code: "PK", label: "Urdu", LangCode: "ur" },
  { code: "PH", label: "Tagalog", LangCode: "tl" },
  { code: "VN", label: "Vietnamese", LangCode: "vi" },
  { code: "IL", label: "Hebrew", LangCode: "he" },
  { code: "PL", label: "Polish", LangCode: "pl" },
  { code: "UA", label: "Ukrainian", LangCode: "uk" },
  { code: "RO", label: "Romanian", LangCode: "ro" },
  { code: "HU", label: "Hungarian", LangCode: "hu" },
  { code: "GR", label: "Greek", LangCode: "el" },
  { code: "SE", label: "Swedish", LangCode: "sv" },
  { code: "DK", label: "Danish", LangCode: "da" },
  { code: "CZ", label: "Czech", LangCode: "cs" },
  { code: "RS", label: "Serbian", LangCode: "sr" },
  { code: "HR", label: "Croatian", LangCode: "hr" },
  { code: "BG", label: "Bulgarian", LangCode: "bg" },
  { code: "SI", label: "Slovenian", LangCode: "sl" },
  { code: "SK", label: "Slovak", LangCode: "sk" },
  { code: "US", label: "English", LangCode: "en" },
  { code: "CN", label: "Chinese (Simplified)", LangCode: "zh" },
  { code: "TW", label: "Chinese (Traditional)", LangCode: "zh-Hant" },
  { code: "CA", label: "Catalan", LangCode: "ca" },
  { code: "EE", label: "Estonian", LangCode: "et" },
  { code: "TH", label: "Thai", LangCode: "th" },
  { code: "MY", label: "Malay", LangCode: "ms" },
  { code: "AL", label: "Albanian", LangCode: "sq" },
  { code: "BA", label: "Bosnian", LangCode: "bs" },
  { code: "IR", label: "Persian", LangCode: "fa" },
  { code: "LT", label: "Lithuanian", LangCode: "lt" },
  { code: "LV", label: "Latvian", LangCode: "lv" },
  { code: "ES-GA", label: "Galician", LangCode: "gl" },
  { code: "ZA", label: "Afrikaans", LangCode: "af" },
  { code: "IL", label: "Hebrew", LangCode: "iw" },
  { code: "IS", label: "Icelandic", LangCode: "is" },
  { code: "IE", label: "Irish", LangCode: "ga" },
  { code: "CY", label: "Welsh", LangCode: "cy" },
  { code: "IN-TA", label: "Tamil", LangCode: "ta" },
  { code: "IN-ML", label: "Malayalam", LangCode: "ml" },
  { code: "RW", label: "Kinyarwanda", LangCode: "rw" },
  { code: "IN-MR", label: "Marathi", LangCode: "mr" },
  { code: "AZ", label: "Azerbaijani", LangCode: "az" },
  { code: "GE", label: "Georgian", LangCode: "ka" },
  { code: "SE-SW", label: "Sami", LangCode: "se" }
];



// function that get the LangCode and return language name
export const getCountryName = code => {
  const country = countries.find(country => country.code === code);
  return country ? country.label : "";
};



export default countries;


```
```typescript:src/components/account/account-settings-notifications.tsx
// =================================================================
// Imports
// =================================================================
import React, { FC, FormEvent } from 'react';
import { useSnackbar } from 'notistack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// =================================================================
// Types
// =================================================================
interface AccountNotificationsSettingsProps
  extends React.FormHTMLAttributes<HTMLFormElement> {}

// =================================================================
// Component
// =================================================================
const AccountNotificationsSettings: FC<AccountNotificationsSettingsProps> = (props) => {
  const { enqueueSnackbar } = useSnackbar();

  // 🔔 handle form submission
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      enqueueSnackbar('Changes saved', {
        anchorOrigin: { horizontal: 'right', vertical: 'top' },
        variant: 'success',
      });
    } catch (error) {
      console.error('Failed to save settings', error);
    }
  };

  return (
    // 🔔 Notifications Settings Form
    <form onSubmit={handleSubmit} {...props}>
      <Card>
        <CardHeader title="System notifications" />
        <CardContent>
          <Grid container spacing={6} wrap="wrap">
            <Grid item md={4} sm={6} xs={12}>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="body2"
                component="p"
              />
              {/* Notification Options */}
              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      defaultChecked
                      size="small"
                    />
                  }
                  label="Update in Terms and conditions"
                />
              </div>
              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      defaultChecked
                      size="small"
                    />
                  }
                  label="Change in product features"
                />
              </div>
              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      defaultChecked
                      size="small"
                    />
                  }
                  label="Discounts and offers"
                />
              </div>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
          <Button
            color="primary"
            type="submit"
            variant="contained"
            size="small"
          >
            Save Settings
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default AccountNotificationsSettings;


```
```typescript:src/components/account/productPath.ts
const productPath = [
  { url: "/app/tagline", label: "Tagline" },
  {
    url: "/app/landing-page-headline-description",
    label: "Landing Page Headline Description",
  },
  { url: "/app/landing-page-headline", label: "Landing Page Headline" },
  { url: "/app/meta-descriptions", label: "Meta Descriptions" },
  { url: "/app/question-generator", label: "Question Generator" },
  { url: "/app/keyword-suggestion", label: "Keyword Suggestion" },
  { url: "/app/subject-suggestion", label: "Subject Suggestion" },
  { url: "/app/blog-post-intro", label: "Blog Post Intro" },
  { url: "/app/blog-post-ideas", label: "Blog Post Ideas" },
  { url: "/app/blog-post-conclusion", label: "Blog Post Conclusion" },
  { url: "/app/blog-post-headline", label: "Blog Post Headline" },
  { url: "/app/blog-post-summary", label: "Blog Post Summary" },
  { url: "/app/blog-post-aida", label: "Blog Post AIDA" },
  { url: "/app/blog-post-pas", label: "Blog Post Pas" },
  { url: "/app/grammar-correction", label: "Grammar Correction" },
  { url: "/app/mission-statement", label: "Mission Statement" },
  { url: "/app/vision-statement", label: "Vision Statement" },
  { url: "/app/value-proposition", label: "Value Proposition" },
  { url: "/app/adjust-tone-rewriting", label: "Rewrite - Adjust Tone" },
  { url: "/app/informal-email", label: "Informal Email" },
  { url: "/app/formal-email", label: "Formal Email" },
  { url: "/app/followup-email", label: "Follow-up Email" },
  { url: "/app/cold-email", label: "Sales Email" },
  { url: "/app/thanks-you-email", label: "Thanks You Email" },
  { url: "/app/prospecting-email", label: "Prospecting Email" },
  { url: "/app/productdescription", label: "Product Description" },
  { url: "/app/productdescriptionamazon", label: "Product Description Amazon" },
  { url: "/app/g-ad-title", label: "Google Ad Tilte" },
  { url: "/app/g-ad-description", label: "Google Ad Description" },
  { url: "/app/create-outline", label: "Create Outline" },
  { url: "/app/expand", label: "Expand an Outline" },
];

export default productPath;

interface productsTools {
  label: string;
  path: string;
  message: string;
  mainPlaceholder: string;
  productType: string;
  generateButtonName: string;
  toneTextField: boolean;
  headerTitle: string;
  labelsLists: any[];
  inputLimitation: string;
}
[];

```
```typescript:src/components/account/Redeemer.tsx
import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Auth } from "aws-amplify";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import Collapse from "@mui/material/Collapse";
import TransitionAlerts from "components/homepage/TransitionAlerts";

const wait = (time) => new Promise((res) => setTimeout(res, time));

const Redeemer = (props) => {
  const { customers, ...other } = props;
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const lang = props.lang;
  return (
    <Formik
      initialValues={{
        voucher: "",
        message: "",
        submit: null,
      }}
      validationSchema={Yup.object().shape({
        voucher: Yup.string().max(855),
        message: Yup.string().max(855),
      })}
      onSubmit={async (
        values,
        { resetForm, setErrors, setStatus, setSubmitting }
      ) => {
        try {
          const theUrl = `https://api.maila.ai/redeem`;
          let params = {};
          params["voucher"] = values.voucher;
          const regData = JSON.stringify(params);
          const response = await fetch(theUrl, {
            headers: {
              Authorization: `Bearer ${(await Auth.currentSession())
                .getIdToken()
                .getJwtToken()}`,
            },
            method: "POST",
            body: regData,
          });
          const data = await response.json();
          await wait(500);
          console.log(data.message);
          setMessage(data.message);
          setData(data);
          setStatus({ success: true });
          setOpen(true);
          setSubmitting(false);
        } catch (err) {
          console.error(err);
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setOpen(true);
          setSubmitting(false);
        }
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values,
      }) => (
        <Box
          sx={{
            backgroundColor: "background.paper",
            minHeight: "100%",
            p: 3,
          }}
        >
          <Box
            sx={{
              pb: 3,
              pt: 2,
              px: 2,
            }}
          >
            <form onSubmit={handleSubmit} {...other}>
              <Box sx={{ mt: 2 }}>
                <TextField
                  error={Boolean(touched.voucher && errors.voucher)}
                  fullWidth
                  helperText={touched.voucher && errors.voucher}
                  name='voucher'
                  placeholder='Discount Code'
                  size='medium'
                  sx={{ mt: 2 }}
                  InputLabelProps={{ shrink: true }}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  required
                  value={values.voucher}
                  variant='outlined'
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  mt: 2,
                }}
              >
                <Button
                  disabled={isSubmitting}
                  sx={{ mt: 2 }}
                  type='submit'
                  variant='contained'
                >
                  Redeem
                </Button>
              </Box>
            </form>
          </Box>
          <Collapse in={!open}>
            <FormHelperText>{message}</FormHelperText>
          </Collapse>
          <TransitionAlerts
            state={[open, setOpen]}
            color={data["data"] ? "success" : "warning"}
            message={message}
          />
        </Box>
      )}
    </Formik>
  );
};

export default Redeemer;


```
```javascript:src/aws-exports.js
/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

const awsmobile = {
    "aws_project_region": process.env.GATSBY_APP_AWS_PROJECT_REGION,
    "aws_cognito_identity_pool_id": process.env.GATSBY_APP_AWS_COGNITO_IDENTITY_POOL_ID,
    "aws_cognito_region": process.env.GATSBY_APP_AWS_COGNITO_REGION,
    "aws_user_pools_id": process.env.GATSBY_APP_AWS_USER_POOLS_ID,
    "aws_user_pools_web_client_id": process.env.GATSBY_APP_AWS_USER_POOLS_WEB_CLIENT_ID,
    "oauth": {
        "domain": process.env.GATSBY_APP_OAUTH_DOMAIN,
        "scope": [
            "phone",
            "email",
            "openid",
            "profile",
            "aws.cognito.signin.user.admin"
        ],
        "redirectSignIn": process.env.GATSBY_APP_OAUTH_REDIRECT_SIGN_IN,
        "redirectSignOut": process.env.GATSBY_APP_OAUTH_REDIRECT_SIGN_OUT,
        "responseType": "code"
    },
    "federationTarget": "COGNITO_USER_POOLS",
    "aws_cognito_username_attributes": [
        "EMAIL"
    ],
    "aws_cognito_social_providers": [
        "FACEBOOK",
        "GOOGLE"
    ],
    "aws_cognito_signup_attributes": [
        "EMAIL"
    ],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [
        "SMS"
    ],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": []
    },
    "aws_cognito_verification_mechanisms": [
        "EMAIL"
    ],
    "aws_content_delivery_bucket": process.env.GATSBY_APP_AWS_CONTENT_DELIVERY_BUCKET,
    "aws_content_delivery_bucket_region": process.env.GATSBY_APP_AWS_CONTENT_DELIVERY_BUCKET_REGION,
    "aws_content_delivery_url": process.env.GATSBY_APP_AWS_CONTENT_DELIVERY_URL
};


export default awsmobile;



```
```typescript:src/utils/createResourceId.ts
const createResourceId = () => {
  const arr = new Uint8Array(12);
  window.crypto.getRandomValues(arr);
  return Array.from(arr, (v) => v.toString(16).padStart(2, '0')).join('');
};

export default createResourceId;


```
```typescript:src/utils/getInitials.ts
const getInitials = (name = '') => name
  .replace(/\s+/, ' ')
  .split(' ')
  .slice(0, 2)
  .map((v) => v && v[0].toUpperCase())
  .join('');

export default getInitials;


```
```typescript:src/utils/bytesToSize.ts
/* eslint-disable no-restricted-properties */
const bytesToSize = (bytes, decimals = 2) => {
  if (bytes === 0) {
    return '0 Bytes';
  }

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
};

export default bytesToSize;


```
```typescript:src/utils/wait.ts
const wait = (time) => new Promise((res) => setTimeout(res, time));

export default wait;


```
```typescript:src/utils/LangAddon.ts
type LangKey = 'en' | 'fi' | 'zh' | 'sv';
type JsonData = Record<string, Record<LangKey, string>>;
type LangMenuItem = { link: string };

// Get localized URL for a given ID and language
export const getLocalizedUrl = (id: string, langKey: LangKey, jsonData: JsonData): string => {
  if (id === 'undefined') {
    console.error('Missing id in getLocalizedUrl()');
    return '';
  }

  return jsonData[id]?.[langKey] || '';
};

// Extract base path from URL
export const extractBasePath = (langKey: string, basename: string, url: string): string => {
  const langKeyLength = langKey.length;
  const baseNameIndex = url.indexOf(basename);
  return url.slice(langKeyLength + 2, baseNameIndex);
};

// Check path and return basename and article ID
export const checkPath = (langKey: LangKey, url: string, articleId: string, jsonData: JsonData): [string | undefined, string] => {
  let basename;
  if (articleId !== 'undefined') {
    basename = getLocalizedUrl(articleId, langKey, jsonData);
  }
  return [basename, articleId];
};

// Set language menu links
export const setLangMenuLinks = (langsMenu: LangMenuItem[], id: string, basePath: string, jsonData: JsonData): void => {
  if (id === 'undefined') {
    console.error('Missing id in setLangMenuLinks()');
    return;
  }

  const languages: LangKey[] = ['en', 'sv'];
  languages.forEach((lang, index) => {
    langsMenu[index].link = `/${lang}/${basePath}${getLocalizedUrl(id, lang, jsonData)}/`;
  });
};

// Commented-out code for potential future use:
/*
// Example of adding more languages to setLangMenuLinks
const allLanguages: LangKey[] = ['en', 'sv', 'fi', 'zh'];
export const setAllLangMenuLinks = (langsMenu: LangMenuItem[], id: string, basePath: string, jsonData: JsonData): void => {
  if (id === 'undefined') {
    console.error('Missing id in setAllLangMenuLinks()');
    return;
  }

  allLanguages.forEach((lang, index) => {
    langsMenu[index].link = `/${lang}/${basePath}${getLocalizedUrl(id, lang, jsonData)}/`;
  });
};
*/

```
```typescript:src/utils/asSvgIcon.tsx
import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

export default function asSvgIcon(reactSvgComponent: React.ComponentType<React.SVGProps<SVGSVGElement>>) {
    const Icon = React.forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => {
        const { component, ...svgIconProps } = props;
        const viewBox = React.useMemo(() => {
            const Comp = reactSvgComponent as any;
            return new Comp({}).props.attr?.viewBox;
        }, []);
        return <SvgIcon ref={ref} component={reactSvgComponent} viewBox={viewBox} {...svgIconProps} />;
    });

    Icon.displayName = `AsSvgIcon(${reactSvgComponent.displayName || reactSvgComponent.name})`;

    return Icon;
}

```
```typescript:src/utils/grammar.tsx
type ComparisonResult = {
  shared: string[];
  diffRight: string[];
  diffLeft: string[];
};

/**
 * Compares two sentences and finds shared and different words.
 * @param correct - The correct sentence
 * @param incorrect - The sentence to compare
 * @returns Object with shared and different words
 * @example
 * const result = compareStrings("She went to the market", "She go to the store");
 * console.log(result);
 * // { shared: ["She", "to", "the"], diffRight: ["went", "market"], diffLeft: ["go", "store"] }
 */
export const compareStrings = (correct: string, incorrect: string): ComparisonResult => {
  try {
    const correctWords = correct.split(" ");
    const incorrectWords = incorrect.split(" ");
    const maxLength = Math.max(correctWords.length, incorrectWords.length);

    console.log(`📊 Comparing ${correctWords.length} vs ${incorrectWords.length} words`);

    const result: ComparisonResult = { shared: [], diffRight: [], diffLeft: [] };

    for (let i = 0; i < maxLength; i++) {
      if (correctWords[i] === incorrectWords[i]) {
        result.shared.push(correctWords[i]);
      } else {
        if (correctWords[i]) result.diffRight.push(correctWords[i]);
        if (incorrectWords[i]) result.diffLeft.push(incorrectWords[i]);
      }
    }

    console.log(`✅ Comparison complete: ${result.shared.length} shared words found`);
    return result;
  } catch (error) {
    console.error(`❌ Error comparing strings: ${error.message}`);
    throw error;
  }
};

// Uncomment to test the function
// const testCorrect = "She no went to the market";
// const testIncorrect = "She didn't go to the market but did she";
// console.log(compareStrings(testCorrect, testIncorrect));

```
```typescript:src/utils/objFromArray.ts
const objFromArray = (arr, key = 'id') => arr.reduce((accumulator, current) => {
  accumulator[current[key]] = current;
  return accumulator;
}, {});

export default objFromArray;


```
```typescript:src/utils/code-styles.ts
export const neutral = {
    50: '#F8F9FA',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D2D6DB',
    400: '#9DA4AE',
    500: '#6C737F',
    600: '#4D5761',
    700: '#2F3746',
    800: '#1C2536',
    900: '#111927'
};

export const codeStyle: any = {
    'code[class*="language-"]': {
        color: neutral[50],
        background: 'none',
        textShadow: '0 1px rgba(0, 0, 0, 0.3)',
        fontFamily: '\'Roboto Mono\', Consolas, Monaco, \'Andale Mono\', \'Ubuntu Mono\', monospace',
        fontSize: '14px',
        textAlign: 'left',
        whiteSpace: 'pre',
        wordSpacing: 'normal',
        wordBreak: 'normal',
        wordWrap: 'normal',
        lineHeight: '1.5',
        MozTabSize: '4',
        OTabSize: '4',
        tabSize: '4',
        WebkitHyphens: 'none',
        MozHyphens: 'none',
        msHyphens: 'none',
        hyphens: 'none'
    },
    'pre[class*="language-"]': {
        color: neutral[50],
        background: neutral[800],
        textShadow: '0 1px rgba(0, 0, 0, 0.3)',
        fontFamily: '\'Roboto Mono\', Consolas, Monaco, \'Andale Mono\', \'Ubuntu Mono\', monospace',
        fontSize: '14px',
        textAlign: 'left',
        whiteSpace: 'pre',
        wordSpacing: 'normal',
        wordBreak: 'normal',
        wordWrap: 'normal',
        lineHeight: '1.5',
        MozTabSize: '4',
        OTabSize: '4',
        tabSize: '4',
        WebkitHyphens: 'none',
        MozHyphens: 'none',
        msHyphens: 'none',
        hyphens: 'none',
        padding: '1em',
        margin: '.5em 0',
        overflow: 'auto',
        borderRadius: '8px'
    },
    ':not(pre) > code[class*="language-"]': {
        background: neutral[800],
        padding: '.1em',
        borderRadius: '.3em',
        whiteSpace: 'normal'
    },
    comment: {
        color: '#6272a4'
    },
    prolog: {
        color: '#6272a4'
    },
    doctype: {
        color: '#6272a4'
    },
    cdata: {
        color: '#6272a4'
    },
    punctuation: {
        color: '#f8f8f2'
    },
    '.namespace': {
        Opacity: '.7'
    },
    property: {
        color: '#ff79c6'
    },
    tag: {
        color: '#ff79c6'
    },
    constant: {
        color: '#ff79c6'
    },
    symbol: {
        color: '#ff79c6'
    },
    deleted: {
        color: '#ff79c6'
    },
    boolean: {
        color: '#bd93f9'
    },
    number: {
        color: '#bd93f9'
    },
    selector: {
        color: '#50fa7b'
    },
    'attr-name': {
        color: '#50fa7b'
    },
    string: {
        color: '#50fa7b'
    },
    char: {
        color: '#50fa7b'
    },
    builtin: {
        color: '#50fa7b'
    },
    inserted: {
        color: '#50fa7b'
    },
    operator: {
        color: '#f8f8f2'
    },
    entity: {
        color: '#f8f8f2',
        cursor: 'help'
    },
    url: {
        color: '#f8f8f2'
    },
    '.language-css .token.string': {
        color: '#f8f8f2'
    },
    '.style .token.string': {
        color: '#f8f8f2'
    },
    variable: {
        color: '#f8f8f2'
    },
    atrule: {
        color: '#f1fa8c'
    },
    'attr-value': {
        color: '#f1fa8c'
    },
    function: {
        color: '#f1fa8c'
    },
    'class-name': {
        color: '#f1fa8c'
    },
    keyword: {
        color: '#8be9fd'
    },
    regex: {
        color: '#ffb86c'
    },
    important: {
        color: '#ffb86c',
        fontWeight: 'bold'
    },
    bold: {
        fontWeight: 'bold'
    },
    italic: {
        fontStyle: 'italic'
    }
};


```
```typescript:src/pages/app/[...].tsx
import React, { useContext, useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { navigate } from "gatsby";
import { Helmet } from "react-helmet";
import { IntlProvider } from "react-intl";
import "../../../configureAmplify";
import AppContext from "../../contexts/AppContext";
import SignIn from "../../components/SignIn";
import TopBar from "../../components/TopBar";
import DrawerSideBar from "../../components/DrawerSideBar";
import PrivateRoute from "../../components/layout/PrivateRoute";
import ProductDescription from "../../components/editors/ProductDescription";
import AccountManage from "../../components/AccountManage";
import { styled } from "@mui/material/styles";
// @refresh reset
import { Router } from "@reach/router";
import { useLocation } from "@reach/router";
import Box from "@mui/material/Box";
import SearchBox from "../../components/subcomponents/searchBox";
import useSettings from "../../hooks/useSettings";
import { OptionsObject, SnackbarKey, SnackbarMessage, SnackbarProvider, useSnackbar } from 'notistack';
import SetLanguageModal from "../../components/subcomponents/set-language-modal";
import EditorManage from "../../components/editor-manage";
import useToolsProducts from "../../hooks/useToolsProducts";
import DocumentsPage from "../../components/documents-page";
import States from "../../components/app-components/states";
import { Settings } from "contexts/settings-context";

const inputList = 800;
const MarginBox = styled("div")(({ theme }) => ({
  minHeight: 48,
  [theme.breakpoints.down("sm")]: {
    minHeight: 48,
  },
  [theme.breakpoints.up("sm")]: {
    minHeight: 56,
  },
  [theme.breakpoints.up("md")]: {
    minHeight: 56,
  },
  [theme.breakpoints.up("lg")]: {
    minHeight: 56,
  },
}));

const getValues = (settings: Settings) => ({
  direction: settings.direction,
  responsiveFontSizes: settings.responsiveFontSizes,
  theme: settings.theme,
  lang: settings.lang,
});

const isNew = (str, text) => {
  return str.toLowerCase().includes(text.toLowerCase());
};
export default function App() {
  const useTools = useToolsProducts();
  const appContext = useContext(AppContext);
  const [context, setContext] = useState(appContext);
  const { settings, saveSettings } = useSettings();
  const location = useLocation();

  const redirectToList = () => {
    location.pathname === "/app" && navigate("/app/list");
    location.pathname === "/app/" && navigate("/app/list");
  };

  console.log(location.pathname);
  React.useEffect(() => {
    redirectToList();
  }, [location.pathname]);

  // Initialize enqueueSnackbar as a no-op function
  let enqueueSnackbar: (message: SnackbarMessage, options?: OptionsObject) => SnackbarKey = () => "";

  // Check if window is defined (i.e., we're on the client)
  if (typeof window !== 'undefined') {
    // If we're on the client, get enqueueSnackbar from useSnackbar
    ({ enqueueSnackbar } = useSnackbar());
  }
  /**
   * why state? When the component receives updates, the result is displayed immediately, otherwise we can use ref.
   */
  const [values, setValues] = React.useState(getValues(settings));
  const i18nMessages = require(`../../data/messages/${values.lang}`);

  // because product description uses the ProductDescriptionTool template, I filter out the product description
  const allProducts = useTools[`${values.lang}`].edges.map(
    (item: { node: { frontmatter: any; }; }) => item.node.frontmatter
  );

  const products = allProducts;
  const handleChange = (field: any, value: any): void => {
    setValues({
      ...values,
      [field]: value,
    });

    saveSettings({
      ...values,
      [field]: value,
    });
  };

  const changeLanguage = (event: any, newValue: any) => {
    handleChange("lang", newValue ? newValue.LangCode : "en");
    // saveSettings(values);
  };
  // ................ end handle UI lang change ...............

  useEffect(() => {
    checkUser();
  }, []);

  const [user, setUser] = useState(null);
  useEffect(() => {
    Auth.currentAuthenticatedUser().then(setUser);
  }, []);

  async function checkUser() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setContext({ ...context, userInfo: user });
    } catch (err) {
      setContext({ ...context, userInfo: err });
      isNew(location.search, "error_description") &&
        enqueueSnackbar("User has been successfully registered", {
          variant: "success",
          autoHideDuration: 15000,
        });
      setTimeout(
        () =>
          enqueueSnackbar("To access the app you need to sign in again.", {
            variant: "warning",
            autoHideDuration: 3000,
          }),
        3000
      );

      navigate("/auth/login");
    }
  }
  const logout = async () => {
    const user = await Auth.currentAuthenticatedUser();
    if (user) {
      Auth.signOut();
      navigate("/auth/login");
    }
  };

  const toggleOpen = () => {
    setContext({ ...context, IsOpen: !context.IsOpen });
  };

  const state = {
    ...context,
    toggleOpen: toggleOpen,
    checkUser: checkUser,
    logout: logout,
  };

  if (!user || user == null || user === "The user is not authenticated") {
    return (
      <>
        {isNew(location.search, "?code=") ? (
          <SignIn isRedirecting={true} />
        ) : (
          <SignIn />
        )}
      </>
    );
  } else {
    return (
      <AppContext.Provider value={state}>
        <SnackbarProvider>
          <IntlProvider locale={values.lang} messages={i18nMessages}>
            <Helmet>
              <meta charSet='utf-8' />
              <meta
                name='viewport'
                content='width=device-width, initial-scale=1.0'
              />
              <title>Maila App</title>
            </Helmet>

            <Box
              sx={{
                display: "flex",
              }}
            >
              <TopBar
                icon='MenuRoundedIcon'
                title='maila.ai'
                uilang={<SetLanguageModal changeLanguage={changeLanguage} />}
              />
              <DrawerSideBar />
              <Box
                sx={{
                  flexGrow: 1,
                  height: "100vh",
                  overflow: "auto",
                  backgroundColor: "background.default",
                }}
                component='main'
              >
                <MarginBox />
                <Box
                  sx={{
                    py: 3,
                    px: "1vw",
                  }}
                >
                  <SearchBox />
                  <Router basepath='/app'>
                    <PrivateRoute path='/profile' component={AccountManage} />
                    <PrivateRoute path='/list' component={States} />
                    {products.map((product: { url: string; title: any; usage: any; placeholder: any; editor_height: number; help_hint: any; product_type: string; extraFields: any; tone: boolean; loadFromUrl: boolean; }, index: React.Key) => {
                      const path = product.url.split("/")[2];
                      return (
                        <ProductDescription
                          key={index}
                          label={product.title}
                          headerTitle={product.title}
                          description={product.usage}
                          example={product.placeholder}
                          editorHeight={product.editor_height}
                          instructHelp={product.help_hint}
                          productType={product.product_type}
                          path={path}
                          extraFields={product.extraFields}
                          toneTextField={product.tone}
                          loadFromUrl={product.loadFromUrl}
                        />
                      );
                    })}
                    <EditorManage
                      label={"Advanced Editor"}
                      headerTitle={
                        "This is an advanced editor for special applications and tuning outputs."
                      }
                      description={
                        "This is an advanced editor for special applications and tuning outputs."
                      }
                      example={
                        "This is an advanced editor for special applications and tuning outputs.."
                      }
                      instructHelp={
                        "This is an advanced editor for special applications and tuning outputs."
                      }
                      productType='44'
                      path='/prompt'
                      toneTextField={true}
                      labelsLists={[]}
                      tunningOptions
                    />
                    <ProductDescription
                      label={"suffix"}
                      headerTitle={"suffix"}
                      description={"suffix"}
                      example={"suffix test"}
                      instructHelp={"suffix about product text"}
                      productType='46'
                      path='/suffix'
                      toneTextField={true}
                      labelsLists={[]}
                    />
                    <AccountManage path='/profile' />
                    <DocumentsPage path='/documents' />
                    <EditorManage path='/editor' />
                  </Router>
                </Box>
              </Box>
            </Box>
          </IntlProvider>
        </SnackbarProvider>
      </AppContext.Provider>
    );
  }
}


```
```plaintext:src/pages/blog/2022/images/headlines-copywriting-formulas.png
```plaintext:src/pages/blog/2022/images/ai-product-description-platform.png
```plaintext:src/pages/blog/2022/images/formatting-style.png
```plaintext:src/pages/blog/2022/images/idea-generation.png
```plaintext:src/pages/blog/2022/images/terms.jpg
```plaintext:src/pages/blog/2022/images/emails-hey.jpg
```plaintext:src/pages/blog/2022/images/thanks-for-the-payment.png
```plaintext:src/pages/blog/2022/images/phone-call-invitation.jpg
```plaintext:src/pages/blog/2022/images/maila-email-subject.png
```plaintext:src/pages/tools/copywriting/images/ai-product-description-platform.png
```typescript:src/pages/auth/recovery.tsx
import React from "react";
import "../../../configureAmplify";
import AuthenticationLayout from "../../components/layout/AuthenticationLayout";
import PasswordRecoveryAmplify from "../../components/authentication/password-recovery/PasswordRecoveryAmplify";
import { IntlProvider } from "react-intl";
import useSettings from "../../hooks/useSettings";

export const WrapLayout = ({ children }) => {
  const { settings } = useSettings();
  const i18nMessages = require(`../../data/messages/${settings.lang}`);
  return (
    <IntlProvider
      locale={settings.lang}
      messages={i18nMessages}
      textComponent={React.Fragment}
    >
      {children}
    </IntlProvider>
  );
};
export default function Recovery() {
  return (
    <WrapLayout>
      <AuthenticationLayout>
        <PasswordRecoveryAmplify />
      </AuthenticationLayout>
    </WrapLayout>
  );
}


```
```typescript:src/pages/auth/login.tsx
import React from "react";
import "../../../configureAmplify";
import AuthenticationLayout from "../../components/layout/AuthenticationLayout";
import LoginAmplify from "../../components/authentication/login/LoginAmplify";

import { IntlProvider } from "react-intl";
import useSettings from "../../hooks/useSettings";

export const WrapLayout = ({ children }) => {
  const { settings } = useSettings();
  const i18nMessages = require(`../../data/messages/${settings.lang}`);
  return (
    <IntlProvider
      locale={settings.lang}
      messages={i18nMessages}
      textComponent={React.Fragment}
    >
      {children}
    </IntlProvider>
  );
};

export default function Login() {
  return (
    <WrapLayout>
      <AuthenticationLayout>
        <LoginAmplify />
      </AuthenticationLayout>
    </WrapLayout>
  );
}


```
```typescript:src/pages/auth/reset.tsx
import React from "react";
import "../../../configureAmplify";
import AuthenticationLayout from "../../components/layout/AuthenticationLayout";
import PasswordResetAmplify from "../../components/authentication/password-reset/PasswordResetAmplify";
import { IntlProvider } from "react-intl";
import useSettings from "../../hooks/useSettings";

export const WrapLayout = ({ children }) => {
  const { settings } = useSettings();
  const i18nMessages = require(`../../data/messages/${settings.lang}`);
  return (
    <IntlProvider
      locale={settings.lang}
      messages={i18nMessages}
      textComponent={React.Fragment}
    >
      {children}
    </IntlProvider>
  );
};
export default function Reset() {
  return (
    <WrapLayout>
      <AuthenticationLayout>
        <PasswordResetAmplify />
      </AuthenticationLayout>
    </WrapLayout>
  );
}


```
```typescript:src/pages/auth/verify.tsx
import React from "react";
import "../../../configureAmplify";
import AuthenticationLayout from "../../components/layout/AuthenticationLayout";
import VerifyCodeAmplify from "../../components/authentication/verify-code/VerifyCodeAmplify";
import { IntlProvider } from "react-intl";
import useSettings from "../../hooks/useSettings";

export const WrapLayout = ({ children }) => {
  const { settings } = useSettings();
  const i18nMessages = require(`../../data/messages/${settings.lang}`);
  return (
    <IntlProvider
      locale={settings.lang}
      messages={i18nMessages}
      textComponent={React.Fragment}
    >
      {children}
    </IntlProvider>
  );
};
export default function Verify() {
  return (
    <WrapLayout>
      <AuthenticationLayout>
        <VerifyCodeAmplify />
      </AuthenticationLayout>
    </WrapLayout>
  );
}


```
```typescript:src/pages/auth/register.tsx
import React from "react";
import "../../../configureAmplify";
import AuthenticationLayout from "../../components/layout/AuthenticationLayout";
import RegisterAmplify from "../../components/authentication/register/RegisterAmplify";
import { IntlProvider } from "react-intl";
import useSettings from "../../hooks/useSettings";

export const WrapLayout = ({ children }) => {
  const { settings } = useSettings();
  const i18nMessages = require(`../../data/messages/${settings.lang}`);
  return (
    <IntlProvider
      locale={settings.lang}
      messages={i18nMessages}
      textComponent={React.Fragment}
    >
      {children}
    </IntlProvider>
  );
};
export default function Register() {
  return (
    <WrapLayout>
      <AuthenticationLayout>
        <RegisterAmplify />
      </AuthenticationLayout>
    </WrapLayout>
  );
}


```
```typescript:src/pages/404.tsx
import React, { useEffect, useState } from "react";
import AuthenticationLayout from "../components/layout/AuthenticationLayout";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Container from "@mui/material/Container";

import { IntlProvider } from "react-intl";
import useSettings from "../hooks/useSettings";

export const WrapLayout = ({ children }) => {
  const { settings } = useSettings();
  const i18nMessages = require(`../data/messages/${settings.lang}`);
  return (
    <IntlProvider
      locale={settings.lang}
      messages={i18nMessages}
      textComponent={React.Fragment}
    >
      {children}
    </IntlProvider>
  );
};

const PageStatus = () => {
  const [isMount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!isMount) {
    return <div>loading</div>;
  }

  return <div>Page Not Found</div>;
};

const NotFoundPage = ({ children }) => {
  return (
    <WrapLayout>
      <AuthenticationLayout>
        {!children && (
          <Container>
            <PageStatus />
          </Container>
        )}

        {children}
      </AuthenticationLayout>
    </WrapLayout>
  );
};

NotFoundPage.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default NotFoundPage;

export const pageQuery = graphql`
  query NotFoundPageQuery {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
    allArticlesJson(filter: { title: { eq: "home" } }) {
      edges {
        node {
          articles {
            en
            zh
            es
            de
            ja
            fr
            pt
            ko
            ar
            it
            hi
            id
            vi
            tr
            th
            pl
            sv
            no
            da
            fi
            nl
            ru
            cs
            ha
          }
        }
      }
    }
    markdownRemark {
      html
      frontmatter {
        id
        title
      }
      fields {
        slug
      }
    }
  }
`;


```
```plaintext:src/pages/guides/2025/images/none-verbal.png
```typescript:src/pages/index.tsx
import React from "react";
import { graphql, navigate, withPrefix } from "gatsby";
import getUserLangKey from "../langfile/getUserLangKey";
import useSettings from "../hooks/useSettings";

const RedirectIndex = ({ data }) => {
  const { settings } = useSettings();

  // Skip build, Browsers only
  if (typeof window !== "undefined") {
    const { langs, defaultLangKey } = data.site.siteMetadata.languages;
    const langKey = getUserLangKey(langs, defaultLangKey);
    if (settings.lang === langKey) {
      const homeUrl = withPrefix(`/${langKey}/`);
      navigate(homeUrl);
    } else {
      const homeLanguage = withPrefix(`/${settings.lang}/`);
      navigate(homeLanguage);
    }
  }
  return <div />;
};

export default RedirectIndex;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
  }
`;


```
```plaintext:src/pages/legal/images/terms.png
```typescript:src/pages/test.tsx
import React, { useState } from 'react';

function AppGrammar() {
  const [correctSentence, setCorrectSentence] = useState('');
  const [incorrectSentence, setIncorrectSentence] = useState('');
  const [displaySentence, setDisplaySentence] = useState([]);

  const compareSentences = () => {
    const correctWords = correctSentence.split(' ');
    const incorrectWords = incorrectSentence.split(' ');

    const maxLength = Math.max(correctWords.length, incorrectWords.length);
    const comparison = [];

    for (let i = 0; i < maxLength; i++) {
      if (incorrectWords[i] !== correctWords[i]) {
        comparison.push({
          word: incorrectWords[i] || '',
          correctWord: correctWords[i] || '',
          isIncorrect: true,
        });
      } else {
        comparison.push({
          word: incorrectWords[i] || '',
          correctWord: correctWords[i] || '',
          isIncorrect: false,
        });
      }
    }

    setDisplaySentence(comparison);
  };

  const handleWordClick = (index) => {
    const newDisplaySentence = [...displaySentence];
    newDisplaySentence[index].word = newDisplaySentence[index].correctWord;
    newDisplaySentence[index].isIncorrect = false;
    setDisplaySentence(newDisplaySentence);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Sentence Correction AppGrammar</h2>
      <div>
        <label>
          Correct Sentence:
          <br />
          <input
            type="text"
            value={correctSentence}
            onChange={(e) => setCorrectSentence(e.target.value)}
            style={{ width: '100%', marginBottom: '10px' }}
          />
        </label>
      </div>
      <div>
        <label>
          Incorrect Sentence:
          <br />
          <input
            type="text"
            value={incorrectSentence}
            onChange={(e) => setIncorrectSentence(e.target.value)}
            style={{ width: '100%', marginBottom: '10px' }}
          />
        </label>
      </div>
      <button onClick={compareSentences}>Compare Sentences</button>
      <div style={{ marginTop: '20px' }}>
        {displaySentence.map((item, index) => (
          <span
            key={index}
            onClick={() => item.isIncorrect && handleWordClick(index)}
            style={{
              textDecoration: item.isIncorrect ? 'line-through' : 'none',
              cursor: item.isIncorrect ? 'pointer' : 'default',
              color: item.isIncorrect ? 'red' : 'black',
              marginRight: '5px',
            }}
            title={
              item.isIncorrect ? `Click to replace with "${item.correctWord}"` : ''
            }
          >
            {item.word}
          </span>
        ))}
      </div>
    </div>
  );
}

export default AppGrammar;


```
```typescript:src/slices/counter.tsx
import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = slice.actions;

export const { reducer } = slice;

export default slice;


```
```typescript:src/slices/editorParams.tsx
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Location as slateLocation, Path } from "slate";
import type { AppThunk } from "../store";

export interface typedEditorParams {
  selectedTextValue: string;
  selectedRange: any;
  selectionStatus: any;
  currentWordRange: slateLocation | boolean;
  commandCompatiblePointWords: any;
}

const initialState: typedEditorParams = {
  selectedTextValue: "",
  selectedRange: null,
  selectionStatus: false,
  currentWordRange: false,
  commandCompatiblePointWords: null,
};

const slice = createSlice({
  name: "editorParams",
  initialState,
  reducers: {
    updateSelectedText: (
      state: typedEditorParams,
      action: PayloadAction<string>
    ) => {
      const updatedObject = {
        ...state,
        selectedTextValue: action.payload,
      };
      return updatedObject;
    },
    updateSelectedRange: (
      state: typedEditorParams,
      action: PayloadAction<string>
    ) => {
      const updatedObject = {
        ...state,
        selectedRange: action.payload,
      };
      return updatedObject;
    },
    updateSelectionStatus: (
      state: typedEditorParams,
      action: PayloadAction<string>
    ) => {
      const updatedObject = {
        ...state,
        selectionStatus: action.payload,
      };
      return updatedObject;
    },

    setCurrentWordRange: (
      state: typedEditorParams,
      action: PayloadAction<slateLocation>
    ) => {
      const updatedObject = {
        ...state,
        currentWordRange: action.payload,
      };
      return updatedObject;
    },
    updateCommandPointWords: (
      state: typedEditorParams,
      action: PayloadAction<string>
    ) => {
      const updatedObject = {
        ...state,
        commandCompatiblePointWords: action.payload,
      };
      return updatedObject;
    },
  },
});

export const { reducer } = slice;

export const updateSelectedText =
  (x): AppThunk =>
  async (dispatch): Promise<void> => {
    dispatch(slice.actions.updateSelectedText(x));
  };

export const updateSelectedRange =
  (x): AppThunk =>
  async (dispatch): Promise<void> => {
    dispatch(slice.actions.updateSelectedRange(x));
  };

export const updateSelectionStatus =
  (x): AppThunk =>
  async (dispatch): Promise<void> => {
    dispatch(slice.actions.updateSelectionStatus(x));
  };

export const setCurrentWordRange =
  (x): AppThunk =>
  async (dispatch): Promise<void> => {
    dispatch(slice.actions.setCurrentWordRange(x));
  };

export const updateCommandPointWords =
  (x): AppThunk =>
  async (dispatch): Promise<void> => {
    dispatch(slice.actions.updateCommandPointWords(x));
  };

export default slice;


```
```typescript:src/slices/chat.tsx
import { createSlice } from '@reduxjs/toolkit';
import axios from '../lib/axios';
import objFromArray from '../utils/objFromArray';

const initialState = {
  activeThreadId: null,
  contacts: {
    byId: {},
    allIds: []
  },
  threads: {
    byId: {},
    allIds: []
  },
  participants: [],
  recipients: []
};

const slice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    getContacts(state, action) {
      const { contacts } = action.payload;

      state.contacts.byId = objFromArray(contacts);
      state.contacts.allIds = Object.keys(state.contacts.byId);
    },
    getThreads(state, action) {
      const { threads } = action.payload;

      state.threads.byId = objFromArray(threads);
      state.threads.allIds = Object.keys(state.threads.byId);
    },
    getThread(state, action) {
      const { thread } = action.payload;

      if (thread) {
        state.threads.byId[thread.id] = thread;
        state.activeThreadId = thread.id;

        if (!state.threads.allIds.includes(thread.id)) {
          state.threads.allIds.push(thread.id);
        }
      } else {
        state.activeThreadId = null;
      }
    },
    markThreadAsSeen(state, action) {
      const { threadId } = action.payload;
      const thread = state.threads.byId[threadId];

      if (thread) {
        thread.unreadCount = 0;
      }
    },
    resetActiveThread(state) {
      state.activeThreadId = null;
    },
    getParticipants(state, action) {
      const { participants } = action.payload;

      state.participants = participants;
    },
    addRecipient(state, action) {
      const { recipient } = action.payload;
      const exists = state.recipients.find((_recipient) => _recipient.id === recipient.id);

      if (!exists) {
        state.recipients.push(recipient);
      }
    },
    removeRecipient(state, action) {
      const { recipientId } = action.payload;

      state.recipients = state.recipients.filter((recipient) => recipient.id !== recipientId);
    }
  }
});

export const { reducer } = slice;

export const getContacts = () => async (dispatch) => {
  const response = await axios.get('/api/chat/contacts');

  dispatch(slice.actions.getContacts(response.data));
};

export const getThreads = () => async (dispatch) => {
  const response = await axios.get('/api/chat/threads');

  dispatch(slice.actions.getThreads(response.data));
};

export const getThread = (threadKey) => async (dispatch) => {
  const response = await axios.get('/api/chat/thread', {
    params: {
      threadKey
    }
  });

  dispatch(slice.actions.getThread(response.data));
};

export const markThreadAsSeen = (threadId) => async (dispatch) => {
  await axios.get('/api/chat/thread/mark-as-seen', {
    params: {
      threadId
    }
  });

  dispatch(slice.actions.markThreadAsSeen({ threadId }));
};

export const resetActiveThread = () => (dispatch) => {
  dispatch(slice.actions.resetActiveThread());
};

export const getParticipants = (threadKey) => async (dispatch) => {
  const response = await axios.get('/api/chat/participants', {
    params: {
      threadKey
    }
  });

  dispatch(slice.actions.getParticipants(response.data));
};

export const addRecipient = (recipient) => (dispatch) => {
  dispatch(slice.actions.addRecipient({ recipient }));
};

export const removeRecipient = (recipientId) => (dispatch) => {
  dispatch(slice.actions.removeRecipient({ recipientId }));
};

export default slice;


```
```typescript:src/slices/fieldsValue.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import countries from "components/account/countries";
import { AppThunk } from "store";
import { typedFieldsValue, languageTyped, initialState } from "./sliceTypes";

const slice = createSlice({
  name: "fieldsValue",
  initialState,
  reducers: {
    updateKeywordValue: (
      state: typedFieldsValue,
      action: PayloadAction<string>
    ) => {
      const updatedObject = {
        ...state,
        keywordValue: action.payload,
      };
      return updatedObject;
    },
    updateAudienceValue: (
      state: typedFieldsValue,
      action: PayloadAction<string>
    ) => {
      const updatedObject = {
        ...state,
        audienceValue: action.payload,
      };
      return updatedObject;
    },
    updateBusinessNameValue: (
      state: typedFieldsValue,
      action: PayloadAction<string>
    ) => {
      const updatedObject = {
        ...state,
        businessNameValue: action.payload,
      };
      return updatedObject;
    },
    updateFeatureValue: (
      state: typedFieldsValue,
      action: PayloadAction<string>
    ) => {
      const updatedObject = {
        ...state,
        featureValue: action.payload,
      };
      return updatedObject;
    },
    updateToneOfVoiceValue: (
      state: typedFieldsValue,
      action: PayloadAction<string>
    ) => {
      const updatedObject = {
        ...state,
        defaultVoice: action.payload,
      };
      return updatedObject;
    },
    updateDefaultLanguage: (
      state: typedFieldsValue,
      action: PayloadAction<string>
    ) => {
      const { LangCode }: any = action.payload;
      const updatedObject = {
        ...state,
        language: countries.find((e) => e.LangCode === LangCode),
      };
      return updatedObject;
    },
    updatePurposeValue: (
      state: typedFieldsValue,
      action: PayloadAction<string>
    ) => {
      const updatedObject = {
        ...state,
        purposeValue: action.payload,
      };
      return updatedObject;
    },
    updateMissionValue: (
      state: typedFieldsValue,
      action: PayloadAction<string>
    ) => {
      const updatedObject = {
        ...state,
        missionValue: action.payload,
      };
      return updatedObject;
    },

    updateFormValue: (
      state: typedFieldsValue,
      action: PayloadAction<string>
    ) => {
      const updatedObject = {
        ...state,
        formValue: action.payload,
      };
      return updatedObject;
    },

    updateSuffix: (state: typedFieldsValue, action: PayloadAction<string>) => {
      const updatedObject = {
        ...state,
        suffix: action.payload,
      };
      return updatedObject;
    },
    updateMaxTokens: (
      state: typedFieldsValue,
      action: PayloadAction<number>
    ) => {
      const updatedObject = {
        ...state,
        maxTokens: action.payload,
      };
      return updatedObject;
    },
    updateTemperature: (
      state: typedFieldsValue,
      action: PayloadAction<number>
    ) => {
      const updatedObject = {
        ...state,
        temperature: action.payload,
      };
      return updatedObject;
    },
    updatePresencePenalty: (
      state: typedFieldsValue,
      action: PayloadAction<number>
    ) => {
      const updatedObject = {
        ...state,
        presencePenalty: action.payload,
      };
      return updatedObject;
    },
    updateFrequencyPenalty: (
      state: typedFieldsValue,
      action: PayloadAction<number>
    ) => {
      const updatedObject = {
        ...state,
        frequencyPenalty: action.payload,
      };
      return updatedObject;
    },
    updateEngineId: (
      state: typedFieldsValue,
      action: PayloadAction<number>
    ) => {
      const updatedObject = {
        ...state,
        engineId: action.payload,
      };
      return updatedObject;
    },
    updateLoadFromUrl: (
      state: typedFieldsValue,
      action: PayloadAction<number>
    ) => {
      const updatedObject = {
        ...state,
        loadFromUrl: action.payload,
      };
      return updatedObject;
    },
    updateOutputShape: (
      state: typedFieldsValue,
      action: PayloadAction<string>
    ) => {
      const updatedObject = {
        ...state,
        outputShape: action.payload,
      };
      return updatedObject;
    },
  },
});

export const { reducer } = slice;

export const updateKeywordValue =
  (x): AppThunk =>
    async (dispatch): Promise<void> => {
      dispatch(slice.actions.updateKeywordValue(x));
    };

export const updateAudienceValue =
  (x): AppThunk =>
    async (dispatch): Promise<void> => {
      dispatch(slice.actions.updateAudienceValue(x));
    };
export const updateBusinessNameValue =
  (x): AppThunk =>
    async (dispatch): Promise<void> => {
      dispatch(slice.actions.updateBusinessNameValue(x));
    };
export const updateFeatureValue =
  (x): AppThunk =>
    async (dispatch): Promise<void> => {
      dispatch(slice.actions.updateFeatureValue(x));
    };
export const updateFormValue =
  (x): AppThunk =>
    async (dispatch): Promise<void> => {
      dispatch(slice.actions.updateFormValue(x));
    };
export const updateMissionValue =
  (x): AppThunk =>
    async (dispatch): Promise<void> => {
      dispatch(slice.actions.updateMissionValue(x));
    };
export const updatePurposeValue =
  (x): AppThunk =>
    async (dispatch): Promise<void> => {
      dispatch(slice.actions.updatePurposeValue(x));
    };

export const updateToneOfVoiceValue =
  (x): AppThunk =>
    async (dispatch): Promise<void> => {
      dispatch(slice.actions.updateToneOfVoiceValue(x));
    };

export const updateDefaultLanguage =
  (x: string): AppThunk =>
    async (dispatch): Promise<void> => {
      dispatch(slice.actions.updateDefaultLanguage(x));
    };

export const updateSuffix =
  (x): AppThunk =>
    async (dispatch): Promise<void> => {
      dispatch(slice.actions.updateSuffix(x));
    };

export const updateMaxTokens =
  (x): AppThunk =>
    async (dispatch): Promise<void> => {
      dispatch(slice.actions.updateMaxTokens(x));
    };

export const updateTemperature =
  (x): AppThunk =>
    async (dispatch): Promise<void> => {
      dispatch(slice.actions.updateTemperature(x));
    };

export const updatePresencePenalty =
  (x): AppThunk =>
    async (dispatch): Promise<void> => {
      dispatch(slice.actions.updatePresencePenalty(x));
    };

export const updateFrequencyPenalty =
  (x): AppThunk =>
    async (dispatch): Promise<void> => {
      dispatch(slice.actions.updateFrequencyPenalty(x));
    };

export const updateEngineId =
  (x): AppThunk =>
    async (dispatch): Promise<void> => {
      dispatch(slice.actions.updateEngineId(x));
    };

export const updateOutputShape =
  (x): AppThunk =>
    async (dispatch): Promise<void> => {
      dispatch(slice.actions.updateOutputShape(x));
    };
export const updateLoadFromUrl =
  (x): AppThunk =>
    async (dispatch): Promise<void> => {
      dispatch(slice.actions.updateLoadFromUrl(x));
    };


```
```typescript:src/slices/sliceTypes.ts
import Voices from "../components/subcomponents/Voices";

export interface languageTyped {
  code: string;
  label: string;
  LangCode: string;
}

export interface typedFieldsValue {
  keywordValue?: string;
  audienceValue?: string;
  businessNameValue?: string;
  formTypeValue?: boolean;
  purposeValue?: string;
  missionValue?: string;
  companyValue?: string;
  featureValue?: string;
  outputShape: string;
  defaultVoice?: any;
  language?: languageTyped;
  suffix?: string;
  maxTokens?: number | null;
  temperature?: number | null;
  presencePenalty?: number | null;
  frequencyPenalty?: number | null;
  engineId?: number | null;
  loadFromUrl?: any;
}

export const initialState: typedFieldsValue = {
  keywordValue: "",
  suffix: "",
  engineId: null,
  maxTokens: null,
  temperature: null,
  presencePenalty: null,
  frequencyPenalty: null,
  loadFromUrl: "",
  audienceValue: "",
  businessNameValue: "",
  featureValue: "",
  outputShape: "questions",
  purposeValue: "",
  missionValue: "",
  companyValue: "",
  defaultVoice: Voices.slice(1, 3),
  language: { code: "US", label: "English", LangCode: "en" },
};


```
```typescript:src/slices/ui-states.tsx
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface typedExpansion {
  expand: boolean;
}

const initialState: typedExpansion = {
  expand: true,
};

const slice = createSlice({
  name: "uiStates",
  initialState,
  reducers: {
    updateExpansion(state, action: PayloadAction<boolean>) {
      const updatedObject = {
        ...state,
        expand: action.payload,
      };
      return updatedObject;
    },
    updateHighlghted: (state, action: PayloadAction<string>) => {
      const updatedObject = {
        ...state,
        highlightedText: action.payload,
      };
      return updatedObject;
    },
  },
});

export const { reducer } = slice;

export const updateExpansion = (x) => async (dispatch) => {
  dispatch(slice.actions.updateExpansion(x));
};
export const updateHighlghted = (x) => async (dispatch) => {
  dispatch(slice.actions.updateHighlghted(x));
};

export default slice;


```
```typescript:src/slices/progress.tsx
import { createSlice, Dispatch } from "@reduxjs/toolkit";

export interface ProgressState {
  progressValue: number;
  status: number;
  lastId: string;
}

const initialState: ProgressState = {
  progressValue: 0,
  status: 0,
  lastId: "none",
};

const slice = createSlice({
  name: "progressValue",
  initialState,
  reducers: {
    updateProgressValue: (state, action) => {
      const updatedObject = {
        ...state,
        progressValue: action.payload,
      };
      return updatedObject;
    },
    updateLastId: (state, action) => {
      const updatedObject = {
        ...state,
        lastId: action.payload,
      };
      return updatedObject;
    },
  },
});

export const { reducer } = slice;

export const updateProgressValue = (x: number) => async (dispatch: Dispatch) => {
  dispatch(slice.actions.updateProgressValue(x));
};

export const updateLastId = (x: any) => async (dispatch: Dispatch) => {
  dispatch(slice.actions.updateLastId(x));
};

export default slice;


```
```javascript:src/data/menuTree.js
module.exports = {
  services: ["account", "konto"],
  blog: ["blog", "blogg"],
};


// "Brand Identity developer"
// BrandIdentityDeveloper01: "Brand Identity developer",
//   ---
//   "Quickly write compelling copy to make your products and services stand out"
// ProductDesignStrategy01: "Brand Mission Statement",
//   ---
//   "Design the perfect product description in minutes instead of hours"
// DesigningProductDescription01: "Design the perfect product description in minutes instead of hours"
// ---



// regex to capture the key of an object
const object = {

}

```
```javascript:src/data/languages.js
module.exports = {
  langs: ["en", 'sv', 'no', 'da', "fi"],
  defaultLangKey: "en",
};


```
```plaintext:src/img/logo/mstile-150x150.png
```plaintext:src/img/logo/apple-touch-icon.png
```plaintext:src/img/logo/favicon-32x32.png
```plaintext:src/img/logo/android-chrome-512x512.png
```plaintext:src/img/logo/android-chrome-192x192.png
```plaintext:src/img/logo/site.webmanifest
{
    "name": "Maila",
    "short_name": "Maila",
    "icons": [
        {
            "src": "/android-chrome-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "/android-chrome-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
        }
    ],
    "theme_color": "#ffffff",
    "background_color": "#ffffff",
    "display": "standalone"
}


```
```plaintext:src/img/logo/browserconfig.xml
<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
    <msapplication>
        <tile>
            <square150x150logo src="/mstile-150x150.png"/>
            <TileColor>#2d89ef</TileColor>
        </tile>
    </msapplication>
</browserconfig>


```
```plaintext:src/img/logo/favicon-16x16.png
```plaintext:src/img/logo/favicon.ico
```typescript:src/hooks/useFetch2InsertSuffix.ts
import useFetchSuffix from "./useFetchSuffix";
import { updateLastId, updateProgressValue } from "../slices/progress";
import { BaseEditor, Editor, Transforms } from "slate";
import { ReactEditor } from "editable-slate-react";
import { Node as SlateNode } from "slate";
import { HistoryEditor } from "slate-history";
import { updateExpansion, updateHighlghted } from "slices/ui-states";

const extractText = (object: any) => {
  const newArray = [];
  for (let key in object) {
    if (key.includes("text")) {
      newArray.push(object[key]);
    }
  }
  return newArray;
};

const extractId = (object: any) => {
  const newArray = [];
  for (let key in object) {
    if (key.includes("Id")) {
      newArray.push(object[key]);
    }
  }
  return newArray[0];
};

/**
 * When user clicks on the tab, it will triger the api and
 * the auto-generated text will be inserted into the main editor
 *
 */

/* Following function would send the text to main editor */
const Content2Editor = (editor, content) => {
  editor.selection &&
    Transforms.insertText(editor, content, {
      at: editor.selection,
    });

  if (!editor.selection) {
    Transforms.insertText(editor, content, {
      at: Editor.end(editor, []),
    });

    Transforms.select(
      editor,
      editor.selection ? editor.selection : Editor.end(editor, [])
    );
  }
};

// fetching the data from the api and then inserting it into the editor itself at the selection
async function useFetch2InsertSuffix(
  dispatch: (arg0: {
    (dispatch: any): Promise<void>;
    (dispatch: any): Promise<void>;
  }) => void,
  enqueueSnackbar: (arg0: unknown) => any,
  editors: (BaseEditor & ReactEditor & HistoryEditor)[],
  gtoken: string,
  url: string,
  fieldValues: any
) {
  /** Get the text before the cursor (editor selection) */
  const beforeEditor = Editor.fragment(editors[0], {
    anchor: { path: [0, 0], offset: 0 },
    focus: editors[0].selection.focus,
  })
    .map((x) => SlateNode.string(x))
    .join("\n");
  /** Get the text at the end of the editor */
  const endPointEditor = Editor.end(editors[0], []);
  /** Get the text after the cursor */
  const afterEditor = Editor.fragment(editors[0], {
    anchor: editors[0].selection.focus,
    focus: endPointEditor,
  })
    .map((x) => SlateNode.string(x))
    .join("\n");
  [];

  /** End: geting before selection and after selection */

  await useFetchSuffix(
    beforeEditor,
    afterEditor,
    gtoken,
    url,
    fieldValues
  ).then((data) => {
    if (data) {
      dispatch(updateProgressValue(50));
      let textOptions = extractText(data);
      dispatch(updateLastId(extractId(data)));
      let inx = 0;
      textOptions
        .filter((x: any) => x.search("404") != -1)
        .map((element) => enqueueSnackbar(element));
      textOptions
        .filter((x: any) => x.search("404") == -1)
        .map((text: string, index) => {
          if (text.length > 3 && inx == 0) {
            // inserting the first text into the main editor
            Content2Editor(editors[0], text);
            inx = 1;
            // highlighting the first text in the main editor
            dispatch(updateHighlghted(text));
          }
          Transforms.insertText(editors[index + 1], text, { at: [0] });
        });

      dispatch(updateExpansion(true));
      dispatch(updateProgressValue(100));
      ReactEditor.focus(editors[0]);
      Transforms.select(
        editors[0],
        editors[0].selection ? editors[0].selection : Editor.end(editors[0], [])
      );
    } else {
      enqueueSnackbar("Something went wrong, please try again");
      Transforms.insertText(
        editors[1],
        data.message +
          "Something went wrong, please try again, if the problem persists please contact the support@maila.ai",
        { at: [0] }
      );
      dispatch(updateProgressValue(100));
    }
  });
}

export default useFetch2InsertSuffix;


```
```typescript:src/hooks/useFetchUrl2Insert.ts
import { updateLastId, updateProgressValue } from "../slices/progress";
import { BaseEditor, Editor, Transforms } from "slate";
import { ReactEditor } from "editable-slate-react";
import { HistoryEditor } from "slate-history";
import useFetchFromUrl from "./useFetchFromUrl";

const extractText = (object: any) => {
  const newArray = [];
  for (let key in object) {
    if (key.includes("text")) {
      newArray.push(object[key]);
    }
  }
  return newArray;
};

const extractId = (object: any) => {
  const newArray = [];
  for (let key in object) {
    if (key.includes("Id")) {
      newArray.push(object[key]);
    }
  }
  return newArray[0];
};

/**
 * When user clicks on the tab, it will triger the api and
 * the auto-generated text will be inserted into the main editor
 *
 */

/* Following function would send the text to main editor */
const Content2Editor = (editor, content) => {
  editor.selection &&
    Transforms.insertText(editor, content, {
      at: editor.selection,
    });

  if (!editor.selection) {
    Transforms.insertText(editor, content, {
      at: Editor.end(editor, []),
    });

    Transforms.select(
      editor,
      editor.selection ? editor.selection : Editor.end(editor, [])
    );
  }
};

// fetching the data from the api and then inserting it into the editor itself at the selection
async function useFetchUrl2Insert(
  dispatch: (arg0: {
    (dispatch: any): Promise<void>;
    (dispatch: any): Promise<void>;
  }) => void,
  enqueueSnackbar: (arg0: unknown) => any,
  editors: (BaseEditor & ReactEditor & HistoryEditor)[],
  gtoken: string,
  url: string,
  fieldValues: any
) {
  await useFetchFromUrl(url, fieldValues).then((data) => {
    if (data) {
      dispatch(updateProgressValue(50));
      dispatch(updateLastId(extractId(data)));
      let textOptions = extractText(data);
      let inx = 0;
      textOptions
        .filter((x: any) => x.search("404") != -1)
        .map((element) => enqueueSnackbar(element));
      textOptions
        .filter((x: any) => x.search("404") == -1)
        .map((text: string, index) => {
          // if (text.length > 3 && inx == 0) {
          //   // inserting the first text into the main editor
          //   Content2Editor(editors[0], text);
          //   inx = 1;
          //   // highlighting the first text in the main editor
          //   dispatch(updateHighlghted(text));
          // }
          Content2Editor(editors[0], text);
          // Transforms.insertText(editors[0], text, { at: [0] });
        });
      dispatch(updateProgressValue(100));
      ReactEditor.focus(editors[0]);
      Transforms.select(
        editors[0],
        editors[0].selection ? editors[0].selection : Editor.end(editors[0], [])
      );
    } else {
      enqueueSnackbar("Something went wrong, please try again");
      Transforms.insertText(
        editors[1],
        data.message +
          "Something went wrong, please try again, if the problem persists please contact the support@maila.ai",
        { at: [0] }
      );
      dispatch(updateProgressValue(100));
    }
  });
}

export default useFetchUrl2Insert;


```
```typescript:src/hooks/useFetchAll.ts
import React from "react";
import { Auth } from "aws-amplify";

const useFetchAll = async (
  parameters: string,
  gtoken: string,
  url: string,
  fieldValues
) => {
  try {
    const urlType = url;
    const element = `${parameters}`;
    const theUrl = `https://api.maila.ai/generate`;
    const params = {};
    const ListVoices = fieldValues.defaultVoice.map((x) => x.tone);
    const selectedVoices = ListVoices.join(",");
    params["query"] = element;
    params["finalLang"] = fieldValues.language.LangCode;
    params["grecaptcharesponse"] = gtoken;
    fieldValues.maxTokens
      ? (params["maxTokens"] = fieldValues.maxTokens)
      : null;
    fieldValues.presencePenalty
      ? (params["presencePenalty"] = fieldValues.presencePenalty)
      : null;
    fieldValues.temperature
      ? (params["temperature"] = fieldValues.temperature)
      : null;
    fieldValues.engineId ? (params["engineId"] = fieldValues.engineId) : null;
    fieldValues.frequencyPenalty
      ? (params["frequencyPenalty"] = fieldValues.frequencyPenalty)
      : null;
    fieldValues.featureValue
      ? (params["feature"] = fieldValues.featureValue)
      : null;
    fieldValues.keywordValue
      ? (params["keyword"] = fieldValues.keywordValue)
      : null;
    fieldValues.businessNameValue
      ? (params["company"] = fieldValues.businessNameValue) ||
        (params["company"] = fieldValues.companyValue)
      : null;
    fieldValues.companyValue
      ? (params["company"] = fieldValues.businessNameValue) ||
        (params["company"] = fieldValues.companyValue)
      : null;
    fieldValues.keywordValue
      ? (params["keyword"] = fieldValues.keywordValue)
      : null;
    fieldValues.outputShape
      ? (params["outputType"] = fieldValues.outputShape) ||
        (params["outputType"] = fieldValues.formValue)
      : null;
    fieldValues.missionValue
      ? (params["intent"] = fieldValues.missionValue) ||
        (params["intent"] = fieldValues.purposeValue)
      : null;
    fieldValues.purposeValue
      ? (params["mission"] = fieldValues.purposeValue) ||
        (params["mission"] = fieldValues.missionValue)
      : null;
    selectedVoices ? (params["tone"] = selectedVoices) : null;
    urlType ? (params["type"] = urlType) : null;
    const data = JSON.stringify(params);
    const response = await fetch(theUrl, {
      headers: {
        Authorization: `Bearer ${(await Auth.currentSession())
          .getIdToken()
          .getJwtToken()}`,
      },
      method: "POST",
      body: data,
    });
    const res = response.json();
    let rerurningData = res;
    return rerurningData;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default useFetchAll;


```
```typescript:src/hooks/useEditors.ts
import React, { useMemo } from "react";
import { withReact } from "editable-slate-react";
import { createEditor } from "slate";
import { withHistory } from "slate-history";

export const useEditors = () => {
  const editor1 = useMemo(() => withHistory(withReact(createEditor())), []);
  const editor2 = useMemo(() => withHistory(withReact(createEditor())), []);
  const editor3 = useMemo(() => withHistory(withReact(createEditor())), []);
  const editor4 = useMemo(() => withHistory(withReact(createEditor())), []);
  const editor5 = useMemo(() => withHistory(withReact(createEditor())), []);
  const editors = {
    editor1,
    editor2,
    editor3,
    editor4,
    editor5,
  };

  return editors;
};

export default useEditors;


```
```typescript:src/hooks/use-settings.ts
import { useContext } from "react";
import type { SettingsContextValue } from "../contexts/settings-context";
import { SettingsContext } from "../contexts/settings-context";

const useSettings = (): SettingsContextValue => useContext(SettingsContext);

export default useSettings;


```
```typescript:src/hooks/useFetchInsert.ts
import useFetchDataSelected from "./useFetchDataSelected";
import { updateLastId, updateProgressValue } from "../slices/progress";
import { BaseEditor, Editor, Transforms } from "slate";
import { ReactEditor } from "editable-slate-react";
import { Node as SlateNode } from "slate";
import { updateExpansion } from "../slices/ui-states";
import { HistoryEditor } from "slate-history";

const extractText = (object: any) => {
  const newArray = [];
  for (let key in object) {
    if (key.includes("text")) {
      newArray.push(object[key]);
    }
  }
  return newArray;
};

const extractId = (object: any) => {
  const newArray = [];
  for (let key in object) {
    if (key.includes("Id")) {
      newArray.push(object[key]);
    }
  }
  return newArray[0];
};
/* Following function would send the text to main editor 
text => main editor
*/
const Content2Editor = (
  editor: BaseEditor & ReactEditor & HistoryEditor,
  content: string
) => {
  editor.selection &&
    Transforms.insertText(editor, content, {
      at: editor.selection,
    });

  if (!editor.selection) {
    Transforms.insertText(editor, content, {
      at: Editor.end(editor, []),
    });

    Transforms.select(
      editor,
      editor.selection ? editor.selection : Editor.end(editor, [])
    );
  }
};

// fetching the data from the api and then inserting it into the different editors
async function useFetchInsert(
  dispatch,
  enqueueSnackbar,
  editors,
  gtoken,
  url,
  fieldValues,
  selectedStr
) {
  // Selected text of editor with /n
  const selectedTextValue =
    (editors[0].selection &&
      SlateNode.fragment(editors[0], editors[0].selection)
        .map((x) => SlateNode.string(x))
        .join("\n")) ||
    selectedStr;
  await useFetchDataSelected(selectedTextValue, gtoken, url, fieldValues).then(
    (data) => {
      if (data) {
        dispatch(updateProgressValue(50));
        dispatch(updateLastId(extractId(data)));
        let textOptions = extractText(data);
        textOptions
          .filter((x: any) => x.search("Error 404") != -1)
          .map((element) => enqueueSnackbar(element));
        textOptions
          .filter((x: any) => x.search("Error 404") == -1)
          .map((text: string, index) =>
            Transforms.insertText(editors[index + 1], text, { at: [0] })
          );
        dispatch(updateExpansion(true));
        dispatch(updateProgressValue(100));
        ReactEditor.focus(editors[0]);
        // Transforms.select(editors[0], Editor.end(editors[0], []));
        Transforms.select(
          editors[0],
          editors[0].selection
            ? editors[0].selection
            : Editor.end(editors[0], [])
        );
      } else {
        enqueueSnackbar("Something went wrong, Please try again", {
          variant: "error",
        });
        Transforms.insertText(
          editors[1],
          data.message +
            "Something went wrong, please try again, if the problem persists please contact the support@maila.ai",
          { at: [0] }
        );
        dispatch(updateProgressValue(100));
      }
    }
  );
}

export default useFetchInsert;


```
```typescript:src/hooks/prismjs.ts
import Prism from "prismjs";
import "prismjs/components/prism-python";
import "prismjs/components/prism-php";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-java";

Prism.languages.python = Prism.languages.extend("python", {});
Prism.languages.insertBefore("python", "prolog", {
  comment: { pattern: /##[^\n]*/, alias: "comment" },
});
Prism.languages.javascript = Prism.languages.extend("javascript", {});
Prism.languages.insertBefore("javascript", "prolog", {
  comment: { pattern: /\/\/[^\n]*/, alias: "comment" },
});
Prism.languages.html = Prism.languages.extend("html", {});
Prism.languages.insertBefore("html", "prolog", {
  comment: { pattern: /<!--[^\n]*-->/, alias: "comment" },
});
Prism.languages.markdown = Prism.languages.extend("markup", {});
Prism.languages.insertBefore("markdown", "prolog", {
  blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: "punctuation" },
  code: [
    { pattern: /^(?: {4}|\t).+/m, alias: "keyword" },
    { pattern: /``.+?``|`[^`\n]+`/, alias: "keyword" },
  ],
  title: [
    {
      pattern: /\w+.*(?:\r?\n|\r)(?:==+|--+)/,
      alias: "important",
      inside: { punctuation: /==+$|--+$/ },
    },
    {
      pattern: /(^\s*)#+.+/m,
      lookbehind: !0,
      alias: "important",
      inside: { punctuation: /^#+|#+$/ },
    },
  ],
  hr: {
    pattern: /(^\s*)([*-])([\t ]*\2){2,}(?=\s*$)/m,
    lookbehind: !0,
    alias: "punctuation",
  },
  list: {
    pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
    lookbehind: !0,
    alias: "punctuation",
  },
  "url-reference": {
    pattern:
      /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
    inside: {
      variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
      string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
      punctuation: /^[\[\]!:]|[<>]/,
    },
    alias: "url",
  },
  bold: {
    pattern: /(^|[^\\])(\*\*|__)(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
    lookbehind: !0,
    inside: { punctuation: /^\*\*|^__|\*\*$|__$/ },
  },
  italic: {
    pattern: /(^|[^\\])([*_])(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
    lookbehind: !0,
    inside: { punctuation: /^[*_]|[*_]$/ },
  },
  url: {
    pattern:
      /!?\[[^\]]+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[[^\]\n]*\])/,
    inside: {
      variable: { pattern: /(!?\[)[^\]]+(?=\]$)/, lookbehind: !0 },
      string: { pattern: /"(?:\\.|[^"\\])*"(?=\)$)/ },
    },
  },
});
Prism.languages.markdown.bold.inside.url = Prism.util.clone(
  Prism.languages.markdown.url
);
Prism.languages.markdown.italic.inside.url = Prism.util.clone(
  Prism.languages.markdown.url
);
Prism.languages.markdown.bold.inside.italic = Prism.util.clone(
  Prism.languages.markdown.italic
);
Prism.languages.markdown.italic.inside.bold = Prism.util.clone(Prism.languages.markdown.bold); // prettier-ignore

export default Prism;


```
```typescript:src/hooks/useIsMountedRef.ts
import { useEffect, useRef } from 'react';

const useIsMountedRef = () => {
  const isMounted = useRef(true);

  useEffect(() => () => {
    isMounted.current = false;
  }, []);

  return isMounted;
};

export default useIsMountedRef;


```
```typescript:src/hooks/UseCompletionSuffix.ts
import useFetchSuffix from "./useFetchSuffix";
import { updateLastId, updateProgressValue } from "../slices/progress";
import { BaseEditor, Editor, Transforms } from "slate";
import { ReactEditor } from "editable-slate-react";
import { Node as SlateNode } from "slate";
import { HistoryEditor } from "slate-history";
import React from "react";
import { updateExpansion } from "slices/ui-states";

const extractId = (object: any) => {
  const newArray = [];
  for (let key in object) {
    if (key.includes("Id")) {
      newArray.push(object[key]);
    }
  }
  return newArray[0];
};

const extractText = (object: any) => {
  const newArray = [];
  for (let key in object) {
    if (key.includes("text")) {
      newArray.push(object[key]);
    }
  }
  return newArray;
};

//fetching the data from the api and then inserting it into the editor itself at the selection
async function UseCompletionSuffix(
  dispatch: (arg0: {
    (dispatch: any): Promise<void>;
    (dispatch: any): Promise<void>;
  }) => void,
  enqueueSnackbar: (arg0: unknown) => any,
  editors: (BaseEditor & ReactEditor & HistoryEditor)[],
  gtoken: string,
  url: string,
  fieldValues: any
) {
  /** Get the text before the cursor (editor selection) */
  const beforeEditor = Editor.fragment(editors[0], {
    anchor: { path: [0, 0], offset: 0 },
    focus: editors[0].selection.focus,
  })
    .map((x) => SlateNode.string(x))
    .join("\n");
  /** Get the text at the end of the editor */
  const endPointEditor = Editor.end(editors[0], []);
  /** Get the text after the cursor */
  const afterEditor = Editor.fragment(editors[0], {
    anchor: editors[0].selection.focus,
    focus: endPointEditor,
  })
    .map((x) => SlateNode.string(x))
    .join("\n");

  /** End: geting before selection and after selection */

  await useFetchSuffix(
    beforeEditor,
    afterEditor,
    gtoken,
    url,
    fieldValues
  ).then((data) => {
    if (data) {
      dispatch(updateProgressValue(50));
      dispatch(updateLastId(extractId(data)));
      let textOptions = extractText(data);
      console.log(textOptions);
      textOptions
        .filter((x: any) => x.search("Error 4043") != -1)
        .map((element) => enqueueSnackbar(element));
      textOptions
        .filter((x: any) => x.search("Error 4043") == -1)
        .map((text, index) =>
          Transforms.insertText(editors[index + 1], text, { at: [0] })
        );
      dispatch(updateExpansion(true));
      dispatch(updateProgressValue(100));
      ReactEditor.focus(editors[0]);
      Transforms.select(
        editors[0],
        editors[0].selection ? editors[0].selection : Editor.end(editors[0], [])
      );
    } else {
      enqueueSnackbar(
        "Something went wrong, please try again, if the problem persists please contact the support@maila.ai"
      );
      Transforms.insertText(
        editors[1],
        data.message +
          "Something went wrong, please try again, if the problem persists please contact the support@maila.ai",
        { at: [0] }
      );
      dispatch(updateProgressValue(100));
    }
  });
}

export default UseCompletionSuffix;


```
```typescript:src/hooks/useToolsPathes.ts
import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export const useToolsPathes = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query UseToolPaths {
        allMarkdownRemark(
          filter: {
            frontmatter: {
              templateKey: { eq: "tools-body" }
              lang: { eq: "en" }
            }
          }
        ) {
          edges {
            node {
              frontmatter {
                title
                url
              }
            }
          }
        }
      }
    `
  );
  return allMarkdownRemark.edges;
};

export default useToolsPathes;


```
```typescript:src/hooks/useFetchDataSelected.ts
import React from "react";
import { Auth } from "aws-amplify";
// Fetch data from API
const useFetchDataSelected = async (
  parameters: string,
  gtoken: string,
  url: string,
  fieldValues: any
) => {
  try {
    const urlType = url;
    const element = `${parameters}`;
    const theUrl = `https://api.maila.ai/generate`;
    const params = {};
    const ListVoices = fieldValues.defaultVoice.map((x) => x.tone);
    const selectedVoices = ListVoices.join(",");
    params["query"] = element;
    params["finalLang"] = fieldValues.language.LangCode;
    params["grecaptcharesponse"] = gtoken;
    fieldValues.maxTokens
      ? (params["maxTokens"] = fieldValues.maxTokens)
      : null;
    fieldValues.presencePenalty
      ? (params["presencePenalty"] = fieldValues.presencePenalty)
      : null;
    fieldValues.temperature
      ? (params["temperature"] = fieldValues.temperature)
      : null;
    fieldValues.frequencyPenalty
      ? (params["frequencyPenalty"] = fieldValues.frequencyPenalty)
      : null;
    fieldValues.company
      ? (params["company"] = fieldValues.businessNameValue) ||
        (params["company"] = fieldValues.companyValue)
      : null;
    fieldValues.keywordValue
      ? (params["keyword"] = fieldValues.keywordValue)
      : null;
    fieldValues.outputShape
      ? (params["outputType"] = fieldValues.outputShape) ||
        (params["outputType"] = fieldValues.formValue)
      : null;
    fieldValues.missionValue
      ? (params["intent"] = fieldValues.missionValue) ||
        (params["intent"] = fieldValues.purposeValue)
      : null;
    fieldValues.purposeValue
      ? (params["mission"] = fieldValues.purposeValue) ||
        (params["mission"] = fieldValues.missionValue)
      : null;
    selectedVoices ? (params["tone"] = selectedVoices) : null;
    urlType ? (params["type"] = urlType) : null;
    const data = JSON.stringify(params);
    const response = await fetch(theUrl, {
      headers: {
        Authorization: `Bearer ${(await Auth.currentSession())
          .getIdToken()
          .getJwtToken()}`,
      },
      method: "POST",
      body: data,
    });
    const res = response.json();
    let rerurningData = res;
    return rerurningData;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default useFetchDataSelected;


```
```typescript:src/hooks/useToolsProducts.ts
import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export const useToolsProducts = () => {
  const lang = useStaticQuery(
    graphql`
      query UseProducts {
        en: allMarkdownRemark(
          filter: {
            frontmatter: {
              templateKey: { eq: "tools-body" }
              lang: { eq: "en" }
            }
          }
        ) {
          edges {
            node {
              frontmatter {
                title
                description
                header
                usage
                id
                placeholder
                help_hint
                tags
                date
                tone
                hasCustomTemplate
                hasCustomTextArea
                editor_height
               
                extraFields {
                  company {
                    name
                    id
                    label
                    type
                    placeholder
                  }
                  purpose {
                    name
                    id
                    label
                    type
                    placeholder
                  }
                  mission {
                    name
                    id
                    label
                    type
                    placeholder
                  }
                  outputType {
                    name
                    id
                    label
                    type
                    options
                    placeholder
                  }
                  features {
                    name
                    id
                    label
                    type
                    placeholder
                  }
                  keywords {
                    name
                    id
                    label
                    type
                    placeholder
                  }
                }
                slug
                lang
                product_type
                url
                jsonId
                icon
              }
            }
          }
        }
        sv: allMarkdownRemark(
          filter: {
            frontmatter: {
              templateKey: { eq: "tools-body" }
              lang: { eq: "sv" }
            }
          }
        ) {
          edges {
            node {
              frontmatter {
                title
                description
                header
                usage
                id
                placeholder
                help_hint
                tags
                date
                tone
                hasCustomTemplate
                hasCustomTextArea
                editor_height
               
                extraFields {
                  company {
                    name
                    id
                    label
                    type
                    placeholder
                  }
                  purpose {
                    name
                    id
                    label
                    type
                    placeholder
                  }
                  mission {
                    name
                    id
                    label
                    type
                    placeholder
                  }
                  features {
                    name
                    id
                    label
                    type
                    placeholder
                  }
                  keywords {
                    name
                    id
                    label
                    type
                    placeholder
                  }
                  outputType {
                    name
                    id
                    label
                    type
                    options
                    placeholder
                  }
                }
                slug
                lang
                product_type
                url
                jsonId
                icon
              }
            }
          }
        }
        da: allMarkdownRemark(
          filter: {
            frontmatter: {
              templateKey: { eq: "tools-body" }
              lang: { eq: "da" }
            }
          }
        ) {
          edges {
            node {
              frontmatter {
                title
                description
                header
                usage
                id
                placeholder
                help_hint
                tags
                date
                tone
                hasCustomTemplate
                hasCustomTextArea
                editor_height
                
                extraFields {
                  company {
                    name
                    id
                    label
                    type
                    placeholder
                  }
                  purpose {
                    name
                    id
                    label
                    type
                    placeholder
                  }
                  mission {
                    name
                    id
                    label
                    type
                    placeholder
                  }
                  features {
                    name
                    id
                    label
                    type
                    placeholder
                  }
                  keywords {
                    name
                    id
                    label
                    type
                    placeholder
                  }
                  outputType {
                    name
                    id
                    label
                    type
                    options
                    placeholder
                  }
                }
                slug
                lang
                product_type
                url
                jsonId
                icon
              }
            }
          }
        }
        fi: allMarkdownRemark(
          filter: {
            frontmatter: {
              templateKey: { eq: "tools-body" }
              lang: { eq: "fi" }
            }
          }
        ) {
          edges {
            node {
              frontmatter {
                title
                description
                header
                usage
                id
                placeholder
                help_hint
                tags
                date
                tone
                hasCustomTemplate
                hasCustomTextArea
                editor_height
                extraFields {
                  company {
                    name
                    id
                    label
                    type
                    placeholder
                  }
                  purpose {
                    name
                    id
                    label
                    type
                    placeholder
                  }
                  mission {
                    name
                    id
                    label
                    type
                    placeholder
                  }
                  outputType {
                    name
                    id
                    label
                    type
                    options
                    placeholder
                  }
                  features {
                    name
                    id
                    label
                    type
                    placeholder
                  }
                  keywords {
                    name
                    id
                    label
                    type
                    placeholder
                  }
                }
                slug
                lang
                product_type
                url
                jsonId
                icon
              }
            }
          }
        }
      }
    `
  );
  return lang;
};

export default useToolsProducts;


```
```typescript:src/hooks/useSaveComplitions.ts
import { Auth } from "aws-amplify";

const useSaveCompletions = async ({ editor }) => {
  const theUrl = `https://api.maila.ai/save-completions`;
  const user = await Auth.currentAuthenticatedUser();
  let params = {};
  params["query"] = editor.children;
  params["username"] = user.username;
  const data = JSON.stringify(params);
  const response = await fetch(theUrl, {
    headers: {
      Authorization: `Bearer ${(await Auth.currentSession())
        .getIdToken()
        .getJwtToken()}`,
    },
    method: "POST",
    body: data,
  });
  const res = await response.json();
  return res;
};

export default useSaveCompletions;


```
```typescript:src/hooks/usePrism.ts
import React from "react";
import Prism from "./prismjs";
import { Text as SlateText } from "slate";

const usePrism = () => {
  const [language, setLanguage] = React.useState<string | number>("js");

  const getLength = (token) => {
    if (typeof token === "string") {
      return token.length;
    } else if (typeof token.content === "string") {
      return token.content.length;
    } else {
      return token.content.reduce((l, t) => l + getLength(t), 0);
    }
  };

  // decorate function depends on the language selected
  const decorate = React.useCallback(
    ([node, path]) => {
      const ranges = [];
      if (!SlateText.isText(node)) {
        return ranges;
      }
      const tokens = Prism.tokenize(node.text, Prism.languages[language]);
      let start = 0;

      for (const token of tokens) {
        const length = getLength(token);
        const end = start + length;

        if (typeof token !== "string") {
          ranges.push({
            [token.type]: true,
            anchor: { path, offset: start },
            focus: { path, offset: end },
          });
        }

        start = end;
      }

      return ranges;
    },
    [language]
  );

  return { decorate, language, setLanguage };
}; // end of usePrism

export default usePrism;


```
```typescript:src/hooks/useSiteMetadata.ts
import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            siteUrl
            description
            image
            author { name }
            organization { name url logo }
          }
        }
      }
    `
  );
  return site.siteMetadata;
};

export default useSiteMetadata;




```
```typescript:src/hooks/currentSelectEditor.ts
import {
  Editor,
  Node as SlateNode 
} from "slate";

export const commandCompatiblePointWords = async (editor:Editor) => {

  if (!editor.selection) return;
  let [node]: any = Editor.node(editor, editor.selection);
  if (!node.text) return;
  const selectedTextR = node.text.slice(
    editor.selection.anchor.offset,
    editor.selection.focus.offset
  );
  const selectedTextL = node.text.slice(
    editor.selection.focus.offset,
    editor.selection.anchor.offset
  );

  const whichPointisStarting = selectedTextR
    ? { offset: editor.selection.anchor.offset }
    : { offset: editor.selection.focus.offset };

  let selectedText = selectedTextR ? selectedTextR : selectedTextL;

  const commandCompatiblePointWords = {
    offset: whichPointisStarting.offset,
    path: editor.selection.anchor.path,
    text: selectedText,
  };
  return commandCompatiblePointWords
}


export const selectedPoint = async (editor:Editor) => {

  if (!editor.selection) return;
  let [node]: any = Editor.node(editor, editor.selection);
  if (!node.text) return;
  const selectedTextR = node.text.slice(
    editor.selection.anchor.offset,
    editor.selection.focus.offset
  );
  const selectedTextL = node.text.slice(
    editor.selection.focus.offset,
    editor.selection.anchor.offset
  );

  const whichPointisStarting = selectedTextR
    ? { offset: editor.selection.anchor.offset }
    : { offset: editor.selection.focus.offset };
  let selectedText = selectedTextR ? selectedTextR : selectedTextL;
  const commandCompatiblePointWords = {
    offset: whichPointisStarting.offset,
    path: editor.selection.anchor.path,
    text: selectedText,
  };

  let selectedPoint = {
    anchor: {
      path: editor.selection.anchor.path,
      offset: editor.selection.anchor.offset,
    },
    focus: {
      path: editor.selection.focus.path,
      offset: editor.selection.focus.offset,
    }
  };

  return selectedPoint

}

export const selectedText = (editor:Editor) => {

  if (!editor.selection) return;
  let [node]: any = Editor.node(editor, editor.selection);
  if (!node.text) return;
  const selectedTextR = node.text.slice(
    editor.selection.anchor.offset,
    editor.selection.focus.offset
  );
  const selectedTextL = node.text.slice(
    editor.selection.focus.offset,
    editor.selection.anchor.offset
  );
  let selectedText:string = selectedTextR ? selectedTextR : selectedTextL;
  return selectedText
}

export const serialize = (editorname:Editor) => {
  return editorname.children.map((x) => SlateNode.string(x)).join("\n");
};


export default selectedPoint;






/**
 * 
=======================================================================
New Code as replacement for the above code
=======================================================================
*/

// Extracts and returns the selected text along with its offset and path
export const getSelectedTextDetails = async (editor: Editor) => {
  if (!editor.selection) return;
  
  const [node]: any = Editor.node(editor, editor.selection);
  if (!node.text) return;
  
  const { anchor, focus } = editor.selection;
  const startOffset = Math.min(anchor.offset, focus.offset);
  const endOffset = Math.max(anchor.offset, focus.offset);
  const selectedText = node.text.slice(startOffset, endOffset);
  
  const textDetails = {
    offset: startOffset,
    path: anchor.path,
    text: selectedText,
  };
  
  console.log(`Selected text: ${selectedText.length} characters`);
  return textDetails;
};

// Example usage:
// const details = await getSelectedTextDetails(editor);

export const getSelectionDetails = async (editor: Editor) => {
  if (!editor.selection) return;
  
  const { anchor, focus } = editor.selection;
  
  const selectionDetails = {
    anchor: { path: anchor.path, offset: anchor.offset },
    focus: { path: focus.path, offset: focus.offset },
  };
  
  console.log(`Selection: Anchor at ${anchor.offset}, Focus at ${focus.offset}`);
  return selectionDetails;
};

// Example usage:
// const selection = await getSelectionDetails(editor);

export const getSelectedText = (editor: Editor) => {
  if (!editor.selection) return;
  
  const [node]: any = Editor.node(editor, editor.selection);
  if (!node.text) return;
  
  const { anchor, focus } = editor.selection;
  const startOffset = Math.min(anchor.offset, focus.offset);
  const endOffset = Math.max(anchor.offset, focus.offset);
  const selectedText = node.text.slice(startOffset, endOffset);
  
  console.log(`Selected text: ${selectedText.length} characters`);
  return selectedText;
};

// Example usage:
// const text = getSelectedText(editor);

export const serializeEditor = (editor: Editor) => {
  const serializedContent = editor.children.map(node => SlateNode.string(node)).join("\n");
  
  console.log(`Serialized content: ${serializedContent.length} characters`);
  return serializedContent;
};

// Example usage:
// const content = serializeEditor(editor);


```
```typescript:src/hooks/useFetchSuffix.ts
import React from "react";
import { Auth } from "aws-amplify";

const useFetchSuffix = async (
  parameters: string,
  suffix: string,
  gtoken: string,
  url: string,
  fieldValues: any
) => {
  try {
    const urlType = url;
    const element = `${parameters}`;
    const theUrl = `https://api.maila.ai/generate`;
    const params = {};
    const ListVoices = fieldValues.defaultVoice.map((x) => x.tone);
    const selectedVoices = ListVoices.join(",");
    params["query"] = element;
    params["suffix"] = suffix;
    params["finalLang"] = fieldValues.language.LangCode;
    params["grecaptcharesponse"] = gtoken;
    fieldValues.maxTokens
      ? (params["maxTokens"] = fieldValues.maxTokens)
      : null;
    fieldValues.presencePenalty
      ? (params["presencePenalty"] = fieldValues.presencePenalty)
      : null;
    fieldValues.temperature
      ? (params["temperature"] = fieldValues.temperature)
      : null;
    fieldValues.frequencyPenalty
      ? (params["frequencyPenalty"] = fieldValues.frequencyPenalty)
      : null;
    fieldValues.company
      ? (params["company"] = fieldValues.businessNameValue) ||
        (params["company"] = fieldValues.companyValue)
      : null;
    fieldValues.keywordValue
      ? (params["keyword"] = fieldValues.keywordValue)
      : null;
    fieldValues.outputShape
      ? (params["outputType"] = fieldValues.outputShape) ||
        (params["outputType"] = fieldValues.formValue)
      : null;
    fieldValues.missionValue
      ? (params["intent"] = fieldValues.missionValue) ||
        (params["intent"] = fieldValues.purposeValue)
      : null;
    fieldValues.purposeValue
      ? (params["mission"] = fieldValues.purposeValue) ||
        (params["mission"] = fieldValues.missionValue)
      : null;
    selectedVoices ? (params["tone"] = selectedVoices) : null;
    urlType ? (params["type"] = urlType) : null;
    const data = JSON.stringify(params);
    const response = await fetch(theUrl, {
      headers: {
        Authorization: `Bearer ${(await Auth.currentSession())
          .getIdToken()
          .getJwtToken()}`,
      },
      method: "POST",
      body: data,
    });
    const res = response.json();
    let rerurningData = res;
    return rerurningData;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default useFetchSuffix;


```
```typescript:src/hooks/useFetchFromUrl.ts
import React from "react";
import { Auth } from "aws-amplify";

const useFetchFromUrl = async (urlType: string, fieldValues: any) => {
  try {
    const theUrl = `https://api.maila.ai/generate`;
    const params = {};
    const user = await Auth.currentAuthenticatedUser();
    params["username"] = user.username;
    fieldValues.loadFromUrl
      ? (params["company"] = fieldValues.loadFromUrl)
      : null;
    fieldValues.loadFromUrl ? (params["url"] = fieldValues.loadFromUrl) : null;
    fieldValues.loadFromUrl
      ? (params["query"] = fieldValues.loadFromUrl)
      : null;
    params["finalLang"] = fieldValues.language.LangCode;
    urlType ? (params["type"] = urlType) : null;
    const data = JSON.stringify(params);
    const response = await fetch(theUrl, {
      headers: {
        Authorization: `Bearer ${(await Auth.currentSession())
          .getIdToken()
          .getJwtToken()}`,
      },
      method: "POST",
      body: data,
    });
    const res = response.json();
    let rerurningData = res;
    return rerurningData;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default useFetchFromUrl;


```
```typescript:src/hooks/useFetchAllData.ts
import { updateLastId, updateProgressValue } from "../slices/progress";
import { BaseEditor, Editor, Transforms } from "slate";
import { ReactEditor } from "editable-slate-react";
import { HistoryEditor } from "slate-history";
import { updateExpansion, updateHighlghted } from "slices/ui-states";
import useFetchAll from "./useFetchAll";
import { serialize } from "./currentSelectEditor";
import { Node as SlateNode } from "slate";

const extractText = (object: any) => {
  const newArray = [];
  for (let key in object) {
    if (key.includes("text")) {
      newArray.push(object[key]);
    }
  }
  return newArray;
};

const extractId = (object: any) => {
  const newArray = [];
  for (let key in object) {
    if (key.includes("Id")) {
      newArray.push(object[key]);
    }
  }
  return newArray[0];
};
/* Following function would send the text to main editor 
text => main editor
*/
const Content2Editor = (
  editor: BaseEditor & ReactEditor & HistoryEditor,
  content: string
) => {
  editor.selection &&
    Transforms.insertText(editor, content, {
      at: editor.selection,
    });

  if (!editor.selection) {
    Transforms.insertText(editor, content, {
      at: Editor.end(editor, []),
    });

    Transforms.select(
      editor,
      editor.selection ? editor.selection : Editor.end(editor, [])
    );
  }
};

//fetching the data from the api and then inserting it into the editor itself at the selection
async function useFetchAllData(
  dispatch: (arg0: {
    (dispatch: any): Promise<void>;
    (dispatch: any): Promise<void>;
  }) => void,
  enqueueSnackbar: (arg0: unknown) => any,
  editors: (BaseEditor & ReactEditor & HistoryEditor)[],
  gtoken: string,
  url: string,
  fieldValues
) {
  /** Get The whole text of the editor */
  const editorContents = serialize(editors[0]).substring(0, 25000);

  // selected text from the editor
  const selectedTextValueOfTheEditor =
    (editors[0].selection &&
      SlateNode.fragment(editors[0], editors[0].selection)
        .map((x) => SlateNode.string(x))
        .join("\n")) || editorContents

  console.log(selectedTextValueOfTheEditor)
  /** End: geting before selection and after selection */
  await useFetchAll(selectedTextValueOfTheEditor, gtoken, url, fieldValues).then((data) => {
    if (data) {
      dispatch(updateProgressValue(50));
      dispatch(updateLastId(extractId(data)));
      let textOptions = extractText(data);
      let inx = 0;
      textOptions
        .filter((x: any) => x.search("Error 4043") != -1)
        .map((element: any) => enqueueSnackbar(element));
      textOptions
        .filter((x: any) => x.search("Error 4043") == -1)
        .map((text: string, index) => {
          // if (text.length > 3 && inx == 0) {
          //   // inserting the first text into the main editor
          //   Content2Editor(editors[0], text);
          //   inx = 1;
          //   // highlighting the first text in the main editor
          //   dispatch(updateHighlghted(text));
          // }
          Transforms.insertText(editors[index + 1], text, { at: [0] });
        });
      dispatch(updateExpansion(true));
      dispatch(updateProgressValue(100));
      ReactEditor.focus(editors[0]);
      Transforms.select(
        editors[0],
        editors[0].selection ? editors[0].selection : Editor.end(editors[0], [])
      );
    } else {
      enqueueSnackbar("Something went wrong, please try again");
      Transforms.insertText(
        editors[1],
        data.message + "Something went wrong, please try again",
        { at: [0] }
      );
      dispatch(updateProgressValue(100));
    }
  });
}

export default useFetchAllData;


```
```typescript:src/hooks/useSettings.ts
import { useContext } from 'react';
import { SettingsContext } from '../contexts/settings-context';

const useSettings = () => useContext(SettingsContext);

export default useSettings;


```
```typescript:src/hooks/usePayInfo.ts
import { Auth } from "aws-amplify";
import React from "react";

const usePayInfo = (plans) => {
  const [progress, setProgress] = React.useState(plans);
  const datasource = async () => {
    const theUrl = `https://api.maila.ai/paymentinfo`;
    let params = {};
    const user = await Auth.currentAuthenticatedUser();
    params["username"] = user.username;
    const data = JSON.stringify(params);
    const response = await fetch(theUrl, {
      headers: {
        Authorization: `Bearer ${(await Auth.currentSession())
          .getIdToken()
          .getJwtToken()}`,
      },
      method: "POST",
      body: data,
    });
    const { cusomersublists } = await response.json();
    return cusomersublists;
  };
  React.useEffect(() => {
    datasource().then(setProgress);
  }, []);

  return progress;
};

export default usePayInfo;


```
```typescript:src/sections/landing-cta.tsx
import React from "react";
// ===== MUI IMPORTS =====
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { Link } from 'gatsby'

// ===== COMPONENT =====
function LandingCta() {
  return (
    <Box
      /* 🎨 Section background */
      sx={{
        bgcolor: 'primary.lighter',
        py: { xs: 6, sm: 8, md: 12 },
        borderRadius: 2,
        border: (theme) => `1px solid ${theme.palette.divider}`,
        m: 2,
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          px: { xs: 2, sm: 3, lg: 4 },
        }}
      >
        {/* 📝 Heading */}
        <Typography
          component="h2"
          variant="h3"
          color="text.primary"
          sx={{
            fontWeight: 600,
            maxWidth: 640,
            mb: { xs: 4, lg: 0 },
          }}
        >
          Looking for the VoiceOver Studio?
        </Typography>

        {/* 🎯 Action buttons */}
        <Stack direction="row" sx={{ m: 2 }} spacing={2} flexShrink={0}>
          <Button
            component={Link}
            to="https://speech.maila.ai"
            variant="contained"
            size="medium"
            endIcon={<ArrowRightAltIcon fontSize="small" />}
            sx={{
              bgcolor: 'primary.main',
              '&:hover': { bgcolor: 'primary.dark' }
            }}
          >
            VoiceOver Studio
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}

export default LandingCta

```
```typescript:src/templates/about.tsx
// ─── 📦 Imports ────────────────────────────────────────────────────────────────
import React from "react";
import { graphql } from "gatsby";

// 🔹 MUI
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

// 🔹 Components
import Layout from "../components/layout/Layout";
import Content, { HTMLContent } from "../components/homepage/Content";
import TagList from "../components/landings/modules/TagList";
import { SEO } from "../components/SEO/SEO";

// ─── 🧩 Types ──────────────────────────────────────────────────────────────────
interface AboutPageTemplateProps {
  title: string;
  content?: string;
  contentComponent?: React.ComponentType<any>;
  tags?: string[];
  langKey?: string;
}

interface AboutPageProps {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: {
        title: string;
        description: string;
        tags: string[];
        lang: string;
      };
    };
    site: {
      siteMetadata: {
        title: string;
        languages: {
          langs: string[];
          defaultLangKey: string;
        };
      };
    };
  };
  location: Location;
}

// ─── 📄 Template Component ─────────────────────────────────────────────────────
const AboutPageTemplate: React.FC<AboutPageTemplateProps> = ({
  title,
  content,
  contentComponent,
  tags,
  langKey,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <Box sx={{ mt: 8 }}>
      <Container sx={{ mt: 5 }}>
        <PageContent content={content} />
        <TagList tags={tags} langKey={langKey} />
      </Container>
    </Box>
  );
};

// ─── 📄 Page Component ─────────────────────────────────────────────────────────
const AboutPage: React.FC<AboutPageProps> = ({ data, location }) => {
  const { markdownRemark } = data;
  const { html, frontmatter } = markdownRemark;
  const { tags, lang, title } = frontmatter;

  return (
    <Layout data={data} location={location}>
      <Container>
        <AboutPageTemplate
          contentComponent={HTMLContent}
          title={title}
          content={html}
          tags={tags}
          langKey={lang}
        />
      </Container>
    </Layout>
  );
};

export default AboutPage;

// ─── 🔍 GraphQL Query ──────────────────────────────────────────────────────────
export const pageQuery = graphql`
  query AboutPageQuery($id: String!) {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        id
        title
        description
        tags
        lang
      }
      fields {
        slug
      }
    }
  }
`;

// ─── 🧠 SEO Head ───────────────────────────────────────────────────────────────
export const Head = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <SEO
      title={post.frontmatter.title}
      description={post.frontmatter.description}
      pathname={post.frontmatter.path}
      key="seo-component"
    >
      <meta name="description" content={post.frontmatter.description} />
    </SEO>
  );
};

```
```typescript:src/templates/tags.tsx
import React from "react";
import { graphql } from "gatsby";
import LayoutTag from "../components/layout/LayoutTag";
import TagRouteTemplate from "../components/homepage/TagRouteTemplate";

const TagRoute = (props) => {
  const data = props.data;
  const pageContext = props.pageContext;
  return (
    <LayoutTag data={data} location={props.location}>
      <TagRouteTemplate
        data={data}
        pageContext={pageContext}
      ></TagRouteTemplate>
    </LayoutTag>
  );
};

export default TagRoute;

export const pageQuery = graphql`
  query TagPage($langKey: String!, $tag: String!) {
    site {
      siteMetadata {
        languages {
          langs
          defaultLangKey
        }
      }
    }
    markdownRemark {
      frontmatter {
        title
        slug
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { frontmatter: { date: DESC } }
      filter: {
        frontmatter: { templateKey: { ne: "message" }, lang: { eq: $langKey } }
        fields: {
          langKey: { eq: $langKey }
          tagSlugs: { elemMatch: { tag: { eq: $tag } } }
        }
      }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            description
            date
            slug
            path
          }
          fields {
            langKey
            slug
            tagSlugs {
              tag
              link
            }
          }
          excerpt(truncate: true, pruneLength: 100)
        }
      }
    }
  }
`;


import { SEO } from "../components/SEO/SEO";


export const Head = (props) => {
  const { data } = props;
  const { markdownRemark: post } = data;
  return (
  <SEO title={post.frontmatter.title} description={post.frontmatter.description} pathname={post.frontmatter.path}>
    <meta name="description" content={post.frontmatter.description} />
  </SEO>
  )
}

```
```typescript:src/templates/tools-lists.tsx
import React from "react";
import Layout from "../components/layout/Layout";
import BlogLists from "../components/homepage/blog-lists";
import { graphql } from "gatsby";

const BlogListsPage = (props) => {
  const data = props.data;
  const location = props.location;
  return (
    <Layout data={data} location={location}>
      <BlogLists data={data} />
    </Layout>
  );
};

export default BlogListsPage;

export const pageQuery = graphql`
  query BlogRollQuery($id: String, $lang: String) {
    site {
      siteMetadata {
        title
        languages {
          langs
          defaultLangKey
        }
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: {
        frontmatter: { templateKey: { eq: "tools-body" } }
        fields: { langKey: { eq: $lang } }
      }
    ) {
      edges {
        node {
          excerpt(pruneLength: 300)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date
            lang
            tags
          }
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        id
        title
        description
        date
        tags
        lang
      }
    }
  }
`;


import { SEO } from "../components/SEO/SEO";


export const Head = (props) => {
  const { data } = props;
  const { markdownRemark: post } = data;
  return (
  <SEO title={post.frontmatter.title} description={post.frontmatter.description} pathname={post.frontmatter.path}>
    <meta name="description" content={post.frontmatter.description} />
  </SEO>
  )
}

```
```typescript:src/templates/tools-body.tsx
import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/Layout";
import BlogPostTemplate from "../components/homepage/BlogPostTemplate";

const BlogPost = (props) => {
  const data = props.data;
  const location = props.location;
  const { markdownRemark: post } = data;
  return (
    <Layout data={data} location={location} isBlogPost>
      <BlogPostTemplate
        content={post.html}
        image={post.frontmatter.image}
        description={post.frontmatter.description}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        date={post.frontmatter.date}
        lang={post.frontmatter.lang}
      />
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query ProductToolsByID($id: String!) {
    site {
      siteMetadata {
        title
        languages {
          langs
          defaultLangKey
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        id
        title
        description
        date
        tags
        lang
      }
    }
  }
`;



import { SEO } from "../components/SEO/SEO";


export const Head = (props) => {
  const { data } = props;
  const { markdownRemark: post } = data;
  return (
  <SEO title={post.frontmatter.title} description={post.frontmatter.description} pathname={post.frontmatter.path}>
    <meta name="description" content={post.frontmatter.description} />
  </SEO>
  )
}

```
```typescript:src/templates/contact.tsx
// ─── Imports ──────────────────────────────────────────────
import React, { memo, FC } from 'react'
import { graphql, PageProps } from 'gatsby'

// ─── MUI ─────────────────────────────────────────────────
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

// ─── Components ───────────────────────────────────────────
import Layout from '../components/layout/Layout'
import TagList from '../components/landings/modules/TagList'
import Content from '../components/homepage/Content'
import ContactMe from '../components/homepage/contact-me-container'
import { SEO } from '../components/SEO/SEO'

// ─── Types ───────────────────────────────────────────────
interface ContactTemplateProps {
  content: string
  contentComponent?: FC<{ content: string }>
  tags: string[]
  langKey: string
}

interface ContactPageData {
  markdownRemark: {
    html: string
    frontmatter: {
      id: string
      title: string
      description: string
      tags?: string[]
      lang: string
      path?: string
    }
    fields: {
      slug: string
    }
  }
  site: {
    siteMetadata: {
      title: string
      languages: {
        defaultLangKey: string
        langs: string[]
      }
    }
  }
}

interface HeadProps {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string
        description: string
        path?: string
      }
    }
  }
}

// ─── Template ────────────────────────────────────────────
export const ContactTemplate: FC<ContactTemplateProps> = ({
  content,
  contentComponent: PageContent = Content,
  tags,
  langKey,
}) => (
  <Box sx={{ mt: 8 }}>
    <Container sx={{ mt: 5 }}>
      <PageContent content={content} />
      <TagList tags={tags} langKey={langKey} />
    </Container>
  </Box>
)

// ─── Page ────────────────────────────────────────────────
type ContactPageProps = PageProps<ContactPageData>

const ContactPage: FC<ContactPageProps> = ({ data, location }) => {
  const { markdownRemark } = data
  const langKey = markdownRemark.frontmatter.lang

  return (
    <Layout data={data} location={location}>
      <Container>
        <ContactMe langkey={langKey} />
      </Container>
    </Layout>
  )
}

export default memo(ContactPage)

// ─── Query ───────────────────────────────────────────────
export const pageQuery = graphql`
  query ContactPageQuery($id: String!) {
    site {
      siteMetadata {
        title
        languages {
          defaultLangKey
          langs
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        id
        title
        description
        tags
        lang
        path
      }
      fields {
        slug
      }
    }
  }
`

// ─── Head ────────────────────────────────────────────────
export const Head: FC<HeadProps> = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <SEO
      title={post.frontmatter.title}
      description={post.frontmatter.description}
      pathname={post.frontmatter.path}
    >
      <meta name="description" content={post.frontmatter.description} />
    </SEO>
  )
}

```
```typescript:src/templates/home.tsx
import React from "react";
import { graphql } from "gatsby";
import Container from "@mui/material/Container";

// Layout components
import Layout from "../components/layout/Layout";
import { SEO } from "../components/SEO/SEO";

// Page sections
import HomeHeroPage from "../components/landings/HomeHeroPage";
import LandingCta from "sections/landing-cta";

const HomePage = ({ data, location }) => {
  const { markdownRemark, allArticlesJson } = data;
  const { frontmatter } = markdownRemark;
  const articles = allArticlesJson.edges[0].node.articles;

  return (
    <Layout data={data} jsonData={articles} location={location}>
      <Container
        maxWidth="xl"
        sx={{ alignItems: "center", justifyContent: "center" }}
      >
        <HomeHeroPage
          header={frontmatter.HeroTaglineDescription}
          cta={frontmatter.H01051}
          title={frontmatter.T0152}
          labelbutton={frontmatter.L0401[0]}
          helpernotice={frontmatter.H01047}
        />
        
        <LandingCta />

      </Container>
    </Layout>
  );
};

export default HomePage;

export const pageQuery = graphql`
  query HomePageQuery($id: String!) {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
    allArticlesJson(filter: { title: { eq: "home" } }) {
      edges {
        node {
          articles {
            en
            da
            sv
            no
            fi
          }
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        id
        title
        description
        tags
        lang
        path
        sectionlabel
        plans {
          corporate {
            features
            name
            price
          }
          free {
            features
            name
            price
          }
          growth {
            features
            name
            price
          }
        }
        tables {
          button
          link
          header
          caption
          cta
          cta_link
          cta_button
          cta_caption
        }
        section1 {
          title
          description
        }
        section2 {
          title
          description
        }
        section3 {
          title
          description
        }
        T100
        B100
        F100
        T0152
        HeroTaglineDescription
        H01047
        H01051
        H0118 {
          A0117q
        }
        H01194
        L0401
      }
      fields {
        slug
      }
    }
  }
`;

export const Head = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  
  return (
    <SEO
      title={frontmatter.title}
      description={frontmatter.description}
      pathname={frontmatter.path}
    >
      <meta name="description" content={frontmatter.description} />
    </SEO>
  );
};

```
```typescript:src/templates/blog-lists.tsx
import React from "react";
import Layout from "../components/layout/Layout";
import BlogLists from "../components/homepage/blog-lists";
import { graphql } from "gatsby";
import PropTypes from "prop-types";

const BlogListsPage = ({ data, location }) => (
  <Layout data={data} location={location}>
    <BlogLists data={data} />
  </Layout>
);

BlogListsPage.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default BlogListsPage;

export const pageQuery = graphql`
  query BlogRollQuery($id: String, $lang: String) {
    site {
      siteMetadata {
        title
        languages {
          langs
          defaultLangKey
        }
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: {
        frontmatter: { templateKey: { eq: "blog-body" } }
        fields: { langKey: { eq: $lang } }
      }
    ) {
      edges {
        node {
          excerpt(pruneLength: 300)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date
            lang
            path
            tags
          }
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        id
        title
        description
        date
        tags
        path
        lang
      }
    }
  }
`;


import { SEO } from "../components/SEO/SEO";


export const Head = (props) => {
  const { data } = props;
  const { markdownRemark: post } = data;
  return (
  <SEO title={post.frontmatter.title} description={post.frontmatter.description} pathname={post.frontmatter.path}>
    <meta name="description" content={post.frontmatter.description} />
  </SEO>
  )
}

```
```typescript:src/templates/blog-body.tsx
import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/Layout";
import BlogPostTemplate from "../components/homepage/BlogPostTemplate";

const BlogPost = (props) => {
  const data = props.data;
  const location = props.location;
  const { markdownRemark: post } = data;
  return (
    <Layout data={data} location={location} isBlogPost>
      <BlogPostTemplate
        {...post.frontmatter}
        content={post.html}
      />
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    site {
      siteMetadata {
        title
        languages {
          langs
          defaultLangKey
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        id
        title
        description
        date
        path
        tags
        lang
        imageAlt
        imageStatus
      }
    }
  }
`;


import { SEO } from "../components/SEO/SEO";


export const Head = (props) => {
  const { data } = props;
  const { markdownRemark: post } = data;
  return (
  <SEO title={post.frontmatter.title} description={post.frontmatter.description} pathname={post.frontmatter.path}>
    <meta name="description" content={post.frontmatter.description} />
  </SEO>
  )
}

```
```typescript:src/templates/allTags.tsx
import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import { getCurrentLangKey } from "../langfile";
import LayoutTag from "../components/layout/LayoutTag";
import AllTagsPageTemplate from "../components/homepage/AllTagsPageTemplate";
import { Box } from "@mui/material";

const AllTagsPage = (props) => {
  const url = props.location.pathname;
  const { langs, defaultLangKey } = props.data.site.siteMetadata.languages;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  return (
    <LayoutTag data={props.data} location={props.location}>
      <Box>
        <AllTagsPageTemplate
          allBlogTags={props.data.tags.group}
          langKey={langKey}
        />
      </Box>
    </LayoutTag>
  );
};

AllTagsPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AllTagsPage;

export const pageQuery = graphql`
  query AllTagsPageQuery($id: String!, $lang: String!) {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        slug
        path
      }
    }
    tags: allMarkdownRemark(
      filter: {
        fields: { langKey: { eq: $lang } }
        frontmatter: { templateKey: { eq: "blog-body" } }
      }
      limit: 2000
    ) {
      group(field: { frontmatter: { tags: SELECT } }) {
        fieldValue
        totalCount
      }
    }
  }
`;


import { SEO } from "../components/SEO/SEO";


export const Head = (props) => {
  const { data } = props;
  const { markdownRemark: post } = data;
  return (
  <SEO title={post.frontmatter.title} description={post.frontmatter.description} pathname={post.frontmatter.path}>
    <meta name="description" content={post.frontmatter.description} />
  </SEO>
  )
}

```
```typescript:src/templates/plugins.tsx
import React, { memo } from "react";
import { graphql } from "gatsby";

// MUI Components
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

// Custom Components
import Layout from "../components/layout/Layout";
import Content from "../components/homepage/Content";
import TagList from "../components/landings/modules/TagList";
import FeatureSection from "../components/landings/feature-section";
import DiscussionFeature from "../components/landings/landing-feature";
import { SEO } from "../components/SEO/SEO";

// =============================================
// Interfaces
// =============================================
interface PluginsPageTemplateProps {
  content: string;
  contentComponent?: React.ComponentType<any>;
  tags: string[];
  langKey: string;
}

interface PluginsPageProps {
  data: {
    markdownRemark: {
      frontmatter: {
        [key: string]: any;
        image?: any;
      }
    };
    site: {
      siteMetadata: {
        title: string;
        languages: {
          defaultLangKey: string;
          langs: string[];
        }
      }
    }
  };
  location: {
    pathname: string;
  };
}

interface HeadProps {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
        description: string;
        path: string;
      }
    }
  };
}

// =============================================
// Template Component
// =============================================
const PluginsPageTemplate = ({ 
  content, 
  contentComponent: PageContent = Content, 
  tags, 
  langKey 
}: PluginsPageTemplateProps) => (
  <Box sx={{ mt: 8 }}>
    <Container sx={{ mt: 5 }}>
      <PageContent content={content} />
      <TagList tags={tags} langKey={langKey} />
    </Container>
  </Box>
);

// =============================================
// Main Page Component
// =============================================
const PluginsPage = ({ data, location }: PluginsPageProps) => {
  const { markdownRemark } = data;

  return (
    <Layout data={data} location={location}>
      <Container>
        <FeatureSection 
          title="Feature Title" 
          description="Feature Description" 
          primaryButtonText="Primary Button" 
        />
        <DiscussionFeature />
      </Container>
    </Layout>
  );
};

export default memo(PluginsPage);

// =============================================
// Head Component for SEO
// =============================================
export const Head = ({ data }: HeadProps) => {
  const { markdownRemark: post } = data;
  return (
    <SEO 
      title={post.frontmatter.title} 
      description={post.frontmatter.description} 
      pathname={post.frontmatter.path}
    >
      <meta name="description" content={post.frontmatter.description} />
    </SEO>
  );
};

// =============================================
// GraphQL Query
// =============================================
export const pageQuery = graphql`
  query PluginsPageQuery($id: String!) {
    site {
      siteMetadata {
        title
        languages {
          defaultLangKey
          langs
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        id
        title
        description
        tags
        lang
        path
        plugins {
          name
          price
          description
          primaryButtonText
          url
        }
      }
      fields {
        slug
      }
    }
  }
`;

```
```javascript:src/constants.js
export const THEMES = {
    LIGHT: 'LIGHT',
    DARK: 'DARK',
    NATURE: 'NATURE'
};


```
```typescript:src/store/index.tsx
import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { typedFieldsValue } from "slices/sliceTypes";
import type { TypedUseSelectorHook } from "react-redux";
import type { ThunkAction } from "redux-thunk";
import type { Action } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

// export type AppThunk = ThunkAction<any, RootState, unknown, Action<any>>;

export type DefaultRootState = {
  fieldsValue: typedFieldsValue;
};

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export const useDispatch = () => useReduxDispatch<AppDispatch>();

export default store;


```
```typescript:src/store/rootReducer.tsx
import { combineReducers } from "@reduxjs/toolkit";
import { reducer as chatReducer } from "../slices/chat";
import { reducer as fieldReducer } from "../slices/fieldsValue";
import { reducer as progressReducer } from "../slices/progress";
import { reducer as counterSlice } from "../slices/counter";
import { reducer as editorReducer } from "../slices/editorParams";
import { reducer as expandReducer } from "../slices/ui-states";

const rootReducer = combineReducers({
  chat: chatReducer,
  counter: counterSlice,
  fieldsValue: fieldReducer,
  progressValue: progressReducer,
  editorParams: editorReducer,
  expandReducer: expandReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

```
```typescript:src/langfile/getUserLangKey.ts


const getBrowserLanguage = () => {
  if (typeof window === 'undefined') {
    return null;
  }

  const customNavigator = window.navigator as Navigator & {
    browserLanguage?: string;
    userLanguage?: string;
  };

  return (
    customNavigator.languages?.[0] ||
    customNavigator.language ||
    customNavigator.browserLanguage ||
    customNavigator.userLanguage
  );
};

import getValidLangKey from './getValidLangKey';


// function pipe<T>(...fns: Array<(arg: T) => T>): (arg: T) => T {
//   return function piped(result: T): T {
//     for (let i = 0; i < fns.length; i++) {
//       result = fns[i](result);
//     }
//     return result;
//   };
// }


/**
 * Get user browser valid langKey
 * @param {[String]} langs allowed lang keys ['en', 'fr', 'pt']
 * @param {String} defaultLangKey default browser language key
 * @return {string} valid langKey
 */
const getUserLangKey = (langs, defaultLangKey) =>
  getValidLangKey(langs, defaultLangKey)(getBrowserLanguage());

export default getUserLangKey;



```
```typescript:src/langfile/index.ts

import getCurrentLangKey from './getCurrentLangKey';
import getValidLangKey from './getValidLangKey';
import getBrowserLanguage from './getBrowserLanguage';
import redirectToHome from './redirectToHome';
import getUserLangKey from './getUserLangKey';
import getSlugAndLang from './getSlugAndLang';
import getPagesPaths from './getPagesPaths';
import { isInPagesPaths } from './isInPagesPaths';


// curry: transforms a function with multiple arguments into a sequence of functions each with a single argument
function curry(fn: (...args: any[]) => any) {
  return function curried(...args: any[]): any {
    if (args.length >= fn.length) {
      return fn.apply(null, args);
    } else {
      return (...args2: any[]) => curried.apply(null, args.concat(args2));
    }
  };
}

// filter: creates a new array with all elements that pass the test implemented by the provided function
function filter<T>(fn: (value: T) => boolean, array: T[]): T[] {
  return array.filter(fn);
}

// isNil: checks if a value is null or undefined
function isNil(value: any): value is null | undefined {
  return value === null || value === undefined;
}

// startsWith: checks if a string starts with a given substring
function startsWith(substring: string, str: string): boolean {
  return str.startsWith(substring);
}


/**
 * Gets the number of paths in a url
 * @param {*} url pathName
 * @returns {Number} number of paths
 */
const nPaths = url => (url.match(/\//g) || []).length - 1;

/**
 * Checks if the url is /, /en/ or /pt/
 * @param {*} url this.props.location
 * @returns {Boolean} is home or not
 */
const isHomePage = url => nPaths(url) <= 1;

/**
 * Get url to the language
 * @param {String} homeLink  link for the home page
 * @param {String} url  browser url
 * @param {String} langKey default browser language key
 * @returns {String} new url
 */
const getUrlForLang = curry((homeLink, url, langKey) => {
  return url === '/' || !startsWith(homeLink, url)
    ? `/${langKey}/`
    : url.replace(homeLink, `/${langKey}/`);
});

/**
 * Get langs to create Menu
 * @param {[String]} langs lang keys ['en', 'fr', 'pt']
 * @param {String} currentLangKey current Lang Key
 * @param {func} getUrlForLang getUrlForLang curried, waiting for langKey
 * @returns {Array} langs menu data
 */
const getLangs = curry((langs, currentLangKey, getUrlForLang) => {
  return langs.map(langKey => {
    return {
      langKey,
      selected: currentLangKey === langKey,
      link: getUrlForLang(langKey)
    };
  });
});

/**
 * Get i18n obj for the given langKey or first when not found
 * @param {*} i18n Translations object
 * @param {*} langKey langKey
 * @returns {*} i18n[langKey] or i18n[defaultLangKey]
 */
const getI18nBase = curry(
  (i18n, langKey) => i18n[langKey] || Object.values(i18n)[0]
);



export const getLangConfig = (langKey: string) => {
  const lang = ['sv', 'no', 'fi', 'da'].includes(langKey) ? langKey : 'en';
  const direction: "rtl" | "ltr" = ["ar", "he", "fa"].includes(lang) ? "rtl" : "ltr";
  return { lang, direction };
};

export {
  isHomePage,
  isInPagesPaths,
  getBrowserLanguage,
  getCurrentLangKey,
  getPagesPaths,
  getUserLangKey,
  getValidLangKey,
  getI18nBase,
  getLangs,
  getSlugAndLang,
  getUrlForLang,
  nPaths,
  redirectToHome
};


```
```typescript:src/langfile/getBrowserLanguage.ts
const getBrowserLanguage = () => {
  if (typeof window === 'undefined') {
    return null;
  }

  const customNavigator = window.navigator as Navigator & {
    browserLanguage?: string;
    userLanguage?: string;
  };

  return (
    customNavigator.languages?.[0] ||
    customNavigator.language ||
    customNavigator.browserLanguage ||
    customNavigator.userLanguage
  );
};

export default getBrowserLanguage;


```
```typescript:src/langfile/getSlugAndLang.ts

// compose: takes multiple functions and returns a function that applies them from right to left
function compose<T>(...fns: Array<(arg: T) => T>): (arg: T) => T {
  return function composed(result: T): T {
    for (let i = fns.length - 1; i >= 0; i--) {
      result = fns[i](result);
    }
    return result;
  };
}

// curry: transforms a function with multiple arguments into a sequence of functions each with a single argument
function curry(fn: (...args: any[]) => any) {
  return function curried(...args: any[]): any {
    if (args.length >= fn.length) {
      return fn.apply(null, args);
    } else {
      return (...args2: any[]) => curried.apply(null, args.concat(args2));
    }
  };
}

// isNil: checks if a value is null or undefined
function isNil(value: any): value is null | undefined {
  return value === null || value === undefined;
}

// head: returns the first element of an array
function head<T>(array: T[]): T | undefined {
  return array[0];
}

// not: returns the logical negation of a boolean value
function not(value: boolean): boolean {
  return !value;
}

// startsWith: checks if a string starts with a given substring
function startsWith(substring: string, str: string): boolean {
  return str.startsWith(substring);
}

// endsWith: checks if a string ends with a given substring
function endsWith(substring: string, str: string): boolean {
  return str.endsWith(substring);
}


const defaultPagesPaths: string[] = ['/src/pages/'];

interface Options {
  langKeyDefault?: string;
  pagesPaths?: string[];
}

const getPagesPaths = (options: Options | undefined): string[] =>
  (options && options.pagesPaths) || defaultPagesPaths;

const getLangKeyDefault = (options: Options | undefined): string | undefined =>
  (options && options.langKeyDefault) || undefined;

const addSlashStart = (fileName: string): string =>
  startsWith('/', fileName) ? fileName : '/' + fileName;

const addSlashEnd = (fileName: string): string =>
  endsWith('/', fileName) ? fileName : fileName + '/';

const addSlash = compose(addSlashStart, addSlashEnd);

interface SlugAndLang {
  slug: string;
  langKey: string;
  redirectTo: string | null;
}

/**
 * Get slug (path) and langKey for a given file path.
 *
 * Used by gatsby-plugin-i18n and gatsby-plugin-i18n-tags
 *
 * @param {{langKeyDefault: string, pagesPaths: string[] }} options plugin options
 * @param {String} fileAbsolutePath local file absolute path
 * @return {{slug: string, langKey: string, redirectTo: string}} slug and langKey
 */
const getSlugAndLang = curry((options: Options, fileAbsolutePath: string): SlugAndLang | undefined => {
  const slugsAndLangs: (SlugAndLang | null)[] = getPagesPaths(options).map(pagesPath => {
    const filePath = `safeStartToSplit-${fileAbsolutePath}`.split(pagesPath)[1];

    if (isNil(filePath)) {
      return null;
    }

    const langKeyDefault = getLangKeyDefault(options);
    const fileName = filePath.split('.');
    const langKey = fileName.length === 3 ? fileName[1] : langKeyDefault;
    const slug = addSlash(
      (fileName.length === 3 ? langKey : '') +
      addSlash(fileName[0].replace('index', ''))
    );

    return {
      slug,
      langKey,
      redirectTo: slug === '/' ? addSlash(langKeyDefault || '') : null
    };
  });

  return head(slugsAndLangs.filter(compose(not, isNil)));
});

export default getSlugAndLang;



```
```typescript:src/langfile/isInPagesPaths.ts
// Use TypeScript's Discriminated Unions for better type safety
type Result<T, E> = Success<T> | Failure<E>;

interface Success<T> {
  type: "success";
  value: T;
}

interface Failure<E> {
  type: "failure";
  value: E;
}

const Success = <T>(value: T): Success<T> => ({
  type: "success",
  value,
});

const Failure = <E>(value: E): Failure<E> => ({
  type: "failure",
  value,
});


const isNil = (x: any): boolean => x === null || typeof x === 'undefined';

const getPagesPaths = (options: { pagesPaths?: string[] }): Result<string[], string> => {
  if (isNil(options)) {
    return Failure("Null plugin options"); // Use your custom Failure type here
  }

  const { pagesPaths } = options;

  if (isNil(pagesPaths)) {
    return Failure("Null pluginOptions.pagesPaths"); // And here
  }

  return Success(pagesPaths);
};


const isEmpty = <T>(array: T[]): boolean => array.length === 0;

const not = (value: boolean): boolean => !value;

export const isInPagesPaths = (options: { pagesPaths?: string[] }, path: string): boolean | void => {
  const result = getPagesPaths(options);

  switch (result.type) {
    case "success":
      const filteredPaths = result.value.filter(pagePath => pagePath.includes(path));
      return not(isEmpty(filteredPaths));
    case "failure": // Use "failure" instead of "error"
      console.error(result.value);
      return;
  }
};


```
```typescript:src/langfile/redirectToHome.ts
import getUserLangKey from './getUserLangKey';

/**
 * Redirect to user language home page, from: / to: /langKey/
 * @param {[String]} langs allowed lang keys ['en', 'fr', 'pt']
 * @param {String} defaultLangKey default browser language key
 * @return {void}
 */
const redirectToHome = (langs: [string], defaultLangKey: string): void => {
  if (typeof window === 'undefined') {
    return;
  }

  const langKey = getUserLangKey(langs, defaultLangKey);
  const newUrl = `/${langKey}/`;
  window.location.replace(newUrl);
};

export default redirectToHome;


```
```typescript:src/langfile/getCurrentLangKey.ts
type Curry = <T extends (...args: any[]) => TResult, TResult = ReturnType<T>>(
  fn: T,
) => (...args: Parameters<T>) => TResult;

const curry: Curry = (fn) => {
  const curried = (...args: any[]) =>
    args.length >= fn.length
      ? fn.apply(null, args)
      : (...args2: any[]) => curried.apply(null, args.concat(args2));
  return curried;
};

import getValidLangKey from './getValidLangKey';

/**
 * Get current language key from url.
 * @func
 * @param {string[]} langs allowed lang keys ['en', 'fr', 'pt']
 * @param {string} defaultLangKey default browser language key
 * @param {string} url browser url
 * @returns {string} current langKey
 */
const getCurrentLangKey = curry(
  (langs: string[], defaultLangKey: string, url: string): string => {
    const langKey = url.split('/')[1];
    return getValidLangKey(langs, defaultLangKey, langKey);
  },
);

export default getCurrentLangKey;


```
```typescript:src/langfile/getValidLangKey.ts
// curry: transforms a function with multiple arguments into a sequence of functions each with a single argument
function curry(fn: (...args: any[]) => any) {
  return function curried(...args: any[]): any {
    if (args.length >= fn.length) {
      return fn.apply(null, args);
    } else {
      return (...args2: any[]) => curried.apply(null, args.concat(args2));
    }
  };
}

// filter: creates a new array with all elements that pass the test implemented by the provided function
function filter<T>(fn: (value: T) => boolean, array: T[]): T[] {
  return array.filter(fn);
}

// isNil: checks if a value is null or undefined
function isNil(value: any): value is null | undefined {
  return value === null || value === undefined;
}

// startsWith: checks if a string starts with a given substring
function startsWith(substring: string, str: string): boolean {
  return str.startsWith(substring);
}


/**
 * Get valid langKey in langs or return defaultLangKey
 * @func
 * @param {[String]} langs allowed lang keys ['en', 'fr', 'pt']
 * @param {String} defaultLangKey default browser language key
 * @returns {String} valid langKey
 */
const getValidLangKey = curry((langs, defaultLangKey, langKey) => {
  if (isNil(langKey)) {
    return defaultLangKey;
  }

  const currentLangKey = filter(l => startsWith(l, langKey), langs);
  return currentLangKey[0] || defaultLangKey;
});

export default getValidLangKey;


```
```typescript:src/langfile/getPagesPaths.ts
// Static methods for creating Success and Error instances
class Result<T, E> {
  // Instance method for pattern matching
  matchWith(pattern: { Success: (result: Success<T>) => any; Error: (result: Error<E>) => any }) {
    if (this instanceof Success) {
      return pattern.Success(this);
    } else if (this instanceof Error) {
      return pattern.Error(this);
    }
  }
}

class Success<T> extends Result<T, unknown> {
  value: T;

  constructor(value: T) {
    super();
    this.value = value;
  }
}

class Error<E> extends Result<unknown, E> {
  value: E;

  constructor(value: E) {
    super();
    this.value = value;
  }
}

const isNil = (x) => x === null || typeof x === 'undefined';

/**
 * Get .pagesPaths from pluginOptions
 * @sig Options -> Result String[]
 * @param {{pagesPaths?: string[]}} options plugin options
 * @return {Result<string[], string>} pagesPaths Result
 */
const getPagesPaths = (options: { pagesPaths?: string[] }): Result<string[], string> => {
  // Return an error if plugin options are null or undefined
  if (isNil(options)) {
    return new Error("Null plugin options");
  }

  const { pagesPaths } = options;

  // Return an error if pluginOptions.pagesPaths are null or undefined
  if (isNil(pagesPaths)) {
    return new Error("Null pluginOptions.pagesPaths");
  }

  // Additional validations (e.g., checking if pagesPaths is an array or empty) can be added here if needed

  // Return the pagesPaths as a successful result
  return new Success(pagesPaths);
};

export default getPagesPaths;


```
```typescript:src/contexts/settings-context.tsx
import React from "react";
import type { FC, ReactNode } from "react";
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export interface Settings {
  direction?: "ltr" | "rtl";
  lang: string;
  responsiveFontSizes?: boolean;
  theme: "light" | "dark";
}

export interface SettingsContextValue {
  settings: Settings;
  saveSettings: (update: Settings) => void;
}

const initialSettings: Settings = {
  direction: "ltr",
  lang: "en",
  responsiveFontSizes: true,
  theme: "light",
};

export const restoreSettings = (): Settings | null => {
  let settings = null;

  try {
    const storedData: string | null =
      globalThis.localStorage.getItem("settings");

    if (storedData) {
      settings = JSON.parse(storedData);
    } else {
      settings = {
        direction: "ltr",
        lang: "en",
        responsiveFontSizes: true,
        theme: globalThis.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light",
      };
    }
  } catch (err) {
    console.error(err);
    // If stored data is not a strigified JSON this will fail,
    // that's why we catch the error
  }

  return settings;
};

export const storeSettings = (settings: Settings): void => {
  globalThis.localStorage.setItem("settings", JSON.stringify(settings));
};

export const SettingsContext = createContext<SettingsContextValue>({
  settings: initialSettings,
  saveSettings: () => { },
});

export const SettingsProvider: any = (props: any) => {
  const { children } = props;
  const [settings, setSettings] = useState<Settings>(initialSettings);

  useEffect(() => {
    const restoredSettings = restoreSettings();

    if (restoredSettings) {
      setSettings(restoredSettings);
    }
  }, []);

  const saveSettings = (updatedSettings: Settings): void => {
    setSettings(updatedSettings);
    storeSettings(updatedSettings);
  };

  return (
    <SettingsContext.Provider
      value={{
        settings,
        saveSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

SettingsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const SettingsConsumer = SettingsContext.Consumer;


```
```typescript:src/contexts/AppContext.ts
import { createContext } from "react";


const initialValue = {
    type: 'paragraph',
    children: [
        { text: "Sample Text" }
    ],
}

const countries = [
    { code: 'US', label: 'English', LangCode: 'en' },
    { code: 'SV', label: 'Swedish', LangCode: 'sv' },
    { code: 'DE', label: 'German', LangCode: 'de' },
    { code: 'FI', label: 'Finnish', LangCode: 'fi' },
    { code: 'NO', label: 'Norwegian', LangCode: 'no' },
    { code: 'FR', label: 'French', LangCode: 'fr' },
    { code: 'IR', label: 'Persian', LangCode: 'fa' },
    { code: 'CN', label: 'Chinese', LangCode: 'zh' },
    { code: 'RU', label: 'Russian', LangCode: 'ru' },
    { code: 'NL', label: 'Dutch', LangCode: 'nl' },
    { code: 'KO', label: 'Korean', LangCode: 'ko' },
    { code: 'TR', label: 'Turkish', LangCode: 'tr' },
    { code: 'PT', label: 'Portuguese', LangCode: 'pt' },
    { code: 'ES', label: 'Spanish', LangCode: 'es' },
];

const defaultContext = {
    IsOpen: false,
    initialTextValue: initialValue,
    primaryTextValue: initialValue,
    defaultLanguageUse: "fa",
    stateLanguage: "en",
    langTextInput: "en",
    langTextOutPut: "fr",
    value: "testValue",
    Languages: countries,
    setValue: () => { },
    toggleTextUpdateValue: () => { },
    toggleOpen: () => { },
    checkUser: () => { },
    logout: () => { },
    userInfo: null
};

const defaultLangContext = {
    defaultLanguageUse: "en"
};


const AppContext = createContext(defaultContext);
export const LangContext = createContext(defaultLangContext);


export default AppContext;


```
```typescript:src/lib/axios.tsx
import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use((response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong'));

export const mock = new AxiosMockAdapter(axiosInstance, { delayResponse: 0 });

export default axiosInstance;


```
```javascript:gatsby-node.js
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const fs = require('fs-extra')


exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
  {
    site {
      siteMetadata {
        languages {
          langs
        }
      }
    }
    markdownRemark {
      frontmatter {
        HeroTaglineDescription
      }
    }
    allMarkdownRemark(sort: {frontmatter: {date: DESC}}, limit: 1000) {
      edges {
        node {
          id
          fields {
            slug
            langKey
            tagSlugs {
              tag
              link
            }
          }
          frontmatter {
            id
            date
            path
            tags
            templateKey
            lang
            title
            HeroTaglineDescription
          }
        }
      }
    }
  }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(edge => {
      // const id = edge.node.id;
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.tsx`
        ),
        // additional data can be passed via context
        context: {
          id: edge.node.id,
          lang: edge.node.frontmatter.lang
        },
      })
    })

  })
}


exports.onCreateWebpackConfig = ({ actions, getConfig, stage }) => {
  const config = getConfig()
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias
    }
  }
  if (stage === 'build-javascript') {
    actions.setWebpackConfig({
      devtool: false
    })
  }
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/app/)) {
    page.matchPath = "/app/*"
    // Update the page.
    createPage(page)
  }
}

```
```javascript:rx.js
const fs = require('fs').promises;
const path = require('path');

// Get language code from content
const getLangCode = content => {
    const match = content.match(/lang:\s*(\w+)/);
    return match ? match[1] : null;
};

// Fix front matter formatting
const fixFormatting = content => content.replace(/(placeholder|title):\s*"(.*?)"/g, (match, key, value) => {
    const newValue = value.replace(/"/g, '\'').replace(/\n/g, '\\n');
    return `${key}: "${newValue}"`;
});

// Update Markdown file with language code
const updateMdFile = async (filePath, langCode) => {
    try {
        const content = await fs.readFile(filePath, 'utf-8');
        const fixedContent = fixFormatting(content);
        const newContent = fixedContent.replace(/(slug|path):\s*\/\w+\/(.+)/g, `$1: /${langCode}/$2`);
        await fs.writeFile(filePath, newContent);
        console.log(`Updated: ${filePath}`);
    } catch (error) {
        console.error(`Failed to update ${filePath}: ${error.message}`);
    }
};

// Recursively find and update Markdown files
const findAndUpdateMdFiles = async dirPath => {
    try {
        const files = await fs.readdir(dirPath);

        await Promise.all(files.map(async file => {
            const currentPath = path.join(dirPath, file);
            const stats = await fs.stat(currentPath);

            if (stats.isDirectory()) {
                await findAndUpdateMdFiles(currentPath);
            } else if (path.extname(currentPath) === '.md') {
                const content = await fs.readFile(currentPath, 'utf-8');
                const langCode = getLangCode(content);
                
                if (langCode) {
                    await updateMdFile(currentPath, langCode);
                }
            }
        }));
    } catch (error) {
        console.error(`Failed to process directory ${dirPath}: ${error.message}`);
    }
};

// Example usage: findAndUpdateMdFiles('src/pages/tools');
findAndUpdateMdFiles('src/pages/tools');


```
```typescript:plugins/gatsby-plugin-mui-emotion/gatsby-ssr.tsx
import * as React from 'react';
import { CacheProvider } from '@emotion/react';
import createEmotionServer from '@emotion/server/create-instance';
import { renderToString } from 'react-dom/server';
import getEmotionCache from './getEmotionCache';

// Inject MUI styles first to match with the prepend: true configuration.
export const onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents();
  headComponents.sort((x, y) => {
    if (x.key === 'emotion-css-global' || x.key === 'emotion-css') {
      return -1;
    }
    if (y.key === 'style') {
      return 1;
    }
    return 0;
  });
  replaceHeadComponents(headComponents);
};

export const replaceRenderer = ({ bodyComponent, setHeadComponents, replaceBodyHTMLString }) => {
  const cache = getEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  const emotionStyles = extractCriticalToChunks(
    renderToString(<CacheProvider value={cache}>{bodyComponent}</CacheProvider>),
  );

  setHeadComponents(
    emotionStyles.styles.map((style) => (
      <style
        data-emotion={`${style.key} ${style.ids.join(' ')}`}
        key={`emotion-${style.key}`}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: style.css }}
      />
    )),
  );

  // render the result from `extractCritical`
  replaceBodyHTMLString(emotionStyles.html);
};

```
```typescript:plugins/gatsby-plugin-mui-emotion/gatsby-browser.tsx

/* eslint-disable import/prefer-default-export */
import React from 'react';
import { CacheProvider } from '@emotion/react';
import getEmotionCache from './getEmotionCache';
import {
  SettingsConsumer,
  SettingsProvider,
} from "../../src/contexts/settings-context";
import CssBaseline from "@mui/material/CssBaseline";
import { Direction, ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { createTheme } from "../../src/theme";
import { SnackbarProvider } from "notistack";
import { Provider as ReduxProvider } from "react-redux";
import store from "../../src/store";
import { RTL } from "../../src/components/layout/RTL";

const cache = getEmotionCache();


function TopLayout(props) {
  return (
    <>
      <CacheProvider value={cache}>
        <ReduxProvider store={store}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <SettingsProvider>
              <SettingsConsumer>
                {({ settings }) => (
                  <ThemeProvider
                    theme={createTheme({
                      direction: settings.direction as Direction,
                      responsiveFontSizes: settings.responsiveFontSizes,
                      theme: settings.theme as "light" | "dark",
                      lang: settings.lang,
                    })}
                  >
                    <SnackbarProvider maxSnack={3}>
                      <RTL direction={settings.direction}>
                        <CssBaseline />
                        {props.children}
                      </RTL>
                    </SnackbarProvider>
                  </ThemeProvider>
                )}
              </SettingsConsumer>
            </SettingsProvider>
          </LocalizationProvider>
        </ReduxProvider>
      </CacheProvider>
    </>
  );
}

export const wrapRootElement = ({ element }) => {
  return <TopLayout>{element}</TopLayout>;
};


```
```typescript:plugins/gatsby-plugin-mui-emotion/getEmotionCache.ts
import createCache from '@emotion/cache';

// prepend: true moves MUI styles to the top of the <head> so they're loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.
export default function getEmotionCache() {
  return createCache({ key: 'css', prepend: true });
}

```
```javascript:grammar.js

/*

In this example, we will write an algorithm that takes two sentences, one correct sentence and one incorrect sentence. Then we return the sentence that the incorrect words are strikethrough depend on the positions.
1. We convert the sentences into a matrix of words with the position of each word in the sentence.
2. We compare the two sentences and return the incorrect words with the strikethrough style.
Example: 



correct: She no went to the market.
inCorrect: She didn't go to the market.
[['she', 1, 'no-strikethrough'], ['no', 2, 'strikethrough'], ['went', 3, 'strikethrough'], ['to', 4, 'no-strikethrough'], ['the', 5, 'no-strikethrough'], ['market', 6, 'no-strikethrough']]
[['she', 1, 'no-strikethrough'], ['didn\'t', 2, 'no-strikethrough'], ['go', 3, 'no-strikethrough'], ['to', 4, 'no-strikethrough'], ['the', 5, 'no-strikethrough'], ['market', 6, 'no-strikethrough']]
*/
const correct = 'I was very angry. Somehow they always made me angry. I know they are supposed to be amusing, and you should be tolerant, but I wanted to swing on one, any one, anything to shatter that superior, simpering composure. Instead, I walked down the street and had a beer at the bar at the next Bal. The beer was not good and I had a worse cognac to take the taste out of my mouth. When I came back to the Bal there was a crowd on the floor and Georgette was dancing with the tall blond youth, who danced big-hippily, carrying his head on one side, his eyes lifted as he danced. As soon as the music stopped another one of them asked her to dance. She had been taken up by them. I knew then that they would all dance with her. They are like that.';
const inCorrect ="I was so annoyed with them, as usual. I know I should be more tolerant since they're meant to entertain, but I felt like lashing out at one of them to break through that smug composure. Instead, I went to a nearby bar for a beer to cool off. The beer wasn't good so I had some bad cognac too, just to get the taste out. When I returned, a crowd had formed as Georgette danced with one of those tall blond guys, dancing pretentiously with his head tilted as if he didn't have a care. And as soon as the music ended, another one asked her to dance. I realized then they'd all want their turn with her. It's just how they operate";

const correctSentence = correct.split(' ');
const inCorrectSentence = inCorrect.split(' ');

const correctSentenceMatrix = correctSentence.map((word, index) => {
    return [word, index + 1, 'no-strikethrough'];
});

const inCorrectSentenceMatrix = inCorrectSentence.map((word, index) => {
    return [word, index + 1, 'no-strikethrough'];
});

const compareSentences = (correctSentence, inCorrectSentence) => {
    for (let i = 0; i < correctSentence.length; i++) {
        if (correctSentence[i][0] !== inCorrectSentence[i][0]) {
            correctSentence[i][2] = 'strikethrough';
            inCorrectSentence[i][2] = 'strikethrough';
        }
    }
    return [correctSentence, inCorrectSentence];
};

// console.log(compareSentences(correctSentenceMatrix, inCorrectSentenceMatrix));




const cartesianProduct = async (setA, setB) => {
    // Init product set.
    const product = []
    // Go through all elements of sets and push all possible pairs.
    for (let indexA = 0; indexA < setA.length; indexA += 1) {
        for (let indexB = 0; indexB < setB.length; indexB += 1) {
            // Add current product pair to the product set.
            //try with returning idex of the shared elements
            if (setA[indexA] === setB[indexB])
                product.push(setA[indexA])
        }
    }

    // Return cartesian product set.
    return product
}




/**
 * @param arr is array of string as words
 * @param shareArr is array of words but shareArr ⊆ E arr
 * @return arrayOfsharedIndexes which is array index of shared subsets in sets
 * function get array and share array then find the index of shared array in the array
 */
const findIndexShared = async (shareArr, arr) => {
    let arrayOfsharedIndexes = []
    for (let i = 0; i < shareArr.length; i++) {
        const Sharedelement = shareArr[i];
        let theIndexes = arr.indexOf(Sharedelement)
        arrayOfsharedIndexes.push(theIndexes)
    }
    return arrayOfsharedIndexes;
}
async function ProccessSentence() {
    let sentence1 = correct
    let sentence2 = inCorrect
    let arr1 = sentence1.split(' ');
    let arr2 = sentence2.split(' ');
    const firstCartesian = await cartesianProduct(arr1, arr2);
    // third shared element
    // const seconandCartisian = await cartesianProduct(firstCartesian, arr3);
    // console.log(seconandCartisian)
    //for each of seconandCartisian elements,  find the index in the sentences (1-3)
    //the the range between setA(setence1) index 
    // function get array and share array then find the index of shared array in the array
    const sharedindexes1 = await findIndexShared(firstCartesian, arr1)
    const sharedindexes2 = await findIndexShared(firstCartesian, arr2)
    console.log(sharedindexes1)
    console.log(sharedindexes2)


}

ProccessSentence()




function compareSentence(correct, incorrect) {
    let correctArray = correct.split(' ');
    let incorrectArray = incorrect.split(' ');
    let result = [];
    for (let i = 0; i < correctArray.length; i++) {
        if (correctArray[i] === incorrectArray[i]) {
            result.push([correctArray[i], i + 1, 'no-strikethrough']);
        } else {
            result.push([correctArray[i], i + 1, 'strikethrough']);
        }
    }
    return result;
}

console.log(compareSentence("I was very angry. Somehow they always made me angry. I know they are supposed to be amusing, and you should be tolerant, but I wanted to swing on one, any one, anything to shatter that superior, simpering composure. Instead, I walked down the street and had a beer at the bar at the next Bal. The beer was not good and I had a worse cognac to take the taste out of my mouth. When I came back to the Bal there was a crowd on the floor and Georgette was dancing with the tall blond youth, who danced big-hippily, carrying his head on one side, his eyes lifted as he danced. As soon as the music stopped another one of them asked her to dance. She had been taken up by them. I knew then that they would all dance with her. They are like that.", "I was so annoyed with them, as usual. I know I should be more tolerant since they're meant to entertain, but I felt like lashing out at one of them to break through that smug composure. Instead, I went to a nearby bar for a beer to cool off. The beer wasn't good so I had some bad cognac too, just to get the taste out. When I returned, a crowd had formed as Georgette danced with one of those tall blond guys, dancing pretentiously with his head tilted as if he didn't have a care. And as soon as the music ended, another one asked her to dance. I realized then they'd all want their turn with her. It's just how they operate"));






/**
def compareSentences(correct, incorrect):
    correct = correct.split(' ')
    incorrect = incorrect.split(' ')
    correct_sentence = []
    incorrect_sentence = []
    for i in range(len(correct)):
        correct_sentence.append([correct[i], i+1, 'no-strikethrough'])
    for i in range(len(incorrect)):
        incorrect_sentence.append([incorrect[i], i+1, 'no-strikethrough'])
    for i in range(len(correct_sentence)):
        if correct_sentence[i][0] != incorrect_sentence[i][0]:
            incorrect_sentence[i][2] = 'strikethrough'
    return incorrect_sentence

print(compareSentences('She no went to the market.', 'She didn\'t go to the market.'))



def convertSentenceToMatrix(sentence):
    words = sentence.split(' ')
    matrix = []
    for i in range(len(words)):
        matrix.append([words[i], i+1, 'no-strikethrough'])
    return matrix

def compareSentences(correct, incorrect):
    correctMatrix = convertSentenceToMatrix(correct)
    incorrectMatrix = convertSentenceToMatrix(incorrect)
    for i in range(len(correctMatrix)):
        if correctMatrix[i][0] != incorrectMatrix[i][0]:
            correctMatrix[i][2] = 'strikethrough'
    return correctMatrix

correct = 'She no went to the market.'
incorrect = 'She didn\'t go to the market.'
print(compareSentences(correct, incorrect))

 */

```
```javascript:configureAmplify.js
import { Amplify } from 'aws-amplify'
import config from './src/aws-exports';
// Refs: https://github.com/aws-amplify/amplify-cli/issues/1880
config.oauth.domain = process.env.GATSBY_APP_OAUTH_DOMAIN
Amplify.configure(config);

export default Amplify;

```
```javascript:translate_param.js
const en = {
    lang: 'English',
    settings: 'Settings',
    text: 'You can call me anytime you wish.'
}

const sv = {
    lang: 'Svenska',
    settings: 'Inställningar',
    text: 'Du kan ringa mig när som helst.'
}

const de = {
    lang: 'Deutsch',
    settings: 'Einstellungen',
    text: 'Sie können mich jederzeit anrufen.'
}

const fr = {
    lang: 'Français',
    settings: 'Paramètres',
    text: 'Vous pouvez m\'appeler à tout moment.'
}

const it = {
    lang: 'Italiano',
    settings: 'Impostazioni',
    text: 'Puoi chiamarmi quando vuoi.'
}

const es = {
    lang: 'Español',
    settings: 'Ajustes',
    text: 'Puedes llamarme cuando quieras.'
}

const pt = {
    lang: 'Português',
    settings: 'Configurações',
    text: 'Você pode me ligar a qualquer momento.'
}

const da = {
    lang: 'Dansk',
    settings: 'Indstillinger',
    text: 'Du kan ringe til mig når som helst.'
}

const nl = {
    lang: 'Nederlands',
    settings: 'Instellingen',
    text: 'Je kunt me altijd bellen.'
}

const fi = {
    lang: 'Suomi',
    settings: 'Asetukset',
    text: 'Voit soittaa minulle milloin tahansa.'
}

const no = {
    lang: 'Norsk',
    settings: 'Innstillinger',
    text: 'Du kan ringe meg når som helst.'
}

const pl = {
    lang: 'Polski',
    settings: 'Ustawienia',
    text: 'Możesz do mnie zadzwonić w każdej chwili.'
}


```
```plaintext:gatsby-config.mjs
import { dirname } from "path"
import { fileURLToPath } from "url"
import languages from "./src/data/languages.js"

const siteUrl = "https://maila.ai"
const __dirname = dirname(fileURLToPath(import.meta.url))

// Common file paths
const paths = {
  static: `${__dirname}/static`,
  uploads: `${__dirname}/static/img`,
  pages: `${__dirname}/src/pages`,
  images: `${__dirname}/src/img/`,
  articles: `${__dirname}/src/data/articles`,
  sheets: `${__dirname}/src/data/sheets`
}

const siteMetadata = {
  title: `MAILA AI`,
  description: `AI Content Platform`,
  siteUrl,
  image: "img/logo/mstile-150x150.png",
  author: { name: "Kevin Amiri" },
  organization: {
    name: "MAILA AI",
    url: `${siteUrl}/en`,
    logo: "img/logo/logo-dark.svg",
  },
  languages,
}

const config = {
  flags: { DEV_SSR: true },
  siteMetadata,
  plugins: [
    // TypeScript support
    {
      resolve: `gatsby-plugin-typescript`,
      options: { isTSX: true, jsxPragma: `jsx`, allExtensions: true },
    },

    // UI and styling
    `gatsby-plugin-mui-emotion`,

    // Internationalization
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyForNull: "any",
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: false,
      },
    },
    {
      resolve: "gatsby-plugin-i18n-tags",
      options: { tagPage: "src/templates/tags.tsx", tagsUrl: "/tags/", langKeyForNull: "any" },
    },

    // Data transformers
    `gatsby-transformer-json`,
    `gatsby-transformer-csv`,
    `gatsby-plugin-mdx`,
    `gatsby-transformer-javascript-frontmatter`,

    // File system sources
    ...Object.entries(paths).map(([name, path]) => ({
      resolve: `gatsby-source-filesystem`,
      options: { path, name },
    })),

    // Image processing
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    // Utility plugins
    "gatsby-plugin-resolve-src",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              exclude: "Table of Contents",
              tight: false,
              ordered: false,
              fromHeading: 1,
              toHeading: 6,
              className: "table-of-contents"
            },
          },
          `gatsby-remark-autolink-headers`
        ],
      },
    },

    // SEO and site metadata
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `{ allSitePage { nodes { path } } }`,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({ allSitePage: { nodes: allPages } }) => allPages,
        serialize: ({ path, modifiedGmt }) => ({ url: path, lastmod: modifiedGmt }),
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap/sitemap-0.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `maila.ai`,
        short_name: `maila.ai`,
        lang: `en`,
        background_color: `#ffba00`,
        theme_color: `#50a1ff`,
        start_url: `/en/`,
        display: `standalone`,
        description: siteMetadata.description,
        icon: `${paths.images}/logo/mstile-150x150.png`,
        localize: [
          {
            start_url: `/sv/`,
            lang: `sv`,
            name: `AI skrivassistent`,
            short_name: `Maila AI`,
            description: `An AI-powered copywriting and writing assistance platform that enables you to produce professional-grade content in a few minutes`,
          },
        ],
      },
    },
  ],
}

export default config

```

## Goal: Edit/apply given features to the codebase.

---

Task: Add cta on homepage to register for waiting list.

```bash
curl -X POST https://speech.maila.ai/api/wait-list \
  -H "Content-Type: application/json" \
  -d '{"email": "kevin+45678@maila.ai"}'
```