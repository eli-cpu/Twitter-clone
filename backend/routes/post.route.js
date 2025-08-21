import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import {
  getAllPosts,
  createPost,
  likeUnlikePost,
  commentOnPost,
  deletePost,
  getLikedPosts,
  getUserPosts,
} from "../controllers/post.controllers.js";

const router = express.Router();

router.get("/all", protectRoute, getAllPosts);
router.get("/following", protectRoute, getAllPosts);
router.get("likes/:id", protectRoute, getLikedPosts);
router.get("/user/:username", protectRoute, getUserPosts);
router.post("/create", protectRoute, createPost);
router.post("/like/:id", protectRoute, likeUnlikePost);
router.post("/comment/:id", protectRoute, commentOnPost);
router.delete("/:id", protectRoute, deletePost);

export default router;
