import { Controller, Post } from '@nestjs/common';
import { AppService } from '../service/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('add-to-cart')
  addToCart() {
    return this.appService.sendCartEvent();
  }
}