import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('KAFKA_SERVICE') private readonly kafkaClient: ClientKafka) {}

  async sendCartEvent() {
    const payload = {
      productId: 'sku-123',
      addedAt: new Date().toISOString()
    };
    return this.kafkaClient.emit('cart.added', { value: payload });
  }
}