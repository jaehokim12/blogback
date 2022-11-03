
// import jsonwebtoken from 'jsonwebtoken'
// import { Request,Response ,NextFunction} from 'express';
// const jwt = jsonwebtoken
// const config = process.env;

// export const verifyToken = (req:Request, res:Response, next:NextFunction) => {
//   let token = req.body.token || req.query.token || req.headers["authorization"];
  
//   if (!token) {
//     return res.status(403).send("A token is required for authentication");
//   }
//   try {
    
//     token = token.replace(/^Bearer\s+/, "");
//     const decoded = jwt.verify(token, config.TOKEN_KEY);
//     req.user = decoded;
//   } catch (err) {
//     return res.status(401).send("Invalid Token");
//   }

//   return next();
// };


