import { Injectable, NestMiddleware, HttpStatus  } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { getAuth } from 'firebase-admin/auth';
@Injectable()
export class VerifyTokenMiddleware implements NestMiddleware {
	use(req: Request, res: Response, next: NextFunction) {
		if(req.headers.authorization){
			getAuth().verifyIdToken(req.headers.authorization.replace("Bearer ", "")).then((decodedToken) => {
				next();
			})
			.catch((error) => {
				res.status(HttpStatus.BAD_REQUEST).json({"message": "Error authenticating..."});
			});
		}else{
			res.status(HttpStatus.BAD_REQUEST).json({"message": "Not authorized..."});
		}
	}
}
