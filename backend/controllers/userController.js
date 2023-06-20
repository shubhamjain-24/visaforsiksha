const User = require("../finalModel/userModel");
const generateToken = require("../config/generateToken");
const asyncHandler = require("express-async-handler");
var cron = require("node-cron");
// const moment = require("moment-timezone");

const allUsers = asyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};
  const users = await User.find(keyword);
  // .find({ _id:{$ne:req.user._id} });

  res.send(users);
  // {console.log("blah"+req.user._id)}
});

const OnlyClients = asyncHandler(async (req, res) => {
  const MyData = await User.find({ status: "false" });
  // const users = await User.find({ status: "false" });

  res.status(200).json(MyData);
});

const AllClientsforAdmin = asyncHandler(async (req, res) => {
  const MyData = await User.find({ isClient: true });
  // const users = await User.find({ status: "false" });

  res.status(200).json(MyData);
});

const AllPaidClients = asyncHandler(async (req, res) => {
  try {
    const MyData = await User.find({ IsAmountpaid: true });
    // console.log(MyData); // add this line to log MyData to the console

    res.status(200).json(MyData);
  } catch (error) {
    console.error(error); // add this line to log any errors to the console
    res.status(500).json({ message: "Server Error" });
  }
});

const AllUnPaidClients = asyncHandler(async (req, res) => {
  try {
    const MyData = await User.find({ isClient: true, IsAmountpaid: false });
    // console.log(MyData); // add this line to log MyData to the console

    res.status(200).json(MyData);
  } catch (error) {
    console.error(error); // add this line to log any errors to the console
    res.status(500).json({ message: "Server Error" });
  }
});

const MarkedInterns = asyncHandler(async (req, res) => {
  const MyData = await User.find({ Marked: true });
  // const users = await User.find({ status: "false" });

  res.status(200).json(MyData);
});

const MarkasCompleted = asyncHandler(async (req, res) => {
  try {
    const email = req.params.email;
    const result = await User.findOneAndUpdate(
      { email },
      {
        $set: {
          Marked: false,
          approval: "chosen",
          // DateFirstSubmission: "",
          // approvalDateFinal: "",
        },
      },
      {
        new: true,
      }
    );
    res.status(200).send(result);
  } catch (error) {}
});

const AllClients = asyncHandler(async (req, res) => {
  const email = req.params.email;
  console.log(req.params.email);
  User.findOne({ email }, (error, item) => {
    if (error) {
      res.status(500).send(error);
    } else if (!item) {
      res
        .status(404)
        .send({ message: "Email does not exist or write the email properly" });
    } else {
      res.status(200).send(item);
    }
  });
});

const CheckerList = asyncHandler(async (req, res) => {
  const MyData = await User.find({ checkerSent: true });
  // const users = await User.find({ status: "false" });

  res.status(200).json(MyData);
});

const particularIntern = asyncHandler(async (req, res) => {
  const email = req.params.email;
  console.log(req.params.email);
  User.findOne({ email }, (error, item) => {
    if (error) {
      res.status(500).send(error);
    } else if (!item) {
      res
        .status(404)
        .send({ message: "Email does not exist or write the email properly" });
    } else {
      res.status(200).send(item);
    }
  });
});

const registerAdmin = asyncHandler(async (req, res) => {
  const { name, email, password, phone, isIntern, status, isAdmin } = req.body;

  // if(!name||!email||!password||!phone)
  if (!name || !email || !password || !isAdmin) {
    res.status(400);
    // throw new Error("Please enter all the fields");
  }
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    phone,
    isIntern,
    status,
    isAdmin,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
      phone: user.phone,
      isIntern: user.isIntern,
      isAdmin: user.isAdmin,
      status: user.status,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Fail to create new user");
  }
});

