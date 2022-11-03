
import * as bcrypt from 'bcryptjs'
import jsonwebtoken from 'jsonwebtoken'
import { Request,Response } from 'express';
import * as UserService from '../../services/services'
import * as db from '../../database'


export const PostRegister = async (req:Request, res:Response) => {

  try {
    const userExists = await UserService.userService
  }
   catch{
    return res.status(500).send("Error occured. Please try again");
   }
}






    // User.exists({ mail: mail.toLowerCase() });

    // if (userExists) {
    //   return res.status(409).send("E-mail already in use.");
    // }

    // encrypt password
    // const encryptedPassword = await bcrypt.hash(password, 10);

    // create user document and save in database
    // const user = await 

    // db.promisePool.query('userCreateQuery')
    // User.create({
    //   username,
    //   mail: mail.toLowerCase(),
    //   password: encryptedPassword,
    // });

    // create JWT token
//     const token = jwt.sign(
//       {
//         userId: user._id,
//         mail,
//       },
//       process.env.TOKEN_KEY,
//       {
//         expiresIn: "24h",
//       }
//     );

//     res.status(201).json({
//       userDetails: {
//         mail: user.mail,
//         token: token,
//         username: user.username,
//       },
//     });
//   } catch (err) {
//     return res.status(500).send("Error occured. Please try again");
//   }
// };


