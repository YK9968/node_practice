import { getAllStudents, getStudentById } from '../services/students.js';
import createHttpError from 'http-errors';

export const getStudentsController = async (req, res) => {
  const students = await getAllStudents();

  res.status(200).json({
    data: students,
  });
};

export const getStudentByIdController = async (req, res, next) => {
  const { studentId } = req.params;
  const student = await getStudentById(studentId);
  if (!student) {
    next(createHttpError(404, 'Student not found'));
    return;
  }
  res.status(200).json({
    data: student,
  });
};
