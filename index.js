const testArray = [
    {
    question: "Give two characteristics of a tree data structure.",
    answers: [
      "It is a hierarchical structure",
      "Data is stored in nodes",
      "Nodes are linked by branches",
      "Has a root node",
        "Nodes can link to child nodes",
        "Nodes without any children are called leaf nodes",
    ],
  },
        {
    question: "How to delete a leaf node from a binary tree",
    answers: [
      "Traverse the tree until required node is found",
      "Set the parent node pointer to the leaf node to null",
      "Leave the deleted node for garbage collection",
    ],
  },
            {
    question: "How can a binary tree be traversed",
    answers: [
      "Check if root node is equal to search value if so return found",
      "If value is less than root node take left subtree",
      "If value is greater than root node take right subtree",
      "Repeat process with the subtree until search value is found or until no more branches can be travelled",
    ],
  },
            {
    question: "How is backtracking used in depth-first (post-order) traversals",
    answers: [
      "When a leaf node is reached, the traversal backtracks to the last node with unvisited children",
    ],
  },
            {
    question: "Explain problem recognition",
    answers: [
      "Identifying that there is a problem to be solved",
      "Determining exactly what the problem is from a description",
      "Determining if the problem can be solved with computational methods",
    ],
  },
      {
    question: "In a linked list what is the 'null' pointer, the head pointer and the free pointer for",
    answers: [
      "Head Pointer: To indicate the first element in a list",
        "Free List Pointer: To indicate the next free available location in which we can store data",
        "Null Pointer: Doesn't point to another node, indicates the end of the linked list",
    ],
  },
          {
    question: "How can we add data to a linked list",
    answers: [
      "Check if the free list pointer is not null, ERROR if its null",
      "Add new data item to first free space in the free list",
        "(1) IF the linked list is empty, the new node becomes the first item. Create a start pointer to it",
        "(2) IF the new node should be placed before the first node, change the start pointer to the new node, and the new node now points to the original first node (now its second tho)",
      "(3) IF the new node is to be placed inside the linked list, traverse the linked list until the position is found OR until the end of the linked list is reached",
      "(3) ...the new node points to where the previous node pointed. The previous node points to the new node.",
        "update the free pointer to the next available storage space",
    ],
  },
            {
    question: "How can we remove data from a linked list",
    answers: [
      "Check if the linked list is empty and ERROR if there is no start node",
      "(1) IF the first item is the item to delete, set the start pointer to point to the next node",
      "(2) IF the item to delete is inside the linked list, traverse until we find the item to delete, set the previous pointer to the next pointer",
        "update the free pointer to the next available storage space",
    ],
  },

      {
    question: "Explain what is meant by decomposition",
    answers: [
      "Splits the problem into smaller sub problems",
      "Repeated decomposition gives solvable parts",
      "The division can lead to the development of subroutines",
      "The division can lead to a logical division between programmers/teams",
      "For example one team works on one thing, another team works on another thing",
    ],
  },
  {
    question: "What are the key features of a recursive algorithm",
    answers: [
      "The function calls itself",
      "There is one or more base case to prevent stack overflow",
    ],
  },
  {
    question: "What is meant by concurrent processing",
    answers: [
      "Processes happen at the same time",
      "One process can start before another one finishes",
      "Each process is given a slice of processor time",
        "Different processes can be executed in parallel by different cores",
        "+ More efficient processor use",
        "+ User is able to interact with the computer while other tasks are running",
        "+ Long running tasks do not delay short running tasks",
    ],
  },
{
    question: "Describe how a merge sort works",
    answers: [
      "The data list is split into two lists",
      "These sublists continue to be recursively split until each sublist is one item",
        "The first element in two different sublists is compared, the smaller item is then selected",
        "And written to a new list until both sublists are fully merged",
        "Repeated until all sorted sublists are recombined",
    ],
  },
    {
    question: "Describe how a quick sort works",
    answers: [
      "Choose a pivot",
      "Compare each element to the pivot",
        "Put items smaller than the pivot into the left sublist",
        "Put items larger than the pivot into the right sublist",
        "Choose a pivot in each sublist",
        "If start pointer is larger than the end pointer then swap the data items around",
        "Repeat the process until each item becomes a pivot",
    ],
  },
        {
    question: "Advantages of iteration over recursion (hence vise inversa)",
    answers: [
      "+ Program might run faster",
      "+ More memory efficient",
        "+ Easier to follow",
        "- Iteration can lead to lengthier code",
        "- Iteration can lead to code that is harder to understand",
        "- Some problems are more elegantly coded with a recursive solution",
    ],
  },
        {
    question: "Describe how a bubble sort works",
    answers: [
      "Compare each pair of adjacent elements",
      "If they are not in the correct order then swap the elements",
        "If they are in the correct order then do not swap the elements",
        "When you read the end of the array return to the start",
        "Repeat n elements time",
        "Set a flag to be false whenever a swap is made, repeat the loop if the flag is not false",
    ],
  },
            {
    question: "Why are reusable program components used in programs",
    answers: [
      "One piece of code can be used multiple times",
      "No need to write the same code multiple times",
      "Takes less time to code the program",
      "Easier to maintain as we can change in one place and it changes everywhere",
        "Reduced testing requirements",
        "Can be taken and used in different programs as well as the program they are written in",
    ],
  },
    {
    question: "Give features of an IDE (Integrated Development Environment)",
    answers: [
      "Error Diagnostics: To locate and fix errors",
      "Breakpoints: Stop a program running at a point to check variables",
      "Syntax highlighting: Identify key words, variables and help identify syntax errors",
      "Step through: Run the program line by line to check variable values at each stage",
        "Variable watch window: View how variables change while the program executes",
        "Auto-complete: Start typing a command and it gives completion suggestions",
    ],
  },
      {
    question: "Describe Abstraction",
    answers: [
      "Removal of unnecessary detail to allow programmers to focus on core aspects of the problem",
      "Simplifies a complex program",
        "+ Reduces programming time",
        "+ Reduces complexity of code",
        "+ Reduces computational power required",
        "+ Simplifies the problem so it's easier to solve",
    ],
  },
    
  {
    question: "What are the advantages of OOP (object-oriented programming)",
    answers: [
      "+ Code can easily be reused, classes can be used in other programs and inheritance can be used to extend upon existing classes",  
      "+ Easier to maintain as classes can be modified or extended, and debugging can be easier as encapsulation limits how attributes are changed",
      "+ Code can be more secure as access to attributes can be restricted to being via methods",
      "+ Better for coding as part of a team, as classes can be distributed between team members",
    ],
  },
  {
    question: "Describe how a linear search works",
    answers: [
      "Compare the search item with the first value, then compare the search item with the next value",
      "Repeat the above process until either the end of the array has been reached or the search item is found and then stop",
        "Return the array position or -1 if not found",
    ],
  },
      {
    question: "Describe passing by value",
    answers: [
      "The function receives a copy of the variable",
      "It makes changes to the copy of the variable",
        "It will not overwrite the data in the original variable",
        "It will not keep the changes after the function ends",
    ],
  },
      {
    question: "Advantages and disadvantages of global variables (hence vise inversa for local)",
    answers: [
      "+ Variables doesn't need passing as a parameter",
      "+ You don't need to return a value",
        "+ Can be accessed from any function",
        "- Increases memory usage as it is used until program execution is over",
        "- Alterations within the function may have unwanted side effects elsewhere in the program",
    ],
  },
          {
    question: "Describe and give advantages of Breadth First Traveral",
    answers: [
      "Takes the first value then visits all nodes connected to it. Then takes all nodes connected across those nodes.",
      "+ Efficient when the data searched for is closer to the root",
        "+ Has good time complexity",
    ],
  },
      {
    question: "Advantages Depth First Traversal",
    answers: [
    "+ Efficient when data to be searched for is further down",
        "+ Memory requirement is linear",
    ],
  },
  {
    question: "Describe how insertion sort works",
    answers: [
      "(TO BE IMPROVED) Makes the first value sorted list, then inserts each item into the sorted list",
    ],
  },
    {
        question: "Explain how caching is used",
        answers: [
          "Store data that has been used in cache in case needed again",
            "Allows faster access for future use",
        ],
    },
        {
        question: "Describe the term Inheritance",
        answers: [
          "When the child class takes on attributes and methods from parent class"
        ],
    },
            {
        question: "Why can piplelining improve performance of the processor",
        answers: [
          "Reduces latency as CPU is not idle while waiting for next instruction",
            "Next instruction is fetched while the current one is decoded or executed",
            "All parts of the processor can be used at any instance in time",
        ],
    },

  {
    question: "Difference between a function and a procedure",
    answers: [
      "A function returns a value",
      "A procedure does not return a value, instead it causes a side effect (eg changing a global variable)",
    ],
  },
      {
    question: "What is a heuristic in an A* algorithm",
    answers: [
      "Educated guess to estimate the distance from each node to the destination node",
      "To speed up the process of finding a solution by indentifying which paths to follow first",
        "Leads to a good enough result although it is not 100% reliable",
    ],
  },
          {
    question: "Best (B), Average (A), Worst (W) and Space (S) complexities of Linear Search, Binary Search, Bubble Sort, Insertion Sort, Merge Sort, Quick Sort",
    answers: [
      "BUBBLE SORT (B): O(n), (A): O(n^2), (W): O(n^2), (S): O(1)",
        "INSERTION SORT (B): O(n), (A): O(n^2), (W): O(n^2), (S): O(1)",
        "MERGE SORT (B): O(n log n), (A): O(n log n), (W): O(n log n), (S): O(1)",
        "QUICK SORT (B): O(n log n), (A): O(n log n), (W): O(n^2), (S): O(log n)",
        "LINEAR SEARCH (B): O(1), (A): O(n), (W): O(n)",
        "BINARY SEARCH (B): O(1), (A): O(log n), (W): O(log n)",
    ],
  },
      {
    question: "Give 5 features of Data Mining and 6 outcomes of data mining",
    answers: [
      "Datamining searches large amounts of data",  
      "It searches for relationships between facts that may not be obvious",
      "It may include pattern matching/anomaly detection algorithms",
      "It is used for business modelling",
      "It is used to plan for future events",
      "It can be used to introduce new features",
      "This would lead to an increased use from users and greater revenue due to more users",
      "Remove features people don't use",
      "Can be used to target advertising",
      "It can have privacy concerns",
      "Information may be misused",
    ],
  },
];

