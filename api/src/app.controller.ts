import { Controller, Get } from '@nestjs/common';

@Controller('routes')
export class AppController {
  @Get()
  getRoutes() {
    return [
      { title: 'Position One', startPosition: { latitude: 1, longitude: 2 }, endPosition: { latitude: 1, longitude: 2 } },
      { title: 'Position Two', startPosition: { latitude: 3, longitude: 4 }, endPosition: { latitude: 3, longitude: 4 } },
      { title: 'Position Three', startPosition: { latitude: 5, longitude: 6 }, endPosition: { latitude: 5, longitude: 6 } },
      { title: 'Position Four', startPosition: { latitude: 7, longitude: 8 }, endPosition: { latitude: 7, longitude: 8 } },
      { title: 'Position Five', startPosition: { latitude: 9, longitude: 10 }, endPosition: { latitude: 9, longitude: 10 } },
    ];
  }
}
