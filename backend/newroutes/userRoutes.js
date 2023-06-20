const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
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
  processSubArrays,
} = require("../controllers/userController");
// ../Controllers/UserController"
// const pdf = require("./pdfModel");
const router = express.Router();

var multer = require("multer");
// const { default: CheckerSignup } = require("../../easeup/src/CheckerSignup");
var storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "public/files/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});
var upload = multer({ storage: storage });

router.route("/").post(registerUser);
router.route("/adminRegister").post(registerAdmin);
router.route("/checkerRegister").post(registerChecker);
router.post("/login", authUser);
router.post("/adminLogin", authAdmin);
router.post("/checkerLogin", authChecker);

router.post(
  "/listener",
  upload.fields([{ name: "file" }, { name: "resume" }]),

  registerListener
);
router.get("/download/resume/:email", downloadResume);

router.get("/download/project/:email", downloadProject);

router.get("/download/file/:email", downloadFile);
router.post("/listener/login", authListener);
router.route("/").get(protect, allUsers);
router.route("/onlyuser").get(OnlyClients);
router.route("/allClientforAdmin").get(AllClientsforAdmin);
router.route("/onlyintern").get(OnlyIntern);
router.get("/checkerList", CheckerList);
router.route("/allclient/:email").get(AllClients);
router.route("/singleIntern/:email").get(particularIntern);
router.put("/status/update/:email", UpdateStatus);
router.get("/totalintern", TotalIntern);
router.get("/totalClientsnumber", TotalClient);
router.put("/updateAmountPaid/:email", updateAmountPaid);
router.put("/price/:email", price);
router.put("/myClientList/:email", updateInternClientList);
router.get("/totalrevenue", revenue);
router.route("/:monthRevenue").get(MonthBasedRevenue);
router.route("/amount/totalamountpaidclients").get(totalamountPaidClients);
router.delete(
  "/DeleteClientarraySingleEmail/:email/:clientEmail",
  DeleteClientArrayinIntern
);

router.put("/duration/:email/:clientEmail", Duration);

router.put(
  "/approvalbyChecker/:email/:clientEmail/:CheckerEmail",
  approvalbyChecker
);

router.put("/clientarraystatusupdate/:email", UpdateClientArrayStatus);

router.put(
  "/sentpdffiletochecker/:email",
  upload.fields([{ name: "file" }, { name: "resume" }]),
  sendFiletoChecker
);

router.put(
  "/sentprojecttoclient/:email",
  upload.fields([{ name: "file" }, { name: "project" }]),

  sendProjecttoClient
);

router.put(
  "/updateParticularClient/detailsFromClientArray/:name/:email/:clientEmail",
  sentToChecker
);
router.put("/Marked/by/the/checker/:email/:clientEmail/:CheckerEmail", Marked);
router.put("/checkerMainBool/:email/:clientEmail", ChecherBooleanMain);
router.get("/markedInterns/list", MarkedInterns);
router.put("/markedfalse/approvalfalse/:email", MarkasCompleted);
router.route("/Allpaidclients/foradmin").get(AllPaidClients);
router.route("/Allunpaidclients/foradmin/mainlist").get(AllUnPaidClients);
// updateSubarrayIndexofdataAdmin;
router.put(
  "/admin/updateSubarrayIndexofdataAdmin/:email",
  updateSubarrayIndexofdataAdmin
);
// router.get("/TotalRevenueperMonth/:email", TotalRevenueperMonth);
router.get(
  "/TotalRevenueperMonth/:email/:monthIndex",
  TotalRevenueperMonthparams
);
router.get("/TotalRevenueCurrentYear/:email", TotalRevenueCurrentYear);
router.get("/TotalRevenuePERYear/:email", TotalRevenuePERYear);
router.delete("/deletetheuser/:email", DeleteUser);
router.get("/subarray/of/interns", processSubArrays);

module.exports = router;