const registerChecker = asyncHandler(async (req, res) => {
  const { name, email, password, phone, isIntern, status, isAdmin, isChecker } =
    req.body;

  // if(!name||!email||!password||!phone)
  if (!name || !email || !password || !isAdmin || !isChecker) {
    res.status(400);
    // throw new Error("Please enter all the fields");
  }
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    phone,
    isIntern,
    status,
    isAdmin,
    isChecker,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
      phone: user.phone,
      isIntern: user.isIntern,
      isAdmin: user.isAdmin,
      status: user.status,
      isChecker: user.isChecker,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Fail to create new user");
  }
});

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, phone, isIntern, status } = req.body;

  // if(!name||!email||!password||!phone)
  if (!name || !email || !password || !isIntern) {
    res.status(400);
    // throw new Error("Please enter all the fields");
  }
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    phone,
    isIntern,
    status,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
      phone: user.phone,
      isIntern: user.isIntern,
      status: user.status,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Fail to create new user");
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
      phone: user.phone,
      isIntern: user.isIntern,
      status: user.status,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

const authAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (
    user &&
    (await user.matchPassword(password)) &&
    (await user.isAdmin) == true
  ) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
      phone: user.phone,
      isIntern: user.isIntern,
      status: user.status,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password or you are not an admin");
  }
});

const authChecker = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (
    user &&
    (await user.matchPassword(password)) &&
    (await user.isChecker) == true
  ) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
      phone: user.phone,
      isIntern: user.isIntern,
      status: user.status,
      isAdmin: user.isAdmin,
      isChecker: user.isChecker,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password or you are not an checker");
  }
});

const registerListener = asyncHandler(async (req, res) => {
  console.log("checking files");
  console.log(req.files);

  const resume =
    req.files && req.files.resume && req.files.resume.length > 0
      ? req.files.resume[0].originalname
      : null;
  const file =
    req.files && req.files.file && req.files.file.length > 0
      ? req.files.file[0].originalname
      : null;

  // const resumePath = req.files.resume[0].path;
  // const filePath = req.files.file[0].path;

  const resumePath =
    req.files.resume && req.files.resume.length > 0
      ? req.files.resume[0].path
      : null;
  const filePath =
    req.files.file && req.files.file.length > 0 ? req.files.file[0].path : null;

  console.log({ resume, file, files: req.files });

  const {
    name,
    email,
    password,
    college,
    course,
    
    work,
    city,
    tenth,
    twelth,
    bachelor,
    specialization,
    internship,
    social,
    extra,
    other,
    fund,
    careergoal,
    familybg,
    anythingelse,
    consultancy,
    coupon,
    country,
    phone,
    hear,
    selectedValues,
    isClient,
  } = req.body;

  if (
    !name ||
    !email ||
    !password ||
    !tenth ||
    !twelth ||
    !bachelor ||
    !specialization ||
    !college ||
    !course ||
    !country ||
    !selectedValues
  ) {
    res.status(400);
    // .json({
    //   name: !name,
    //   email: !email,
    //   password: !password,
    //   phone: !phone,
    //   course: !course,
    //   college: !college,
    //   age: !age,
    //   tenth: !tenth,
    //   city: !city,
    //   twelth: !twelth,
    //   bachelor: !bachelor,
    //   specialization: !specialization,
    //   college: !college,
    //   course: !course,
    //   country: !country,
    //   work: !work,
    //   internship: !internship,
    //   social: !social,
    //   extra: !extra,
    //   fund: !fund,
    //   careergoal: !careergoal,
    //   familybg: !familybg,
    //   other: !other,
    //   anythingelse: !anythingelse,
    //   consultancy: !consultancy,
    //   coupon: !coupon,
    //   hear: !hear,
    //   resume: !resume,
    //   file: !file,
    //   selectedValues: !selectedValues,
    // });
    // throw new Error("Please enter all the fields");
  }

  const listenerExist = await User.findOne({ email });
  if (listenerExist) {
    if (listenerExist) {
      res.status(400);
      throw new Error("User already exists");
    }
  }
  console.log({
    resume1:
      req.files && req.files.length > 0 ? req.files[1].originalname : null,
    file1: req.files && req.files.length > 0 ? req.files[0].originalname : null,

    resume,
    file,
  });
  const listener = await User.create({
    resume,
    resumePath,
    filePath,
    file,
    name,
    email,
    password,
    phone,
    course,
    college,
    
    tenth,
    city,
    twelth,
    bachelor,
    specialization,
    country,
    work,
    internship,
    social,
    extra,
    fund,
    careergoal,
    familybg,
    other,
    anythingelse,
    consultancy,
    coupon,
    hear,
    // resume,
    // file,
    isClient,
    selectedValues,
  });
  if (listener) {
    res.status(201).json({
      _id: listener._id,
      email: listener.email,
      password: listener.password,
      phone: listener.phone,
      course: listener.course,
      college: listener.college,
    
      tenth: listener.tenth,
      city: listener.city,
      twelth: listener.twelth,
      bachelor: listener.bachelor,
      specialization: listener.specialization,
      college: listener.college,
      course: listener.course,
      country: listener.country,
      work: listener.work,
      internship: listener.internship,
      social: listener.social,
      extra: listener.extra,
      fund: listener.fund,
      careergoal: listener.careergoal,
      familybg: listener.familybg,
      other: listener.other,
      anythingelse: listener.anythingelse,
      consultancy: listener.consultancy,
      coupon: listener.coupon,
      hear: listener.hear,
      resume: listener.resume,
      file: listener.file,
      selectedValues: listener.selectedValues,
      isClient: listener.isClient,
      token: generateToken(listener._id),
    });
  } else {
    res.status(400);
    throw new Error("Fail to create new user");
  }
});
// var job = new CronJob("0 0 0 * * *", function () {
//   //will run every day at 12:00 AM
// });

