/**
 * @module routes/api/comments
 * @description Express router for handling comment-related API endpoints.
 */

 /**
    * GET /
    * Retrieves all comments, sorted by creation date in descending order.
    * @name GET/api/comments
    * @function
    * @async
    * @param {express.Request} req - Express request object.
    * @param {express.Response} res - Express response object.
    * @returns {Object[]} 200 - An array of comment objects.
    * @returns {Object} 500 - Internal server error message.
    */

 /**
    * DELETE /:id
    * Deletes a comment by its ID.
    * @name DELETE/api/comments/:id
    * @function
    * @async
    * @param {express.Request} req - Express request object.
    * @param {express.Response} res - Express response object.
    * @returns {Object} 200 - Success message if comment is deleted.
    * @returns {Object} 404 - Error message if comment not found.
    * @returns {Object} 500 - Internal server error message.
    */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

router.get("/", async (req, res) => {
    try {
        const comments = await Comment.find().sort({ createdAt: -1 });
        res.status(200).json(comments);
    } catch (error) {
        console.error("Error fetching comments:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

//add another comment for deleting a comment
router.delete("/:id", async (req, res) => {
    const commentId = req.params.id;
    try {
        const comment = await Comment.findByIdAndDelete(commentId);
        if (!comment) {
            return res.status(404).json({ message: "Comment not found" });
        }
        res.status(200).json({ message: "Comment deleted successfully" });
    } catch (error) {
        console.error("Error deleting comment:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
module.exports = router;

