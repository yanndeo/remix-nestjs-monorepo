import { Injectable } from '@nestjs/common';

@Injectable()
export class RemixService {
  public readonly getHello = ():string =>{
    return 'Remix + NestJS';
  }
}