// var j=cron.schedule("* * * * *", () => {
//   console.log("running a task every minute");
// });

// "/updateParticularClient/detailsFromClientArray/:email/:clientEmail",/

const sentToChecker = asyncHandler(async (req, res) => {
  try {
    const email = req.params.email;
    const name = req.params.name;
    const Clientemail = req.params.clientEmail;

    console.log("client in backend line 393 UserController", Clientemail);

    const result = await User.findOneAndUpdate(
      { email },

      {
        $inc: { "myClientsArray.$[elem].revision": 1 },

        $set: {
          checkerSent: true,
          clientEmail: Clientemail,
          approval: "null",
          "myClientsArray.$[elem].emailofintern": email,
          "myClientsArray.$[elem].nameofintern": name,
          "myClientsArray.$[elem].duration": "Calculating",
        },
      },

      {
        arrayFilters: [{ "elem.email": Clientemail }],

        new: true,
      }
    );

    res.send(result);
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
});

const ChecherBooleanMain = asyncHandler(async (req, res) => {
  // const checkerSent = req.body.checkerSent;

  try {
    const email = req.params.email;
    const Clientemail = req.params.clientEmail;
    let bool = new Array();
    bool = await User.find({ email });
    const a = bool[0].checkerSentBoolean;
    console.log(bool[0].checkerSentBoolean);
    console.log(a);
    if (a == true) {
      const currentDate = new Date();
      const options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        timeZone: "Asia/Kolkata",
      };
      const dateString = currentDate.toLocaleDateString("en-US", options);
      console.log("dateString", dateString);
      const timezoneOffsetInMs = new Date().getTimezoneOffset() * 60 * 1000; // Convert to milliseconds
      const firstDate = new Date(Date.now() - timezoneOffsetInMs);
      console.log("firstDate", firstDate);

      // const currentDate = new Date();
      // const timezoneOffsetInMs = new Date().getTimezoneOffset() * 60 * 1000; // Convert to milliseconds
      // const currentDate = new Date(Date.now() - timezoneOffsetInMs);

      // const moment = require("moment-timezone");

      // const timezoneOffsetInMs = new Date().getTimezoneOffset() * 60 * 1000; // Convert to milliseconds
      // const currentDate = moment(Date.now() - timezoneOffsetInMs);

      // const options = {
      //   year: "numeric",
      //   month: "2-digit",
      //   day: "2-digit",
      // };
      // const finaldate = currentDate.tz("Asia/Kolkata").format("YYYY-MM-DD");

      // console.log(currentDate.tz("Asia/Kolkata").format("YYYY-MM-DD"));
      // console.log("finalDate: ", finaldate);

      // const dateString = currentDate.toLocaleDateString(
      //   "Asia/Kolkata",
      //   options
      // );
      console.log(dateString);
      console.log(currentDate);

      // const now = new Date(); // get current time
      // const seconds = Math.floor(now.getTime() / 1000);

      // const minutes = now.getMinutes();
      // console.log(minutes);

      const result = await User.findOneAndUpdate(
        { email },

        {
          // $set: { checkerSent: true },
          $set: {
            "myClientsArray.$[elem].FirstSubmission": firstDate,
            checkerSentBoolean: false,
            clientEmail: Clientemail,
            DateFirstSubmission: firstDate,
          },
          // $set: {
          //   checkerSentBoolean: false,
          // },
        },
        // {
        //   $set: { "myClientsArray.$[elem].duration": diffDays },
        // },

        {
          arrayFilters: [{ "elem.email": Clientemail }],

          new: true,
        }
      );
      // const dateString = "1970-01-20T10:47:45.892Z";
      // const date = new Date(bool[0].myClientsArray[0].FirstSubmission);
      // const f = date.getMinutes();
      // console.log("f", f);
      // console.log(bool[0].myClientsArray[0].FirstSubmission);
      res.send(result);
    }

    console.log("client in backend line 393 UserController", Clientemail);
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
});

const approvalbyChecker = asyncHandler(async (req, res) => {
  try {
    const email = req.params.email;
    const Clientemail = req.params.clientEmail;
    const currentDate = new Date();
    const Correcetions = req.body.Corrections;
    const CheckerEmail = req.params.CheckerEmail;
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      timeZone: "Asia/Kolkata",
    };
    const dateString = currentDate.toLocaleDateString("en-US", options);
    console.log(dateString);
    const timezoneOffsetInMs = new Date().getTimezoneOffset() * 60 * 1000; // Convert to milliseconds
    const approvalDate = new Date(Date.now() - timezoneOffsetInMs);
    console.log(approvalDate);
    // const firstSubDate = await User.find({ email });
    // const approval = firstSubDate[0].approval;
    // const date1 = new Date(firstSubDate[0].myClientsArray[0].FirstSubmission);
    // const date2 = new Date(dateString);
    // const diffInMs = Math.abs(date2 - date1);

    // Convert milliseconds to days
    // const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
    const result = await User.findOneAndUpdate(
      { email },

      {
        $set: {
          approval: "true",
          checkerSent: false,
          checkerSentBoolean: true,
          Corrections: Correcetions,
          approvalDateFinal: approvalDate,

          // DateFirstSubmission: dateString,
          // "myClientsArray.$[elem].FirstSubmission": dateString,
          "myClientsArray.$[elem].approvalDate": approvalDate,
          "myClientsArray.$[elem].completion": "Completed",
          "myClientsArray.$[elem].CheckerEmail": CheckerEmail,
        },
      },
      {
        arrayFilters: [{ "elem.email": Clientemail }],

        new: true,
      }
    );
    res.send(result);
  } catch (error) {
    console.log(error);
  }
});

