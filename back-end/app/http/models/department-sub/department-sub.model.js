const mongoose = require("mongoose");

const DepartmentSubSchema = new mongoose.Schema(
  {
    title: { type: String, ref: "products" },
    parent: { type: mongoose.Types.ObjectId, ref: "departments" },
  },
  { timestamps: true }
);

const DepartmentSubModel = mongoose.model(
  "departmentsSub",
  DepartmentSubSchema
);

module.exports = DepartmentSubModel;
