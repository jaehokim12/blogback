import jwt from 'jsonwebtoken'
import env from '../../config'
import { NextFunction, Request,Response } from "express";


console.log('jwt',jwt)
 const verifyToken = (req:Request, res:Response, next:NextFunction) => {
  let token:string = req.body.token || req.query.token || req.headers["authorization"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    token = token.replace(/^Bearer\s+/, "");
    const decoded = jwt.verify(token, `adfb!23`);
    const decode = jwt.decode(token)
    // req.body = decoded

    console.log('decoded',decoded)
    console.log('decode',decoded)
    console.log('req.body',req.body)
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }

  return next();
};

export default verifyToken