// const approvalnull = asyncHandler(async (req, res) => {
//   try {
//     const email = req.params.email;

//     const result = await User.findOneAndUpdate(
//       { email },

//       {
//         $set: {
//           approval: "null",
//           checkerSent: false,
//           checkerSentBoolean: true,
//           Corrections: Correcetions,
//           approvalDateFinal: dateString,
//           // DateFirstSubmission: dateString,
//           // "myClientsArray.$[elem].FirstSubmission": dateString,
//           "myClientsArray.$[elem].approvalDate": dateString,
//           "myClientsArray.$[elem].completion": "Completed",
//         },
//       },
//       {
//         arrayFilters: [{ "elem.email": Clientemail }],

//         new: true,
//       }
//     );
//     res.send(result);
//   } catch (error) {
//     console.log(error);
//   }
// });

const Marked = asyncHandler(async (req, res) => {
  try {
    const email = req.params.email;
    const Clientemail = req.params.clientEmail;
    const CheckerEmail = req.params.CheckerEmail;
    const Corrections = req.body.Corrections;

    const result = await User.findOneAndUpdate(
      { email },

      {
        $set: {
          Marked: true,
          checkerSent: false,
          checkerSentBoolean: false,
          approval: "false",
          Corrections: Corrections,
          "myClientsArray.$[elem].CheckerEmail": CheckerEmail,
        },
      },
      {
        arrayFilters: [{ "elem.email": Clientemail }],

        new: true,
      }
    );
    res.send(result);
  } catch (error) {
    console.log(error);
  }
});