let askedArray = []
const question = document.querySelector("#questions-text");
const answers = document.querySelector("#questions-list");
const button = document.querySelector("#questions-button");

const allAnswers = document.querySelector("#all-list");
const allButton = document.querySelector("#all-button");

button.addEventListener("click", state2);
allButton.addEventListener("click", state4);

for (const everyQuestion of testArray) {
  const thisQuestion = document.createElement("p")
  thisQuestion.textContent = everyQuestion.question
  const thisQuestionUL = document.createElement("ul")
  for (const answer of everyQuestion.answers) {
    const thisAnswer = document.createElement("li")
    thisAnswer.textContent = answer
    thisQuestionUL.appendChild(thisAnswer)
  }
  allAnswers.appendChild(thisQuestion)
  allAnswers.appendChild(thisQuestionUL)
}

function state4() {
  allAnswers.classList.toggle("hidden");
}

function state1() {
  button.removeEventListener("click", state1);
  button.addEventListener("click", state2);
  button.textContent = "Re-generate questions";
  answers.classList.toggle("hidden");
}
//oops

function state2() {
  answers.classList.toggle("hidden");
  button.removeEventListener("click", state2);
  button.addEventListener("click", state1);
  button.textContent = "Reveal answers";
  if (askedArray.length === testArray.length) {
    askedArray.shift()
  }
  const filteredArray = testArray.filter(q => !askedArray.includes( q.question ) )
  const randomIndex = Math.floor(Math.random() * filteredArray.length)
  const theQuestion = filteredArray[randomIndex]
  askedArray.push(theQuestion.question)
  
  const previousAnswers = Array.from(answers.querySelectorAll("li"));
  for (const previousAnswer of previousAnswers) {
    answers.removeChild(previousAnswer);
  }

  question.textContent = theQuestion.question;
  for (const answer of theQuestion.answers) {
    const questionLI = document.createElement("li");
    questionLI.textContent = answer;
    answers.appendChild(questionLI);
  }
}
