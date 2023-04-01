const Problem = require("../models/problems");

exports.getAllProblems = async (req, res) => {
  try {
    const problems = await Problem.find().select("-__v");
    res.status(200).json({
      status: "success",
      data: { problems },
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getLessonProblems = async (req, res) => {
  try {
    console.log(req.query);
    const unit = req.query.unit;
    const lesson = req.query.lesson;
    const lessonProblems = await Problem.find({
      $and: [{ unit: unit }, { lesson: lesson }],
    }).select("-__v");
    res.status(200).json({
      status: "success",
      data: lessonProblems,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getSingleProblem = async (req, res) => {
  const problemId = req.params.problemId;

  // Handle 404
  // if (!problem) {...}

  const problem = await Problem.findById(problemId);
  res.status(200).json({
    status: "success",
    data: { problem },
  });
};

exports.createProblem = async (req, res) => {
  try {
    const newProblem = { ...req.body };
    const problem = await Problem.create(newProblem);

    res.status(201).json({
      status: "success",
      data: {
        problem,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "error" });
  }
};

exports.updateProblem = async (req, res) => {
  const problemId = req.params.problemId;

  const problem = await Problem.findByIdAndUpdate(problemId, req.body, {
    new: true,
  });

  // Handle 404
  // if (!problem) {...}

  res.status(200).json({
    status: "success",
    data: {
      problem,
    },
  });
};

exports.deleteProblem = async (req, res) => {
  const problemId = req.params.problemId;

  const problem = await Problem.findByIdAndDelete(problemId);

  // Handle 404
  // if (!problem) {...}

  res.status(204).json({
    status: "success",
    message: "Problem was removed successfully",
  });
};
