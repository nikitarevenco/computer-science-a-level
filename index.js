const testArray = [
    {
    question: "Compare paging and segmentation",
    answers: [
      "Both paging and segmentation allow programs to run despite there not being a sufficiently sized, continuous block of free memory",
      "Segmentation logically divides memory into complete sections of programs, so different segments may be different sizes",
      "Paging divides memory into arbitrarily-sized, fixed size pages that are physical divisions",
      "Pages and segments are both stored on disk",
    ],
  },
      {
    question: "Describe the interrupt service routine",
    answers: [
      "Interrupts are checked for at the start of FDE cycle",
      "Interrupts are modelled as a priority queue, where the highest priority interrupts are served first",
      "If the interrupt's priority is higher than the current process' priority, the contents of registers are copied to the stack and the interrupt service routine runs",
      "After the interrupt has been completed, previous register values are restored back from stack",
      "An interrupt can interrupt an interrupt if the interrupt's priority is higher than the current interrupt, in which case the above steps are repeated",
    ],
  },
          {
    question: "List 7 utility software",
    answers: [
      "File Management",
      "Backup",
      "Disk Defragmentation",
      "Compression",
      "Device Drivers",
      "Antivirus",
      "File Repair",
    ],
  },
            {
    question: "What are the 3 types of wire cables",
    answers: [
      "Twisted Pair: Largely affected by noise, low cost and low bandwidth",
      "Coaxial Cables: Less affected by noise, mid cost and mid bandwidth",
      "Fibre Optic: Not affected by noise, high cost and high bandwidth",
    ],
  },
        {
    question: "Advantages and disadvantages of virtual storage",
    answers: [
      "+++ Accessed at any time from any device as long as there is an internet connection",
      "+++ Easy to collaborate with others",
      "+++ Easier to scale than physical storage",
      "--- Can be more expensive than physical storage",
      "--- If the internet connection is slow, the access times will also be slow",
      "--- No internet connection means no access to files",
    ],
  },
  {
    question: "What does it mean to pass a parameter by value?",
    answers: [
      "1. The function receives a copy of the variable",
      "2. Makes changes to the copy of the variable",
      "3. Does not overwrite the data in the original variable",
      "4. Does not keep the changes after the function ends",
    ],
  },
  {
    question: "What does it mean to pass a parameter by reference?",
    answers: [
      "1. The function receives the memory location of the data",
      "2. It makes changes to the original variable",
      "3. It doesn't overwrite the data in the original variable",
      "4. It keeps the changes after the function ends",
    ],
  },
  {
    question: "Give 3 benefits of writing a program with reusable components",
    answers: [
      "1. Saves time from having to write the same algorithm repeatedly",
      "2. Reduced testing requirements",
      "3. Can be taken and used in different programs as well as the program they are written in",
    ],
  },
    {
    question: "Describe how websites are indexed",
    answers: [
      "Web crawler visits site by following a link or selecting from list",
      "Records information such as text",
      "Stores the position of each word within the page in an index",
      "Follows links to other sites",
    ],
  },
      {
    question: "Give the 3 main factors affecting the PageRank(site) output",
    answers: [
      "Damping factor: value between 0 and 1 which is a probability that a user will follow a link",
      "Number of links to target site",
      "And the PageRank(site) score of those other sites",
    ],
  },
  {
    question: "Give 5 features of Data Mining and 6 outcomes of data mining",
    answers: [
      "1. Datamining searches large amounts of data",
      "2. It searches for relationships between facts that may not be obvious",
      "3. It may include pattern matching/anomaly detection algorithms",
      "4. It is used for business modelling",
      "5. It is used to plan for future events",
      "6. It can be used to introduce new features",
      "7. This would lead to an increased use from users and greater revenue due to more users",
      "8. Remove features people don't use",
      "9. Can be used to target advertising",
      "10. It can have privacy concerns",
      "11. Information may be misused",
    ],
  },
  {
    question: "Define pipelining",
    answers: [
      "1. Concurrent processing of multiple instructions",
      "2. One instruction can be fetched while another is being decoded and another is being executed",
    ],
  },
  {
    question: "Compare Lossy vs Lossless compression",
    answers: [
      "1. Lossy permanently removes data. Lossless rewrites original data more efficiently",
      "2. Lossy is not able to recreate original file. Lossless is able to recreate original file",
      "3. Lossy reduces quality. Lossless keeps original quality",
      "4. Lossy file size is smaller than if lossless was used",
    ],
  },
  {
    question: "Compare Compiler and an Interpreter",
    answers: [
      "1. Compiler translates code all at once, Interpreter translates code line by line during runtime",
      "2. Compiler produces executable file for reuse, Interpreter needs to re-translate next time program is run",
      "3. Compiled code doesn't run if there are any errors, Interpreter stops at the first error",
      "4. Compiled programs have the source code hidden, Interpreted programs have the source code visible",
    ],
  },
  {
    question: "Describe magnetic storage",
    answers: [
      "1. Magnetic devices include magnetic hard drives and magnetic tape",
      "2. Data is stored by altering the magnetic field of a small section of the tape or disk, one orientation is a 1, the opposite is a 0",
      "3. Written to using a read/write head, the read/write head can read magnetic fields and retrieve the data.",
      "4. The read/write head moves across the disk",
      "5. Large capacity and cheap, but fragile when moved. Good at storing lots of data at cheap cost and good for backup",
    ],
  },
  {
    question: "Explain Extreme Programming",
    answers: [
      "1. Extreme programming is a software development methodology",
      "2. Focus is on good quality code",
      "3. It is an agile paradigm and designed to allow development to respond to changing user requirements",
      "4. Involves pair programming",
      "5. Program is constantly undergoing iterative development process",
    ],
  },
  {
    question: "Environmental impacts of computers",
    answers: [
      "1. Materials and fuel used in producing and transporting computers has an environmental impact",
      "2. Devices have short lifespans and are quickly disposed of",
      "3. Often end up in a landfill or are sent to 3rd world countries to be dismantled due to the value of some of the materials inside of them",
      "4. These devices are often made up of toxic materials such as lead",
      "5. These can harm people disposing of the waste and damage/pollute the area in which they are buried/burned",
      "6. People have many digital devices, these all need powering/charging, which causes an increase in demand in electricity, increase in fossil fuels being burned",
      "7. Computers have encouraged a paperless approach which has the potential deforestation",
      "8. Computers have allowed people to work from home so they dont have to travel, reducing traffic and pollution",
    ],
  },
  {
    question: "List networking hardware",
    answers: [
      "Hub: Allows multiple devices to connect to one network by broadcasting received transmissions to connected devices",
      "Switch: Like hub, but inspects transmissions keeping unnecessary traffic to a minimum and faster data transfer",
      "Modem: Turns digital information FROM computer INTO analogue signals (and vice versa) that can be sent across wires",
      "Router: Routes data between devices on a LAN or a WAN",
      "Network Interface Controller: Allows both wired and wireless communications between computers",
      "Wireless Access Point: Creates a wireless LAN by connecting to a wired router/switch/hub and the WiFi has limited range",
    ],
  },
  {
    question: "What is a linker",
    answers: [
      "1. Linker links main program to libraries",
      "2. Linkers can either include them in the final executable code",
      "3. Or, linkers can get the executable code to point to the external libraries",
    ],
  },
  {
    question: "Describe encryption",
    answers: [
      "1. Encryption means that data is scrambled so that if it is received it cannot be understood",
      "2. A key is required to decrypt",
      "3. Symmetric encryption uses on key for encrypt/decrypt and so key exchange is problematic",
      "4. Assymetric encryption uses public and private keys so no need to exchange keys",
      "5. Regulation of Investigatory Powers gives authorities the power to compel disclosure of encryption keys",
      "6. Encrypted messages cannot be read by outsiders without the key",
    ],
  },
  {
    question: "Explain the threats to a network",
    answers: [
      "1. Malware and viruses are software that can have a negative impact on computer systems",
      "2. Spyware and keyloggers record information input and send back to third party",
      "3. Phishing attacks attempt to steal data by fraudulently appearing as legitimate emails asking for secure information",
      "4. Denial of service attacks can overload a computer with traffic and effectively disable access for legitimate users",
      "5. Can be prevented by using firewall to restrict traffic entering and leaving the network",
      "6. Using up-to-date software and restricted access to wireless networks can limit risks, as well as not using USBs",
    ],
  },
  {
    question: "Describe the computer misuse act",
    answers: [
      "1. Legislation aimed at criminalising unauthorised access to a computer system",
      "2. Unauthorised access to a computer system, Unauthorised access with intent to commit further offences, Unauthorised modification of computer material",
      "3. Punishable by up to 12 months in prison and an unlimited fine",
      "4. White hat hackers will not break this law. Requires authorisation from system owner",
    ],
  },
  {
    question: "Describe the 4 different modes of addressing memory.",
    answers: [
      "1. Immediate addressing: The operand holds the actual data to be used, LDA 6 would load value 6",
      "2. Immediate addressing allows simple access to data with no fetch required but limited by data size of operand",
      "3. Direct addressing: Operand holds the address that holds the data to be used, LDA 6 loads data at address 6",
      "4. Direct addressing allows data to be fetched from memory. Data can potentially be larger in size that with immediate addressing but address range limited by size of operand",
      "5. Indirect addressing: Operand holds an address which is where the data to be used is stored, LDA 6 loads data at address 6, which itself is used to load data at that address",
      "6. Indirect addressing allows a larger range of addresses to be accessed as address fetched. But multiple fetches required to access data",
      "7. Indexed addressing: Operand holds an address which is offset using the Index Register to find the true address of the data to be used, LDA 6 would load the 6th indexed element",
      "8. Indexed addressing allows the index register to be manipulated to access data stored sequentially for example in an array",
    ],
  },
  {
    question: "Describe SSD storage (solid-state drive)",
    answers: [
      "1. Store data using semiconductors",
      "2. Drivers can be based on NAND flash or DRAM",
      "3. No moving parts are required",
      "4. Are fast and access data faster, but they have a smaller capacity.",
      "5. Limited lifespan due to limited read/writes",
    ],
  },
  {
    question: "Describe the spiral model methodology",
    answers: [
      "1. Spiral model has four quadrants: Determine Objectives, Identify and Manage Risk, Develop and Test, Plan next iteration",
      "2. Spiral model requires client feedback, which informs future development and prototypes which feedback into future revisions",
      "3. Spiral model produces functional prototypes where features are added incrementally",
      "4. Spiral model has its focus mostly on risk, projects may be modified or dropped if risk is too great, which makes it good at risk management",
    ],
  },
  {
    question: "Describe the waterfall lifecycle methodology",
    answers: [
      "1. Waterfall has a structured analysis/design/development/test flow. Progress to the next step is not made until the previous has been completed.",
      "2. Waterfall is very structured and very reliant on getting the definition of requirements correct at the start.",
      "3. This forces the project to be well understood before it is began",
      "4. Waterfall is good where requirements are very clear and outcomes are known.",
    ],
  },
    {
    question: "Explain the role of the PC in the FDE cycle",
    answers: [
      "PC (program counter) holds address of the next instruction to be fetched",
      "contents of PC are copied to the MAR (memory address register) at the start of every FDE cycle",
      "incremented by 1 every cycle (after the instruction has been fetched)",
    ],
  },
    {
    question: "Explain the role of the accumulator in the FDE cycle",
    answers: [
      "Holds result of calculations and data which has come from the MDR (memory data register)",
      "Holds all input/output",
      "Checked for conditional branching (e.g. BRZ)",
    ],
  },
  {
    question: "Compare RISC and CISC instruction sets and evaluate",
    answers: [
      "1. CISC is complex instruction set. Lots of instructions available. RISC is reduced instruction set. Smaller number of instructions available. Several RISC instructions can be combined to perform the same tasks as CISC processors.",
      "2. RISC has less complex circuitry. CISC circuits are more complicated and expensive.",
      "3. RISC instructions can take one cycle whereas CISC instructions can take several",
      "4. RISC can only do complex things by combining multiple instructions, whereas CISC is done in one line",
      "5. Compilers for RISC need to be more complex than compilers for CISC",
      "6. CISC are more expensive and less power efficient and require larger battery and cooling mechanics but can accomplish more",
    ],
  },

  {
    question:
      "Describe the features & impact of an IDE and (Integrated development environment)",
    answers: [
      "1. IDE is software that includes an editor, compiler & a run-time environment",
      "2. It has autocorrect & autocomplete functionality to help create code",
      "3. It can help with testing the code with a debugger, which allows to set breakpoints and step through lines 1-by-1",
      "4. It can also help with testing the code with a variable watch window",
      "5. It can help reduce errors",
      "6. It can help reduce time spent to write the program [with a justification]",
      "7. It allows to write and test in one environment which makes it easier to code since you dont have to write in 1 place, run in another place",
    ],
  },
  {
    question: "Explain what is meant by decomposition",
    answers: [
      "1. Splits the problem into smaller sub problems",
      "2. Repeated decomposition gives solvable parts",
      "3. The division can lead to the development of subroutines",
      "4. The division can lead to a logical division between programmers/teams",
      "5. For example one team works on one thing, another team works on another thing",
    ],
  },
  {
    question: "Concurrent processing",
    answers: [
      "1. Processes are happening at the same time",
      "2. One process may need to start before a second has finished",
      "3. Individual processes are threads, and each thread has a life line",
      "4. One request will be sent to the server, this will have a thread",
    ],
  },
  {
    question: "Types of Operating Systems",
    answers: [
      "1. Multi-tasking: Runs multiple programs at once",
      "2. Embedded: Run on dedicated hardware using low-power processors with very little memory, for example on a washing machine",
      "3. Distributed: The OS controls and coordinates the computers presenting them to the user as if they were one system",
      "4. Multi-User: Computer manages the user's permissions and access rights when they log in, server OS software handles multiple people using different computers on a network at the same time",
      "5. Real-time: Plenty of redundancy is built into these systems so they can handle sudden increases in input, these rarely run at capacity, runs actions within a guaranteed amount of time",
    ],
  },

  {
    question: "Compare Harvard and Von Neumann Architecture",
    answers: [
      "1. Harvard uses separate memory addresses for instructions and data, von neumann uses same physical memory address for instructions & data",
      "2. Harvard processor needs one cycle to complete an instruction, von neumann needs two clock cycles to execute an instruction",
      "3. Harvard has control unit for two buses is more complicated which adds to the development cost, von neumann has simpler control unit and development of one is cheaper and faster",
      "4. Harvard data transfers and instruction fetches can be performed at the same time, while von neumann data transfers and instruction fetches cannot be",
    ],
  },
  {
    question: "Give 2 examples of optical storage and describe how it works. Give its upsides and downsides",
    answers: [
      "1. DVD & Blu-ray",
      "2. Works by shining a laser on the media & processing the reflection off the media",
      "2. Optical storage is cheap to produce",
      "3. It is also lightweight & portable",
      "4. Optical storage has slow access time & it is prone to scratches",
    ],
  },
  {
    question: "Explain what is meant by ACID and the 4 principles of ACID",
    answers: [
      "1. Atomicity: Change is either performed or not performed. Half-finished changes must halt",
      "2. Consistency: Databases have rules. Transactions should never break these rules",
      "3. Isolation: Transaction must not be able to be affected by a different transaction",
      "4. Durability: Once written, transactions must not be lost in case of system failure",
    ],
  },
  {
    question: "What happens in the TCP/IP stack, the 4 steps",
    answers: [
      "1. Application layer: Protocol to be used is decided based on application for eg HTTPS for browser service, +Adds encryption, Passes to transport layer to send, Gets data from transport layer when receiving, +Decrypts message",
      "2. Transport layer: Establishes end-to-end connections, +When connection is made it splits the data to be transmitted into packets, +In every packet there is the number of the packet, the total number of packets, and the port number the packet should use",
      "3. Internet layer: Adds SOURCE IP and DESTINATION IP to each packet",
      "4. Link layer: Receives layered data from internet layer to send, passes layered data back up to internet layer when receiving, adds MAC address",
    ],
  },
  {
    question: "Explain record locking",
    answers: [
      "1. The outcome of concurrent transactions is the same as if transactions were completed sequentially",
      "2. Record locking allows one user to modify record level data at any one time",
      "3. Data that is being used elsewhere cannot be modified",
      "4. Disadvantage: Prevents anyone accessing a record in use by another person, with delays or deadlock.",
    ],
  },
  {
    question: "Explain referential integrity",
    answers: [
      "1. Referential integrity ensures changes are consistent across a database",
      "2. If a record is removed all references to it are removed",
      "3. A foreign key value must have a corresponding primary key value in another table",
    ],
  },
  {
    question: "Give 2 features of RAM",
    answers: [
      "1. RAM is volatile",
      "2. RAM is used for storing parts of the OS currently in use",
      "3. ROM is non-volatile",
      "4. ROM is used for storing BIOS of the computer",
    ],
  },
  {
    question: "How do compilers work, 4 stages",
    answers: [
      "1. Lexical analysis: Comments and whitespace removed, variable names added to a symbol table, code turned into a series of tokens",
      "2. Syntax analysis: Abstract syntax tree is built from tokens produced in the previous stage, checks the code follows the syntax, generates errors if any tokens break the rules of the language",
      "3. Code generation: Abstract code tree is converted to object code, object code is machine code produced before the final step (linker) is run",
      "4. Code optimisation: Tweaks the code so it will run as quickly and use as little memory as possible",
    ],
  },
  {
    question: "Requirements of hashing and what they are useful for",
    answers: [
      "1. Hashes have to be irreversible: Impossible to find the input given only output",
      "2. They must be deterministic: Same input will always give same output",
      "3. Hashes must have collision resistance: Reduce number of collisions by making sure all outputs are equally likely",
      "4. Hashes are useful for searching through hash tables fast",
      "5. Hashes are also useful for encryption",
    ],
  },
  {
    question: "Explain what is meant by Packet Switching",
    answers: [
      "Breaks streams of data into packets each sent independently",
      "At each node packets are sent via the least congested route, maximizing bandwidth",
      "Quality of transmission is not guaranteed",
      "Packets can take different routes to their destination and arrive out of order",
      "More affordable than circuit switching as all bandwidth can be used at once",
      "Requires less complex infrastructure and can respond if parts of a network fail",
    ],
  },
    {
    question: "Discuss features of client-server model",
    answers: [
      "Server controls access to file store and access to the internet",
      "The clients make requests to the server",
      "+++ Easier to manage file security & backups",
      "+++ Easier to install and update software on all computers",
      "--- Single point of failure",
      "--- Can be expensive to setup and maintain",
      "--- Users lose connection if server fails",
      "--- Requires professionals to maintain",
    ],
  },
      {
    question: "Discuss features of peer-to-peer model",
    answers: [
      "Every peer is equal",
      "+++ Cheaper to setup and maintain",
      "+++ No dependency on single server",
      "+++ Professionals are not required to maintain",
      "--- Network is less secure",
      "--- Users have to manage own backups",
      "--- Can be difficult to coordinate between all users",
    ],
  },
    {
    question: "Explain what is meant by Circuit Switching",
    answers: [
      "Creates a temporary and dedicated link of fixed bandwidth between the source and destination",
      "Link only lasts until the transmission is complete",
      "Guarantees quality of tramission through dedicated bandwidth",
      "Amazing for data that needs a constant end-to-end link like real-time video",
      "Downside is that a lot of the potential bandwidth can be wasted",
      "All packets use the same path",
    ],
  },
  {
    question: "Explain what is meant by a library",
    answers: [
      "1. Library is a section of code written by other programmers containing useful routines like GUI routines, encryption",
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
