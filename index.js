const testArray = [
    {
    question: "Compare Paging and Segmentation",
    answers: [
      "Both paging and segmentation allow programs to run despite there not being a sufficiently sized, continuous block of free memory",
      "Segmentation logically divides memory into complete sections of programs, so different segments may be different sizes",
      "Paging divides memory into arbitrarily-sized, fixed size pages that are physical divisions",
      "Pages and segments are both stored on disk",
    ],
  },
        {
    question: "Name 5 scheduling algorithms",
    answers: [
      "Round robin",
      "Shortest remaining time",
      "Multi-level feedback queue: Several ready queues are used, each with a different scheduling algorithm. Jobs can move between queues as priorities change",
      "First come first serve",
        "Shortest job first",
    ],
  },
            {
    question: "What are the steps to normalise a database to 3NF",
    answers: [
      "(1NF) All field names must be unique",
      "(1NF) All tables must have a primary key",
      "(1NF) Must be no repeated fields",
      "(1NF) All data in the fields needs to be atomic so that it cannot be further split up",
        "(2NF) Partial dependencies should be removed (eg many-to-many relationships)",
        "(3NF) Non-key dependencies should be removed",
    ],
  },
            {
    question: "What are the benefits of using two's complement over sign and magnitude",
    answers: [
      "Calculations are more easily performed on two's complement",
      "Two's complement can represent more numbers (1000 000 gives -128 in two's complement, 1111 1111 gives -127 in sign and magnitude)",
      "Two's complement has only one representation for zero, sign and magnitude can represent zero in two ways",
    ],
  },
            {
    question: "What is the difference between an array and a list",
    answers: [
      "Array is of a defined size that cannot change",
      "Array can only hold one type of data",
      "Size of a list can change",
      "List can hold multiple types of data",
    ],
  },
      {
    question: "Describe the interrupt service routine",
    answers: [
      "Interrupts are checked for at the start of FDE cycle",
        "If the interrupt is of a lower or equal priority than the current process then the current process continues",
        "If an interrupt is raised contents of registers are copied to stack",
        "Flags are set to determine if the interrupts are enabled / disabled",
        "Interrupt service routine runs",
        "After interrupt complete, previous register values restored back from stack",
        "Flag is reset",
        "If higher priority interrupt received during servicing of interrupt this is added to the stack and new interrupt dealt with"
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
      "The function receives a copy of the variable",
      "Makes changes to the copy of the variable",
      "Does not overwrite the data in the original variable",
      "Does not keep the changes after the function ends",
    ],
  },
  {
    question: "What does it mean to pass a parameter by reference?",
    answers: [
      "The function receives the memory location of the data",
      "It makes changes to the original variable",
      "It keeps the changes after the function ends",
    ],
  },
{
    question: "Give examples of contemporary processors",
    answers: [
      "SIMD (Single Instruction Multiple Data): Parallel Processing where a processor carries out a single instruction on multiple data at the same time - often used by graphic processors",
      "MIMD (Multiple Instruction Multiple Data): Multiple Instructions being carried across multiple data items across several cores",
    ],
  },
  {
    question: "Give 3 benefits of writing a program with reusable components",
    answers: [
      "Saves time from having to write the same algorithm repeatedly",
      "Reduced testing requirements",
      "Can be taken and used in different programs as well as the program they are written in",
    ],
  },
    {
    question: "Describe how websites are indexed",
    answers: [
      "A Web crawler visits site by following a link or selecting from list",
      "Records information such as text",
      "Stores the position of each word within the page in an index",
      "Follows links to other sites",
    ],
  },
      {
    question: "Give the 3 main factors affecting the PageRank(site) output",
    answers: [
      "Damping factor: a value between 0 and 1 which is a probability that a user will follow a link",
      "Number of links to target site",
      "And the PageRank(site) score of those other sites",
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
  {
    question: "Define pipelining",
    answers: [
      "Concurrent processing of multiple instructions",
      "One instruction can be fetched while another is being decoded and another is being executed",
    ],
  },
      {
    question: "Describe Black Box Testing",
    answers: [
      "Black Box Testing is not concerned with how the program works",
      "Only checks if a specific input produces a specific output, any other result will fail",
        "Code efficiency is not important",
    ],
  },
      {
    question: "Describe White Box Testing",
    answers: [
      "Testing algorithms in the code and making sure all parts of those algorithms function as intended",
      "Testing all possible paths of execution",
        "Also checks the efficiency of the code",
    ],
  },
          {
    question: "Describe the ways in which CPU performance can be increased",
    answers: [
      "Increased clock speed",
      "Increased cache size",
        "Increased core count",
    ],
  },
      {
    question: "Describe Alpha and Beta testing",
    answers: [
      "Alpha: Early version testing - limited to certain individuals",
    "Beta: Much wider community. Program is in an almost finished state",
        "Alpha and Beta Testing is done to test for program performance, compatibility issues, load testing etc."
    ],
  },
  {
    question: "Compare Lossy vs Lossless compression",
    answers: [
      "Lossy permanently removes data. Lossless rewrites original data more efficiently",
      "Lossy is not able to recreate original file. Lossless is able to recreate original file",
      "Lossy reduces quality. Lossless keeps original quality",
      "Lossy file size is smaller than if lossless was used",
    ],
  },
    {
        question: "Name 3 types of translator",
        answers: [
          "Compiler",
            "Interpreter: just-in-time compilation",
            "Assembler: For assembly language",
        ],
    },
  {
    question: "Compare Compiler and an Interpreter",
    answers: [
      "Compiler translates code all at once, Interpreter translates code line by line during runtime",
      "Compiler produces executable file for reuse, Interpreter needs to re-translate next time program is run",
      "Compiled code doesn't run if there are any errors, Interpreter stops at the first error",
      "Compiled programs have the source code hidden, Interpreted programs have the source code visible",
    ],
  },
  {
    question: "Describe magnetic storage",
    answers: [
      "Magnetic devices include magnetic hard drives and magnetic tape",
      "Data is stored by altering the magnetic field of a small section of the tape or disk, one orientation is a 1, the opposite is a 0",
      "Written to using a read/write head, the read/write head can read magnetic fields and retrieve the data.",
      "The read/write head moves across the disk",
      "Large capacity and cheap, but fragile when moved. Good at storing lots of data at cheap cost and good for backup",
    ],
  },
      {
    question: "Explain Agile Methodology",
    answers: [
      "The product is built in a series of iterations known as sprints",
      "A sprint is a period of a certain amount of time where a team has focused goals to complete certain amounts of work",
      "Each sprint should be bite sized and take 1-4 weeks of work",
    ],
  },
          {
    question: "Explain Rapid Application Development (RAD)",
    answers: [
      "Methodology that involves producing successive prototypes of a software until a final version is approved",
      "After a program has been initially approved, increasingly refined prototypes are produced",
      "Designed, tested and evaluated with the end user",
        "The user will either be happy or say they want more features, in which case a new cycle will start",
        "+++ Requirements don't need to be entirely clear from the start",
        "+++ Focus groups involving the user can be used to gather requirements without the need for full formal requirements document upfront",
        "+++ Continuous feedback from the client means the solution is likely to have excellent usability",
        "--- Focus on usability rather than how the product works - not suited for projects where code efficiency is very important",
        "--- Regular contact with client must be maintained at all times",
        "--- Scales poorly for large projects with big teams",
        "Good for projects where the initial requirements are not fully understood, as the iterative nature prevents development from becoming side-tracked",
    ],
  },
  {
    question: "Explain Extreme Programming",
    answers: [
      "Extreme programming is a software development methodology",
      "Focus is on good quality code",
      "It is an agile paradigm and designed to allow development to respond to changing user requirements",
      "Involves pair programming",
      "Program is constantly undergoing iterative development process",
      "An end user is integral to the methodology",
    ],
  },
      {
    question: "Give the upsides and downsides of Agile and Extreme Programming methodologies",
    answers: [
      "+++ Emphasises programming, so the quality of end code is likely to be very high",
      "+++ Core principles and processes promote respect and collaboration, leading to a very productive development team",
      "--- Requires a team of programmers working in close collaboration - unlikely to work well if the team is widely distributed geographically",
      "--- Client must be able to commit to having a full-time representative working with the development team",
      "--- Some of the processes involved in extreme programming such as paired programming can be quite costly",
      "When the emphasis of a project is on the quality of finished code, agile and extreme programming processes are ideal",
    ],
  },
  {
    question: "Environmental impacts of computers",
    answers: [
      "Materials and fuel used in producing and transporting computers has an environmental impact",
      "Devices have short lifespans and are quickly disposed of",
      "Often end up in a landfill or are sent to 3rd world countries to be dismantled due to the value of some of the materials inside of them",
      "These devices are often made up of toxic materials such as lead",
      "These can harm people disposing of the waste and damage/pollute the area in which they are buried/burned",
      "People have many digital devices, these all need powering/charging, which causes an increase in demand in electricity, increase in fossil fuels being burned",
      "Computers have encouraged a paperless approach which has the potential to reduce deforestation",
      "Computers have allowed people to work from home so they dont have to travel, reducing traffic and pollution",
    ],
  },
  {
    question: "List 6 networking hardware",
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
      "Linker links main program to libraries",
      "Linkers can either include them in the final executable code",
      "Or, linkers can get the executable code to point to the external libraries",
    ],
  },
  {
    question: "Describe encryption",
    answers: [
      "Encryption means that data is scrambled so that if it is received it cannot be understood",
      "A key is required to decrypt",
      "Symmetric encryption uses one key for encryption/decryption and so key exchange is problematic",
      "Assymetric encryption uses public and private keys so no need to exchange keys",
      "Regulation of Investigatory Powers gives authorities the power to compel disclosure of encryption keys",
      "Encrypted messages cannot be read by outsiders without the key",
    ],
  },
  {
    question: "Explain the threats to a network",
    answers: [
      "Malware and viruses are software that can have a negative impact on computer systems",
      "Spyware and keyloggers record information input and send back to third party",
      "Phishing attacks attempt to steal data by fraudulently appearing as legitimate emails asking for secure information",
      "Denial of service attacks can overload a computer with traffic and effectively disable access for legitimate users",
      "Can be prevented by using firewall to restrict traffic entering and leaving the network",
      "Using up-to-date software and restricted access to wireless networks can limit risks, as well as not using USBs",
    ],
  },
            {
    question: "Describe the Copyright Designs and Patents Act",
    answers: [
      "Gives authors ownership right of intellectual property",
      "This is automatic and there is no need to apply",
      "Other people using/distributing can be prosecuted IF THEY are not given permission",
      "Permission can be given eg if they pay",
    ],
  },
                {
    question: "What are some of the main SQL commands you should know?",
    answers: [
      "DROP TABLE <table>",
      "SELECT <field1>, <field2>... FROM <table> WHERE <condition(s)>",
        "DELETE FROM <table> WHERE <condition>",
      "INSERT INTO <table> <field1> <field2> VALUES <value1> <value2>",
      "The following can be substituted into any table::: <table1> JOIN <table2> ON <table1>.<field> = <table2>.<field>",
        "eg: SELECT field1, field2 FROM Student JOIN Teachers ON Student.room = Teachers.room WHERE Student.TutorGroup = '10B'",
    ],
  },
{
    question:
      "Give names of 4 legislations",
    answers: [
      "Computer Misuse Act",
        "Regulation of Investigatory Powers Act", 
"Data Protection Act",
"Copyright Design and Patents Act",
    ],
  },
  {
    question: "Describe the Computer Misuse Act",
    answers: [
      "Legislation aimed at criminalising:",
      "Unauthorised access to a computer system, Unauthorised access with intent to commit further offences, Unauthorised modification of computer material",
        "and Making, Supplying or Obtaining tools used to commit computer misuse offenses",
      "White hat hackers will not break this law. Requires authorisation from system owner",
    ],
  },
      {
    question: "Describe the Regulation of Investigatory Powers Act",
    answers: [
      "Authorities have the rights to demand that Internet Service Providers (ISPs) provide access to customer communications",
      "Allow mass surveillance of communications",
      "Allow monitoring of an individual's internet activities",
        "Demands that access be granted to protected or encrypted information",
        "Demands that ISPs install equipment that faciliates surveillance",
    ],
  },
  {
    question: "Describe the Data Protection Act",
    answers: [
      "=== DATA MUST: ===",
      "Only be held for specific reasons",
      "Collected and used fairly inside the law",
      "Only used for the registered purpose it was intended",
        "Be kept accurate and up to date",
        "Be kept safe and secure",
        "Not be kept for longer than necessary",
        "Adequate, relevant and not excessive",
        "No transfer outside the European Environment Agency unless the country has data protection",
        "USERS HAVE RIGHTS: Of correction, Of access, Of preventing direct marketing, Of preventing distress, Of preventing automatic detection, Of compensation",
    ],
  },
  {
    question: "Describe the 4 different modes of addressing memory.",
    answers: [
      "Immediate addressing: The operand holds the actual data to be used, LDA 6 would load value 6",
      "Immediate addressing allows simple access to data with no fetch required but limited by data size of operand",
      "Direct addressing: Operand holds the address that holds the data to be used, LDA 6 loads data at address 6",
      "Direct addressing allows data to be fetched from memory. Data can potentially be larger in size than with immediate addressing but address range limited by size of operand",
      "Indirect addressing: Operand holds an address which is where the data to be used is stored, LDA 6 loads data at address 6, which itself is used to load data at that address",
      "Indirect addressing allows a larger range of addresses to be accessed as address fetched. But multiple fetches required to access data",
      "Indexed addressing: Operand holds an address which is offset using the Index Register to find the true address of the data to be used, LDA 6 would load the 6th indexed element",
      "Indexed addressing allows the index register to be manipulated to access data stored sequentially for example in an array",
    ],
  },
  {
    question: "Describe SSD storage (solid-state drive)",
    answers: [
      "Store data using semiconductors",
      "Drivers can be based on NAND flash or DRAM",
      "No moving parts are required",
      "Are fast and access data faster, but they have a smaller capacity.",
      "Limited lifespan due to limited read/writes",
    ],
  },
  {
    question: "Describe the spiral model methodology",
    answers: [
      "Spiral model has four quadrants: Determine Objectives, Identify and Manage Risk, Develop and Test, Plan next iteration",
      "Spiral model requires client feedback, which informs future development and prototypes which feedback into future revisions",
      "Spiral model produces functional prototypes where features are added incrementally",
      "Spiral model has its focus mostly on risk, projects may be modified or dropped if risk is too great, which makes it good at risk management",
        "+++ Risk management is at the heart of this model",
        "+++ Excellent for projects that contain a high level of risk",
        "--- Complex nature of risk analysis increases costs - risk management is a highly specialised skill.",
        "--- If risk analysis is done badly, the project suffers and can have unrealistic expectations.",
        "Suitable for large-scale problems and those that involve a high degree of risk, especially where the user doesn't fully understand their requirements upfront"
    ],
  },
  {
    question: "Describe the waterfall lifecycle methodology",
    answers: [
      "Waterfall has a structured analysis/design/development/test flow. Progress to the next step is not made until the previous has been completed.",
      "Waterfall is very structured and very reliant on getting the definition of requirements correct at the start.",
      "This forces the project to be well understood before it is began",
      "Waterfall is good where requirements are very clear and outcomes are known.",
        "+++ Simplicity makes it easy to manage",
        "+++ Everyone on the project is very clear on the responsibilities at each stage",
        "+++ Clear deliverables",
        "+++ Easy to see if a project is running to schedule",
        "--- Carries a lot of risk",
        "--- User doesn't get to see the product for the first time until the project is near the end",
        "--- Misunderstanding requirements can lead to a project that is not easy to fix",
        "--- Requirements must be very well understood, so this model is not suitable for complex projects",
        "Suitable for large-scale development projects assuming they are well-understood and carry little risk",
    ],
  },
        {
    question: "Explain the role of the MDR",
    answers: [
      "Memory Data Register (MDR) Used to temporarily store the data which is read from or written to memory",
      "All data to and from the memory must travel down the data bus and pass through the MDR",
    ],
  },        {
    question: "Explain the role of the CU",
    answers: [
      "Control Unit (CU)",
      "Coordinates all activities of the CPU",
        "Directs flow of data between CPU and other devices",
        "Sends memory read or write requests to main memory on the control bus",
    ],
  },
    {
    question: "Explain the role of the MAR",
    answers: [
      "Memory Address Register (MAR)",
      "Holds address of the memory location from which data or an intruction is to be fetched or to which data is to be written",
        "Sends these address to the memory down the address bus",
    ],
  },
            {
    question: "Explain the role of the ALU",
    answers: [
      "Arithmetic Logic Unit (ALU)",
      "Performs arithmetic and logical operations on data",
        "Temporarily holds result of calculations such as from the accumulator",
    ],
  },
                {
    question: "Explain the three buses",
    answers: [
      "Address Bus: Carries memory addresses that identify where the data is being read from or written to",
      "Data Bus: Carries the binary 1s and 0s that make up the actual information being transmitted around the CPU",
        "Control Bus: Carries command and control signals to and from every component",
    ],
  },
        {
    question: "Explain the role of the CIR",
    answers: [
      "Current Instruction Register (CIR)",
      "Holds the current instruction being executed",
        "Contents of MDR copied to CIR if its an instruction",
        "Contains opcode and operands of the current instruction",
    ],
  },
    {
    question: "Explain the role of the PC",
    answers: [
      "PC (program counter) holds address of the next instruction to be fetched",
      "contents of PC are copied to the MAR (memory address register) at the start of every FDE cycle",
      "incremented by 1 every cycle (after the instruction has been fetched)",
    ],
  },
    {
    question: "Explain the role of the ACC",
    answers: [
      "Holds result of calculations and data which has come from the MDR (memory data register)",
      "Holds all input/output",
      "Checked for conditional branching (e.g. BRZ)",
    ],
  },
  {
    question: "Compare RISC and CISC instruction sets and evaluate",
    answers: [
      "CISC is complex instruction set. Lots of instructions available. RISC is reduced instruction set. Smaller number of instructions available.",
      "RISC has less complex circuitry. CISC circuits are more complicated and expensive.",
        "Several RISC instructions can be combined to perform the same tasks as CISC processors.",
      "RISC instructions can take one cycle whereas CISC instructions can take several",
      "RISC can only do complex things by combining multiple instructions, whereas CISC is done in one line",
      "Compilers for RISC need to be more complex than compilers for CISC",
      "CISC are more expensive and less power efficient and require larger battery and cooling mechanics but can accomplish more",
    ],
  },

  {
    question:
      "Describe the features & impact of an IDE and (Integrated development environment)",
    answers: [
      "IDE is software that includes an editor, compiler & a run-time environment",
      "It has autocorrect & autocomplete functionality to help create code",
      "It can help with testing the code with a debugger, which allows to set breakpoints and step through lines 1-by-1",
      "It can also help with testing the code with a variable watch window",
      "It can help reduce errors",
      "It can help reduce time spent to write the program [with a justification]",
      "It allows to write and test in one environment which makes it easier to code since you dont have to write in 1 place, run in another place",
        
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
    question: "Concurrent processing",
    answers: [
      "Processes are happening at the same time",
      "One process may need to start before a second has finished",
      "Individual processes are threads, and each thread has a life line",
      "One request will be sent to the server, this will have a thread",
    ],
  },
  {
    question: "Types of Operating Systems",
    answers: [
      "Multi-tasking: Runs multiple programs at the same time",
      "Embedded: Has a dedicated function and is read-only",
      "Distributed: Allows multiple computers to work together on a single task",
      "Multi-User: Allows multiple users at the same time",
      "Real-time: Plenty of redundancy is built into these systems so they can handle sudden increases in input, these rarely run at capacity, runs actions within a guaranteed amount of time",
    ],
  },

  {
    question: "Compare Harvard and Von Neumann Architecture",
    answers: [
      "Harvard uses separate memory addresses for instructions and data, von neumann uses same physical memory address for instructions & data",
      "Harvard processor needs one cycle to complete an instruction, von neumann needs two clock cycles to execute an instruction",
      "Harvard has control unit for two buses which is more complicated and adds to the development cost, von neumann has simpler control unit and development of one is cheaper and faster",
      "Harvard data transfers and instruction fetches can be performed at the same time, while von neumann data transfers and instruction fetches cannot be",
    ],
  },
  {
    question: "Give 2 examples of optical storage and describe how it works. Give its upsides and downsides",
    answers: [
      "DVD & Blu-ray",
      "Works by shining a laser on the media & processing the reflection off the media",
      "+++ Optical storage is cheap to produce",
      "+++ It is also lightweight & portable",
      "--- Optical storage has slow access time & it is prone to scratches",
    ],
  },
  {
    question: "Explain what is meant by ACID and the 4 principles of ACID",
    answers: [
      "Atomicity: Change is either performed or not performed. Half-finished changes must halt",
      "Consistency: Databases have rules. Transactions should never break these rules",
      "Isolation: Transaction must not be able to be affected by a different transaction",
      "Durability: Once written, transactions must not be lost in case of system failure",
    ],
  },
  {
    question: "What happens in the TCP/IP stack, the 4 steps",
    answers: [
      "Application layer: Protocol to be used is decided based on application for eg HTTPS for browser service, +Adds encryption, Passes to transport layer to send, Gets data from transport layer when receiving, +Decrypts message",
      "Transport layer: Establishes end-to-end connections, +When connection is made it splits the data to be transmitted into packets, +In every packet there is the number of the packet, the total number of packets, and the port number the packet should use",
      "Internet layer: Adds SOURCE IP and DESTINATION IP to each packet",
      "Link layer: Receives layered data from internet layer to send, passes layered data back up to internet layer when receiving, adds MAC address",
    ],
  },
  {
    question: "Explain record locking",
    answers: [
      "The outcome of concurrent transactions is the same as if transactions were completed sequentially",
      "Record locking allows one user to modify record level data at any one time",
      "+++ Data that is being used elsewhere cannot be modified",
      "--- Prevents anyone accessing a record in use by another person, with delays or deadlock.",
    ],
  },
  {
    question: "Explain referential integrity",
    answers: [
      "Referential integrity ensures changes are consistent across a database",
      "If a record is removed all references to it are removed",
      "A foreign key value must have a corresponding primary key value in another table",
    ],
  },
  {
    question: "Compare RAM and ROM",
    answers: [
      "RAM is volatile, ROM is non-volatile",
      "RAM is used for storing parts of the OS currently in use",
      "ROM is used for storing BIOS of the computer",
    ],
  },
  {
    question: "How do compilers work, 4 stages",
    answers: [
      "Lexical analysis: Comments and whitespace removed, variable names added to a symbol table, code turned into a series of tokens",
      "Syntax analysis: Abstract syntax tree is built from tokens produced in the previous stage, checks the code follows the syntax, generates errors if any tokens break the rules of the language",
      "Code generation: Abstract syntax tree is converted to object code, object code is machine code produced before the final step (linker) is run",
      "Code optimisation: Tweaks the code so it will run as quickly and use as little memory as possible",
    ],
  },
  {
    question: "Requirements of hashing and what they are useful for",
    answers: [
      "Hashes have to be irreversible: Impossible to find the input given only output",
      "They must be deterministic: Same input will always give same output",
      "Hashes must have collision resistance: Reduce number of collisions by making sure all outputs are equally likely",
      "Hashes are useful for searching through hash tables fast",
      "Hashes are also useful for encryption",
        "But not useful for data that needs to be recovered",
    ],
  },{
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
    question:
      "What are the definitions of Class",
    answers: [
      "Template defining methods and attributes used to make objects",
    ],
  },
    {
    question:
      "What are the definitions of Object",
    answers: [
      "Instantiated from class",
    ],
  },
    {
    question:
      "What are the definitions of Attribute",
    answers: [
      "Variable held by an object",
    ],
  },
    {
    question:
      "What are the definitions of Method",
    answers: [
      "Function an object performs",
    ],
  },
    {
    question:
      "What are the definitions of Inheritance",
    answers: [
      "Class inherits the methods and attributes of parent class, the child can have its own",
    ],
  },
        {
    question:
      "What is a D type flip flop",
    answers: [
      "Memory device that is enabled and disabled by a clock signal",
        "Can be edge-triggered, allowing synchronisation with other components",
    ],
  },
            {
    question:
      "How can you make a full adder",
    answers: [
      "By combining together 2 half adders with an OR gate",
        "Half adder is made from a XOR and an AND gate",
    ],
  },
                {
    question:
      "Describe input, output and storage devices and examples",
    answers: [
      "Input devices pass information into a computer system. eg Mouse, Keyboard, Camera, Joystick",
        "Output devices take data in digital form and convert into another format that humans can process such as sound or images eg Printer, Speakers, Headphones, Projector",
        "Storage devices are used for either temporary or permanent storage of data. Can be internal (RAM, SSD, Magnetic hard drive) or external (DVD, USB, memory card)",
    ],
  },
    {
    question:
      "What is the definition of Encapsulation",
    answers: [
      "Private attributes can only be changed with public methods",
    ],
  },
        {
    question:
      "What are some ways of capturing data",
    answers: [
      "OCR: Optical Character Recognition: Automatically reads text by interpreting the shape of the letters. Works better with printed text than handwriting.",
        "OMR: Optical Mark Recognition: Used for multiple choice tests",
    ],
  },
        {
    question:
      "What are the benefits of using a DBMS",
    answers: [
      "Database Management System (DBMS)",
        "Prevents the creation of duplicate primary keys",
        "Enforces validation rules",
        "Provides secure access",
        "Provides encryption",
        "Helps manage multiple users",
    ],
  },
    {
    question:
      "Give an example of a declarative language and a procedural/imperative",
    answers: [
      "Procedural give step by step instructions by laying code out as a series of steps such as iteration and making use of functions. Focus on describing how a program works",
        "Declarative. Describes what a program should do. Example: SQL",
    ],
  },

        {
    question:
      "Open Source vs Closed Source (Proprietary) Software",
    answers: [
      "Proprietay software usually has a fee and open source is likely to be free",
        "Users cannot modify proprietary software whereas they can modify open source",
        "Proprietary is protected by Copyright Design and Patents act, open source code can be copied",
        "Open source software is supported by the community. Proprietary is tested and well built.",
        "Open source has its code public, proprietary has its code hidden.",
    ],
  },
    

        {
    question: "Advantages and disadvantages of assembly language",
    answers: [
        "Uses mnemonics",
        "Uses an assembler to convert to machine code",
        "One-to-one conversion to machine code",
        "Allows direct control of the processor",
      "+++ Assembly language has the same efficiency of execution as machine code due to its one-to-one nature",
      "+++ It can produce very precise, locally optimised and efficient code.",
      "+++ It provides direct access to system-level features without having to go through a software interface",
      "+++ You are in complete control of your program",
      "--- It is machine dependant, and code is very hard - if not impossible - to port",
      "--- Programmers who can write efficient machine code are rare - which is one of the reasons why HLLs were produced in the first place",
        "--- Even in the hands of a talented programmer, code can be tedious to write and very prone to bugs",
        "--- The code can be difficult to understand, therefore it can also be hard to modify and maintain",
    ],
  },
  {
    question: "Explain what is meant by a library and disadvantages and advantages",
    answers: [
      "Library is a section of code written by other programmers containing useful routines like GUI routines, encryption",
        "+++ They save time because no need to rewrite the code",
        "+++ Already tested and the programmer doesn't need to test them themselves",
        "--- May increase size of compiled file as library may contain routines that are never used",
        "--- Not written by the programmer so the programmer may need to spend time familiarising themselves with it",
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
