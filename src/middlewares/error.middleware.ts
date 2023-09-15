import { Error } from "@/protocols/protocol";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export default function errorHandler(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error.code === 404)
    return res.status(httpStatus.NOT_FOUND).send(error.message);

  if (error.code === 409)
    return res.status(httpStatus.CONFLICT).send(error.message);

  if (error.code === 400)
    return res.status(httpStatus.BAD_REQUEST).send(error.message);

  res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
}