const Duration = asyncHandler(async (req, res) => {
  try {
    const email = req.params.email;
    const Clientemail = req.params.clientEmail;

    let bool = new Array();
    bool = await User.find({ email });
    console.log(bool);
    console.log("bool", bool[0].DateFirstSubmission);

    const firstSubmissionDate = new Date(bool[0].DateFirstSubmission);
    console.log("k", firstSubmissionDate);
    // const approvalDate = new Date();

    const timezoneOffsetInMs = new Date().getTimezoneOffset() * 60 * 1000; // Convert to milliseconds
    const approvalDate = new Date(Date.now() - timezoneOffsetInMs);
    // const approvalDate = new Date();
    console.log("a", approvalDate);

    // Calculate the difference in milliseconds
    const diffInMs = Math.abs(approvalDate - firstSubmissionDate);

    // Convert milliseconds to days
    const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

    console.log(diffInDays); // Output: 0
    const result = await User.findOneAndUpdate(
      { email },

      {
        $set: {
          "myClientsArray.$[elem].duration": diffInDays,
        },
      },
      {
        arrayFilters: [{ "elem.email": Clientemail }],

        new: true,
      }
    );
    res.send(result);
  } catch (error) {
    console.log(error);
  }
});

//first

const sendFiletoChecker = asyncHandler(async (req, res) => {
  const file =
    req.files && req.files.file.length > 0 ? req.files.file[0].path : null;

  const filePath = req.files.file[0].path;

  // console.log({ resume, file, files: req.files });

  try {
    const email = req.params.email;

    const result = await User.findOneAndUpdate(
      { email },
      {
        $set: {
          filePath: file,
        },
      },
      {
        new: true,
      }
    );
    res.send(result);
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
});

const sendProjecttoClient = asyncHandler(async (req, res) => {
  const project =
    req.files && req.files.project.length > 0
      ? req.files.project[0].path
      : null;

  const projectPath = req.files.project[0].path;

  // console.log({ resume, file, files: req.files });

  try {
    const email = req.params.email;

    const result = await User.findOneAndUpdate(
      { email },
      {
        $set: {
          project: projectPath,
          projectPath: projectPath,
          flag: true,
          approval: "null",
          clientSideDisplay: "send",
        },
      },
      {
        new: true,
      }
    );
    res.send(result);
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
});

const authListener = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const listener = await User.findOne({ email });
  if (listener && (await listener.matchPassword(password))) {
    res.json({
      _id: listener._id,
      name: listener.name,
      email: listener.email,
      password: listener.password,
      phone: listener.phone,
      course: listener.course,
      college: listener.college,

      token: generateToken(listener._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

var monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const UpdateStatus = asyncHandler(async (req, res) => {
  try {
    const email = req.params.email;
    const status = req.body.status;
    const internName = req.body.internName;
    const internEmail = req.body.internEmail;

    var date = new Date();

    const result = await User.findOneAndUpdate(
      { email },
      {
        $set: {
          status: status,
          internName: internName,
          internEmail: internEmail,
          clientSideDisplay: "chosen",
          taskMonth: monthNames[date.getMonth()],
        },
      },

      { new: true }
    );
    res.send(result);
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
});

const downloadResume = asyncHandler(async (req, res) => {
  try {
    const email = req.params.email;
    const listener = await User.findOne({ email });
    res.download(listener.resumePath);
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
});

const downloadProject = asyncHandler(async (req, res) => {
  try {
    const email = req.params.email;
    const listener = await User.findOne({ email });
    res.download(listener.projectPath);
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
});

const downloadFile = asyncHandler(async (req, res) => {
  try {
    const email = req.params.email;
    const listener = await User.findOne({ email });
    res.download(listener.filePath);
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
});

const updateAmountPaid = asyncHandler(async (req, res) => {
  try {
    const email = req.params.email;
    const IsAmountpaid = req.body.IsAmountpaid;
    var date = new Date();
    const result = await User.findOneAndUpdate(
      { email },
      {
        $set: {
          IsAmountpaid: IsAmountpaid,
          monthRevenue: monthNames[date.getMonth()],
        },
      },
      { new: true }
    );
    res.send(result);
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
});

const DeleteClientArrayinIntern = asyncHandler(async (req, res) => {
  try {
    const email = req.params.email;
    const Clientemail = req.params.clientEmail;
    // const myClientsArray = req.body.myClientsArray;
    console.log("client in backend line 435 UserController", Clientemail);
    const result = await User.findOneAndUpdate(
      { email },

      { $pull: { myClientsArray: { email: Clientemail } } },

      { new: true }
    );
    res.send(result);
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
});

const UpdateClientArrayStatus = asyncHandler(async (req, res) => {
  try {
    const email = req.params.email;

    const result = await User.findOneAndUpdate(
      { email },
      {
        $set: {
          status: false,
        },
      },

      { new: true }
    );
    res.send(result);
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
});

// app.get("/orders/:id/status/pending", (req, res) => {
//   const idToFilter = parseInt(req.params.id); // Parse ID parameter as an integer
//   const filteredOrders = orders.filter(
//     (order) => order.id === idToFilter && order.status === "pending"
//   );
//   res.json(filteredOrders);
// });

const updateInternClientList = asyncHandler(async (req, res) => {
  try {
    const email = req.params.email;
    const newEmail = req.body.myClientsArray;
    const result = await User.findOneAndUpdate(
      { email },
      {
        $push: {
          myClientsArray: newEmail,
        },
      },
      { new: true }
    );
    res.send(result);
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
});

const price = asyncHandler(async (req, res) => {
  try {
    const email = req.params.email;
    const price = req.body.price;
    const result = await User.findOneAndUpdate(
      { email },
      {
        $set: {
          price: price,
        },
      },
      { new: false }
    );
    res.send(result);
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
});

const TotalIntern = asyncHandler(async (req, res) => {
  const count = await User.countDocuments({ isIntern: true });
  // res.send(`The number of interns  is: ${count}`);
  res.json(count).status(200);
});

const OnlyIntern = asyncHandler(async (req, res) => {
  const result = await User.find({ isIntern: true });
  res.json(result).status(200);
});

const TotalClient = asyncHandler(async (req, res) => {
  const count = await User.countDocuments({ isIntern: false, isAdmin: false });
  // res.send(`The number of Clients  is: ${count}`);
  res.json(count).status(200);
});

function convertToNumber(price) {
  return Number(price.replace(/[^0-9.-]+/g, ""));
}
const revenue = asyncHandler(async (req, res) => {
  const money = await User.find({ isIntern: false });
  let total = 0;
  money.forEach((product) => {
    total += convertToNumber(product.price);
  });
  // res.send(`The total price is: ${total}`);
  res.json(total);
});

const MonthBasedRevenue = asyncHandler(async (req, res) => {
  const month = req.params.monthRevenue;
  console.log(month);

  const money = await User.find({ monthRevenue: month });
  let total = 0;
  money.forEach((product) => {
    total += convertToNumber(product.price);
  });
  res.json(total);
});

const totalamountPaidClients = asyncHandler(async (req, res) => {
  const ispaid = await User.countDocuments({ IsAmountpaid: true });
  res.json(ispaid);
});

const updateSubarrayIndexofdataAdmin = async (req, res) => {
  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const monthIndex = currentMonth - 1;

  const { price } = req.body;
  try {
    const doc = await User.findOneAndUpdate(
      { email: req.params.email },
      { $inc: { [`data.${new Date().getFullYear()}.${monthIndex}`]: price } },
      { new: true }
    );

    res.status(200).json(doc);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating subarray index." });
  }
};

const TotalRevenueperMonth = async (req, res) => {
  const { monthIndex } = req.body;
  try {
    const user = await User.findOne({ email: req.params.email });
    const subarray = user.data[new Date().getFullYear()][monthIndex];

    // res.status(200).json({ MyData: subarray });
    res.json(subarray);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating subarray index." });
  }
};
const TotalRevenueperMonthparams = async (req, res) => {
  try {
    const monthIndex = req.params.monthIndex;

    const user = await User.findOne({ email: req.params.email });
    const subarray = user.data[new Date().getFullYear()][monthIndex];

    // res.status(200).json({ MyData: subarray });
    res.json(subarray);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating subarray index." });
  }
};

const TotalRevenueCurrentYear = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    const subarray = user.data[new Date().getFullYear()];
    const myData = subarray.reduce((acc, curr) => acc + curr, 0);
    res.status(200).json(myData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating subarray index." });
  }
};

const TotalRevenuePERYear = async (req, res) => {
  const monthIndex = req.body.monthIndex;
  try {
    const user = await User.findOne({ email: req.params.email });
    const subarray = user.data[monthIndex];
    const myData = subarray.reduce((acc, curr) => acc + curr, 0);
    res.status(200).json({ myData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating subarray index." });
  }
};

const DeleteUser = asyncHandler(async (req, res) => {
  const email = req.params.email;
  try {
    const result = await User.deleteOne({ email: email }); // Delete the record with the specified email using the user model
    if (result.deletedCount === 1) {
      res.send(`User with email ${email} has been deleted`);
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    res.status(500).send("Error deleting user");
  }
});
const processSubArrays = asyncHandler(async (req, res) => {
  try {
    const documents = await User.find({ isIntern: true }).exec();
    // const documents = await User.find({ isIntern: true }).exec();

    let combinedArray = [];
    for (const document of documents) {
      const mainArray = document.myClientsArray;

      let tempArray = [];

      for (const subArray of mainArray) {
        tempArray = tempArray.concat(subArray);
      }

      combinedArray = combinedArray.concat(tempArray);

      // document.combinedArray = tempArray;
      // await document.save();
    }

    // document.combinedArray = combinedArray;
    // await document.save();

    res.json(combinedArray);
  } catch (error) {
    throw error;
  }
});

module.exports = {
  processSubArrays,
  registerUser,
  authUser,
  registerListener,
  authListener,
  allUsers,
  UpdateStatus,
  OnlyClients,
  AllClients,
  TotalIntern,
  TotalClient,
  updateAmountPaid,
  price,
  revenue,
  MonthBasedRevenue,
  totalamountPaidClients,
  updateInternClientList,
  particularIntern,
  DeleteClientArrayinIntern,
  downloadResume,
  downloadFile,
  UpdateClientArrayStatus,
  authAdmin,
  registerAdmin,
  sentToChecker,
  sendFiletoChecker,
  registerChecker,
  authChecker,
  ChecherBooleanMain,
  approvalbyChecker,
  Duration,
  CheckerList,
  Marked,
  MarkedInterns,
  MarkasCompleted,
  OnlyIntern,
  AllClientsforAdmin,
  AllPaidClients,
  AllUnPaidClients,
  updateSubarrayIndexofdataAdmin,
  TotalRevenueCurrentYear,
  TotalRevenueperMonth,
  TotalRevenuePERYear,
  TotalRevenueperMonthparams,
  sendProjecttoClient,
  downloadProject,
  DeleteUser,
};
