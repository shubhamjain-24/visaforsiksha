const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  accessChat,
  fetchChats,
  creatGroupChat,
  renameGroup,
  addToGroup,
  removeFromGroup,
} = require("../controllers/chatControllers");

router.route("/").post(protect, accessChat);
router.route("/").get(protect, fetchChats);
router.route("/group").post(protect, creatGroupChat);
router.route("/rename").put(protect, renameGroup);
router.route("/groupremove").put(protect, removeFromGroup);
router.route("/groupadd").put(protect, addToGroup);

// router.route("/").post(accessChat);
// router.route("/").get(fetchChats);
// router.route("/group").post(creatGroupChat);
// router.route("/rename").put(renameGroup);
// router.route("/groupremove").put(removeFromGroup);
// router.route("/groupadd").put(addToGroup);

module.exports = router;
