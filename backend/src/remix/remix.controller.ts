
import { All, Controller, Next, Req, Res } from '@nestjs/common';
import { getServerBuild } from '@virgile/frontend';
import { NextFunction, Request, Response } from 'express';
import {createRequestHandler} from '@remix-run/express';
import { RemixService } from './remix.service';

@Controller()
export class RemixController {
	constructor(private readonly remixService: RemixService) {}
	@All('*')
	async handler(
		@Req() request: Request,
		@Res() response: Response,
		@Next() next: NextFunction
	) {

        return createRequestHandler({
            build: await getServerBuild(), // <= TODO: Nous devons définir le chemin du build de Remix
            getLoadContext:() => ({
				remixService: this.remixService
            }),
        })(request,response, next);
	}
}